import { EHttpErrorLink } from "../enums/EHttpErrorLink.enum"
import { EHttpErrorMessage } from "../enums/EHttpErrorMessage.enum"
import { EHttpStatusCode } from "../enums/EHttpStatusCode.enum"

export class NotAcceptableError extends Error {
    statusCode?: number
    detail: string
    type?: string
    title?: string

    constructor(message: string) {
        super(message)
        this.statusCode = EHttpStatusCode.NOT_ACCEPTABLE
        this.title = EHttpErrorMessage.NOT_ACCEPTABLE
        this.type = EHttpErrorLink.NOT_ACCEPTABLE
        this.detail = message
    }
}