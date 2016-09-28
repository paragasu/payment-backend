'use strict';

const input = {
  isValid: function(form){
    if(!input.validName(form.full_name))
      return false;
    }
    if(!input.validName(form.cc_name)){
      return false;
    }
    if(!input.validPrice(form.price)){
      return false
    }
    if(!input.validCurrency(form.cc_currency)){
      return false
    }
    if(!input.validCvv(form.cc_cvv)){
      return false;
    }
  },

  validName: function(name){
    return /^[a-zA-Z\s\.]+$/.test(name)
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
  },

  validExpiryMonth: function(MM){
    return /^[01]{1}[0-9]{1}$/.test(MM)
  },

  validExpiryYear: function(YY){
    let yyArr = ['16', '17', '18', '19', '20'];
    return (yyArr.indexOf(YY) > - 1) 
  },

  validCreditCard: function(cc){
    if(/[^0-9-\s]+/.test(value)) return false;
    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");
    //https://en.wikipedia.org/wiki/Luhn_algorithm
    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
          nDigit = parseInt(cDigit, 10);
      if (bEven) {
        if ((nDigit *= 2) > 9) nDigit -= 9;
      }
      nCheck += nDigit;
      bEven = !bEven;
    }
    return (nCheck % 10) == 0;
  }
}

module.exports = input;
