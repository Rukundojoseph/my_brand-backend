const express = require('express')
const router = express()
const adminControll = require('../controllers/admincontroller')
const { requireAdmin, requireAuth } = require('../middleware/authMiddleware')


router.get('/admin/blogs',requireAdmin,adminControll.getAllBlogs)
router.post('/admin/blogs',requireAdmin,adminControll.CreateBlog)
router.patch('/admin/blogs/:id',requireAdmin,adminControll.EditBlogs)
router.delete('/admin/blogs/:id',requireAdmin,adminControll.DeleteBlog)
router.get('/admin/blogs/:id/likes',requireAdmin,adminControll.getlikes)
router.get('/admin/blogs/:blogid/comments',()=>{})
router.delete('/admin/blogs/:blogid/comments/:commentId',()=>{})
router.get('/admin/messages',requireAdmin,adminControll.getContacts)
router.get('/admin/users',requireAdmin,adminControll.getUsers)
router.delete('/admin/messages/:id',requireAdmin,adminControll.Deletemessage)


module.exports = router

