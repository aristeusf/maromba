module.exports = function (app) {
	
  var controller = app.controllers.alunos;

  app.route('/alunos')
  	.get(controller.getAlunos)
  	.post(controller.SaveAlunos)

  app.route('/alunos/:id')
	.get(controller.getAluno)
	.delete(controller.deletAlunos);
};