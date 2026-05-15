import { Router } from 'express'
import * as ctrl from '../controllers/paymentController.js'

const router = Router()

router.post('/intent', ctrl.createPaymentIntent)
router.post('/webhook', ctrl.stripeWebhook)

export default router
