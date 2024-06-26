const mongoose = require('mongoose');

customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    industry: {
        type:String, 
        required: true, 
    },
    age: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Customer', customerSchema);