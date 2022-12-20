const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuth = (req, res, next) => {
    const token = req.cookies.token 
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'my name is joseph', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(200).json({
          statusCode: 200,
          message: "logged in successfully"
        });
      } else {       
        next();
      }
    });
  } else {
    res.json({
      statusCode: 400,     
      message:'you are not logged in'
    });
  }
};
// check current user

//require admin
const requireAdmin = (req, res, next) => {
  const token = req.cookies.token ;
// check json web token exists & is verified
if (token) {
  jwt.verify(token, 'my name is joseph', async (err, decodedToken) => {
    if (err) {
      console.log(err.message);
      res.redirect('/login');
    } else {
      console.log(decodedToken);
      let user = await User.findById(decodedToken.id);
      if(user.email == 'joseph@gmail.com')   
      {
      console.log(user.email)
      next();      
      }
      else{
      res.status(422).json({
        statusCode: 422,        
        message: "you are not the admin"
      })
      }
      
    }
  });
} else {
  res.status(404).json({
    statusCode: 404,
    message:'you are not logged in'
  });
}
};

//require admin

const checkUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, 'my name is joseph', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};


module.exports = { requireAuth, checkUser ,requireAdmin };
