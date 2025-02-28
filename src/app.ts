import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello anh em!')
})

export default app
