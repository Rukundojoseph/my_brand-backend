const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser , requireAdmin } = require('./middleware/authMiddleware');
const adminControll = require('./controllers/admincontroller')


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
//routes 
const authRoutes = require('./routes/authRoutes');
const blogRoutes= require('./routes/blogs')
const AdminRoutes= require('./routes/admin')
const contactRoutes= require('./routes/contactme')
//routes 
//using routes

//using routes


// database connection
const dbURI = 'mongodb://127.0.0.1:27017/authopf';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) =>{ 
    app.listen(3000)
  })
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);

app.get('/', (req, res) => res.send('home'));
//  app.get('/admin', requireAdmin, (req, res) => res.send('admin'));
app.use(blogRoutes)
app.use(AdminRoutes)
app.use(contactRoutes)
app.use(authRoutes);

module.exports = app