import { EHttpErrorMessage } from "../enums/EHttpErrorMessage.enum"
import { EHttpStatusCode } from "../enums/EHttpStatusCode.enum"

export class NotAcceptableError extends Error {
    statusCode?: number
    detail: string
    type?: string
    title?: string

    constructor(message: string) {
        super(message)
        this.statusCode = EHttpStatusCode.NOTACCEPTABLE
        this.title = EHttpErrorMessage.NOTACCEPTABLE
        this.type = 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/406'
        this.detail = message
    }
}