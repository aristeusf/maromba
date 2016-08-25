var mongoose = require('mongoose');

module.exports = function(app){

var Aparelhos = app.models.aparelhos.schema;

var CorpoSchema = new mongoose.Schema({

		nome: String,

		aparelhos: [Aparelhos]

});

var CorpoModel = mongoose.model('Corpo', CorpoSchema);

var Export = {
	schema: CorpoSchema,
	model: CorpoModel
};

return Export;

}