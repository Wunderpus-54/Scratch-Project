const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
    if (err) {
        console.log('ERROR');
        console.log(req.cookies.ssid);
    }

    console.log(req.cookies.ssid);
    Session.create({ cookieId: req.cookies.ssid }, (err, res) => {
      return next();
    });
};

module.exports = sessionController;