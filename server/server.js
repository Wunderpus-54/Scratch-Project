// requiring in express
const express = require('express');
const { urlencoded } = require('express');

// in case we need to route paths
const path = require('path');

// in case we want to utilize cookies :)
const cookieParser = require('express');

// for our mongoose database
const mongoose = require('mongoose');

// port information
const app = express();
const PORT = 3000;

//json parsing
app.use(express.json());
app.use(urlencoded({ extended: true }));

// for the cors header since we're making a call to our backend api
const cors = require('cors');
app.use(cors());

// insert database URI
const URI = 'mongodb+srv://wunderpuss54:kobethegoat@cluster0.kltmhxv.mongodb.net/?retryWrites=true&w=majority';

// insert database connection
mongoose.connect(URI);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// require in routers

// static files
// THIS NEEDS TO BE CHANGED TO WHEREVER OUR STATIC FILE IS BEING SERVED! I used ./index.html as a placeholder.
app.use(express.static(path.join(__dirname, './index.html')));

// auth router
// entry router

app.get('/hello', (req, res) => {
  res.json({hello: "world"})
})

// catch all
app.use((req, res) => res.status(404).send('Page not found'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global Error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured caught in global error handler' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

// starting server
app.listen(PORT, () => {
  console.log(
    `Server listening on port: ${PORT}! Welcome to Andy, Chihiro, Jackie, Jonathan and Liam's Project`
  );
});

// exporting!
module.exports = app;
