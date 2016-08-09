module.exports = function (app) {
	
  var controller = app.controllers.descexercicios;

  app.route('/descexe')
  	.get(controller.getDescExercicios)
  	.post(controller.saveDescExercicios)

  app.route('/descexe/:id')
	.get(controller.getDescExercicio)
	.delete(controller.deleteDescExercicios);
};