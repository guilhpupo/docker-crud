const express = require("express")
const requireDir = require('require-dir')
const cors = require('cors')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()
app.use(express.json())
app.use(cors())

requireDir('./src/models')

app.use('/api', require('./src/routes.js'))

app.listen(PORT, HOST)
