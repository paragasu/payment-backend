'use strict';

module.exports = {

  //https://en.wikipedia.org/wiki/Payment_card_number
  isAmex: function(creditCardNo){
    return creditCardNo.match(/^3[47]/)
  }
}
