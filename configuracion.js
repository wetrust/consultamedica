function haveDatabase() {
    if (localStorage.configuracion != null) {
        return true;
    }
    return false;
}

function checkIntegrity() {
    let db = JSON.parse(localStorage["configuracion"]);

    let tables = ['nacionalidad', 'MotivoExamen', 'profesional', 'PatologiaObstetrica', 'membrete'];
    let baseTables = JSON.parse('{"nacionalidad":[],"MotivoExamen":[],"profesional":[],"PatologiaObstetrica":[],"membrete":""}');

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
    var db = '{"nacionalidad": [], "MotivoExamen":[],"profesional":[],"PatologiaObstetrica":[],"membrete":""}';
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
        $('#eliminarMotivoConfig').css("display", "block");
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
        $('#eliminarEcografistaConfig').css("display", "block");
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
        $('#eliminarNacionalidadConfig').css("display", "block");
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
        $('#eliminarPatologiaObstetricaConfig').css("display", "block");
        $('#PatologiaObstetricaConfigTable tr').on('click', function() {
            activateTr(this);
        });
    }
    $("#membrete").val(configuracion.membrete);
}

function saveMotivoExamenLocalStorage() {

    if (window.localStorage) {
        if (localStorage.configuracion != null) {
            var configuracion = JSON.parse(localStorage["configuracion"]);

            $('#motivo-examen').html("");
            $('#MotivoConfigTable').html("");

            var aRR = {
                id: 0,
                nombre: "Doe"
            };
            aRR["id"] = configuracion.MotivoExamen.length + 1;
            aRR["nombre"] = $('#motivoInput').val();

            configuracion.MotivoExamen.push(aRR);
            $('#eliminarMotivoConfig').css("display", "block");
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

            var aRR = {
                id: 0,
                nombre: "Doe"
            };
            aRR["id"] = configuracion.profesional.length + 1;
            aRR["nombre"] = $('#ecografistaInput').val();

            configuracion.profesional.push(aRR);
            $('#eliminarEcografistaConfig').css("display", "block");
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

            var aRR = {
                id: 0,
                nombre: "Doe"
            };
            aRR["id"] = configuracion.nacionalidad.length + 1;
            aRR["nombre"] = $('#nacionalidadInput').val();

            configuracion.nacionalidad.push(aRR);
            $('#eliminarNacionalidadConfig').css("display", "block");
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

            var aRR = {
                id: 0,
                nombre: "Doe"
            };
            aRR["id"] = configuracion.PatologiaObstetrica.length + 1;
            aRR["nombre"] = $('#PatologiaObstetricaInput').val();

            configuracion.PatologiaObstetrica.push(aRR);
            $('#eliminarPatologiaObstetricaConfig').css("display", "block");
            $('#PatologiaObstetricaInput').val("");
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
        $('#motivoConfig .tabla').hide();
        $('#nuevoMotivoConfig').hide();
        $('#editarMotivoConfig').hide();
        $('#guardarMotivoConfig').show();
        $('#cancelarMotivoConfig').show();
        $('#motivoConfig .formulario').show();
    });

    $('#guardarMotivoConfig').on('click', function() {
        saveMotivoExamenLocalStorage();
        $("#motivoConfig .tabla").show();
        $('#nuevoMotivoConfig').show();
        $('#guardarMotivoConfig').hide();
        $('#cancelarMotivoConfig').hide();
        $("#motivoConfig .formulario").hide();
    });

    $('#cancelarMotivoConfig').on('click', function() {
        $("#motivoConfig .tabla").show();
        $('#nuevoMotivoConfig').show();
        $('#editarMotivoConfig').show();
        $('#guardarMotivoConfig').hide();
        $('#cancelarMotivoConfig').hide();
        $("#motivoConfig .formulario").hide();
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
                        var aRR = {
                            id: 0,
                            nombre: "Doe"
                        };
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
        $('#ecografistaConfig .tabla').hide();
        $('#nuevoEcografistaConfig').hide();
        $('#editarEcografistaConfig').hide();
        $('#guardarEcografistaConfig').show();
        $('#cancelarEcografistaConfig').show();
        $('#ecografistaConfig .formulario').show();
    });

    $('#cancelarEcografistaConfig').on('click', function() {
        $("#ecografistaConfig .tabla").show();
        $('#nuevoEcografistaConfig').show();
        $('#editarEcografistaConfig').show();
        $('#guardarEcografistaConfig').hide();
        $('#cancelarEcografistaConfig').hide();
        $("#ecografistaConfig .formulario").hide();
    });

    $('#guardarEcografistaConfig').on('click', function() {
        saveEcografistaExamenLocalStorage();
        $("#ecografistaConfig .tabla").show();
        $('#nuevoEcografistaConfig').show();
        $('#guardarEcografistaConfig').hide();
        $('#cancelarEcografistaConfig').hide();
        $("#ecografistaConfig .formulario").hide();
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
                        var aRR = {
                            id: 0,
                            nombre: "Doe"
                        };
                        aRR["id"] = contador + 1;
                        aRR["nombre"] = item.nombre;

                        profesional.push(aRR);
                        contador++;
                    }
                });

                configuracion.profesional = profesional;
                localStorage["configuracion"] = JSON.stringify(configuracion);
            }
        });

        if (getElement == false) {
            window.alert("haga click sobre un elemento para eliminar");
        } else {
            loadDatabase();
        }
    });

    $('#nuevoNacionalidadConfig').on('click', function() {
        $('#nacionalidadConfig .tabla').hide();
        $('#nuevoNacionalidadConfig').hide();
        $('#editarNacionalidadConfig').hide();
        $('#guardarNacionalidadConfig').show();
        $('#cancelarNacionalidadConfig').show();
        $('#nacionalidadConfig .formulario').show();
    });

    $('#cancelarNacionalidadConfig').on('click', function() {
        $("#nacionalidadConfig .tabla").show();
        $('#nuevoNacionalidadConfig').show();
        $('#editarNacionalidadConfig').show();
        $('#guardarNacionalidadConfig').hide();
        $('#cancelarNacionalidadConfig').hide();
        $("#nacionalidadConfig .formulario").hide();
    });

    $('#guardarNacionalidadConfig').on('click', function() {
        saveNacionalidadConfigLocalStorage();
        $("#nacionalidadConfig .tabla").show();
        $('#nuevoNacionalidadConfig').show();
        $('#guardarNacionalidadConfig').hide();
        $('#cancelarNacionalidadConfig').hide();
        $("#nacionalidadConfig .formulario").hide();
    });

    $('#nuevoPatologiaObstetricaConfig').on('click', function() {
        $('#patologiaObstetricaConfig .tabla').hide();
        $('#nuevoPatologiaObstetricaConfig').hide();
        $('#editarPatologiaObstetricaConfig').hide();
        $('#guardarPatologiaObstetricaConfig').show();
        $('#cancelarPatologiaObstetricaConfig').show();
        $('#patologiaObstetricaConfig .formulario').show();
    });

    $('#cancelarPatologiaObstetricaConfig').on('click', function() {
        $("#patologiaObstetricaConfig .tabla").show();
        $('#nuevoPatologiaObstetricaConfig').show();
        $('#editarPatologiaObstetricaConfig').show();
        $('#guardarPatologiaObstetricaConfig').hide();
        $('#cancelarPatologiaObstetricaConfig').hide();
        $("#patologiaObstetricaConfig .formulario").hide();
    });

    $('#guardarPatologiaObstetricaConfig').on('click', function() {
        savePatologiaObstetricaExamenLocalStorage();
        $("#patologiaObstetricaConfig .tabla").show();
        $('#nuevoPatologiaObstetricaConfig').show();
        $('#guardarPatologiaObstetricaConfig').hide();
        $('#cancelarPatologiaObstetricaConfig').hide();
        $("#patologiaObstetricaConfig .formulario").hide();
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
                        var aRR = {
                            id: 0,
                            nombre: "Doe"
                        };
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
});