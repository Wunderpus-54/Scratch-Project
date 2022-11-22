const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  date: {type: String, required: true},
  iLearned: String,
  journal: String,
  moodScaler: {type: Number, required: true},
});

module.exports = mongoose.model('entry', entrySchema);