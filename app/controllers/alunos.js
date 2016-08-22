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
		var tipoacao = req.params.tipoacao;
		var idtreinamento = req.params.idtreinamento;
		var idtreino = req.params.idtreino;

		Alunos.findOne({_id: idaluno}, function (erro, alunos) {
		
			var retorno = null;
		
			switch(tipoacao){
				case 'Insert':
					
					switch(tpsubitem){
						case 'Medidas':
							alunos.medidas.push(req.body);
							break;
						case 'Exercicios':
							alunos.exercicios.push(req.body);
							break;
						case 'Treinamentos':
							alunos.treinamento.push(req.body);
							break;
						case 'Treino':
							var Treinamentos = alunos.treinamento.id(idtreinamento);
							Treinamentos.treino.push(req.body);
							break;
					}
					
					break;
				case 'Update':
					switch(tpsubitem){
						case 'Medidas':
							var Medidas = alunos.medidas.id(idsubitem);
							Medidas.data = req.body.data;
							Medidas.torax = req.body.torax;
							Medidas.cintura = req.body.cintura;
							Medidas.barriga = req.body.barriga;
							Medidas.quadril = req.body.quadril;
							Medidas.bracodir = req.body.bracodir;
							Medidas.bracoesq = req.body.bracoesq;
							Medidas.antebracodir = req.body.antebracodir;
							Medidas.antebracoesq = req.body.antebracoesq;
							Medidas.coxadir = req.body.coxadir;
							Medidas.coxaesq = req.body.coxaesq;
							Medidas.pernadir = req.body.pernadir;
							Medidas.pernaesq = req.body.pernaesq;
							break;
						case 'Exercicios':
							console.log(req.body.descricao);
							var Exercicos = alunos.exercicios.id(idsubitem);
							Exercicos.numero = req.body.numero;
							Exercicos.descricao =  [req.body.descricao];
							Exercicos.intensidade = req.body.intensidade;
							Exercicos.tempo = req.body.tempo;
							Exercicos.repeticoes = req.body.repeticoes;
							Exercicos.carga = req.body.carga;
							Exercicos.intensidadereal = req.body.intensidadereal;
							Exercicos.temporeal = req.body.temporeal;
							Exercicos.repeticoesreal = req.body.repeticoesreal;
							Exercicos.cargareal = req.body.cargareal;
							Exercicos.datareal = req.body.datareal
							break;
						case 'Treinamentos':
							var Treinamentos = alunos.treinamento.id(idsubitem);
							Treinamentos.descricao = req.body.descricao;
							break;
						case 'Treino':
							var Treinamentos = alunos.treinamento.id(idtreinamento);
							var Treino = Treinamentos.treino.id(idtreino);
							Treino.numero = req.body.numero;
							Treino.reg = req.body.reg;
							Treino.series = req.body.series;
							Treino.repeticoes = req.body.repeticoes;
							Treino.peso = req.body.peso;
							Treino.seriesrel = req.body.seriesrel;
							Treino.repeticoesrel = req.body.repeticoesrel;
							Treino.pesorel = req.body.pesorel;
							Treino.datatreino = req.body.datatreino;
							Treino.aparelhos = req.body.aparelhos;
							break;
					}
					break;
			}
			
			alunos.save(function(erro){
				if(!erro)
					res.status(201).json(req.body);
				else{
					console.log(erro);
					res.status(500).json(erro);
				}
			});

		});
	};

	controller.removeSubItem = function(req, res){

		var idaluno = req.params.idaluno;
		var idsubitem = req.params.idsubitem;
		var tpsubitem = req.params.tiposub;
		var tipoacao = req.params.tipoacao;
		var idtreinamento = req.params.idtreinamento;
		var idtreino = req.params.idtreino;

		Alunos.findOne({_id: idaluno}, function (erro, alunos) {
		
			if (tipoacao == 'Delete'){
				switch(tpsubitem){
					case 'Medidas':
						alunos.medidas.id(idsubitem).remove();
						break;
					case 'Exercicios':
						alunos.exercicios.id(idsubitem).remove();
						break;
					case 'Treinamentos':
						alunos.treinamento.id(idsubitem).remove();
						break;
					case 'Treino':
						console.log(idtreinamento);
						console.log(idtreino);
						var Treinamento = alunos.treinamento.id(idtreinamento);
						Treinamento.treino.id(idtreino).remove();
						break;
				}
			}

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