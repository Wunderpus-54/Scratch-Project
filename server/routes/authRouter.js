const express = require('express');

const userController = require('../controllers/userController.js');

const authRouter = express.Router();

authRouter.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.result);
});

// add post route for confirming user
authRouter.post('/login', userController.checkUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

authRouter.get('/hello', (req, res) => {
  return res.json({ hello: 'world' });
});

module.exports = authRouter;
