import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export const findAllParametersMock = {
  page: 1,
  limit: 1,
};

export const findAllResponseMock: Product[] = [
  {
    id: "0000e9db-1d54-44d8-8f8a-4e59d20db8d6",
    name: "Pizza",
    price: new Decimal("135.17"),
    units: 1,
    categoryId: "38c3024f-e81e-4e5c-b481-2ab9ee18230a",
  },
  {
    id: "0001634a-f2d7-4168-99d9-6d9377890e83",
    name: "Bacon",
    price: new Decimal("109.39"),
    units: 29,
    categoryId: "14e5eaa3-38d1-45fd-b62c-c32d82f5cdc9",
  },
  {
    id: "00029662-bfea-40dd-ba95-501550e5a595",
    name: "Bacon",
    price: new Decimal("533.69"),
    units: 20,
    categoryId: "1d5a15ef-f0c2-44b5-8ef5-c2dd1e13045c",
  },
];
