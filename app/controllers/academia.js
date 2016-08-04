module.exports = function(app){
	var controller = {};
	var Academia = app.models.academia;

	controller.getAcademias = function(req, res){
		Academia.find().exec()
			.then(
				function(academia){
					res.json(academia);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getAcademia = function(req, res){
		var _id = req.params.id;
		Academia.findById(_id).exec()
			.then(
				function(academia){
					if (!academia) throw new Error("Contato não encontrado");
						res.json(academia);
				},
				function(erro){
					console.error(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.SaveAcademia = function(req,res){

	};

	controller.deleteAcademia = function(req,res){
		
	};
}