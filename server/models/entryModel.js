const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  date: String,
  ilearned: String,
  journal: String,
  moodScaler: Number,
});

module.exports = mongoose.model('entry', entrySchema);