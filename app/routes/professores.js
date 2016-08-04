module.exports = function (app) {
	
  var controller = app.controllers.professores;

  app.route('/professores')
  	.get(controller.getProfessores)
  	.post(controller.SaveProfessores)

  app.route('/professores/:id')
	.get(controller.getProfessor)
	.delete(controller.deletProfessores);
};