import { the } from './wetrust.js'


the("comparacion.graficas").onclick = function(){
    if (this.checked == true){
        the("comparacion.graficas.div").classList.remove("d-none");
    }else{
        the("comparacion.graficas.div").classList.add("d-none");
    }
}