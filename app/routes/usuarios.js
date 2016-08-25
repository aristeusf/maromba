module.exports = function (app) {
	
  var controller = app.controllers.usuarios;

  app.route('/usuarios')
  	.get(controller.getUsuarios)
  	.post(controller.saveUsuarios)

  app.route('/usuarios/:id')
	.get(controller.getUsuario)
	.delete(controller.removeUsuarios)
};