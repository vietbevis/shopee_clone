import { Router } from 'express'

const router_v2 = Router()

router_v2.get('/auth', (req, res) => {
  res.send('/api/v2/auth')
})

export default router_v2
