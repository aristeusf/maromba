module.exports = function (app) {
	
  var controller = app.controllers.aparelhos;

  app.route('/aparelho')
  	.get(controller.getAparelhos)
  	.post(controller.saveAparelho)

  app.route('/aparelho/:id')
	.get(controller.getAparelho)
	.delete(controller.removeAparelho)

  app.route('/aparelho/:idaparelho/:idcorpo')
	.delete(controller.removeAparelhoCorpo)
};