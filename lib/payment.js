'use strict';
const util = require('./util');
const payment = function(opts){
  var paymentObject; 
  var paymentGateway = util.getPaymentGateway(opts.ccNumber, opts.currency);

  switch(paymentGateway){
    case 'paypal':
      paymentObject = require('./vendors/paypal')(opts);
      break;
    
    case 'braintree':
      paymentObject = require('./vendors/braintree')(opts);
      break;

    default: 
      //no supported
      break;
  } 

  return paymentObject;
}

module.exports = payment;
