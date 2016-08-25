module.exports = function(app){
	var controller = {};

	var Aparelhos = app.models.aparelhos.model;
	var Corpo = app.models.corpos.model;

	controller.getAparelhos = function(req, res){
		Aparelhos.find().exec()
			.then(
				function(aparelhos){
					res.json(aparelhos);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getAparelho = function(req, res){
		var _id = req.params.id;
		Aparelhos.findById(_id).exec()
			.then(
				function(aparelhos){
					if (!aparelhos) throw new Error("Contato não encontrado");
						res.json(aparelhos);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveAparelho = function(req,res){
		var _id = req.body._id;
		var _idcorpo = req.body._idcorpo;
		if(_id){

			var atualiza = {
				nome:req.body.nome,
				linkvideo:req.body.linkvideo,
				foto:req.body.foto
			};

			Aparelhos.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(aparelhos){
						res.json(aparelhos);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			Aparelhos.create(req.body)
				.then(
					function(aparelhos){

						Corpo.findOne({_id: _idcorpo}, function(err, corpo) {
							if(!err)
							{
								corpo.aparelhos.push({
									_id:aparelhos._id
								});
								corpo.save();
								res.status(201).json(aparelhos);
							}
							else
							{
								console.log(erro);
								res.status(500).json(erro);
							}

						});
						 

						
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.removeAparelho = function(req,res){
		var _id = req.params.id;
		Aparelhos.remove({"_id" : _id}).exec()
			.then(
				function() {
					res.status(204).end();
				},
				function(erro) {
					return console.error(erro);
				}
			);
	};

	controller.removeAparelhoCorpo = function(req,res){
		var _idCorpo = req.params.idcorpo;

		var _idAparelho = req.params.idaparelho;
		
		Corpo.findOne({_id: _idCorpo}, function (erro, corpo) {

			if (!erro) {

				corpo.aparelhos.id(_idAparelho).remove();

				corpo.save(function (err){
					if(!err){

						Aparelhos.remove({"_id" : _idAparelho}).exec()
							.then(
								function() {
									res.status(204).end();
								},
								function(erro) {
									return console.error(erro);
								}
							);
						
					} else 
						return console.error(erro);

				});

			} else
				console.error(erro);
		})
	}

	return controller;
}