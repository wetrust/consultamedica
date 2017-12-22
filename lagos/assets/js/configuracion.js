var CONFIG_ACTIVE = "centroRegional";

$(document).ready(function(){
	//comprobar si existe la base de datos de configuración
	makedbLocalStorage();
	loadConfig();
	
	$("a[href='#dp']").on("click", function(){
		//al cambiar la alternativa, cargar los datos en la tabla
		if (window.localStorage) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			$('#eliminarConfig').addClass("d-none");
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
				break;
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
		}
	});
	
	$("#guardarConfig").on("click", function(){
		$('#tableHead').parent().parent().removeClass("d-none");
		$("#nuevoConfig").removeClass("d-none");
		$("#guardarConfig").addClass("d-none");
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
				}
				$('#inputConfig').val("");
				localStorage["configuracion"] = JSON.stringify(configuracion);
			}
		}
		$("a[name='"+ CONFIG_ACTIVE+ "']").trigger("click");
	});

	$("#cancelarConfig").on("click", function(){
		$('#tableHead').parent().parent().removeClass("d-none");
		$("#nuevoConfig").removeClass("d-none");
		$("#guardarConfig").addClass("d-none");
		$("#cancelarConfig").addClass("d-none");
		$(".formulario").addClass("d-none");
		$("#oConfig").prop('disabled', false);
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
								$.each(configuracion.profesionalEcografista, function (i, item) {	
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
								this.contador = 0;
								this.nARR = [];
								this.aRR = {id:0, nombre:"Doe"};
								var context = this;
								$.each(configuracion.lugarControlPrenatal, function (i, item) {	
									if (item.nombre != nombre){
										context.aRR["id"] = context.contador +1;
										context.aRR["nombre"] = item.nombre;
										context.nARR.push(context.aRR);
										context.contador++;
									}
								});
								configuracion.lugarControlPrenatal = this.nARR;
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
				localStorage["configuracion"] = JSON.stringify(configuracion);
			}
		}
		
		if (getElement == false){
			window.alert("haga click sobre un elemento para eliminar");
		}
		else{
			$("a[name='"+ CONFIG_ACTIVE+ "']").trigger("click");
		}
	});
	
	$("a[name='"+ CONFIG_ACTIVE+ "']").trigger("click");
});


function makedbLocalStorage(){
	if (window.localStorage) {
		if (localStorage.configuracion == null) {
			//crear un array vacio
			var stringVacio = '{"centroRegional": [],"ciudad":[],"unidadUltrasonografica":[],"profesionalEcografista":[],"lugarControlPrenatal":[],"patologiaObstetrica":[],"motivoExamen":[],"prevision":[],"membrete":""}';
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
}
