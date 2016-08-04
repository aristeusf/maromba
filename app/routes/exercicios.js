module.exports = function (app) {
	
  var controller = app.controllers.exercicios;

  app.route('/exercicios')
  	.get(controller.getExercicios)
  	.post(controller.SaveExercicios)

  app.route('/exercicios/:id')
	.get(controller.getExercicio)
	.delete(controller.deleteExercicios);
};