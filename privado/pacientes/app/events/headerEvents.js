import { the } from "../../../wetrust.js";
import { appBD } from '../app.js';

export class headerEvents{

    static inputOnKeyDown(){
        let valor = this.value
        if (valor != ""){

            the("tablaPacientesDBbody").innerHTML = ""

            let hEvents = new headerEvents()

            if (globalPacientes.length == 0){ return false; }

            let pacientes = globalPacientes.pacientes.slice().sort(function(a, b){
                if(a.paciente_nombre < b.paciente_nombre) { return -1; }
                if(a.paciente_nombre > b.paciente_nombre) { return 1; }
                return 0;
            })

            let resultado = pacientes.slice().filter(eldato => { return eldato.paciente_rut.includes(valor); })
            //filtrar por rut
            if (resultado.length > 0){
                hEvents.createTableElement(resultado);
            }

            resultado = pacientes.slice().filter(eldato => { return eldato.paciente_nombre.includes(valor); })
            //filtrar por rut
            if (resultado.length > 0){
                hEvents.createTableElement(resultado);
            }

            resultado = pacientes.slice().filter(eldato => { return eldato.paciente_apellido.includes(valor); })
            //filtrar por rut
            if (resultado.length > 0){
                hEvents.createTableElement(resultado);
            }

            resultado = pacientes.slice().filter(eldato => { return eldato.paciente_centro_txt.includes(valor); })
            //filtrar por rut
            if (resultado.length > 0){
                hEvents.createTableElement(resultado);
            }

            resultado = pacientes.slice().filter(eldato => { return eldato.paciente_tipoeco_txt.includes(valor); })
            //filtrar por rut
            if (resultado.length > 0){
                hEvents.createTableElement(resultado);
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

            fecha.innerText = humanDate(fechas.toDate(value.paciente_fee));
            eg.innerText = value.paciente_eg;
            rut.innerText = value.paciente_rut;
            nombre.innerText = value.paciente_nombre;
            apellido.innerText = value.paciente_apellido;
            centroEco.innerText = value.paciente_centro_txt;
            tipoEco.innerText = value.paciente_tipoeco_txt;

            tr.appendChild(fecha)
            tr.appendChild(eg)
            tr.appendChild(rut)
            tr.appendChild(nombre)
            tr.appendChild(apellido)
            tr.appendChild(centroEco)
            tr.appendChild(tipoEco)

            the("tablaPacientesDBbody").appendChild(tr);
        })
    }

    static clearFilter(){
        let viewDB = new appBD
        viewDB.run();
    }
}