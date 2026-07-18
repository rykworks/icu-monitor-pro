import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'ICU Monitor Pro API',
  })
})

app.listen(3000, () => {
  console.log('ICU Monitor Pro API is running on port 3000')
})
