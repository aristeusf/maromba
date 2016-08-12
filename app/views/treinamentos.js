module.exports = function(app){
	var controller = {};
	var Treinamentos = app.models.treinamentos;

	controller.getTreinamentos = function(req, res){
		console.log("getPartesCorpo");

		var _idbparte = req.query._idbparte;

		if (!_idbparte)
		{
			Treinamentos.find().exec()
				.then(
					function(treinamentos){
						res.json(treinamentos);
					},
					function(erro){
						console.error(erro);
						res.status(500).json(erro);
					}
				);
		}
		else
		{
			Treinamentos.find({partescorpo: _idbparte}).exec()
				.then(
					function(treinamentos){
						res.json(treinamentos);
					},
					function(erro){
						console.error(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.getTreinamento = function(req, res){
		console.log("getPartesCorpo");
		var _id = req.params.id;
		Treinamentos.findById(_id).exec()
			.then(
				function(treinamentos){
					if (!treinamentos) throw new Error("Contato não encontrado");
						res.json(partescorpo);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveTreinamentos = function(req,res){
		console.log("SavePartesCorpo");
		var _id = req.body._id;
		console.log(_id);
		if(_id){
			console.log("Update");

			var atualiza = {
				partescorpo:req.body.partescorpo,
				nome:req.body.nome,
				foto:req.body.foto,
				linkvideo:req.body.linkvideo
			};

			Treinamentos.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(treinamentos){
						res.json(treinamentos);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			console.log("Insert");
			Treinamentos.create(req.body)
				.then(
					function(treinamentos){
						res.status(201).json(treinamentos);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.deleteTreinamentos = function(req,res){
		var _id = req.params.id;
		Treinamentos.remove({"_id" : _id}).exec()
			.then(
				function() {
					res.status(204).end();
				},
				function(erro) {
					return console.error(erro);
				}
			);
	}

	return controller;
}