const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true, useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to Database');
// });

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    entries: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);