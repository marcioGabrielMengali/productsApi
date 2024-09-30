import { z } from "zod";

export const getProductsValidatorQueryParametersSchema: z.ZodSchema = z.object({
  limit: z.preprocess((val) => {
    if (typeof val === "string") {
      const parsedVal = parseInt(val);
      if (!isNaN(parsedVal)) {
        return parsedVal;
      }
      return val;
    }
  }, z.number({ message: "limit should be a number" }).min(1, { message: "limit should be grater than 0" }).max(100, { message: "limit should be less than 100" })),
  page: z.preprocess((val) => {
    if (typeof val === "string") {
      const parsedVal = parseInt(val);
      if (!isNaN(parsedVal)) {
        return parsedVal;
      }
      return val;
    }
  }, z.number({ message: "page should be a number" }).min(1, { message: "page should be grater than 0" })),
});
