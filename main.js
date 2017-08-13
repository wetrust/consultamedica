//var navegadorDowgrade, Hoy = [];
$( document ).ready(function() {
	//puedoGuardarEnElNavegador();
        //queDiaEs();
        //cualEsMiIp();
        //cargarDatosGenerales();
        //activarTooltips();
        //activarBotones();

	if (isIE()){
		console.log('navegador incompatible')
	}
	else{
		var aplication = new app();
		if (aplication.checkBrowser == false){
			console.log(aplication.strings.error.browser);
		}
      });



function cargarDatosGenerales(){
	
	$("#fechaHora").append(DiasEsp[Hoy[0]] + ", " + Hoy[1] + " de "+ MesesEsp[Hoy[2]] + " " + Hoy[3]);

	var day = ("0" + Hoy[1]).slice(-2);
	var month = ("0" + (Hoy[2] + 1)).slice(-2);
	
	$("#fum").val(Hoy[3]+"-"+(month)+"-"+(day));
	$("#fee").val(Hoy[3]+"-"+(month)+"-"+(day));

	if (navegadorDowgrade == false) {
    		localStorage.fum = $("#fum").val();
		localStorage.fee = $("#fee").val();
	}
}
