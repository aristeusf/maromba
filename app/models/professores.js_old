var mongoose = require('mongoose');

var Alunos = require('../models/alunos').schema;

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

		alunos:[Alunos]

	});

	return mongoose.model('Professores', schema);
};