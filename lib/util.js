'use strict';

const util  = {
  //https://en.wikipedia.org/wiki/Payment_card_number
  isAmericanExpressCard: function(creditCardNo){
    return creditCardNo.match(/^3[47]/) != null
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
