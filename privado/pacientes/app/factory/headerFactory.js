
import { inputDate } from "../../../wetrust.js";
import { mainConfig } from "../config/mainConfig.js";
import { headerEvents } from "../events/headerEvents.js";

export class headerFactory{

    interfaceFiltros(){
        return this.crearTarjeta();
    }

    crearTarjeta(){
        let tj = document.createElement("div");
        tj.classList.add("card", "mb-3", "mt-2", "shadow")

        let tjBody = document.createElement("div");
        tjBody.classList.add("card-body", "d-flex", "flex-row")

        tjBody.appendChild(this.crearTitulo());

        let _this = this;

        mainConfig.filterElements.forEach(function(value){
            tjBody.appendChild(_this.crearInput(value));
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

    crearInput(valor){
        let contenedor = document.createElement("div");
        contenedor.classList.add("form-group", "mb-0", "mx-2");

        let input = document.createElement("input");
        input.type = valor.type
        input.name = valor.name
        input.dataset.filter = valor.filter
        input.placeholder = valor.placeholder
        input.classList.add("form-control");

        if (valor.type == "date"){
            input.value = inputDate();
        }

        input.onkeyup = headerEvents.inputOnKeyDown

        contenedor.appendChild(input);

        return contenedor;
    }

    crearBotonBorrar(){
        let contenedor = document.createElement("div");
        contenedor.classList.add("form-group", "mb-0", "text-center", "ml-auto");

        let boton = document.createElement("button");
        boton.classList.add("btn", "btn-primary")
        boton.type = "button"
        boton.innerText = "Borrar filtro";
        boton.onclick = headerEvents.clearFilter

        contenedor.appendChild(boton);
        return contenedor;
    }

}