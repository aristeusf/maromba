var mongoose = require('mongoose');

module.exports = function(app){

	var AparelhosSchema = new mongoose.Schema({
			nome: String,
			linkvideo: String,
			foto: String
		});

	var AparelhosModel = mongoose.model('Aparelho', AparelhosSchema);

	var Export = {
		schema: AparelhosSchema,
		model:AparelhosModel
	};
	return Export;
}