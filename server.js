'use strict';

const config = require('./config')
const form = require('./lib/validate');
const payment = require('./lib/payment');
const db  = require('./lib/db');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/checkout', form.checkValid);
app.post('/checkout', (req, res) => {
  let params = {
      ccName: req.body.cc_name,
      ccNumber: req.body.cc_number,
      expirationMonth: req.body.cc_expiry_month,
      expirationYear: req.body.cc_expiry_year,
      cvv: req.body.cc_cvv,
      currency: req.body.currency,
      amount: req.body.price
  }

  let pay = payment(params);

  pay.send((err, result)=>{
      if(err) return res.send(err);
      res.send(result);
  })    

  //TODO: save transaction
})

app.get('/success', (req, res)=>{
  console.log(req.body);
})

app.get('/cancel', (req, res)=>{
  console.log(req.body);
})

app.listen(config.port, () => {
  console.log('Server  started at port ', config.port)
})
