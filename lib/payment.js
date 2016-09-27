'use strict';
const util = require('./util');

const payment = function(opts){
  var paymentGateway, paymentObject; 

  if(util.isAmericanExpressCard(opts.number)){
    if(opts.currency == 'USD'){
      gateway = 'paypal';
    }else{
      throw 'American Express Credit Card only support USD';
    }
  }

  if(['USD', 'EUR', 'AUD'].contains(opts.currency)){
    paymentGateway = 'paypal';
  }

  switch(paymentGateway){
    case 'paypal':
      paymentObject = require('./vendors/paypal')(opts);
      break;
    
    default: //braintree
      paymentObject = require('./vendors/braintree')(opts);
      break;
  } 

  return paymentObject;
}

module.exports = payment;
