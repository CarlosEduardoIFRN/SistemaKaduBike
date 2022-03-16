function validar_senha() {
	matricula = document.getElementById("matricula").value;
	senha = document.getElementById("senha").value;
	for (var i = 0; i < Mecanicos.length; i++) {
		Mec_aux = Mecanicos[i]
		if (Mec_aux["matricula"] == matricula) {
			if (Mec_aux["senha"] == senha) {
				alert("Acertô mizeravi, " + Mec_aux["nome"])
				window.location.href = "sistema.html"
				return
			} else {
				alert("Erroouu a senhaaa!")
				window.location.href = ""
				return 
			}
		}
	}
	alert("Ah Burro! Num sabe nem a matricula!")
	return	
}

function adicionar_serviço() {
	
}