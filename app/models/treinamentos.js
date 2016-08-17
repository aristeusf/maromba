var mongoose = require('mongoose');

module.exports = function(app){

	var Treinos = app.models.treino.schema;

	var TreinamentosSchema = new mongoose.Schema({

		descricao: String,

		treino: [Treinos]
	});

	var TreinamentosModel = mongoose.model('Treinamento', TreinamentosSchema);

	var Export = {
		schema: TreinamentosSchema,
		model:TreinamentosModel
	};

	return Export;

}