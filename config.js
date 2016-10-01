'use strict';

const config = {
  development: {
    port: 3000,
    sandbox: true,
    paypal: {
      //username payment_api1.backend.com
      clientId: 'BBHJZTPU534KF28J',
      clientSecret: 'AFcWxV21C7fd0v3bYYYRCpSSRl31AMXfviMZHggoFXWsoX9GKgrRhy8Q'
    },
    braintree: {
      merchantId: '55r7jztdxb2qwqm9',
      publicKey: 'wkqy35sgmgztprzq',
      privateKey: '689022be221a1a40d39606aef6979788'
    }
  }
}


module.exports = config[process.env.NODE_ENV || 'development']
