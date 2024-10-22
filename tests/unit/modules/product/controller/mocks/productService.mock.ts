import { Decimal } from "@prisma/client/runtime/library";

export const findAllMockRespose = {
  _links: {
    self: {
      href: "http://localhost:3000/v1/product?page=2?limit=5",
    },
    first: {
      href: "http://localhost:3000/v1/product?page=1?limit=5",
    },
    last: {
      href: "http://localhost:3000/v1/product?page=20012?limit=5",
    },
  },
  _embedded: {
    products: [
      {
        id: "0002accd-619c-4b66-b6ed-12f62b28ea13",
        name: "Towels",
        price: new Decimal(28.39),
        units: 11,
        categoryId: "a6f17d72-bae5-45f1-bc5f-ca54a96d1dd5",
      },
      {
        id: "0002d3d1-6fc7-488e-ad2f-99304419262e",
        name: "Chips",
        price: new Decimal(10.0),
        units: 19,
        categoryId: "f5c9ca76-ef7f-4cf8-b540-f0ed850e8a96",
      },
    ],
  },
  page_count: 20012,
  page_size: 5,
  total_items: 100060,
  page: 1,
};
