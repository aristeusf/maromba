module.exports = function(app){
	var controller = {};
	var Descexerc = app.models.descexerc.model;

	controller.getDescricoes = function(req, res){
		Descexerc.find().exec()
			.then(
				function(descexerc){
					res.json(descexerc);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getDescricao = function(req, res){
		var _id = req.params.id;
		Descexerc.findById(_id).exec()
			.then(
				function(descexerc){
					if (!descexerc) throw new Error("Descrição não encontrado");
						res.json(descexerc);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveDescricoes = function(req,res){
		var _id = req.body._id;
		if(_id){

			var atualiza = {
				descricao:req.body.descricao
			};

			Descexerc.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(descexerc){
						res.json(descexerc);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			Descexerc.create(req.body)
				.then(
					function(descexerc){
						res.status(201).json(descexerc);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.removeDescricoes = function(req,res){
		var _id = req.params.id;
		Descexerc.remove({"_id" : _id}).exec()
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