import { prisma } from '../config/database.js'

export async function listProducts(_req, res, next) {
  try {
    const products = await prisma.product.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    })
    res.json(products)
  } catch (e) {
    next(e)
  }
}

export async function getProductBySlug(req, res, next) {
  try {
    const product = await prisma.product.findFirst({
      where: { slug: req.params.slug, isActive: true },
    })
    if (!product) return res.status(404).json({ error: 'Not found' })
    return res.json(product)
  } catch (e) {
    return next(e)
  }
}

export async function listByCollection(req, res, next) {
  try {
    const col = await prisma.collection.findFirst({
      where: { slug: req.params.name },
      include: { products: { where: { isActive: true } } },
    })
    if (!col) return res.status(404).json({ error: 'Collection not found' })
    return res.json(col.products)
  } catch (e) {
    return next(e)
  }
}

export async function createProduct(_req, res) {
  res.status(501).json({ error: 'Admin create — implementirajte prema dokumentaciji.' })
}

export async function updateProduct(_req, res) {
  res.status(501).json({ error: 'Admin update — implementirajte prema dokumentaciji.' })
}

export async function deleteProduct(_req, res) {
  res.status(501).json({ error: 'Admin delete — implementirajte prema dokumentaciji.' })
}
