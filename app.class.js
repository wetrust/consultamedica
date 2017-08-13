class app {
    constructor() {
	var daysES=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var monthsES=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var daysEN=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var monthsEN=["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"];
	var espanol = {days: daysES, months :monthsES};
	var english = {days: daysEN, months: monthsEN};
	var dt = {ES:espanol, EN: english};
	var errorString = {browser: 'Su navegador está desactualizado, esta aplicación no funcionará correctamente'};
        this.strings = {datetime: dt, error: errorString};
    }

    run(){
    	this.makedb();
	this.day = new Date();
	this.lastLoginDate(this.day);
	this.lastLoginIP();
	$('[data-toggle="tooltip"]').tooltip();
	this.resetInputs()
	this.displayElement("home");
    }

    onHashChange(){
    	//https://stackoverflow.com/questions/6478485/jquery-change-the-url-address-without-redirecting
	this.hash = document.location.hash;    
    
	if (this.hash=="#inicio"){
		this.displayElement("home");
	}
	else if (this.hash=="#consulta"){
		this.displayElement("consulta");
	}
    }
    
    checkBrowser() {
	if (!window.openDatabase || !window.localStorage || !("onhashchange" in window)){
		return false;
	}
	return true;
    }
	
    makedb(){
	this.db = openDatabase('crecimientoFetal', '1.0', 'base de datos para los casos', 2 * 1024 * 1024);
	this.db.transaction(function (data) {
		data.executeSql('CREATE TABLE IF NOT EXISTS Users (id unique, user_id, user_name, user_lastname, careReason, sonographer, controlPlace, city, phone, email, birthdate, fum)');
		data.executeSql('CREATE TABLE IF NOT EXISTS sonographer (id unique, name)');
		data.executeSql('CREATE TABLE IF NOT EXISTS ecoPrimTrim (id unique, eg, lcn, saco_one, saco_two, saco_three, saco_average)');
		data.executeSql('CREATE TABLE IF NOT EXISTS ecoSegTrim (id unique, eg, dbp, cc,ca,lf,lh,cb, size, pfe, ccca, bvm, ila)');
		data.executeSql('CREATE TABLE IF NOT EXISTS ecoDoppler (id unique, eg, aud, aui, au_average, ipau, ipacm, ccp, dv)');
		data.executeSql('CREATE TABLE IF NOT EXISTS careReason (id unique, reason)');
		data.executeSql('CREATE TABLE IF NOT EXISTS controlPlace (id unique, place)');
		data.executeSql('CREATE TABLE IF NOT EXISTS city (id unique, city)');
        });
    
    }

    displayElement(div_id){
	$('#home').css("display", 'none');
	$('#consulta').css("display", 'none');
	$('#tipoExamen').css("display", 'none');
	$('#ecoObsPrimTrim').css("display", 'none');
	$('#ecoObsSegTrim').css("display", 'none');
	$('#ecoDoppler').css("display", 'none');
	if ($('#popupGenerico').is(':visible')){
		$('#popupGenerico').modal('hide');
	}
	$('#paciente').css("display", 'none');
	$('#'+div_id).css("display", 'block');
    }
	
   lastLoginDate(date){
	localStorage.lastLoginDate = date;
   }

   lastLoginIP() {
	   $.getJSON( "https://api.ipify.org?format=jsonp", function( data ) {
		   localStorage.lastLoginIP = data.ip;
	   });
   }
	
  resetInputs(){
	
	$("#fechaHora").append(this.strings.datetime.ES.days[this.day.getDay()] + ", " + this.day.getDate() + " de "+ this.strings.datetime.ES.months[this.day.getMonth()] + " " + this.day.getFullYear());

	var day = ("0" + this.day.getDate()).slice(-2);
	var month = ("0" + (this.day.getMonth() + 1)).slice(-2);

	$('#fNacimiento').val(this.day.getFullYear()+"-"+(month)+"-"+(day));
	$("input[name='fum']").val(this.day.getFullYear()+"-"+(month)+"-"+(day));
	$('#fee').val(this.day.getFullYear()+ "-" + (month) + "-" + (day));
  }
}
