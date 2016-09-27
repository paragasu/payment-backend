'use strict';

const config = require('./../../config');
const paypal = require('paypal-rest-sdk');

module.exports = function(opts){

  paypal.configure({
    'mode': 'sandbox',
    'client_id': config.paypal.clientId,
    'client_secret': config.paypal.clientSecret
  })

  return {
    send: function(amount, done){
      let paymentJson = {
        "intent": "sale",
        "payer": {
          "payment_method": "credit_card",
          "funding_instruments":[{
            "credit_card":{
              "type": "visa",
              "number": opts.number,
              "expire_month": '',
              "expire_year": '',
              "cvv2": opts.cvv,
              "first_name": '',
              "last_name": '',
            
            }
          }]
        },
        "transactions":{
          "amount":{
            "total": opts.amount,
            "currency": opts.currency
          },
          "decription": ""
        }
      }

      paypal.payment.create(paymentJson, done)
    }
  }
}
