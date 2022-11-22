const express = require('express');

const entryController = require('../controllers/entryController');

const entryRouter = express.Router();

entryRouter.post('/', 
    entryController.createEntry, 
    (req, res) => {
        return res.status(200).json(res.locals.entry);
}) 

entryRouter.get('/getEntries', 
    entryController.getEntries,
    (req, res) => {
        return res.status(200).json(res.locals.entries);
    })


module.exports = entryRouter;