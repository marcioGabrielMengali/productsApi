import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'crypto'

const prisma = new PrismaClient()

async function seed() {
    console.log('Starting seeding.....')
    const categories = []
    const products = []
    console.log('Creating data....')
    for (let i = 0; i < 10; i++) {
        const category = {
            id: randomUUID(),
            name: faker.commerce.department()
        }
        categories.push(category)
        for (let i = 0; i < 100; i++) {
            const product = {
                name: faker.commerce.product(),
                price: faker.commerce.price(),
                units: faker.number.int({ min: 1, max: 30 }),
                categoryId: category.id
            }
            products.push(product)
        }
    }
    const categoriesInserted = await prisma.category.createMany({ data: categories })
    const productsInserted = await prisma.product.createMany({ data: products })
    console.log({ categoriesInserted });
    console.log({ productsInserted });
    console.log('Finish seeding')
}

seed()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })