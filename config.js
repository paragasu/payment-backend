'use strict';

const config = {
  development: {
    port: 3000,
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
  }
}


module.exports = config[process.env.NODE_ENV || 'development']
