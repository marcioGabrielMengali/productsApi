import { Request, Response } from "express";
import { HttpStatusCode } from "../enums/HttpStatusCode.enum";

function formatResponse() {
    return function (target: any, propertKey: any, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value
        descriptor.value = async function (req: Request, res: Response, ...args: any[]) {
            const result = await originalMethod.apply(this, [req, res, ...args])
            let response = {
                statusCode: HttpStatusCode.OK,
                data: result
            }
            res.json(response)
        }
        return descriptor
    }
}

export { formatResponse }