var config = JSON.parse('{"name": "configuración", "backurl": "#volver", "backend": "", "localstorage": true, "usehash": true, "config": [{"name": "Membrete unidad ecográfica", "data": "membrete", "desc": "", "input": [{"name": "", "type": "textarea", "row": 3, "limit": 40, "help": ""}], "table": false, "open": true},{"name": "Ciudad de procedencia", "data": "nacionalidad", "desc": "", "input": [{"name": "Nombre de la ciudad", "type": "text", "limit": 40, "help": ""}], "table": true, "open": false},{"name": "Lugar de control", "data": "lcontrol", "desc": "", "input": [{"name": "Lugar de control", "type": "text", "limit": 40, "help": ""}], "table": true, "open": false},{"name": "Motivo exámen", "data": "MotivoExamen", "desc": "", "input": [{"name": "Nombre del motivo", "type": "text", "limit": 40, "help": ""}], "table": true, "open": false},{"name": "Patología obstétrica", "data": "PatologiaObstetrica", "desc": "", "input": [{"name": "Nombre de la patología", "type": "text", "limit": 40, "help": ""}], "table": true, "open": false},{"name": "Profesional examinador", "data": "profesional", "desc": "", "input": [{"name": "Nombre profesional", "type": "text", "limit": 40, "help": ""}], "table": true, "open": false},{"name": "Profesional referente", "data": "correos", "desc": "", "input": [{"name": "Nombre", "type": "text", "limit": 40, "help": ""},{"name": "Teléfono", "type": "text", "limit": 40, "help": ""},{"name": "Profesión", "type": "text", "limit": 40, "help": ""},{"name": "Ciudad", "type": "text", "limit": 40, "help": ""},{"name": "E-Mail", "type": "email", "limit": 40, "help": ""}], "table": true, "open": false},{"name": "Activación de licencia", "data": "activacion", "desc": "", "input": [], "table": false, "open": false}]}');

function createTabs(config){
    var navID = uuidv4();
    var capsuleHeader = '<div class="row">';
    var capsuleFooter = '</div>';
    var navHeader = '<div class="col-12 col-lg-3 border-right"><div class="nav flex-column nav-pills" id="'+navID+'" role="tablist" aria-orientation="vertical">';
    var navFooter = '</div></div>';
    var tabHeader = '<div class="col-12 col-lg-9"><div class="tab-content">';
    var tabFooter = '</div></div>';

    var resultado = "";
    
    resultado += capsuleHeader;
    resultado += navHeader;
    for (var z = 0; z < config.config.length; z++){
        let id = uuidv4();
        let tab = uuidv4();

        resultado += '<a class="nav-link" id="'+id+'" data-toggle="pill" href="#'+tab+'" role="tab" aria-controls="'+tab+'" aria-selected="true">'+config.config[z].name+'</a>';
    
        config.config[z].id = id;
        config.config[z].tab = tab;
    }
    resultado += navFooter;

    resultado += tabHeader;
    for (var z = 0; z < config.config.length; z++){
        resultado += '<div class="tab-pane fade" id="'+config.config[z].tab+'" role="tabpanel" aria-labelledby="'+config.config[z].id+'"><h4 class="mb-3">'+config.config[z].name+'</h4></div>';
    }
    resultado += tabFooter;
    resultado += capsuleFooter;

    elemento = {
        nav: navID,
        resultado : resultado
    }

    return elemento;
}

function createInputs(config){
    for (var z = 0; z < config.config.length; z++){
        if (config.config[z].input.length > 0){
            let accordion = uuidv4();
            let collapse = uuidv4();
            let title = uuidv4();
            let saveBtn = uuidv4();
            let elemento = ""
            var inputs = ""
    
            elemento = '<div class="accordion" id="'+accordion+'"><div class="card shadow mb-3"><div class="card-header bg-verde text-white" id="'+title+'"><h6 class="mb-0" data-toggle="collapse" data-target="#'+collapse+'" aria-expanded="true" aria-controls="'+collapse+'">Nuevo '+config.config[z].name+'</h6></div><div id="'+collapse+'" class="collapse '
            if (config.config[z].open == true){
                elemento += 'show'
            }

            elemento += '" aria-labelledby="'+title+'" data-parent="#'+accordion+'"><div class="card-body">'
    
            for (var y = 0; y < config.config[z].input.length; y++){
                let id = uuidv4();
                let aria = uuidv4();
    
                inputs += '<div class="form-group"><label for="'+id+'">'+config.config[z].input[y].name+'</label>'
    
                if (config.config[z].input[y].type == "textarea"){
                    inputs += '<textarea class="form-control" rows="'+config.config[z].input[y].row+'" id="'+id+'"'
                }else{
                    inputs += '<input type="'+config.config[z].input[y].name+'" class="form-control" id="'+id+'"'
                }
    
                //aria
                if (config.config[z].input[y].help != ""){
                    inputs += 'aria-describedby="'+aria+'"'
                }
    
                if (config.config[z].input[y].type == "textarea"){
                    inputs += '></textarea>'
                }else{
                    inputs += '>'
                }
    
                //aria
                if (config.config[z].input[y].help != ""){
                    inputs += '<small id="'+aria+'" class="form-text text-muted">'+config.config[z].input[y].help+'</small>'
                }
        
                inputs += '</div>'
                config.config[z].input[y].id = id;
                config.config[z].input[y].aria = aria;
            }
    
            inputs += '<button class="btn btn-outline-info" type="button" id="'+saveBtn+'" data-id="'+z+'">Guardar</button>'
            config.config[z].save = saveBtn
            elemento += inputs + '</div></div></div></div>'
    
            the(config.config[z].tab).insertAdjacentHTML("beforeend",elemento)
    
            the(saveBtn).onclick = guardar;
        }
    }
}

function createTable(config){
    for (var z = 0; z < config.config.length; z++){
        if (config.config[z].table == true){
            let elemento = ""
            let tableid = uuidv4();

            elemento = '<table class="table table-hover"><thead class="thead-dark"><tr>'
    
            for (var y = 0; y < config.config[z].input.length; y++){
                elemento += '<th scope="col">'+config.config[z].input[y].name+'</th>'
            }
    
            elemento += '</tr></thead><tbody id="'+tableid+'">'
            config.config[z].tableid = tableid
            elemento += '</tbody></table>';
            the(config.config[z].tab).insertAdjacentHTML("beforeend",elemento)
        }
    }
}

function guardar(){
    let z = this.dataset.id;
    
    //tratar los datos de forma diferente según la configuración
    //hay que guardar algunos como array y otros como cadena
    if (window.localStorage) {
        if (localStorage.configuracion != null) {
            var configuracion = JSON.parse(localStorage["configuracion"]);
            let name = config.config[z].data

            //verificar si el dato se va a guardar en un array o en una cadena
            if (Array.isArray(configuracion[name]) == true){
                let data = []
                
                for (var y = 0; y < config.config[z].input.length; y++){
                    let id = config.config[z].input[y].id
                    data.push(document.getElementById(id).value);
                    document.getElementById(id).value = ""
                }

                configuracion[name].push(data)
            }else{
                let id = config.config[z].input[0].id
                let data = document.getElementById(id).value

                configuracion[name] = data
            }


            localStorage["configuracion"] = JSON.stringify(configuracion);

            loadTabla(config)
            loadDatabase()
        }
    }
}

function loadTabla(config){
    for (var z = 0; z < config.config.length; z++){
        if (config.config[z].table == true){
            if (window.localStorage) {
                if (localStorage.configuracion != null) {
                    var configuracion = JSON.parse(localStorage["configuracion"]);
                    let name = config.config[z].data

                    the(config.config[z].tableid).innerHTML = "";

                    $.each(configuracion[name], function(i, item) {
                        var fila = '<tr data-id="'+i+'" data-config="'+z+'" class="modal-edit">';
                        $.each(item, function(i, column) {
                            fila += '<td>' + column + '</td>';
                        })
                        fila += '</tr>';
                        $('#'+config.config[z].tableid).append(fila);
                    });
                }
            }
        }
    }

    $(".modal-edit").off("click", modal_edit)
    $(".modal-edit").on("click", modal_edit)
}

function modal_edit(){
    let modal = makeModal("Guardar")

    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
    the(modal.titulo).innerHTML = "Modificar Item";
    the(modal.titulo).classList.add("mx-auto");
    the(modal.titulo).parentElement.classList.add("bg-success", "text-white");

    let z = this.dataset.config
    let id = this.dataset.id
    var configuracion = JSON.parse(localStorage["configuracion"]);
    let data = configuracion[config.config[z].data][id]

    let _contenido = ''
    let inputs = []

    for (var y = 0; y < config.config[z].input.length; y++){
        let id = uuidv4();
        let aria = uuidv4();

        _contenido += '<div class="form-group"><label for="'+id+'">'+config.config[z].input[y].name+'</label>'

        if (config.config[z].input[y].type == "textarea"){
            _contenido += '<textarea class="form-control" row="'+config.config[z].input[y].row+'" id="'+id+'"'
        }else{
            _contenido += '<input type="'+config.config[z].input[y].name+'" class="form-control" id="'+id+'" value="'+ data[y]+'"'
        }

        //aria
        if (config.config[z].input[y].help != ""){
            _contenido += 'aria-describedby="'+aria+'"'
        }

        if (config.config[z].input[y].type == "textarea"){
            _contenido += '>'+data[y]+'</textarea>'
        }else{
            _contenido += '>'
        }

        //aria
        if (config.config[z].input[y].help != ""){
            _contenido += '<small id="'+aria+'" class="form-text text-muted">'+config.config[z].input[y].help+'</small>'
        }

        _contenido += '</div>'
        inputs.push(id)
    }

    _btn_delete = uuidv4()
    _contenido += '<button class="btn btn-outline-danger" data-id="'+id+'" data-config="'+z+'" id="'+_btn_delete+'">Eliminar</button>'

    the(modal.contenido).innerHTML = _contenido;
    the(modal.id).children[0].classList.remove("modal-lg");

    $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
    the(_btn_delete).dataset.modal = modal.id
    $("#"+_btn_delete).on("click", preDelete_item)

    the(modal.button).dataset.id = id
    the(modal.button).dataset.config = z
    the(modal.button).dataset.inputs = inputs
    $("#"+modal.button).on("click", function(){
        let z = this.dataset.config
        let id = this.dataset.id
    
        var configuracion = JSON.parse(localStorage["configuracion"]);
        let data = configuracion[config.config[z].data][id]

        for (var y = 0; y < inputs.length; y++){
            data[y] = the(inputs[y]).value
        }

        configuracion[config.config[z].data][id] = data
    
        localStorage["configuracion"] = JSON.stringify(configuracion);
    
        $("#"+this.dataset.modal).modal("hide")
        loadTabla(config)
    })
}

function preDelete_item(){
    let z = this.dataset.config
    let id = this.dataset.id

    let modal = makeModal("Eliminar")

    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
    the(modal.titulo).innerHTML = "Eliminar Item";
    the(modal.titulo).classList.add("mx-auto");
    the(modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    the(modal.contenido).innerHTML = "<p>Está seguro de eliminar el ítem</p>";
    the(modal.id).children[0].classList.remove("modal-lg");

    $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
    the(modal.button).dataset.config = z
    the(modal.button).dataset.id = id
    the(modal.button).dataset.parent = this.dataset.modal
    $("#"+modal.button).on("click", delete_item)
}

function delete_item(){
    let z = this.dataset.config
    let id = this.dataset.id

    var configuracion = JSON.parse(localStorage["configuracion"]);
    let data = configuracion[config.config[z].data]

    data.splice(id, 1);
    configuracion[config.config[z].data] = data
    localStorage["configuracion"] = JSON.stringify(configuracion);

    $("#"+this.dataset.parent).modal("hide")
    $("#"+this.dataset.modal).modal("hide")
    loadTabla(config)
}

function haveDatabase() {
    if (localStorage.configuracion != null) {
        return true;
    }
    return false;
}

function checkIntegrity() {

    configuracion = localStorage["configuracion"];
    if (configuracion){
        let db = JSON.parse(localStorage["configuracion"]);

        let tables = ['nacionalidad', 'MotivoExamen', 'profesional', 'PatologiaObstetrica', 'membrete', 'correos', 'licencia', 'lcontrol', "id", "email"];
    
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
    
}

function makeDatabase() {
    var db = JSON.parse('{\"nacionalidad\":[],\"MotivoExamen\":[],\"profesional\":[],\"PatologiaObstetrica\":[],\"membrete\":\"PROTOCOLO ULTRASONOGR\u00C1FICO\\nUNIDAD DE URGENCIA\\nGINECO \/ OBSTETRA\",\"correos\":[],\"licencia\":\"\",\"lcontrol\":[],\"id\":0,\"email\":\"\"}');
    localStorage["configuracion"] = JSON.stringify(db);
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

    $('#ecografista').empty();
    if (configuracion.profesional.length > 0) {
        $.each(configuracion.profesional, function(i, item) {
            $('#ecografista').append('<option value="'+(i+1)+'">'+item+'</option>');
        });
    }

    $('#motivo-examen').empty();
    if (configuracion.MotivoExamen.length > 0) {
        $.each(configuracion.MotivoExamen, function(i, item) {
            $('#motivo-examen').append('<option value="'+(i+1)+'">'+item+'</option>');
        });
    }

    $('#lcontrolpaciente').empty();
    if (configuracion.lcontrol.length > 0) {
        $.each(configuracion.lcontrol, function(i, item) {
            $('#lcontrolpaciente').append('<option value="'+(i+1)+'">'+item+'</option>');
        });
    }

    $('#nacionalidad').empty();
    $('#ciudadpaciente').empty();
    if (configuracion.nacionalidad.length > 0) {
        $.each(configuracion.nacionalidad, function(i, item) {
            $('#nacionalidad').append('<option value="'+(i+1)+'">'+item+'</option>');
            $('#ciudadpaciente').append('<option value="'+(i+1)+'">'+item+'</option>');
        });
    }

    $('#patologiaObstetricaUno').empty();
    if (configuracion.PatologiaObstetrica.length > 0) {
        $.each(configuracion.PatologiaObstetrica, function(i, item) {
            $('#patologiaObstetricaUno').append('<option value="'+(i+1)+'">'+item+'</option>');
        });
    }

    //profesional referente
    $('#profref').empty();
    if (configuracion.correos.length > 0) {
        $.each(configuracion.correos, function(i, item) {
            $('#profref').append('<option value="'+(i+1)+'">'+item[0]+'</option>');
        });
    }

    $('#profref').off("change", loadTelefono)
    $('#profref').on("change", loadTelefono)
    $('#profref').trigger("change")


    //membrete
    $("#"+config.config[0].input[0].id).val(configuracion.membrete);
    $("#correo\\.configuracion").val(configuracion.email);

    if (configuracion.licencia == "medicina"){
        the("licencia").parentElement.classList.add("active");
        the("licencia.no").parentElement.classList.remove("active");
        the("mensaje.licencia").innerHTML =  "Licencia activada";
    } else {
        the("mensaje.licencia").innerHTML =  "Licencia desactivada";
    }
}

//manejadore de botones
$(document).ready(function() {
    let tab =  createTabs(config);

    the("lastab").innerHTML = tab.resultado;
    $("#" + tab.navID).tab()
    $("#" + config.config[0].id).tab('show')
    createInputs(config)
    createTable(config)

    //funciones adicionales
    //funcion para el membrete
	$("#"+config.config[0].input[0].id).on("keydown", function(e){
		var keynum, lines = 1;
		// IE
		if(window.event) {
			keynum = e.keyCode;
		// Netscape/Firefox/Opera
		} else if(e.which) {
			keynum = e.which;
		}

		if(keynum == 13) {
			if(lines == this.rows) {
				return false;
			}else{
				lines++;
			}
		}
    });

    //activar
    let largo = config.config.length
    largo = largo -1

    activacion = '<div class="form-group row"><label class="col-sm-4 col-form-label">Activar envío informes por E-Mail</label><div class="col-sm-2"><div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-secondary active" id="licencia.no.button"><input type="radio" name="check.licencia" id="licencia.no" value="" checked="checked"> No</label><label class="btn btn-secondary ml-2" id="licencia.button"><input type="radio" name="check.licencia" id="licencia" value="medicina"> Si</label></div></div><div class="col-12 col-lg-6"><p id="mensaje.licencia" class="text-primary">Licencia activada</p></div></div><div class="form-group row d-none" id="backup"><label class="col-4 col-form-label">Ingresar E-Mail para configuración personal: </label><div class="col-4"><input type="email" id="correo.configuracion" class="form-control"></div><div class="col-4"><button type="button" class="btn btn-secondary" id="correo.configuracion.guardar">Guardar</button><button type="button" class="btn btn-secondary" id="correo.configuracion.cargar">Restaurar configuración</button></div><div class="col-12"><p class="text-primary mt-2"><small><em>Para activar esta función debe utilizar Google Chrome puede guardar informe del exámen (PDF) en Google Drive, previamente haber creado cuenta personal.</em></small></p></div></div>'

    the(config.config[largo].tab).insertAdjacentHTML("beforeend",activacion)

	$("#licencia\\.button").on("click", function(){
        if (window.localStorage) {
            if (localStorage.configuracion != null) {
                var configuracion = JSON.parse(localStorage["configuracion"]);
                var licencia = "medicina";
                configuracion.licencia = licencia;
                    
                localStorage["configuracion"] = JSON.stringify(configuracion);
                the("mensaje.licencia").innerHTML =  "Licencia activada";
                the("backup").classList.remove("d-none");
            }
        }
    });

    $("#licencia\\.no\\.button").on("click", function(){
        if (window.localStorage) {
            if (localStorage.configuracion != null) {
                var configuracion = JSON.parse(localStorage["configuracion"]);
                var licencia = "x";
                configuracion.licencia = licencia;
                localStorage["configuracion"] = JSON.stringify(configuracion);
                the("mensaje.licencia").innerHTML =  "Licencia desactivada";
                the("backup").classList.add("d-none");
                the("correo.configuracion").value = "";
            }
        }
    });

    $("#correo\\.configuracion\\.cargar").on("click", function(){
        let email = the("correo.configuracion").value
        email = email.replace(/\s+/g, '');

        if (email.length == 0 ) {
            errorCorreo()
            return false;
        }

        if (validateEmail(email) == false) {
            errorCorreo()
            return false;
        }

        let modal = makeModal("Cargar datos")

        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerHTML = "Cargar datos desde el servidor";
        the(modal.titulo).classList.add("mx-auto");
        the(modal.titulo).parentElement.classList.add("bg-success", "text-white");
    
        let _contenido = '<p>La aplicación revisará en el servidor si hay configuraciones asociadas al correo escrito, y si encuentra configuraciones las cargará a esta computadora</p><h6>¿Continuar?</h6>'
    
        the(modal.contenido).innerHTML = _contenido;
        the(modal.id).children[0].classList.remove("modal-lg");
    
        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

        $('#'+modal.button).on("click", function(){

            let email = the("correo.configuracion").value
            email = email.replace(/\s+/g, '');

            let configuracion = new FormData()

            configuracion.append("config_name", email)

            fetch('https://api.crecimientofetal.cl/config', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
            .then(data => {
                var _conf = data.config_key;
                _conf.id = data.config_id;
                localStorage["configuracion"] = JSON.stringify(_conf);
                checkDatabase();
                loadTabla(config)
                loadDatabase();
                $('#'+modal.id).modal("hide")
            }).catch(function(error) {
                alert("error")
            });
        })
    })

    $("#correo\\.configuracion\\.guardar").on("click", function(){

        let email = the("correo.configuracion").value
        email = email.replace(/\s+/g, '');

        if (email.length == 0 ) {
            errorCorreo()
            return false;
        }

        if (validateEmail(email) == false) {
            errorCorreo()
            return false;
        }

        let modal = makeModal("Guardar datos")

        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerHTML = "Guardar datos en servidor";
        the(modal.titulo).classList.add("mx-auto");
        the(modal.titulo).parentElement.classList.add("bg-success", "text-white");
    
        let _contenido = '<p>La aplicación guardará en el servidor las configuraciones actuales y quedaran asociadas al correo escrito, si ya guardó anteriormente información, los datos serán sobrescritos</p><h6>¿Continuar?</h6>'
    
        the(modal.contenido).innerHTML = _contenido;
        the(modal.id).children[0].classList.remove("modal-lg");
    
        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

        $('#'+modal.button).on("click", function(){

            var _conf = JSON.parse(localStorage["configuracion"]);
            let email = the("correo.configuracion").value
            email = email.replace(/\s+/g, '');

            _conf.email = email
            let configuracion = new FormData()

            configuracion.append("config_id",_conf.id)
            configuracion.append("config_name", _conf.email)
            configuracion.append("config_key", JSON.stringify(_conf))

            localStorage["configuracion"] = JSON.stringify(_conf);

            fetch('https://api.crecimientofetal.cl/config/create', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
            .then(data => {
                var _conf = JSON.parse(localStorage["configuracion"]);
                _conf.id = data.config_id;
                localStorage["configuracion"] = JSON.stringify(_conf);
                $('#'+modal.id).modal("hide")
            }).catch(function(error) {
                alert("error")
            });
        })

    })

    if (storageAvailable('localStorage')) {
        checkDatabase();
        loadTabla(config)
        loadDatabase();
    }

    var h = document.createElement("p")
    var s = document.createElement("strong")
    var t = document.createTextNode("Datos opcionales");
    s.appendChild(t)
    h.appendChild(s)
    h.classList.add("mt-2", "mb-1")

    let tabs = the(tab.nav);
    tabs.insertBefore(h, tabs.childNodes[tabs.childNodes.length -1]);

});

function loadTelefono(){
    var configuracion = JSON.parse(localStorage["configuracion"]);
    var resultado = ""

    if (configuracion.correos.length > 0) {
        resultado = configuracion.correos[+this.value -1][1]
    }
    $('#profreftel').val(resultado)
}

function errorCorreo(){
    let modal = makeModal()

    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
    the(modal.titulo).innerHTML = "Error";
    the(modal.titulo).classList.add("mx-auto");
    the(modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    let _contenido = '<p>Escriba un email válido</p>'

    the(modal.contenido).innerHTML = _contenido;
    the(modal.id).children[0].classList.remove("modal-lg");

    $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}