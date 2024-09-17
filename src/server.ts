import express, { Express } from "express"
import dotenv from "dotenv"
import routes from "./routes"

dotenv.config()

const port = process.env.PORT || 300

const app: Express = express()

app.use(routes)

app.listen(port, () => console.log(`[Server]: Server is running on port: http://localhost:${port}`))
