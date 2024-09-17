import { Product } from "@prisma/client";
import { IProductController } from "../interfaces/IProductController.interface";
import { IProductService } from "../../service/interfaces/IProductService.interface";
import { ProductService } from "../../service/implmentations/ProductService.service";
import { ProductRepository } from "../../repositories/implementations/ProductRepository.repository";
import { Request, Response } from "express";

const productRepository = new ProductRepository()

export class ProductController implements IProductController {
    async findAll(request: Request, response: Response): Promise<any> {
        const productService: IProductService = new ProductService(productRepository)
        const products = await productService.findAll()
        return response.status(200).json(products)
    }
}