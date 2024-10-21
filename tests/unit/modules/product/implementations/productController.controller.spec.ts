import { ProductController } from "@modules/product/controllers/implementations/ProductController.controller";
import { IProductController } from "@modules/product/controllers/interfaces/IProductController.interface";
import { ProductService } from "@modules/product/service/implmentations/ProductService.service";
import { findAllRequestMock } from "./mocks/express-request-product.mock";
import { findAllMockRespose } from "./mocks/productService.mock";
import { mockedExpressResponse } from "@test/unit/mocks/express-response.mock";

describe(ProductController.name, () => {
  let controller: IProductController;
  beforeEach(() => {
    controller = new ProductController();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Should return without error", async () => {
    jest
      .spyOn(ProductService.prototype, "findAll")
      .mockResolvedValue(findAllMockRespose);
    const result = await controller.findAll(
      findAllRequestMock,
      mockedExpressResponse
    );
    expect(mockedExpressResponse.status).toHaveBeenCalled();
    expect(mockedExpressResponse.json).toHaveBeenCalled();
    expect(mockedExpressResponse.json).toHaveBeenCalledWith({
      statusCode: 200,
      data: findAllMockRespose,
    });
  });
});
