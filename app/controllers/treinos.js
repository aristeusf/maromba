module.exports = function(app){
	var controller = {};
	var Treinos = app.models.treinos;

	controller.getTreinos = function(req, res){
		Treinos.find().exec()
			.then(
				function(treinos){
					res.json(treinos);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getTreinos = function(req, res){
		var _id = req.params.id;
		Treinos.findById(_id).exec()
			.then(
				function(treinos){
					if (!treinos) throw new Error("Contato não encontrado");
						res.json(exercicios);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveTreinos = function(req,res){

	};

	controller.deleteTreinos = function(req,res){
		
	};