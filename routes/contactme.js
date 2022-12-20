const express = require("express")
const router = express.Router()
const getmessage  = require("../controllers/blogcontroller")
const { requireAuth } = require("../middleware/authMiddleware")


router.post('/contact',getmessage.addMessage)

module.exports = router