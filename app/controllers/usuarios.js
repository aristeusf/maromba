module.exports = function(app){
	var controller = {};
	var Usuario = app.models.usuarios.model;

	controller.getUsuarios = function(req, res){
		Usuario.find().exec()
			.then(
				function(usuarios){
					res.json(usuarios);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getUsuario = function(req, res){
		var _id = req.params.id;
		Usuario.findById(_id).exec()
			.then(
				function(usuarios){
					if (!usuarios) throw new Error("Contato não encontrado");
						res.json(usuarios);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveUsuarios = function(req,res){
		var _id = req.body._id;
		console.log(_id);
		if(_id){

			var atualiza = {
				email:req.body.email,
				username:req.body.username,
				senha:req.body.senha,
				aluno:req.body.aluno
			};

			Usuario.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(usuarios){
						res.json(usuarios);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			Usuario.create(req.body)
				.then(
					function(usuarios){
						res.status(201).json(usuarios);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.removeUsuarios = function(req,res){
		var _id = req.params.id;
		Usuario.remove({"_id" : _id}).exec()
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