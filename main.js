var aplication;
var keynum, lines = 1;

function limitLines(obj, e) {
        // IE
        if(window.event) {
          keynum = e.keyCode;
        // Netscape/Firefox/Opera
        } else if(e.which) {
          keynum = e.which;
        }

        if(keynum == 13) {
          if(lines == obj.rows) {
            return false;
          }else{
            lines++;
          }
        }
      }

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

 $( '#peso').on('change', function() {
     $("#imc").val(aplication.imc($("#talla").val(), $(this).val()));
     $("#estNutricional").val(aplication.estadoNutricional($("#imc").val()));
 });

 $( '#talla').on('change', function() {
     $("#imc").val(aplication.imc($(this).val(), $("#peso").val()));
     $("#estNutricional").val(aplication.estadoNutricional($("#imc").val()));
 });

$( '.informacion').on('click', function() {
     $("#informacion").hide();
 });

$('#configTab a').click(function (e) {
  e.preventDefault()
  $('#configTab a[data-toggle="tab"]').removeClass('active');
  $(this).addClass('active');
  $('div .tab-pane').removeClass('active');
  $(this.hash).tab('show');
});

$( '#nuevoLugarConfig').on('click', function() {
	$('#lugarConfig .tabla').hide();
	$('#nuevoLugarConfig').hide();
	$('#editarLugarConfig').hide();
	$('#guardarLugarConfig').show();
	$('#cancelarLugarConfig').show();
	$('#lugarConfig .formulario').show();
 });

$( '#cancelarLugarConfig').on('click', function() {
	$("#lugarConfig .tabla").show();
	$('#nuevoLugarConfig').show();
	$('#editarLugarConfig').show();
	$('#guardarLugarConfig').hide();
	$('#cancelarLugarConfig').hide();
	$("#lugarConfig .formulario").hide();
 });

$( '#nuevoCiudadConfig').on('click', function() {
	$('#ciudadConfig .tabla').hide();
	$('#nuevoCiudadConfig').hide();
	$('#editarCiudadConfig').hide();
	$('#guardarCiudadConfig').show();
	$('#cancelarCiudadConfig').show();
	$('#ciudadConfig .formulario').show();
 });

$( '#cancelarCiudadConfig').on('click', function() {
	$("#ciudadConfig .tabla").show();
	$('#nuevoCiudadConfig').show();
	$('#editarCiudadConfig').show();
	$('#guardarCiudadConfig').hide();
	$('#cancelarCiudadConfig').hide();
	$("#ciudadConfig .formulario").hide();
 });

$( '#nuevoMotivoConfig').on('click', function() {
	$('#motivoConfig .tabla').hide();
	$('#nuevoMotivoConfig').hide();
	$('#editarMotivoConfig').hide();
	$('#guardarMotivoConfig').show();
	$('#cancelarMotivoConfig').show();
	$('#motivoConfig .formulario').show();
 });

$( '#cancelarMotivoConfig').on('click', function() {
	$("#motivoConfig .tabla").show();
	$('#nuevoMotivoConfig').show();
	$('#editarMotivoConfig').show();
	$('#guardarMotivoConfig').hide();
	$('#cancelarMotivoConfig').hide();
	$("#motivoConfig .formulario").hide();
 });

$( '#nuevoPoconConfig').on('click', function() {
	$('#poconConfig .tabla').hide();
	$('#nuevoPoconConfig').hide();
	$('#editarPoconConfig').hide();
	$('#guardarPoconConfig').show();
	$('#cancelarPoconConfig').show();
	$('#poconConfig .formulario').show();
 });

$( '#cancelarPoconConfig').on('click', function() {
	$("#poconConfig .tabla").show();
	$('#nuevoPoconConfig').show();
	$('#editarPoconConfig').show();
	$('#guardarPoconConfig').hide();
	$('#cancelarPoconConfig').hide();
	$("#poconConfig .formulario").hide();
 });

$( '#nuevoEcografistaConfig').on('click', function() {
	$('#ecografistaConfig .tabla').hide();
	$('#nuevoEcografistaConfig').hide();
	$('#editarEcografistaConfig').hide();
	$('#guardarEcografistaConfig').show();
	$('#cancelarEcografistaConfig').show();
	$('#ecografistaConfig .formulario').show();
 });

$( '#cancelarEcografistaConfig').on('click', function() {
	$("#ecografistaConfig .tabla").show();
	$('#nuevoEcografistaConfig').show();
	$('#editarEcografistaConfig').show();
	$('#guardarEcografistaConfig').hide();
	$('#cancelarEcografistaConfig').hide();
	$("#ecografistaConfig .formulario").hide();
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
		
		graficoUno = null;
		graficoDos = null;
		graficoTres = null;
		graficoCuatro = null;
		
		if (aplication.checkBrowser == false){
			console.log(aplication.strings.error.browser);
		}
		else{
			show_hide('browser');
			aplication.run();
			
			databaseBing = new dbModel();
			databaseBing.run();
			if (databaseBing.dbReady == true){
				var jala =  databaseBing.getTpoExamen();
			}
			loadPacientes(listPacientes);
			activarBotones();
			$('#fum-dos').datepicker();
			$('#fum-dos').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fum-tres').datepicker();
			$('#fum-tres').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fum-cuatro').datepicker();
			$('#fum-cuatro').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fum-cinco').datepicker();
			$('#fum-cinco').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fum-seis').datepicker();
			$('#fum-seis').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			
			$('#fee-dos').datepicker();
			$('#fee-dos').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fee-tres').datepicker();
			$('#fee-tres').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fee-cuatro').datepicker();
			$('#fee-cuatro').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fee-cinco').datepicker();
			$('#fee-cinco').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fee-seis').datepicker();
			$('#fee-seis').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
			$('#fechaMaterna').datepicker();
			$('#fechaMaterna').datepicker()
				  .on('changeDate', function(ev){
				    $(this).trigger("change");
				  });
		}
	}
});

$(window).on('hashchange', function(){
	aplication.onHashChange();
});

$( '#loadPacienteSelect' ).on( 'click', function() {
    $('#popupTitle').html("Mensaje");
    $('#popupBody').html("<p>Módulo en construcción</p>");
    $('#popupGenerico').modal('show');
});
