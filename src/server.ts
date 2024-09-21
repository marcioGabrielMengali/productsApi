import express, { Express } from "express"
import dotenv from "dotenv"
import routes from "./routes"
import { validateAcceptHeader } from "./shared/middlewares/headers.middleware"

dotenv.config()

const port = process.env.PORT || 3000

const app: Express = express()
app.use(validateAcceptHeader)
app.use(routes)

app.listen(port, () => console.log(`[Server]: Server is running on port: http://localhost:${port}`))
