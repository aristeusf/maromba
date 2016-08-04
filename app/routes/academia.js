module.exports = function (app) {
	
  var controller = app.controllers.academia;

  app.route('/academia')
  	.get(controller.getAcademias)
  	.post(controller.SaveAcademia)

  app.route('/academia/:id')
	.get(controller.getAcademia)
	.delete(controller.deleteAcademia);
};