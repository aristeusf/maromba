module.exports = function(app){
	var controller = {};
	var Professores = app.models.professores;

	controller.getProfessores = function(req, res){
		Professores.find().exec()
			.then(
				function(professores){
					res.json(professores);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getProfessores = function(req, res){
		var _id = req.params.id;
		Professores.findById(_id).exec()
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

	};

	controller.deleteProfessores = function(req,res){
		
	};
}