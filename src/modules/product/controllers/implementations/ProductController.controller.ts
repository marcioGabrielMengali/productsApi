import { IProductController } from "../interfaces/IProductController.interface";
import { IProductService } from "../../service/interfaces/IProductService.interface";
import { ProductService } from "../../service/implmentations/ProductService.service";
import { ProductRepository } from "../../repositories/implementations/ProductRepository.repository";
import { Request } from "express";
import "reflect-metadata";
import { formatResponse } from "@shared/decorators/formatResponse.decorator";
import { getProductsValidatorQueryParametersSchema } from "@shared/validators/schemas/products.validator.schema";
import {
  IFindalAllProducstResponseDto,
  IFindAllRequestProductsDto,
} from "../../dto/product.dto";
import { requestValidator } from "@shared/decorators/requestValidator.decorator";
import { EValidationRequestType } from "@shared/enums/EValidationRequestType.enum";
import logger from "@shared/log/logger";

const productRepository = new ProductRepository();

export class ProductController implements IProductController {
  @requestValidator(
    getProductsValidatorQueryParametersSchema,
    EValidationRequestType.QUERY_PARAMETERS
  )
  @formatResponse()
  async findAll(request: Request): Promise<IFindalAllProducstResponseDto> {
    logger.info(`${ProductController.name} :: method :: findAll`);
    const findAllParameters: IFindAllRequestProductsDto =
      request.query as unknown as IFindAllRequestProductsDto;
    const productService: IProductService = new ProductService(
      productRepository
    );
    const result: IFindalAllProducstResponseDto = await productService.findAll(
      findAllParameters
    );
    logger.info(
      `${
        ProductController.name
      } :: method :: findAll :: result :: ${JSON.stringify(result)}`
    );
    return result;
  }
}
