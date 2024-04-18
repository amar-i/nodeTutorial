const express = require('express')
const app = express()

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}...`)
});

const customers = [
    {
        name: "Alice",
        age: 25,
        occupation: "Engineer",
        location: "San Francisco, CA",
        hobbies: ["cycling", "painting"],
        description: "Alice is a mechanical engineer who loves to innovate and design new products. She enjoys cycling around the city and spends weekends painting landscapes."
    },
    {
        name: "Bob",
        age: 30,
        occupation: "Designer",
        location: "New York, NY",
        hobbies: ["photography", "traveling"],
        description: "Bob is a graphic designer specializing in digital art. He has a passion for photography and travels frequently to capture diverse cultures and landscapes."
    },
    {
        name: "Charlie",
        age: 28,
        occupation: "Teacher",
        location: "Chicago, IL",
        hobbies: ["reading", "chess"],
        description: "Charlie teaches history at a high school and loves to engage students with interactive learning. In his free time, he reads historical novels and plays chess."
    }
];

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
    res.json ({customers: customers.map(customer => customer.name)})
});