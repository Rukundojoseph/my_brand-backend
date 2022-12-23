 import express from'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import swaggerJsDoc from './swagger.js'

const port = 3000


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
//routes 
import blogRoutes from './routes/blogs.js'
import authRoutes from './routes/authRoutes.js'
import AdminRoutes from './routes/admin.js'
import contactRoutes from './routes/contactme.js'
//routes 
//using routes

//using routes


// database connection
const dbURI = 'mongodb://127.0.0.1:27017/authopf';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) =>{ 
    app.listen(port)
    swaggerJsDoc(app,port)    
  })
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.send('home'));
//  app.get('/admin', requireAdmin, (req, res) => res.send('admin'));
app.use(blogRoutes)
app.use(AdminRoutes)
app.use(contactRoutes)
app.use(authRoutes);

export default app