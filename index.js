require('dotenv').config({ path: __dirname })
const { SERVER_PORT } = process.env
const express = require('express')
const figlet = require('figlet')

const app = express()

app.use(express.json())

app.post('/api/duck', (req, res) => {
  const payload = req.body

  console.log('incoming payload:', payload)

  res.sendStatus(200)
})

app.listen(async () => {
  console.log(`Server listening on port ${SERVER_PORT}.`)
  figlet('Duck Online', (err, data) => {
    console.log(data)
  })
})
