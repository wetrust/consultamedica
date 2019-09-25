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

//controlador de funciones base cuando se carga la pagina
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

    //cargar edad materna
    let edad = document.getElementsByName("edad_materna")[0];
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("< 12") );
    opt.value = "< 12"; 
    edad.appendChild(opt); 
    for (var i = 12; i < 61; i++) {
        edad = document.getElementsByName("edad_materna")[0];
        opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i; 
        edad.appendChild(opt); 
    }
    edad = document.getElementsByName("edad_materna")[0];
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("> 60") );
    opt.value = "> 60"; 
    edad.appendChild(opt); 

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
        fum.setTime(fum.getTime() + (1000*60*60*24*240));
        document.getElementById("fpp").value = getDate(fum);

        fum.setTime(fum.getTime() - (1000*60*60*24*240));
        fum = fum.getTime();
        let fee = dayHoy;
        fee.setTime(Date.parse(document.getElementById("fee").value));
        fee = fee.getTime();

        //la fecha de mestruación si puede ser antes de la fecha de exámen
        let diff = fee - fum;

        if (diff > 0){
            let dias = Math.abs(diff/(1000*60*60*24));
            let semanas = Math.trunc(dias / 7);
            
            document.getElementById("diaciclo").value = dias;
            
            dias = Math.trunc(dias - (semanas * 7));

            document.getElementById("semanas").value = semanas;
            document.getElementById("dias").value = dias;
        }
        else{
            document.getElementById("semanas").value = 0;
            document.getElementById("dias").value = 0;
            document.getElementById("diaciclo").value = 0;
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

        //la fecha de exámen no puede ser anterior a la fecha de última regla
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
            document.getElementById("diaciclo").value = 0;
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

    $("#embrion").on("change", function(){
        document.getElementById("embrion.clon").value = document.getElementById("embrion").value;
    });
});

//controlador de los informes
$( document ).ready(function() {
    
    //modalPreInfEcoPrimTrim

    $("#btn\\.informe\\.ginecologica").on("click",function( e ) {
        'use strict';
	    let informe = "<div class='container-fluid'> <h3 class='page-header text-center'>ECOGRAFÍA GINECOLÓGICA</h3></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container-fluid'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE</p><p><strong>Edad Materna: </strong> :EDADMATERNA años.</p><p><strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE</p><p><strong> Motivo de exámen: </strong> :MOTIVO</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>ANTECEDENTES</strong> </p><p><strong>FUM: </strong> :FUM</p><p><strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>DESCRIPCIÓN</strong> </p><p><strong>Fecha de exámen </strong>:LINEA1 <br><strong>Útero </strong>:LINEA2 <br><strong>Endometrio </strong>:LINEA3</p><p><strong>Anexo Izquierdo </strong>:LINEA4 <br><strong>Ovario Izquierdo </strong>:LINEA5 <br><strong>Anexo Derecho </strong>:LINEA6 <br><strong>Ovario Derecho </strong>:LINEA7</p><p><strong>Douglas </strong>:LINEA8</p><p></p><p></p><p></p><p></p></div><div class='container-fluid'> <p class='mb-4'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container-fluid'> <p class='text-right top40'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina' style='border-bottom:0;'>Informe generado desde software crecimientofetal.cl, el objetivo de este es favorecer análisis preeliminar de los datos, la interpretación de los resultados es responsabilidad fundamentalmente del profesional referente a exámen ecográfico. Profesional quien finalmente evaluará clínicamente la información contenida en este exámen.</p></div>";
    
        let LINEA2 = document.getElementById("utero.ginecologica").value;
        let LINEA3 = document.getElementById("endometrio.ginecologica").value;
        let LINEA4 = document.getElementById("anexo.izquierdo.ginecologica").value;
        let LINEA6 = document.getElementById("anexo.derecho.ginecologica").value;
        let LINEA5 = document.getElementById("ovario.izquierdo.ginecologica").value;
        let LINEA7 = document.getElementById("ovario.derecho.ginecologica").value;
        let LINEA8 = document.getElementById("douglas.ginecologica").value;

        let paciente = $( '#nombre-paciente').val();
        let idpaciente = $( '#id-paciente').val();
        let motivo = $( '#motivo-examen option:selected').text();
        let ecografista = document.getElementById("ecografista.copia").value;
        let fur = document.getElementById("fum").value;
        let fexamen = document.getElementById("fee").value;

        let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getMonth()] + " " + dayHoy.getFullYear();

        let comentario = document.getElementById("comentario.ginecologica").value;
        comentario = (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : "";

        let patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
        let edadmaterna = $( "select[name='edad_materna']").val();

        informe = informe.replace(":PACIENTE", paciente);
        informe = informe.replace(":IDPACIENTE", idpaciente);
        informe = informe.replace(":MOTIVO", motivo);
        informe = informe.replace(":ECOGRAFISTA", ecografista);
        informe = informe.replace(":FUM", fur);
        informe = informe.replace(":EDADMATERNA", edadmaterna);
        informe = informe.replace(":FEXAMEN", fexamen);
        informe = informe.replace(":LINEA1", fexamen);
        informe = informe.replace(":LINEA2", LINEA2);
        informe = informe.replace(":LINEA3", LINEA3);
        informe = informe.replace(":LINEA4", LINEA4);
        informe = informe.replace(":LINEA5", LINEA5);
        informe = informe.replace(":LINEA6", LINEA6);
        informe = informe.replace(":LINEA7", LINEA7);
        informe = informe.replace(":LINEA8", LINEA8);
        informe = informe.replace(":COMENTARIO", comentario);
        informe = informe.replace(":DATEINFORME", dateInf);
        informe = informe.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);

        imprInforme(informe);
    });
});

//controlador de botones reset
$( document ).ready(function() {
    $("#btn\\.erase\\.ginecologica").on("click", function(){
        var modal = makeModal("Si");
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        document.getElementById(modal.titulo).innerText = "Borrar datos de exámen ginecológico";
        document.getElementById(modal.contenido).innerHTML = '<h1 class="text-danger text-center">¿Está seguro de borrar los datos?</h1>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $("#"+modal.button).on("click", function(){
            let modal =  $(this).data("modal");
            document.getElementById("utero.ginecologica").value = "";
            document.getElementById("endometrio.ginecologica").value = "";
            document.getElementById("anexo.izquierdo.ginecologica").value = "";
            document.getElementById("anexo.derecho.ginecologica").value = "";
            document.getElementById("ovario.izquierdo.ginecologica").value = "";
            document.getElementById("ovario.derecho.ginecologica").value = "";
            document.getElementById("douglas.ginecologica").value = "";
            document.getElementById("comentario.ginecologica").value = "";
            document.getElementById("ecografista.copia").selectedIndex = 0;
            document.getElementById("fum").value = getDate();
            document.getElementById("fee").value = getDate();
            $("#fum").trigger("change");
            $('#'+modal).modal("hide");
        });
    });

    $("#btn\\.erase\\.precoz").on("click", function(){
        var modal = makeModal("Si");
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        document.getElementById(modal.titulo).innerText = "Borrar datos de ecografía obstétrica precoz";
        document.getElementById(modal.contenido).innerHTML = '<h1 class="text-danger text-center">¿Está seguro de borrar los datos?</h1>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $("#"+modal.button).on("click", function(){
            let modal =  $(this).data("modal");
            document.getElementById("saco").value = "";
            $("#saco").trigger("change");
            document.getElementById("embrion").selectedIndex = 0;
            $("#embrion").trigger("change");
            document.getElementById("utero-ubic1").selectedIndex = 0;
            document.getElementById("utero-ubic2").selectedIndex = 0;
            document.getElementById("cuerpo-uterino").selectedIndex = 0;
            document.getElementById("saco-gestacional").selectedIndex = 0;
            document.getElementById("saco-vitelino").selectedIndex = 1;
            document.getElementById("fcf-prim").selectedIndex = 0;
            document.getElementById("anexo-derecho").selectedIndex = 0;

            document.getElementById("anexo-derecho").selectedIndex = 0;
            document.getElementById("anexo-izquierdo").selectedIndex = 0;
            document.getElementById("exploracion-douglas").selectedIndex = 0;
            document.getElementById("comentarios-eco-uno").value = "";

            document.getElementById("fum").value = getDate();
            document.getElementById("fee").value = getDate();
            $("#fum").trigger("change");
            $('#'+modal).modal("hide");
        });
    });
});

//controlador de los keypress
$( document ).ready(function() {

    $("#saco").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("embrion").focus();
        }
    });

    $("#lcn").on("keypress",function( e ) {
        if (e.which == 13) {
            e.preventDefault();
            document.getElementById("btn.informe.precoz").focus();
        }
    });
    $("#utero-ubic1").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("utero-ubic2").focus();
        }
    });
    $("#utero-ubic2").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("cuerpo-uterino").focus();
        }
    });
    $("#cuerpo-uterino").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("saco-gestacional").focus();
        }
    });
    $("#saco-gestacional").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("saco-vitelino").focus();
        }
    });
    $("#saco-vitelino").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("fcf-prim").focus();
        }
    });
    $("#fcf-prim").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("anexo-derecho").focus();
        }
    });
    $("#anexo-derecho").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("anexo-derecho").focus();
        }
    });
    $("#anexo-derecho").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("anexo-izquierdo").focus();
        }
    });
    $("#anexo-izquierdo").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("exploracion-douglas").focus();
        }
    });
    $("#exploracion-douglas").on("keypress",function( e ) {
        if ( e.which == 13 ) {
            e.preventDefault();
            document.getElementById("comentarios-eco-uno").focus();
        }
    });

    $("#utero\\.ginecologica").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#endometrio\\.ginecologica").focus();
        }
    });
    $("#endometrio\\.ginecologica").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#anexo\\.izquierdo\\.ginecologica").focus();
        }
    });
    $("#anexo\\.izquierdo\\.ginecologica").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#anexo\\.derecho\\.ginecologica").focus();
        }
    });
    $("#anexo\\.derecho\\.ginecologica").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#ovario\\.izquierdo\\.ginecologica").focus();
        }
    });
    $("#ovario\\.izquierdo\\.ginecologica").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#ovario\\.derecho\\.ginecologica").focus();
        }
    });
    $("#ovario\\.derecho\\.ginecologica").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#douglas\\.ginecologica").focus();
        }
    });
    $("#douglas\\.ginecologica").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#comentario\\.ginecologica").focus();
        }
    });
});

//controlador de los gráficos
$( document ).ready(function() {

    $( '#graficoSaco' ).on( 'click', function() {
        var modal = makeModal("Si");
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        document.getElementById(modal.titulo).innerText = "Saco Gestacional promedio en milímetros (mm)";
        document.getElementById(modal.contenido).innerHTML = '<div id="graficoSacoView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoSacoView').highcharts({
            title: {text: '',x: -20},
            subtitle: {
                text: '',
                x: -20
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: '' },
                tickPositions: [0, 5, 10, 15, 20, 25, 30, 35, 40]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['4.2','4.3','4.4','4.5','4.6','5','5.1','5.2','5.3','5.4','5.5','5.6','6','6.1','6.2','6.3','6.4','6.5','6.6','7','7.1','7.2','7.3','7.4','7.5','7.6','8']
            },
            credits: { enabled: false },
            series: [{
                type: "line",
                name: '-DE',
                marker: { enabled: false },
                data: [0.12,1.01,1.45,2.14,2.93,4.1,5.1,6.1,7,8,9,9.9,10.7,11.5,12.2,13.3,13.9,14.9,15.9,16.7,17.6,18.6,19.4,20.4,21,22,23],
                dashStyle: 'shortdot'
            },{
                type: "line",
                name: 'media',
                marker: { enabled: false },
                data: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19.9,20.9,21.8,22.9,24.1,25,26,27,28,29,30]
            },{
                type: "line",
                name: '+DE',
                marker: { enabled: false },
                data: [9.9,10.9,11.6,12.6,13.6,15.1,16,17,18,19,19.9,21.1,21.9,22.9,24.1,25.1,26.1,27,28,29,30,31,32,33,34,35,36],
                dashStyle: 'shortdot'
            }, {
                type: "line",
                name: 'Saco gestacional [Hellmann y col. Am. J O & G 1968; 1.03(6)789 800]',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    var data = [];
                    var categories = [4.2,4.3,4.4,4.5,4.6,5,5.1,5.2,5.3,5.4,5.5,5.6,6,6.1,6.2,6.3,6.4,6.5,6.6,7,7.1,7.2,7.3,7.4,7.5,7.6,8];
                    var edadGest = parseInt(localStorage.eg);
    
                    var saco = $("#saco").val();
                    saco = saco.toString();
                    saco = saco.replace(",", ".");
                    saco = parseFloat(saco);
                         
                    for (i = 0; i <= 27; i++) {
                        if (categories[i] == edadGest){
                            data.push({
                                y: saco,
                            });
                        }else{
                            data.push({ y: -2, });
                        }
                    }
                    return data;
                }())
            }]
        });
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
function makeModal(button){
    let id = uuidv4();
    let titulo = uuidv4();
    let contenido = uuidv4();
    let _button = uuidv4();
    let button_string = "";
    
    if (typeof button !== typeof undefined){
        button_string = '<button type="button" class="btn btn-primary" id="'+_button+'" data-modal="'+id+'">'+button+'</button>';
    }
    
    let resultado ={
        id:id,
        titulo:titulo,
        contenido:contenido,
        button:_button,
        modal:'<div class="modal fade" tabindex="-1" role="dialog" id="'+id+'"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="'+titulo+'">Modal title</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body" id="'+contenido+'"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>'+ button_string+'</div></div></div></div>'
    }
        
    return resultado;
}
//crea id random para los modales
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

function imprInforme(datos)
{
	var document = '<!DOCTYPE html><html lang="es-CL"><head><meta charset="utf-8"><title>Impresión de Gráficos</title><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel="stylesheet" href="consulta.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">:ESTILO</head><body><div class="container"><div style="width:35%;text-align:center;" class="membrete">:MEMBRETE</div></div><div class="container" style="margin-top:50px !important;">:DATOS</div>:FUNCION</body></html>';
	var ventimp = window.open(" ","popimpr");
	var estilo = '<style>@media print{*{margin:0;padding:0;border:0}p,th,td{font-size:11px;line-height:17px;margin-bottom:7px}th,td{margin:0 !important;padding:0 !important}.pie-pagina{font-size:9px}.pie-pagina-dos{font-size:10px}#lineclear{clear:both}h3{font-size:130%;text-align:center}h3::first-letter{font-size:100%}.membrete::first-letter{font-size:14px;}.membrete::first-line{font-size:14px;}.membrete{font-size:10px;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	var membrete = $("#membrete").val().replace(/\r\n|\r|\n/g,"<br />");
	document = document.replace(":DATOS", datos);
	document = document.replace(":ESTILO", estilo);
	document = document.replace(":FUNCION", funcion);
	document = document.replace(new RegExp('invisible', 'g'), "");
	document = document.replace(":MEMBRETE", membrete);
	ventimp.document.write(document);
	ventimp.document.close();
	ventimp.show();
}