import { Product } from "@prisma/client";

export interface IProductRepository {
    findAll(page: number, limit: number): Promise<Product[]>
    countAll(): Promise<number>
}
