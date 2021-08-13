import { the, these } from './wetrust.js'

var iconos ={
    "lupa" : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>'
}

function loadPacientesTabla(){
    
    fetch('https://api.crecimientofetal.cl/config/pacienteAll').then(response => response.json())
    .then(data => {
        
        the("tablaListaPacientes").innerHTML = "";

        data.forEach(function myFunction(value, index, array) {

            let tr = document.createElement("tr");
            let nombre = document.createElement("td")
            let rut = document.createElement("td")
            let motivo = document.createElement("td")
            let profesional = document.createElement("td")

            nombre.innerText = value.paciente_nombre
            rut.innerText = value.paciente_rut
            motivo.innerText = value.paciente_motivo_txt
            profesional.innerText = value.paciente_referente_txt

            let ver = document.createElement("td")
            ver.dataset.id = value.paciente_id
            ver.classList.add("click-paciente")
            ver.innerHTML = iconos["lupa"]

            tr.appendChild(rut)
            tr.appendChild(nombre)
            tr.appendChild(motivo)
            tr.appendChild(profesional)
            tr.appendChild(ver)

            the("tablaListaPacientes").appendChild(tr);
        });
    })
}

$(document).ready(function(){
    loadPacientesTabla();

    the("guardarElPaciente").onclick = function(){
        let configuracion = new FormData()

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
                loadPacientesTabla();
            })
    }
})