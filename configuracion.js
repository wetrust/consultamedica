function haveDatabase(){
	if (localStorage.configuracion != null) {
		return true;
	}
	return false;
}

function checkIntegrity(){
	let db = JSON.parse(localStorage["configuracion"]);
	
	let tables = ['MotivoExamen', 'LugarControlPrenatal', 'profesional', 'ciudad', 'profRef', 'PatologiaObstetrica', 'membrete'];
	let baseTables = JSON.parse('{"profRef":[],"ciudad":[],"MotivoExamen":[],"LugarControlPrenatal":[],"profesional":[],"PatologiaObstetrica":[],"membrete":""}');
	
	for (var j = 0; j < tables.length; j++) {
		let table = false;
		$.each(db, function( index, value ) {
			if (index == tables[j]){
			    table = true;
			}
		});
		
		if (table == false){
			let element = baseTables["'" + tables[j] + "'"];
			db.push(element);
		}
	}
}

function makeDatabase(){
	var db = '{"profRef":[],"ciudad":[],"MotivoExamen":[],"LugarControlPrenatal":[],"profesional":[],"PatologiaObstetrica":[],"membrete":""}';
	localStorage["configuracion"] = db;
}

function checkDatabase(){
	if (window.localStorage) {
		if (haveDatabase() == true){
			checkIntegrity();
		}
		else{
			makeDatabase();
		}
		return true;
	}
	return false;
}

function makedbLocalStorage(){
	
	if (window.localStorage) {
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
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
				$('#MotivoConfigTable tr').on('click',function(){
					activateTr(this);
				});
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
				//manejador de click sobre las tablas de configuración
				$('#LugarConfigTable tr').on('click',function(){
					activateTr(this);
				});
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
				$('#EcografistaConfigTable tr').on('click',function(){
					activateTr(this);
				});
			}
			
			$('#procedencia').empty();
			$('#CiudadConfigTable').empty();
			if (configuracion.configuracion.ciudad.length > 0){
				$.each(configuracion.configuracion.ciudad, function (i, item) {
				    $('#procedencia').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#CiudadConfigTable').append(fila);
					
				});
				$('#eliminarCiudadConfig').css("display","block");
				$('#CiudadConfigTable tr').on('click',function(){
					activateTr(this);
				});
			}
			
			$('#profReferente').empty();
			$('#profRefConfigTable').empty();
			if (configuracion.configuracion.profRef.length > 0){
				$.each(configuracion.configuracion.profRef, function (i, item) {
				    $('#profReferente').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#profRefConfigTable').append(fila);
					
				});
				$('#eliminarprofRefConfig').css("display","block");
				$('#profRefConfigTable tr').on('click',function(){
					activateTr(this);
				});
			}
			
			$('#patologiaObstetricaUno').empty();
			$('#PatologiaObstetricaConfigTable').empty();
			if (configuracion.configuracion.PatologiaObstetrica.length > 0){
				$.each(configuracion.configuracion.PatologiaObstetrica, function (i, item) {
				    $('#patologiaObstetricaUno').append($('<option>', { 
					value: item.id,
					text : item.nombre
				    }));
					var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
					$('#PatologiaObstetricaConfigTable').append(fila);
					
				});
				$('#eliminarPatologiaObstetricaConfig').css("display","block");
				$('#PatologiaObstetricaConfigTable tr').on('click',function(){
					activateTr(this);
				});
			}
			$("#membrete").val(configuracion.configuracion.membrete);
		}else{
			//crear un array vacio
			var stringVacio = '{"configuracion": {"profRef":[],"ciudad":[],"MotivoExamen":[],"LugarControlPrenatal":[],"profesional":[],"PatologiaObstetrica":[],"membrete":""}}';
			localStorage["configuracion"] = stringVacio;
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

function saveprofRefLocalStorage(){

		if (window.localStorage) {
		if (localStorage.configuracion != null) {
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			$('#profReferente').html("");
			$('#profRefConfigTable').html("");
		
				var aRR = {id:0, nombre:"Doe"};
				aRR["id"] = configuracion.configuracion.profRef.length +1;
				aRR["nombre"] = $('#profRefInput').val();
				
                        	configuracion.configuracion.profRef.push(aRR);
			$('#eliminarprofRefConfig').css("display","block");
			$('#profRefInput').val("");
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

$( '#eliminarprofRefConfig').on('click', function() {
	var getElement = false;
	var contador = 0
	$.each( $('#profRefConfigTable').children(), function( i, val ) {
		if ($( val ).hasClass( 'table-active') == true){
			getElement = true;
			var nombre = $(val).children('td').html();
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			//construir un nuevo array de objetos
			var profRef = [];
			$.each(configuracion.configuracion.profRef, function (i, item) {	
				if (item.nombre != nombre){
					var aRR = {id:0, nombre:"Doe"};
					aRR["id"] =contador +1;
					aRR["nombre"] = item.nombre;
				
                        		profRef.push(aRR);
					contador++;
				}
			});
			
			configuracion.configuracion.profRef = profRef;
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
