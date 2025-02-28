import { BadRequestError, UnauthorizedError } from '@/core/errorResponse'
import { OkResponse } from '@/core/successResponse'
import { Router } from 'express'

const authRouter = Router()

authRouter.get('/login', (req, res) => {
  throw new UnauthorizedError('Test error')

  new OkResponse('Login success', {
    accesToken: 'jkasdkjhasjkdajkshd'
  }).send(res)
})

export default authRouter
