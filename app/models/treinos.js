var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		treinamnetos:{
			type: mongoose.Schema.ObjectId,
			ref: 'Treinamentos'
		},
		numero:{
			type: Number
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