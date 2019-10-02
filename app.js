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
        fum.setTime(fum.getTime() + (1000*60*60*24*282));
        document.getElementById("fpp").value = getDate(fum);

        fum.setTime(fum.getTime() - (1000*60*60*24*282));
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
    $("#saco").on("change", function(){
        document.getElementById("sacoPct").value = egSaco(this.value);
    });

    $("#saco-gestacional").on("change", function(){
        if (this.value == "no se observa"){
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

    $("#lcn").on("change", function(){
        document.getElementById("lcnPct").value = eglcn(this.value);

        var eg = parseFloat(document.getElementById("semanas").value + "." +document.getElementById("dias").value);
        let semanas = parseInt(document.getElementById("semanas").value);
        let dias = parseInt(document.getElementById("dias").value);
        var EGLCN = document.getElementById("lcnPct").value;

        if (isNaN(this.value) | this.value < 1 | isNaN(eg) | eg < 1) {
            $('#diferenciaEcoPrimTrim').html('0');
            $('#preguntaAjusteEcoPrimTrim').hide();
            $('#resultadoAjusteEcoPrimTrim').hide();
        } else {
            var eg1 = new Number((Math.trunc(EGLCN) * 7) + Math.trunc((EGLCN - Math.trunc(EGLCN))* 10));
            var eg2 = parseInt(semanas * 7) +  dias;
            var diferencia = Math.abs(Math.trunc(eg2 - eg1));
            $('#diferenciaEcoPrimTrim').html(diferencia);
            $('#preguntaAjusteEcoPrimTrim').show();
            $('#resultadoAjusteEcoPrimTrim').show();

            let fee = new Date();
            fee.setTime(Date.parse(document.getElementById("fee").value));
            fee.setTime(fee.getTime() - (1000*60*60*24*eg1));

            document.getElementById("furAjustada").value = getDate(fee);

            document.getElementById("semanasAjustada").value = Math.trunc(EGLCN);
            document.getElementById("diasAjustada").value = Math.trunc((EGLCN - Math.trunc(EGLCN))* 10);

            fee.setTime(fee.getTime() + (1000*60*60*24*282));
            document.getElementById("fppAjustada").value = getDate(fee);
        }
    });

    $("#saco-vitelino").on("change", function(){
        if (this.value == "no se observa"){
            document.getElementById("valor-saco-vitelino").parentElement.classList.add("d-none");
            document.getElementById("saco-vitelino-mm").value = 0;
        }
        else{
            document.getElementById("valor-saco-vitelino").parentElement.classList.remove("d-none");
        }
    });

    $("#embrion, #embrion\\.clon").on("change", function(){
        let optiones = ["no se observa aun"];
        let cardio = ["con act. cardiaca (+)", "act. cardiaca evidenciable", "act. card. y Corp.(+)"];
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

        if (cardio.includes(embrion)){
            document.getElementById("fcf-primer-trim").classList.remove("d-none");
            document.getElementById("fcf-prim").value = (embrion == "act. cardiaca evidenciable") ? "(+) inicial": 150;
        }
        else{
            document.getElementById("fcf-primer-trim").classList.add("d-none");
        }
    });

    $("#menu\\.modulo\\.prim\\.trim\\.si").on("click", function(){
        document.getElementById("semanas").value = document.getElementById("semanasAjustada").value;
        document.getElementById("dias").value = document.getElementById("diasAjustada").value;
        $("#semanas").trigger("change");
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

    $("#embrion\\.clon").on("change", function(){
        document.getElementById("embrion").value = document.getElementById("embrion.clon").value;
    });
    
});

//controlador de los informes
$( document ).ready(function() {
    $("#btn\\.informe\\.precoz").on("click", function (){
        let sacovitelinotxt = (document.getElementById("saco-vitelino").value == "no se observa") ? "." : " de diametro " + document.getElementById("saco-vitelino-mm").value + " mm.";
        let sacogestacionaltxt = document.getElementById("saco").value;
        sacogestacionaltxt = (sacogestacionaltxt > 0) ? " diametro promedio " + sacogestacionaltxt + " mm." : ".";

        //si solo tiena saco
        var InformeString = "";
        if (document.getElementById("lcn").value < 1 && document.getElementById("saco").value > 1){
            InformeString = "<div class='container-fluid'> <h6 class='page-header text-center'>Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h6></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container-fluid'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>DESCRIPCIÓN</strong> </p><p>Cuerpo Uterino :LINEA1 <br>Saco Gestacional :LINEA2 <br>Saco Vitelino :LINEA3 <br>Embrión :LINEA4 <br>Exploración anexial derecha :LINEA5 <br>Exploración anexial izquierda :LINEA6 <br>Exploración de Douglas :LINEA7</p><p></p><p></p><p><strong style='color:#045dab;'>:TITULOBIOMETRIAS</strong> </p><p>:LINEA12</p><p></p><p></p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><span style='color:#045dab;'> (Adicionar comentarios del examinador)</span> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container-fluid'> <p class='text-right top40'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina' style='border-bottom:0;'>Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br>Referencia Edad menstrual por LCN Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br>Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.</strong><br>Nota: Este examen está destinado a evaluar biometría fetal; edad gestacional, crecimiento fetal y/o flujometria Doppler materno-fetal. No evalúa la anatomía fetal en forma dirigida. El rendimiento diagnóstico del examen ecográfico depende de múltiples factores tanto maternos como fetales, edad gestacional al momento del examen, posición fetal, interposición de partes fetales (manos, pies) o anexos (placenta, cordón umbilical), En las mejores series de detección de malformaciones fetales publicadas en la literatura nacional e internacional no alcanza el 100% y por lo tanto es importante correlacionar resultado obtenidos en función del contexto clínico de la paciente y antecedentes de gestaciones previas.</p></div>";
        }else if (document.getElementById("lcn").value < 1 && document.getElementById("saco").value < 1 && sacogestacionaltxt == "."){
            InformeString = "<div class='container-fluid'> <h6 class='page-header text-center'>Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h6></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container-fluid'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>DESCRIPCIÓN</strong> </p><p>Cuerpo Uterino :LINEA1 <br>Exploración anexial derecha :LINEA5 <br>Exploración anexial izquierda :LINEA6 <br>Exploración de Douglas :LINEA7</p><p></p><p></p><p><strong style='color:#045dab;'>:TITULOBIOMETRIAS</strong> </p><p>:LINEA12</p><p></p><p></p><p><strong style='color:#045dab;'>HIPÓTESIS DIAGNÓSTICA</strong> </p><p>:LINEA8 :LINEA9 <br>:LINEA10 <br>:LINEA11</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container-fluid'> <p class='text-right top40'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina' style='border-bottom:0;'>Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br>Referencia Edad menstrual por LCN Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br>Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.</strong><br>Nota: Este examen está destinado a evaluar biometría fetal; edad gestacional, crecimiento fetal y/o flujometria Doppler materno-fetal. No evalúa la anatomía fetal en forma dirigida. El rendimiento diagnóstico del examen ecográfico depende de múltiples factores tanto maternos como fetales, edad gestacional al momento del examen, posición fetal, interposición de partes fetales (manos, pies) o anexos (placenta, cordón umbilical), En las mejores series de detección de malformaciones fetales publicadas en la literatura nacional e internacional no alcanza el 100% y por lo tanto es importante correlacionar resultado obtenidos en función del contexto clínico de la paciente y antecedentes de gestaciones previas. </p></div>";
        }else{
            InformeString = "<div class='container-fluid'> <h6 class='page-header text-center'>Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h6></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container-fluid'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>DESCRIPCIÓN</strong> </p><p>Cuerpo Uterino :LINEA1 <br>Saco Gestacional :LINEA2 <br>Saco Vitelino :LINEA3 <br>Embrión :LINEA4 <br>Exploración anexial derecha :LINEA5 <br>Exploración anexial izquierda :LINEA6 <br>Exploración de Douglas :LINEA7</p><p></p><p></p><p><strong style='color:#045dab;'>:TITULOBIOMETRIAS</strong> </p><p>:LINEA12</p><p></p><p></p><p><strong style='color:#045dab;'>HIPÓTESIS DIAGNÓSTICA</strong> </p><p>:LINEA8 :LINEA9 <br>:LINEA10 <br>:LINEA11</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container-fluid'> <p class='text-right top40'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina' style='border-bottom:0;'>Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br>Referencia Edad menstrual por LCN Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br>Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.</strong><br>Nota: Este examen está destinado a evaluar biometría fetal; edad gestacional, crecimiento fetal y/o flujometria Doppler materno-fetal. No evalúa la anatomía fetal en forma dirigida. El rendimiento diagnóstico del examen ecográfico depende de múltiples factores tanto maternos como fetales, edad gestacional al momento del examen, posición fetal, interposición de partes fetales (manos, pies) o anexos (placenta, cordón umbilical), En las mejores series de detección de malformaciones fetales publicadas en la literatura nacional e internacional no alcanza el 100% y por lo tanto es importante correlacionar resultado obtenidos en función del contexto clínico de la paciente y antecedentes de gestaciones previas.</p></div>";
        }
    
        let fcftexto = document.getElementById("embrion").value;
        let optiones = ["no se observa aun","act. no evidenciable","act. card. y Corp. (-)"];

        if (optiones.includes(fcftexto)){
            fcftexto = ".";
        }
        else{
            fcftexto = (document.getElementById("fcf-prim").value == '(+) inicial') ? " frecuencia cardiaca fetal " + document.getElementById("fcf-prim").value : " frecuencia cardiaca fetal de " + document.getElementById("fcf-prim").value +" x min.";
        }
        
        let douglasinforme = (document.getElementById("exploracion-douglas").value == 'ocupado') ? document.getElementById("comentarios-douglas-informe").value : ".";
    
        var LINEA1 = document.getElementById("utero-ubic1").value + " " + document.getElementById("utero-ubic2").value+ ", " + document.getElementById("cuerpo-uterino").value + ".";
        var LINEA2 = document.getElementById("saco-gestacional").value + sacogestacionaltxt;
        var LINEA3 = document.getElementById("saco-vitelino").value + sacovitelinotxt;
        var LINEA4 = document.getElementById("embrion").value + fcftexto;
        var LINEA5 = document.getElementById("anexo-derecho").value;
        var LINEA6 = document.getElementById("anexo-izquierdo").value;
        var LINEA7 = document.getElementById("exploracion-douglas").value + ", " + douglasinforme;
        var LINEA12 = '';
        var LINEA8 = '';
    
        if (document.getElementById("lcn").value > 0){
            var LINEA9 = "Utero " + document.getElementById("utero-ubic1").value + " " + document.getElementById("utero-ubic2").value + ", " + document.getElementById("cuerpo-uterino").value + ".";
            var LINEA10 = "Exploración anexial derecha " + document.getElementById("anexo-derecho").value;
            var LINEA11 = "Exploración anexial izquierda " + document.getElementById("anexo-izquierdo").value;
        } 
        else if (document.getElementById("lcn").value == "" && document.getElementById("embrion").value == "no procede"){
            var LINEA9 = "Utero " + document.getElementById("utero-ubic1").value + " " + document.getElementById("utero-ubic2").value + ", " + document.getElementById("cuerpo-uterino").value + ".";
            var LINEA10 = "Exploración anexial " + document.getElementById("anexo-derecho").value;
            var LINEA11 = "";
            LINEA12 = "no procede";
        }
        else{
            var LINEA9 = "Gestación Inicial<br>Utero " + document.getElementById("utero-ubic1").value + " " + document.getElementById("utero-ubic2").value + ", " + document.getElementById("cuerpo-uterino").value + ".";
            var LINEA10 = "Exploración anexial " + document.getElementById("anexo-derecho").value;
            var LINEA11 = "";
            LINEA12 = "Embrion no se observa";
        }
        
        if (sacogestacionaltxt > 0){
            LINEA12 = "Saco gestacional diámetro promedio de " + sacogestacionaltxt +" mm.<br>";
            LINEA8 = "Edad gestacional estimada " + document.getElementById("sacoPct").value + " por saco gestacional.<br>";
        }
    
        if (document.getElementById("lcn").value > 0) {
            LINEA12 = "Largo embrionario máximo de " + document.getElementById("lcn").value + " mm.";
            LINEA8 = "Edad gestacional estimada " + document.getElementById("lcnPct").value + " semanas por LCN.<br>";
        }
    
        var TITULOBIOMETRIAS = 'BIOMETRÍAS EMBRIO/FETAL';
        
        if ($('#lcn').val() < 1) {
            if (sacogestacionaltxt < 1){
                LINEA12 = '';
                LINEA8 = '';
                TITULOBIOMETRIAS = '';
            }
        }

        var paciente = $( '#nombre-paciente').val();
        var idpaciente = $( '#id-paciente').val();
        var motivo = $( '#motivo-examen option:selected').text();
        var ecografista = $( '#ecografista option:selected').text();

        let fexamen = new Date(Date.parse(document.getElementById("fee").value));
        fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getMonth()] + " " + fexamen.getFullYear();

        InformeString = InformeString.replace(":PACIENTE", paciente);
        InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
        InformeString = InformeString.replace(":MOTIVO", motivo);
        InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);

        let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getMonth()] + " " + dayHoy.getFullYear();

        var comentario = $("#comentarios-eco-uno").val();
        comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : comentario='';

        if (document.getElementById("saco").value && document.getElementById("embrion").value == "no se observa aun"){
            comentario = "Calculo inicial de edad según saco gestacional: "+document.getElementById("sacoPct").value+" semanas<br>Agendar próxima ecografía para determinar edad gestacional por LCN<br>" + comentario;
        }
        else{
            let fur = new Date(Date.parse(document.getElementById("fum").value));
            fur = fur.getUTCDate() + " de "+ monthsES[fur.getMonth()] + " " + fur.getFullYear();
            let fpp = new Date(Date.parse(document.getElementById("fpp").value));
            fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getMonth()] + " " + fpp.getFullYear();
            let eg = document.getElementById("semanas").value + "."+ document.getElementById("dias").value + " semanas.";
            comentario = "Para edad gestacional calculada: "+eg+" corresponde:<br>- FUR operacional: "+ fur +"<br>- Fecha probable de parto: " + fpp + "<br>" + comentario;
        }

        var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
        var edadmaterna = $( "select[name='edad_materna']").val();
        
        InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);
        InformeString = InformeString.replace(":FEXAMEN", fexamen);
        InformeString = InformeString.replace(":LINEA1", LINEA1);
        InformeString = InformeString.replace(":LINEA2", LINEA2);
        InformeString = InformeString.replace(":LINEA3", LINEA3);
        InformeString = InformeString.replace(":LINEA4", LINEA4);
        InformeString = InformeString.replace(":LINEA5", LINEA5);
        InformeString = InformeString.replace(":LINEA6", LINEA6);
        InformeString = InformeString.replace(":LINEA7", LINEA7);
        InformeString = InformeString.replace(":LINEA8", LINEA8);
        InformeString = InformeString.replace(":LINEA9", LINEA9);
        InformeString = InformeString.replace(":LINEA10", LINEA10);
        InformeString = InformeString.replace(":LINEA11", LINEA11);
        InformeString = InformeString.replace(":LINEA12", LINEA12);
        InformeString = InformeString.replace(":TITULOBIOMETRIAS", TITULOBIOMETRIAS);
        InformeString = InformeString.replace(":COMENTARIO", comentario);
        InformeString = InformeString.replace(":DATEINFORME", dateInf);
        InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);
        
        imprInforme(InformeString);
    });

    $("#modalPreInfEcoDoppler").on("click", function(){

        var InformeString = "<div class='container'> <h3>Evaluación de flujometria doppler materno fetal</h3></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p><p><strong>FUM: </strong> :FUM <br><strong>Ege: </strong> :EG semanas <br><strong>FPP: </strong> :FPP</p></div><div class='container'> <p><strong style='color:#045dab;'>ANTECEDENTES</strong> <small>(Descripción general del feto y anexos ovulares)</small> </p><p>Motivo del exámen: :MOTIVODOPPLER <br>Antecedentes Obstétricos: :ANTECEDENTES <br>Feto en Presentación: :PRESENTACION <br>Motilidad Fetal: :MOTILIDAD <br>Ubicación Placentaria: :UBICACION <br>Líquido Amniótico***: :LIQUIDO <br>Medida única de BVM***: :BVM</p></div><div class='container'> <table class='table'> <thead> <tr> <th style='color:#045dab;'>FLUJOMETRIA DOPPLER</th> <th style='text-align:center;'>IP Observado</th> <th style='text-align:center;'>Percentiles de IP</th> <th style='text-align:center;'>Referencia para Edad</th> </tr></thead> <tbody> <tr> <td>Arteria Uterina Derecha*</td><td style='text-align:center;'>:UD</td><td style='text-align:center;'>:UDTXT</td><td style='text-align:center;'>:UDRGO</td></tr><tr> <td>Arteria Uterina Izquierda*</td><td style='text-align:center;'>:UI</td><td style='text-align:center;'>:UITXT</td><td style='text-align:center;'>:UIRGO</td></tr><tr> <td style='border-top: 1px dashed #045dab;'>Promedio Arterias Uterinas*</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:UPROM</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:UPROMTXT</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:UPROMRGO</td></tr><tr> <td style='padding-top: 15px !important;border-top: 1px dashed #045dab;'>Arteria Umbilical**</td><td style='text-align:center;padding-top: 15px !important;border-top: 1px dashed #045dab;'>:AU</td><td style='text-align:center;padding-top: 15px !important;border-top: 1px dashed #045dab;'>:AUTXT</td><td style='text-align:center;padding-top: 15px !important;border-top: 1px dashed #045dab;'>:AURGO</td></tr><tr> <td style='padding-bottom: 15px !important;'>Arteria Cerebral Media**</td><td style='text-align:center;padding-bottom: 15px !important;'>:ACM</td><td style='text-align:center;padding-bottom: 15px !important;'>:ACMTXT</td><td style='text-align:center;padding-bottom: 15px !important;'>:ACMRGO</td></tr><tr> <td style='border-top: 1px dashed #045dab;'>Cuociente Cerebro Placentario ( CCP )**</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:CCP</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:CCPTXT</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:CCPRGO</td></tr><tr> <td style='border-top: 1px dashed #045dab;'></td><td style='border-top: 1px dashed #045dab;'></td><td style='border-top: 1px dashed #045dab;'></td><td style='border-top: 1px dashed #045dab;'></td></tr></tbody> </table></div><div class='container'> <p style='padding-bottom:0px;margin-bottom:0px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container'> <p class='text-right top40' style='margin-right:100px;'>Ecografista Dr(a): :ECOGRAFISTA</p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina'>* Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32 <br>** Referencia para Doppler de arteria umbilical, C Media y CCP; Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127 <br>*** Referencia para Liq. Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000</p><p class='pie-pagina-dos'>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong> </p></div>";

        var paciente = $( '#nombre-paciente').val();
        var idpaciente = $( '#id-paciente').val();
        var motivo = $( '#motivo-examen option:selected').text();
        var ecografista = $( '#ecografista option:selected').text();

        let fur = new Date(Date.parse(document.getElementById("fum").value));
        fur = fur.getUTCDate() + " de "+ monthsES[fur.getMonth()] + " " + fur.getFullYear();
        let fexamen = new Date(Date.parse(document.getElementById("fee").value));
        fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getMonth()] + " " + fexamen.getFullYear();
        let fpp = new Date(Date.parse(document.getElementById("fpp").value));
        fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getMonth()] + " " + fpp.getFullYear();
        let eg = document.getElementById("semanas").value + "."+ document.getElementById("dias").value;
        
        var bvm = $('#bvmDoppler').val();
        var comentario = $("#comentarios-doppler").val();
        if (typeof comentario !== 'undefined'){
            comentario = comentario.replace(/\r?\n/g, "<br>");
        }
        else{
            comentario='';
        }
        
        var motivoDoppler = $( '#motivo-doppler').val();
        var antecedentes = $( '#antecedentes-doppler').val();
        var motilidad = $( '#motilidad-doppler').val();
        var ubicacion = $( '#ubicacion-doppler').val();
        var liquido = $( '#liqAmnioDoppler').val();
        var ud = $( '#aud').val();
        var udTxt = $( '#audPctTxt').val();
        var udRgo = '( ' + $( '#audRngo').val() + ' )';
        var ui = $( '#aui').val();
        var uiTxt = $( '#auiPctTxt').val();
        var uiRgo = '( ' + $( '#auiRngo').val() + ' )';
        var uprom = '<strong>' + $( '#auprom').val() + '</strong>';
        var upromTxt = '<strong>' + $( '#auPctTxt').val() + '</strong>';
        var upromRgo = '<strong>( ' + $( '#auRngo').val() + ' )</strong>';
        var au = $( '#ipau').val();
        var auTxt = $( '#ipauPctTxt').val();
        var auRgo = '( ' + $( '#ipauRngo').val() + ' )';
        var acm = $( '#ipacm').val();
        var acmTxt = $( '#ipacmPctTxt').val();
        var acmRgo = '( ' + $( '#ipacmRngo').val() + ' )';
        var ccp = '<strong>' + $( '#ccp').val() + '</strong>';
        var ccpTxt = '<strong>' + $( '#ccpPctTxt').val() + '</strong>';
        var ccpRgo = '<strong>( ' + $( '#ccpRngo').val() + ' )</strong>';
        var presentacion = $("#presentacion-doppler").val();
        var edadmaterna = $( "select[name='edad_materna']").val();
        
        let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getMonth()] + " " + dayHoy.getFullYear();

        var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
        
        InformeString = InformeString.replace(":PACIENTE", paciente);
        InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
        InformeString = InformeString.replace(":MOTIVO", motivo);
        InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
        InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);
        
        InformeString = InformeString.replace(":FUM", fur);
        InformeString = InformeString.replace(":FEXAMEN", fexamen);
        InformeString = InformeString.replace(":EG", eg);
        InformeString = InformeString.replace(":FPP", fpp);
        
        InformeString = InformeString.replace(":MOTIVODOPPLER", motivoDoppler);
        InformeString = InformeString.replace(":ANTECEDENTES", antecedentes);
        InformeString = InformeString.replace(":MOTILIDAD", motilidad);
        InformeString = InformeString.replace(":UBICACION", ubicacion);
        InformeString = InformeString.replace(":LIQUIDO", liquido);
        InformeString = InformeString.replace(":PRESENTACION", presentacion);
        InformeString = InformeString.replace(":BVM", bvm);
        InformeString = InformeString.replace(":UD", ud);
        InformeString = InformeString.replace(":UDRGO", udRgo);
        InformeString = InformeString.replace(":UDTXT", udTxt);
        InformeString = InformeString.replace(":UI", ui);
        InformeString = InformeString.replace(":UIRGO", uiRgo);
        InformeString = InformeString.replace(":UITXT", uiTxt);
        InformeString = InformeString.replace(":UPROM", uprom);
        InformeString = InformeString.replace(":UPROMRGO", upromRgo);
        InformeString = InformeString.replace(":UPROMTXT", upromTxt);
        InformeString = InformeString.replace(":AU", au);
        InformeString = InformeString.replace(":AURGO", auRgo);
        InformeString = InformeString.replace(":AUTXT", auTxt);
        InformeString = InformeString.replace(":ACM", acm);
        InformeString = InformeString.replace(":ACMRGO", acmRgo);
        InformeString = InformeString.replace(":ACMTXT", acmTxt);
        InformeString = InformeString.replace(":CCP", ccp);
        InformeString = InformeString.replace(":CCPRGO", ccpRgo);
        InformeString = InformeString.replace(":CCPTXT", ccpTxt);
        InformeString = InformeString.replace(":COMENTARIO", comentario);
        InformeString = InformeString.replace(":DATEINFORME", dateInf);
        InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);
        
        imprInforme(InformeString);
    });

    $("#btn\\.informe\\.ginecologica").on("click",function() {
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
        let fur = new Date(Date.parse(document.getElementById("fum").value));
        fur = fur.getUTCDate() + " de "+ monthsES[fur.getMonth()] + " " + fur.getFullYear();
        let fexamen = new Date(Date.parse(document.getElementById("fee").value));
        fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getMonth()] + " " + fexamen.getFullYear();

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
            document.getElementById("lcn").value = 0;
            $("#lcn").trigger("change");
            document.getElementById("utero-ubic1").selectedIndex = 0;
            document.getElementById("utero-ubic2").selectedIndex = 0;
            document.getElementById("cuerpo-uterino").selectedIndex = 0;
            document.getElementById("saco-gestacional").selectedIndex = 0;
            document.getElementById("saco-vitelino").selectedIndex = 1;
            $("#saco-vitelino").trigger("change");
            document.getElementById("fcf-prim").selectedIndex = 0;
            document.getElementById("anexo-derecho").selectedIndex = 0;

            document.getElementById("anexo-derecho").selectedIndex = 0;
            document.getElementById("anexo-izquierdo").selectedIndex = 0;
            document.getElementById("exploracion-douglas").selectedIndex = 0;
            document.getElementById("comentarios-eco-uno").value = "";

            document.getElementById("fum").value = getDate();
            document.getElementById("fee").value = getDate();
            $("#fum").trigger("change");

            $("#menu\\.modulo\\.prim\\.trim\\.no").button("toggle");
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

    $("#aud").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#aui").focus();
        }
    });

    $("#aui").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#ipau").focus();
        }
    });

    $("#ipau").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#ipacm").focus();
        }
    });

    $("#ipacm").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#dv").focus();
        }
    });

    $("#dv").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#psmACM").focus();
        }
    });
    
    $("#psmACM").on("keypress",function( e ) {
        if ( e.which == 13 ) {
           e.preventDefault();
           $("#modalPreInfEcoDoppler").focus();
        }
    });
});

//controlador de los gráficos
$( document ).ready(function() {
    $("#graficoSaco").on( 'click', function() {
        var modal = makeModal();
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
                    var edadGest = document.getElementById("semanas").value +"."+document.getElementById("dias").value;
    
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

    $("#graficoLcn").on( 'click', function() {
        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        document.getElementById(modal.titulo).innerText = "Longitud Cefalo Nalgas (LCN) en milimetros";
        document.getElementById(modal.contenido).innerHTML = '<div id="graficoLcnBaseView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoLcnBaseView').highcharts({
            title: {text: '',x: -20},
            xAxis: {
                categories: ['6', '7', '8', '9', '10',  '11', '12', '13', '14', '15']
            },
            yAxis: {
                title: {
                    text: 'milimetros (mm)'
                },
                tickPositions: [2, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
            },
            credits: {enabled:false},
            colors: ['#313131', '#313131', '#313131'],
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
             },
            series: [{
                name: '(-) 2DE',
                type: "line",
                marker: { enabled: false },
                data: [2.6, 7.7, 14, 20.5, 26.2,35.5, 46.8, 58.2, 69.8, 80.2],
                dashStyle: 'shortdot'
            }, {
                name: 'Media',
                type: "line",
                marker: { enabled: false },
                data: [3.8, 8.9, 15.4, 22.5, 29.5,40.5, 52.9, 66.5, 79.0, 90.1]
            }, {
                name: '(+) 2DE',
                type: "line",
                marker: { enabled: false },
                data: [5.3, 10.4, 17.1, 24.9, 33.2,46.4, 60.8, 75.7, 89.1, 100.1],
                dashStyle: 'shortdot'
            }, {
                type: "line",
                name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    // generate an array of random data
                    var data = [];
                    var egLcn2 = document.getElementById("semanas").value;
                    var lcn = $("#lcn").val();
                    lcn = lcn.toString();
                    lcn = lcn.replace(",", ".");
                    lcn = parseFloat(lcn);
    
                    var lcnegx = [];
                    var flag = false;
    
                    lcnegx[1] = 6;
                    lcnegx[2] = 7;
                    lcnegx[3] = 8;
                    lcnegx[4] = 9;
                    lcnegx[5] = 10;
                    lcnegx[6] = 11;
                    lcnegx[7] = 12;
                    lcnegx[8] = 13;
                    lcnegx[9] = 14;
                    lcnegx[10] = 14;
    
                    for (i = 1; i <= 10; i++) {
                        if (lcnegx[i] >= egLcn2) {
                            if (flag == false) {
                            data.push({
                                y: lcn,
                            });
                            flag = true;
                            }
                            else {
                             data.push({
                                y:0,
                             });
                            }
                        }
                        else {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
    });

    $("#graficoAud").on( 'click', function() {
        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        document.getElementById(modal.titulo).innerText = "Gráfico Arteria Uterina Derecha";
        document.getElementById(modal.contenido).innerHTML = '<div id="graficoArtUtDerView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoArtUtDerView').highcharts({
            title: {
                text: 'IP Arterias Uterinas Derecha',
                x: -20,
                    style: {
                fontSize: '10px'
            }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: 'Valor IP' },
                tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'] 
            },
            credits: { enabled: false },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: { enabled: false },
                data: [1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: { enabled: false },
                data: [2.84,2.71,2.53,2.38,2.24,2.11,1.99,1.88,1.79,1.71,1.61,1.54,1.47,1.41,1.35,1.3,1.25,1.21,1.17,1.13,1.11,1.06,1.04,1.01,0.99,0.97,0.95,0.94,0.92,0.91,0.91]
            }, {
                type: "line",
                    name: 'Arteria Promedio',
                    dashStyle: "Dot",
                    marker: { symbol: 'square' },
                    lineWidth: 0,
                data: (function () {
                        // generate an array of random data
                        var data = [];
                        var edadGest = document.getElementById("semanas").value;
                        for (i = 10; i <= edadGest; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        var aud = $("#aud").val();
                        aud = aud.toString();
                        aud = aud.replace(",", ".");
                        aud = parseFloat(aud);
                        
                        data.push({
                                y: aud,
                            });
                        for (i = (edadGest +1); i <= 39; i ++ ) {
                            data.push({
                                y: 0,
                            });
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

function imprInforme(datos){
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

//funciones para cálculos
function egSaco(saco) {
	'use strict';
	let a = [];
    a[5] =4.2; a[6] =4.3; a[7] =4.4; a[8] =4.5; a[9] =4.6; a[10] =5; a[11] =5.1; a[12] =5.2; a[13] =5.3; a[14] =5.4; a[15] =5.5; a[16] =5.6; a[17] =6; a[18] =6.1; a[19] =6.2; a[20] =6.3; a[21] =6.4; a[22] =6.5; a[23] =6.6; a[24] =7; a[25] =7.1; a[26] =7.2; a[27] =7.3; a[28] =7.4; a[29] =7.5; a[30] =7.6; a[31] =8; a[32] =8.1; a[33] =8.2; a[34] =8.3; a[35] =8.4; a[36] =8.5; a[37] =8.6; a[38] =9; a[39] =9.1; a[40] =9.2; a[41] =9.3; a[42] =9.4; a[43] =9.5; a[44] =9.6; a[45] =9.6; a[46] =10; a[47] =10.1; a[48] =10.2; a[49] =10.3; a[50] =10.4; a[51] =10.5; a[52] =11; a[53] =11.1; a[54] =11.2; a[55] =11.3; a[56] =11.4; a[57] =11.5; a[58] =11.6; a[59] =12; a[60] =12.1; a[61] =12.2;
	
    saco = saco.replace(",", ".");
    saco = parseInt(saco);

    if (saco < 5 || saco > 61) {
        return 0;
    }
    else {
        return a[saco];
    }
};

function eglcn(lcn) {
	'use strict';
	let a = [[],[]];

    a[0][0] = 0.09; a[0][1] = 0.2; a[0][2] = 0.37; a[0][3] = 0.57; a[0][4] = 0.7; a[0][5] = 0.8; a[0][6] = 0.9; a[0][7] = 1; a[0][8] = 1.1; a[0][9] = 1.12; a[0][10] = 1.13; a[0][11] = 1.18; a[0][12] = 1.27; a[0][13] = 1.38; a[0][14] = 1.47; a[0][15] = 1.58; a[0][16] = 1.65; a[0][17] = 1.72; a[0][18] = 1.87; a[0][19] = 1.96; a[0][20] = 2.05; a[0][21] = 2.18; a[0][22] = 2.25; a[0][23] = 2.35; a[0][24] = 2.54; a[0][25] = 2.62; a[0][26] = 2.7; a[0][27] = 2.9; a[0][28] = 3.08; a[0][29] = 3.16; a[0][30] = 3.4; a[0][31] = 3.51; a[0][32] = 3.57; a[0][33] = 3.76; a[0][34] = 3.85; a[0][35] = 4.05; a[0][36] = 4.18; a[0][37] = 4.46; a[0][38] = 4.55; a[0][39] = 4.66; a[0][40] = 4.88; a[0][41] = 5.07; a[0][42] = 5.29; a[0][43] = 5.46; a[0][44] = 5.66; a[0][45] = 5.87; a[0][46] = 6.01; a[0][47] = 6.27; a[0][48] = 6.37; a[0][49] = 6.65; a[0][50] = 6.77; a[0][51] = 7.08; a[0][52] = 7.19; a[0][53] = 7.39; a[0][54] = 7.57; a[0][55] = 7.68; a[0][56] = 7.98; a[0][57] = 8.09; a[0][58] = 8.35; a[0][59] = 8.48; a[0][60] = 8.56; a[0][61] = 8.76; a[0][62] = 8.88; a[0][63] = 9.09;
    a[1][0] = 0; a[1][1] = 5.5; a[1][2] = 6; a[1][3] = 6.2; a[1][4] = 6.4; a[1][5] = 6.5; a[1][6] = 6.6; a[1][7] = 7.1; a[1][8] = 7.1; a[1][9] = 7.1; a[1][10] = 7.2; a[1][11] = 7.3; a[1][12] = 7.4; a[1][13] = 7.5; a[1][14] = 7.6; a[1][15] = 8; a[1][16] = 8.1; a[1][17] = 8.2; a[1][18] = 8.3; a[1][19] = 8.4; a[1][20] = 8.5; a[1][21] = 8.6; a[1][22] = 9; a[1][23] = 9.1; a[1][24] = 9.2; a[1][25] = 9.3; a[1][26] = 9.4; a[1][27] = 9.5; a[1][28] = 10; a[1][29] = 10.1; a[1][30] = 10.2; a[1][31] = 10.3; a[1][32] = 10.4; a[1][33] = 10.5; a[1][34] = 10.6; a[1][35] = 11; a[1][36] = 11.1; a[1][37] = 11.2; a[1][38] = 11.3; a[1][39] = 11.4; a[1][40] = 11.5; a[1][41] = 11.6; a[1][42] = 12; a[1][43] = 12.1; a[1][44] = 12.2; a[1][45] = 12.3; a[1][46] = 12.4; a[1][47] = 12.5; a[1][48] = 12.6; a[1][49] = 13; a[1][50] = 13.1; a[1][51] = 13.2; a[1][52] = 13.3; a[1][53] = 13.4; a[1][54] = 13.5; a[1][55] = 13.6; a[1][56] = 14; a[1][57] = 14.1; a[1][58] = 14.2; a[1][59] = 14.3; a[1][60] = 14.4; a[1][61] = 14.5; a[1][62] = 14.6; a[1][63] = 15;

    lcn = lcn.toString();
    lcn = lcn.replace(",", ".");
    lcn = parseFloat(lcn);

    if (isNaN(lcn) != true){
	    if (lcn > 90 || lcn < 1){
	    	return 0;
	    }
	    else {
		    lcn = lcn / 10;
		    for (let i = 1; i <= 63; i ++ ) {
                if (a[0][i] >= lcn) {
                    return a[1][i];
                }
		    }
	    }
    }
    else{
        return 0;
    }
};