module.exports = function (app) {
	
  var controller = app.controllers.treinamentos;

  app.route('/treinamento')
  	.get(controller.getTreinamentos)
  	.post(controller.saveTreinamentos)

  app.route('/treinamento/:id')
	 .get(controller.getTreinamento)
	 .delete(controller.removeTreinamentos)

  app.route('/treinamento/:idtreinamento/:idtreino')
	 .post(controller.saveTreino)
	 .delete(controller.removeTreino)
   
};