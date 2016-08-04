var mongoose = require('mongoose');

var alunosSchema = require('alunos');

module.exports = function(){
	var schema = mongoose.Schema({

		nome{
			type: String
		},
		fone{
			type: String
		},
		email{
			type: String,
			unique: true
		},
		endereco{
			type: String
		},
		cpf{
			type: String
		},

		alunos:[alunosSchema]

	});

	return mongoose.model('Professores', schema);
}