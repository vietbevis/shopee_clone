import { Express } from 'express'
import router_v1 from './v1'
import router_v2 from './v2'

const PREFIX_V1 = '/api/v1'
const PREFIX_V2 = '/api/v2'

const routes = (app: Express) => {
  app.use(PREFIX_V1, router_v1)
  app.use(PREFIX_V2, router_v2)
}
export default routes
