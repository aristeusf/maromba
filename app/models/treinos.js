var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		treinamnetos:{
			type: mongoose.Schema.ObjectId,
			ref: 'Treinamnetos'
		}
		numero:{
			type: Number
		},
		nome:{
			type: String,
		},
		reg:{
			type: String
		},
		series:{
			type: String
		},
		repeticoes:{
			type: String
		},
		peso:{
			type: String
		}
	});

	return mongoose.model('Treinos', schema);
}