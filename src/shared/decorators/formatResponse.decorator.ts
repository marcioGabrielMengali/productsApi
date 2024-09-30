import { Request, Response } from "express";
import { EHttpStatusCode } from "../enums/EHttpStatusCode.enum";
import { ValidatorError } from "../errors/Validator.error";
import { formatErrorResponse } from "../utils/formatErrorResponse.utils";
import logger from "../log/logger";

function formatResponse() {
  return function (
    target: any,
    propertKey: any,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (
      req: Request,
      res: Response,
      ...args: any[]
    ) {
      logger.info(`Decorator :: ${formatResponse.name} `);
      try {
        const result = await originalMethod.apply(this, [req, res, ...args]);
        const response = {
          statusCode: EHttpStatusCode.OK,
          data: result,
        };
        res.status(EHttpStatusCode.OK).json(response);
      } catch (error) {
        const errorType = error as unknown as ValidatorError;
        logger.error(
          `Decorator :: ${formatResponse.name} :: error :: ${JSON.stringify(
            error
          )}`
        );
        res
          .status(errorType.statusCode as number)
          .json(formatErrorResponse(error));
      }
    };
    return descriptor;
  };
}

export { formatResponse };
