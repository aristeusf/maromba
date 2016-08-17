var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express();

  app.set('port', 3000);

  app.use(express.static('./public'));

  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());


  load('models/aparelhos', {cwd: 'app'})
    .then('models/corpo', {cwd: 'app'})
    .then('models/treino', {cwd: 'app'})
    .then('models/treinamentos', {cwd: 'app'})
    .then('models/descexerc', {cwd: 'app'})
    .then('models/exercicios', {cwd: 'app'})
    .then('models/medidas', {cwd: 'app'})
    .then('models/alunos', {cwd: 'app'})
  	.then('controllers')
  	.then('routes')
  	.into(app);

  return app;
};