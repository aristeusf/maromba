var mongoose = require('mongoose');

module.exports = function(app){

	var Aparelhos = app.models.aparelhos.schema;

	var TreinoSchema = new mongoose.Schema({

		numero: Number,
		
		reg: String,

		series: String,

		repeticoes: String,
		
		peso: String,

		seriesrel: String,

		repeticoesrel: String,

		pesorel: String,

		datatreino: String,

		aparelhos: [Aparelhos]
	});

	var TreinoModel = mongoose.model('Treino', TreinoSchema);

	var Export = {
		schema: TreinoSchema,
		model: TreinoModel
	};

	return Export;

}