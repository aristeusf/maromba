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

	controller.getExercicios = function(req, res){
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

	controller.saveExercicios = function(req,res){

	};

	controller.deleteExercicios = function(req,res){
		
	};