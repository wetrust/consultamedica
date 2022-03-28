import { make, the, these, inputDate } from './wetrust.js'
import { loadEcoPrecozTabla, loadEcoCrecimientoTabla, loadEcoDopplerTabla, loadEcoGineTabla } from './guardar.js'
import { fechas } from './functionesM.js'

var iconos = {
    "lupa" : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>',
    "basura" : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>'

}

function loadPacientesTabla(){

    fetch('https://api.crecimientofetal.cl/config/pacienteAll').then(response => response.json())
    .then(data => {

        globalPacientes = data;
        construirTablaPacientes(data)
    })
}

export function construirTablaPacientes(data){
    the("tablaListaPacientes").innerHTML = "";

    data.forEach(function myFunction(value, index, array) {

        let tr = document.createElement("tr");
        let fecha = document.createElement("td")
        let eg = document.createElement("td")
        let nombre = document.createElement("td")
        let apellido = document.createElement("td")
        let rut = document.createElement("td")
        let centroEco = document.createElement("td")
        let tipoEco = document.createElement("td")

        let _f = value.paciente_fee

        _f = _f.split("-")
        fecha.innerText = _f[2] + "-" + _f[1]  + "-" + _f[0]
        eg.innerText = value.paciente_eg
        nombre.innerText = value.paciente_nombre
        rut.innerText = value.paciente_rut
        tipoEco.innerText = (value.paciente_tipoeco_txt !== "") ? value.paciente_tipoeco_txt : "";

        centroEco.innerText = (value.paciente_centro !== "") ? value.paciente_centro : "";

        apellido.innerText = value.paciente_apellido

        let ver = document.createElement("td")
        ver.dataset.id = value.paciente_id
        ver.classList.add("click-paciente")
        ver.innerHTML = iconos["lupa"]
        ver.onclick = traerPaciente

        let eliminar = document.createElement("td")
        eliminar.dataset.id = value.paciente_id
        eliminar.classList.add("click-eliminar")
        eliminar.innerHTML = iconos["basura"]
        eliminar.onclick = eliminarPaciente

        tr.appendChild(fecha)
        tr.appendChild(eg)
        tr.appendChild(rut)
        tr.appendChild(nombre)
        tr.appendChild(apellido)
        tr.appendChild(centroEco)
        tr.appendChild(tipoEco)
        tr.appendChild(ver)
        tr.appendChild(eliminar)

        the("tablaListaPacientes").appendChild(tr);
    });
}

function eliminarPaciente(){
    make.deleteModal("el paciente", this.dataset.id, function(){
        $("#"+this.dataset.modal).modal("hide")
        fetch('https://api.crecimientofetal.cl/config/eliminar/'+this.dataset.delete).then(response => response.json())
        .then(data => {
            the("notificacionText").innerText = "Paciente Eliminado"
            $('#notificacion').toast('show')
            loadPacientesTabla()
        })
    });
}

function traerPaciente(){
    let id = this.dataset.id

    fetch('https://api.crecimientofetal.cl/config/el/'+id).then(response => response.json())
    .then(data => {

        the("fee").value = inputDate()

        the("semanas").value = data.paciente_eg;
        $("#semanas").trigger("change")
        the("nombre-paciente").value = data.paciente_nombre
        the("apellido-paciente").value = data.paciente_apellido

        the("nombre.ecoprim").value = data.paciente_nombre
        the("apellido.ecoprim").value = data.paciente_apellido

        the("nombre.gine").value = data.paciente_nombre
        the("apellido.gine").value = data.paciente_apellido
        the("edad.gine").value = data.paciente_edad

        the("nombre.crecim").value = data.paciente_nombre
        the("apellido.crecim").value = data.paciente_apellido

        the("nombre.doppler").value = data.paciente_nombre
        the("apellido.doppler").value = data.paciente_apellido

        the("id-paciente").value = data.paciente_rut
        $("#id-paciente").trigger("blur");
        the("email-paciente").value = data.paciente_email
        the("fono-paciente").value = data.paciente_telefono
        the("motivo-examen").value = data.paciente_motivo
        the("patologiaObstetricaUno").value = data.paciente_patologia
        these("edad_materna")[0].value = data.paciente_edad
        the("ciudadpaciente").value = data.paciente_lugar
        the("lcontrolpaciente").value = data.paciente_control

        if(data.hasOwnProperty('paciente_fum')){
            if (data.paciente_fum == null){
                the("fum").value = inputDate()

            }else{
                the("fum").value = data.paciente_fum;
            }

        }

        the("profref").value = data.paciente_referente
        //the("centroecograf").value = data.paciente_centro
        the("tipoecografia").value = data.paciente_tipoeco

        the("ecografista").value = data.paciente_ecografista_txt

        the("notificacionText").innerText = "Paciente Cargado"
        $('#notificacion').toast('show')

        loadEcoPrecozTabla(data.paciente_rut)
        loadEcoCrecimientoTabla(data.paciente_rut)
        loadEcoDopplerTabla(data.paciente_rut)
        loadEcoGineTabla(data.paciente_rut)
    })
}

function guardarPaciente(e){

    let nombre = the("nombre-paciente").value
    let apellido = the("apellido-paciente").value
    let rut = the("id-paciente").value
    let edad = these("edad_materna")[0].value
    let motiv = the("motivo-examen").value
    let pat = the("patologiaObstetricaUno").value
    let tipoEco = the("tipoecografia").value
    let cntrEcogr = the("centro.ecografico").value

    the("nombre-paciente").classList.remove("is-invalid");
    the("apellido-paciente").classList.remove("is-invalid");
    the("id-paciente").classList.remove("is-invalid");
    these("edad_materna")[0].classList.remove("is-invalid");
    the("motivo-examen").classList.remove("is-invalid");
    the("patologiaObstetricaUno").classList.remove("is-invalid");
    the("tipoecografia").classList.remove("is-invalid");
    the("centro.ecografico").classList.remove("is-invalid");

    if (String(nombre).length == 0){
        make.alert("Falta Nombre de paciente", true);
        the("nombre-paciente").classList.add("is-invalid");
        e.preventDefault()
        return false
    }

    if (String(apellido).length == 0){
        make.alert("Falta Apellido de paciente", true);
        the("apellido-paciente").classList.add("is-invalid");
        e.preventDefault()
        return false
    }

    if (String(rut).length == 0){
        make.alert("Falta RUT de paciente", true);
        the("id-paciente").classList.add("is-invalid");
        e.preventDefault()
        return false
    }

    if (edad == 0){
        make.alert("Seleccione edad", true);
        these("edad_materna")[0].classList.add("is-invalid");
        e.preventDefault()
        return false
    }

    if (motiv == ""){
        make.alert("Seleccione motivo", true);
        the("motivo-examen").classList.add("is-invalid");
        e.preventDefault()
        return false;
    }

    if (pat == ""){
        make.alert("Seleccione patología relevante", true);
        the("patologiaObstetricaUno").classList.add("is-invalid");
        e.preventDefault()
        return false
    }

    if (tipoEco == ""){
        make.alert("Seleccione tipo de Ecografía", true);
        the("tipoecografia").classList.add("is-invalid");
        e.preventDefault();
        return false;
    }

    if (cntrEcogr == ""){
        make.alert("Seleccione Centro Ecográfico", true);
        the("centro.ecografico").classList.add("is-invalid");
        e.preventDefault();
        return false;
    }

    let configuracion = new FormData()

    configuracion.append("paciente_fee", the("fee").value)
    configuracion.append("paciente_eg", the("semanas").value)
    configuracion.append("paciente_nombre", the("nombre-paciente").value)
    configuracion.append("paciente_apellido", the("apellido-paciente").value)
    configuracion.append("paciente_rut", the("id-paciente").value)
    configuracion.append("paciente_email", the("email-paciente").value)

    let _numero = (isNaN(the("fono-paciente").value) == true || the("fono-paciente").value == "") ? "0" : the("fono-paciente").value

    configuracion.append("paciente_telefono", _numero)
    configuracion.append("paciente_motivo", the("motivo-examen").value)
    configuracion.append("paciente_motivo_txt", the("motivo-examen").value)
    configuracion.append("paciente_patologia", the("patologiaObstetricaUno").value)
    configuracion.append("paciente_patologia_txt", the("patologiaObstetricaUno").value)
    configuracion.append("paciente_edad", these("edad_materna")[0].value)
    configuracion.append("paciente_lugar", the("ciudadpaciente").value)
    configuracion.append("paciente_lugar_txt", the("ciudadpaciente").value)
    configuracion.append("paciente_control", the("lcontrolpaciente").value)

    configuracion.append("paciente_control_txt", the("lcontrolpaciente").value)
    configuracion.append("paciente_referente", the("profref").value)
    configuracion.append("paciente_referente_txt", the("profref").options[the("profref").selectedIndex].text)
    configuracion.append("paciente_centro", the("centro.ecografico").value)
    configuracion.append("paciente_centro_txt", the("centro.ecografico").value)

    configuracion.append("paciente_tipoeco", the("tipoecografia").value)
    configuracion.append("paciente_tipoeco_txt", the("tipoecografia").options[the("tipoecografia").selectedIndex].text)

    configuracion.append("paciente_ecografista", 1)
    configuracion.append("paciente_ecografista_txt", the("ecografista").value)

    configuracion.append("paciente_fum", the("fum").value)

    the("nombre.ecoprim").value = the("nombre-paciente").value
    the("apellido.ecoprim").value = the("apellido-paciente").value

    the("nombre.gine").value = the("nombre-paciente").value
    the("apellido.gine").value = the("apellido-paciente").value
    the("edad.gine").value = these("edad_materna")[0].value

    the("nombre.crecim").value = the("nombre-paciente").value
    the("apellido.crecim").value = the("apellido-paciente").value

    the("nombre.doppler").value = the("nombre-paciente").value
    the("apellido.doppler").value = the("apellido-paciente").value


    fetch('https://api.crecimientofetal.cl/config/paciente', {method: 'POST',body: configuracion, mode: 'cors'})
    .then(response => response.json())
    .then(data => {
        the("notificacionText").innerText = "Paciente Guardado"
        $('#notificacion').toast('show')
        loadPacientesTabla();
    })

    return true;
}

$(document).ready(function(){
    loadPacientesTabla();

    the("guardarElPacienteFlecha").onclick = function(e){
        e.preventDefault();
        let _guardar = guardarPaciente();
        let tipoEco =  the("tipoecografia").value;

        if (_guardar == true && tipoEco != ""){
            if (tipoEco == 0){
                document.location.hash = "#ecoObsPrimTrim"
            }else if (tipoEco == 1){
                document.location.hash = "#ecoObsSegTrim"
            }else if (tipoEco == 2){
                document.location.hash = "#ecoDoppler"
            }else if (tipoEco == 3){
                document.location.hash = "#ecoGinecologica"
            }

        }
    };

    the("guardarElPaciente").onclick = guardarPaciente;

    the("cleanParson").onclick = function(){
        let _fecha = new Date()

        the("fee").value = inputDate(_fecha)

        the("semanas").value = 10;
        the("dias").value = 0;

        let _fur = fechas.fur(10, _fecha)
        the("fum").value = inputDate(_fur)
    
        let _fpp = fechas.fpp(_fur)
        the("fpp").value = inputDate(_fpp)

        the("nombre-paciente").value = ""
        the("apellido-paciente").value = ""
        the("id-paciente").value = ""
        the("email-paciente").value = ""
        the("fono-paciente").value = ""
        the("motivo-examen").value = ""
        the("patologiaObstetricaUno").value = ""
        these("edad_materna")[0].value = "&lt; 12"
        the("ciudadpaciente").value = ""
        the("lcontrolpaciente").value = ""
        the("centro.ecografico").value = ""
        the("tipoecografia").value = ""
        the("profref").value = 1
    }
})

$( document ).ready(function() {
    $("input").on("keypress",function( e ) {
        var key_enter = ["id-paciente", "nombre-paciente", "apellido-paciente", "fono-paciente", "email-paciente", "motivo-examen"];

        if ( e.which == 13 ) {
           e.preventDefault();
           if (key_enter.includes(this.id)== true){
                let pos = key_enter.indexOf(this.id);
                the(key_enter[pos+1]).focus();
           }
        }
    });

    $("input").on("keyup",function( e ) {
        var key_enter = ["fono-paciente"];

        if (key_enter.includes(this.id)== true){

            let contenido = String(this.value)
            if ( contenido.length > 10 ) {
                this.value = contenido.substr(0, 10)
            }
        }
    }); 
});