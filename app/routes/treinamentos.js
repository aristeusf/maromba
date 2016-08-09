module.exports = function (app) {
	
  var controller = app.controllers.treinamentos;

  app.route('/treinamentos')
  	.get(controller.getTreinamentos)
  	.post(controller.saveTreinamentos)

  app.route('/treinamentos/:id')
	.get(controller.getTreinamento)
	.delete(controller.deleteTreinamentos);
};