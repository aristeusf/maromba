var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({

		razaosocial:{
			type: String
		},
		endereco:{
			type: String
		},
		fone:{
			type: String
		},
		cnpj:{
			type: String,
			unique: true
		},
		professores:{
			type: mongoose.Schema.ObjectId,
			ref: 'Professores'
		}

	});

	return mongoose.model('Academia', schema);
};