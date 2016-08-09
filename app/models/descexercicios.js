var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		nome:{
			type: String,
		},
		foto:{
			type: String
		},
		linkvideo:{
			type: String
		}
	});

	return mongoose.model('DescExercicios', schema);
}