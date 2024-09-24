export const calculatePage = (totalItems: number, limit: number): number => {
    const page = Math.ceil(totalItems / limit)
    return page
}