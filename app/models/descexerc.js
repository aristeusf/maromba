var mongoose = require('mongoose');

var descSchema = mongoose.Schema({
	descricao: String
});

var descModel = mongoose.model('DescExerc', descSchema);

var Export = {
	schema: descSchema,
	model: descModel
};

module.exports = Export;