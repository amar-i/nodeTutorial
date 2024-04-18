
const { v4: uuidv4 } = require('uuid');

const express = require('express')
const app = express()


const port = 3000
app.listen(port, () => {
    console.log(`Server is listening to ${port}...`)
});

app.get('/', function (req, res) {
    res.send('Hello World')
});