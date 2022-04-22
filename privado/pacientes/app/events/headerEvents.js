import { the, humanDate } from "../../../wetrust.js";
import { appBD } from '../app.js';
import { mainConfig } from "../config/mainConfig.js";
import { mainEvents } from "./mainEvents.js";
import { ordenarDatos } from "../../../pacientes.js";

export class headerEvents{

    static inputOnKeyDown(){

        let valor = this.value
        if (valor != ""){

            the("tablaPacientesDBbody").innerHTML = ""

            if (globalPacientes.length == 0){ return false; }

            let pacientes = globalPacientes.pacientes.slice().sort(function(a, b){
                if(a.paciente_nombre < b.paciente_nombre) { return -1; }
                if(a.paciente_nombre > b.paciente_nombre) { return 1; }
                return 0;
            })
    
            let ordenados = ordenarDatos(pacientes, globalPacientes.exam);

            let resultado = ordenados.slice().filter(eldato => { return String(eldato.get("fecha")).includes(valor); })
            //filtrar por rut
            if (resultado.length > 0){
                headerEvents.createTableElement(resultado);
            }

            resultado = ordenados.slice().filter(eldato => { return String(eldato.get("rut")).includes(valor); })
            //filtrar por rut
            if (resultado.length > 0){
                headerEvents.createTableElement(resultado);
            }

            resultado = ordenados.slice().filter(eldato => { return String(eldato.get("nombre")).includes(valor) || String(eldato.get("nombre")).includes(String(valor.uper).toUpperCase()); })
            //filtrar por rut
            if (resultado.length > 0){
                headerEvents.createTableElement(resultado);
            }

            resultado = ordenados.slice().filter(eldato => { return String(eldato.get("apellido")).includes(valor) || String(eldato.get("apellido")).includes(String(valor.uper).toUpperCase()); })
            //filtrar por rut
            if (resultado.length > 0){
                headerEvents.createTableElement(resultado);
            }

            resultado = ordenados.slice().filter(eldato => { return String(eldato.get("centro")).includes(valor) || String(eldato.get("centro")).includes(String(valor.uper).toUpperCase()); })
            //filtrar por rut
            if (resultado.length > 0){
                headerEvents.createTableElement(resultado);
            }

            resultado = ordenados.slice().filter(eldato => { return String(eldato.get("tipo")).includes(valor) || String(eldato.get("tipo")).includes(String(valor.uper).toUpperCase()); })
            //filtrar por rut
            if (resultado.length > 0){
                headerEvents.createTableElement(resultado);
            }
        }
    }

    static createTableElement(pacientes){


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

            fecha.innerText = humanDate(value.get("fecha"));
            eg.innerText = value.get("eg");
            rut.innerText = value.get("rut");
            nombre.innerText = value.get("nombre");
            apellido.innerText = value.get("apellido");
            centroEco.innerText = value.get("centro");
            tipoEco.innerText = value.get("tipo");

            let verEco = document.createElement("td")
            verEco.dataset.id = value.get("id")
            verEco.innerHTML = mainConfig.iconLupa
            verEco.onclick = mainEvents.traerPaciente
    
            let elimEco = document.createElement("td")
            elimEco.dataset.id = value.get("id")
            elimEco.innerHTML = mainConfig.iconBasura
            elimEco.onclick = mainEvents.eliminarPaciente

            tr.appendChild(fecha);
            tr.appendChild(eg);
            tr.appendChild(rut);
            tr.appendChild(nombre);
            tr.appendChild(apellido);
            tr.appendChild(centroEco);
            tr.appendChild(tipoEco);
            tr.appendChild(verEco);
            tr.appendChild(elimEco);

            the("tablaPacientesDBbody").appendChild(tr);
        })

    }

    static clearFilter(){

        let viewDB = new appBD
        viewDB.run();

    }
}