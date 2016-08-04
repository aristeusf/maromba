var mongoose = require('mongoose');

var descExerciciosSchema = require('descexercicios');

module.exports = function(){
	var schema = mongoose.Schema({
		numero{
			type: Number
		},
		exercicios:[descExerciciosSchema],
		reg{
			type: String
		},
		series{
			type: String
		},
		Repeticoes{
			type: String
		},
		peso{
			type: String
		}
	});

	return mongoose.model('Triceps', schema);
}