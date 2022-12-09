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

            let resultado = headerEvents.filtrarDatos()

            if (resultado.length > 0){
                headerEvents.createTableElement(resultado);
            }else{
                headerEvents.createTableElement([]); 
            }
        }
    }

    static filtrarDatos(){

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

        return resultado;

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

    static verSeleccion(){

        let datos = headerEvents.filtrarDatos()

        let procesados = headerEvents.tablaImpresion(datos)

        headerEvents.prepararImpresion(procesados)
    }

    static tablaImpresion(datos){

        var tTable = document.createElement("table");
        tTable.classList.add("table", "table-striped", "table-hover", "table-sm");
        var tHead = document.createElement("thead");
        tHead.classList.add("thead-dark");

        var trHead = document.createElement("tr")
        var ths = ["Fecha Ult. Exm.", "EG", "RUT", "Nombre", "Apellido", "Centro Eco", "Tipo de Eco"]

        for(let a = 0; a == ths.length; a++){
            let thHead = document.createElement("th");
            thHead.textContent= ths[a];
            trHead.appendChild(thHead);
        }

        tHead.appendChild(trHead);

        var tBody = document.createElement("tbody");

        datos.forEach(function(value){
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
                eg.innerText = value.get("eg") + " sem.";
                rut.innerText = value.get("rut");
                nombre.innerText = value.get("nombre");
                apellido.innerText = value.get("apellido");
                centroEco.innerText = value.get("centro");
                tipoEco.innerText = value.get("tipo");

                tr.appendChild(fecha);
                tr.appendChild(eg);
                tr.appendChild(rut);
                tr.appendChild(nombre);
                tr.appendChild(apellido);
                tr.appendChild(centroEco);
                tr.appendChild(tipoEco);
    
                tBody.appendChild(tr);
        })

        tTable.appendChild(tHead);
        tTable.appendChild(tBody);

        return tTable;

    }

    static prepararImpresion(datos){

        var document = '<!DOCTYPE html><html lang="es-CL"> <head> <meta charset="utf-8"/> <title>Impresión</title> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>  :ESTILO </head> <body> <div class="container"></div><div class="container" style="margin-top: 50px !important;">:DATOS</div>:FUNCION </body></html>';
        var ventimp = window.open(" ","popimpr");
        var estilo = '<style>@page { size: landscape;}; *, ::after, ::before{box-sizing: border-box;}body{margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 0.5rem; font-weight: 400; line-height: 1.5; color: #212529; background-color: #fff; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent;} td, th {border: 1px solid #dddddd;text-align: left;padding: 4px;}tr:nth-child(even) {background-color: #dddddd;}</style>';
        var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';

        document = document.replace(/:DATOS/g, datos.outerHTML);

        document = document.replace(/:ESTILO/g, estilo);
        document = document.replace(/:FUNCION/g, funcion);
        ventimp.document.write(document);
        ventimp.document.close();

    }
}