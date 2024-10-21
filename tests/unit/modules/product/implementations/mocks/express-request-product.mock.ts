import { Request } from "express";

export const findAllRequestMock = {
  body: {
    test: "test",
  },
  query: {
    limit: "1",
    page: "1",
  },
} as unknown as Request;
