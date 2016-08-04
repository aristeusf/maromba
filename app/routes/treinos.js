module.exports = function (app) {
	
  var controller = app.controllers.treinos;

  app.route('/treinos')
  	.get(controller.getTreinos)
  	.post(controller.SaveTreinos)

  app.route('/treinos/:id')
	.get(controller.getTreino)
	.delete(controller.deleteTreinos);
};