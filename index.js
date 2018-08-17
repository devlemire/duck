require('dotenv').config()
const { SERVER_PORT } = process.env
const express = require('express')
const figlet = require('figlet')

const app = express()

app.post('/api/duck', (req, res) => {})

app.listen(async () => {
  console.log(`Server listening on port ${SERVER_PORT}.`)
  figlet('Duck Online', (err, data) => {
    console.log(data)
  })
})
