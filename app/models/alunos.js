var mongoose = require('mongoose');

module.exports = function(app){

	var Treinamento = app.models.treinamentos.schema;
	var Medidas = app.models.medidas.schema;
	var Exercicios = app.models.exercicios.schema;

	var AlunosSchema = mongoose.Schema({

		nome: String,
		cpf: String,
		endereco: String,
		fone: String,
		email:{
			type: String,
			unique: true
		},
		medidas:[Medidas],
		exercicios:[Exercicios],
		treinamento:[Treinamento]

	});

	var AlunosModels =  mongoose.model('Aluno', AlunosSchema);

	var Export = {
		schema: AlunosSchema,
		model: AlunosModels
	}

	return Export;

}