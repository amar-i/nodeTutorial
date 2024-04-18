const express = require('express')
const app = express()

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}...`)
});

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.post('/', (req, res) => {
    res.send('Testing if the post is working')
});