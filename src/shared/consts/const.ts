import dotenv from "dotenv"
dotenv.config()

export const PORT = process.env.PORT || 3000
export const URL = `http://localhost:${PORT}`
export const URL_PRODUCTS = 'product'
export const LOG_FILE = process.env.LOG_FILE || 'logs/error.log'