import { Router } from 'express'
import * as ctrl from '../controllers/userController.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.post('/register', ctrl.register)
router.post('/login', ctrl.login)
router.get('/me', requireAuth, ctrl.getMe)
router.put('/me', requireAuth, ctrl.updateMe)

export default router
