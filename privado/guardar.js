import { make, the } from './wetrust.js'

$(document).ready(function() {

    $("#btn\\.guardar\\.precoz").on("click", function(){
        let configuracion = new FormData()

        let profesional = the("ecografista").value
        let motivo = the("motivo-examen").options[the("motivo-examen").selectedIndex].text
        let patologia = the("patologiaObstetricaUno").options[the("patologiaObstetricaUno").selectedIndex].text

        let profRef = the("profref").options[the("profref").selectedIndex].text

        let centroecograf = the("centroecograf").options[the("centroecograf").selectedIndex].text

        let data = {
            'Nombre profesional referente': profRef,
            'Fono profesional referente': the("profreftel").value,
            'Centro Ecografico': centroecograf,
            'edadm' : document.getElementsByName("edad_materna")[0].value,
            'profesional' : profesional,
            'motivo' : motivo,
            'patologia' : patologia,
            'Fecha' : the("fee").value,
            'FUR' : the("fum").value,
            'LCN' : $("#lcn").val(),
            'EG Ajustada' : the("lcnPct").value,
            'FCF' : the("fcf-prim-dos").value,
            'saco vitelino' : the("saco-vitelino-mm").value,
            'Comentario' : the("comentarios-eco-uno").value,
        }

        if (basicDataValid() == false){
            return
        }

        configuracion.append("rut", the("id-paciente").value)
        configuracion.append("nombre", the("nombre-paciente").value)
        let ciudad = the("ciudadpaciente").options[the("ciudadpaciente").selectedIndex].text
        configuracion.append("ciudad", ciudad)
        configuracion.append("eg", the("semanas").value)
        let lugar = the("lcontrolpaciente").options[the("lcontrolpaciente").selectedIndex].text
        configuracion.append("lugar", lugar)
        configuracion.append("tipo", "Ecografía obstétrica precoz < 11 semanas")

        var _c = JSON.parse(localStorage["configuracion"]);

        configuracion.append("correo", _c.email)
        configuracion.append("data", JSON.stringify(data))

        fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
        .then(data => {
            if (data.success == true ){ alert("guardó") }
        }).catch(function(error) {
            alert("error")
        });
    })

    $("#btn\\.guardar\\.segtrim").on("click", function(){
        let configuracion = new FormData()

        let profesional = the("ecografista").value
        let motivo = the("motivo-examen").options[the("motivo-examen").selectedIndex].text
        let patologia = the("patologiaObstetricaUno").options[the("patologiaObstetricaUno").selectedIndex].text

        let profRef = the("profref").options[the("profref").selectedIndex].text
        let centroecograf = the("centroecograf").options[the("centroecograf").selectedIndex].text

        let data = {
            'Nombre profesional referente': profRef,
            'Fono profesional referente': the("profreftel").value,
            'Centro Ecografico': centroecograf,
            'edadm' : document.getElementsByName("edad_materna")[0].value,
            'profesional' : profesional,
            'motivo' : motivo,
            'patologia' : patologia,
            'fecha' : the("fee").value,
            'fur' : the("fum").value,
            'dbp' : the("dbp").value,
            'dbpde' : the("dbpDE").value,
            'dof' : the("dof").value,
            'dofpct' : the("dofPct").value,
            'cc' : the("cc").value,
            'ccpct' : the("ccPct").value,
            'ca' : the("ca").value,
            'capct' : the("caPct").value,
            'lf' : the("lf").value,
            'lfpct' : the("lfPct").value,
            'lh' : the("lh").value,
            'lhpct' : the("lhPct").value,
            'cerebelo' : the("cerebelo").value,
            'cerebelopct' : the("cerebeloPctRpt").value,
            'peso' : the("pfe").value,
            'pesopct' : the("pfePctRpt").value,
            'ccca' : the("ccca").value,
            'cccapct' : the("cccaPctVal").value,
            'placenta ubic' : the("ubicacion").value,
            'placenta ins' : the("incersion").value,
            'liquido' : the("liq-cualitativo-eco").value,
            'bvm' : the("bvmEcoDos").value,
            'Uterinas Prom': the('respuesta_uterina_promedio').value,
            'Uterinas Prom Pct': the('respuesta_uterina_promedio_percentil').textContent,
            'Largo cervical': the('largo.cervical.segundo').value,
            'Comentario' : the("comentarios-eco-dos-inf-dos").value,
        }

        if (basicDataValid() == false){
            return
        }

        configuracion.append("rut", the("id-paciente").value)
        configuracion.append("nombre", the("nombre-paciente").value)
        let ciudad = the("ciudadpaciente").options[the("ciudadpaciente").selectedIndex].text
        configuracion.append("ciudad", ciudad)
        configuracion.append("eg", the("semanas").value)
        let lugar = the("lcontrolpaciente").options[the("lcontrolpaciente").selectedIndex].text
        configuracion.append("lugar", lugar)
        configuracion.append("tipo", "Evaluación del crecimiento fetal")
        var _c = JSON.parse(localStorage["configuracion"]);

        configuracion.append("correo", _c.email)
        configuracion.append("data", JSON.stringify(data))

        fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
        .then(data => {
            if (data.success == true ){
                alert("guardó")
            }
        }).catch(function(error) { alert("error") });
    })

    $("#btn\\.guardar\\.doppler").on("click", function(){
        let configuracion = new FormData()

        let profesional = the("ecografista").value
        let motivo = the("motivo-examen").options[the("motivo-examen").selectedIndex].text
        let patologia = the("patologiaObstetricaUno").options[the("patologiaObstetricaUno").selectedIndex].text

        let profRef = the("profref").options[the("profref").selectedIndex].text
        let centroecograf = the("centroecograf").options[the("centroecograf").selectedIndex].text

        let data = {
            'Nombre profesional referente': profRef,
            'Fono profesional referente': the("profreftel").value,
            'Centro Ecografico': centroecograf,
            'edadm' : document.getElementsByName("edad_materna")[0].value,
            'profesional' : profesional,
            'motivo' : motivo,
            'patologia' : patologia,
            'fecha' : the("fee").value,
            'fur' : the("fum").value,
            'fcf' : the("fcf-prim").value,
            'ut derecha' : the("aud").value,
            'ut derecha pct' : the("audPct").value,
            'ut izquierda' : the("aui").value,
            'ut izquierda pct' : the("auiPct").value,
            'ut promedio' : the("auprom").value,
            'ut promedio pct' : the("auPct").value,
            'ut umbilical' : the("ipau").value,
            'ut umbilical pct' : the("ipauPct").value,
            'utcmedia' : the("ipacm").value,
            'utcmedia pct' : the("ipacmPct").value,
            'couciente' : the("ccp").value,
            'couciente pct' : the("ccpPct").value,
            'Ductus Venoso' : the("dv").value,
            'Ductus Venoso pct' : the("dvPct").value,
            'Comentario' : the("comentarios-doppler").value,
        }

        if (basicDataValid() == false){
            return
        }

        configuracion.append("rut", the("id-paciente").value)
        configuracion.append("nombre", the("nombre-paciente").value)
        let ciudad = the("ciudadpaciente").options[the("ciudadpaciente").selectedIndex].text
        configuracion.append("ciudad", ciudad)
        configuracion.append("eg", the("semanas").value)
        let lugar = the("lcontrolpaciente").options[the("lcontrolpaciente").selectedIndex].text
        configuracion.append("lugar", lugar)
        configuracion.append("tipo", "Flujometría Doppler materno / fetal")
        var _c = JSON.parse(localStorage["configuracion"]);

        configuracion.append("correo", _c.email)
        configuracion.append("data", JSON.stringify(data))

        fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
        .then(data => {
            if (data.success == true ){
                let modal = make.modal()
                document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
                the(modal.titulo).innerHTML = "Cargar datos desde el servidor";
                the(modal.titulo).classList.add("mx-auto");
                let _contenido = '<p>Guardado</p>'
                the(modal.contenido).innerHTML = _contenido;
                the(modal.id).children[0].classList.remove("modal-lg");
                $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
            }
        }).catch(function(error) {
            alert("error")
        });
    })
})

function nombre(){
    let _modal = make.modal("Guardar nombre")
    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "Falta nombre paciente";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    let _contenido = '<p>NO ESCRIBIÓ EL NOMBRE DE LA PACIENTE.<br>escríbalo abajo y vuelva a presionar el botón guardar</p><div class="form-group"><label for="nombre">Nombre de la paciente</label><input type="text" class="form-control" id="nombre"></div>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");

    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

    $('#'+_modal.button).on("click", function(){
        document.getElementById("nombre-paciente").value = document.getElementById("nombre").value
        $("#"+this.dataset.modal).modal("hide")
    })
}

function rut(){
    let _modal = make.modal("Guardar RUT")
    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "Falta RUT";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    let _contenido = '<p>NO ESCRIBIÓ EL RUT DE LA PACIENTE.<br>escríbalo abajo y vuelva a presionar el botón guardar</p><div class="form-group"><label for="rut">RUT del paciente</label><input type="text" class="form-control" id="rut"></div>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");

    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

    $('#'+_modal.button).on("click", function(){
        document.getElementById("id-paciente").value = document.getElementById("rut").value
        $("#"+this.dataset.modal).modal("hide")
    })
}

function eg(){
    let _modal = make.modal()
    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "Falta EG";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    let _contenido = '<p>Seleccione la edad gestacional</p>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");
    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
}

function ciudad(){
    let _modal = make.modal("Guardar Ciudad")
    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "Falta Ciudad";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    let _contenido = '<p>No escribió la ciudad de la paciente, escríbalo abajo y vuelva a presionar el botón guardar</p><div class="form-group"><label for="ciudad">Ciudad de paciente</label><select class="form-control" id="ciudad"></select></div>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");

    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

    $('#ciudadpaciente').find('option').clone().appendTo('#ciudad');

    $('#'+_modal.button).on("click", function(){
        document.getElementById("ciudadpaciente").value = document.getElementById("ciudad").value
        $("#"+this.dataset.modal).modal("hide")
    })
}

function lugar(){
    let _modal = make.modal("Guardar Lugar")
    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "Falta Ciudad";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    let _contenido = '<p>No escribió el lugar de control de la paciente, escríbalo abajo y vuelva a presionar el botón guardar</p><div class="form-group"><label for="lcontrol">Lugar de control</label><select class="form-control" id="lcontrol"></select></div>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");

    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

    $('#lcontrolpaciente').find('option').clone().appendTo('#lcontrol');

    $('#'+_modal.button).on("click", function(){
        document.getElementById("lcontrolpaciente").value = document.getElementById("lcontrol").value
        $("#"+this.dataset.modal).modal("hide")
    })
}

function basicDataValid(){
    if (the("id-paciente").value == ""){
        rut()
        return false
    }

    if (the("nombre-paciente").value == ""){
        nombre()
        return false
    }

    if (the("ciudadpaciente").value == 0){
        ciudad()
        return false
    }

    if (the("semanas").value == 0){
        eg()
        return false
    }

    if (the("lcontrolpaciente").value == 0){
        lugar()
        return false
    }

    return true
}