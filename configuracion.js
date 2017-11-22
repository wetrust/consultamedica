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
				$('#TipoConfigTable tr').on('click',function(){
					activateTr(this);
				});
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
			$('#eliminarTipoConfig').css("display","block");
			localStorage["configuracion"] = JSON.stringify(configuracion);
			makedbLocalStorage();
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

$( '#eliminarTipoConfig').on('click', function() {
	var getElement = false;
	var contador = 0
	$.each( $('#TipoConfigTable').children(), function( i, val ) {
		if ($( val ).hasClass( 'table-active') == true){
			getElement = true;
			var nombre = $(val).children('td').html();
			var configuracion = JSON.parse(localStorage["configuracion"]);
			
			//construir un nuevo array de objetos
			var tipoExamen = [];
			$.each(configuracion.configuracion.tipoExamen, function (i, item) {	
				if (item.nombre != nombre){
					var aRR = {id:0, nombre:"Doe"};
					aRR["id"] =contador +1;
					aRR["nombre"] = item.nombre;
				
                        		tipoExamen.push(aRR);
					contador++;
				}
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
