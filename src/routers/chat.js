const chat = require("express").Router();
const Chat = require("../controllers/chat.controller")

chat.get("/", Chat.synchronize)
chat.post("/create", Chat.create)

module.exports = chat;