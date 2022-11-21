const express = require('express');

const Entry = require('../models/entryModel.js');

const entryController = {};

entryController.createEntry = async (req, res, next) => {
    try{
        const { date, ilearned, journal, moodScaler } = req.body;
        const result = await Entry.create({ date, ilearned, journal, moodScaler });
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