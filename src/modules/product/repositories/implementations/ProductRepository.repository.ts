import { IProductRepository } from "../interfaces/IProductRepository.interface";
import prismaClient from "../../../../prisma";
import { Product } from "@prisma/client";

export class ProductRepository implements IProductRepository {
    async findAll(): Promise<Product[]> {
        const products = await prismaClient.product.findMany()
        return products
    }

}