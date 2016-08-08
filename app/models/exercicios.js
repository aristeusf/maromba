var mongoose = require('mongoose');

var descExerciciosSchema = require('../models/descexcercicios').schema;

module.exports = function(){
	var schema = mongoose.Schema({
		exercicio{
			type: mongoose.Schema.ObjectId,
			ref: 'Exercicios'
		}
		numero:{
			type: Number
		},
		intensidade:{
			type: String
		},
		tempo:{
			type: String
		},
		repeticoes:{
			type: Number
		},
		carga:{
			type: String
		}
	});

	return mongoose.model('Exercicios', schema);
}