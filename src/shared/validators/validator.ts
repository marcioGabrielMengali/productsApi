import { z } from 'zod'
import { ValidatorError } from '../errors/Validator.error'

export const validator = (schema: z.ZodSchema, values: any) => {
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
        throw new ValidatorError('Query parameters validation error', errors)
    }
}