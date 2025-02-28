import express from 'express'
import routes from './routes'
import { endPointNotFound, globalErrorHandler } from './middleware/errorHandling'
const app = express()

routes(app)
app.use(endPointNotFound)
app.use(globalErrorHandler)

export default app
