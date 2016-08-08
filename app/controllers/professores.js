module.exports = function(app){
	var controller = {};
	var MongoAcademia = app.models.academia;

	controller.getProfessores = function(req, res){

		var _id = req.query.id;
		console.log(_id);
		MongoAcademia.findById(_id).exec()
			.then(
				function(academia){
					res.json(academia.professores);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getProfessor = function(req, res){
		var _id = req.params.id;
		Academia.professores.findById(_id).exec()
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

		var bodyy = req.body;
		var academia = bodyy.academia;;
		var professores = academia.professores;
		var _id = professores._id;

		if(_id){
			
		}
		else {
			var profInsert = professores;
			console.log(professores);
			MongoAcademia.findById(academia._id).exec()
				.then(
					function(Academia){

						if(Academia.professores.length > 0)
						{
							for(var i = 0; i < Academia.professores.length; i++)
							{
								Academia.professores[i].remove;
							}
						}

						Academia.professores.push(profInsert);

						Academia.save(function (erro) {
						  if (!erro){
						  	res.status(201);
						  	console.log('Professor adicionado com sucesso!');
						  }
						  else
						  {
						  	res.status(404).json(erro);
						  	console.log(erro);
						  }
						});

					}
				);
		}

	};

	controller.deleteProfessores = function(req,res){
		
	};

	return controller;
}