const express = require('express');
const gamer = require("./routers/gamer.js")
const chat = require("./routers/chat.js")
const cors = require('cors')
const app = express()
const { config } = require('dotenv')

config()
app.use(express.json())
app.use(cors())
app.use("/gamer", gamer)
app.use("/chat", chat)

module.exports = app