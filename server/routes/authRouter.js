const express = require('express');

const userController = require('../controllers/userController');

const authRouter = express.Router();

authRouter.post('/signup', userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.user);
})

authRouter.get('/hello', 
    (req, res) => {
        return res.json({hello: "world"});
    }
);

// authRouter.post('/', userController.checkUser, (req, res) => {
//     return res.status(200).json({"user": res.locals.newUser})
// });

module.exports = authRouter;