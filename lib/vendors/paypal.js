'use strict';

const config = require('./../../config');
const paypal = require('paypal-rest-sdk');

module.exports = function(opts){

  paypal.configure({
    'mode': config.sandbox ? 'sandbox' : 'live',
    'client_id': config.paypal.clientId,
    'client_secret': config.paypal.clientSecret
  })

  return {
    send: function(amount, done){
      let transactions = {
        "decription": "",
        "amount":{
          "total": opts.amount,
          "currency": opts.currency
        }
      }
      let fundingInstruments = [{
        "credit_card":{
          "number": opts.ccNumber,
          "expire_month": opts.expirationMonth,
          "expire_year": opts.expirationYear,
          "cvv2": opts.cvv,
          "first_name": opts.firstName,
          "last_name": opts.lastName,
        }
      }];

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
