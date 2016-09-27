'use strict';

const config = {
  dev: {
    port: process.env.PORT || 3000,
    paypal: {
      api: process.env.PAYPAL_API || '',
      secret: process.env.PAYPAL_SECRET || ''
    }

    braintree: {
      api: process.env.BRAINTREE_API || '',
      secret: process.env.BRAINTREE_SECRET || ''
    }
  }
}


module.exports = config[process.env.NODE_ENV || 'dev']
