module.exports = function(app){
	var controller = {};

	var Treinamentos = app.models.treinamentos.model;

	controller.getTreinamentos = function(req, res){
		Treinamentos.find().exec()
			.then(
				function(treinamentos){
					res.json(treinamentos);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getTreinamento = function(req, res){
		var _id = req.params.id;
		Treinamentos.findById(_id).exec()
			.then(
				function(treinamentos){
					if (!treinamentos) throw new Error("Contato não encontrado");
						res.json(treinamentos);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.saveTreinamentos = function(req, res){
		
		var _id = req.body._id;

		if(_id){
			console.log("Atualizar");
			console.log(_id);
			var atualiza = {
				descricao:req.body.descricao
			}

			Treinamentos.findByIdAndUpdate(_id, atualiza).exec()
			.then(
				function(treinamentos){
					res.json(treinamentos);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);

		} else {
			Treinamentos.create(req.body)
				.then(
					function(treinamentos){
						res.status(201).json(treinamentos);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}

		
	};

	controller.removeTreinamentos = function(req, res){
		var _id = req.params.id;
		Treinamentos.remove({"_id" : _id}).exec()
			.then(
				function() {
					res.status(204).end();
				},
				function(erro) {
					return console.error(erro);
				}
			);
	};

	controller.saveTreino = function(req, res){
		var idtreinamento = req.params.idtreinamento;
		var idtreino = req.params.idtreino;

		Treinamentos.findOne({_id: idtreinamento}, function (erro, treinamentos) {

			var treino = treinamentos.treino.id(idtreino);

			treino.numero = req.body.numero;
			treino.reg = req.body.reg;
			treino.series = req.body.series;
			treino.repeticoes = req.body.repeticoes;
			treino.peso = req.body.peso;
			treino.seriesrel = req.body.seriesrel;
			treino.repeticoesrel = req.body.repeticoesrel;
			treino.pesorel = req.body.pesorel;

			treinamentos.save(function (erro){
				if(!erro)
					res.status(201).json(treino);
				else{
					console.log(erro);
					res.status(500).json(erro);
				}

			});

		});
	};

	controller.removeTreino = function(req, res){

		var idtreinamento = req.params.idtreinamento;
		var idtreino = req.params.idtreino;

		Treinamentos.findOne({_id: idtreinamento}, function (erro, treinamentos) {

			treinamentos.treino.id(idtreino).remove();

			treinamentos.save(function (erro){
				if(!erro)
					res.status(204).end();
				else{
					console.error(erro);
					res.status(500).json(erro);
				}
			});
		});

	};

	return controller;
}
	