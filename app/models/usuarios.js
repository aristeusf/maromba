var mongoose = require('mongoose');

module.exports = function(app){

	var Alunos = app.models.alunos.schema;

	var UsuarioSchema = new mongoose.Schema({

		email:{
			type: String,
			unique: true
		},
		
		username: String,

		senha: String,

		aluno: [Alunos]
	});

	var UsuarioModel = mongoose.model('Usuario', UsuarioSchema);

	var Export = {
		schema: UsuarioSchema,
		model:UsuarioModel
	};

	return Export;

}