var mongoose = require('mongoose');

//var Aparelhos = require('../models/aparelhos').schema;
//var app = require('./config/express')();

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

var TreinamentosSchema = new mongoose.Schema({

	descricao: String,

	treino: [TreinoSchema]
});

var TreinamentosModel = mongoose.model('Treinamento', TreinamentosSchema);

var Export = {
	schema: TreinamentosSchema,
	model:TreinamentosModel
};

module.exports = Export;