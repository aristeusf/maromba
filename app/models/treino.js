var mongoose = require('mongoose');

var Aparelho = require('../models/aparelhos').schema;

module.exports = function(){
	var schema = mongoose.Schema({

		aparelho:[Aparelho],

		numero:{
			type: Number,
		},
		
		reg:{
			type: String
		},

		series:{
			type: String
		},
		repeticoes:{
			type: String
		},
		peso:{
			type: String
		}

	});

	return mongoose.model('Treino', schema);
};