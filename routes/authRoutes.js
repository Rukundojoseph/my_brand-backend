const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();
/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Users
 *     name: login
 *     summary: login a user
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *     responses:
 *       201:
 *             description: user created successfully.
 *       400:
 *             description: Bad request.
 *       409:
 *             description: user not registered.
 * */


/**
 * @swagger
 * /logout:
 *   get:
 *     tags:
 *       - Users
 *     name: logout
 *     summary: logout a user
 *     responses:
 *       201:
 *             description: logged out user successfully.
 *       400:
 *             description: Bad request.
 *       409:
 *             description: The email is already in the system.
 * */

/**
 * @swagger
 * /signup:
 *   get:
 *     tags:
 *       - Users
 *     name: login
 *     summary: signup user
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *     responses:
 *       201:
 *             description: user created successfully.
 *       400:
 *             description: Bad request.
 *       409:
 *             description: The email is already registered.
 * */
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);



module.exports = router;