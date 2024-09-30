import { IProductRepository } from "../interfaces/IProductRepository.interface";
import prismaClient from "../../../../prisma";
import { Product } from "@prisma/client";
import logger from "../../../../shared/log/logger";
import { InternalServerError } from "../../../../shared/errors/InternalServerError.error";

export class ProductRepository implements IProductRepository {
  async findAll(page: number, limit: number): Promise<Product[]> {
    try {
      const products = await prismaClient.product.findMany({
        skip: limit * page,
        take: limit,
      });
      logger.info(
        `${ProductRepository.name} :: method :: ${
          this.findAll.name
        } :: products :: ${JSON.stringify(products)}`
      );
      return products;
    } catch (error) {
      logger.error(
        `${ProductRepository.name} :: method :: ${
          this.findAll.name
        } :: error :: ${JSON.stringify(error)}`
      );
      throw new InternalServerError("Error on Database");
    }
  }
  async countAll(): Promise<number> {
    try {
      const count = await prismaClient.product.count();
      logger.info(
        `${ProductRepository.name} :: method :: ${
          this.findAll.name
        } :: count :: ${JSON.stringify(count)}`
      );
      return count;
    } catch (error) {
      logger.error(
        `${ProductRepository.name} :: method :: ${
          this.countAll.name
        } :: error :: ${JSON.stringify(error)}`
      );
      throw new InternalServerError("Error on Database");
    }
  }
}
