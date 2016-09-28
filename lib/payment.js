'use strict';
const util = require('./util');

const payment = function(opts){
  var paymentGateway = util.getPaymentGateway(opts.number, opts.currency);
  var paymentObject; 

  switch(paymentGateway){
    case 'paypal':
      paymentObject = require('./vendors/paypal')(opts);
      break;
    
    case 'braintree':
      paymentObject = require('./vendors/braintree')(opts);
      break;

    default: //error
      throw paymentGateway;
      break;
  } 

  return paymentObject;
}

module.exports = payment;
