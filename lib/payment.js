'use strict';
const paypal = require('./paypal');
const braintree = require('./braintree');

const payment = function(amount, currency, opts){
  var paymentGateway; 
  var options = {
  }

  if(util.isAmericanExpressCard(req.body.cc_number) && req.body.cc_currency == 'USD'){
    paymentGateway = 'paypal';
  }else{
    throw 'American Express Credit Card only support USD';
  }

  if(['USD', 'EUR', 'AUD'].contains(req.body.cc_currency)){
    paymentGateway = 'paypal';
  }

  switch(paymentGateway){
    case 'paypal':
      break;
    
    default: 
      //braintree
      break;
  } 

  return {
    send: function(done){
      done() 
    } 
  } 
}

module.exports = payment;
