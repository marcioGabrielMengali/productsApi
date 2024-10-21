import { formatResponse } from "@shared/decorators/formatResponse.decorator";
import { mockedFunctionResponse } from "./mocks/formatResposeMock.mock";
import { applyDecoratorStub } from "./stubs/formatResponseStub.stub";
import { mockedExpressRequest } from "@test/unit/mocks/express-request.mock";
import { mockedExpressResponse } from "@test/unit/mocks/express-response.mock";

describe(formatResponse.name, () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  it("Should return formated response", async () => {
    const decoratorMethod = applyDecoratorStub();
    const expected = { data: mockedFunctionResponse, statusCode: 200 };
    await decoratorMethod(mockedExpressRequest, mockedExpressResponse);
    expect(mockedExpressResponse.json).toHaveBeenCalledWith(expected);
    expect(mockedExpressResponse.status).toHaveBeenCalledWith(200);
  });
});
