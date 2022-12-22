const express = require('express')
const router = express()
const blocontroll = require('../controllers/blogcontroller')
const { requireAuth } = require('../middleware/authMiddleware')

/**
 * @swagger
 * /blogs:
 *   get:
 *     tags:
 *       - Blogs
 *     name: Blog
 *     summary: Retrieve all blogs
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description: Blogs successfully Retrieved.
 * */

/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     tags:
 *       - Blogs
 *     name: Blog
 *     summary: retrieve single blog
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog id
 *     responses:
 *       200:
 *             description: Blog successfully Retrieved.
 *       404:
 *             description: Blog not found.
 *       500:
 *             description: server error.
 * */

/**
 * @swagger
 * /blogs/{id}/like:
 *  post:
 *     tags:
 *       - Blogs
 *     name: add like
 *     summary: add like
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog id
 *     responses:
 *       200:
 *             description: added like succefuly.
 *       404:
 *             description: Blog not found.
 *       500:
 *             description: server error.
 * */

/**
 * @swagger
 * /blogs/{id}/comment:
 *   post:
 *     tags:
 *       - Blogs
 *     name: comment
 *     summary: add a comment to a blog
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:           
 *                text:
 *                 type: string
 *     responses:
 *       201:
 *             description: Comment successfully added.
 *       400:
 *             description: Bad request.
 *       500:
 *             description: server error.
 * */


router.get('/blogs',blocontroll.getAllBlogs)
router.get('/blogs/:id',blocontroll.getSingleBlogs)
// router.get('/blogs/:id/likes',()=>{})
// router.get('/blogs/:blogid/comments',()=>{})

//require authentication
router.post('/blogs/:id/like',requireAuth,blocontroll.addLike)
router.post('/blogs/:id/comment',requireAuth,blocontroll.addComment)
//require authentication


module.exports = router