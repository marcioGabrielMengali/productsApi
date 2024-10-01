import { Router } from "express";
import { productRoutes } from "./productRoutes";
import { URL_PRODUCTS } from "../shared/consts/const";

const routes = Router();

routes.use(`/${URL_PRODUCTS}`, productRoutes);

export default routes;
