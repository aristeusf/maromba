module.exports = function (app) {
	
  var controller = app.controllers.desctreinos;

  app.route('/desctreinos')
  	.get(controller.getDescTreinos)
  	.post(controller.SaveDescTreinos)

  app.route('/desctreinos/:id')
	.get(controller.getDescTreino)
	.delete(controller.deleteDescTreinos);
};