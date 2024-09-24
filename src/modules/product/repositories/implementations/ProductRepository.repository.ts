import { IProductRepository } from "../interfaces/IProductRepository.interface";
import prismaClient from "../../../../prisma";
import { Product } from "@prisma/client";
import { calculatePage } from "../../utils/repository.uitl";

export class ProductRepository implements IProductRepository {
    async findAll(page: number, limit: number): Promise<Product[]> {
        const products = await prismaClient.product.findMany({
            skip: limit * page,
            take: limit
        })
        return products
    }
    async countAll(): Promise<number> {
        const count = await prismaClient.product.count()
        return count
    }

}