import { fechas } from "../../../functionesM.js";
import { humanDate } from "../../../wetrust.js";
import { mainConfig } from "../config/mainConfig.js";

export class mainFactory{

    interfaceTabla(){
        return this.crearTarjeta();
    }

    crearTarjeta(){
        let tj = document.createElement("div");
        tj.classList.add("card", "mb-3", "shadow")

        let tjBody = document.createElement("div");
        tjBody.classList.add("card-body");

        tjBody.appendChild(this.crearTabla());

        tj.appendChild(tjBody);
        return tj;
    }

    crearTabla(){
        let tabla = document.createElement("table");
        tabla.classList.add("table", "table-striped", "table-hover");

        tabla.appendChild(this.crearHeader());

        tabla.appendChild(this.crearContenido());

        return tabla;
    }

    crearHeader(){
        let headTabla = document.createElement("thead");
        headTabla.classList.add("thead-dark");

        let trHeadTabla = document.createElement("tr");
        let thHeadElementos = ["Fecha Ult. Exm.", "EG", "RUT", "Nombre", "Apellido", "Centro Eco", "Tipo de Eco", "Ver", "Eliminar"];

        thHeadElementos.forEach(function(value){
            let _elemento = document.createElement("th");
            _elemento.innerText = value;

            trHeadTabla.appendChild(_elemento);
        })

        headTabla.appendChild(trHeadTabla);

        return headTabla;
    }

    crearContenido(){
        let bodyTabla = document.createElement("tbody");
        bodyTabla.id = "tablaPacientesDBbody"

        if (globalPacientes.length == 0){ return bodyTabla; }

        let pacientes = globalPacientes.pacientes.slice().sort(function(a, b){
            if(a.paciente_nombre < b.paciente_nombre) { return -1; }
            if(a.paciente_nombre > b.paciente_nombre) { return 1; }
            return 0;
        })

        pacientes.forEach(function(value){
            let _elemento = document.createElement("th");
            _elemento.innerText = value;

            let tr = document.createElement("tr");
            let fecha = document.createElement("td")
            let eg = document.createElement("td")
            let nombre = document.createElement("td")
            let apellido = document.createElement("td")
            let rut = document.createElement("td")
            let centroEco = document.createElement("td")
            let tipoEco = document.createElement("td")

            fecha.innerText = humanDate(fechas.toDate(value.paciente_fee));
            eg.innerText = value.paciente_eg;
            rut.innerText = value.paciente_rut;
            nombre.innerText = value.paciente_nombre;
            apellido.innerText = value.paciente_apellido;
            centroEco.innerText = value.paciente_centro_txt;
            tipoEco.innerText = value.paciente_tipoeco_txt;

            let verEco = document.createElement("td")
            verEco.dataset.id = value.paciente_id
            verEco.innerHTML = mainConfig.iconLupa
            //verEco.onclick = traerPaciente
    
            let elimEco = document.createElement("td")
            elimEco.dataset.id = value.get("id")
            elimEco.innerHTML = mainConfig.iconBasura
            //elimEco.onclick = eliminarPaciente

            tr.appendChild(fecha)
            tr.appendChild(eg)
            tr.appendChild(rut)
            tr.appendChild(nombre)
            tr.appendChild(apellido)
            tr.appendChild(centroEco)
            tr.appendChild(tipoEco)
            tr.appendChild(verEco)
            tr.appendChild(elimEco)

            bodyTabla.appendChild(tr);
        })

        return bodyTabla;
    } 
}