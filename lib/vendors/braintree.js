'use strict';

const config = require('./../../config');
const braintree = require('braintree');

module.exports = function(opts){
  let env = braintree.Environment;
  const gateway = braintree.connect({
    environment: config.sandbox ? env.Sandbox : env.Production,
    merchantId: config.braintree.merchantId,
    publicKey: config.braintree.publicKey,
    privateKey: config.braintree.privateKey
  })

  return {
    send: function(done){
      gateway.transaction.sale({
        amount: opts.amount,
        creditCard:{
          cardholderName: opts.ccName,
          expirationMonth: opts.expirationMonth,
          expirationYear: opts.expirationYear,
          number: opts.ccNumber,
          cvv: opts.cvv
        }  
      }, done)
    }
  }
}
