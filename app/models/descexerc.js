var mongoose = require('mongoose');

module.exports = function(app){

	var descSchema = mongoose.Schema({
		descricao: String
	});

	var descModel = mongoose.model('DescExerc', descSchema);

	var Export = {
		schema: descSchema,
		model: descModel
	};

	return Export;
}