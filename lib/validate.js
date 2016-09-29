'use strict';

const input = {
  //express middleware for form validation
  checkValid: function(req, res, next){
    let form = req.body;
    if(!input.validName(form.full_name)){
      return res.status(401).send('Invalid name ' + form.full_name);
    }
    if(!input.validName(form.cc_name)){
      return res.status(401).send('Invalid card holder name ' + form.cc_name);
    }
    if(!input.validPrice(form.price)){
      return res.status(401).send('Invalid price ' + form.price);
    }
    if(!input.validCurrency(form.currency)){
      return res.status(401).send('Invalid currency ' + form.currency);
    }
    if(!input.validCreditCard(form.cc_number)){
      return res.status(401).send('Invalid credit card number ' + form.cc_number);
    }
    if(!input.validCvv(form.cc_cvv)){
      return res.status(401).send('Invalid CVV ' + form.cc_cvv);
    }

    next();
  },

  validName: function(name){
    return /^[a-zA-Z\s\.]+$/.test(name)
  },

  validPrice: function(price){
    return !isNaN(parseFloat(price)) && isFinite(price);
  },

  validCurrency: function(currency){
    let currencyArr = ['USD', 'EUR', 'AUD', 'THB', 'HKD', 'SGD'];
    return (currencyArr.indexOf(currency) > -1)
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
  
  //https://gist.github.com/DiegoSalazar/4075533
  validCreditCard: function(ccNo){
    if(/[^0-9-\s]+/.test(ccNo)) return false;
    let nCheck = 0;
    let nDigit = 0;
    let bEven = false;
    ccNo = ccNo.replace(/\D/g, "");
    for (let n = ccNo.length - 1; n >= 0; n--) {
      let cDigit = ccNo.charAt(n);
      let nDigit = parseInt(cDigit, 10);
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
