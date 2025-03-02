import 'reflect-metadata'

import app from './app'
import envConfig from './configs/envConfig'
import AppDataSource from './configs/database'

const PORT = envConfig.PORT

;(async () => {
  try {
    await AppDataSource.initialize()
    console.log('Kết nối CSDL thành công!!!')

    app.listen(PORT, () => {
      console.log('Server is running on port: ' + PORT)
    })
  } catch (error) {
    console.log(error)
  }
})()
