import { NextFunction, Request, Response } from "express";
import { NotAcceptableError } from "../errors/NotAcceptable.error";
import { formatErrorResponse } from "../utils/formatErrorResponse.utils";

export const validateAcceptHeader = (req: Request, res: Response, next: NextFunction) => {
    const accept = req.headers.accept
    if (accept) {
        if (accept === 'application/json') {
            next()
        } else {
            const error = new NotAcceptableError('Accept Header Should be Type application/json')
            const errorResponse = formatErrorResponse(error)
            res.status(error.statusCode as number).json(errorResponse)
        }
    } else {
        const error = new NotAcceptableError('Missing Accept Header')
        const errorResponse = formatErrorResponse(error)
        res.status(error.statusCode as number).json(errorResponse)
    }
}