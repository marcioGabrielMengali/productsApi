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
import { IFindalAllProducstResponseDto, IFindAllRequestProductsDto } from "../../dto/product.dto";

const productRepository = new ProductRepository()

export class ProductController implements IProductController {
    @formatResponse()
    async findAll(request: Request, response: Response): Promise<IFindalAllProducstResponseDto> {
        validator(getProductsValidatorQueryParametersSchema, request.query)
        const findAllParameters: IFindAllRequestProductsDto = request.query as unknown as IFindAllRequestProductsDto
        const productService: IProductService = new ProductService(productRepository)
        const result: IFindalAllProducstResponseDto = await productService.findAll(findAllParameters)
        return result
    }
}