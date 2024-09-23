import { EHttpErrorMessage } from "../enums/EHttpErrorMessage.enum"
import { EHttpStatusCode } from "../enums/EHttpStatusCode.enum"

export class ValidatorError extends Error {
    statusCode?: number
    detail: Object[]
    type?: string
    title?: string
    constructor(message: string, errors: Object[]) {
        super(message)
        this.statusCode = EHttpStatusCode.BAD_REQUEST
        this.title = EHttpErrorMessage.BAD_REQUEST
        this.type = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400'
        this.detail = errors
    }
}