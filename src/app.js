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
const customer = require("./models/customer");

// Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.set("strictQuery", false);

async function connectToDatabase(uri) {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
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

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to my test API!");
});

// Get all customers
app.get("/api/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
});

// Customers data
let customer1 = new Customer({
  name: "Jane Doe",
  email: "john@testemail.com",
  industry: "Technology",
  age: 35,
});

// Add a new customer
app.post("/api/customers", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ customer });
    console.log("Customer saved successfully", customer);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
});

// Start the server
startServer();
