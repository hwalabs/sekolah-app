const express = require("express")
const router = express.Router()

const guruController = require("../controllers/guruController")

router.get("/", guruController.guruku)

module.exports = router