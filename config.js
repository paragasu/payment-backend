'use strict';

const config = {
  dev: {
    port: process.env.PORT || 3000,
    paypal: {
      api: process.env.PAYPAL_API || '',
      secret: process.env.PAYPAL_SECRET || ''
    },

    braintree: {
      merchantId: process.env.MERCHANT_ID || '',
      publicKey: process.env.PUBLIC_KEY || '',
      privateKey: process.env.PRIVATE_KEY || ''
    }
  }
}


module.exports = config[process.env.NODE_ENV || 'dev']
