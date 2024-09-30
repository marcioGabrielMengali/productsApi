import { IProductController } from "../interfaces/IProductController.interface";
import { IProductService } from "../../service/interfaces/IProductService.interface";
import { ProductService } from "../../service/implmentations/ProductService.service";
import { ProductRepository } from "../../repositories/implementations/ProductRepository.repository";
import { Request } from "express";
import 'reflect-metadata'
import { formatResponse } from "../../../../shared/decorators/formatResponse.decorator";
import { getProductsValidatorQueryParametersSchema } from "../../../../shared/validators/schemas/products.validator.schema";
import { IFindalAllProducstResponseDto, IFindAllRequestProductsDto } from "../../dto/product.dto";
import { requestValidator } from "../../../../shared/decorators/requestValidator.decorator";
import { EValidationRequestType } from "../../../../shared/enums/EValidationRequestType.enum";

const productRepository = new ProductRepository()

export class ProductController implements IProductController {
    @formatResponse()
    @requestValidator(getProductsValidatorQueryParametersSchema, EValidationRequestType.QUERY_PARAMETERS)
    async findAll(request: Request): Promise<IFindalAllProducstResponseDto> {
        const findAllParameters: IFindAllRequestProductsDto = request.query as unknown as IFindAllRequestProductsDto
        const productService: IProductService = new ProductService(productRepository)
        const result: IFindalAllProducstResponseDto = await productService.findAll(findAllParameters)
        return result
    }
}