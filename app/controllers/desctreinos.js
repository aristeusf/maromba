module.exports = function(app){
	var controller = {};
	var DescTreinos = app.models.desctreinos;

	controller.getDescTreinos = function(req, res){
		DescTreinos.find().exec()
			.then(
				function(desctreinos){
					res.json(desctreinos);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getDescTreinos = function(req, res){
		var _id = req.params.id;
		DescTreinos.findById(_id).exec()
			.then(
				function(desctreinos){
					if (!desctreinos) throw new Error("Contato não encontrado");
						res.json(exercicios);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveDescTreinos = function(req,res){

	};

	controller.deleteDescTreinos = function(req,res){
		
	};