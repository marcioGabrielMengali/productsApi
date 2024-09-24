import express, { Express } from "express"
import routes from "./routes"
import { validateAcceptHeader } from "./shared/middlewares/headers.middleware"
import { PORT } from "./shared/consts/const"



const port = PORT

const app: Express = express()
app.use(validateAcceptHeader)
app.use(routes)

app.listen(port, () => console.log(`[Server]: Server is running on port: http://localhost:${port}`))
