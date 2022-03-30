import { humanDate, make, the } from './wetrust.js';
import { fechas } from './functionesM.js';

var iconos = {
    "lupa" : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>',
    "basura" : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>'
}

$(document).ready(function() {

    $("#btn\\.guardar\\.precoz").on("click", function(){
        let configuracion = new FormData()

        let profesional = the("ecografista").value
        let motivo = the("motivo-examen").value
        let patologia = the("patologiaObstetricaUno").value

        let profRef = the("profref").options[the("profref").selectedIndex].text
        //let centroecograf = the("centroecograf").options[the("centroecograf").selectedIndex].text

        let data = {
            'Nombre profesional referente': profRef,
            'Fono profesional referente': the("profreftel").value,
//            'Centro Ecografico': centroecograf,
            'edadm' : document.getElementsByName("edad_materna")[0].value,
            'profesional' : profesional,
            'motivo' : motivo,
            'patologia' : patologia,
            'Fecha' : the("fee").value,
            'fur' : the("fum").value,
            'LCN' : $("#lcn").val(),
            'egAjustada' : the("lcnPct").value,
            'saco' : the("saco").value,
            'egsaco' : the("sacoPct").value,
            'embrion' : the("embrion").options[the("embrion").selectedIndex].text,
            'FCF' : the("fcf-prim-dos").value,
            'saco vitelino' : the("saco-vitelino-mm").value,
            'Comentario' : the("comentarios-eco-uno").value,
        }

        if (basicDataValid() == false){
            return
        }

        configuracion.append("rut", the("id-paciente").value)
        configuracion.append("nombre", the("nombre-paciente").value)
        configuracion.append("ciudad", the("ciudadpaciente").value)
        configuracion.append("eg", the("semanas").value)
        configuracion.append("lugar", the("lcontrolpaciente").value)
        configuracion.append("tipo", "Ecografía obstétrica precoz < 11 semanas")

        configuracion.append("correo", "drlagosbarcelona@gmail.com")
        configuracion.append("data", JSON.stringify(data))

        fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
        .then(data => {
            if (data.success == true ){ 
                the("notificacionText").innerText = "Guardado"  
                $('#notificacion').toast('show')
            }
            loadEcoPrecozTabla(the("id-paciente").value)
        }).catch(function(error) {
            alert("error")
        });
    })

    $("#btn\\.guardar\\.segtrim").on("click", function(){
        let configuracion = new FormData()

        let profesional = the("ecografista").value
        let motivo = the("motivo-examen").value
        let patologia = the("patologiaObstetricaUno").value

        let profRef = the("profref").options[the("profref").selectedIndex].text
//        let centroecograf = the("centroecograf").options[the("centroecograf").selectedIndex].text

        let data = {
            'Nombre profesional referente': profRef,
            'Fono profesional referente': the("profreftel").value,
//           'Centro Ecografico': centroecograf,
            'edadm' : document.getElementsByName("edad_materna")[0].value,
            'profesional' : profesional,
            'motivo' : motivo,
            'patologia' : patologia,
            'Fecha' : the("fee").value,
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
            'bvm' : the("bvm").value,
            'Uterinas Prom': the('respuesta_uterina_promedio').value,
            'Uterinas Prom Pct': the('respuesta_uterina_promedio_percentil').textContent,
            'Largo cervical': the('largo.cervical.segundo').value,
            'Comentario' : the("comentarios-eco-dos-inf-dos").value,
            'cm' : the("cm.ecoDosTres").value,
            'cmpct' : the("cm.pct.ecoDosTres").value,
            'atrio' : the("atrio.ecoDosTres").value,
            'atriopct' : the("atrio.desc.ecoDosTres").value,
            'utd' : the("respuesta_uterina_derecha").value,
            'utdpct' : the("respuesta_uterina_derecha_percentil").innerText,
            'uti' : the("respuesta_uterina_izquierda").value,
            'utipct' : the("respuesta_uterina_izquierda_percentil").innerText,
            'psisTamizaje' : the("psisTamizaje").value,
            'pdiasTamizaje' : the("pdiasTamizaje").value,
            'pmediaTamizaje' : the("pmediaTamizaje").value,
            'tallaTamizaje' : the("tallaTamizaje").value,
            'pesoTamizaje' : the("pesoTamizaje").value,
            'imcTamizaje' : the("imcTamizaje").value,
            'primigesta' : the("primigesta").value,
            'peprevia' : the("peprevia").value,
            'trombofilias' : the("trombofilias").value,
        }

        if (basicDataValid() == false){
            return
        }

        configuracion.append("rut", the("id-paciente").value)
        configuracion.append("nombre", the("nombre-paciente").value)
        configuracion.append("ciudad", the("ciudadpaciente").value)
        configuracion.append("eg", the("semanas").value)
        configuracion.append("lugar", the("lcontrolpaciente").value)
        configuracion.append("tipo", "Evaluación del crecimiento fetal")

        configuracion.append("correo", "drlagosbarcelona@gmail.com")
        configuracion.append("data", JSON.stringify(data))

        fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
        .then(data => {
            if (data.success == true ){
                the("notificacionText").innerText = "Guardado"
                $('#notificacion').toast('show')
                loadEcoCrecimientoTabla(the("id-paciente").value)
            }
        }).catch(function(error) { alert("error") });
    })

    $("#btn\\.guardar\\.doppler").on("click", function(){
        let configuracion = new FormData()

        let profesional = the("ecografista").value
        let motivo = the("motivo-examen").value
        let patologia = the("patologiaObstetricaUno").value

        let profRef = the("profref").options[the("profref").selectedIndex].text
//        let centroecograf = the("centroecograf").options[the("centroecograf").selectedIndex].text

        let data = {
            'Nombre profesional referente': profRef,
            'Fono profesional referente': the("profreftel").value,
//            'Centro Ecografico': centroecograf,
            'edadm' : document.getElementsByName("edad_materna")[0].value,
            'profesional' : profesional,
            'motivo' : motivo,
            'patologia' : patologia,
            'Fecha' : the("fee").value,
            'fur' : the("fum").value,
            'fcf' : the("fcf-prim").value,
            'utderecha' : the("aud").value,
            'utderechapct' : the("audPct").value,
            'utizquierda' : the("aui").value,
            'utizquierdapct' : the("auiPct").value,
            'utpromedio' : the("auprom").value,
            'utpromediopct' : the("auPctTxt").value,
            'utumbilical' : the("ipau").value,
            'utumbilicalpct' : the("ipauPctTxt").value,
            'utcmedia' : the("ipacm").value,
            'utcmediapct' : the("ipacmPctTxt").value,
            'couciente' : the("ccp").value,
            'coucientepct' : the("ccpPctTxt").value,
            'cmau' : the("ccpPct").value,
            'DuctusVenoso' : the("dv").value,
            'DuctusVenosoPct' : the("dvPctTxt").value,
            'Comentario' : the("comentarios-doppler").value,
        }

        if (basicDataValid() == false){
            return
        }

        configuracion.append("rut", the("id-paciente").value)
        configuracion.append("nombre", the("nombre-paciente").value)
        configuracion.append("ciudad", the("ciudadpaciente").value)
        configuracion.append("eg", the("semanas").value)
        configuracion.append("lugar", the("lcontrolpaciente").value)
        configuracion.append("tipo", "Flujometría Doppler materno / fetal")

        configuracion.append("correo", "drlagosbarcelona@gmail.com")
        configuracion.append("data", JSON.stringify(data))

        fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
        .then(data => {
            if (data.success == true ){
                the("notificacionText").innerText = "Guardado"
                $('#notificacion').toast('show')
                loadEcoDopplerTabla(the("id-paciente").value)
            }
        }).catch(function(error) {
            alert("error")
        });
    })

    $("#btn\\.guardar\\.ginecologico").on("click", function(){
        let configuracion = new FormData()

        let profesional = "Rudecindo Lagos"
        let motivo = the("motivo-examen").value
        let patologia = the("patologiaObstetricaUno").value

        let profRef = the("profref").options[the("profref").selectedIndex].text
//        let centroecograf = the("centroecograf").options[the("centroecograf").selectedIndex].text

        let data = {
            'Nombre profesional referente': profRef,
            'Fono profesional referente': the("profreftel").value,
//            'Centro Ecografico': centroecograf,
            'edadm' : document.getElementsByName("edad_materna")[0].value,
            'profesional' : profesional,
            'motivo' : motivo,
            'patologia' : patologia,
            'utUbicacion1': the("utUbicacion1").value,
            'utUbicacion2': the("utUbicacion2").value,
            'cuerpoUterino': the("cuerpoUterino").value,
            'uteroDim1': the("uteroDim1").value,
            'uteroDim2': the("uteroDim2").value,
            'uteroDim3': the("uteroDim3").value,
            'uteroDiu': the("uteroDiu").value,
            'endometDesc1': the("endometDesc1").value,
            'endometDesc2': the("endometDesc2").value,
            'endometGrosor': the("endometGrosor").value,
            'endometObs': the("endometObs").value,
            'anexDerecho': the("anexDerecho").value,
            'anexIzquierdo': the("anexIzquierdo").value,
            'ovarDereMed1': the("ovarDereMed1").value,
            'ovarDereMed2': the("ovarDereMed2").value,
            'ovarDereMed3': the("ovarDereMed3").value,
            'ovarIzquier1': the("ovarIzquier1").value,
            'ovarIzquier2': the("ovarIzquier2").value,
            'ovarIzquier3': the("ovarIzquier3").value,
            'espacioRetro': the("espacioRetro").value,
            'comentario': the("comentario.ginecologica").value,
            'Fecha' : the("fee").value,
            'fur' : the("fum").value,
            'diaciclo' : the("diaciclo").value,
            'ovarIzquier': the("ovarIzquier").value,
            'ovarDere': the("ovarDere").value,
        }

        if (basicDataValid() == false){
            return
        }

        configuracion.append("rut", the("id-paciente").value)
        configuracion.append("nombre", the("nombre-paciente").value)
        configuracion.append("ciudad", the("ciudadpaciente").value)
        configuracion.append("eg", the("semanas").value)
        configuracion.append("lugar", the("lcontrolpaciente").value)
        configuracion.append("tipo", "Ginecologico")

        configuracion.append("correo", "drlagosbarcelona@gmail.com")
        configuracion.append("data", JSON.stringify(data))

        fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
        .then(data => {
            if (data.success == true ){
                the("notificacionText").innerText = "Guardado"
                $('#notificacion').toast('show')
                loadEcoGineTabla(the("id-paciente").value)
            }
        }).catch(function(error) { alert("error") });
    })

    $("input").on("keyup",function( e ) {
        var key_enter = ["uteroDim1", "uteroDim2", "uteroDim3", "ovarDereMed1", "ovarDereMed2", "ovarDereMed3", "ovarIzquier1", "ovarIzquier2", "ovarIzquier3"];

        if (key_enter.includes(this.id)== true){

            let contenido = String(this.value)
            if ( contenido.length > 3 ) {
                this.value = contenido.substr(0, 3)
            }
        }
    });

    the("endometGrosor").onkeyup = function(e){
        let contenido = String(this.value)
        if ( contenido.length > 2 ) {
            this.value = contenido.substr(0, 2)
        }
    }
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

function basicDataValid(){
    if (the("id-paciente").value == ""){
        rut()
        return false;
    }

    if (the("nombre-paciente").value == ""){
        nombre()
        return false;
    }

    if (the("semanas").value == 0){
        eg()
        return false;
    }

    return true;
}

export function loadEcoPrecozTabla(paciente_rut){

    fetch('https://api.crecimientofetal.cl/config/examenUno/'+paciente_rut).then(response => response.json())
    .then(data => {

        the("tablaEcoPrecoz").innerHTML = "";

        data.forEach(function myFunction(value, index, array) {

            let tr = document.createElement("tr");
            let fecha = document.createElement("td")
            let eg = document.createElement("td")
            let lcn = document.createElement("td")
            let egLcn = document.createElement("td")
            let saco = document.createElement("td")
            let egSaco = document.createElement("td")
            let embrion = document.createElement("td")

            let datos = JSON.parse(value.caso_data)
            fecha.innerText = humanDate(fechas.toDate(datos.Fecha))

            eg.innerText = value.caso_eg

            lcn.innerText = datos.LCN
            egLcn.innerText = datos.egAjustada
            saco.innerText = datos.saco
            egSaco.innerText = datos.egsaco
            embrion.innerText = datos.embrion

            let ver = document.createElement("td")
            ver.dataset.id = value.caso_id
            ver.innerHTML = iconos["lupa"]
            ver.onclick = traerEcoPrecoz

            let eliminar = document.createElement("td")
            eliminar.dataset.id = value.caso_id
            eliminar.innerHTML = iconos["basura"]
            eliminar.onclick = eliminarEcoPrecoz

            tr.appendChild(fecha)
            tr.appendChild(eg)
            tr.appendChild(saco)
            tr.appendChild(egSaco)
            tr.appendChild(lcn)
            tr.appendChild(egLcn)
            tr.appendChild(embrion)
            tr.appendChild(ver)
            tr.appendChild(eliminar)

            the("tablaEcoPrecoz").appendChild(tr);
        });
    })
}

function traerEcoPrecoz(){
    let id = this.dataset.id

    fetch('https://api.crecimientofetal.cl/config/elUno/'+id).then(response => response.json())
    .then(data => {

        let datos = JSON.parse(data.caso_data)

        document.getElementsByName("edad_materna")[0].value = datos.edadm
        the("semanas").value = data.caso_eg

        the("fee").value = datos.Fecha
        the("fum").value = datos.fur
        $("#lcn").val(datos.LCN)
        the("lcnPct").value = datos.egAjustada
        the("saco").value = datos.saco
        the("sacoPct").value = datos.egsaco
        //datos.embrion' : the("embrion").options[the("embrion").selectedIndex].text,
        the("fcf-prim-dos").value = datos.FCF
        //datos.saco vitelino' : the("saco-vitelino-mm").value = 
        the("comentarios-eco-uno").value  = datos.Comentario

        the("notificacionText").innerText = "Exámen Cargado"
        $('#notificacion').toast('show')
    })
}

function eliminarEcoPrecoz(){
    make.deleteModal("la ecografía", this.dataset.id, function(){
        $("#"+this.dataset.modal).modal("hide")
        fetch('https://api.crecimientofetal.cl/config/dexamenUno/'+this.dataset.delete).then(response => response.json())
        .then(data => {
            the("notificacionText").innerText = "Exámen Eliminado"
            $('#notificacion').toast('show')
            loadEcoPrecozTabla(the("id-paciente").value)
        })
    });
}

export function loadEcoCrecimientoTabla(paciente_rut){

    fetch('https://api.crecimientofetal.cl/config/examenDos/'+paciente_rut).then(response => response.json())
    .then(data => {

        the("tablaEcoCrecimiento").innerHTML = "";

        data.forEach(function myFunction(value, index, array) {

            let tr = document.createElement("tr");
            let fecha = document.createElement("td")
            let eg = document.createElement("td")
            let pfe = document.createElement("td")
            let pfePct = document.createElement("td")
            let cccaPct = document.createElement("td")
            let bvm = document.createElement("td")

            let datos = JSON.parse(value.caso_data)

            fecha.innerText = humanDate(fechas.toDate(datos.Fecha))
            
            eg.innerText = value.caso_eg

            pfe.innerText = datos.peso
            pfePct.innerText = datos.pesopct
            cccaPct.innerText = datos.cccapct
            bvm.innerText = datos.bvm


            let ver = document.createElement("td")
            ver.dataset.id = value.caso_id
            ver.innerHTML = iconos["lupa"]
            ver.onclick = traerEcoCrecimiento

            let eliminar = document.createElement("td")
            eliminar.dataset.id = value.caso_id
            eliminar.innerHTML = iconos["basura"]
            eliminar.onclick = eliminarEcoCrecimiento

            tr.appendChild(fecha)
            tr.appendChild(eg)
            tr.appendChild(pfe)
            tr.appendChild(pfePct)
            tr.appendChild(cccaPct)
            tr.appendChild(bvm)
            tr.appendChild(ver)
            tr.appendChild(eliminar)

            the("tablaEcoCrecimiento").appendChild(tr);
        });
    })
}

function traerEcoCrecimiento(){
    let id = this.dataset.id

    fetch('https://api.crecimientofetal.cl/config/elDos/'+id).then(response => response.json())
    .then(data => {

        let datos = JSON.parse(data.caso_data)

        document.getElementsByName("edad_materna")[0].value = datos.edadm
        the("semanas").value = data.caso_eg

        the("fee").value = datos.Fecha
        the("fum").value = datos.fur
        
        the("dbp").value = datos.dbp
        $("#dbp").trigger("change")
        the("dbpDE").value = datos.dbpde
        the("dof").value = datos.dof
        $("#dof").trigger("change")
        the("dofPct").value = datos.dofpct
        the("cc").value = datos.cc
        $("#cc").trigger("change")
        the("ccPct").value = datos.ccpct
        the("ca").value = datos.ca
        $("#ca").trigger("change")
        the("caPct").value = datos.capct
        the("lf").value = datos.lf
        $("#lf").trigger("change")
        the("lfPct").value = datos.lfpct
        the("lh").value = datos.lh
        $("#lh").trigger("change")
        the("lhPct").value = datos.lhpct
        the("cerebelo").value = datos.cerebelo
        $("#cerebelo").trigger("change")
        the("cerebeloPctRpt").value = datos.cerebelopct
        the("pfe").value = datos.peso
        $("#pfe").trigger("change")
        the("pfePctRpt").value = datos.pesopct
        the("ccca").value = datos.ccca
        $("#ccca").trigger("change")
        the("cccaPctVal").value = datos.cccapct

        the("ubicacion").value = datos['placenta ubic']
        the("incersion").value = datos['placenta ins']

        the("liq-cualitativo-eco").value = datos.liquido
        the("bvm").value = datos.bvm
        $("#bvm").trigger("change")
        the('respuesta_uterina_promedio').value = datos['Uterinas Prom']
        $("#respuesta_uterina_promedio").trigger("change")
        the('respuesta_uterina_promedio_percentil').textContent = datos['Uterinas Prom Pct']
        the('largo.cervical.segundo').value = datos['Largo cervical']
        $("#largo\\.cervical\\.segundo").trigger("change")
        the("comentarios-eco-dos-inf-dos").value = datos.Comentario

        the("cm.ecoDosTres").value = datos.cm
        $("#cm\\.ecoDosTres").trigger("change")
        the("cm.pct.ecoDosTres").value = datos.cmpct

        the("atrio.ecoDosTres").value = datos.atrio
        $("#atrio\\.ecoDosTres").trigger("change")
        the("atrio.desc.ecoDosTres").value = datos.atriopct

        the("respuesta_uterina_derecha").value = datos.utd
        $("#respuesta_uterina_derecha").trigger("change")
        the("respuesta_uterina_derecha_percentil").innerText = datos.utdpct

        the("respuesta_uterina_izquierda").value = datos.uti
        $("#respuesta_uterina_izquierda").trigger("change")
        the("respuesta_uterina_izquierda_percentil").innerText = datos.utipct


        the("psisTamizaje").value = datos.psisTamizaje
        $("#psisTamizaje").trigger("change")
        the("pdiasTamizaje").value = datos.pdiasTamizaje
        $("#pdiasTamizaje").trigger("change")
        the("pmediaTamizaje").value = datos.pmediaTamizaje
        the("tallaTamizaje").value = datos.tallaTamizaje
        $("#tallaTamizaje").trigger("change")
        the("pesoTamizaje").value = datos.pesoTamizaje
        $("#pesoTamizaje").trigger("change")
        the("imcTamizaje").value = datos.imcTamizaje
        the("primigesta").value = datos.primigesta
        the("peprevia").value = datos.peprevia
        the("trombofilias").value = datos.trombofilias

        the("notificacionText").innerText = "Exámen Cargado"
        $('#notificacion').toast('show')
    })
}

function eliminarEcoCrecimiento(){
    make.deleteModal("la ecografía", this.dataset.id, function(){
        $("#"+this.dataset.modal).modal("hide")
        fetch('https://api.crecimientofetal.cl/config/dexamenDos/'+this.dataset.delete).then(response => response.json())
        .then(data => {
            the("notificacionText").innerText = "Exámen Eliminado"
            $('#notificacion').toast('show')
            loadEcoCrecimientoTabla(the("id-paciente").value)
        })
    });
}

export function loadEcoDopplerTabla(paciente_rut){

    fetch('https://api.crecimientofetal.cl/config/examenDoppler/'+paciente_rut).then(response => response.json())
    .then(data => {

        the("tablaEcoDopper").innerHTML = "";

        data.forEach(function myFunction(value, index, array) {

            let tr = document.createElement("tr");
            let fecha = document.createElement("td")
            let eg = document.createElement("td")
            let ut = document.createElement("td")
            let umb = document.createElement("td")
            let ccp = document.createElement("td")
            let duc = document.createElement("td")

            let datos = JSON.parse(value.caso_data)

            fecha.innerText = humanDate(fechas.toDate(datos.Fecha))

            eg.innerText = value.caso_eg

            ut.innerText = datos.utpromediopct
            umb.innerText = datos.utumbilicalpct
            ccp.innerText = datos.coucientepct
            duc.innerText = datos.DuctusVenosoPct

            let ver = document.createElement("td")
            ver.dataset.id = value.caso_id
            ver.innerHTML = iconos["lupa"]
            ver.onclick = traerEcoDoppler

            let eliminar = document.createElement("td")
            eliminar.dataset.id = value.caso_id
            eliminar.innerHTML = iconos["basura"]
            eliminar.onclick = eliminarEcoDoppler

            tr.appendChild(fecha)
            tr.appendChild(eg)
            tr.appendChild(ut)
            tr.appendChild(umb)
            tr.appendChild(ccp)
            tr.appendChild(duc)
            tr.appendChild(ver)
            tr.appendChild(eliminar)

            the("tablaEcoDopper").appendChild(tr);
        });
    })
}

function traerEcoDoppler(){
    let id = this.dataset.id

    fetch('https://api.crecimientofetal.cl/config/elDoppler/'+id).then(response => response.json())
    .then(data => {

        let datos = JSON.parse(data.caso_data)

        document.getElementsByName("edad_materna")[0].value = datos.edadm
        the("fee").value = datos.fecha
        the("fum").value = datos.fur
        $("#fee").trigger("change")
        the("fcf-prim").value = datos.fcf
        the("aud").value = datos.utderecha
        $("#aud").trigger("change")
        the("audPct").value = datos.utderechapct
        the("aui").value = datos.utizquierda
        $("#aui").trigger("change")
        the("auiPct").value = datos.utizquierdapct
        the("auprom").value = datos.utpromedio
        $("#auprom").trigger("change")
        the("auPct").value = datos.utpromediopct
        the("auPct").value = datos.utprompct
        the("ipau").value = datos.utumbilical
        $("#ipau").trigger("change")
        the("ipauPct").value = datos.utumbilicalpct
        the("ipacm").value = datos.utcmedia
        $("#ipacm").trigger("change")
        the("ipacmPct").value = datos.utcmediapct
        the("ccp").value = datos.couciente
        $("#ccp").trigger("change")
        the("ccpPct").value = datos.coucientepct
        the("dv").value = datos.DuctusVenoso
        $("#dv").trigger("change")
        the("dvPct").value = datos.DuctusVenosoPct
        the("dvPct").value = datos.dvpct
        the("comentarios-doppler").value = datos.Comentario

        the("notificacionText").innerText = "Exámen Cargado"
        $('#notificacion').toast('show')
    })
}

function eliminarEcoDoppler(){
    make.deleteModal("la ecografía", this.dataset.id, function(){
        $("#"+this.dataset.modal).modal("hide")
        fetch('https://api.crecimientofetal.cl/config/dexamenDoppler/'+this.dataset.delete).then(response => response.json())
        .then(data => {
            the("notificacionText").innerText = "Exámen Eliminado"
            $('#notificacion').toast('show')
            loadEcoDopplerTabla(the("id-paciente").value)
        })
    });
}

export function loadEcoGineTabla(paciente_rut){

    fetch('https://api.crecimientofetal.cl/config/examenGinecologico/'+paciente_rut).then(response => response.json())
    .then(data => {

        the("tablaGinecologica").innerHTML = "";

        data.forEach(function myFunction(value, index, array) {

            let tr = document.createElement("tr");
            let fecha = document.createElement("td")
            let diaciclo = document.createElement("td")
            let uteroDim1 = document.createElement("td")
            let uteroDim2 = document.createElement("td")
            let uteroDim3 = document.createElement("td")
            let endometGrosor = document.createElement("td")

            let datos = JSON.parse(value.caso_data)

            fecha.innerText = humanDate(fechas.toDate(datos.Fecha))

            diaciclo.innerText = datos.diaciclo

            uteroDim1.innerText = datos.uteroDim1
            uteroDim2.innerText = datos.uteroDim2
            uteroDim3.innerText = datos.uteroDim3
            endometGrosor.innerText = datos.endometGrosor

            let ver = document.createElement("td")
            ver.dataset.id = value.caso_id
            ver.innerHTML = iconos["lupa"]
            ver.onclick = traerEcoGine

            let eliminar = document.createElement("td")
            eliminar.dataset.id = value.caso_id
            eliminar.innerHTML = iconos["basura"]
            eliminar.onclick = eliminarEcoGine

            tr.appendChild(fecha)
            tr.appendChild(diaciclo)
            tr.appendChild(uteroDim1)
            tr.appendChild(uteroDim2)
            tr.appendChild(uteroDim3)
            tr.appendChild(endometGrosor)
            tr.appendChild(ver)
            tr.appendChild(eliminar)

            the("tablaGinecologica").appendChild(tr);
        });
    })
}

function traerEcoGine(){
    let id = this.dataset.id

    fetch('https://api.crecimientofetal.cl/config/elGinecologico/'+id).then(response => response.json())
    .then(data => {

        let datos = JSON.parse(data.caso_data)

        document.getElementsByName("edad_materna")[0].value = datos.edadm
        the("fee").value = datos.fecha
        the("fum").value = datos.fur
        $("#fee").trigger("change")

        the("utUbicacion1").value = datos.utUbicacion1
        the("utUbicacion2").value = datos.utUbicacion2
        the("cuerpoUterino").value = datos.cuerpoUterino
        the("uteroDim1").value = datos.uteroDim1
        the("uteroDim2").value = datos.uteroDim2
        the("uteroDim3").value = datos.uteroDim3
        the("uteroDiu").value = datos.uteroDiu
        the("endometDesc1").value = datos.endometDesc1
        the("endometDesc2").value = datos.endometDesc2
        the("endometGrosor").value = datos.endometGrosor
        the("endometObs").value = datos.endometObs
        the("anexDerecho").value = datos.anexDerecho
        the("anexIzquierdo").value = datos.anexIzquierdo
        the("ovarDere").value = datos.ovarDere
        the("ovarDereMed1").value = datos.ovarDereMed1
        the("ovarDereMed2").value = datos.ovarDereMed2
        the("ovarDereMed3").value = datos.ovarDereMed3
        the("ovarIzquier").value = datos.ovarIzquier
        the("ovarIzquier1").value = datos.ovarIzquier1
        the("ovarIzquier2").value = datos.ovarIzquier2
        the("ovarIzquier3").value = datos.ovarIzquier3
        the("espacioRetro").value = datos.espacioRetro
        the("comentario.ginecologica").value = datos.comentario
        the("diaciclo").value = datos.diaciclo

        the("notificacionText").innerText = "Exámen Cargado"
        $('#notificacion').toast('show')
    })
}

function eliminarEcoGine(){

    make.deleteModal("la ecografía", this.dataset.id, function(){
        $("#"+this.dataset.modal).modal("hide");

        fetch('https://api.crecimientofetal.cl/config/dexamenGinecologico/'+this.dataset.delete).then(response => response.json())
        .then(data => {

            the("notificacionText").innerText = "Exámen Eliminado"
            $("#notificacion").toast("show");
            loadEcoGineTabla(the("id-paciente").value);

        })

    });

}