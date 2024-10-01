import { EHttpErrorLink } from "../enums/EHttpErrorLink.enum";
import { EHttpErrorMessage } from "../enums/EHttpErrorMessage.enum";
import { EHttpStatusCode } from "../enums/EHttpStatusCode.enum";

export class ValidatorError extends Error {
  statusCode?: number;
  detail: object[];
  type?: string;
  title?: string;
  constructor(message: string, errors: object[]) {
    super(message);
    this.statusCode = EHttpStatusCode.BAD_REQUEST;
    this.title = EHttpErrorMessage.BAD_REQUEST;
    this.type = EHttpErrorLink.BAD_REQUEST;
    this.detail = errors;
  }
}
