const express = require("express")
const router = express.Router()

const siswaController = require("../controllers/siswaController")

router.get("/", siswaController.siswa)

module.exports = router