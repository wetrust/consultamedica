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
        tTable.classList.add("table", "table-striped", "table-hover");
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
                eg.innerText = value.get("eg");
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

        var document = '<!DOCTYPE html><html lang="es-CL"> <head> <meta charset="utf-8"/> <title>Impresión</title> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/> <link rel="stylesheet" href="consulta.css"/> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> :ESTILO </head> <body> <div class="container"></div><div class="container" style="margin-top: 50px !important;">:DATOS</div>:FUNCION </body></html>';
        var ventimp = window.open(" ","popimpr");
        var estilo = '<style>@media print{.newpage{ page-break-before: always; margin-bottom:5rem; }.pie-pagina{font-size:0.9rem;}.pie-pagina-dos{font-size:1rem;}*, ::after, ::before{box-sizing: border-box;}body{margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529; background-color: #fff; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent;}[tabindex="-1"]:focus:not(:focus-visible){outline: 0 !important;}hr{margin: 1rem 0; color: inherit; background-color: currentColor; border: 0; opacity: 0.25;}hr:not([size]){height: 1px;}h1, h2, h3, h4, h5, h6{margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2;}h1{font-size: calc(1.375rem + 1.5vw);}h2{font-size: calc(1.325rem + 0.9vw);}h3{font-size: calc(1.3rem + 0.6vw);}h4{font-size: calc(1.275rem + 0.3vw);}h5{font-size: 1.25rem;}h6{font-size: 1rem;}p{margin-top: 0; margin-bottom: 1rem;}ol, ul{padding-left: 2rem;}dl, ol, ul{margin-top: 0; margin-bottom: 1rem;}ol ol, ol ul, ul ol, ul ul{margin-bottom: 0;}b, strong{font-weight: bolder;}small{font-size: 0.875em;}mark{padding: 0.2em; background-color: #fcf8e3;}sub, sup{position: relative; font-size: 0.75em; line-height: 0; vertical-align: baseline;}sub{bottom: -0.25em;}sup{top: -0.5em;}a{color: #0d6efd; text-decoration: underline;}a:hover{color: #024dbc;}a:not([href]):not([class]), a:not([href]):not([class]):hover{color: inherit; text-decoration: none;}code, kbd, pre, samp{font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 1em;}pre{display: block; margin-top: 0; margin-bottom: 1rem; overflow: auto; font-size: 0.875em; -ms-overflow-style: scrollbar;}pre code{font-size: inherit; color: inherit; word-break: normal;}code{font-size: 0.875em; color: #d63384; word-wrap: break-word;}a > code{color: inherit;}.membrete{margin-top:2rem;}.membrete::first-letter{font-size: 1.3rem;}.membrete::first-line{font-size: 1.3rem;}table{caption-side: bottom; border-collapse: collapse;}caption{padding-top: 0.5rem; padding-bottom: 0.5rem; color: #6c757d; text-align: left;}th{text-align: inherit; text-align: -webkit-match-parent;}tbody, td, tfoot, th, thead, tr{border-color: inherit; border-style: solid; border-width: 0;}label{display: inline-block;}[hidden]{display: none !important;}.pie-pagina-dos{font-size: 10px;}#lineclear{clear: both;}.table{--bs-table-bg: transparent; --bs-table-accent-bg: transparent; --bs-table-striped-color: #212529; --bs-table-striped-bg: rgba(0, 0, 0, 0.05); --bs-table-active-color: #212529; --bs-table-active-bg: rgba(0, 0, 0, 0.1); --bs-table-hover-color: #212529; --bs-table-hover-bg: rgba(0, 0, 0, 0.075); width: 100%; margin-bottom: 1rem; color: #212529; vertical-align: top; border-color: #dee2e6;}.table > :not(caption) > * > *{padding: 0.5rem 0.5rem; background-color: var(--bs-table-bg); background-image: linear-gradient(var(--bs-table-accent-bg), var(--bs-table-accent-bg)); border-bottom-width: 1px;}.table > tbody{vertical-align: inherit;}.table > thead{vertical-align: bottom;}.table > :not(:last-child) > :last-child > *{border-bottom-color: currentColor;}.caption-top{caption-side: top;}.table-sm > :not(caption) > * > *{padding: 0.25rem 0.25rem;}.table-bordered > :not(caption) > *{border-width: 1px 0;}.table-bordered > :not(caption) > * > *{border-width: 0 1px;}.table-borderless > :not(caption) > * > *{border-bottom-width: 0;}.table-striped > tbody > tr:nth-of-type(odd){--bs-table-accent-bg: var(--bs-table-striped-bg); color: var(--bs-table-striped-color);}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg); color: var(--bs-table-active-color);}.table-hover > tbody > tr:hover{--bs-table-accent-bg: var(--bs-table-hover-bg); color: var(--bs-table-hover-color);}.table-primary{--bs-table-bg: #bbd6fe; --bs-table-striped-bg: #b3cdf3; --bs-table-striped-color: #212529; --bs-table-active-bg: #acc4e9; --bs-table-active-color: #212529; --bs-table-hover-bg: #afc9ee; --bs-table-hover-color: #212529; color: #212529; border-color: #acc4e9;}.table-secondary{--bs-table-bg: #d6d8db; --bs-table-striped-bg: #cdcfd2; --bs-table-striped-color: #212529; --bs-table-active-bg: #c4c6c9; --bs-table-active-color: #212529; --bs-table-hover-bg: #c8cbce; --bs-table-hover-color: #212529; color: #212529; border-color: #c4c6c9;}.table-success{--bs-table-bg: #c3e6cb; --bs-table-striped-bg: #bbdcc3; --bs-table-striped-color: #212529; --bs-table-active-bg: #b3d3bb; --bs-table-active-color: #212529; --bs-table-hover-bg: #b7d8bf; --bs-table-hover-color: #212529; color: #212529; border-color: #b3d3bb;}.table-info{--bs-table-bg: #bee5eb; --bs-table-striped-bg: #b6dbe1; --bs-table-striped-color: #212529; --bs-table-active-bg: #aed2d8; --bs-table-active-color: #212529; --bs-table-hover-bg: #b2d7dc; --bs-table-hover-color: #212529; color: #212529; border-color: #aed2d8;}.table-warning{--bs-table-bg: #ffeeba; --bs-table-striped-bg: #f4e4b3; --bs-table-striped-color: #212529; --bs-table-active-bg: #e9daac; --bs-table-active-color: #212529; --bs-table-hover-bg: #eedfaf; --bs-table-hover-color: #212529; color: #212529; border-color: #e9daac;}.table-danger{--bs-table-bg: #f5c6cb; --bs-table-striped-bg: #eabec3; --bs-table-striped-color: #212529; --bs-table-active-bg: #e0b6bb; --bs-table-active-color: #212529; --bs-table-hover-bg: #e5babf; --bs-table-hover-color: #212529; color: #212529; border-color: #e0b6bb;}.table-light{--bs-table-bg: #f8f9fa; --bs-table-striped-bg: #edeef0; --bs-table-striped-color: #212529; --bs-table-active-bg: #e3e4e5; --bs-table-active-color: #212529; --bs-table-hover-bg: #e8e9ea; --bs-table-hover-color: #212529; color: #212529; border-color: #e3e4e5;}.table-dark{--bs-table-bg: #343a40; --bs-table-striped-bg: #3e444a; --bs-table-striped-color: #fff; --bs-table-active-bg: #484e53; --bs-table-active-color: #fff; --bs-table-hover-bg: #43494e; --bs-table-hover-color: #fff; color: #fff; border-color: #484e53;}.table-responsive{overflow-x: auto; -webkit-overflow-scrolling: touch;}}</style>';
        var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
        
        document = document.replace(/:DATOS/g, datos.outerHTML);

        document = document.replace(/:ESTILO/g, estilo);
        document = document.replace(/:FUNCION/g, funcion);
        ventimp.document.write(document);
        ventimp.document.close();

    }
}