import "reflect-metadata";
import { IProductController } from "../interfaces/IProductController.interface";
import { IProductService } from "@modules/product/service/interfaces/IProductService.interface";
import { ProductService } from "@modules/product/service/implmentations/ProductService.service";
import { Request } from "express";
import { formatResponse } from "@shared/decorators/formatResponse.decorator";
import { getProductsValidatorQueryParametersSchema } from "@shared/validators/schemas/products.validator.schema";
import {
  IFindalAllProducstResponseDto,
  IFindAllRequestProductsDto,
} from "../../dto/product.dto";
import { requestValidator } from "@shared/decorators/requestValidator.decorator";
import { EValidationRequestType } from "@shared/enums/EValidationRequestType.enum";
import logger from "@shared/log/logger";
import { container } from "tsyringe";

export class ProductController implements IProductController {
  constructor() {}
  @requestValidator(
    getProductsValidatorQueryParametersSchema,
    EValidationRequestType.QUERY_PARAMETERS
  )
  @formatResponse()
  async findAll(request: Request): Promise<IFindalAllProducstResponseDto> {
    logger.info(`${ProductController.name} :: method :: findAll`);
    const productService = container.resolve(ProductService);
    const findAllParameters: IFindAllRequestProductsDto =
      request.query as unknown as IFindAllRequestProductsDto;
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
