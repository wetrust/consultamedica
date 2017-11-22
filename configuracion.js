function makedbLocalStorage(){
	
	if (window.localStorage) {
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			$('#tipo-examen').empty();
			$('#TipoConfigTable').empty();
			if (configuracion.configuracion.tipoExamen.length > 0){
				$.each(configuracion.configuracion.tipoExamen, function (i, item) {
				    $('#tipo-examen').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#TipoConfigTable').append(fila);
					
				});
				$('#eliminarTipoConfig').css("display","block");
			}
			
			$('#motivo-examen').empty();
			$('#MotivoConfigTable').empty();
			if (configuracion.configuracion.MotivoExamen.length > 0){
				$.each(configuracion.configuracion.MotivoExamen, function (i, item) {
				    $('#motivo-examen').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#MotivoConfigTable').append(fila);
					
				});
				$('#eliminarMotivoConfig').css("display","block");
			}
			
			$('#Lugar-examen').empty();
			$('#LugarConfigTable').empty();
			if (configuracion.configuracion.LugarControlPrenatal.length > 0){
				$.each(configuracion.configuracion.LugarControlPrenatal, function (i, item) {
				    $('#Lugar-examen').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#LugarConfigTable').append(fila);
					
				});
				$('#eliminarLugarConfig').css("display","block");
			}
			$('#ecografista').empty();
			$('#EcografistaConfigTable').empty();
			if (configuracion.configuracion.profesional.length > 0){
				$.each(configuracion.configuracion.profesional, function (i, item) {
				    $('#ecografista').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#EcografistaConfigTable').append(fila);
					
				});
				$('#eliminarEcografistaConfig').css("display","block");
			}
		}else{
			//crear un array vacio
			var stringVacio = '{"configuracion": {"tipoExamen":[],"MotivoExamen":[],"LugarControlPrenatal":[],"profesional":[]}}';
			localStorage["configuracion"] = stringVacio;
		}
	}
}

function saveTipoExamenLocalStorage(){
	
	if (window.localStorage) {
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			$('#tipo-examen').html("");
			$('#TipoConfigTable').html("");
		
				var aRR = {id:0, nombre:"Doe"};
				aRR["id"] = configuracion.configuracion.tipoExamen.length +1;
				aRR["nombre"] = $('#tipoInput').val();
				
                        	configuracion.configuracion.tipoExamen.push(aRR);
				
				
				
				$.each(configuracion.configuracion.tipoExamen, function (i, item) {
				    $('#tipo-examen').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#TipoConfigTable').append(fila);
				});
			localStorage["configuracion"] = JSON.stringify(configuracion);
		}
	}
}

function saveMotivoExamenLocalStorage(){
	
	if (window.localStorage) {
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			$('#motivo-examen').html("");
			$('#MotivoConfigTable').html("");
		
				var aRR = {id:0, nombre:"Doe"};
				aRR["id"] = configuracion.configuracion.MotivoExamen.length +1;
				aRR["nombre"] = $('#motivoInput').val();
				
                        	configuracion.configuracion.MotivoExamen.push(aRR);
				
				
				
				$.each(configuracion.configuracion.MotivoExamen, function (i, item) {
				    $('#motivo-examen').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#MotivoConfigTable').append(fila);
				});
			localStorage["configuracion"] = JSON.stringify(configuracion);
		}
	}
}

function saveLugarExamenLocalStorage(){
	
	if (window.localStorage) {
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			$('#Lugar-examen').html("");
			$('#LugarConfigTable').html("");
		
				var aRR = {id:0, nombre:"Doe"};
				aRR["id"] = configuracion.configuracion.LugarControlPrenatal.length +1;
				aRR["nombre"] = $('#LugarInput').val();
				
                        	configuracion.configuracion.LugarControlPrenatal.push(aRR);
				
				
				
				$.each(configuracion.configuracion.LugarControlPrenatal, function (i, item) {
				    $('#Lugar-examen').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#LugarConfigTable').append(fila);
				});
			localStorage["configuracion"] = JSON.stringify(configuracion);
		}
	}
}

function saveEcografistaExamenLocalStorage(){
	
	if (window.localStorage) {
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			$('#ecografista').html("");
			$('#EcografistaConfigTable').html("");
		
				var aRR = {id:0, nombre:"Doe"};
				aRR["id"] = configuracion.configuracion.profesional.length +1;
				aRR["nombre"] = $('#ecografistaInput').val();
				
                        	configuracion.configuracion.profesional.push(aRR);
				
				
				
				$.each(configuracion.configuracion.profesional, function (i, item) {
				    $('#ecografista').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#EcografistaConfigTable').append(fila);
				});
			localStorage["configuracion"] = JSON.stringify(configuracion);
		}
	}
}

function activateTr(element){
	$.each( $(element).parent().children(), function( i, val ) {
		$( val ).removeClass( 'table-active');
	});
	$(element).addClass('table-active');
}

//manejadore de botones

$( '#eliminarTipoConfig').on('click', function() {
	var getElement = false;
	var contador = 0
	$.each( $('#TipoConfigTable').children(), function( i, val ) {
		if ($( val ).hasClass( 'table-active') == true){
			getElement = true;
			var nombre = $(val).children('td').html();
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			//construir un nuevo array de objetos
			var tipoExamen = {};
			$.each(configuracion.configuracion.tipoExamen, function (i, item) {	
				if (item.nombre != nombre){
					var aRR = {id:0, nombre:"Doe"};
					aRR["id"] =contador +1;
					aRR["nombre"] = item.nombre;
				
                        		tipoExamen.push(aRR);
				}
				contador++;
			});
			
			configuracion.configuracion.tipoExamen = tipoExamen;
			localStorage["configuracion"] = JSON.stringify(configuracion);
		}
	});
	
	if (getElement == false){
		window.alert("haga click sobre un elemento para eliminar");
	}
	else{
		makedbLocalStorage();
	}
	
 });
$( '#eliminarMotivoConfig').on('click', function() {
	$("#ecografistaConfig .tabla").show();
	$('#nuevoEcografistaConfig').show();
	$('#editarEcografistaConfig').show();
	$('#guardarEcografistaConfig').hide();
	$('#cancelarEcografistaConfig').hide();
	$("#ecografistaConfig .formulario").hide();
 });
$( '#eliminarLugarConfig').on('click', function() {
	$("#ecografistaConfig .tabla").show();
	$('#nuevoEcografistaConfig').show();
	$('#editarEcografistaConfig').show();
	$('#guardarEcografistaConfig').hide();
	$('#cancelarEcografistaConfig').hide();
	$("#ecografistaConfig .formulario").hide();
 });
$( '#eliminarEcografistaConfig').on('click', function() {
	$("#ecografistaConfig .tabla").show();
	$('#nuevoEcografistaConfig').show();
	$('#editarEcografistaConfig').show();
	$('#guardarEcografistaConfig').hide();
	$('#cancelarEcografistaConfig').hide();
	$("#ecografistaConfig .formulario").hide();
 });
