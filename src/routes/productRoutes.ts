import { Router } from "express";
import { ProductController } from "../modules/product/controllers/implementations/ProductController.controller";
import { IProductController } from "../modules/product/controllers/interfaces/IProductController.interface";

const productRoutes = Router()
const productController: IProductController = new ProductController()

productRoutes.get('/', productController.findAll)

export { productRoutes }