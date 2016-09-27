'use strict';

const config = require('./../../config');
const paypal = function(opts){
  return {
    send: function(amount, done){
      done()
    }
  }
}

module.exports = paypal;
