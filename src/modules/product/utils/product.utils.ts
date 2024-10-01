import { Product } from "@prisma/client";
import { IFindalAllProducstResponseDto } from "../dto/product.dto";
import { URL, PRODUCTS_ENDPOINT } from "../../../shared/consts/const";

export const formatFindAllResponse = (
  products: Product[],
  page_count: number,
  limit: number,
  page_size: number,
  total_items: number,
  page: number
): IFindalAllProducstResponseDto => {
  return {
    _links: {
      self: {
        href: `${URL}/${PRODUCTS_ENDPOINT}?page=${page}?limit=${limit}`,
      },
      first: {
        href: `${URL}/${PRODUCTS_ENDPOINT}?page=1?limit=${limit}`,
      },
      last: {
        href: `${URL}/${PRODUCTS_ENDPOINT}?page=${page_count}?limit=${limit}`,
      },
    },
    _embedded: {
      products: products,
    },
    page_count,
    page_size,
    total_items,
    page,
  };
};
