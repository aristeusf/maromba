module.exports = function(app){
	var controller = {};
	var Partescorpo = app.models.partescorpo;

	controller.getPartesCorpo = function(req, res){
		console.log("getPartesCorpo");
		Partescorpo.find().exec()
			.then(
				function(partescorpo){
					res.json(partescorpo);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getParteCorpo = function(req, res){
		console.log("getPartesCorpo");
		var _id = req.params.id;
		Partescorpo.findById(_id).exec()
			.then(
				function(partescorpo){
					if (!partescorpo) throw new Error("Contato não encontrado");
						res.json(partescorpo);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.savePartesCorpo = function(req,res){
		console.log("SavePartesCorpo");
		var _id = req.body._id;
		console.log(_id);
		if(_id){
			console.log("Update");

			var atualiza = {
				nome:req.body.nome
			};

			Partescorpo.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(partescorpo){
						res.json(partescorpo);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			console.log("Insert");
			Partescorpo.create(req.body)
				.then(
					function(partescorpo){
						res.status(201).json(partescorpo);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.deletePartesCorpo = function(req,res){
		var _id = req.params.id;
		Partescorpo.remove({"_id" : _id}).exec()
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