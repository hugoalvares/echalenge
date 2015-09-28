var UtilitiesController = {
	
	chamaServidor : function(func, params, callback) {
		var data = {
			'func': func,
			'params': params
		};
		$.ajax({
			url: "http://127.0.0.1:7070/",
			type: "POST",
			dataType: "json",
			data: JSON.stringify(data),
			contentType: "application/json",
			cache: false,
			timeout: 30000,
			success: function(data) {
				callback(data.resultado, data.dados);
			},
			error: function() {
				alert('Não foi possível conectar no servidor.');
			}
		});
	}

}