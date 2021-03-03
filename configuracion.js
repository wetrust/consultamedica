import { the, make} from './wetrust.js'

//crea id random para los modales
function uuidv4() {
    //genera un uuid
    let uid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )

    // genera infinitamente uuid mientras no comience con una letra
    if (isNaN(uid.charAt(0))){
        return uid
    }else{
        return uuidv4()
    }
}

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
        }
}

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

    let elemento = {
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
    
            elemento = '<div class="accordion" id="'+accordion+'"><div class="card shadow mb-3"><div class="card-header bg-verde text-white pointer" id="'+title+'"><h6 class="mb-0" data-toggle="collapse" data-target="#'+collapse+'" aria-expanded="true" aria-controls="'+collapse+'">Nuevo '+config.config[z].name+'</h6></div><div id="'+collapse+'" class="collapse '
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
                    inputs += '<input type="'+config.config[z].input[y].type+'" class="form-control" id="'+id+'"'
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

            this.parentElement.parentElement.classList.remove("show")



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
    let modal = make.modal("Guardar")

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
            _contenido += '<input type="'+config.config[z].input[y].type+'" class="form-control" id="'+id+'" value="'+ data[y]+'"'
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

    let modal = make.modal("Eliminar")

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
    let configuracion = localStorage["configuracion"];
    if (configuracion){
        let db = JSON.parse(localStorage["configuracion"]);

        let tables = ['nacionalidad', 'MotivoExamen', 'profesional', 'PatologiaObstetrica', 'membrete', 'correos', 'licencia', 'lcontrol', "id", "email", "centro"];
    
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
    var db = JSON.parse('{\"nacionalidad\":[],\"MotivoExamen\":[],\"profesional\":[],\"PatologiaObstetrica\":[],\"membrete\":\"PROTOCOLO ULTRASONOGR\u00C1FICO\\nUNIDAD DE URGENCIA\\nGINECO \/ OBSTETRICA\",\"correos\":[],\"licencia\":\"\",\"lcontrol\":[],\"id\":0,\"email\":\"\",\"centro\":[]}');
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
        the("mensaje.licencia").innerHTML =  "Envio activado";
    } else {
        the("mensaje.licencia").innerHTML =  "Envio desactivado";
    }

    //centro ecográfico
    $('#centroecograf').empty();
    if (configuracion.centro.length > 0) {
        $.each(configuracion.centro, function(i, item) {
            $('#centroecograf').append('<option value="'+(i+1)+'">'+item[0]+'</option>');
        });
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

    //guardar configuracion
    let largo = config.config.length
    largo = largo -4

    let guardar = ""
    let accordion = uuidv4();
    let collapse = uuidv4();
    let title = uuidv4();

    guardar += '<div class="accordion" id="'+accordion+'"><div class="card shadow mb-3"><div class="card-header bg-verde text-white pointer" id="'+title+'"><h6 class="mb-0" data-toggle="collapse" data-target="#'+collapse+'" aria-expanded="true" aria-controls="'+collapse+'">Guardar &#47; restaurar configuración</h6></div><div id="'+collapse+'" class="collapse show'
    guardar += '" aria-labelledby="'+title+'" data-parent="#'+accordion+'"><div class="card-body">'
    guardar += '<div class="form-group row"><label class="col-12">Ingresar E-Mail para configuración personal: </label><div class="col-4"><input type="email" id="correo.configuracion" class="form-control" /></div><div class="col"><button type="button" class="btn btn-secondary" id="correo.configuracion.guardar">Guardar</button><button type="button" class="btn btn-secondary" id="correo.configuracion.cargar">Restaurar configuración</button></div></div>'
    guardar += '</div></div></div></div>'
    guardar += '<ul class="mt-5"><li>Configuración de plataforma se guarda de forma temporal en su navegador, si desea guardar configuración de forma permanente escriba su email y presione el boton guardar.</li><li>Si desea restaurar configuración guardada anteriormente presione el botón restaurar.</li><li>Recuerde, si guardo una configuración y realiza nuevos cambios, debe guardar nuevamente.</li></ul>'

    the(config.config[largo].tab).insertAdjacentHTML("beforeend",guardar)

    //activar
    largo = config.config.length
    largo = largo -2

    let activacion = '<ol class="text-secondary"><li><em>Envío de  informes por EMail</em></li></ol>'
    accordion = uuidv4();
    collapse = uuidv4();
    title = uuidv4();

    activacion += '<div class="accordion" id="'+accordion+'"><div class="card shadow mb-3"><div class="card-header bg-verde text-white pointer" id="'+title+'"><h6 class="mb-0" data-toggle="collapse" data-target="#'+collapse+'" aria-expanded="true" aria-controls="'+collapse+'">1.- Envío de informes por E-Mail</h6></div><div id="'+collapse+'" class="collapse '
    activacion += '" aria-labelledby="'+title+'" data-parent="#'+accordion+'"><div class="card-body">'
    activacion += '<div class="form-group row"> <label class="col-12">Activar envío informes por E-Mail:</label> <div class="col-sm-2"> <div class="btn-group btn-group-toggle" data-toggle="buttons"> <label class="btn btn-secondary active" id="licencia.no.button"><input type="radio" name="check.licencia" id="licencia.no" value="" checked="checked"/> No</label> <label class="btn btn-secondary ml-2" id="licencia.button"><input type="radio" name="check.licencia" id="licencia" value="medicina"/> Si</label> </div></div><div class="col-12 col-lg-6"><p id="mensaje.licencia" class="text-primary">Licencia activada</p></div></div><p>Email de destinatario debe ser configurado previamente en profesional referente</p>'
    activacion += '</div></div></div></div>'
    activacion += '<p class="mt-5"><em>Como alternativa a "Envio de E-Mail personalizado", utilizando Google Chrome puede guardar informe directamente en Google Drive.</em></p>'

    the(config.config[largo].tab).insertAdjacentHTML("beforeend",activacion)

	$("#licencia\\.button").on("click", function(){
        if (window.localStorage) {
            if (localStorage.configuracion != null) {
                var configuracion = JSON.parse(localStorage["configuracion"]);
                var licencia = "medicina";
                configuracion.licencia = licencia;
                    
                localStorage["configuracion"] = JSON.stringify(configuracion);
                the("mensaje.licencia").innerHTML =  "Envío activado";
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
                the("mensaje.licencia").innerHTML =  "Envío desactivado";
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

        let modal = make.modal("Cargar datos")

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

        let modal = make.modal("Guardar datos")

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

    //agregar una brujeria para ocultar 2 opciones en base al criterio del doc
    var m = document.createElement("p")
    var o = document.createElement("em")

    var p = document.createTextNode("Opciones avanzadas");
    o.appendChild(p)
    p = document.createElement("br")
    o.appendChild(p)

    var q = document.createElement("small");

    p = document.createTextNode("(En construcción)");
    q.appendChild(p)

    p = document.createElement("a");
    let x = document.createTextNode(".");
    p.appendChild(x)
    p.id = "configOculto";
    q.appendChild(p)
    o.appendChild(q)
    m.appendChild(o)
    m.classList.add("mt-2", "mb-1")

    let tabs = the(tab.nav);
    tabs.insertBefore(m, tabs.childNodes[tabs.childNodes.length -3]);

    tabs.childNodes[tabs.childNodes.length-1].classList.add("d-none")
    tabs.childNodes[tabs.childNodes.length-2].classList.add("d-none")
    tabs.childNodes[tabs.childNodes.length-3].classList.add("d-none")

    the(config.config[config.config.length -1].tab).childNodes.forEach(elemento => elemento.classList.add("d-none"))
    m = document.createElement("h5")
    p = document.createElement("em")
    o = document.createTextNode("Modulo en construcción,opciones a desarrollar en un futuro proximo")
    p.appendChild(o)
    m.appendChild(p)
    tabs = the(config.config[config.config.length -1].tab);
    tabs.insertBefore(m, tabs.childNodes[tabs.childNodes.length]);

    the(config.config[config.config.length -2].tab).childNodes.forEach(elemento => elemento.classList.add("d-none"))
    m = document.createElement("h5")
    p = document.createElement("em")
    o = document.createTextNode("Modulo en construcción,opciones a desarrollar en un futuro proximo")
    p.appendChild(o)
    m.appendChild(p)
    tabs = the(config.config[config.config.length -2].tab);
    tabs.insertBefore(m, tabs.childNodes[tabs.childNodes.length]);


    the(config.config[config.config.length -3].tab).childNodes.forEach(elemento => elemento.classList.add("d-none"))
    m = document.createElement("h5")
    p = document.createElement("em")
    o = document.createTextNode("Modulo en construcción,opciones a desarrollar en un futuro proximo")
    p.appendChild(o)
    m.appendChild(p)
    tabs = the(config.config[config.config.length -3].tab);
    tabs.insertBefore(m, tabs.childNodes[tabs.childNodes.length]);

    $("#configOculto").on("click", function(){
        the(config.config[config.config.length -1].tab).childNodes.forEach(elemento => elemento.classList.remove("d-none"))
        tabs = the(config.config[config.config.length -1].tab);
        tabs.childNodes[tabs.childNodes.length-1].classList.add("d-none")

        the(config.config[config.config.length -2].tab).childNodes.forEach(elemento => elemento.classList.remove("d-none"))
        tabs = the(config.config[config.config.length -2].tab);
        tabs.childNodes[tabs.childNodes.length-1].classList.add("d-none")

        the(config.config[config.config.length -3].tab).childNodes.forEach(elemento => elemento.classList.remove("d-none"))
        tabs = the(config.config[config.config.length -3].tab);
        tabs.childNodes[tabs.childNodes.length-1].classList.add("d-none")

        the("profesionalOcultoConfig").classList.remove("d-none")

        tabs = the(tab.nav);
    
        tabs.childNodes[tabs.childNodes.length-1].classList.remove("d-none")
        tabs.childNodes[tabs.childNodes.length-2].classList.remove("d-none")
        tabs.childNodes[tabs.childNodes.length-3].classList.remove("d-none")
    })

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
    let modal = make.modal()

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