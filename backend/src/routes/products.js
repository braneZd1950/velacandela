import { Router } from 'express'
import * as ctrl from '../controllers/productController.js'
import { requireAdmin, requireAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', ctrl.listProducts)
router.get('/collection/:name', ctrl.listByCollection)
router.get('/:slug', ctrl.getProductBySlug)
router.post('/', requireAuth, requireAdmin, ctrl.createProduct)
router.put('/:id', requireAuth, requireAdmin, ctrl.updateProduct)
router.delete('/:id', requireAuth, requireAdmin, ctrl.deleteProduct)

export default router
