const express = require('express')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 3000;
const db = process.env.db 

// Connect to MongoDB database & start server
const start = async () => {
    try {
    await mongoose.connect(db);
    console.log('Connected to MongoDB');
    
    app.listen(PORT, () => {
        console.log(`Server is listening to ${PORT}...`)
    });
    } catch (e) {
        console.error(`Error: ${e.message}`);
    }
};

// Start the server
start();


// Home route
app.get('/', (req, res) => {
    res.send('Welcome to my test API!')
});

// Customers route
app.get('/api/customers', (req, res) => {
    res.send({customers: customers})
});

// Post Customers route
app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body)
});

