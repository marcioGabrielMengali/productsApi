import "reflect-metadata";
import "@shared/container/index";
import express, { Express } from "express";
import routes from "./routes";
import { validateAcceptHeader } from "./shared/middlewares/headers.middleware";
import { API_VERSION, PORT } from "./shared/consts/const";
import logger from "./shared/log/logger";

const port = PORT;
const VERSION = API_VERSION;

const app: Express = express();
app.use(validateAcceptHeader);
app.use(`/${VERSION}`, routes);

app.listen(port, () =>
  logger.info(`[Server]: Server is running on port: http://localhost:${port}`)
);
