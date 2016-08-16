var mongoose = require('mongoose');

var Aparelhos = require('../models/aparelhos').schema;

var CorpoSchema = new mongoose.Schema({

		nome: String,

		aparelhos: [Aparelhos]

});

var CorpoModel = mongoose.model('Corpo', CorpoSchema);

var Export = {
	schema: CorpoSchema,
	model: CorpoModel
};

module.exports = Export;