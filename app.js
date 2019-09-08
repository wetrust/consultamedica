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


$( document ).ready(function() {
    $("p[name='fechaHora']").append(daysES[dayHoy.getDay()] + ", " + dayHoy.getDate() + " de "+ monthsES[dayHoy.getMonth()] + " " + dayHoy.getFullYear());
});

$(window).on('hashchange', function(){
    var hash = document.location.hash;

    if (hash=="#inicio" || hash=="#about" || hash=="#tipoExamen" || hash=="#ecoDoppler" || hash=="#ecoObsSegTrim" || hash=="#ecoObsPrimTrim" || hash=="#configuracion" || hash=="#postnatal" || hash=="#recienacido" || hash=="#hipoglicemia" || hash=="#pdfviebox" || hash=="#registro" || hash=="#consentimiento" || hash=="#construccion" || hash=="#ecoGinecologica" || hash=="#ecoObsPrimTrimTrisomia"){
        $(activeHash).addClass("d-none");
        $(hash).removeClass("d-none");

        if (hash=="#tipoExamen" || hash=="#ecoDoppler" || hash=="#ecoObsSegTrim" || hash=="#ecoObsPrimTrim" || hash=="#construccion" || hash=="#ecoGinecologica" || hash=="#ecoObsPrimTrimTrisomia"){
            document.getElementsByTagName("section").classList.remove("d-none");
            document.getElementById("titulo").innerHTML = titulos[hash];
        }
        else{
            document.getElementsByTagName("section").classList.add("d-none");
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