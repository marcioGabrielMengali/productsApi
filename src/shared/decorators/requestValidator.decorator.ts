import { Request, Response } from "express";
import { z } from "zod";
import { ValidatorError } from "../errors/Validator.error";
import { EValidationRequestType } from "../enums/EValidationRequestType.enum";
import { ERequestValidationMessage } from "../enums/ERequestValidationMessage.enum";
import logger from "../log/logger";
import { formatErrorResponse } from "../utils/formatErrorResponse.utils";

const getValues = (
  req: Request,
  typeValidation: EValidationRequestType
): { values: object; errorMessage: string } => {
  const result = { values: {}, errorMessage: "" };
  switch (typeValidation) {
    case EValidationRequestType.QUERY_PARAMETERS:
      result.values = req.query;
      result.errorMessage = ERequestValidationMessage.QUERY_PARAMETERS;
      return result;
    default:
      result.values = {};
      result.errorMessage = "";
      return result;
  }
};

function requestValidator(
  schema: z.ZodSchema,
  typeVatidation: EValidationRequestType
) {
  return function (
    target: any,
    propertyKey: any,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (
      req: Request,
      res: Response,
      ...args: any[]
    ) {
      logger.info(`Decorator :: ${requestValidator.name}`);
      const { values, errorMessage } = getValues(req, typeVatidation);
      try {
        schema.parse(values);
        originalMethod.call(this, req, res, args);
      } catch (error) {
        logger.error(
          `Decorator :: ${requestValidator.name} :: error :: ${JSON.stringify(
            error
          )}`
        );
        const zodErrors: z.ZodError = error as z.ZodError;
        const errors = [];
        for (const zodError of zodErrors.errors) {
          errors.push({
            field: zodError.path[0],
            error: zodError.message,
          });
        }
        const validationError = new ValidatorError(errorMessage, errors);
        res
          .status(validationError.statusCode as number)
          .json(formatErrorResponse(validationError));
      }
    };
    return descriptor;
  };
}

export { requestValidator };
