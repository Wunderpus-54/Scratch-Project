const express = require('express');

const entryController = require('../controllers/entryController');

const entryRouter = express.Router();

entryRouter.post('/', 
    entryController.createEntry, 
    (req, res) => {
        return res.status(200).json(res.locals.entry);
}) 

// entryRouter.get('/',
//     entryController.getAllEntry,
//     (req, res) => {
//         return res.status(200).json(res.locals.entries);
//     }
// );

//this is to get ALL entries for ONE specific user
entryRouter.get('/:userName',
    entryController.getUserEntry,
    (req, res) => {
        return res.status(200).json(res.locals.entries);
    }
);

//PUT
entryRouter.put('/', entryController.updateEntry, (req, res) => {
    return res.status(200).json(res.locals.update );
})

//DELETE
entryRouter.delete('/', entryController.deleteEntry, (req, res) => {
    return res.status(200).json(res.locals.delete)
})

module.exports = entryRouter;