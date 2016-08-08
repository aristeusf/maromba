module.exports = function(app){
	var controller = {};
	var Academia = app.models.academia;

	controller.getAcademias = function(req, res){
		console.log("getAcademias");
		Academia.find().exec()
			.then(
				function(academias){
					res.json(academias);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getAcademia = function(req, res){
		console.log("getAcademia");
		var _id = req.params.id;
		Academia.findById(_id).exec()
			.then(
				function(academias){
					if (!academias) throw new Error("Contato não encontrado");
						res.json(academias);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.SaveAcademia = function(req,res){
		console.log("SaveAcademia");
		var _id = req.body._id;
		console.log(_id);
		if(_id){
			console.log("Update");

			var atualiza = {
				razaosocial:req.body.razaosocial,
		        endereco:req.body.endereco,
		        fone:req.body.fone,
				cnpj:req.body.cnpj
			};

			Academia.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(academia){
						res.json(academia);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			console.log("Insert");
			Academia.create(req.body)
				.then(
					function(academia){
						res.status(201).json(academia);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.deleteAcademia = function(req,res){
		var _id = req.params.id;
		Academia.remove({"_id" : _id}).exec()
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