import { Router } from 'express'

const authRouter = Router()

authRouter.get('/login', (req, res) => {
  res.send('Login route /api/v1/auth/login')
})

export default authRouter
