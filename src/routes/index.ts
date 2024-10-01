import { Router } from "express";
import { productRoutes } from "./productRoutes";
import { PRODUCTS_ENDPOINT } from "@shared/consts/const";

const routes = Router();

routes.use(`/${PRODUCTS_ENDPOINT}`, productRoutes);

export default routes;
