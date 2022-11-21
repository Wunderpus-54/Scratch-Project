const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true, useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to Database');
// });

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  entries: Object,
});

module.exports = mongoose.model('user', userSchema);
