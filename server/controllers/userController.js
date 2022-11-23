const express = require('express');

const User = require('../models/userModel.js');

const userController = {};

userController.checkUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await User.findOne({ username }).exec().then(doc=>{
      if (doc.password == password){
        res.locals.user = doc;
      }
      return next();
    })
  } catch(err){
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
    const { firstName, lastName, username, password } = req.body;
    console.log(firstName, lastName, username, password);

    const result = await User.create({
      firstName,
      lastName,
      username,
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
