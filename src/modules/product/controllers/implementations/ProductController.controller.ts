import { Product } from "@prisma/client";
import { IProductController } from "../interfaces/IProductController.interface";
import { IProductService } from "../../service/interfaces/IProductService.interface";
import { ProductService } from "../../service/implmentations/ProductService.service";
import { ProductRepository } from "../../repositories/implementations/ProductRepository.repository";
import { Request, Response } from "express";
import 'reflect-metadata'
import { formatResponse } from "../../../../shared/decorators/formatResponse.decorator";

const productRepository = new ProductRepository()

export class ProductController implements IProductController {
    @formatResponse()
    async findAll(request: Request, response: Response): Promise<any> {
        const productService: IProductService = new ProductService(productRepository)
        const products = await productService.findAll()
        return products
    }
}