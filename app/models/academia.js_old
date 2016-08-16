var mongoose = require('mongoose');

var ProfessoresSchema = require('../models/professores').schema;

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
		professores:[ProfessoresSchema]

	});

	return mongoose.model('Academia', schema);
};