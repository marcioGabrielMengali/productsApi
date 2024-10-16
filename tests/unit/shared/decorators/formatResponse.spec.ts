import { formatResponse } from "@shared/decorators/formatResponse.decorator";
import {
  mockedExpressRequest,
  mockedExpressResponse,
  mockedFuncionResponse,
} from "./mocks/formatResposeMock.mock";
import { applyDecoratorStub } from "./stubs/formatResponseStub.stub";

describe(formatResponse.name, () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  it("Should return formated response", async () => {
    const decoratorMethod = applyDecoratorStub();
    const expected = { data: mockedFuncionResponse, statusCode: 200 };
    await decoratorMethod(mockedExpressRequest, mockedExpressResponse);
    expect(mockedExpressResponse.json).toHaveBeenCalledWith(expected);
    expect(mockedExpressResponse.status).toHaveBeenCalledWith(200);
  });
});
