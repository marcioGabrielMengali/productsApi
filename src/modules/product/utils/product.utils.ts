import { Product } from "@prisma/client";
import { IFindalAllProducstResponseDto } from "../dto/product.dto";
import { URL, URL_PRODUCTS } from "../../../shared/consts/const";

export const formatFindAllResponse = (products: Product[], page_count: number, limit: number, page_size: number, total_items: number, page: number): IFindalAllProducstResponseDto => {
    return {
        _links: {
            self: {
                href: `${URL}/${URL_PRODUCTS}?page=${page}?limit=${limit}`
            },
            first: {
                href: `${URL}/${URL_PRODUCTS}?page=1?limit=${limit}`
            },
            last: {
                href: `${URL}/${URL_PRODUCTS}?page=${page_count}?limit=${limit}`
            }
        },
        _embedded: {
            products: products
        },
        page_count,
        page_size,
        total_items,
        page
    }
}