import { Product } from "@prisma/client";
import { IProductController } from "../interfaces/IProductController.interface";
import { IProductService } from "../../service/interfaces/IProductService.interface";
import { ProductService } from "../../service/implmentations/ProductService.service";
import { ProductRepository } from "../../repositories/implementations/ProductRepository.repository";
import { Request, Response } from "express";
import 'reflect-metadata'
import { formatResponse } from "../../../../shared/decorators/formatResponse.decorator";
import { validator } from "../../../../shared/validators/validator";
import { getProductsValidatorQueryParametersSchema } from "../../../../shared/validators/schemas/products.validator.schema";

const productRepository = new ProductRepository()

export class ProductController implements IProductController {
    @formatResponse()
    async findAll(request: Request, response: Response): Promise<Product[]> {
        validator(getProductsValidatorQueryParametersSchema, request.query)
        const productService: IProductService = new ProductService(productRepository)
        const products = await productService.findAll()
        return products
    }
}