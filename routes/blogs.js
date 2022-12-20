const express = require('express')
const router = express()
const blocontroll = require('../controllers/blogcontroller')
const { requireAuth } = require('../middleware/authMiddleware')

router.get('/blogs',blocontroll.getAllBlogs)
router.get('/blogs/:id',blocontroll.getSingleBlogs)
// router.get('/blogs/:id/likes',()=>{})
// router.get('/blogs/:blogid/comments',()=>{})

//require authentication
router.post('/blogs/:id/like',requireAuth,blocontroll.addLike)
router.post('/blogs/:id/comment',requireAuth,blocontroll.addComment)
//require authentication


module.exports = router