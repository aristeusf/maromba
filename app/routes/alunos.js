module.exports = function (app) {
	
  var controller = app.controllers.alunos;

  app.route('/alunos')
  	.get(controller.getAlunos)
  	.post(controller.saveAlunos)

  app.route('/alunos/:id')
	.get(controller.getAluno)
	.delete(controller.removeAlunos)

  app.route('/alunos/:idaluno/:tiposub/:idsubitem')
	.delete(controller.removeSubItem)
  .post(controller.saveSubItem)
};