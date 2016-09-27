'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const config = require('./config')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/pay', (req, res) => {
  console.log('hello world');  
})

app.listen(config.port, () => {
  console.log('Server started at', config.port)
})
