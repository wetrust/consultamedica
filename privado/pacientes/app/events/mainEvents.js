import { make, the, inputDate, these } from "../../../wetrust.js";
import { mainFactory } from "../factory/mainFactory.js";
import { loadEcoPrecozTabla, loadEcoCrecimientoTabla, loadEcoDopplerTabla, loadEcoGineTabla } from "../../../guardar.js";
import { construirTablaPacientes } from "../../../pacientes.js";

export class mainEvents{

    static eliminarPaciente(){
        make.deleteModal("el paciente", this.dataset.id, function(){
            $("#"+this.dataset.modal).modal("hide")

            fetch('https://api.crecimientofetal.cl/config/eliminar/'+this.dataset.delete).then(response => response.json())
            .then(data => {
                the("notificacionText").innerText = "Paciente Eliminado"
                $('#notificacion').toast('show')

                fetch('https://api.crecimientofetal.cl/config/pacienteAll').then(response => response.json())
                .then(data => {
                    globalPacientes = data;
                    construirTablaPacientes(globalPacientes.pacientes, globalPacientes.exam);
                    mainFactory.interfaceTabla();
                })
            })
        });
    }

    static traerPaciente(){
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
            the("edad.ecoprim").value = data.paciente_edad

            the("nombre.gine").value = data.paciente_nombre
            the("apellido.gine").value = data.paciente_apellido
            the("edad.gine").value = data.paciente_edad

            the("nombre.crecim").value = data.paciente_nombre
            the("apellido.crecim").value = data.paciente_apellido
            the("edad.crecim").value = data.paciente_edad

            the("nombre.doppler").value = data.paciente_nombre
            the("apellido.doppler").value = data.paciente_apellido
            the("edad.doppler").value = data.paciente_edad

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
            the("centro.ecografico").value = data.paciente_centro
            the("tipoecografia").value = data.paciente_tipoeco

            the("ecografista").value = data.paciente_ecografista_txt

            the("notificacionText").innerText = "Paciente Cargado"
            $('#notificacion').toast('show')

            loadEcoPrecozTabla(data.paciente_rut)
            loadEcoCrecimientoTabla(data.paciente_rut)
            loadEcoDopplerTabla(data.paciente_rut)
            loadEcoGineTabla(data.paciente_rut)

            globalPreguntoEg = true

            if (data.paciente_tipoeco_txt == "Ecografía obstétrica precoz"){
                document.location.hash = "#ecoObsPrimTrim"
            }else if (data.paciente_tipoeco_txt == "Ecografía Ginecológica"){ 
                document.location.hash = "#ecoGinecologica"
            }else if (data.paciente_tipoeco_txt == "Evaluación crecimiento"){ 
                document.location.hash = "#ecoObsSegTrim"
            }

        })
    }
}