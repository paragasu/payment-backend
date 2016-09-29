'use strict';

const assert = require('chai').assert;
const util = require('./../lib/util');
const form = require('./../lib/validate');

//https://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm
describe('Check if it is American Express card', ()=>{
  it('Valid american express number should return true', ()=>{
    let isAmex = util.isAmericanExpressCard('378282246310005')
    assert.equal(isAmex, true)
  })

  it('Valid american express corporate should return true', ()=>{
    let isAmex = util.isAmericanExpressCard('378734493671000')
    assert.equal(isAmex, true)
  })
 
  it('Mastercard should return false', ()=>{
    let isAmex = util.isAmericanExpressCard('5555555555554444')
    assert.equal(isAmex, false)
  }) 

  it('Visa should return false', ()=>{
    let isAmex = util.isAmericanExpressCard('4012888888881881')
    assert.equal(isAmex, false)
  }) 
})


describe('Select payment gateway based on given rules', ()=>{
  it('American Express Card should return paypal', ()=>{
    let paymentGateway = util.getPaymentGateway('378282246310005', 'USD')
    assert.equal(paymentGateway, 'paypal')
  }) 

  it('USD currency should return paypal', ()=>{
    let paymentGateway = util.getPaymentGateway('5555555555554444', 'USD')
    assert.equal(paymentGateway, 'paypal')
  }) 

  it('EUR currency should return paypal', ()=>{
    let paymentGateway = util.getPaymentGateway('5555555555554444', 'EUR')
    assert.equal(paymentGateway, 'paypal')
  }) 

  it('AUD currency should return paypal', ()=>{
    let paymentGateway = util.getPaymentGateway('5555555555554444', 'AUD')
    assert.equal(paymentGateway, 'paypal')
  }) 

  it('HKD currency should return braintree', ()=>{
    let paymentGateway = util.getPaymentGateway('5555555555554444', 'HKD')
    assert.equal(paymentGateway, 'braintree')
  }) 

  it('THB currency should return braintree', ()=>{
    let paymentGateway = util.getPaymentGateway('5555555555554444', 'THB')
    assert.equal(paymentGateway, 'braintree')
  }) 

  it('SGD currency should return braintree', ()=>{
    let paymentGateway = util.getPaymentGateway('5555555555554444', 'SGD')
    assert.equal(paymentGateway, 'braintree')
  }) 
})


describe('Form validation', ()=>{
  it('Name is valid', ()=>{
    assert.equal(form.validName('Sumandak Tamparuli'), true)  
  })  

  it('Name is invalid', ()=>{
    assert.equal(form.validName('Sum &*^'), false)
  })

  it('Price integer is valid', ()=>{
    assert.equal(form.validPrice(18), true)
  })

  it('Price double is valid', ()=>{
    assert.equal(form.validPrice(18.00), true)
  })

  it('Price double is valid', ()=>{
    assert.equal(form.validPrice(18.90), true)
  })

  it('Price string is invalid', ()=>{
    assert.equal(form.validPrice('18.00'), true)
  })

  it('Price string is invalid', ()=>{
    assert.equal(form.validPrice('hello'), false)
  })

  it('Valid currency', ()=>{
    assert.equal(form.validCurrency('USD'), true)
  })

  it('Invalid currency when it is not in the supported currency list', ()=>{
    assert.equal(form.validCurrency('PHP'), false)
  })

  it('Valid credit card CCV', ()=>{
    assert.equal(form.validCvv(443), true)
  })

  it('Invalid credit card CCV', ()=>{
    assert.equal(form.validCvv(443738), false)
  })

  it('Check for valid expiry month', ()=>{
    assert.equal(form.validExpiryMonth('08'), true)
  })

  it('Check for invalid expirty month', ()=>{
    assert.equal(form.validExpiryMonth('88'), false)
  })

  it('Check for valid expiry year', ()=>{
    assert.equal(form.validExpiryYear('18'), true)
  })

  it('Check for invalid expiry year', ()=>{
    assert.equal(form.validExpiryYear('34'), false)
  })


  it('Valid credit card should return true', ()=>{
    assert.equal(form.validCreditCard('378282246310005'), true)
  })

  it('Invalid random chars should return false', ()=>{
    assert.equal(form.validCreditCard('asdfasf8'), false)
  })

  it('Invalid credit card should return false', ()=>{
    assert.equal(form.validCreditCard('378282246310009'), false)
  })
})
