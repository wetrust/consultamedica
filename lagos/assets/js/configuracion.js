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
						$('#eliminarConfig').removeClass("d-none");
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nueva región de salud");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Editar región de salud");
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
						$('#eliminarConfig').removeClass("d-none");
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo Hospital");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Editar Hospital");
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
						$('#eliminarConfig').removeClass("d-none");
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nueva unidad ultrasonográfica");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Editar unidad ultrasonográfica");
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
						$('#eliminarConfig').removeClass("d-none");
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo profesional ultrasonografista");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Editar profesional ultrasonografista");
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
						$('#eliminarConfig').removeClass("d-none");
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo lugar de control");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Editar lugar de control");
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
						$('#eliminarConfig').removeClass("d-none");
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nueva patología");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Editar patología");
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
						$('#eliminarConfig').removeClass("d-none");
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo motivo de exámen");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Editar motivo de exámen");
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
						$('#eliminarConfig').removeClass("d-none");
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nueva previsión");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Editar previsión");
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
						$('#eliminarConfig').removeClass("d-none");
						$('#tableBody tr').on('click',function(){
							activateTr(this);
						});
					}
					$("#nuevoConfig").html("<i class='fa fa-plus' aria-hidden='true'></i> Nuevo profesional referente");
					$("#editarConfig").html("<i class='fa fa-pencil' aria-hidden='true'></i> Editar profesional referente");
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
		
		$("a").on("click",function(e){
			e.preventDefault();
			window.alert("Primero debes guardar o cancelar");
			$("#guardarConfig").removeClass("btn-outline-danger btn-outline-primary").addClass("btn-outline-danger" );
			$("#cancelarConfig").removeClass("btn-outline-danger btn-outline-primary").addClass("btn-outline-danger" ); 
		});
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
			}
		});
		
		switch(CONFIG_ACTIVE){
			case "centroRegional":
				$("#titleInput").html("Editar Centro Regional");
				break;
			case "ciudad":
				$("#titleInput").html("Editar Ciudad");
				break;
			case "unidadUltrasonografica":
				$("#titleInput").html("Editar unidad Ultrasonográfica");
				break;
			case "profesionalEcografista":
				$("#titleInput").html("Editar ecografista");
				break;
			case "lugarControlPrenatal":
				$("#titleInput").html("Editar lugar de control prenatal");
				break;
			case "patologiaObstetrica":
				$("#titleInput").html("Editar Patología obstétrica");
				break;
			case "motivoExamen":
				$("#titleInput").html("Editar motivo de exámen");
				break;
			case "prevision":
				$("#titleInput").html("Editar previsión");
				break;
			case "profesionalReferente":
				$("#titleInput").html("Editar Profesional referente");
				break;
		}
		
		$("a").on("click",function(e){
			e.preventDefault();
			window.alert("Primero debes guardar o cancelar");
			$("#guardarConfig").removeClass("btn-outline-danger btn-outline-primary").addClass("btn-outline-danger" );
			$("#cancelarConfig").removeClass("btn-outline-danger btn-outline-primary").addClass("btn-outline-danger" ); 
		});
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
						aRR["id"] = configuracion.centroRegional.length +1;
						aRR["nombre"] = $('#inputConfig').val();
						configuracion.centroRegional.push(aRR);
						break;
					case "ciudad":
						aRR["id"] = configuracion.ciudad.length +1;
						aRR["nombre"] = $('#inputConfig').val();
                        			configuracion.ciudad.push(aRR);
						break;
					case "unidadUltrasonografica":
						aRR["id"] = configuracion.unidadUltrasonografica.length +1;
						aRR["nombre"] = $('#inputConfig').val();
						configuracion.unidadUltrasonografica.push(aRR);
						break;
					case "profesionalEcografista":
						aRR["id"] = configuracion.profesionalEcografista.length +1;
						aRR["nombre"] = $('#inputConfig').val();
                        			configuracion.profesionalEcografista.push(aRR);
						break;
					case "lugarControlPrenatal":
						aRR["id"] = configuracion.lugarControlPrenatal.length +1;
						aRR["nombre"] = $('#inputConfig').val();
						configuracion.lugarControlPrenatal.push(aRR);
						break;
					case "patologiaObstetrica":
						aRR["id"] = configuracion.patologiaObstetrica.length +1;
						aRR["nombre"] = $('#inputConfig').val();
                        			configuracion.patologiaObstetrica.push(aRR);
						break;
					case "motivoExamen":
						aRR["id"] = configuracion.motivoExamen.length +1;
						aRR["nombre"] = $('#inputConfig').val();
						configuracion.motivoExamen.push(aRR);
						break;
					case "prevision":
						aRR["id"] = configuracion.prevision.length +1;
						aRR["nombre"] = $('#inputConfig').val();
						configuracion.prevision.push(aRR);
						break;
					case "profesionalReferente":
						aRR["id"] = configuracion.profesionalReferente.length +1;
						aRR["nombre"] = $('#inputConfig').val();
						configuracion.profesionalReferente.push(aRR);
						break;
				}
				$('#inputConfig').val("");
				localStorage["configuracion"] = JSON.stringify(configuracion);
			}
		}
		
		$("a").off("click");
		CONFIG_EDIT = false;
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
		$("a").off("click");
		CONFIG_EDIT = false;
		$("a[name='"+ CONFIG_ACTIVE + "']").trigger("click");
	});

	$("#eliminarConfig").on("click", function(){
		if (window.localStorage) {
			if (localStorage.configuracion != null) {
				var configuracion = JSON.parse(localStorage["configuracion"]);
				switch(CONFIG_ACTIVE){
					case "centroRegional":
						//var nombre = "";
						//var getElement = false;
						//var nARR = [];
						//var aRR = {id:0, nombre:"Doe"};
						//var contador = 0;
						//$.each( $('#tableBody').children(), function( i, val ) {
						//	if ($( val ).hasClass( 'table-active') == true){
						//		getElement = true;
						//		nombre = $(val).children('td').html();
						//	}
						//});
						
						//if (getElement == true){
						//	$.each(configuracion.centroRegional, function (i, item) {
						//		if (item.nombre != nombre){
						//			aRR["id"] = contador +1;
						//			aRR["nombre"] = item.nombre;
						//			if (contador == 0){
						//				nARR[0] = aRR;
						//			}
						//			else{
						//				nARR.push(aRR);
						//			}
						//			contador++;
						//		}
						//	});
						//	configuracion.centroRegional = nARR;
						//}
						break;
					case "ciudad":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								this.contador = 0;
								this.nARR = [];
								this.aRR = {id:0, nombre:"Doe"};
								var context = this;
								$.each(configuracion.ciudad, function (i, item) {	
									if (item.nombre != nombre){
										context.aRR["id"] = context.contador +1;
										context.aRR["nombre"] = item.nombre;
										context.nARR.push(context.aRR);
										context.contador++;
									}
								});
								configuracion.ciudad = this.nARR;
							}
						});
						break;
					case "unidadUltrasonografica":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								this.contador = 0;
								this.nARR = [];
								this.aRR = {id:0, nombre:"Doe"};
								var context = this;
								$.each(configuracion.unidadUltrasonografica, function (i, item) {	
									if (item.nombre != nombre){
										context.aRR["id"] = context.contador +1;
										context.aRR["nombre"] = item.nombre;
										context.nARR.push(context.aRR);
										context.contador++;
									}
								});
								configuracion.unidadUltrasonografica = this.nARR;
							}
						});
						break;
					case "profesionalEcografista":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								this.contador = 0;
								this.nARR = [];
								this.aRR = {id:0, nombre:"Doe"};
								var context = this;
								$.each(configuracion.profesionalEcografista, function (x, item) {	
									if (item.nombre != nombre){
										context.aRR["id"] = context.contador +1;
										context.aRR["nombre"] = item.nombre;
										context.nARR.push(context.aRR);
										context.contador++;
									}
								});
								configuracion.profesionalEcografista = this.nARR;
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
								this.contador = 0;
								this.nARR = [];
								this.aRR = {id:0, nombre:"Doe"};
								var context = this;
								$.each(configuracion.patologiaObstetrica, function (i, item) {	
									if (item.nombre != nombre){
										context.aRR["id"] = context.contador +1;
										context.aRR["nombre"] = item.nombre;
										context.nARR.push(context.aRR);
										context.contador++;
									}
								});
								configuracion.patologiaObstetrica = this.nARR;
							}
						});
						break;
					case "motivoExamen":
						$.each( $('#tableBody').children(), function( i, val ) {
							if ($( val ).hasClass( 'table-active') == true){
								getElement = true;
								var nombre = $(val).children('td').html();
								this.contador = 0;
								this.nARR = [];
								this.aRR = {id:0, nombre:"Doe"};
								var context = this;
								$.each(configuracion.motivoExamen, function (i, item) {	
									if (item.nombre != nombre){
										context.aRR["id"] = context.contador +1;
										context.aRR["nombre"] = item.nombre;
										context.nARR.push(context.aRR);
										context.contador++;
									}
								});
								configuracion.motivoExamen = this.nARR;
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
}
