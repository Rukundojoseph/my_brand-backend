const express = require('express')
const router = express()
const adminControll = require('../controllers/admincontroller')
const { requireAdmin, requireAuth } = require('../middleware/authMiddleware')



/**
 * @swagger
 * /admin/blogs:
 *   post:
 *     tags:
 *       - Admin
 *     summary: creating a blog
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                 type: object
 *                 required:                    
 *                    - title
 *                    - body                    
 *                 properties:                 
 *                    title:
 *                      type: string
 *                    body:
 *                      type: string
 *                   
 *     responses:
 *       201:
 *             description: Blog saved successfully
 *       400:
 *             description: you are not the admin.
 * */

/**
 * @swagger
 * /admin/blog/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete a blog
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Successfully Deleted.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 * */

/**
 * @swagger
 * /admin/blog/{id}:
 *   patch:
 *     tags:
 *       - Admin
 *     summary: Update a blog
 *     content:
 *       - application/json
 *     parameters:
 *       - title: auth
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *             properties:
 *                Author:
 *                 type: string
 *                Title:
 *                 type: string
 *                Content:
 *                 type: string
 *     responses:
 *       200:
 *             description: Blog successfully updated.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 * */

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

