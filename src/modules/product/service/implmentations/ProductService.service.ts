import { Product } from "@prisma/client";
import { IProductService } from "../interfaces/IProductService.interface";
import { IProductRepository } from "../../repositories/interfaces/IProductRepository.interface";

export class ProductService implements IProductService {
    constructor(
        private readonly productRepository: IProductRepository
    ) { }
    async findAll(): Promise<Product[]> {
        const products = await this.productRepository.findAll()
        return products
    }
}