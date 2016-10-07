'use strict';

const config = require('./../config');
const mongodb = require('mongodb').MongoClient;
const assert = require('assert');

module.exports = {
  save: function(data, done){
    mongodb.connect(config.db, (error,db)=>{
      assert.equal(null, error);
      db.collection('transaction').insertOne(data, (err,res)=>{
        assert.equal(null, err);
        console.log('Transaction record saved'); 
        db.close();
        done();
      })
    }
  }
}
