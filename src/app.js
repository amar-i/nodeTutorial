// Environment configuration
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');

// Constants
const PORT = process.env.PORT || 3000;
const dbURI = process.env.DB_URI;
const Customer = require('./models/customer');

// Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.set('strictQuery', false);

async function connectToDatabase(uri) {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(`Database connection error: ${error.message}`);
        process.exit(1);
    }
}

// Server start function
async function startServer() {
    await connectToDatabase(dbURI);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}...`);
    });
}

// Customers data
const  customer = new Customer({
    name: 'John Doe',
    email: 'john@testemail.com',
    industry: 'Technology',
    age: 35,
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my test API!');
});

app.get('/api/customers', (req, res) => {
    res.send({ customers: customer });
});

app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// Start the server
startServer();
