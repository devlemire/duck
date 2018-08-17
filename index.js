require('dotenv').config({ path: `${__dirname}/.env` })
const { SERVER_PORT } = process.env
const express = require('express')
const figlet = require('figlet')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
)

app.post('/api/duck', (req, res) => {
  const payload = req.body

  console.log('Incoming duck:', payload)

  if (req.body.challenge) {
    res.send(req.body.challenge)
  } else {
    res.send(payload.text)
  }
})

app.get('*', (req, res) => {
  res.send({
    available_endpoints: {
      '/api/duck': ['POST']
    }
  })
})

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`)
  figlet('Duck Online', (err, data) => {
    console.log(data)
  })
})
