'use strict';

const config = require('./config')
const util = require('./lib/util');
const form = require('./lib/validate');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}))

app.post('/checkout', (req, res) => {

  if(form.isValid(req.body)){
    //error
  }

  var isPaypal = false;

  if(util.isAmericanExpressCard(req.body.cc_number)){
    if(req.body.cc_currency === 'USD'){
      isPaypal = true;
    }else{ 
      throw 'American Express Credit Card only support USD';
    }
  }

  if(['USD', 'EUR', 'AUD'].contains(req.body.cc_currency)){
    isPaypal = true;
  }

  if(isPaypal){
    //paypal
  }else{
    //braintree
  }

  res.send('hello')
})

app.listen(config.port, () => {
  console.log('Server  started at port ', config.port)
})
