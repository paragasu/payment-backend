'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const config = require('./config')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}))

app.post('/checkout', (req, res) => {
  console.log(req.body);  
  res.send('hello')
})

app.listen(config.port, () => {
  console.log('Server  started at', config.port)
})
