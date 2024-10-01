import { Router } from "express";
import { IProductController } from "@modules/product/controllers/interfaces/IProductController.interface";
import { ProductController } from "@modules/product/controllers/implementations/ProductController.controller";

const productRoutes = Router();
const productController: IProductController = new ProductController();

productRoutes.get("/", productController.findAll);

export { productRoutes };
