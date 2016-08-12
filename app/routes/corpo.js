module.exports = function (app) {
	
  var controller = app.controllers.corpo;

  app.route('/corpo')
  	.get(controller.getCorpos)
  	.post(controller.saveCorpo)

  app.route('/corpo/:id')
	.get(controller.getCorpo)
	.delete(controller.removeCorpo)
};