var daysES=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var monthsES=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var dayHoy = new Date();
var day = ("0" + dayHoy.getUTCDate()).slice(-2);
var month = ("0" + (dayHoy.getMonth() + 1)).slice(-2);
var activeHash = "#browser";

var titulos ={
    "#consulta": "Datos iniciales de configuración",
    "#tipoExamen": "Módulos de la aplicación",
    "#ecoDoppler": "Flujometría Doppler materno / fetal",
    "#ecoObsSegTrim": "Evaluación del crecimiento fetal",
    "#ecoObsPrimTrim": "Ecografía obstétrica precoz",
    "#construccion": 'Ecografía 22 - 24 semanas para evaluación detallada de morfología fetal <span class="text-animado"><strong>(Módulo en construcción)</strong></span>',
    "#ecoGinecologica": "Ecografía Ginecológica",
    "#ecoObsPrimTrimTrisomia": 'Ecografía 11 - 14 semanas, tamizaje de preeclampsia y cromosomopatía <span class="text-animado"><strong>(Módulo en construcción)</strong></span>'
}

document.location.hash = "";

$( document ).ready(function() {
    $("p[name='fechaHora']").append(daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getMonth()] + " " + dayHoy.getFullYear());
    document.getElementById("fum").value = getDate();
    document.getElementById("fee").value = getDate();

    //cargar select semana y dias
    for (var i = 0; i < 43; i++) {
        let semanas = document.getElementById("semanas");
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i; 
        semanas.appendChild(opt); 
    }

    for (var i = 0; i < 7; i++) {
        let dias = document.getElementById("dias");
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i; 
        dias.appendChild(opt); 
    }

    //cargar frecuencia cardiaca fetal primer trimestre
    let dias = document.getElementById("fcf-prim");
    let opt = document.createElement('option');
    opt.appendChild( document.createTextNode("(+) inicial") );
    opt.value = "(+) inicial"; 
    dias.appendChild(opt); 
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("< 90") );
    opt.value = "< 90"; 
    dias.appendChild(opt);

    for (var i = 90; i < 171; i++) {
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i; 
        dias.appendChild(opt); 
    }
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("> 170") );
    opt.value = "> 170"; 
    dias.appendChild(opt);
    
    if (storageAvailable('localStorage')) {
        document.location.hash = "#inicio";
        checkDatabase();
		loadDatabase();
    }

    //controlador de botones inicio
    $("#menu\\.modulo\\.activo").on("click", function(){
        var botones = ["menu.modulo.activo.uno", "menu.modulo.activo.dos", "menu.modulo.activo.tres", "menu.modulo.activo.cuatro"];
        
        if (document.getElementById(botones[0]).classList.contains("d-none")){
            botones.forEach(function myFunction(value, index, array) {
                document.getElementById(value).classList.remove("d-none");
            });
        }
        else{
            botones.forEach(function myFunction(value, index, array) {
                document.getElementById(value).classList.add("d-none");
            });
        }
    });

    $("#menu\\.modulo\\.construccion").on("click", function(){
        var botones = ["menu.modulo.construccion.uno", "menu.modulo.construccion.dos"];
        
        if (document.getElementById("menu.modulo.construccion.uno").classList.contains("d-none")){
            botones.forEach(function myFunction(value, index, array) {
                document.getElementById(value).classList.remove("d-none");
            });
        }
        else{
            botones.forEach(function myFunction(value, index, array) {
                document.getElementById(value).classList.add("d-none");
            });
        }
    });


    //controlador al cambiar input de edad gestacional
    $("#fum").on("change", function(){
        let fum = dayHoy;
        fum.setTime(Date.parse(document.getElementById("fum").value));
        fum.setDate(fum.getUTCDate() + 240);
        document.getElementById("fpp").value = getDate(fum);

        fum.setDate(fum.getUTCDate() - 240);
        fum = fum.getTime();
        let fee = dayHoy;
        fee.setTime(Date.parse(document.getElementById("fee").value));
        fee = fee.getTime();

        let diff = fee - fum;

        if (diff > 0){
            let dias = diff/(1000*60*60*24);
            let semanas = Math.trunc(dias / 7);
            
            document.getElementById("diaciclo").value = dias;
            
            dias = Math.trunc(dias - (semanas * 7));

            document.getElementById("semanas").value = semanas;
            document.getElementById("dias").value = dias;
        }
        else{
            document.getElementById("semanas").value = 0;
            document.getElementById("dias").value = 0;
        }
        console.log(diff/(1000*60*60*24) );
        // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días

    }).trigger("change");

    $("#fee").on("change", function(){
        let fum = dayHoy; 
        fum.setTime(Date.parse(document.getElementById("fum").value));
        fum = fum.getTime();
        let fee = dayHoy;
        fee.setTime(Date.parse(document.getElementById("fee").value));
        fee = fee.getTime();

        let diff = fee - fum;

        if (diff > 0){
            let dias = diff/(1000*60*60*24);
            let semanas = Math.trunc(dias / 7);
            
            document.getElementById("diaciclo").value = dias;

            dias = Math.trunc(dias - (semanas * 7));

            document.getElementById("semanas").value = semanas;
            document.getElementById("dias").value = dias;
        }
        else{
            document.getElementById("semanas").value = 0;
            document.getElementById("dias").value = 0;
        }
    });

    $("#semanas, #dias").on("change", function(){
        let semanas = parseInt(document.getElementById("semanas").value);
        let dias = parseInt(document.getElementById("dias").value);

        semanas = 7 * semanas;

        let fee = new Date(document.getElementById("fee").value);
        fee.setDate(fee.getUTCDate() - (semanas + dias));

        document.getElementById("fum").value = getDate(fee);
        $("#fum").trigger("change");
    });

    //controlador de botones para ver la configuración
    $('#configSiController').on('click', function(){
        document.location.hash = "configuracion";
    });
    
    $('#configSiController').on('focusout', function(){
        $('#configNoController').button('toggle');
    });

    //controlador de ecografía de primer trimestre
    $("#saco-gestacional").on("change", function(){
        if (document.getElementById("saco-gestacional").value == "no se observa"){
            document.getElementById("saco.clon").parentElement.parentElement.classList.add("d-none");
            document.getElementById("saco").parentElement.parentElement.parentElement.classList.add("d-none");
            document.getElementById("saco").value = 0;
            $("#saco").trigger("change");
        }
        else{
            document.getElementById("saco.clon").parentElement.parentElement.classList.remove("d-none");
            document.getElementById("saco").parentElement.parentElement.parentElement.classList.remove("d-none");
        }
    });

    $("#saco-vitelino").on("change", function(){
        if (document.getElementById("saco-vitelino").value == "no se observa"){
            document.getElementById("valor-saco-vitelino").parentElement.classList.add("d-none");
            document.getElementById("saco-vitelino-mm").value = 0;
        }
        else{
            document.getElementById("valor-saco-vitelino").parentElement.classList.remove("d-none");
        }
    });

    $("#embrion").on("change", function(){
        let optiones = ["no se observa aun", "act. no evidenciable", "no procede"];
        let embrion = document.getElementById("embrion").value;

        if (optiones.includes(embrion)){
            document.getElementById("lcn.clon").parentElement.parentElement.classList.add("d-none");
            document.getElementById("lcn").parentElement.parentElement.parentElement.classList.add("d-none");
            document.getElementById("lcn").value = 0;
            $("#lcn").trigger("change");
        }
        else{
            document.getElementById("lcn.clon").parentElement.parentElement.classList.remove("d-none");
            document.getElementById("lcn").parentElement.parentElement.parentElement.classList.remove("d-none");
        }
    });
});

//controlador de input clones
//si se escribe en uno, se refleja en otro
$( document ).ready(function() {
    $("#lcn").on("change", function(){
        document.getElementById("lcn.clon").value = document.getElementById("lcn").value;
    });
    $("#saco").on("change", function(){
        document.getElementById("saco.clon").value = document.getElementById("saco").value;
    });
});

$(window).on('hashchange', function(){
    var hash = document.location.hash;
    var div = ["#inicio","#consulta","#ajustepeso","#about","#tipoExamen","#ecoDoppler","#ecoObsSegTrim","#ecoObsPrimTrim","#configuracion","#postnatal","#recienacido","#hipoglicemia","#pdfviebox","#registro","#consentimiento","#construccion","#ecoGinecologica","#ecoObsPrimTrimTrisomia"];
    var div_fecha = ["#consulta","#tipoExamen","#ecoDoppler","#ecoObsSegTrim","#ecoObsPrimTrim","#construccion","#ecoGinecologica","#ecoObsPrimTrimTrisomia"];
    let d = "d-none";

    if (div.includes(hash)){
        $(activeHash).addClass(d);
        $(hash).removeClass(d);
        activeHash = hash;

        if (div_fecha.includes(hash)){
            document.getElementsByTagName("section")[0].classList.remove(d);
            document.getElementById("titulo").innerHTML = titulos[hash];

            if (hash == "#ecoGinecologica"){
                document.getElementById("semanas").parentElement.parentElement.parentElement.parentElement.classList.add(d);
                document.getElementById("fpp").parentElement.parentElement.classList.add(d);
                document.getElementById("diaciclo").parentElement.parentElement.classList.remove(d);
            }else{
                document.getElementById("diaciclo").parentElement.parentElement.classList.add(d);
                document.getElementById("semanas").parentElement.parentElement.parentElement.parentElement.classList.remove(d);
                document.getElementById("fpp").parentElement.parentElement.classList.remove(d);
            }
        }
        else{
            document.getElementsByTagName("section")[0].classList.add(d);
        }
    }
    else{
        $(activeHash).addClass(d);
        document.getElementById("inicio").classList.remove(d);
    }
});


function getDate(today) {
    if (typeof today === typeof undefined){
        today = dayHoy;
    }
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }
  

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
        }
    }