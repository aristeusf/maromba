var mongoose = require('mongoose');

module.exports = function(app){
	var DescExerc = app.models.descexerc.schema;

	var ExercicioSchema = mongoose.Schema({
		numero: String,
		descricao: [DescExerc],
		intensidade: String,
		tempo: String,
		repeticoes: String,
		carga: String,
		intensidadereal: String,
		temporeal: String,
		repeticoesreal: String,
		cargareal: String,
		datareal: String
	});

	var ExercicioModel = mongoose.model('Exercicios', ExercicioSchema);

	var Export = {
		schema: ExercicioSchema,
		model: ExercicioModel
	}

	return Export;

}