const router = require("express").Router();
const controllers = require("../controllers/script")

router.get("/", controllers.synchronize)
router.get("/:name", controllers.synchronizePlayer)
router.post("/create", controllers.create)
router.put("/update", controllers.update)

module.exports = router;