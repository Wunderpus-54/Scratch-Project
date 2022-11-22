const express = require('express');

const Entry = require('../models/entryModel.js');

const entryController = {};

entryController.createEntry = async (req, res, next) => {
    try{
        const { userName, date, iLearned, journal, moodScaler } = req.body;
        const result = await Entry.create({ userName, date, iLearned, journal, moodScaler });
        res.locals.entry = result;
        return next();
    } catch(err){
        return next({
          log: 'Error caught in entryController.createEntry middleware',
          message: {
            err: 'An error has occured in the entryController.createEntry middleware ',
          },
        })
    }
}

entryController.getUserEntry = async (req, res, next) => {
  try {
    const { userName } = req.params;
    const result = await Entry.find({ userName });
    res.locals.entries = result;
    return next();
  }
  catch(err) {
    return next({
      log: 'Error caught in entryController.getUserEntry middleware',
      message: {
        err: 'An error has occured in the entryController.getUserEntry middleware ',
      },
    })
  }
}

entryController.updateEntry = async (req, res, next) => {
  try {
    const { _id, iLearned, journal, moodScaler } = req.body;
    const result = await Entry.findByIdAndUpdate(_id, { iLearned, journal, moodScaler });
    res.locals.update = result;
    return next();
  }
  catch(err) {
    return next({
      log: 'Error caught in entryController.updateEntry middleware',
      message: {
        err: 'An error has occured in the entryController.updateEntry middleware ',
      },
    })
  }
}

entryController.deleteEntry = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const result = await Entry.findByIdAndDelete(_id);
    res.locals.delete = result;
    return next();
  }
  catch(err) {
    return next({
      log: 'Error caught in entryController.updateEntry middleware',
      message: {
        err: 'An error has occured in the entryController.updateEntry middleware ',
      },
    })
  }
}

// entryController.getAllEntry = async (req, res, next) => {
//   try {
//     const result = await Entry.find({});
//     res.locals.entries = result;
//     return next();
//   }
//   catch(err) {
//     return next({
//       log: 'Error caught in entryController.getEntry middleware',
//       message: {
//         err: 'An error has occured in the entryController.getEntry middleware ',
//       },
//     })
//   }
// }



module.exports = entryController