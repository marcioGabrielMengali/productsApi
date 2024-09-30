import { IErrorResponse } from "../interfaces/IErrorResponse.interface"

export const formatErrorResponse = (error: any): IErrorResponse => {
    return {
        type: error.type,
        title: error.title,
        statusCode: error.statusCode,
        detail: error.detail,
        message: error.message
    }
}