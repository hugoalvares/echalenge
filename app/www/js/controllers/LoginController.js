var LoginController = {
	
	login : function() {
		var dadosLogin = {
			'email' : $('#email').val(),
			'senha' : $('#senha').val()
		};
		UtilitiesController.chamaServidor('login', dadosLogin, function(resultado, dados) {
			if (resultado == true) {
				console.log('troca de tela');
			} else {
				alert(dados);
			}
		});
	}

}