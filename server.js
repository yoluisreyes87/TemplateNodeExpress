const express = require('express')
const app = express()
const cors = require('cors')

const puerto = process.env.PORT ?? 1234

app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.json({ mensaje: 'Hola mundo' })
})

app.listen(puerto, () => {
  console.log('hola desde el server de Express: http://localhost:' + puerto)
})
