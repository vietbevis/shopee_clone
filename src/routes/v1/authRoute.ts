import { OkResponse } from '@/core/successResponse'
import { Router } from 'express'

const authRouter = Router()

authRouter.get('/login', (req, res) => {
  new OkResponse('Login success', {
    accesToken: 'jkasdkjhasjkdajkshd'
  }).send(res)
})

export default authRouter
