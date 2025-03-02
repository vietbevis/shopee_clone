import { DataSource } from 'typeorm'
import envConfig from './envConfig'
import path from 'path'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: envConfig.DB_HOST,
  port: envConfig.DB_PORT,
  username: envConfig.DB_USER,
  password: envConfig.DB_PASS,
  database: envConfig.DB_NAME,
  synchronize: true,
  logging: ['error'],
  entities: [path.join(__dirname, '..', 'entities', '*.ts')]
})

export default AppDataSource
