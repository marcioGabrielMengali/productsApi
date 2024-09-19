import { formatResponse } from "../../../../../src/shared/decorators/formatResponse.decorator"
import { mockedFuncionResponse } from "../mocks/formatResposeMock.mock"

const mockedFunctionStub = jest.fn().mockResolvedValue(mockedFuncionResponse)

export function applyDecoratorStub() {
    const descriptor = {
        value: mockedFunctionStub
    } as PropertyDescriptor

    const target = {}
    const propertyKey = mockedFunctionStub.name

    formatResponse()(target, propertyKey, descriptor)

    return descriptor.value
}