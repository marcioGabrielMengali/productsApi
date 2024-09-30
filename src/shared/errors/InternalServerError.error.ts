import { EHttpErrorLink } from "../enums/EHttpErrorLink.enum";
import { EHttpErrorMessage } from "../enums/EHttpErrorMessage.enum";
import { EHttpStatusCode } from "../enums/EHttpStatusCode.enum";

export class InternalServerError extends Error {
  statusCode?: number;
  detail: string;
  type?: string;
  title?: string;
  constructor(message: string) {
    super(message);
    this.statusCode = EHttpStatusCode.INTERNAL_SERVER_ERROR;
    this.title = EHttpErrorMessage.INTERNAL_SERVER_ERROR;
    this.type = EHttpErrorLink.INTERNAL_SERVER_ERROR;
    this.detail = message;
  }
}
