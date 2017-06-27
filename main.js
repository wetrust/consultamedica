function cargarDatosGenerales(){
	
	$("#fechaHora").append(DiasEsp[Hoy[0]] + ", " + Hoy[1] + " de "+ MesesEsp[Hoy[2]] + " " + Hoy[3]);
	$("#fum").val(Hoy[3] + "-" + Hoy[2] + "-" + Hoy[1]);
	$("#fee").val(Hoy[3] + "-" + Hoy[2] + "-" + Hoy[1]);
	
	if (navegadorDowgrade == false) {
    		localStorage.fum = $("#fum").val();
		localStorage.fee = $("#fee").val();
	}
}
