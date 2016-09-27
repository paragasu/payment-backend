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
      let fundingInstruments = [{
        "credit_card":{
          "type": "visa",
          "number": opts.number,
          "expire_month": '',
          "expire_year": '',
          "cvv2": opts.cvv,
          "first_name": '',
          "last_name": '',
        }
      }];

      let transactions = {
        "decription": "",
        "amount":{
          "total": opts.amount,
          "currency": opts.currency
        }
      }

      let paymentJson = {
        "intent": "sale",
        "transactions": transactions,
        "payer": {
          "payment_method": "credit_card",
          "funding_instruments": fundingInstruments
        }
      }

      paypal.payment.create(paymentJson, done)
    }
  }
}
