var daysES=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var monthsES=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var dayHoy = new Date();
var day = ("0" + dayHoy.getDate()).slice(-2);
var month = ("0" + (dayHoy.getMonth() + 1)).slice(-2);
var activeHash = "#browser";

var titulos ={
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
    $("p[name='fechaHora']").append(daysES[dayHoy.getDay()] + ", " + dayHoy.getDate() + " de "+ monthsES[dayHoy.getMonth()] + " " + dayHoy.getFullYear());

    if (storageAvailable('localStorage')) {
        document.location.hash = "#inicio";
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
                txt = txt + value + "<br>";
                document.getElementById(value).classList.remove("d-none");
            });
        }
        else{
            botones.forEach(function myFunction(value, index, array) {
                txt = txt + value + "<br>";
                document.getElementById(value).classList.add("d-none");
            });
        }
    })
});

$(window).on('hashchange', function(){
    var hash = document.location.hash;

    if (hash=="#inicio" || hash=="#about" || hash=="#tipoExamen" || hash=="#ecoDoppler" || hash=="#ecoObsSegTrim" || hash=="#ecoObsPrimTrim" || hash=="#configuracion" || hash=="#postnatal" || hash=="#recienacido" || hash=="#hipoglicemia" || hash=="#pdfviebox" || hash=="#registro" || hash=="#consentimiento" || hash=="#construccion" || hash=="#ecoGinecologica" || hash=="#ecoObsPrimTrimTrisomia"){
        $(activeHash).addClass("d-none");
        $(hash).removeClass("d-none");
        activeHash = hash;

        if (hash=="#tipoExamen" || hash=="#ecoDoppler" || hash=="#ecoObsSegTrim" || hash=="#ecoObsPrimTrim" || hash=="#construccion" || hash=="#ecoGinecologica" || hash=="#ecoObsPrimTrimTrisomia"){
            document.getElementsByTagName("section")[0].classList.remove("d-none");
            document.getElementById("titulo").innerHTML = titulos[hash];
        }
        else{
            document.getElementsByTagName("section")[0].classList.add("d-none");
        }
    }
    else if (this.hash=="#consulta"){
        this.displayElement("consulta");
        $("#link\\.volver\\.ecouno").attr("href","#tipoExamen");
    }
    else if (this.hash=="#ajustepeso"){
        this.displayElement("ajustepeso");
        verGraficoAjustePeso();
    }
});

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