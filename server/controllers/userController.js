const express = require('express');

const User = require('../models/userModel.js');

const userController = {};

userController.checkUser = (req, res, next) => {
  const { userName, password } = req.body;
  res.locals.test = true;
  next();
};

/*
, (err, user) => {
        if(err) return next()
        res.locals.user = user;
        return next();
    }

*/

userController.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, password } = req.body;
    console.log(firstName, lastName, userName, password);

    const result = await User.create({
      firstName,
      lastName,
      userName,
      password,
      entries: [],
    });

    console.log('IM INSIDE OF USER CONTROLLER CREATE USER');

    res.locals.result = result;
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
