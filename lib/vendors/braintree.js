'use strict';

const config = require('./../../config');
const braintree = require('braintree');

module.exports = function(opts){

  const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: config.braintree.merchantId,
    publicKey: config.braintree.publicKey,
    privateKey: config.braintree.privateKey
  })

  return {
    send: function(amount, done){
      gateway.transaction.sale({
        amount: amount 
        creditCard:{
          cardholderName: '',
          cvv: '',
          expirationDate: '', //MM/YY
          number: '' 
        }  
      }, done)
    }
  }
}
