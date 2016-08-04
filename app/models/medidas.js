var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		data{
			type: Date
		},
		torax{
			type: Number
		},
		cintura{
			type: Number
		}
		barriga{
			type: Number
		},
		quadril{
			type: Number
		},
		bracodir{
			type: Number
		},
		bracoesq{
			type: Number
		},
		antbracod{
			type: Number
		},
		antbracoe{
			type: Number
		},
		coxadir{
			type: Number
		},
		coxaesq{
			type: Number
		},
		pernadir{
			type: Number
		},
		ernaesq{
			type: Number
		}
	});

	return mongoose.model('Medidas', schema);
}