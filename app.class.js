//revisar https://gist.github.com/benpoole/1041277
//http://programacion.net/articulo/introduccion_a_web_sql_1305
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
	else if (this.hash=="#informacion"){
		$("#informacion").show();
	}
    }

//Funciones para los pacientes

    nuevoPaciente(){
	    //activar los input
		$('#pacientesForm1').show();
		$('#pacientesForm2').show();
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
	    $("#tablaPacientes").hide();
    }
	
    editarPaciente(idPaciente){
	    
	    loadPaciente(idPaciente, listPaciente);
		$('#pacientesForm1').show();
		$('#pacientesForm2').show();
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
	    $("#tablaPacientes").hide();
    }

    guardarPaciente(){
	    
		$('#pacientesForm1').hide();
		$('#pacientesForm2').hide();
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
	    
	    savePacientes(id, nombre, apellido, motivo, ecograf, lugarcontrol, ciudad, tel, email, fnac, fum, function(){console.log("data has been saved!");},errCallback);
	    loadPacientes(listPacientes);
	    $("#tablaPacientes").show();

    }
    cancelarPaciente(){
		$('#pacientesForm1').hide();
		$('#pacientesForm2').hide();
	    	$("#tablaPacientes").show();
    }
    eliminarPaciente(){}


//calculos genéricos


}
