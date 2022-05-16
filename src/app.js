const express = require('express');
const router = require("./routers/script.js")
const cors = require('cors')
const app = express()
const { config } = require('dotenv')

config()
app.use(express.json())
app.use(cors())
app.use("/", router)

module.exports = app