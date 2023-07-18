//import all dependencies required
const cors = require('cors');
const express = require('express');

//set variable users as expressRouter
var welcome = express.Router();

welcome.post('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content    
    res.write('<html><body><p>This is a dummy welcome page</p></body></html>');
    res.end(); 
})

//export routes 
module.exports = welcome;