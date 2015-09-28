// uses
var express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , app = express()
  // regras
  , classeColaborador = require('./classes/colaborador.js');

// libera acesso para o localhost
app.use(cors());

// define que irá o formato application/json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// função chamada pelo frontend
app.post('/', function(request, response){
	console.log('entrada:');
	console.log(request.body);

	var func = request.body.func;
	var entrada = request.body.params;

	if (func == "login") {
		classeColaborador.login(entrada.email, entrada.senha, function(resultado, dados){
			response.send({'resultado': resultado, 'dados': dados});
		});
	} else {
		response.send('ok');
	}
});

// porta em que vai iniciar o servidor
var porta = 7070;

// iniciando o servidor
app.listen(porta, function(){
	console.log('webservice rodando na porta ' + porta);
});