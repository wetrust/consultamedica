cargarDatosGenerales(){
	
	dt = new Date(Hoy[1]+' '+Hoy[0]+', '+Hoy[2]);
	$("#fechaHora").append(DiasEsp[dt.getUTCDay()] + ", " + Hoy[1] + " de "+ Hoy[2] + " " + Hoy[3]);
}