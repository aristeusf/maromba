var mongoose = require('mongoose');

module.exports = function(app){

	var Alunos = app.models.alunos.schema;

	var ProfessoresSchema = mongoose.Schema({

		nome: String,
		cpf: String ,
		endereco: String,
		fone: String,
		email:{
			type: String,
			unique: true
		},
		alunos:[Alunos]

	});
	
	var ProfessoresModel = mongoose.model('Professores', ProfessoresSchema);
	
	var Export = {
		schema: ProfessoresSchema,
		model: ProfessoresModel
	};
	
	return Export;
};