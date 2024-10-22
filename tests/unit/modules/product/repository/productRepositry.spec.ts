import { ProductRepository } from "@modules/product/repositories/implementations/ProductRepository.repository";
import { IProductRepository } from "@modules/product/repositories/interfaces/IProductRepository.interface";
import prismaClient from "@src/prisma";
import {
  findAllParametersMock,
  findAllResponseMock,
} from "./mocks/productRepository.mock";
import { InternalServerError } from "@shared/errors/InternalServerError.error";

describe(ProductRepository.name, () => {
  let repository: IProductRepository;
  beforeEach(() => {
    repository = new ProductRepository();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe(ProductRepository.prototype.findAll.name, () => {
    it("Should throw an InternalServerError", async () => {
      jest
        .spyOn(prismaClient.product, "findMany")
        .mockRejectedValue(new Error());
      await expect(
        repository.findAll(
          findAllParametersMock.page,
          findAllParametersMock.limit
        )
      ).rejects.toThrow(InternalServerError);
    });
    it("Should return", async () => {
      jest
        .spyOn(prismaClient.product, "findMany")
        .mockResolvedValue(findAllResponseMock);
      const expected = findAllResponseMock;
      const result = await repository.findAll(
        findAllParametersMock.page,
        findAllParametersMock.limit
      );
      expect(result).toStrictEqual(expected);
    });
  });
  describe(ProductRepository.prototype.countAll.name, () => {
    it("Should throw an InternalServerError", async () => {
      jest.spyOn(prismaClient.product, "count").mockRejectedValue(new Error());
      await expect(repository.countAll()).rejects.toThrow(InternalServerError);
    });
    it("Should return", async () => {
      jest.spyOn(prismaClient.product, "count").mockResolvedValue(0);
      const expected = 0;
      const result = await repository.countAll();
      expect(result).toStrictEqual(expected);
    });
  });
});
