import { Router } from 'express'
import * as ctrl from '../controllers/orderController.js'
import { requireAdmin, requireAuth } from '../middleware/auth.js'

const router = Router()

router.post('/', ctrl.createOrder)
router.get('/user/me', requireAuth, ctrl.listMyOrders)
router.get('/:id', ctrl.getOrder)
router.get('/', requireAuth, requireAdmin, ctrl.listAllOrders)
router.put('/:id/status', requireAuth, requireAdmin, ctrl.updateOrderStatus)

export default router
