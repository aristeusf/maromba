var mongoose = require('mongoose');

module.exports = function(app){

	var MedidasSchema = mongoose.Schema({
		data: String,
		torax: String,
		cintura: String,
		barriga: String,
		quadril: String,
		bracodir: String,
		bracoesq: String,
		antebracodir: String,
		antebracoesq: String,
		coxadir: String,
		coxaesq: String,
		pernadir: String,
		pernaesq: String
	});

	var MedidasModel = mongoose.model('Medidas', MedidasSchema);

	var Export = {
		schema: MedidasSchema,
		model: MedidasModel
	};

	 return Export;
 }