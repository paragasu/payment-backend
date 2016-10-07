'use strict';

const config = require('./../config');
const mongodb = require('mongodb').MongoClient;
const assert = require('assert');
const objectId = require('mongodb').ObjectID;

module.exports = {
  save: function(data, done){
    mongodb.connect(config.db, (error,db)=>{
      assert.equal(null, error);
      //insert data
      db.collection('transactions').insertOne(data, (err,res)=>{
        assert.equal(null, err);
        db.close();
        done(err,res);
      })
    })
  },
  
  get: function(id, done){
    console.log(id)
    mongodb.connect(config.db, (error, db)=>{
      assert.equal(null, error);
      let oid = objectId(id);
      db.collection('transactions').findOne({_id: oid}, done);
    })
  }
}
