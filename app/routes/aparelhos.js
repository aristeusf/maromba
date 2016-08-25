module.exports = function (app) {
	
  var controller = app.controllers.aparelhos;

  app.route('/aparelhos')
  	.get(controller.getAparelhos)
  	.post(controller.saveAparelho)

  app.route('/aparelhos/:id')
	.get(controller.getAparelho)
	.delete(controller.removeAparelho)

  app.route('/aparelhos/:idaparelho/:idcorpo')
	.delete(controller.removeAparelhoCorpo)
};