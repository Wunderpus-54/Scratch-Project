const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  userName: { type: String, required: true},
  date: String,
  iLearned: String,
  journal: String,
  moodScaler: Number,
});

module.exports = mongoose.model('entry', entrySchema);