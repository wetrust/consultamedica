var CONFIG_ACTIVE = "centroRegional";
var keynum, lines = 1;
var CONFIG_EDIT = false;

$(document).ready(function(){
	//comprobar si existe la base de datos de configuración
	makedbLocalStorage();
	loadConfig();
	
	$("a[href='#dp']").on("click", function(){
		//al cambiar la alternativa, cargar los datos en la tabla
		if (window.localStorage) {
			if (CONFIG_EDIT == false){
				var configuracion = JSON.parse(localStorage["configuracion"]);
				$('#eliminarConfig').addClass("d-none");
				$("#editarConfig").addClass("d-none");
				var valueS = parseInt($(this).data("id"));

				switch(valueS) {
				    case 1:
					$('#tableHead').empty();
					$('#tableBody').empty();
					var fila = '<th>#</th><th>Centro Regional</th>';
					$('#tableHead').append(fila);
					CONFIG_ACTIVE = "centroRegional";
					if (configuracion.centroRegional.length > 0){
						$.each(configuracion.centroRegional, function (i, item) {
							fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
							$('#tableBody').append(fila);
						});
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nueva región de salud");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Modificar región de salud");
					break;
				    case 2:
					$('#tableHead').empty();
					$('#tableBody').empty();
					var fila = '<th>#</th><th>Ciudad</th><th>Centro Regional</th>';
					$('#tableHead').append(fila);
					CONFIG_ACTIVE = "ciudad";
					if (configuracion.ciudad.length > 0){
						$.each(configuracion.ciudad, function (i, item) {
							fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
							$('#tableBody').append(fila);
						});
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo Hospital");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Modificar Hospital");
					break;
				    case 3:
					$('#tableHead').empty();
					$('#tableBody').empty();
					var fila = '<th>#</th><th>Unidad Ultrasonográfica</th><th>Ciudad</th>';
					$('#tableHead').append(fila);
					CONFIG_ACTIVE = "unidadUltrasonografica";
					if (configuracion.unidadUltrasonografica.length > 0){
						$.each(configuracion.unidadUltrasonografica, function (i, item) {
							fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
							$('#tableBody').append(fila);
						});
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nueva unidad ultrasonográfica");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Modificar unidad ultrasonográfica");
					break;
				    case 4:
					$('#tableHead').empty();
					$('#tableBody').empty();
					var fila = '<th>#</th><th>Profesional Ecografista</th><th>Unidad Ultrasonográfica</th>';
					$('#tableHead').append(fila);
					CONFIG_ACTIVE = "profesionalEcografista";
					if (configuracion.profesionalEcografista.length > 0){
						$.each(configuracion.profesionalEcografista, function (i, item) {
							fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
							$('#tableBody').append(fila);
						});
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo profesional ultrasonografista");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Modificar profesional ultrasonografista");
					break;
				    case 5:
					$('#tableHead').empty();
					$('#tableBody').empty();
					var fila = '<th>#</th><th>Lugar Control Prenatal</th>';
					$('#tableHead').append(fila);
					CONFIG_ACTIVE = "lugarControlPrenatal";
					if (configuracion.lugarControlPrenatal.length > 0){
						$.each(configuracion.lugarControlPrenatal, function (i, item) {
							fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
							$('#tableBody').append(fila);
						});
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo lugar de control");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Modificar lugar de control");
					break;
				    case 6:
					$('#tableHead').empty();
					$('#tableBody').empty();
					var fila = '<th>#</th><th>Patología Obstétrica</th>';
					$('#tableHead').append(fila);
					CONFIG_ACTIVE = "patologiaObstetrica";
					if (configuracion.patologiaObstetrica.length > 0){
						$.each(configuracion.patologiaObstetrica, function (i, item) {
							fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
							$('#tableBody').append(fila);
						});
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nueva patología");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Modificar patología");
					break;
				    case 7:
					$('#tableHead').empty();
					$('#tableBody').empty();
					var fila = '<th>#</th><th>Motivo Exámen</th>';
					$('#tableHead').append(fila);
					CONFIG_ACTIVE = "motivoExamen";
					if (configuracion.motivoExamen.length > 0){
						$.each(configuracion.motivoExamen, function (i, item) {
							fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
							$('#tableBody').append(fila);
						});
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo motivo de exámen");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Modificar motivo de exámen");
					break;
				    case 8:
					$('#tableHead').empty();
					$('#tableBody').empty();
					var fila = '<th>#</th><th>Previsión</th>';
					$('#tableHead').append(fila);
					CONFIG_ACTIVE = "prevision";
					if (configuracion.prevision.length > 0){
						$.each(configuracion.prevision, function (i, item) {
							fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
							$('#tableBody').append(fila);
						});
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nueva previsión");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Modificar previsión");
					break;
				    case 9:
					$('#tableHead').empty();
					$('#tableBody').empty();
					var fila = '<th>#</th><th>Nombre del profesional referente</th>';
					$('#tableHead').append(fila);
					CONFIG_ACTIVE = "profesionalReferente";
					if (configuracion.profesionalReferente.length > 0){
						$.each(configuracion.profesionalReferente, function (i, item) {
							fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
							$('#tableBody').append(fila);
						});
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo profesional referente");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Modificar profesional referente");
					break;
				}
			}
		}
		else{
			window.alert("tu navegador no es compatible con la plataforma, por favor actualiza tu navegador");
		}
	});
	
	$("#nuevoConfig").on("click", function(){
		$('#tableHead').parent().parent().addClass("d-none");
		$("#nuevoConfig").addClass("d-none");
		$("#guardarConfig").removeClass("d-none");
		$("#editarConfig").addClass("d-none");
		$("#eliminarConfig").addClass("d-none");
		$("#cancelarConfig").removeClass("d-none");
		$(".formulario").removeClass("d-none");
		$("#oConfig").prop('disabled', true);

		switch(CONFIG_ACTIVE){
			case "centroRegional":
				$("#titleInput").html("Nuevo Centro Regional");
				break;
			case "ciudad":
				$("#titleInput").html("Nueva Ciudad");
				break;
			case "unidadUltrasonografica":
				$("#titleInput").html("Nueva unidad Ultrasonográfica");
				break;
			case "profesionalEcografista":
				$("#titleInput").html("Nuevo ecografista");
				break;
			case "lugarControlPrenatal":
				$("#titleInput").html("Nuevo lugar de control prenatal");
				break;
			case "patologiaObstetrica":
				$("#titleInput").html("Nueva Patología obstétrica");
				break;
			case "motivoExamen":
				$("#titleInput").html("Nuevo motivo de exámen");
				break;
			case "prevision":
				$("#titleInput").html("Nueva previsión");
				break;
			case "profesionalReferente":
				$("#titleInput").html("Nuevo Profesional referente");
				break;
		}
		
		$("a").on("click",disableA);
		CONFIG_EDIT = true;
	});
	
	$("#editarConfig").on("click", function(){
		$('#tableHead').parent().parent().addClass("d-none");
		$("#nuevoConfig").addClass("d-none");
		$("#guardarConfig").removeClass("d-none");
		$("#editarConfig").addClass("d-none");
		$("#eliminarConfig").addClass("d-none");
		$("#cancelarConfig").removeClass("d-none");
		$(".formulario").removeClass("d-none");
		$("#oConfig").prop('disabled', true);
		
		$.each( $("#tableBody").children(), function( i, val ) {
			if ($( val ).hasClass( 'table-active')){
				$("#inputConfig").val($( val ).children("td").html());
				$("#inputConfig").data("id",$( val ).children("th").html());
			}
		});
		
		switch(CONFIG_ACTIVE){
			case "centroRegional":
				$("#titleInput").html("Modificar Centro Regional");
				break;
			case "ciudad":
				$("#titleInput").html("Modificar Ciudad");
				break;
			case "unidadUltrasonografica":
				$("#titleInput").html("Modificar unidad Ultrasonográfica");
				break;
			case "profesionalEcografista":
				$("#titleInput").html("Modificar ecografista");
				break;
			case "lugarControlPrenatal":
				$("#titleInput").html("Modificar lugar de control prenatal");
				break;
			case "patologiaObstetrica":
				$("#titleInput").html("Modificar Patología obstétrica");
				break;
			case "motivoExamen":
				$("#titleInput").html("Modificar motivo de exámen");
				break;
			case "prevision":
				$("#titleInput").html("Modificar previsión");
				break;
			case "profesionalReferente":
				$("#titleInput").html("Modificar Profesional referente");
				break;
		}
		
		$("a").on("click",disableA);
		CONFIG_EDIT = true;
	});
	
	$("#guardarConfig").on("click", function(){
		$('#tableHead').parent().parent().removeClass("d-none");
		$("#nuevoConfig").removeClass("d-none");
		$("#guardarConfig").addClass("d-none");
		$("#editarConfig").removeClass("d-none");
		$("#cancelarConfig").addClass("d-none");
		$(".formulario").addClass("d-none");
		$("#oConfig").prop('disabled', false);
		
		if (window.localStorage) {
			if (localStorage.configuracion != null) {
				var configuracion = JSON.parse(localStorage["configuracion"]);
				var aRR = {id:0, nombre:"Doe"};
				switch(CONFIG_ACTIVE){
					case "centroRegional":
						if ($('#inputConfig').data("id") > -1){
							var strReplace = $('#inputConfig').val();
							var idReplace =  $('#inputConfig').data("id");
							$('#inputConfig').data("id",-1);
							
							var contador = 1;
							$.each(configuracion.centroRegional, function (X, item) {	
								var cf = JSON.parse(localStorage["configuracion"]);
								var aRR = {id:contador, nombre:"Doe"};
								if (X == 0){
									var nARR = [];
									cf.centroRegional = nARR;
								}
								
								if (contador == idReplace){
									aRR["nombre"] = strReplace;
								}
								else{
									aRR["nombre"] = item.nombre;
								}
								
								cf.centroRegional.push(aRR);
								contador++;
									
								localStorage["configuracion"] = JSON.stringify(cf);
							});
						}
						else{
							aRR["id"] = configuracion.centroRegional.length +1;
							aRR["nombre"] = $('#inputConfig').val();
							configuracion.centroRegional.push(aRR);
							localStorage["configuracion"] = JSON.stringify(configuracion);
						}
						break;
					case "ciudad":
						if ($('#inputConfig').data("id") > -1){
							var strReplace = $('#inputConfig').val();
							var idReplace =  $('#inputConfig').data("id");
							$('#inputConfig').data("id",-1);
							
							var contador = 1;
							$.each(configuracion.ciudad, function (X, item) {	
								var cf = JSON.parse(localStorage["configuracion"]);
								var aRR = {id:contador, nombre:"Doe"};
								if (X == 0){
									var nARR = [];
									cf.ciudad = nARR;
								}
								
								if (contador == idReplace){
									aRR["nombre"] = strReplace;
								}
								else{
									aRR["nombre"] = item.nombre;
								}
								
								cf.ciudad.push(aRR);
								contador++;
									
								localStorage["configuracion"] = JSON.stringify(cf);
							});
						}
						else{
							aRR["id"] = configuracion.ciudad.length +1;
							aRR["nombre"] = $('#inputConfig').val();
							configuracion.ciudad.push(aRR);
							localStorage["configuracion"] = JSON.stringify(configuracion);
						}
						break;
					case "unidadUltrasonografica":
						if ($('#inputConfig').data("id") > -1){
							var strReplace = $('#inputConfig').val();
							var idReplace =  $('#inputConfig').data("id");
							$('#inputConfig').data("id",-1);
							
							var contador = 1;
							$.each(configuracion.unidadUltrasonografica, function (X, item) {	
								var cf = JSON.parse(localStorage["configuracion"]);
								var aRR = {id:contador, nombre:"Doe"};
								if (X == 0){
									var nARR = [];
									cf.unidadUltrasonografica = nARR;
								}
								
								if (contador == idReplace){
									aRR["nombre"] = strReplace;
								}
								else{
									aRR["nombre"] = item.nombre;
								}
								
								cf.unidadUltrasonografica.push(aRR);
								contador++;
									
								localStorage["configuracion"] = JSON.stringify(cf);
							});
						}
						else{
							aRR["id"] = configuracion.unidadUltrasonografica.length +1;
							aRR["nombre"] = $('#inputConfig').val();
							configuracion.unidadUltrasonografica.push(aRR);
							localStorage["configuracion"] = JSON.stringify(configuracion);
						}
						break;
					case "profesionalEcografista":
						if ($('#inputConfig').data("id") > -1){
							var strReplace = $('#inputConfig').val();
							var idReplace =  $('#inputConfig').data("id");
							$('#inputConfig').data("id",-1);
							
							var contador = 1;
							$.each(configuracion.profesionalEcografista, function (X, item) {	
								var cf = JSON.parse(localStorage["configuracion"]);
								var aRR = {id:contador, nombre:"Doe"};
								if (X == 0){
									var nARR = [];
									cf.profesionalEcografista = nARR;
								}
								
								if (contador == idReplace){
									aRR["nombre"] = strReplace;
								}
								else{
									aRR["nombre"] = item.nombre;
								}
								
								cf.profesionalEcografista.push(aRR);
								contador++;
									
								localStorage["configuracion"] = JSON.stringify(cf);
							});
						}
						else{
							aRR["id"] = configuracion.profesionalEcografista.length +1;
							aRR["nombre"] = $('#inputConfig').val();
							configuracion.profesionalEcografista.push(aRR);
							localStorage["configuracion"] = JSON.stringify(configuracion);
						}
						break;
					case "lugarControlPrenatal":
						if ($('#inputConfig').data("id") > -1){
							var strReplace = $('#inputConfig').val();
							var idReplace =  $('#inputConfig').data("id");
							$('#inputConfig').data("id",-1);
							
							var contador = 1;
							$.each(configuracion.lugarControlPrenatal, function (X, item) {	
								var cf = JSON.parse(localStorage["configuracion"]);
								var aRR = {id:contador, nombre:"Doe"};
								if (X == 0){
									var nARR = [];
									cf.lugarControlPrenatal = nARR;
								}
								
								if (contador == idReplace){
									aRR["nombre"] = strReplace;
								}
								else{
									aRR["nombre"] = item.nombre;
								}
								
								cf.lugarControlPrenatal.push(aRR);
								contador++;
									
								localStorage["configuracion"] = JSON.stringify(cf);
							});
						}
						else{
							aRR["id"] = configuracion.lugarControlPrenatal.length +1;
							aRR["nombre"] = $('#inputConfig').val();
							configuracion.lugarControlPrenatal.push(aRR);
							localStorage["configuracion"] = JSON.stringify(configuracion);
						}
						break;
					case "patologiaObstetrica":
						if ($('#inputConfig').data("id") > -1){
							var strReplace = $('#inputConfig').val();
							var idReplace =  $('#inputConfig').data("id");
							$('#inputConfig').data("id",-1);
							
							var contador = 1;
							$.each(configuracion.patologiaObstetrica, function (X, item) {	
								var cf = JSON.parse(localStorage["configuracion"]);
								var aRR = {id:contador, nombre:"Doe"};
								if (X == 0){
									var nARR = [];
									cf.patologiaObstetrica = nARR;
								}
								
								if (contador == idReplace){
									aRR["nombre"] = strReplace;
								}
								else{
									aRR["nombre"] = item.nombre;
								}
								
								cf.patologiaObstetrica.push(aRR);
								contador++;
									
								localStorage["configuracion"] = JSON.stringify(cf);
							});
						}
						else{
							aRR["id"] = configuracion.patologiaObstetrica.length +1;
							aRR["nombre"] = $('#inputConfig').val();
							configuracion.patologiaObstetrica.push(aRR);
							localStorage["configuracion"] = JSON.stringify(configuracion);
						}
						break;
					case "motivoExamen":
						if ($('#inputConfig').data("id") > -1){
							var strReplace = $('#inputConfig').val();
							var idReplace =  $('#inputConfig').data("id");
							$('#inputConfig').data("id",-1);
							
							var contador = 1;
							$.each(configuracion.motivoExamen, function (X, item) {	
								var cf = JSON.parse(localStorage["configuracion"]);
								var aRR = {id:contador, nombre:"Doe"};
								if (X == 0){
									var nARR = [];
									cf.motivoExamen = nARR;
								}
								
								if (contador == idReplace){
									aRR["nombre"] = strReplace;
								}
								else{
									aRR["nombre"] = item.nombre;
								}
								
								cf.motivoExamen.push(aRR);
								contador++;
									
								localStorage["configuracion"] = JSON.stringify(cf);
							});
						}
						else{
							aRR["id"] = configuracion.motivoExamen.length +1;
							aRR["nombre"] = $('#inputConfig').val();
							configuracion.motivoExamen.push(aRR);
							localStorage["configuracion"] = JSON.stringify(configuracion);
						}
						break;
					case "prevision":
						if ($('#inputConfig').data("id") > -1){
							var strReplace = $('#inputConfig').val();
							var idReplace =  $('#inputConfig').data("id");
							$('#inputConfig').data("id",-1);
							
							var contador = 1;
							$.each(configuracion.prevision, function (X, item) {	
								var cf = JSON.parse(localStorage["configuracion"]);
								var aRR = {id:contador, nombre:"Doe"};
								if (X == 0){
									var nARR = [];
									cf.prevision = nARR;
								}
								
								if (contador == idReplace){
									aRR["nombre"] = strReplace;
								}
								else{
									aRR["nombre"] = item.nombre;
								}
								
								cf.prevision.push(aRR);
								contador++;
									
								localStorage["configuracion"] = JSON.stringify(cf);
							});
						}
						else{
							aRR["id"] = configuracion.prevision.length +1;
							aRR["nombre"] = $('#inputConfig').val();
							configuracion.prevision.push(aRR);
							localStorage["configuracion"] = JSON.stringify(configuracion);
						}
						break;
					case "profesionalReferente":
						if ($('#inputConfig').data("id") > -1){
							var strReplace = $('#inputConfig').val();
							var idReplace =  $('#inputConfig').data("id");
							$('#inputConfig').data("id",-1);
							
							var contador = 1;
							$.each(configuracion.profesionalReferente, function (X, item) {	
								var cf = JSON.parse(localStorage["configuracion"]);
								var aRR = {id:contador, nombre:"Doe"};
								if (X == 0){
									var nARR = [];
									cf.profesionalReferente = nARR;
								}
								
								if (contador == idReplace){
									aRR["nombre"] = strReplace;
								}
								else{
									aRR["nombre"] = item.nombre;
								}
								
								cf.profesionalReferente.push(aRR);
								contador++;
									
								localStorage["configuracion"] = JSON.stringify(cf);
							});
						}
						else{
							aRR["id"] = configuracion.profesionalReferente.length +1;
							aRR["nombre"] = $('#inputConfig').val();
							configuracion.profesionalReferente.push(aRR);
							localStorage["configuracion"] = JSON.stringify(configuracion);
						}
						break;
				}
				$('#inputConfig').val("");
			}
		}
		CONFIG_EDIT = false;
		$("a").off("click", disableA);
		$("a[name='"+ CONFIG_ACTIVE+ "']").trigger("click");
	});

	$("#cancelarConfig").on("click", function(){
		$('#tableHead').parent().parent().removeClass("d-none");
		$("#nuevoConfig").removeClass("d-none");
		$("#guardarConfig").addClass("d-none");
		$("#editarConfig").addClass("d-none");
		$("#cancelarConfig").addClass("d-none");
		$(".formulario").addClass("d-none");
		$("#oConfig").prop('disabled', false);
		CONFIG_EDIT = false;
		$("a").off("click", disableA);
		$("a[name='"+ CONFIG_ACTIVE + "']").trigger("click");
	});

	$("#eliminarConfig").on("click", function(){
		if (window.localStorage) {
			if (localStorage.configuracion != null) {
				var configuracion = JSON.parse(localStorage["configuracion"]);
				switch(CONFIG_ACTIVE){
					case "centroRegional":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								var contador = 1;
								$.each(configuracion.centroRegional, function (X, item) {	
									var cf = JSON.parse(localStorage["configuracion"]);
									var aRR = {id:contador, nombre:"Doe"};
									if (X == 0){
										var nARR = [];
										cf.centroRegional = nARR;
									}
									
									if (item.nombre != nombre){
										aRR["nombre"] = item.nombre;
										cf.centroRegional.push(aRR);
										contador++;
									}
									
									localStorage["configuracion"] = JSON.stringify(cf);
								});
							}
						});
						break;
					case "ciudad":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								$.each(configuracion.ciudad, function (X, item) {	
									var cf = JSON.parse(localStorage["configuracion"]);
									var aRR = {id:X, nombre:"Doe"};
									if (X == 0){
										var nARR = [];
										cf.ciudad = nARR;
									}
									
									if (item.nombre != nombre){
										aRR["nombre"] = item.nombre;
										cf.ciudad.push(aRR);
									}
									
									localStorage["configuracion"] = JSON.stringify(cf);
								});
							}
						});
						break;
					case "unidadUltrasonografica":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								$.each(configuracion.unidadUltrasonografica, function (X, item) {	
									var cf = JSON.parse(localStorage["configuracion"]);
									var aRR = {id:X, nombre:"Doe"};
									if (X == 0){
										var nARR = [];
										cf.unidadUltrasonografica = nARR;
									}
									
									if (item.nombre != nombre){
										aRR["nombre"] = item.nombre;
										cf.unidadUltrasonografica.push(aRR);
									}
									
									localStorage["configuracion"] = JSON.stringify(cf);
								});
							}
						});
						break;
					case "profesionalEcografista":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								$.each(configuracion.profesionalEcografista, function (X, item) {	
									var cf = JSON.parse(localStorage["configuracion"]);
									var aRR = {id:X, nombre:"Doe"};
									if (X == 0){
										var nARR = [];
										cf.profesionalEcografista = nARR;
									}
									
									if (item.nombre != nombre){
										aRR["nombre"] = item.nombre;
										cf.profesionalEcografista.push(aRR);
									}
									
									localStorage["configuracion"] = JSON.stringify(cf);
								});
							}
						});
						break;
					case "lugarControlPrenatal":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								$.each(configuracion.lugarControlPrenatal, function (X, item) {	
									var cf = JSON.parse(localStorage["configuracion"]);
									var aRR = {id:X, nombre:"Doe"};
									if (X == 0){
										var nARR = [];
										cf.lugarControlPrenatal = nARR;
									}
									
									if (item.nombre != nombre){
										aRR["nombre"] = item.nombre;
										cf.lugarControlPrenatal.push(aRR);
									}
									
									localStorage["configuracion"] = JSON.stringify(cf);
								});
							}
						});
						break;
					case "patologiaObstetrica":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								$.each(configuracion.patologiaObstetrica, function (X, item) {	
									var cf = JSON.parse(localStorage["configuracion"]);
									var aRR = {id:X, nombre:"Doe"};
									if (X == 0){
										var nARR = [];
										cf.patologiaObstetrica = nARR;
									}
									
									if (item.nombre != nombre){
										aRR["nombre"] = item.nombre;
										cf.patologiaObstetrica.push(aRR);
									}
									
									localStorage["configuracion"] = JSON.stringify(cf);
								});
							}
						});
						break;
					case "motivoExamen":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								$.each(configuracion.motivoExamen, function (X, item) {	
									var cf = JSON.parse(localStorage["configuracion"]);
									var aRR = {id:X, nombre:"Doe"};
									if (X == 0){
										var nARR = [];
										cf.motivoExamen = nARR;
									}
									
									if (item.nombre != nombre){
										aRR["nombre"] = item.nombre;
										cf.motivoExamen.push(aRR);
									}
									
									localStorage["configuracion"] = JSON.stringify(cf);
								});
							}
						});
						break;
					case "prevision":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								$.each(configuracion.prevision, function (X, item) {	
									var cf = JSON.parse(localStorage["configuracion"]);
									var aRR = {id:X, nombre:"Doe"};
									if (X == 0){
										var nARR = [];
										cf.prevision = nARR;
									}
									
									if (item.nombre != nombre){
										aRR["nombre"] = item.nombre;
										cf.prevision.push(aRR);
									}
									
									localStorage["configuracion"] = JSON.stringify(cf);
								});
							}
						});
						break;
					case "profesionalReferente":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								$.each(configuracion.profesionalReferente, function (X, item) {	
									var cf = JSON.parse(localStorage["configuracion"]);
									var aRR = {id:X, nombre:"Doe"};
									if (X == 0){
										var nARR = [];
										cf.profesionalReferente = nARR;
									}
									
									if (item.nombre != nombre){
										aRR["nombre"] = item.nombre;
										cf.profesionalReferente.push(aRR);
									}
									
									localStorage["configuracion"] = JSON.stringify(cf);
								});
							}
						});
						break;
				}
				$('#inputConfig').val("");
			}
		}
		
		if (getElement == false){
			window.alert("haga click sobre un elemento para eliminar");
		}
		else{
			$("a[name='"+ CONFIG_ACTIVE+ "']").trigger("click");
		}
	});
	
	$("#saveMebrete").on("click", function(event){
		event.preventDefault();
		var configuracion = JSON.parse(localStorage["configuracion"]);
		var membrete = $('#inputMembrete').val();
		configuracion.membrete = membrete;

		localStorage["configuracion"] = JSON.stringify(configuracion);
	});
	
	$("a[name='"+ CONFIG_ACTIVE+ "']").trigger("click");
	
	//cargar membrete en input membrete
	var configuracion = JSON.parse(localStorage["configuracion"]);
	$('#inputMembrete').val(configuracion.membrete);
});

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

function makedbLocalStorage(){
	if (window.localStorage) {
		if (localStorage.configuracion == null) {
			//crear un array vacio
			var stringVacio = '{"centroRegional": [],"ciudad":[],"unidadUltrasonografica":[],"profesionalEcografista":[],"profesionalReferente":[],"lugarControlPrenatal":[],"patologiaObstetrica":[],"motivoExamen":[],"prevision":[],"membrete":""}';
			localStorage["configuracion"] = stringVacio;
		}
	}
	else{
		window.alert("tu navegador no es compatible con la plataforma, por favor actualiza tu navegador");
	}
}

function loadConfig(){
	if (window.localStorage) {
		if (localStorage.configuracion == null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			$.each(configuracion.MotivoExamen, function (i, item) {
				$('#motivo-examen').append($('<option>', { value: item.id,text : item.nombre}));
			});
			$.each(configuracion.PatologiaObstetrica, function (i, item) {
				$('#patologiaObstetricaUno').append($('<option>', { value: item.id,text : item.nombre}));
			});
			$.each(configuracion.LugarControlPrenatal, function (i, item) {
				$('#Lugar-examen').append($('<option>', { value: item.id,text : item.nombre}));
			});
			$.each(configuracion.profesionalEcografista, function (i, item) {
				$('#ecografista').append($('<option>', { value: item.id,text : item.nombre}));
			});
			$.each(configuracion.ciudad, function (i, item) {
				$('#procedencia').append($('<option>', {value: item.id,text : item.nombre}));
			});
		}
	}
}

function activateTr(element){
	$.each( $(element).parent().children(), function( i, val ) {
		$( val ).removeClass( 'table-active');
	});
	$(element).addClass('table-active');
	$("#editarConfig").removeClass("d-none");
	$('#eliminarConfig').removeClass("d-none");
}

function disableA(e){
	e.preventDefault();
	window.alert("Primero debes guardar o cancelar");
	$("#guardarConfig").removeClass("btn-outline-danger btn-outline-primary").addClass("btn-outline-danger" );
	$("#cancelarConfig").removeClass("btn-outline-danger btn-outline-primary").addClass("btn-outline-danger" ); 
}

