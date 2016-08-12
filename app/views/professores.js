module.exports = function(app){
	var controller = {};
	var Professores = app.models.professores;
	var Academia = app.models.academia;

	controller.getProfessores = function(req, res){
		console.log("getProfessores");
		Professores.find().exec()
			.then(
				function(professores){
					res.json(professores);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getProfessor = function(req, res){
		console.log("getProfessores");
		var _id = req.params.id;
		Professores.findById(_id).exec()
			.then(
				function(professores){
					if (!professores) throw new Error("Contato não encontrado");
						res.json(professores);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveProfessores = function(req,res){
		console.log("SaveProfessores");
		var _id = req.body._id;
		var _idAcdm = req.body._idAcdm;
		console.log(_id);
		if(_id){
			console.log("Update");

			var atualiza = {
				nome:req.body.nome,
		        endereco:req.body.endereco,
		        fone:req.body.fone,
				email:req.body.email,
				cpf:req.body.cpf
			};

			Professores.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(professores){

						res.json(professores);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			console.log("Insert");
			Professores.create(req.body)
				.then(
					function(professores){
						console.log("CallBack Sucesso");

						console.log(_idAcdm);

						Academia.findOne({_id:_idAcdm}, function(erro, academia){
							console.log(academia._id);
							academia.professores.push({_id:professores._id});
							console.log("Após Push");
							academia.save(function(erro){
								if (!erro)
								{
									console.log("Gravou");
									res.status(201).json(professores);
								}
								else
								{
									console.log(erro);
									res.status(500).json(erro);
								}
							});
						});
						
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.deleteProfessores = function(req,res){
		var _id = req.params.id;
		Professores.remove({"_id" : _id}).exec()
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