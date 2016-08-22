module.exports = function(app){
	var controller = {};

	var Professores = app.models.professores.model;

	controller.getProfessores = function(req, res){
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
		var _id = req.body._id;
		var _idcorpo = req.body._idcorpo;
		if(_id){

			var atualiza = {
				nome:req.body.nome,
				cpf:req.body.cpf,
				endereco:req.body.endereco,
				fone:req.body.fone,
				email:req.body.email
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
			Professores.create(req.body)
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
	};

	controller.removeProfessores = function(req,res){
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
	};
	
	controller.saveAluno = function(req, res){
	
		var idprofe = req.params.idprofe;
		var idaluno = req.params.idaluno;
		
		Professores.findOne({_id: idprofe}, function(erro, professores) {
			professores.alunos.push({_id:idaluno});
			if(!erro){
				professores.save();
				res.status(201).json(professores);
			}
			else{
				console.log(erro);
				res.status(500).json(erro);
			}
				
		});
	};
	
	controller.removeAluno = function(req, res){
	
		var idprofe = req.params.idprofe;
		var idaluno = req.params.idaluno;
		
		Professores.findOne({_id: idprofe}, function(erro, professores) {
			professores.alunos.id(idaluno).remove();
			if(!erro){
				professores.save();
				res.status(201).end();
			}
			else{
				console.log(erro);
				res.status(500).json(erro);
			}
				
		});
	}

	return controller;
}