module.exports = function (app) {
	
  var controller = app.controllers.corpos;

  app.route('/corpos')
  	.get(controller.getCorpos)
  	.post(controller.saveCorpo)

  app.route('/corpos/:id')
	.get(controller.getCorpo)
	.delete(controller.removeCorpo)
};