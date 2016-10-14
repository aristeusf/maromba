var mongoose = require('mongoose');

module.exports = function(app){

	var Professores = app.models.professores.schema;
	
	var AcademiaSchema = mongoose.Schema({

		razaosocial:String,
		endereco:String,
		fone:String,
		cnpj:{
			type: String,
			unique: true
		},
		idprofessores:[mongoose.Schema.Types.ObjectId]

	});
	
	var AcademiaModel = mongoose.model('Academia', AcademiaSchema);
	
	var Export = {
		schema: AcademiaSchema,
		model: AcademiaModel
	};
	
	return Export;
};