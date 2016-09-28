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

  it('American Express Card should return error if currency is not USD', ()=>{
    let paymentGateway = util.getPaymentGateway('378282246310005', 'HKD')
    let errorMsg = 'American Express credit card only support USD currency';
    assert.equal(paymentGateway, errorMsg)
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


describe('Form input validation', ()=>{
  it('Test if price is valid', ()=>{
  })  
})
