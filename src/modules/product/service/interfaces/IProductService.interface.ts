import { Product } from "@prisma/client";

export interface IProductService {
    findAll(): Promise<Product[]>
}