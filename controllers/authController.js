const User = require("../models/User");
const jwt = require('jsonwebtoken');
const handleErrors = require('./errohandler')


// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'my name is joseph', {
    expiresIn: maxAge
  });
};

// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id, jwt: token });
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ userID: user._id, token: token  });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

}
module.exports.logout_get = (req, res) => {
  res.cookie('token', '', { maxAge: 1 });
  res.redirect('/');
}

