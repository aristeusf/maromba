module.exports = function (app) {
	
  var controller = app.controllers.descexerc;

  app.route('/descexerc')
  	.get(controller.getDescricoes)
  	.post(controller.saveDescricoes)

  app.route('/descexerc/:id')
	.get(controller.getDescricao)
	.delete(controller.removeDescricoes)
};