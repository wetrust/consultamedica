export class mainFactory{

    interfaceTabla(){

        return this.crearTarjeta();
    }

    crearTarjeta(){
        let tj = document.createElement("div");
        tj.classList.add("card", "mb-3")

        let tjBody = document.createElement("div");
        tjBody.classList.add("card-body")

        tj.appendChild(tjBody);
        return tj;
    }
}