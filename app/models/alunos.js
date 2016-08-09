var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({

		nome:{
			type: String
		},
		endereco:{
			type: String
		},
		fone:{
			type: String
		},
		email:{
			type: String,
			unique: true
		},
		cpf:{
			type: String,
			unique: true
		},
		idade:{
			type: String
		},
		objetivo:{
			type: String
		},
		inicio:{
			type: String
		},
		duracao:{
			type: String
		},
		treinossemana:{
			type: String
		},
		intervalo:{
			type: String
		},

		medidas:{
			type: mongoose.Schema.ObjectId,
			ref: 'Medidas'
		},
		exercicios:{
			type: mongoose.Schema.ObjectId,
			ref: 'Exercicios'
		},
		treinos:{
			type: mongoose.Schema.ObjectId,
			ref: 'Treinos'
		}
	});

	return mongoose.model('Alunos', schema);
}