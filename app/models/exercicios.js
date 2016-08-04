var mongoose = require('mongoose');

var descExerciciosSchema = require('descexercicios');

module.exports = function(){
	var schema = mongoose.Schema({
		numero{
			type: Number
		},
		descricao:[descExerciciosSchema],
		intensidade{
			type: String
		},
		tempo{
			type: String
		},
		repeticoes{
			type: number
		},
		carga{
			type: String
		}
	});

	return mongoose.model('Exercicios', schema);
}