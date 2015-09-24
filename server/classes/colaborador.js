var db = require('../database.js');

module.exports = {
	login : function(email, senha, callback) {
		var sql = 'select * from colaborador where email = "'+ email +'" and senha = "'+ senha +'"';
		db.rodaSql(sql, function(dados){
			if (dados.length > 0) {
				callback(true, dados);
			} else {
				callback(false, 'Email ou senha inválidos.');
			}
		});
	}
};