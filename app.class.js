//revisar https://gist.github.com/benpoole/1041277

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
	else if (this.hash=="#paciente"){
		this.displayElement("paciente");
	}
	else if (this.hash=="#consulta"){
		this.displayElement("consulta");
	}
        else if (this.hash=="#tipoExamen"){
		this.displayElement("tipoExamen");
	}
	else if (this.hash=="#ecoDoppler"){
		this.displayElement("ecoDoppler");
	}
	else if (this.hash=="#ecoObsSegTrim"){
		this.displayElement("ecoObsSegTrim");
	}
	else if (this.hash=="#ecoObsPrimTrim"){
		this.displayElement("ecoObsPrimTrim");
	}
    }
    
//Funciones para los pacientes

    nuevoPaciente(){
	    //activar los input

	    $('#idPaciente').prop('readonly', false);
	    $('#nombre').prop('readonly', false);
	    $('#apellido').prop('readonly', false);
	    $('#motivo').prop('readonly', false);
	    $('#ecografista').prop('readonly', false);
	    $('#lugarControl').prop('readonly', false);
	    $('#ciudad').prop('readonly', false);
	    $('#telefono').prop('readonly', false);
	    $('#email').prop('readonly', false);
	    $('#fNacimiento').prop('readonly', false);
	    $('#fum').prop('readonly', false);

	    $('#idPaciente').val('');
	    $('#nombre').val('');
	    $('#apellido').val('');
	    $('#motivo').val('');
	    $('#ecografista').val('');
	    $('#lugarControl').val('');
	    $('#ciudad').val('');
	    $('#telefono').val('');
	    $('#email').val('');
	    $('#fNacimiento').val('');
	    $('#fum').val('');
	    
	    $('#idPaciente').focus();
    }
	
    editarPaciente(){
	    
	    $('#idPaciente').prop('readonly', false);
	    $('#nombre').prop('readonly', false);
	    $('#apellido').prop('readonly', false);
	    $('#motivo').prop('readonly', false);
	    $('#ecografista').prop('readonly', false);
	    $('#lugarControl').prop('readonly', false);
	    $('#ciudad').prop('readonly', false);
	    $('#telefono').prop('readonly', false);
	    $('#email').prop('readonly', false);
	    $('#fNacimiento').prop('readonly', false);
	    $('#fum').prop('readonly', false);

	    $('#idPaciente').val('');
	    $('#nombre').val('');
	    $('#apellido').val('');
	    $('#motivo').val('');
	    $('#ecografista').val('');
	    $('#lugarControl').val('');
	    $('#ciudad').val('');
	    $('#telefono').val('');
	    $('#email').val('');
	    $('#fNacimiento').val('');
	    $('#fum').val('');
	    
	    $('#idPaciente').focus();
    }

    guardarPaciente(){
	    $('#idPaciente').prop('readonly', true);
	    $('#nombre').prop('readonly', true);
	    $('#apellido').prop('readonly', true);
	    $('#motivo').prop('readonly', true);
	    $('#ecografista').prop('readonly', true);
	    $('#lugarControl').prop('readonly', true);
	    $('#ciudad').prop('readonly', true);
	    $('#telefono').prop('readonly', true);
	    $('#email').prop('readonly', true);
	    $('#fNacimiento').prop('readonly', true);
	    $('#fum').prop('readonly', true);

	    var id = $('#idPaciente').val();
	    var nombre = $('#nombre').val();
	    var apellido = $('#apellido').val();
	    var motivo = $('#motivo').val();
	    var ecograf = $('#ecografista').val();
	    var lugarcontrol = $('#lugarControl').val();
	    var ciudad = $('#ciudad').val();
	    var tel = $('#telefono').val();
	    var email = $('#email').val();
	    var fnac = $('#fNacimiento').val();
	    var fum = $('#fum').val();
	    
	    this.makedb();
	    
	    var version = this.db.version;
	    
	    this.db.transaction(function (tran) {
	    	tran.executeSql('insert into Users (id unique, user_id, user_name, user_lastname, careReason, sonographer, controlPlace, city, phone, email, birthdate, fum) values (' + id + ',' + id + ',' + nombre + ', ' + apellido + ', ' + motivo + ', ' + ecograf + ', ' + lugarcontrol + ', ' + ciudad + ', ' + tel + ', ' + email + ', ' + fnac + ', ' + fum + ')');
	    });
	    
	    this.db.readTransaction(function (tran) {
                var html = '<table><thead><th>ID</th><th>Nombre</th><th>Apellido</th><th>Motivo</th><th>FUM </th><th>Ciudad </th></thead><tbody>';
                tran.executeSql('SELECT * FROM Users', [], function (tran, data) {
                    for (var i = 0; i < data.rows.length; i++) {
                        html += '<tr><td>'
                            + data.rows[i].user_id + '</td><td>' + data.rows[i].user_name + '</td><td>' + data.rows[i].user_lastname + '</td><td>' + data.rows[i].careReason + '</td><td>' + data.rows[i].fum + '</td><td>' + data.rows[i].city + '</td></tr>';
                    };
                    html += '</tbody></table>';
                    $('#tablaPacientes').html(html);
                });
            });
    }
    cancelarPaciente(){}
    eliminarPaciente(){}

    checkBrowser() {
	if (!window.openDatabase || !window.localStorage || !("onhashchange" in window)){
		return false;
	}
	return true;
    }
	
    makedb(){
	this.db = openDatabase('crecimientoFetal', '1.0', 'base de datos para los casos', 2 * 1024 * 1024);
	this.db.transaction(function (tran) {
		tran.executeSql('CREATE TABLE IF NOT EXISTS Users (id unique, user_id, user_name, user_lastname, careReason, sonographer, controlPlace, city, phone, email, birthdate, fum)');
		tran.executeSql('CREATE TABLE IF NOT EXISTS sonographer (id unique, name)');
		tran.executeSql('CREATE TABLE IF NOT EXISTS ecoPrimTrim (id unique, eg, lcn, saco_one, saco_two, saco_three, saco_average)');
		tran.executeSql('CREATE TABLE IF NOT EXISTS ecoSegTrim (id unique, eg, dbp, cc,ca,lf,lh,cb, size, pfe, ccca, bvm, ila)');
		tran.executeSql('CREATE TABLE IF NOT EXISTS ecoDoppler (id unique, eg, aud, aui, au_average, ipau, ipacm, ccp, dv)');
		tran.executeSql('CREATE TABLE IF NOT EXISTS careReason (id unique, reason)');
		tran.executeSql('CREATE TABLE IF NOT EXISTS controlPlace (id unique, place)');
		tran.executeSql('CREATE TABLE IF NOT EXISTS city (id unique, city)');
        });
    }

    displayElement(div_id){
	$('#home').hide();
	$('#consulta').hide();
	$('#tipoExamen').hide();
	$('#ecoObsPrimTrim').hide();
	$('#ecoObsSegTrim').hide();
	$('#ecoDoppler').hide();
	if ($('#popupGenerico').is(':visible')){
		$('#popupGenerico').modal('hide');
	}
	$('#paciente').hide();
	$('#'+div_id).show();
    }
	
   lastLoginDate(date){
	localStorage.lastLoginDate = date;
   }

   lastLoginIP() {
	   $.getJSON( "https://api.ipify.org?format=json", function( data ) {
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
