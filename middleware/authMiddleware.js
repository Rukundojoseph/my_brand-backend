import  jwt from 'jsonwebtoken';
import  User from '../models/User.js';

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
    res.status(403).json({
      statusCode: 403,     
      message:'you are not logged in'
    });
  }
};
// check current user

//require admin
const requireAdmin = (req, res, next) => {
  const token = req.cookies.token || req.body.token;
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
      next();      
      }
      else{
      res.status(403).json({
        statusCode: 403,        
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


export  { requireAuth }
export {requireAdmin} 
