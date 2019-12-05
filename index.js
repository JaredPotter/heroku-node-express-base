const express = require('express');
require('dotenv').config();

const port = process.env.PORT;
const databaseString = process.env.DATABASE_STRING; // optional
console.log(`DATABASE_STRING: ${DATABASE_STRING}`);
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World');
});

app.listen(port, ()=> {
    console.log('Server Started!');
});