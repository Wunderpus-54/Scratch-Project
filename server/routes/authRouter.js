const express = require('express');

const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');
// we tried to make a sessioncontroller 
// const sessionController = require('../controllers/sessionController.js')

const authRouter = express.Router();

authRouter.post('/signup', userController.createUser, cookieController.setSSIDCookie, (req, res) => {
  return res.status(200).json(res.locals.result);
});

// add post route for confirming user
//post req because we're creating a session
authRouter.post('/login', userController.checkUser, cookieController.setSSIDCookie, (req, res) => {
  return res.status(200).json(res.locals.user);
});

//to logout, DELETE req to delete the session

module.exports = authRouter;
