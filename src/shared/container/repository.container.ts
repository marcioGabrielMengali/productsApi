import { ProductRepository } from "@modules/product/repositories/implementations/ProductRepository.repository";
import { IProductRepository } from "@modules/product/repositories/interfaces/IProductRepository.interface";
import { container } from "tsyringe";

container.registerSingleton<IProductRepository>(
  ProductRepository.name,
  ProductRepository
);

export { container };
