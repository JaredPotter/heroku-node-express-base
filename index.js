const express = require('express');
require('dotenv').config();

const port = process.env.PORT;
const databaseString = process.env.DATABASE_STRING; // optional
console.log(`DATABASE_STRING: ${databaseString}`);
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World');
});

app.listen(port, ()=> {
    console.log('Server Started!');
});