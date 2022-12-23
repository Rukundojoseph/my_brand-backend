import  { Router } from 'express'
import  { signup_post,login_post,logout_get} from '../controllers/authController.js'

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

router.post('/signup', signup_post);

router.post('/login',login_post);
router.get('/logout',logout_get);



export default router;