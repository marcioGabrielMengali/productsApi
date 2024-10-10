import { IProductService } from "../interfaces/IProductService.interface";
import { IProductRepository } from "../../repositories/interfaces/IProductRepository.interface";
import {
  IFindalAllProducstResponseDto,
  IFindAllRequestProductsDto,
} from "../../dto/product.dto";
import { calculatePage } from "../../utils/repository.uitl";
import { formatFindAllResponse } from "../../utils/product.utils";
import logger from "@shared/log/logger";
import { BadRequestError } from "@shared/errors/BadRequestError.error";
import { inject, injectable } from "tsyringe";
import { ProductRepository } from "@modules/product/repositories/implementations/ProductRepository.repository";

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject(ProductRepository.name)
    private readonly productRepository: IProductRepository
  ) {}
  async findAll(
    parameters: IFindAllRequestProductsDto
  ): Promise<IFindalAllProducstResponseDto> {
    logger.info(
      `${ProductService.name} :: method :: ${
        this.findAll.name
      } :: parameters :: ${JSON.stringify(parameters)}`
    );
    const totalProducts = await this.productRepository.countAll();
    const totalPages = calculatePage(totalProducts, parameters.limit);
    if (parameters.page > totalPages && totalPages !== 0) {
      throw new BadRequestError("Page not found");
    }
    const page = parameters.page - 1;
    const limit = Number(parameters.limit);
    const products = await this.productRepository.findAll(page, limit);
    const response: IFindalAllProducstResponseDto = formatFindAllResponse(
      products,
      totalPages !== 0 ? totalPages : 0,
      limit,
      products.length,
      totalProducts,
      totalPages !== 0 ? parameters.page : 0
    );
    logger.info(
      `${ProductService.name} :: method :: ${
        this.findAll.name
      } :: response :: ${JSON.stringify(response)}`
    );
    return response;
  }
}
