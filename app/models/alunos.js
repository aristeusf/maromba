var mongoose = require('mongoose');

var medidasSchema = require('medidas');
var execiciosSchema = require('execicios');
var treinosSchema = require('treinos');

module.exports = function(){
	var schema = mongoose.Schema({

		nome{
			type: String
		},
		endereco{
			type: String
		},
		fone{
			type: String
		},
		email{
			type: String,
			unique: true
		},
		cpf{
			type: String,
			unique: true
		},
		idade{
			type: String
		},
		objetivo{
			type: String
		},
		inicio{
			type: String
		},
		duracao{
			type: String
		},
		treinossemana{
			type: String
		},
		intervalo{
			type: String
		},

		medidas:[medidasSchema],
		exercicios:[execiciosSchema],
		treinos:[treinosSchema]

	});

	return mongoose.model('Alunos', schema);
}