'use strict';

const config = require('./config')
const util = require('./lib/util');
const form = require('./lib/validate');
const payment = require('./lib/payment');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}))

app.post('/checkout', (req, res) => {
  if(form.isValid(req.body)){
    //record transaction
    let payment = payment({
        currency: req.body.cc_currency,
        name: req.body.cc_name,
        number: req.body.cc_number,
        expirationMonth: req.body.cc_expiry_month,
        expirationYear: req.body.cc_expiry_year,
        cvv: req.body.cc_cvv   
    })

    payment.send(req.body.cc_price, (err, res) => {
      if(err) throw err;
      console.log(res);
    })    
  }

  res.send('hello')
})

app.listen(config.port, () => {
  console.log('Server  started at port ', config.port)
})
