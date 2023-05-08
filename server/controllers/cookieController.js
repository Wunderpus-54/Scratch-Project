const express = require('express');

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  // console.log('ssid cookie: ', res.locals.id);
  res.cookie('ssid', res.locals.id, { httpOnly: true }) // ObjectId("507c7f79bcf86cd7994f6c0e").valueOf())
  return next();
}

module.exports = cookieController;