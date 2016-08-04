module.exports = function(app){
	var controller = {};
	var Alunos = app.models.alunos;

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

	controller.getAlunos = function(req, res){
		var _id = req.params.id;
		Alunos.findById(_id).exec()
			.then(
				function(alunos){
					if (!alunos) throw new Error("Contato não encontrado");
						res.json(alunos);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.saveAlunos = function(req,res){

	};

	controller.deleteAlunos = function(req,res){
		
	};
}