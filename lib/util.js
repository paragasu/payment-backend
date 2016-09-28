'use strict';

module.exports = {
  //https://en.wikipedia.org/wiki/Payment_card_number
  isAmex: function(creditCardNo){
    return creditCardNo.match(/^3[47]/)
  },

  getPaymentGateway: function(creditCardNumber, currency){
    if(util.isAmericanExpressCard(creditCardNumber)){
      if(currency == 'USD'){
        return 'paypal';
      }else{
        throw 'American Express Credit Card only support USD';
      }
    }

    if(['USD', 'EUR', 'AUD'].contains(currency)){
      return 'paypal';
    }

    return 'braintree';
  }
}
