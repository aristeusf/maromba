var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		partescorpo:{
			type: mongoose.Schema.ObjectId,
			ref: 'PartesCorpo'
		},
		nome:{
			type: String,
		},
	});

	return mongoose.model('Treinamentos', schema);
}