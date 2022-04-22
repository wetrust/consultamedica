import { make, the } from "../../../wetrust.js";
import { mainFactory } from "../factory/mainFactory.js";

export class mainEvents{
    static eliminarPaciente(){
        make.deleteModal("el paciente", this.dataset.id, function(){
            $("#"+this.dataset.modal).modal("hide")
            fetch('https://api.crecimientofetal.cl/config/eliminar/'+this.dataset.delete).then(response => response.json())
            .then(data => {
                the("notificacionText").innerText = "Paciente Eliminado"
                $('#notificacion').toast('show')
                mainFactory.interfaceTabla();
            })
        });
    }
}