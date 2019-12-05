const express = require('express');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

debugger;

app.listen(port, ()=> {
    console.log('Server Started!');
});