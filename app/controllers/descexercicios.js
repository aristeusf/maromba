module.exports = function(app){
	var controller = {};
	var Descexe = app.models.descexercicios;

	controller.getDescExercicios = function(req, res){
		console.log("getDescExercicios");
		Descexe.find().exec()
			.then(
				function(descexercicios){
					res.json(descexercicios);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getDescExercicio = function(req, res){
		console.log("getDescExercicio");
		var _id = req.params.id;
		Descexe.findById(_id).exec()
			.then(
				function(descexercicios){
					if (!descexercicios) throw new Error("Contato não encontrado");
						res.json(descexercicios);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveDescExercicios = function(req,res){
		console.log("SaveDescExercicio");
		var _id = req.body._id;
		console.log(_id);
		if(_id){
			console.log("Update");

			var atualiza = {
				nome:req.body.nome
			};

			Descexe.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(descexercicios){
						res.json(descexercicios);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			console.log("Insert");
			Descexe.create(req.body)
				.then(
					function(descexercicios){
						res.status(201).json(descexercicios);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.deleteDescExercicios = function(req,res){
		var _id = req.params.id;
		Descexe.remove({"_id" : _id}).exec()
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