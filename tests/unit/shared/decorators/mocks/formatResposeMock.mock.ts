import { Request, Response } from "express"

export const mockedExpressRequest = {} as Request

export const mockedExpressResponse = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
} as unknown as Response

export const mockedFuncionResponse = {
    name: 'someName',
    age: 10,
    email: 'someEmail@gmail.com'
}
