// Person.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Person = new Schema({
  first: {
    type: String
  },
  last:{
  	type: String
  },
  age: {
	type: String
  },

},{
    collection: 'persons'
});
 
module.exports = mongoose.model('Person', Person);