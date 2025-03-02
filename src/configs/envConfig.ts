import 'dotenv/config'
import { z } from 'zod'

const configSchema = z.object({
  PORT: z.coerce.number().default(4000),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().default(5432),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string()
})

const configServer = configSchema.safeParse(process.env)

if (!configServer.success) {
  throw new Error('Các biến môi trường không hợp lệ')
}

const envConfig = configServer.data
export default envConfig
