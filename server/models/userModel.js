const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  entries: Object,
});

module.exports = mongoose.model('user', userSchema);
