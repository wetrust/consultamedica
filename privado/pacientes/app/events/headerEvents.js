import { the, humanDate, inputDate } from "../../../wetrust.js";
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

            let ordenados = ordenarDatos(globalPacientes.pacientes, globalPacientes.exam);

            var startDate = new Date(document.getElementById("filtro_fecha_desde").value)
            var endDate = new Date(document.getElementById("filtro_fecha_hasta").value)

            var resultado = ordenados.slice().filter(eldato => {
                var date = new Date(inputDate(eldato.get("fecha")));
                return (date >= startDate && date <= endDate);
            });

            mainConfig.filterElements.forEach(function(value){
                if (the(value.name).value != ""){
                    switch (value.filter) {
                        case 'paciente_rut':
                            resultado = resultado.filter(eldato => { return String(eldato.get("rut")).includes(the(value.name).value); })
                            break;
                        case 'paciente_nombre':
                            resultado = resultado.filter(eldato => { return String(eldato.get("nombre")).toLowerCase().includes(String(the(value.name).value).toLowerCase()); })
                            break;
                        case 'paciente_apellido':
                            resultado = resultado.filter(eldato => { return String(eldato.get("apellido")).toLowerCase().includes(String(the(value.name).value).toLowerCase()); })
                            break;
                        case 'paciente_centro':
                            resultado = resultado.filter(eldato => { return String(eldato.get("centro")).toLowerCase().includes(String(the(value.name).value).toLowerCase()); })
                            break;
                        case 'paciente_tipo':
                            resultado = resultado.filter(eldato => { return String(eldato.get("tipo")).toLowerCase().includes(String(the(value.name).value).toLowerCase()); })
                            break;
                    }
                }
            })

            if (resultado.length > 0){
                headerEvents.createTableElement(resultado);
            }else{
                headerEvents.createTableElement([]); 
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

    static oldMonth(){
        let date = new Date();
        date.setMonth(date.getMonth() - 1);
        return date;
    }
}