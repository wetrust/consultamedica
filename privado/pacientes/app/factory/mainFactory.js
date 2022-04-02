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

        let headTabla = document.createElement("thead");
        headTabla.classList.add("thead-dark");

        let trHeadTabla = document.createElement("tr");
        let thHeadElementos = ["Fecha Ult. Exm.", "EG", "RUT", "Nombre", "Apellido", "Centro Eco", "Tipo de Eco", "Ver", "Elim."];

        let bodyTabla = document.createElement("tbody");

        thHeadElementos.forEach(function(value){
            let _elemento = document.createElement("td");
            _elemento.innerText = value;

            trHeadTabla.appendChild(_elemento);
        })

        headTabla.appendChild(trHeadTabla);
        tabla.appendChild(headTabla);
        tabla.appendChild(bodyTabla);

        return tabla;
    }
}