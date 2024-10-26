import { the } from "../wetrust.js";

the("utUbicacion1").onchange = function(){
    the("utUbicacion1").onkeyup()
}

the("utUbicacion1").onkeyup = function(){

    if (this.value == "histerectomizada previamente"){

        the("utUbicacion2").parentElement.classList.add("d-none")
        the("cuerpoUterino").parentElement.classList.add("d-none")
        the("uteroDim1").parentElement.parentElement.parentElement.classList.add("d-none")
        the("uternoVolumen").parentElement.parentElement.classList.add("d-none")

    }else{

        the("utUbicacion2").parentElement.classList.remove("d-none")
        the("cuerpoUterino").parentElement.classList.remove("d-none")
        the("uteroDim1").parentElement.parentElement.parentElement.classList.remove("d-none")
        the("uternoVolumen").parentElement.parentElement.classList.remove("d-none")

    }

}

the("endometDesc1").onchange = function(){
    the("endometDesc1").onkeyup()
}

the("endometDesc1").onkeyup = function(){

    if (this.value == "no procede"){

        the("endometGrosor").parentElement.classList.add("d-none")
        the("endometDesc2").parentElement.classList.add("d-none")
        the("endometrioBordes").parentElement.classList.add("d-none")
        the("endometObs").parentElement.classList.add("d-none")

    }else{

        the("endometGrosor").parentElement.classList.remove("d-none")
        the("endometDesc2").parentElement.classList.remove("d-none")
        the("endometrioBordes").parentElement.classList.remove("d-none")
        the("endometObs").parentElement.classList.remove("d-none")

    }

}