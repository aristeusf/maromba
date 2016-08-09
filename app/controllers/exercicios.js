module.exports = function(app){
	var controller = {};
	var Exercicios = app.models.exercicios;

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
					if (!exercicios) throw new Error("Contato não encontrado");
						res.json(exercicios);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.SaveExercicios = function(req,res){
		console.log("SaveExercicios");
		var _id = req.body._id;
		console.log(_id);
		if(_id){
			console.log("Update");

			var atualiza = {
				exercicio:req.body.exercicio,
				numero:req.body.numero,
				intensidade:req.body.intensidade,
				tempo:req.body.tempo,
				repeticoes:req.body.repeticoes,
				carga:req.body.carga
			};

			Exercicios.findByIdAndUpdate(_id, atualiza).exec()
				.then(
					function(exercicio){
						res.json(exercicio);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
		else {
			console.log("Insert");
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

	controller.deleteExercicios = function(req,res){
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
	};

	return controller;
};