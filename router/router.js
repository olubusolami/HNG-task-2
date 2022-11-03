const express = require("express");
const router = express.Router()
const operatorController = require("../controller/operatorController")

//POST REQUEST for operator type
router.post("/hng-task2", operatorController.hngtask)

module.exports = router;