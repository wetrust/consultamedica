var aplication;

var errCallback = function(){
	alert("Oh noes! There haz bin a datamabase error!");
};
var savePacientes = function(idPaciente, nombre, apellido, motivo, ecografia, lugarControl, ciudad, telefono, email, fNac, fum, successCallback){
	aplication.db.transaction(function(transaction){
		transaction.executeSql(("insert into Users (user_id, user_name, user_lastname, careReason, sonographer, controlPlace, city, phone, email, birthdate, fum) values (?,?,?,?,?,?,?,?,?,?,?);"), 
		[idPaciente, nombre, apellido, motivo, ecografia, lugarControl, ciudad, telefono, email, fNac, fum], function(transaction, results){successCallback(results);}, errCallback);
	});
};

var loadPacientes = function(successCallback){
	aplication.db.transaction(
		function(transaction){
			transaction.executeSql('SELECT * FROM Users', [],function(transaction, results){successCallback(results);}, errCallback);
	});
};

var loadPaciente = function(idPaciente, successCallback){
	aplication.db.transaction(
		function(transaction){
			transaction.executeSql(("SELECT * FROM Users WHERE id=?"), [idPaciente],function(transaction, results){successCallback(results);}, errCallback);
	});
};

var listPacientes = function(results){
	var contenedor = $("#tablaPacientes");
	contenedor.empty();
	var html = '<table class="table table-bordered table-hover"><thead class="bg-primary text-white"><th>ID</th><th>Nombre</th><th>Apellido</th><th>Motivo</th><th>FUM </th><th>Ciudad </th></thead><tbody>';
	if (results.rows.length==0){
		html = "<div class='alert alert-primary' role='alert'>No hay pacientes su base de datos personal.</div>";
	} else {
		$.each(results.rows, function(rowIndex){
			var row = results.rows.item(rowIndex);
			html += '<tr onclick="aplication.editarPaciente('+ row.id +')"><td scope="row">';
			html += row.user_id + '</td><td>' + row.user_name + '</td><td>' + row.user_lastname + '</td><td>' + row.careReason + '</td><td>' + row.fum + '</td><td>' + row.city + '</td><td><button type="button" class="btn btn-primary"  onclick="aplication.usarPaciente(' + row.id +')">exámen</button></td></tr>';
		});
		html += '</tbody></table>';
	}
	contenedor.html(html);
};

var listPaciente = function(results){
	
	var row = results.rows.item(0);
	$('#idPaciente').val(row.user_id);
	$('#nombre').val(row.user_name);
	$('#apellido').val(row.user_lastname);
	$('#motivo').val(row.careReason);
	$('#ecografista').val(row.sonographer);
	$('#lugarControl').val(row.controlPlace);
	$('#ciudad').val(row.city);
	$('#telefono').val(row.phone);
	$('#email').val(row.email);
	$('#fNacimiento').val(row.birthdate);
	$('#fum').val(row.fum);
	$('#fum2').val(row.fum);
	localStorage.fum = $('#fum').val();
	$('#fum').trigger( "change" );
	$('#fum2').trigger( "change" );

};

 $( '#fum-dos').on('change', function() {
      localStorage.fum = $("#fum-dos").val();
      localStorage.eg = calcularEG();
     $("#edadGestacional").val(localStorage.eg);
     $("#egExamen").val(localStorage.eg);
     $("#egConsulta").val(localStorage.eg);
      $("#egPrimTrim").val(localStorage.eg);
      $("#egSegTrim").val(localStorage.eg);
      $('#egDoppler').val(localStorage.eg);
 });

$( '.informacion').on('click', function() {
	$("#informacion").hide();
 });

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
		aplication = new app();
		
		if (aplication.checkBrowser == false){
			console.log(aplication.strings.error.browser);
		}
		else{
			show_hide('browser');
			aplication.run();
			loadPacientes(listPacientes);
			activarBotones();
			cargarDatosGenerales();
			
		}
	}
});

$(window).on('hashchange', function(){
	aplication.onHashChange();
});

function cargarDatosGenerales(){
	
	$( "p[name='fechaHora']").append(DiasEsp[Hoy[0]] + ", " + Hoy[1] + " de "+ MesesEsp[Hoy[2]] + " " + Hoy[3]);

	var day = ("0" + Hoy[1]).slice(-2);
	var month = ("0" + (Hoy[2] + 1)).slice(-2);
	
	$("#fum").val(Hoy[3]+"-"+(month)+"-"+(day));
	$("#fee").val(Hoy[3]+"-"+(month)+"-"+(day));

	if (navegadorDowgrade == false) {
    		localStorage.fum = $("#fum").val();
		localStorage.fee = $("#fee").val();
	}
}
