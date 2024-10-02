import { EHttpErrorLink } from "@shared/enums/EHttpErrorLink.enum";
import { EHttpErrorMessage } from "@shared/enums/EHttpErrorMessage.enum";
import { EHttpStatusCode } from "@shared/enums/EHttpStatusCode.enum";

export class UnsupportedMediaTypeError extends Error {
  statusCode?: number;
  detail: string;
  type?: string;
  title?: string;
  constructor(message: string) {
    super(message);
    this.statusCode = EHttpStatusCode.UNSUPPORTED_MEDIA_TYPE;
    this.title = EHttpErrorMessage.UNSUPPORTED_MEDIA_TYPE;
    this.type = EHttpErrorLink.UNSUPPORTED_MEDIA_TYPE;
    this.detail = message;
  }
}
