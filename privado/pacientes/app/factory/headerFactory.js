
import { inputDate } from "../../../wetrust";
import { mainConfig } from "../config/mainConfig";
import { headerEvents } from "../events/headerEvents";

export class headerFactory{

    interfaceFiltros(){
        return this.crearTarjeta();
    }

    crearTarjeta(){
        let tj = document.createElement("div");
        tj.classList.add("card", "mb-3")

        let tjBody = document.createElement("div");
        tjBody.classList.add("card-body", "d-flex", "flex-row")


        tjBody.appendChild(this.crearTitulo());

        mainConfig.filterElements.forEach(function(value){
            let contenedor = document.createElement("div");
            contenedor.classList.add("form-group", "mb-0");

            let input = document.createElement("input");
            input.type = value.type
            input.name = value.name
            input.dataset.filter = value.filter
            input.placeholder = value.placeholder

            if (value.type == "date"){
                input.value = inputDate();
            }

            input.onkeyup = headerEvents.inputOnKeyDown

        })

        tjBody.appendChild(this.crearBotonBorrar());

        tj.appendChild(tjBody);
        return tj;
    }

    crearTitulo(){
        let titulo = document.createElement("p")
        titulo.classList.add("mb-0", "mr-2", "align-self-center");

        titulo.innerHTML = mainConfig.iconFiltro + " Filtrar por:";

        return titulo;
    }

    crearBotonBorrar(){
        return document.createElement("div");
    }

}