module.exports = function(app){
	var controller = {};
	var Corpo = app.models.corpos.model;

	controller.getCorpos = function(req, res){
		Corpo.find().exec()
			.then(
				function(corpo){
					res.json(corpo);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getCorpo = function(req, res){
		var _id = req.params.id;
		Corpo.findById(_id).exec()
			.then(
				function(corpo){
					if (!corpo) throw new Error("Contato não encontrado");
						res.json(corpo);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveCorpo = function(req,res){
		var _id = req.body._id;
		console.log(_id);
		if(_id){

			var atualiza = {
				nome:req.body.nome
			};

			Corpo.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(corpo){
						res.json(corpo);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			Corpo.create(req.body)
				.then(
					function(corpo){
						res.status(201).json(corpo);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.removeCorpo = function(req,res){
		var _id = req.params.id;
		Corpo.remove({"_id" : _id}).exec()
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