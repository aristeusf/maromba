module.exports = function (app) {
	
var controller = app.controllers.professores;

	app.route('/professores')
		.get(controller.getProfessores)
		.post(controller.saveProfessores)

	app.route('/professores/:id')
		.get(controller.getProfessor)
		.delete(controller.removeProfessores)

	app.route('/professores/:idprofe/:idaluno')
		.delete(controller.removeAluno)
		.post(controller.saveAluno)
};