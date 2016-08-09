module.exports = function (app) {
	
  var controller = app.controllers.partescorpo;

  app.route('/partescorpo')
  	.get(controller.getPartesCorpo)
  	.post(controller.savePartesCorpo)

  app.route('/partescorpo/:id')
	.get(controller.getParteCorpo)
	.delete(controller.deletePartesCorpo);
};