var mongoose = require('mongoose');

var abdomenSchema = require('abdomen');
var pernasSchema = require('pernas');
var bicepsantbracoSchema = require('bicepsentbraco');
var tricepsSchema = require('triceps');
var ombrosSchema = require('ombros');
var costasSchema = require('costas');
var peitoraisSchema = require('peitorais');

module.exports = function(){
	var schema = mongoose.Schema({
		peitorais:[peitoraisSchema],
		costas:[costasSchema],
		ombros:[ombrosSchema],
		triceps:[tricepsSchema],
		bicepsantbraco:[bicepsantbracoSchema],
		pernas:[pernasSchema],
		abdomen:[abdomenSchema],
	});

	return mongoose.model('Treinos', schema);
}