var mongoose = require('mongoose');

//var app = require('../config/express')();

var Treinamento = app.models.treinamentos.schema; //require('../models/treinamentos').schema;
var Medidas = app.models.medidas.schema; //require('../models/medidas').schema;
var Exercicios = app.models.exercicios.schema; //require('../models/exercicios').schema;

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

module.exports = Export;