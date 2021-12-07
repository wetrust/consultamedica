//controlador de cosas raras que pasan el la portada
import { make, the } from './wetrust.js'

$(document).ready(function(){
    $("#punto\\.uno").on("click", function(){
        reiniciaBotones();
        reiniciarMensajes();
        if (this.classList.contains("active") == false){
            reiniciaPuntitos();
            the("boton.datos.iniciales").classList.add("active");
            this.classList.add("active");
            the("mensaje.uno").classList.remove("d-none");
            ocultarPrincipal();
        }else{
            reiniciaPuntitos();
        }
    });
    $("#punto\\.dos").on("click", function(){
        reiniciaBotones();
        reiniciarMensajes();
        if (this.classList.contains("active") == false){
            reiniciaPuntitos();
            the("menu.modulo.activo").classList.add("active");
            this.classList.add("active");
            ocultarPrincipal();
            the("mensaje.dos").classList.remove("d-none");
        }else{
            reiniciaPuntitos();
        }
    });
    $("#punto\\.tres").on("click", function(){
        reiniciaBotones();
        reiniciarMensajes();
        if (this.classList.contains("active") == false){
            reiniciaPuntitos();
            the("menu.modulo.construccion").classList.add("active");
            this.classList.add("active");
            ocultarPrincipal();
            the("mensaje.tres").classList.remove("d-none");
        }else{
            reiniciaPuntitos();
        }
    });
    $("#punto\\.cuatro").on("click", function(){
        reiniciaBotones();
        reiniciarMensajes();
        if (this.classList.contains("active") == false){
            reiniciaPuntitos();
            the("boton.acerca.de").classList.add("active");
            this.classList.add("active");
            ocultarPrincipal();
            the("mensaje.cuatro").classList.remove("d-none");
        }else{
            reiniciaPuntitos();
        }
    });
    $("#punto\\.cinco").on("click", function(){
        reiniciaBotones();
        reiniciarMensajes();
        if (this.classList.contains("active") == false){
            reiniciaPuntitos();
            the("menu.modulo.activo.cinco").classList.add("active");
            this.classList.add("active");
            ocultarPrincipal();
            the("mensaje.cinco").classList.remove("d-none");
        }else{
            reiniciaPuntitos();
        }
    });

    $("#ver\\.consulta").on("click", function(){
        if (this.checked == true){
            the("pedefes").classList.remove("d-none");
        }else{
            the("pedefes").classList.add("d-none");
        }
    });

    $("#codigoAcceso").on("click", function(){
        let _modal = make.modal("Ingresar");
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
        the(_modal.titulo).innerText = "Ingresar Código Acceso";
        the(_modal.contenido).innerHTML = '<div class="form-group"><label for="Ica">Código Acceso</label><input type="password" class="form-control" id="Ica"><small id="emailHelp" class="form-text text-muted">Ingrese código de acceso para plataforma.</small></div>';

        the("Ica").onkeyup = function(){
            ("barcelona" == this.value) ? window.location.href = "https://crecimientofetal.cl/privado" : "";
        }

        $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

    })


    the("punto.nn").onclick = function(){
        if(the("nn.oculto").classList.contains("d-none") == true){
            the("nn.oculto").classList.remove("d-none")
        }else{
            the("nn.oculto").classList.add("d-none") 
        }
    }
})

function reiniciaPuntitos(){
    the("punto.uno").classList.remove("active");
    the("punto.dos").classList.remove("active");
    the("punto.tres").classList.remove("active");
    the("punto.cuatro").classList.remove("active");
    the("punto.cinco").classList.remove("active");
}

function reiniciaBotones(){
    the("boton.datos.iniciales").classList.remove("active");
    the("menu.modulo.activo").classList.remove("active");
    the("menu.modulo.construccion").classList.remove("active");
    the("boton.acerca.de").classList.remove("active");
    the("menu.modulo.activo.cinco").classList.remove("active");
}

function reiniciarMensajes(){
    the("mensaje.inicio").classList.remove("d-none");

    the("mensaje.uno").classList.add("d-none");
    the("mensaje.dos").classList.add("d-none");
    the("mensaje.tres").classList.add("d-none");
    the("mensaje.cuatro").classList.add("d-none");
    the("mensaje.cinco").classList.add("d-none");
    the("pedefes").classList.add("d-none");
}

function ocultarPrincipal(){
    the("mensaje.inicio").classList.add("d-none");
}