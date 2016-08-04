var mongoose = require('mongoose');

var professoresSchema = require('professores');

module.exports = function(){
	var schema = mongoose.Schema({

		razaosocial{
			type: String
		},
		endereco{
			type: String
		},
		fone{
			type: String
		},
		cnpj{
			type: String,
			unique: true
		}

		professores:[professoresSchema]

	});

	return mongoose.model('Academia', schema);
}