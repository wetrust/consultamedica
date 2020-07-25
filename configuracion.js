function haveDatabase() {
    if (localStorage.configuracion != null) {
        return true;
    }
    return false;
}

function checkIntegrity() {
    let db = JSON.parse(localStorage["configuracion"]);

    let tables = ['nacionalidad', 'MotivoExamen', 'profesional', 'PatologiaObstetrica', 'membrete', 'correos'];

    for (var j = 0; j < tables.length; j++) {
        let table = false;
        $.each(db, function(index, value) {
            if (index == tables[j]) {
                table = true;
            }
        });

        if (table == false) {
            let element = JSON.parse('{"' + tables[j] + '":[]}');
            $.extend(db, element);
        }
    }

    localStorage["configuracion"] = JSON.stringify(db);
}

function makeDatabase() {
    var db = '{"nacionalidad": [], "MotivoExamen":[],"profesional":[],"PatologiaObstetrica":[],"membrete":"", "correos":[]}';
    localStorage["configuracion"] = db;
}

function checkDatabase() {
    if (haveDatabase() == true) {
        checkIntegrity();
    } else {
        makeDatabase();
    }
}

function loadDatabase() {
    var configuracion = JSON.parse(localStorage["configuracion"]);

    $('#motivo-examen').empty();
    $('#MotivoConfigTable').empty();
    if (configuracion.MotivoExamen.length > 0) {
        $.each(configuracion.MotivoExamen, function(i, item) {
            $('#motivo-examen').append($('<option>', {
                value: item.id,
                text: item.nombre
            }));
            var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
            $('#MotivoConfigTable').append(fila);

        });
        $('#eliminarMotivoConfig').removeClass("d-none");
        $('#MotivoConfigTable tr').on('click', function() {
            activateTr(this);
        });
    }

    $('#ecografista').empty();
    $('#EcografistaConfigTable').empty();
    if (configuracion.profesional.length > 0) {
        $.each(configuracion.profesional, function(i, item) {
            $('#ecografista').append($('<option>', {
                value: item.id,
                text: item.nombre
            }));
            $('#ecografista\\.copia').append($('<option>', {
                value: item.id,
                text: item.nombre
            }));
            var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
            $('#EcografistaConfigTable').append(fila);

        });
        $('#eliminarEcografistaConfig').removeClass("d-none");
        $('#EcografistaConfigTable tr').on('click', function() {
            activateTr(this);
        });
    }

    $('#nacionalidad').empty();
    $('#NacionalidadConfigTable').empty();
    if (configuracion.nacionalidad.length > 0) {
        $.each(configuracion.nacionalidad, function(i, item) {
            $('#nacionalidad').append($('<option>', {
                value: item.id,
                text: item.nombre
            }));
            var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
            $('#NacionalidadConfigTable').append(fila);

        });
        $('#eliminarNacionalidadConfig').removeClass("d-none");
        $('#NacionalidadConfigTable tr').on('click', function() {
            activateTr(this);
        });
    }

    $('#patologiaObstetricaUno').empty();
    $('#PatologiaObstetricaConfigTable').empty();
    if (configuracion.PatologiaObstetrica.length > 0) {
        $.each(configuracion.PatologiaObstetrica, function(i, item) {
            $('#patologiaObstetricaUno').append($('<option>', {
                value: item.id,
                text: item.nombre
            }));
            var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td></tr>';
            $('#PatologiaObstetricaConfigTable').append(fila);

        });
        $('#eliminarPatologiaObstetricaConfig').removeClass("d-none");
        $('#PatologiaObstetricaConfigTable tr').on('click', function() {
            activateTr(this);
        });
    }
    $("#membrete").val(configuracion.membrete);

    $('#CorreoConfigTable').empty();
    if (configuracion.correos.length > 0) {

        $.each(configuracion.correos, function(i, item) {
            var fila = '<tr><th scope="row">' + item.id + '</th><td>' + item.nombre + '</td><td>' + item.profesion + '</td><td>' + item.ciudad + '</td><td>' + item.correo + '</td><td>' + item.telefono +'</td></tr>';
            $('#CorreoConfigTable').append(fila);
        });

        $('#eliminarCorreoConfig').removeClass("d-none");

        $('#CorreoConfigTable tr').on('click', function() {
            activateTr(this);
        });
    }
}

function saveMotivoExamenLocalStorage() {

    if (window.localStorage) {
        if (localStorage.configuracion != null) {
            var configuracion = JSON.parse(localStorage["configuracion"]);

            $('#motivo-examen').html("");
            $('#MotivoConfigTable').html("");
            var aRR = {id: 0, nombre: "Doe"};
            aRR["id"] = configuracion.MotivoExamen.length + 1;
            aRR["nombre"] = $('#motivoInput').val();

            configuracion.MotivoExamen.push(aRR);
            $('#eliminarMotivoConfig').removeClass("d-none");
            $('#motivoInput').val("");
            localStorage["configuracion"] = JSON.stringify(configuracion);
            loadDatabase();
        }
    }
}

function saveEcografistaExamenLocalStorage() {

    if (window.localStorage) {
        if (localStorage.configuracion != null) {
            var configuracion = JSON.parse(localStorage["configuracion"]);

            $('#ecografista').html("");
            $('#EcografistaConfigTable').html("");
            var aRR = {id: 0, nombre: "Doe"};
            aRR["id"] = configuracion.profesional.length + 1;
            aRR["nombre"] = $('#ecografistaInput').val();

            configuracion.profesional.push(aRR);
            $('#eliminarEcografistaConfig').removeClass("d-none");
            $('#ecografistaInput').val("");
            localStorage["configuracion"] = JSON.stringify(configuracion);
            loadDatabase();
        }
    }
}

function saveNacionalidadConfigLocalStorage() {

    if (window.localStorage) {
        if (localStorage.configuracion != null) {
            var configuracion = JSON.parse(localStorage["configuracion"]);

            $('#nacionalidadInput').html("");
            $('#NacionalidadConfigTable').html("");
            var aRR = {id: 0, nombre: "Doe"};
            aRR["id"] = configuracion.nacionalidad.length + 1;
            aRR["nombre"] = $('#nacionalidadInput').val();

            configuracion.nacionalidad.push(aRR);
            $('#eliminarNacionalidadConfig').removeClass("d-none");
            $('#nacionalidadInput').val("");
            localStorage["configuracion"] = JSON.stringify(configuracion);
            loadDatabase();
        }
    }
}

function savePatologiaObstetricaExamenLocalStorage() {

    if (window.localStorage) {
        if (localStorage.configuracion != null) {
            var configuracion = JSON.parse(localStorage["configuracion"]);

            $('#patologiaObstetricaUno').html("");
            $('#PatologiaObstetricaConfigTable').html("");

            var aRR = {id: 0, nombre: "Doe"};
            aRR["id"] = configuracion.PatologiaObstetrica.length + 1;
            aRR["nombre"] = $('#PatologiaObstetricaInput').val();

            configuracion.PatologiaObstetrica.push(aRR);
            $('#eliminarPatologiaObstetricaConfig').removeClass("d-none");
            $('#PatologiaObstetricaInput').val("");
            localStorage["configuracion"] = JSON.stringify(configuracion);
            loadDatabase();
        }
    }
}

function saveCorreoConfigLocalStorage(){
    if (window.localStorage) {
        if (localStorage.configuracion != null) {
            var configuracion = JSON.parse(localStorage["configuracion"]);

            $('#CorreoConfigTable').html("");

            var aRR = {id: 0, nombre: "Doe", profesion: "Doe", ciudad: "Doe", correo: "Doe", telefono: 1234};
            aRR["id"] = configuracion.correos.length + 1;
            aRR["nombre"] = $('#nombreCorreoInput').val();
            aRR["profesion"] = $('#profesionCorreoInput').val();
            aRR["ciudad"] = $('#ciudadCorreoInput').val();
            aRR["correo"] = $('#correoCorreoInput').val();
            aRR["telefono"] = +$('#telefonoCorreoInput').val();

            configuracion.correos.push(aRR);
            $('#eliminarCorreoConfig').removeClass("d-none");
            $('#nombreCorreoInput').val("");
            $('#profesionCorreoInput').val("");
            $('#ciudadCorreoInput').val("");
            $('#correoCorreoInput').val("");
            $('#telefonoCorreoInput').val("0");
            localStorage["configuracion"] = JSON.stringify(configuracion);
            loadDatabase();
        }
    }
}

function activateTr(element) {
    $.each($(element).parent().children(), function(i, val) {
        $(val).removeClass('table-active');
    });
    $(element).addClass('table-active');
}

//manejadore de botones
$(document).ready(function() {
    $('#nuevoMotivoConfig').on('click', function() {
        $('#motivoConfig .tabla').addClass("d-none");
        $('#nuevoMotivoConfig').addClass("d-none");
        $('#guardarMotivoConfig').removeClass("d-none");
        $('#cancelarMotivoConfig').removeClass("d-none");
        $('#motivoConfig .formulario').removeClass("d-none");
    });

    $('#guardarMotivoConfig').on('click', function() {
        saveMotivoExamenLocalStorage();
        $("#motivoConfig .tabla").removeClass("d-none");
        $('#nuevoMotivoConfig').removeClass("d-none");
        $('#guardarMotivoConfig').addClass("d-none");
        $('#cancelarMotivoConfig').addClass("d-none");
        $("#motivoConfig .formulario").addClass("d-none");
    });

    $('#cancelarMotivoConfig').on('click', function() {
        $("#motivoConfig .tabla").removeClass("d-none");
        $('#nuevoMotivoConfig').removeClass("d-none");
        $('#guardarMotivoConfig').addClass("d-none");
        $('#cancelarMotivoConfig').addClass("d-none");
        $("#motivoConfig .formulario").addClass("d-none");
    });

    $('#eliminarMotivoConfig').on('click', function() {
        var getElement = false;
        var contador = 0
        $.each($('#MotivoConfigTable').children(), function(i, val) {
            if ($(val).hasClass('table-active') == true) {
                getElement = true;
                var nombre = $(val).children('td').html();
                var configuracion = JSON.parse(localStorage["configuracion"]);

                //construir un nuevo array de objetos
                var MotivoExamen = [];
                $.each(configuracion.MotivoExamen, function(i, item) {
                    if (item.nombre != nombre) {
                        var aRR = {id: 0, nombre: "Doe"};
                        aRR["id"] = contador + 1;
                        aRR["nombre"] = item.nombre;

                        MotivoExamen.push(aRR);
                        contador++;
                    }
                });

                configuracion.MotivoExamen = MotivoExamen;
                localStorage["configuracion"] = JSON.stringify(configuracion);
            }
        });

        if (getElement == false) {
            window.alert("haga click sobre un elemento para eliminar");
        } else {
            loadDatabase();
        }
    });

    $('#nuevoEcografistaConfig').on('click', function() {
        $('#ecografistaConfig .tabla').addClass("d-none");
        $('#nuevoEcografistaConfig').addClass("d-none");
        $('#guardarEcografistaConfig').removeClass("d-none");
        $('#cancelarEcografistaConfig').removeClass("d-none");
        $('#ecografistaConfig .formulario').removeClass("d-none");
    });

    $('#cancelarEcografistaConfig').on('click', function() {
        $("#ecografistaConfig .tabla").removeClass("d-none");
        $('#nuevoEcografistaConfig').removeClass("d-none");
        $('#guardarEcografistaConfig').addClass("d-none");
        $('#cancelarEcografistaConfig').addClass("d-none");
        $("#ecografistaConfig .formulario").addClass("d-none");
    });

    $('#guardarEcografistaConfig').on('click', function() {
        saveEcografistaExamenLocalStorage();
        $("#ecografistaConfig .tabla").removeClass("d-none");
        $('#nuevoEcografistaConfig').removeClass("d-none");
        $('#guardarEcografistaConfig').addClass("d-none");
        $('#cancelarEcografistaConfig').addClass("d-none");
        $("#ecografistaConfig .formulario").addClass("d-none");
    });

    $('#eliminarEcografistaConfig').on('click', function() {
        var getElement = false;
        var contador = 0
        $.each($('#EcografistaConfigTable').children(), function(i, val) {
            if ($(val).hasClass('table-active') == true) {
                getElement = true;
                var nombre = $(val).children('td').html();
                var configuracion = JSON.parse(localStorage["configuracion"]);

                //construir un nuevo array de objetos
                var profesional = [];
                $.each(configuracion.profesional, function(i, item) {
                    if (item.nombre != nombre) {
                        var aRR = {id: 0, nombre: "Doe"};
                        aRR["id"] = contador + 1;
                        aRR["nombre"] = item.nombre;

                        profesional.push(aRR);
                        contador++;
                    }
                });

                configuracion.profesional = profesional;
                localStorage["configuracion"] = JSON.stringify(configuracion);

                if (profesional.length == 0){
                    $('#eliminarEcografistaConfig').addClass("d-none");
                }
            }
        });

        if (getElement == false) {
            window.alert("haga click sobre un elemento para eliminar");
        } else {
            loadDatabase();
        }
    });

    $('#nuevoNacionalidadConfig').on('click', function() {
        $('#nacionalidadConfig .tabla').addClass("d-none");
        $('#nuevoNacionalidadConfig').addClass("d-none");
        $('#guardarNacionalidadConfig').removeClass("d-none");
        $('#cancelarNacionalidadConfig').removeClass("d-none");
        $('#nacionalidadConfig .formulario').removeClass("d-none");
    });

    $('#cancelarNacionalidadConfig').on('click', function() {
        $("#nacionalidadConfig .tabla").removeClass("d-none");
        $('#nuevoNacionalidadConfig').removeClass("d-none");
        $('#guardarNacionalidadConfig').addClass("d-none");
        $('#cancelarNacionalidadConfig').addClass("d-none");
        $("#nacionalidadConfig .formulario").addClass("d-none");
    });

    $('#guardarNacionalidadConfig').on('click', function() {
        saveNacionalidadConfigLocalStorage();
        $("#nacionalidadConfig .tabla").removeClass("d-none");
        $('#nuevoNacionalidadConfig').removeClass("d-none");
        $('#guardarNacionalidadConfig').addClass("d-none");
        $('#cancelarNacionalidadConfig').addClass("d-none");
        $("#nacionalidadConfig .formulario").addClass("d-none");
    });

    $('#nuevoPatologiaObstetricaConfig').on('click', function() {
        $('#patologiaObstetricaConfig .tabla').addClass("d-none");
        $('#nuevoPatologiaObstetricaConfig').addClass("d-none");
        $('#guardarPatologiaObstetricaConfig').removeClass("d-none");
        $('#cancelarPatologiaObstetricaConfig').removeClass("d-none");
        $('#patologiaObstetricaConfig .formulario').removeClass("d-none");
    });

    $('#cancelarPatologiaObstetricaConfig').on('click', function() {
        $("#patologiaObstetricaConfig .tabla").removeClass("d-none");
        $('#nuevoPatologiaObstetricaConfig').removeClass("d-none");
        $('#guardarPatologiaObstetricaConfig').addClass("d-none");
        $('#cancelarPatologiaObstetricaConfig').addClass("d-none");
        $("#patologiaObstetricaConfig .formulario").addClass("d-none");
    });

    $('#guardarPatologiaObstetricaConfig').on('click', function() {
        savePatologiaObstetricaExamenLocalStorage();
        $("#patologiaObstetricaConfig .tabla").removeClass("d-none");
        $('#nuevoPatologiaObstetricaConfig').removeClass("d-none");
        $('#guardarPatologiaObstetricaConfig').addClass("d-none");
        $('#cancelarPatologiaObstetricaConfig').addClass("d-none");
        $("#patologiaObstetricaConfig .formulario").addClass("d-none");
    });

    $('#eliminarPatologiaObstetricaConfig').on('click', function() {
        var getElement = false;
        var contador = 0
        $.each($('#PatologiaObstetricaConfigTable').children(), function(i, val) {
            if ($(val).hasClass('table-active') == true) {
                getElement = true;
                var nombre = $(val).children('td').html();
                var configuracion = JSON.parse(localStorage["configuracion"]);

                //construir un nuevo array de objetos
                var PatologiaObstetrica = [];
                $.each(configuracion.PatologiaObstetrica, function(i, item) {
                    if (item.nombre != nombre) {
                        var aRR = {id: 0, nombre: "Doe"};
                        aRR["id"] = contador + 1;
                        aRR["nombre"] = item.nombre;

                        PatologiaObstetrica.push(aRR);
                        contador++;
                    }
                });

                configuracion.PatologiaObstetrica = PatologiaObstetrica;
                localStorage["configuracion"] = JSON.stringify(configuracion);
            }
        });

        if (getElement == false) {
            window.alert("haga click sobre un elemento para eliminar");
        } else {
            loadDatabase();
        }
	});

	$("#membrete").on("keydown", function(e){
		var keynum, lines = 1;
		// IE
		if(window.event) {
			keynum = e.keyCode;
		// Netscape/Firefox/Opera
		} else if(e.which) {
			keynum = e.which;
		}
		
		if(keynum == 13) {
			if(lines == document.getElementById("membrete").rows) {
				return false;
			}else{
				lines++;
			}
		}
	});

	$("#saveMebrete").on("click", function(event){
		event.preventDefault();
		var configuracion = JSON.parse(localStorage["configuracion"]);
		var membrete = $('#membrete').val();
		configuracion.membrete = membrete;
		
		localStorage["configuracion"] = JSON.stringify(configuracion);
    });
    

    $('#nuevoCorreoConfig').on('click', function() {
        $('#correosConfig .tabla').addClass("d-none");
        $('#nuevoCorreoConfig').addClass("d-none");
        $('#guardarCorreoConfig').removeClass("d-none");
        $('#cancelarCorreoConfig').removeClass("d-none");
        $('#correosConfig .formulario').removeClass("d-none");
    });

    $('#cancelarCorreoConfig').on('click', function() {
        $("#correosConfig .tabla").removeClass("d-none");
        $('#nuevoCorreoConfig').removeClass("d-none");
        $('#guardarCorreoConfig').addClass("d-none");
        $('#cancelarCorreoConfig').addClass("d-none");
        $("#correosConfig .formulario").addClass("d-none");
    });

    $('#guardarCorreoConfig').on('click', function() {
        saveCorreoConfigLocalStorage();
        $("#correosConfig .tabla").removeClass("d-none");
        $('#nuevoCorreoConfig').removeClass("d-none");
        $('#guardarCorreoConfig').addClass("d-none");
        $('#cancelarCorreoConfig').addClass("d-none");
        $("#correosConfig .formulario").addClass("d-none");
    });

    $('#eliminarCorreoConfig').on('click', function() {
        var getElement = false;
        var contador = 0
        $.each($('#CorreoConfigTable').children(), function(i, val) {
            if ($(val).hasClass('table-active') == true) {
                getElement = true;
                var nombre = $(val).children('td').html();
                var configuracion = JSON.parse(localStorage["configuracion"]);

                //construir un nuevo array de objetos
                var correos = [];
                $.each(configuracion.correos, function(i, item) {
                    if (item.nombre != nombre) {
                        var aRR = {id: 0, nombre: "Doe"};
                        aRR["id"] = contador + 1;
                        aRR["nombre"] = item.nombre;

                        correos.push(aRR);
                        contador++;
                    }
                });

                configuracion.correos = correos;
                localStorage["configuracion"] = JSON.stringify(configuracion);
            }
        });

        if (getElement == false) {
            window.alert("haga click sobre un elemento para eliminar");
        } else {
            loadDatabase();
        }
	});
});