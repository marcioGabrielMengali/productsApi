import { Request, Response } from "express";
import { EHttpStatusCode } from "../enums/HttpStatusCode.enum";

function formatResponse() {
    return function (target: any, propertKey: any, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value
        descriptor.value = async function (req: Request, res: Response, ...args: any[]) {
            const result = await originalMethod.apply(this, [req, res, ...args])
            let response = {
                statusCode: EHttpStatusCode.OK,
                data: result
            }
            res.status(EHttpStatusCode.OK).json(response)
        }
        return descriptor
    }
}

export { formatResponse }