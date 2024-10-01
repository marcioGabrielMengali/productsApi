import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const URL = `http://localhost:${PORT}`;
export const PRODUCTS_ENDPOINT = "product";
export const LOG_FILE = process.env.LOG_FILE || "logs/error.log";
export const COMBINED_LOG_FILE =
  process.env.COMBINED_LOG_FILE || "logs/combined.log";
export const NODE_ENV = process.env.NODE_ENV || "dev";
export const API_VERSION = process.env.API_VERSION || "v1";
