import { Product } from "@prisma/client";

export interface IProductRepository {
    findAll(): Promise<Product[]>
}
