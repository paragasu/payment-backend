'use strict';

const input = {
  isValid: function(form){
    if(!input.validPrice(form.price)){
      return false
    }

    if(!input.validCurrency(form.cc_currency)){
      return false
    }


    //check name
    //check credit card
    //check expiry date
    //check ccv
  },

  validPrice: function(price){
    return !isNaN(parseFloat(price)) && isFinite(price);
  },

  validCurrency: function(currency){
    let currencyArr = ['USD', 'EUR', 'AUD', 'THB', 'HKD', 'SGD'];
    return (currencyArr.indexOf(form.cc_currency) > -1)
  },
  
  validCvv: function(cvv){
    return /^[0-9]{3,4}$/.test(cvv)  
  }
}

module.exports = input;
