export class make{
    static spinnerGrow(){
        let id = this.uuidv4();
        let struct = '<div class="text-center" id='+id+'><div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status"><span class="sr-only">Cargando...</span></div><p>Cargando..</p></div>';
        return {id:id,html:struct};
    }

    static modal(button){

        let id = this.uuidv4();
        let titulo = this.uuidv4();
        let contenido = this.uuidv4();
        let _buttonID = this.uuidv4();
        let _button = "";

        let _dive = document.createElement("div")
        _dive.classList.add("modal", "fade")
        _dive.tabindex = "-1"
        _dive.role = "dialog"
        _dive.id = id

        let _divw = document.createElement("div")
        _divw.classList.add("modal-dialog", "modal-lg", "modal-dialog-scrollable")
        _divw.role = "document"

        let _divx = document.createElement("div")
        _divx.classList.add("modal-content")
        _divx.id = contenido

        let _divz = document.createElement("div")
        _divz.classList.add("modal-header")
        _divz.id = contenido

        let _divv = document.createElement("h5")
        _divv.classList.add("modal-title")
        _divv.innerText = "Modal title"
        _divv.id = titulo

        _divz.appendChild(_divv)
        _divx.appendChild(_divz)

        let _divy = document.createElement("div")
        _divy.classList.add("modal-body")
        _divy.id = contenido

        _divx.appendChild(_divy)

        let _footer = document.createElement("div")
        _footer.classList.add("modal-footer")

        if (typeof button !== typeof undefined){
            _button = document.createElement("button")
            _button.classList.add("btn", "wetrust")
            _button.type = "button"
            _button.dataset.modal = id
            _button.id = _buttonID
            _button.textContent = button

            _footer.appendChild(_button)
        }

        _button = document.createElement("button")
        _button.classList.add("btn", "btn-outline-secondary")
        _button.type = "button"
        _button.dataset.dismiss = "modal"
        _button.dataset.bsDismiss = "modal"
        _button.textContent = "Cancelar"

        _footer.appendChild(_button)

        _divx.appendChild(_footer)
        _divw.appendChild(_divx)
        _dive.appendChild(_divw)

        let resultado ={ id: id, titulo: titulo, contenido: contenido, button: _button, modal: _dive }

        return resultado;

    }

    static uuidv4() {
        //genera un uuid
        let uid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )

        // genera infinitamente uuid mientras no comience con una letra
        if (isNaN(uid.charAt(0))){
            return uid
        }else{
            return this.uuidv4()
        }
    }

    static alert(mensaje, alerta = false){
        let modal = make.modal();

        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.contenido).innerHTML = mensaje;
        the(modal.titulo).innerHTML = "Mensaje";
        the(modal.titulo).classList.add("mx-auto");
        the(modal.titulo).parentElement.classList.add("text-white");

        if (alerta == true){
            the(modal.titulo).parentElement.classList.add("bg-danger");
        }else{
            the(modal.titulo).parentElement.classList.add("bg-success");
        }

        $("#"+modal.id + " button").html("Aceptar");
        the(modal.id).childNodes[0].classList.remove("modal-lg");
        
        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
    }
    
    static deleteModal(whats, id, callback){
        let modal = make.modal("Eliminar")

        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal)
        
        the(modal.id).childNodes[0].classList.remove("modal-lg")
        the(modal.id).childNodes[0].classList.add("modal-sm")
        the(modal.titulo).innerHTML = "Eliminar"
        the(modal.titulo).classList.add("mx-auto")
        the(modal.titulo).parentElement.classList.add("bg-danger", "text-white")
        
        the(modal.contenido).innerHTML = '<svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-trash mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path></svg><p>Está seguro que desea<br>eliminar '+whats+'</p>'
        the(modal.contenido).classList.add("text-center")
        the(modal.contenido).parentElement.children[2].classList.add("border-top-0")
 
        the(modal.button).dataset.delete = id
        $("#"+modal.button).on("click", callback)
        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); })
    }
}

export class data{
    static async get(url) {
        const response = await fetch(url);
        return await response.json();
    }
    static async post(url, data){
        const response = await fetch(url, {method: 'POST',body: data});
        return await response.json();
    }
}

export function the(id) {
    return document.getElementById(id);
}

export function these(id){
    return document.getElementsByName(id);
}

export function humanDate(date) {
    if (typeof date === typeof undefined){
        date = new Date();
    }
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    return dd+ '-' + mm + '-' + yyyy;
}

export function inputDate(date) {
    if (typeof date === typeof undefined){
        date = new Date();
    }
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    return yyyy + '-' +  mm+ '-' + dd;
}

export function clearSelect(id){
    let select = the(id);
    let length = select.options.length;

    for (let i = 0; i < length; i++) {
        select.options[i] = null;
    }
}

export function loadSelect(id, data){
    data.forEach(function(element) {
        let opcion = the(id);
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(element[Object.keys(element)[1]]) );
        opt.value = element[Object.keys(element)[0]]; 
        opcion.appendChild(opt);
    });
}


export const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}
