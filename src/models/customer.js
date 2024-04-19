const mongoose = require('mongoose');

customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    industry: String,
    age: Number,
});

module.exports = mongoose.model('Customer', customerSchema);