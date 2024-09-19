import { Product } from "@prisma/client";
import { Request, Response } from "express";

export interface IProductController {
    findAll(request: Request, response: Response): Promise<Product[]>
}