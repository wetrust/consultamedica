import { make, the } from './wetrust.js'

$(document).ready(function(){
    let req = new FormData()
    req.append("user_id", 2)

    fetch('https://api.crecimientofetal.cl/api/archivos', {method: 'POST',body: req, mode: 'cors'}).then(response => response.json())
    .then(data => {
        if (data.success){
            let categorias = []

            $.each(data.data, function(i, item) { categorias.push(item.categoria_text) })

            //remover repetidos
            let unique = [...new Set(categorias)];

            //escribir todas las categorias
            $.each(unique, function(i, item) {
                let ul = '<p class="mt-2 mb-0">'+item+'</p><ul>'

                let archivosInCategorias = data.data.filter(archivo => { return archivo.categoria_text === item; });

                $.each(archivosInCategorias, function(i, item) {
                    ul += '<li>'+ item.archivo_text
                    if (item.archivo_private == "1"){
                        ul += ' (restringido)'
                    }
                    ul += ' <a class="getfile" data-id="'+item.archivo_id+'" data-private="'+item.archivo_private+'">Ver</a></li>'
                })
                ul += '</ul>'

                $("#ppt\\.relacionados").append(ul);
            })

            $(".getfile").off("click", getfile);
            $(".getfile").on("click", getfile);
        }
    }).catch(function(error) {
        alert("error al cargar ppt")
    });
});

function getfile(){
    var private = this.dataset.private;
    var file =  this.dataset.id;

    if (private == 1){
        let _modal = make.modal("Solicitar archivo");

        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
        the(_modal.titulo).innerHTML = "Escribir E-Mail de acceso validado";
        the(_modal.titulo).classList.add("mx-auto");
        the(_modal.titulo).parentElement.classList.add("bg-info", "text-white");

        var _correo = uuidv4();
        var _solicitud = uuidv4();
        let _contenido = '<div class="row"><div class="col-12"><div class="form-group"><input id="'+_correo+'" class="form-control" type="email"><p>Si aún no dispone de acceso <button type="button" class="btn btn-link"  id="'+_solicitud+'">active solicitud</button></p></div></div></div>'

        the(_modal.contenido).innerHTML = _contenido;
        the(_modal.id).children[0].classList.remove("modal-lg");
        the(_modal.button).dataset.file = file;
        the(_modal.button).dataset.email = _correo;
        the(_modal.button).dataset.modal = _modal.id;
        the(_solicitud).dataset.modal = _modal.id;
        $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

        the(_modal.button).onclick = function(){
            let email = the(this.dataset.email).value
            this.disabled = true
            the(this.dataset.email).disabled = true
            this.innerHTML = "Cargando.."

            if (email == ""){
                alert("Escriba un E-Mail");
                return false;
            }else{

                $('#'+this.dataset.modal).modal("hide");

                let req = new FormData()
                req.append("archivo_id", this.dataset.file)
                req.append("suscrito_email", email)
                req.append("user_id", 2)

                fetch('https://api.crecimientofetal.cl/api/archivo', {method: 'POST',body: req, mode: 'cors'}).then(response => response.json())
                .then(data => {
                    if (data.success){

                        $("#pdfview").html('<iframe  class="embed-responsive-item" src="'+'https://api.crecimientofetal.cl/archivos/' + data.file +'"></iframe>');
                        $("#pdfviebox").children("ol").children().children().attr("href","#inicio");
                        document.location.hash = "#pdfviebox";

                    }else{
                        alert("No autorizado");
                    }
                })
            }
        }

        the(_solicitud).onclick = function(){
            let _modal = make.modal("Enviar");

            document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
            the(_modal.titulo).innerHTML = "Solicitar acceso";
            the(_modal.titulo).classList.add("mx-auto");
            the(_modal.titulo).parentElement.classList.add("bg-info", "text-white");
            the(_modal.id).children[0].classList.remove("modal-lg");
            $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

            the("cancelarmodal").classList.remove("btn-secondary")
            the("cancelarmodal").classList.add("btn-outline-secondary")

            var _nombre = uuidv4();
            var _email = uuidv4();
            var _mensaje = uuidv4();

            let _contenido = '<div class="row"><div class="col-12 form-group"><label for="'+_nombre+'">Nombre</label><input type="text" class="form-control" id="'+_nombre+'"></div><div class="col-12 form-group"><label for="'+_email+'">Email</label><input type="email" class="form-control" id="'+_email+'"></div><div class="col-12 form-group"><label for="'+_mensaje+'">Mensaje</label><textarea class="form-control" id="'+_mensaje+'" rows="3"></textarea></div></div>';
            the(_modal.contenido).innerHTML = _contenido;

            the(_modal.button).dataset.nombre = _nombre;
            the(_modal.button).dataset.email = _email;
            the(_modal.button).dataset.mensaje = _mensaje;
            $('#'+this.dataset.modal).modal("hide");

            the(_modal.button).onclick = function(){
                let req = new FormData()
                let nombre = this.dataset.nombre
                let email = this.dataset.email
                let mensaje = this.dataset.mensaje
                req.append("nombre", the(nombre).value)
                req.append("email", the(email).value)
                req.append("mensaje", the(mensaje).value)

                $('#'+this.dataset.modal).modal("hide");

                fetch('https://api.crecimientofetal.cl/api/solicitud', {method: 'POST',body: req, mode: 'cors'}).then(response => response.json())
                .then(data => {
                    if (data.success){
                        let _modal = make.modal();
                        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
                        the(_modal.titulo).innerHTML = "Mensaje";
                        the(_modal.titulo).classList.add("mx-auto");
                        the(_modal.titulo).parentElement.classList.add("bg-info", "text-white");
                        the(_modal.id).children[0].classList.remove("modal-lg");
                        $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
                        the(_modal.contenido).innerHTML = '<p>Pronto daremos respuesta a su solicitud y obtendrá acceso temporal a documentos restringidos.</p>';
                        the("cancelarmodal").textContent = "Volver a documentos restrigidos"
                    }else{
                        alert("No disponible");
                    }
                })
            }
        }
    }else{
        let req = new FormData()
        req.append("archivo_id", file)

        fetch('https://api.crecimientofetal.cl/api/archivo', {method: 'POST',body: req, mode: 'cors'}).then(response => response.json())
        .then(data => {
            if (data.success){

                $("#pdfview").html('<iframe  class="embed-responsive-item" src="'+'https://api.crecimientofetal.cl/archivos/' + data.file +'"></iframe>');
                $("#pdfviebox").children("ol").children().children().attr("href","#inicio");

                document.location.hash = "#pdfviebox";
            }else{
                alert("No autorizado");
            }
        })
    }
}