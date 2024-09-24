import { Product } from "@prisma/client";
import { IProductService } from "../interfaces/IProductService.interface";
import { IProductRepository } from "../../repositories/interfaces/IProductRepository.interface";
import { IFindalAllProducstResponseDto, IFindAllRequestProductsDto } from "../../dto/product.dto";
import { calculatePage } from "../../utils/repository.uitl";
import { BadRequest } from "../../../../shared/errors/BadRequest.error";
import { formatFindAllResponse } from "../../utils/product.utils";

export class ProductService implements IProductService {
    constructor(
        private readonly productRepository: IProductRepository
    ) { }
    async findAll(parameters: IFindAllRequestProductsDto): Promise<IFindalAllProducstResponseDto> {
        const totalProducts = await this.productRepository.countAll()
        const totalPages = calculatePage(totalProducts, parameters.limit)
        if (parameters.page > totalPages) {
            throw new BadRequest('Page not found')
        }
        const page = parameters.page - 1
        const limit = Number(parameters.limit)
        const products = await this.productRepository.findAll(page, limit)
        const response: IFindalAllProducstResponseDto = formatFindAllResponse(products, totalPages, limit, products.length, totalProducts, parameters.page)
        return response
    }
}