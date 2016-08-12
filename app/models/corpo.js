var mongoose = require('mongoose');

var Aparelhos = require('../models/aparelhos').schema;

module.exports = function(){
	var schema = mongoose.Schema({

		nome:{
			type: String
		},

		aparelhos:[Aparelhos]

	});

	return mongoose.model('Corpo', schema);
};