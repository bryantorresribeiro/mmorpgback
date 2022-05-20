const gamer = require("express").Router();
const Gamer = require("../controllers/gamer.controller")

gamer.get("/", Gamer.synchronize)
gamer.get("/:name", Gamer.synchronizePlayer)
gamer.post("/create", Gamer.create)
gamer.put("/update", Gamer.update)

module.exports = gamer;