var CONFIG_ACTIVE = "centroRegional";
$(document).ready(function(){
	//comprobar si existe la base de datos de configuración
	makedbLocalStorage();
	loadConfig();
	
	$("#oConfig").on("change", function(){
		//al cambiar la alternativa, cargar los datos en la tabla
		if (window.localStorage) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			$('#eliminarConfig').addClass("d-none");
			var valueS = parseInt($("#oConfig option:selected").val());
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
					$('#eliminarConfig').css("display","block");
					$('#tableBody tr').on('click',function(){
						activateTr(this);
					});
				}
				break;
			    case 2:
				$('#tableHead').empty();
				$('#tableBody').empty();
				var fila = '<th>#</th><th>Ciudad</th>';
				$('#tableHead').append(fila);
				CONFIG_ACTIVE = "ciudad";
				if (configuracion.ciudad.length > 0){
					$.each(configuracion.ciudad, function (i, item) {
						fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
						$('#tableBody').append(fila);
					});
					$('#eliminarConfig').css("display","block");
					$('#tableBody tr').on('click',function(){
						activateTr(this);
					});
				}
				break;
			    case 3:
				$('#tableHead').empty();
				$('#tableBody').empty();
				var fila = '<th>#</th><th>Unidad Ultrasonográfica</th>';
				$('#tableHead').append(fila);
				CONFIG_ACTIVE = "unidadUltrasonografica";
				if (configuracion.unidadUltrasonografica.length > 0){
					$.each(configuracion.unidadUltrasonografica, function (i, item) {
						fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
						$('#tableBody').append(fila);
					});
					$('#eliminarConfig').css("display","block");
					$('#tableBody tr').on('click',function(){
						activateTr(this);
					});
				}
				break;
			    case 4:
				$('#tableHead').empty();
				$('#tableBody').empty();
				var fila = '<th>#</th><th>Profesional Ecografista</th>';
				$('#tableHead').append(fila);
				CONFIG_ACTIVE = "profesionalEcografista";
				if (configuracion.profesionalEcografista.length > 0){
					$.each(configuracion.profesionalEcografista, function (i, item) {
						fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
						$('#tableBody').append(fila);
					});
					$('#eliminarConfig').css("display","block");
					$('#tableBody tr').on('click',function(){
						activateTr(this);
					});
				}
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
		}
	});
	
	$("#guardarConfig").on("click", function(){
		$('#tableHead').parent().parent().removeClass("d-none");
		$("#nuevoConfig").removeClass("d-none");
		$("#guardarConfig").addClass("d-none");
		$("#cancelarConfig").addClass("d-none");
		$(".formulario").addClass("d-none");
		$("#oConfig").prop('disabled', false);
		loadConfig();
	}

	$("#cancelarConfig").on("click", function(){
		$('#tableHead').parent().parent().removeClass("d-none");
		$("#nuevoConfig").removeClass("d-none");
		$("#guardarConfig").addClass("d-none");
		$("#cancelarConfig").addClass("d-none");
		$(".formulario").addClass("d-none");
		$("#oConfig").prop('disabled', false);
	}
});


function makedbLocalStorage(){
	if (window.localStorage) {
		if (localStorage.configuracion == null) {
			//crear un array vacio
			var stringVacio = '{"centroRegional": [],"ciudad":[],"unidadUltrasonografica":[],"profesionalEcografista":[],"lugarControlPrenatal":[],"patologiaObstetrica":[],"motivoExamen":[],"membrete":""}';
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
			$('#eliminarMotivoConfig').css("display","block");
			$('#motivoInput').val("");
			localStorage["configuracion"] = JSON.stringify(configuracion);
			makedbLocalStorage();
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
			$('#eliminarLugarConfig').css("display","block");
			$('#LugarInput').val("");
			localStorage["configuracion"] = JSON.stringify(configuracion);
			makedbLocalStorage();
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
			$('#eliminarEcografistaConfig').css("display","block");
			$('#ecografistaInput').val("");
			localStorage["configuracion"] = JSON.stringify(configuracion);
			makedbLocalStorage();
		}
	}
}

function saveCiudadExamenLocalStorage(){
	
	if (window.localStorage) {
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			$('#procedencia').html("");
			$('#CiudadConfigTable').html("");
		
				var aRR = {id:0, nombre:"Doe"};
				aRR["id"] = configuracion.configuracion.ciudad.length +1;
				aRR["nombre"] = $('#CiudadInput').val();
				
                        	configuracion.configuracion.ciudad.push(aRR);
			$('#eliminarCiudadConfig').css("display","block");
			$('#CiudadInput').val("");
			localStorage["configuracion"] = JSON.stringify(configuracion);
			makedbLocalStorage();
		}
	}
}

function savePatologiaObstetricaExamenLocalStorage(){
	
	if (window.localStorage) {
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			$('#patologiaObstetricaUno').html("");
			$('#PatologiaObstetricaConfigTable').html("");
		
				var aRR = {id:0, nombre:"Doe"};
				aRR["id"] = configuracion.configuracion.PatologiaObstetrica.length +1;
				aRR["nombre"] = $('#PatologiaObstetricaInput').val();
				
                        	configuracion.configuracion.PatologiaObstetrica.push(aRR);
			$('#eliminarPatologiaObstetricaConfig').css("display","block");
			$('#PatologiaObstetricaInput').val("");
			localStorage["configuracion"] = JSON.stringify(configuracion);
			makedbLocalStorage();
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

$( '#eliminarMotivoConfig').on('click', function() {
	var getElement = false;
	var contador = 0
	$.each( $('#MotivoConfigTable').children(), function( i, val ) {
		if ($( val ).hasClass( 'table-active') == true){
			getElement = true;
			var nombre = $(val).children('td').html();
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			//construir un nuevo array de objetos
			var MotivoExamen = [];
			$.each(configuracion.configuracion.MotivoExamen, function (i, item) {	
				if (item.nombre != nombre){
					var aRR = {id:0, nombre:"Doe"};
					aRR["id"] =contador +1;
					aRR["nombre"] = item.nombre;
				
                        		MotivoExamen.push(aRR);
					contador++;
				}
			});
			
			configuracion.configuracion.MotivoExamen = MotivoExamen;
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
$( '#eliminarLugarConfig').on('click', function() {
	var getElement = false;
	var contador = 0
	$.each( $('#LugarConfigTable').children(), function( i, val ) {
		if ($( val ).hasClass( 'table-active') == true){
			getElement = true;
			var nombre = $(val).children('td').html();
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			//construir un nuevo array de objetos
			var LugarControlPrenatal = [];
			$.each(configuracion.configuracion.LugarControlPrenatal, function (i, item) {	
				if (item.nombre != nombre){
					var aRR = {id:0, nombre:"Doe"};
					aRR["id"] =contador +1;
					aRR["nombre"] = item.nombre;
				
                        		LugarControlPrenatal.push(aRR);
					contador++;
				}
			});
			
			configuracion.configuracion.LugarControlPrenatal = LugarControlPrenatal;
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
$( '#eliminarEcografistaConfig').on('click', function() {
	var getElement = false;
	var contador = 0
	$.each( $('#EcografistaConfigTable').children(), function( i, val ) {
		if ($( val ).hasClass( 'table-active') == true){
			getElement = true;
			var nombre = $(val).children('td').html();
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			//construir un nuevo array de objetos
			var profesional = [];
			$.each(configuracion.configuracion.profesional, function (i, item) {	
				if (item.nombre != nombre){
					var aRR = {id:0, nombre:"Doe"};
					aRR["id"] =contador +1;
					aRR["nombre"] = item.nombre;
				
                        		profesional.push(aRR);
					contador++;
				}
			});
			
			configuracion.configuracion.profesional = profesional;
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

$( '#eliminarCiudadConfig').on('click', function() {
	var getElement = false;
	var contador = 0
	$.each( $('#CiudadConfigTable').children(), function( i, val ) {
		if ($( val ).hasClass( 'table-active') == true){
			getElement = true;
			var nombre = $(val).children('td').html();
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			//construir un nuevo array de objetos
			var ciudad = [];
			$.each(configuracion.configuracion.ciudad, function (i, item) {	
				if (item.nombre != nombre){
					var aRR = {id:0, nombre:"Doe"};
					aRR["id"] =contador +1;
					aRR["nombre"] = item.nombre;
				
                        		ciudad.push(aRR);
					contador++;
				}
			});
			
			configuracion.configuracion.ciudad = ciudad;
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

$( '#eliminarPatologiaObstetricaConfig').on('click', function() {
	var getElement = false;
	var contador = 0
	$.each( $('#PatologiaObstetricaConfigTable').children(), function( i, val ) {
		if ($( val ).hasClass( 'table-active') == true){
			getElement = true;
			var nombre = $(val).children('td').html();
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			//construir un nuevo array de objetos
			var PatologiaObstetrica = [];
			$.each(configuracion.configuracion.PatologiaObstetrica, function (i, item) {	
				if (item.nombre != nombre){
					var aRR = {id:0, nombre:"Doe"};
					aRR["id"] =contador +1;
					aRR["nombre"] = item.nombre;
				
                        		PatologiaObstetrica.push(aRR);
					contador++;
				}
			});
			
			configuracion.configuracion.PatologiaObstetrica = PatologiaObstetrica;
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
