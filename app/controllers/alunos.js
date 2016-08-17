module.exports = function(app){
	
	var controller = {};

	var Alunos = app.models.alunos.model;

	controller.getAlunos = function(req, res){
		Alunos.find().exec()
			.then(
				function(alunos){
					res.json(alunos);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getAluno = function(req, res){
		var _id = req.params.id;
		Alunos.findById(_id).exec()
			.then(
				function(alunos){
					if (!alunos) throw new Error("Contato não encontrado");
						res.json(alunos);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.saveAlunos = function(req, res){
		
		var _id = req.body._id;

		if(_id){
			console.log("Atualizar");
			console.log(_id);
			var atualiza = {
				nome:req.body.nome,
                cpf:req.body.cpf,
    			endereco:req.body.endereco,
    			fone:req.body.fone,
    			email:req.body.email
			}

			Alunos.findByIdAndUpdate(_id, atualiza).exec()
			.then(
				function(alunos){
					res.json(alunos);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);

		} else {
			console.log("Insert");
			Alunos.create(req.body)
				.then(
					function(alunos){
						res.status(201).json(alunos);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}

		
	};

	controller.removeAlunos = function(req, res){
		var _id = req.params.id;
		Alunos.remove({"_id" : _id}).exec()
			.then(
				function() {
					res.status(204).end();
				},
				function(erro) {
					return console.error(erro);
				}
			);
	};

	controller.saveSubItem = function(req, res){
		var idaluno = req.params.idaluno;
		var idsubitem = req.params.idsubitem;
		var tpsubitem = req.params.tiposub;

		Alunos.findOne({_id: idaluno}, function (erro, alunos) {

			var treino = alunos.treino.id(idtreino);

			alunos.numero = req.body.numero;
			alunos.reg = req.body.reg;
			alunos.series = req.body.series;
			alunos.repeticoes = req.body.repeticoes;
			alunos.peso = req.body.peso;
			alunos.seriesrel = req.body.seriesrel;
			alunos.repeticoesrel = req.body.repeticoesrel;
			alunos.pesorel = req.body.pesorel;

			alunos.save(function (erro){
				if(!erro)
					res.status(201).json(treino);
				else{
					console.log(erro);
					res.status(500).json(erro);
				}

			});

		});
	};

	controller.removeSubItem = function(req, res){

		var idtreinamento = req.params.idtreinamento;
		var idtreino = req.params.idtreino;

		Alunos.findOne({_id: idtreinamento}, function (erro, alunos) {

			alunos.treino.id(idtreino).remove();

			alunos.save(function (erro){
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