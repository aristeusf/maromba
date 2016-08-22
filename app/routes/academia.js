module.exports = function (app) {
	
var controller = app.controllers.academia;

	app.route('/academias')
		.get(controller.getAcademias)
		.post(controller.saveAcademias)

	app.route('/academias/:id')
		.get(controller.getAcademia)
		.delete(controller.removeAcademias)

	app.route('/academias/:idacad/:idprofe')
		.delete(controller.removeProfessores)
		.post(controller.saveProfessores)
};