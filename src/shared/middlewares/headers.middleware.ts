import { NextFunction, Request, Response } from "express";
import { NotAcceptableError } from "../errors/NotAcceptableError.error";
import { formatErrorResponse } from "../utils/formatErrorResponse.utils";
import { UnsupportedMediaTypeError } from "@shared/errors/UnsupportedMediaTypeError.error";
import logger from "@shared/log/logger";

export const validateAcceptHeader = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accept = req.headers.accept;
  const contentType = req.headers["content-type"];
  if (accept && contentType) {
    if (!(accept === "application/json")) {
      logger.error(
        `Middleware :: method :: ${validateAcceptHeader.name} :: error :: accept header :: ${accept}`
      );
      const error = new NotAcceptableError("Canot honor Accept type specified");
      const errorResponse = formatErrorResponse(error);
      res.status(error.statusCode as number).json(errorResponse);
    } else if (!(contentType === "application/json")) {
      logger.error(
        `Middleware :: method :: ${validateAcceptHeader.name} :: error :: content-type header :: ${contentType}`
      );
      const error = new UnsupportedMediaTypeError(
        "Invalid content-type specified"
      );
      const errorResponse = formatErrorResponse(error);
      res.status(error.statusCode as number).json(errorResponse);
    } else {
      next();
    }
  } else {
    logger.error(
      `Middleware :: method :: ${validateAcceptHeader.name} :: error :: Missing Headers :: Accept : ${accept} :: Content-Type : ${contentType}`
    );
    const error = new NotAcceptableError("Missing Headers");
    const errorResponse = formatErrorResponse(error);
    res.status(error.statusCode as number).json(errorResponse);
  }
};
