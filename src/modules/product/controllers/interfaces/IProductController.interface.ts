import { Request, Response } from "express";
import { IFindalAllProducstResponseDto } from "../../dto/product.dto";

export interface IProductController {
  findAll(
    request: Request,
    response: Response
  ): Promise<IFindalAllProducstResponseDto>;
}
