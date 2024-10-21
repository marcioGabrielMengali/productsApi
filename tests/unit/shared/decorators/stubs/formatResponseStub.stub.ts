import { formatResponse } from "@shared/decorators/formatResponse.decorator";
import { mockedFunctionResponse } from "../mocks/formatResposeMock.mock";

const mockedFunctionStub = jest.fn().mockResolvedValue(mockedFunctionResponse);

export function applyDecoratorStub() {
  const descriptor = {
    value: mockedFunctionStub,
  } as PropertyDescriptor;

  const target = {};
  const propertyKey = mockedFunctionStub.name;

  formatResponse()(target, propertyKey, descriptor);

  return descriptor.value;
}
