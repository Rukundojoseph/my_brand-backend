import express from "express"
const router = express.Router()
import {addMessage}  from "../controllers/blogcontroller.js"



router.post('/contact',addMessage)

export default router