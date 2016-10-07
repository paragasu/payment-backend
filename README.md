# payment-backend
Nodejs payment backend using paypal and braintree api.   
Currently only implement for Visa, Mastercard and American Express Card


#Installation

Require mongodb running at localhost:27017
```
  $git clone git@github.com:paragasu/payment-backend.git
  $npm install
  $npm run test
  $npm run dev
```
Open browser and point to [http://localhost:3000](http://localhost:3000)


#Testing
### Paypal
[Paypal credit card test list](https://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm)

```
  visa
  4032032419770786 
  11/2019

  American Express
  371449635398431
```

### Braintree 
[Braintree's official credit card test list](https://developers.braintreepayments.com/reference/general/testing/node)
```
  visa
  4111111111111111
  SGD 
```
_Currency other than USD, EUR and AUD will do_


##On saving credit card details
Use braintree or paypal vault services.   
