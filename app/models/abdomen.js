var mongoose = require('mongoose');

var descExerciciosSchema = require('../models/descexcercicios').schema;

module.exports = function(){
	var schema = mongoose.Schema({
		numero:{
			type: Number
		},
		exercicios:[descExerciciosSchema],
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

	return mongoose.model('Abdomen', schema);
}