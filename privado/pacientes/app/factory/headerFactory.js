
import { inputDate } from "../../../wetrust.js";
import { mainConfig } from "../config/mainConfig.js";
import { headerEvents } from "../events/headerEvents.js";

export class headerFactory{

    interfaceTarjeta(){

        return this.crearTarjeta();

    }

    crearTarjeta(){

        let tj = document.createElement("div");
        tj.classList.add("card", "mb-3", "mt-2", "shadow-sm")

        let tjBody = document.createElement("div");
        tjBody.classList.add("card-body")

        tjBody.appendChild(this.crearFiltros());
        tjBody.appendChild(this.crearBotones());

        tj.appendChild(tjBody);
        return tj;

    }

    crearFiltros(){

        let contenedor = document.createElement("div");
        contenedor.classList.add("d-flex", "flex-row");

        contenedor.appendChild(this.crearTitulo());

        let _this = this;

        mainConfig.filterElements.forEach(function(value){
            contenedor.appendChild(_this.crearInput(value));
        })

        return contenedor;

    }

    crearBotones(){

        let contenedor = document.createElement("div");
        contenedor.classList.add("d-flex", "justify-content-center");

        contenedor.appendChild(this.crearBotonBorrar());
        contenedor.appendChild(this.crearBotonVerImprimir());

        return contenedor;

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
        input.id = valor.name
        input.dataset.filter = valor.filter
        input.placeholder = valor.placeholder
        input.classList.add("form-control");

        if (valor.type == "date" && valor.name == "filtro_fecha_desde"){
            input.value = inputDate(headerEvents.oldMonth());
        }else if (valor.type == "date"){
            input.value = inputDate();
        }

        input.onkeyup = headerEvents.inputOnKeyDown
        input.onchange = headerEvents.inputOnKeyDown

        if (valor.special == true){
            input.setAttribute("list", valor.name+"List");

            let dList = document.createElement("datalist");
            dList.id = valor.name+"List";

            if (valor.advanced == true){
                for (var i = 0; i < valor.data.length; i++) {
                    let _m = document.createElement("option")
                    _m.value = valor.data[i]

                    dList.appendChild(_m);
                }
            }else{
                let conf = JSON.parse(localStorage["configuracion"])

                if (conf[valor.config].length > 0) {
                    for (var i = 0; i < conf[valor.config].length; i++) {
                        let _m = document.createElement("option")
                        _m.value = conf[valor.config][i]
    
                        dList.appendChild(_m);
                    }
                }
            }

            contenedor.appendChild(dList);
        }

        contenedor.appendChild(input);

        return contenedor;
    }

    crearBotonBorrar(){

        let contenedor = document.createElement("div");
        contenedor.classList.add("form-group", "mb-0", "text-center");

        let boton = document.createElement("button");
        boton.classList.add("btn", "btn-primary", "p-1")
        boton.type = "button"
        boton.innerText = "Borrar filtro";
        boton.onclick = headerEvents.clearFilter

        contenedor.appendChild(boton);
        return contenedor;

    }

    crearBotonVerImprimir(){

        let contenedor = document.createElement("div");
        contenedor.classList.add("form-group", "mb-0", "text-center");

        let boton = document.createElement("button");
        boton.classList.add("btn", "btn-primary", "p-1", "ml-2")
        boton.type = "button"
        boton.innerText = "Ver selección";
        //boton.onclick = headerEvents.clearFilter

        contenedor.appendChild(boton);
        return contenedor;

    }

}