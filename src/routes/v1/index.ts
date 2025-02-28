import { Router } from 'express'
import authRouter from './authRoute'

const router_v1 = Router()

router_v1.use('/auth', authRouter)

export default router_v1
