const express = require('express');

const Entry = require('../models/entryModel.js');

const entryController = {};

// show entries (last 10?)
  // entryController.getEntries = () =>

entryController.getEntries = async (req, res, next) => {
  try{
    const entries = await Entry.find();
    res.locals.entries = entries;
    return next();
  } catch(error) {
    return next({error: 'error in middleware getEntries'})
  }
}



// update entry 
  // entryController.updateEntry = () => 

// delete entry
  // entryController.deleteEntry = () =>

// create a new entry
entryController.createEntry = async (req, res, next) => {
    try{
        const { date, iLearned, journal, moodScaler } = req.body;
        const result = await Entry.create({ date, iLearned, journal, moodScaler });
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

module.exports = entryController