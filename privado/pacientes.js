import { make, the, these } from './wetrust.js'

var iconos ={
    "lupa" : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>',
    "basura" : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>'

}

function loadPacientesTabla(){

    fetch('https://api.crecimientofetal.cl/config/pacienteAll').then(response => response.json())
    .then(data => {

        the("tablaListaPacientes").innerHTML = "";

        data.forEach(function myFunction(value, index, array) {

            let tr = document.createElement("tr");
            let fecha = document.createElement("td")
            let eg = document.createElement("td")
            let nombre = document.createElement("td")
            let rut = document.createElement("td")
            let motivo = document.createElement("td")
            let profesional = document.createElement("td")

            fecha.innerText = value.paciente_fee
            eg.innerText = value.paciente_eg
            nombre.innerText = value.paciente_nombre
            rut.innerText = value.paciente_rut
            motivo.innerText = value.paciente_motivo_txt
            profesional.innerText = value.paciente_referente_txt

            let ver = document.createElement("td")
            ver.dataset.id = value.paciente_id
            ver.classList.add("click-paciente")
            ver.innerHTML = iconos["lupa"]
            ver.onclick = traerPaciente

            let eliminar = document.createElement("td")
            eliminar.dataset.id = value.paciente_id
            eliminar.classList.add("click-eliminar")
            eliminar.innerHTML = iconos["basura"]

            tr.appendChild(fecha)
            tr.appendChild(eg)
            tr.appendChild(rut)
            tr.appendChild(nombre)
            tr.appendChild(motivo)
            tr.appendChild(profesional)
            tr.appendChild(ver)
            tr.appendChild(eliminar)

            the("tablaListaPacientes").appendChild(tr);
        });
    })
}

function traerPaciente(){
    let id = this.dataset.id

    fetch('https://api.crecimientofetal.cl/config/el/'+id).then(response => response.json())
    .then(data => {

        the("fee").value = data.paciente_fee;
        the("semanas").value = data.paciente_eg;
        $("#semanas").trigger("change")
        the("nombre-paciente").value = data.paciente_nombre
        the("id-paciente").value = data.paciente_rut
        the("email-paciente").value = data.paciente_email
        the("fono-paciente").value = data.paciente_telefono
        the("motivo-examen").value = data.paciente_motivo
        the("patologiaObstetricaUno").value = data.paciente_patologia
        these("edad_materna")[0].value = data.paciente_edad
        the("ciudadpaciente").value = data.paciente_lugar
        the("lcontrolpaciente").value = data.paciente_control

        the("profref").value = data.paciente_referente
        the("centroecograf").value = data.paciente_centro

        the("ecografista").value = data.paciente_ecografista

        make.alert("Paciente cargado")

    })
}

$(document).ready(function(){
    loadPacientesTabla();

    the("guardarElPaciente").onclick = function(e){

        let nombre = the("nombre-paciente").value
        let rut = the("id-paciente").value
        let telefono = the("email-paciente").value
        let email = the("fono-paciente").value

        if (String(nombre).length == 0 || String(rut).length == 0 || String(telefono).length == 0 || String(email).length == 0){
            make.alert("Complete los datos requeridos", true);
            e.preventDefault()
            return false
        }

        let configuracion = new FormData()

        configuracion.append("paciente_fee", the("fee").value)
        configuracion.append("paciente_eg", the("semanas").value)
        configuracion.append("paciente_nombre", the("nombre-paciente").value)
        configuracion.append("paciente_rut", the("id-paciente").value)
        configuracion.append("paciente_email", the("email-paciente").value)
        configuracion.append("paciente_telefono", the("fono-paciente").value)
        configuracion.append("paciente_motivo", the("motivo-examen").value)
        configuracion.append("paciente_motivo_txt", the("motivo-examen").options[the("motivo-examen").selectedIndex].text)
        configuracion.append("paciente_patologia", the("patologiaObstetricaUno").value)
        configuracion.append("paciente_patologia_txt", the("patologiaObstetricaUno").options[the("patologiaObstetricaUno").selectedIndex].text)
        configuracion.append("paciente_edad", these("edad_materna")[0].value)
        configuracion.append("paciente_lugar", the("ciudadpaciente").value)
        configuracion.append("paciente_lugar_txt", the("ciudadpaciente").options[the("ciudadpaciente").selectedIndex].text)
        configuracion.append("paciente_control", the("lcontrolpaciente").value)

        configuracion.append("paciente_control_txt", the("lcontrolpaciente").options[the("lcontrolpaciente").selectedIndex].text)
        configuracion.append("paciente_referente", the("profref").value)
        configuracion.append("paciente_referente_txt", the("profref").options[the("profref").selectedIndex].text)
        configuracion.append("paciente_centro", the("centroecograf").value)
        configuracion.append("paciente_centro_txt", the("centroecograf").options[the("centroecograf").selectedIndex].text)

        configuracion.append("paciente_ecografista", the("ecografista").value)
        configuracion.append("paciente_ecografista_txt", the("ecografista").options[the("ecografista").selectedIndex].text)

        fetch('https://api.crecimientofetal.cl/config/paciente', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
            .then(data => {
                make.alert("Paciente guardado")
                loadPacientesTabla();
            })
    }
})

$( document ).ready(function() {
    $("input").on("keypress",function( e ) {
        var key_enter = ["nombre-paciente", "id-paciente", "fono-paciente", "email-paciente", "motivo-examen"];

        if ( e.which == 13 ) {
           e.preventDefault();
           if (key_enter.includes(this.id)== true){
                let pos = key_enter.indexOf(this.id);
                the(key_enter[pos+1]).focus();
           }
        }
    });  
});