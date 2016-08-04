var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		descricao{
			type: String
		},
		linkvideo{
			type: String
		}
	});

	return mongoose.model('DescExercicios', schema);
}