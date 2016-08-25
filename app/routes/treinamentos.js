module.exports = function (app) {
	
  var controller = app.controllers.treinamentos;

  app.route('/treinamentos')
  	.get(controller.getTreinamentos)
  	.post(controller.saveTreinamentos)

  app.route('/treinamentos/:id')
	 .get(controller.getTreinamento)
	 .delete(controller.removeTreinamentos)

  app.route('/treinamentos/:idtreinamento/:idtreino')
	 .post(controller.saveTreino)
	 .delete(controller.removeTreino)
   
};