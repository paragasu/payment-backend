'use strict';

const config = {
  development: {
    port: 3000,
    db: 'mongodb://localhost:27017/test',
    sandbox: true,
    paypal: {
      clientId: 'AX_SYjPGHaW2cgCAODpayjLqVp6jRQ4hbx-CZUeyPzXjNc8xxgZoHoiLNIe67o7jUrfBmXiX8W1VT9Rp',
      clientSecret: 'EJqXwU2JLllw0P6Tw42PlJnrnFQq3OKbar3Jf4vuIh_pZibFPTx6D4iDwVeo5MopjGduC3rIQsVWLPcn'
    },
    braintree: {
      merchantId: '55r7jztdxb2qwqm9',
      publicKey: 'wkqy35sgmgztprzq',
      privateKey: '689022be221a1a40d39606aef6979788'
    }
  },
  production: {
    port: process.env.PORT,
    db: process.env.MONGODB_URL,
    sandbox: false,
    paypal: {
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_SECRET,
    },
    braintree: {
      merchantId: process.env.BRAINTREE_MERCHANT_ID,
      publicKey: process.env.BRAINTREE_PUBLIC_KEY,
      privateKey: process.env.BRAINTREE_PRIVATE_KEY
    }
  }
}

module.exports = config[process.env.NODE_ENV || 'development']
