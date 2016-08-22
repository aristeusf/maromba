module.exports = function(app){
	var controller = {};

	var Academias = app.models.academia.model;

	controller.getAcademias = function(req, res){
		Academias.find().exec()
			.then(
				function(academia){
					res.json(academia);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getAcademia = function(req, res){
		var _id = req.params.id;
		Academias.findById(_id).exec()
			.then(
				function(academia){
					if (!academia) throw new Error("Contato não encontrado");
						res.json(academia);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveAcademias = function(req,res){
		var _id = req.body._id;
		var _idcorpo = req.body._idcorpo;
		if(_id){

			var atualiza = {
				razaosocial:req.body.razaosocial,
				cnpj:req.body.cnpj,
				endereco:req.body.endereco,
				fone:req.body.fone
			};

			Academias.findByIdAndUpdate(_id, atualiza).exec()
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
			Academias.create(req.body)
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
	};

	controller.removeAcademias = function(req,res){
		var _id = req.params.id;
		Academias.remove({"_id" : _id}).exec()
			.then(
				function() {
					res.status(204).end();
				},
				function(erro) {
					return console.error(erro);
				}
			);
	};
	
	controller.saveProfessores = function(req, res){
	
		var idacad = req.params.idacad;
		var idprofe = req.params.idprofe;
		
		Academias.findOne({_id: idacad}, function(erro, academia) {
			academia.professores.push({_id:idprofe});
			if(!erro){
				academia.save();
				res.status(201).json(academia);
			}
			else{
				console.log(erro);
				res.status(500).json(erro);
			}
				
		});
	};
	
	controller.removeProfessores = function(req, res){
	
		var idacad = req.params.idacad;
		var idprofe = req.params.idprofe;
		
		Academias.findOne({_id: idacad}, function(erro, academia) {
			academia.professores.id(idprofe).remove();
			if(!erro){
				academia.save();
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