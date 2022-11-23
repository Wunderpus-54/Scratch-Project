const express = require('express');

const User = require('../models/userModel.js');

const userController = {};

userController.checkUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const result = await User.findOne({ userName });
    
    if (result.password === password) {
      res.locals.user = result;
      res.locals.id = result._id;
      return next();
    }
  } 
  catch(err){
    return next({
      log: 'Error caught in userController.checkUser middleware',
      message: {
        err: 'An error has occured in the userController.checkUser middleware ',
      },
    })
  }
};

userController.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, password } = req.body;
    console.log(firstName, lastName, userName, password);

    const result = await User.create({
      firstName,
      lastName,
      userName,
      password
    });

    console.log('IM INSIDE OF USER CONTROLLER CREATE USER');

    res.locals.result = result;
    res.locals.id = result._id;
    return next();
  } catch (err) {
    return next({
      log: 'Error caught in userController.createUser middleware',
      message: {
        err: 'An error has occured in the userController.createUser middleware ',
      },
    });
  }
};

module.exports = userController;
