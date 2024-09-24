import { Product } from "@prisma/client"

export interface IFindAllRequestProductsDto {
    page: number
    limit: number
}

interface IFindAllLinks {
    self: {
        href: string
    },
    first: {
        href: string
    },
    last: {
        href: string
    }
}

export interface IFindalAllProducstResponseDto {
    _links: IFindAllLinks,
    _embedded: {
        products: Product[]
    },
    page_count: number
    page_size: number
    total_items: number
    page: number
}