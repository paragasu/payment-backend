'use strict';

const util  = {
  isAmericanExpressCard: function(creditCardNo){
    return (util.getCreditCardType(creditCardNo) === 'amex')
  },

  getCreditCardType: function(creditCardNo){
    //https://en.wikipedia.org/wiki/Payment_card_number
    let amex = /^3[47]{1}[0-9]{5,}$/;
    let visa = /^4[0-9]{6,}$/;
    let mastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;

    if(amex.test(creditCardNo)) return 'amex';
    if(visa.test(creditCardNo)) return 'visa';
    if(mastercard.test(creditCardNo)) return 'mc';

    throw 'Credit card not supported';
  },

  getPaymentGateway: function(creditCardNumber, currency){
    if(util.isAmericanExpressCard(creditCardNumber)){
      if(currency === 'USD') return 'paypal';
      //amex do not support other than USD 
      return 'American Express credit card only support USD currency'; 
    }
    //paypal for usd,eur & aud
    if(['USD', 'EUR', 'AUD'].indexOf(currency) > -1)return 'paypal';
    //otherwise braintree
    return 'braintree';
  }
}

module.exports = util;
