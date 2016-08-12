var mongoose = require('mongoose');

var Treinamento = require('../models/treinamentos').schema;

module.exports = function(){
	var schema = mongoose.Schema({

		nome:{
			type: String
		},

		cpf:{
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

		treinamento:[Treinamento]

	});

	return mongoose.model('Aluno', schema);
};