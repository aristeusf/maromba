var mongoose = require('mongoose');

var Treino = require('../models/treino').schema;

module.exports = function(){
	var schema = mongoose.Schema({

		descricao:{
			type: String
		},

		treino:[Treino],
	});

	return mongoose.model('Treinamento', schema);
};