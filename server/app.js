require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes/index')

const app = express()

app.use(cors())

const isProd = process.env.NODE_ENV === 'production'
const logLevel = isProd ? 'combined' : 'dev'
app.use(morgan(logLevel))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: false, verify: () => { throw new Error('Invalid format') },
}))

routes(app)

// @TODO: Error handler

module.exports = app
