import { Request } from "express"
import { z } from 'zod'
import { ValidatorError } from "../errors/Validator.error"
import { EValidationRequestType } from "../enums/EValidationRequestType.enum"
import { ERequestValidationMessage } from "../enums/ERequestValidationMessage.enum"


const getValues = (req: Request, typeValidation: EValidationRequestType): { values: object, errorMessage: string } => {
    const result = { values: {}, errorMessage: '' }
    switch (typeValidation) {
        case EValidationRequestType.QUERY_PARAMETERS:
            result.values = req.query
            result.errorMessage = ERequestValidationMessage.QUERY_PARAMETERS
            return result
        default:
            result.values = {}
            result.errorMessage = ''
            return result
    }
}


function requestValidator(schema: z.ZodSchema, typeVatidation: EValidationRequestType) {
    return function (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
        descriptor.value = async function (req: Request) {
            const { values, errorMessage } = getValues(req, typeVatidation)
            try {
                schema.parse(values)
            } catch (error) {
                const zodErrors: z.ZodError = error as z.ZodError
                const errors = []
                for (const zodError of zodErrors.errors) {
                    errors.push({
                        field: zodError.path[0],
                        error: zodError.message
                    })
                }
                throw new ValidatorError(errorMessage, errors)
            }
        }
        return descriptor
    }
}

export { requestValidator }