import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const lemon = await prisma.collection.upsert({
    where: { slug: 'lemon' },
    update: {},
    create: { name: 'Lemon Collection', slug: 'lemon' },
  })

  await prisma.product.upsert({
    where: { slug: 'lemon-burst' },
    update: {},
    create: {
      name: 'Lemon Burst Candle',
      slug: 'lemon-burst',
      description: 'Svježi limun miris, 100% soja vosak.',
      price: 24.99,
      stock: 50,
      images: ['https://images.unsplash.com/photo-1602602878050-2a0c5f8b8b0a?auto=format&fit=crop&w=600&q=80'],
      collectionId: lemon.id,
      scents: ['lemon', 'verbena'],
      weight: 250,
      burnTime: 45,
    },
  })
}

main()
  .then(() => console.log('Seed completed'))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
