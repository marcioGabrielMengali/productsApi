import { Request, Response } from "express";
import { EHttpStatusCode } from "../enums/EHttpStatusCode.enum";
import { ValidatorError } from "../errors/Validator.error";
import { formatErrorResponse } from "../utils/formatErrorResponse.utils";

function formatResponse() {
    return function (target: any, propertKey: any, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value
        descriptor.value = async function (req: Request, res: Response, ...args: any[]) {
            try {
                const result = await originalMethod.apply(this, [req, res, ...args])
                const response = {
                    statusCode: EHttpStatusCode.OK,
                    data: result
                }
                res.status(EHttpStatusCode.OK).json(response)
            } catch (error) {
                if (error instanceof ValidatorError) {
                    res.status(error.statusCode as number).json(formatErrorResponse(error))
                }
            }

        }
        return descriptor
    }
}

export { formatResponse }