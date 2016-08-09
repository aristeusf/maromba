var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({

		nome:{
			type: String
		},
		fone:{
			type: String
		},
		email:{
			type: String,
			unique: true
		},
		endereco:{
			type: String
		},
		cpf:{
			type: String
		},

		alunos:{
			type: mongoose.Schema.ObjectId,
			ref: 'Alunos'
		}

	});

	return mongoose.model('Professores', schema);
}