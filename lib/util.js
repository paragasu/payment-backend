'use strict';

const util  = {
  //https://en.wikipedia.org/wiki/Payment_card_number
  isAmericanExpressCard: function(creditCardNo){
    return (util.getCreditCardType(creditCardNo) === 'amex')
  },

  getCreditCardType: function(creditCardNo){
    //american express
    if(/^3[47]{1}[0-9]{5,}$/.test(creditCardNo)) return 'amex';
    //visa
    if(/^4[0-9]{6,}$/.test(creditCardNo)) return 'visa';
    //mastercard
    if(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/.test(creditCardNo)) return 'mc';
  },

  getPaymentGateway: function(creditCardNumber, currency){
    if(util.isAmericanExpressCard(creditCardNumber)){
      if(currency == 'USD'){
        return 'paypal';
      }else{
        return 'American Express credit card only support USD currency'; 
      } 
    }

    if(['USD', 'EUR', 'AUD'].indexOf(currency) > -1){
      return 'paypal';
    }

    return 'braintree';
  }
}

module.exports = util;
