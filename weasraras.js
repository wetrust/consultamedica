//controlador de cosas raras que pasan el la portada
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
            the("imagen.dos").classList.remove("d-none");
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
            the("imagen.tres").classList.remove("d-none");
            the("referencia.tres").classList.remove("d-none");
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

            the("caja.final").classList.remove("d-none");
            the("caja.final").classList.add("d-flex");

            the("imagen.cuatro").classList.remove("d-none");
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

            the("caja.final").classList.remove("d-none");
            the("caja.final").classList.add("d-flex");

            the("imagen.cinco").classList.remove("d-none");
        }else{
            reiniciaPuntitos();
        }
    });
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
    the("imagen.logo.oficial").classList.remove("d-none");

    the("mensaje.uno").classList.add("d-none");
    the("mensaje.dos").classList.add("d-none");
    the("mensaje.tres").classList.add("d-none");
    the("mensaje.cuatro").classList.add("d-none");
    the("mensaje.cinco").classList.add("d-none");

    the("imagen.dos").classList.add("d-none");
    the("imagen.tres").classList.add("d-none");
    the("imagen.cuatro").classList.add("d-none");
    the("imagen.cinco").classList.add("d-none");
    the("referencia.tres").classList.add("d-none");
    the("caja.final").classList.add("d-none");
    the("caja.final").classList.remove("d-flex");
}

function ocultarPrincipal(){
    the("mensaje.inicio").classList.add("d-none");
    the("imagen.logo.oficial").classList.add("d-none");
}