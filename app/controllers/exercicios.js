module.exports = function(app){
	var controller = {};
	var Exercicios = app.models.exercicios.model;

	controller.getExercicios = function(req, res){
		Exercicios.find().exec()
			.then(
				function(exercicios){
					res.json(exercicios);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getExercicio = function(req, res){
		var _id = req.params.id;
		Exercicios.findById(_id).exec()
			.then(
				function(exercicios){
					if (!exercicios) throw new Error("Descrição não encontrado");
						res.json(exercicios);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveExercicios = function(req,res){
		var _id = req.body._id;
		if(_id){

			var atualiza = {
				numero:req.body.numero,
				intensidade:req.body.intensidade,
				tempo:req.body.tempo,
				repeticoes:req.body.repeticoes,
				carga:req.body.carga,
				intensidadereal:req.body.intensidadereal,
				temporeal:req.body.temporeal,
				repeticoesreal:req.body.repeticoesreal,
				cargareal:req.body.cargareal,
				datareal:req.body.datareal,
				descricao:req.body.descricao
			};

			Exercicios.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(exercicios){
						res.json(exercicios);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			Exercicios.create(req.body)
				.then(
					function(exercicios){
						res.status(201).json(exercicios);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.removeExercicios = function(req,res){
		var _id = req.params.id;
		Exercicios.remove({"_id" : _id}).exec()
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