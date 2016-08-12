var mongoose = require('mongoose');

module.exports = function(){
	var schema = mongoose.Schema({
		treinos:{
			type: mongoose.Schema.ObjectId,
			ref: 'Treinos'
		},
		nome:{
			type: Number
		}
	});

	return mongoose.model('TreinosInd', schema);
}