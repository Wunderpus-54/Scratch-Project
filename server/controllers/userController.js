const express = require('express');

const User = require('../models/userModel');

const userController = {};

userController.checkUser = (req, res, next) => {
    const { userName, password } = req.body;
    res.locals.test = true;
    next()
}

/*
, (err, user) => {
        if(err) return next()
        res.locals.user = user;
        return next();
    }

*/

userController.createUser = (req, res, next) => {
    const { firstName, lastName, userName, password } = req.body;
    User.create({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        entries: []
    }).exec().then(doc=>{
        res.locals.user = doc;
        return next();
    }).catch(err=>{
        return next('Remember put error object')
    })
}

module.exports = userController;