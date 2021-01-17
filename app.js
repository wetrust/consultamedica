var daysES=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var monthsES=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var dayHoy = new Date();
var day = ("0" + dayHoy.getUTCDate()).slice(-2);
var month = ("0" + (dayHoy.getUTCMonth() + 1)).slice(-2);
var activeHash = "#browser";

var titulos = {
    "#consulta": "Datos iniciales de configuración",
    "#paciente": "Información útil para reporte de informe y / o graficas (Opcional)",
    "#tipoExamen": "Módulos de la aplicación",
    "#ecoDoppler": "Flujometría Doppler materno / fetal",
    "#ecoObsSegTrim": "Evaluación del crecimiento fetal",
    "#ecoObsPrimTrim": "Ecografía obstétrica precoz < 11 semanas",
    "#morfologiafet": 'Ecografía 22 - 24 semanas para evaluación de morfología fetal <span class="text-animado"><strong>(Gentileza Dr. Edgardo Corral y equipo de trabajo)</strong></span>',
    "#construccion": 'Módulo en construcción',
    "#ecoGinecologica": "Informe ecográfico ginecológico (Adicional al exámen ecográfico obstétrico)",
    "#ecoObsPrimTrimTrisomia": 'Ecografía 11 - 14 semanas, tamizaje de preeclampsia y cromosomopatía <span class="text-animado"><strong>(Módulo en construcción)</strong></span>'
}

// Comementario adicional anatomia 
document.location.hash = "";

// Controlador de funciones base cuando se carga la pagina
$( document ).ready(function() {
    //detalle extraño
    the("problematico").checked = true

    $("#fechaHora").append(daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear());
    the("fum").value = getDate();
    the("fee").value = getDate();

    //cargar select semana y dias
    for (var i = 0; i < 43; i++) {
        let semanas = the("semanas");
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i; 
        semanas.appendChild(opt); 
    }

    for (var i = 25; i < 43; i++) {
        let semanas = the("edadGestacional");
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i;
        semanas.appendChild(opt);
    }

    $('#edadGestacional option[value="40"]').prop('selected', true);

    for (var i = 0; i < 7; i++) {
        let dias = the("dias");
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i; 
        dias.appendChild(opt); 
    }

    //cargar frecuencia cardiaca fetal primer trimestre
    let dias = the("fcf-prim");
    let opt = document.createElement('option');
    opt.appendChild(document.createTextNode("(+) inicial"));
    opt.value = "(+) inicial"; 
    dias.appendChild(opt); 
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("< 80") );
    opt.value = "&lt; 80"; 
    dias.appendChild(opt);

    for (var i = 80; i < 181; i++) {
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i; 
        dias.appendChild(opt); 
    }

    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("> 180") );
    opt.value = "&gt; 180"; 
    dias.appendChild(opt);

    dias = the("fcf-prim-dos");
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("(+) inicial") );
    opt.value = "(+) inicial"; 
    dias.appendChild(opt); 
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("< 80") );
    opt.value = "&lt; 80"; 
    dias.appendChild(opt);

    for (var i = 80; i < 181; i++) {
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i; 
        dias.appendChild(opt); 
    }

    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("> 180") );
    opt.value = "&gt; 180"; 
    dias.appendChild(opt);

    //cargar la frecuencia cardiaca fetal para segundo trimestre
    dias = the("fcf");
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("(+) inicial") );
    opt.value = "(+) inicial"; 
    dias.appendChild(opt); 
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("< 90") );
    opt.value = "&lt; 90"; 
    dias.appendChild(opt);

    for (var i = 90; i < 171; i++) {
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(i) );
        opt.value = i; 
        dias.appendChild(opt); 
    }
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("> 170") );
    opt.value = "&gt; 170"; 
    dias.appendChild(opt);

    if (storageAvailable('localStorage')) { document.location.hash = "#inicio"; }

    //cargar edad materna
    let edad = document.getElementsByName("edad_materna")[0];
    opt = document.createElement('option');
    opt.appendChild( document.createTextNode("< 12") );
    opt.value = "&lt; 12"; 
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
    opt.value = "&gt; 60"; 
    edad.appendChild(opt); 

    //funcion rara
    $("#menu\\.modulo\\.activo").mouseout(function(){
        if (the("menu.modulo.activo").classList.contains("btn-dark")){
            the("menu.modulo.activo").classList.remove("btn-dark");
            the("menu.modulo.activo").classList.add("btn-outline-dark");
        }
    });

    //controlador de botones inicio
    $("#menu\\.modulo\\.activo").on("click", function(){
        var botones = ["menu.modulo.activo.uno", "menu.modulo.activo.dos", "menu.modulo.activo.tres", "menu.modulo.activo.cuatro"];
        
        if (the(botones[0]).classList.contains("d-none")){
            botones.forEach(function myFunction(value, index, array) {
                the(value).classList.remove("d-none");
            });
        }
        else{
            botones.forEach(function myFunction(value, index, array) {
                the(value).classList.add("d-none");
            });
        }
    });

    $("#menu\\.modulo\\.activo\\.cinco").on("click", function(){
        var botones = ["menu.modulo.activo.cinco.uno", "menu.modulo.activo.cinco.dos","menu.modulo.activo.cinco.tres"];
        
        if (the(botones[0]).classList.contains("d-none")){
            botones.forEach(function myFunction(value, index, array) {
                the(value).classList.remove("d-none");
            });
        }
        else{
            botones.forEach(function myFunction(value, index, array) {
                the(value).classList.add("d-none");
            });
        }
    });

    $("#menu\\.modulo\\.activo\\.seis").on("click", function(){
        var botones = ["menu.modulo.activo.seis.uno", "menu.modulo.activo.seis.dos","menu.modulo.activo.seis.tres"];
        
        if (the(botones[0]).classList.contains("d-none")){
            botones.forEach(function myFunction(value, index, array) {
                the(value).classList.remove("d-none");
            });
        }
        else{
            botones.forEach(function myFunction(value, index, array) {
                the(value).classList.add("d-none");
            });
        }
    });

    $("#menu\\.modulo\\.construccion").on("click", function(){
        var botones = ["menu.modulo.construccion.uno", "menu.modulo.construccion.dos"];
        
        if (the("menu.modulo.construccion.uno").classList.contains("d-none")){
            botones.forEach(function myFunction(value, index, array) {
                the(value).classList.remove("d-none");
            });
        }
        else{
            botones.forEach(function myFunction(value, index, array) {
                the(value).classList.add("d-none");
            });
        }
    });

    //controlador al cambiar input de edad gestacional
    $("#fum").on("change", function(){
        let fum = dayHoy;
        fum.setTime(Date.parse(the("fum").value));
        fum.setTime(fum.getTime() + (1000*60*60*24*282));
        the("fpp").value = getDate(fum);

        fum.setTime(fum.getTime() - (1000*60*60*24*282));
        fum = fum.getTime();
        let fee = dayHoy;
        fee.setTime(Date.parse(the("fee").value));
        fee = fee.getTime();

        //la fecha de mestruación si puede ser antes de la fecha de exámen
        let diff = fee - fum;

        if (diff > 0){
            let dias = Math.abs(diff/(1000*60*60*24));
            let semanas = Math.trunc(dias / 7);
            the("diaciclo").value = dias;
            dias = Math.trunc(dias - (semanas * 7));
            the("semanas").value = semanas;
            the("dias").value = dias;
        }
        else{
            the("semanas").value = 0;
            the("dias").value = 0;
            the("diaciclo").value = 0;
        }
    }).trigger("change");

    $("#fee").on("change", function(){
        let fum = dayHoy; 
        fum.setTime(Date.parse(the("fum").value));
        fum = fum.getTime();
        let fee = dayHoy;
        fee.setTime(Date.parse(the("fee").value));
        fee = fee.getTime();

        //la fecha de exámen no puede ser anterior a la fecha de última regla
        let diff = fee - fum;

        if (diff > 0){
            let dias = diff/(1000*60*60*24);
            let semanas = Math.trunc(dias / 7);
            the("diaciclo").value = dias;
            dias = Math.trunc(dias - (semanas * 7));
            the("semanas").value = semanas;
            the("dias").value = dias;
        }
        else{
            the("semanas").value = 0;
            the("dias").value = 0;
            the("diaciclo").value = 0;
        }
    });

    $("#semanas, #dias").on("change", function(){
        let semanas = parseInt(the("semanas").value);
        let dias = parseInt(the("dias").value);
        semanas = 7 * semanas;
		let fee = new Date(the("fee").value);
		dias = (semanas + dias-1)*(1000*60*60*24);
        fee.setTime(fee.getTime() - dias);

        the("fum").value = getDate(fee);
        $("#fum").trigger("change");
    });

    //controlador de botones para ver la configuración
    $('#configSiController').on('click', function(){
        document.location.hash = "configuracion";
    });

    $('#configSiController').on('focusout', function(){
        $('#configNoController').button('toggle');
    });

    $('#informacionPacienteSi').on('click', function(){
        document.location.hash = "paciente";
    });

    $('#informacionPacienteSi').on('focusout', function(){
        $('#informacionPacienteNo').button('toggle');
    });

    $('#ajusteDosSi').on('click', function(){
        egP50 = String(the("egP50").value);
        if (egP50 != ""){
            egP50 = egP50.split(".");
            the("semanas").value = egP50[0];
            if (egP50.length >1){
                the("dias").value = egP50[1];
            }
            $("#semanas").trigger("change");
        }
    });

    //controlador de ecografía de primer trimestre
    $("#saco").on("change", function(){
        the("sacoPct").value = egSaco(this.value);
        if (+this.value > 0){
            $("#sacoFlecha").hide();
            $("#sacoModulo").hide();
        }
        else{
            $("#sacoFlecha").show();
            $("#sacoModulo").show();
        }
    });

    $("#saco-gestacional").on("change", function(){
        if (this.value == "no se observa"){
            the("saco.clon").parentElement.parentElement.classList.add("d-none");
            the("saco").parentElement.parentElement.parentElement.classList.add("d-none");
            the("saco").value = 0;
            $("#saco").trigger("change");
        }
        else{
            the("saco.clon").parentElement.parentElement.classList.remove("d-none");
            the("saco").parentElement.parentElement.parentElement.classList.remove("d-none");
        }
    });

    $("#lcn").on("change", function(){
        the("lcnPct").value = eglcn(this.value);

        if (+this.value > 0){
            $("#mensajeSaco").hide();
            $("#sacoFlecha").hide();
            $("#sacoModulo").hide();
        }
        else{
            $("#mensajeSaco").show();
            $("#sacoFlecha").show();
            $("#sacoModulo").show();
        }

        var eg = parseFloat(the("semanas").value + "." +the("dias").value);
        let semanas = parseInt(the("semanas").value);
        let dias = parseInt(the("dias").value);
        var EGLCN = the("lcnPct").value;

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
            fee.setTime(Date.parse(the("fee").value));
            fee.setTime(fee.getTime() - (1000*60*60*24*eg1));

            the("furAjustada").value = getDate(fee);

            the("semanasAjustada").value = Math.trunc(EGLCN);
            the("diasAjustada").value = Math.trunc((EGLCN - Math.trunc(EGLCN))* 10);

            fee.setTime(fee.getTime() + (1000*60*60*24*282));
            the("fppAjustada").value = getDate(fee);
        }
    });

    $("#saco-vitelino").on("change", function(){
        if (this.value == "no se observa"){
            the("valor-saco-vitelino").parentElement.classList.add("d-none");
            the("saco-vitelino-mm").value = 0;
        }
        else{
            the("valor-saco-vitelino").parentElement.classList.remove("d-none");
        }
    });

    $("#embrion, #embrion\\.clon").on("change", function(){
        let optiones = ["no se observa aun"];
        let cardio = ["con act. cardiaca (+)", "act. cardiaca evidenciable", "act. card. y Corp.(+)"];
        let embrion = the("embrion").value;

        if (optiones.includes(embrion)){
            the("lcn.clon").parentElement.parentElement.parentElement.classList.add("d-none");
            the("lcn").parentElement.parentElement.parentElement.classList.add("d-none");
            the("lcn").value = 0;
            $("#lcn").trigger("change");
        }
        else{
            the("lcn.clon").parentElement.parentElement.parentElement.classList.remove("d-none");
            the("lcn").parentElement.parentElement.parentElement.classList.remove("d-none");
        }

        if (cardio.includes(embrion)){
            the("fcf-primer-trim").classList.remove("d-none");
            the("fcf-primer-trim-dos").classList.remove("d-none");
            the("fcf-prim").value = (embrion == "act. cardiaca evidenciable") ? "(+) inicial": 150;
            the("fcf-prim-dos").value = (embrion == "act. cardiaca evidenciable") ? "(+) inicial": 150;
        }
        else{
            the("fcf-primer-trim").classList.add("d-none");
            the("fcf-primer-trim-dos").classList.add("d-none");
        }
    });

    $("#menu\\.modulo\\.prim\\.trim\\.si").on("click", function(){
        the("semanas").value = the("semanasAjustada").value;
        the("dias").value = the("diasAjustada").value;
        $("#semanas").trigger("change");
    });

    $("#aud").on("change",function(){
        let ut = pctut(this.value);
        $("#audPct").val(ut.pct);
        $("#audPctTxt").val(ut.pct);
        $("#audRngo").val(ut.rango.min + " - " + ut.rango.max);
        ajustarProgreso(ut.raw, "audPct");

        aui = parseFloat($("#aui").val());
        aud = parseFloat(this.value);
        let utprom = ((aui + aud) / 2);
        the("auprom").value = utprom.toFixed(2);
        $("#auprom").trigger("change");
    });

    $("#aui").on("change",function(){
        let ut = pctut(this.value);
        $("#auiPct").val(ut.pct);
        $("#auiPctTxt").val(ut.pct);
        $("#auiRngo").val(ut.rango.min + " - " + ut.rango.max);
        ajustarProgreso(ut.raw, "auiPct");

        aui = parseFloat(this.value);
        aud = parseFloat($("#aud").val());
        let utprom = ((aui + aud) / 2);
        the("auprom").value = utprom.toFixed(2);
        $("#auprom").trigger("change");
    });

    $("#auprom").on("change",function(){
        let ut = pctut(this.value);
        $("#auPct").val(ut.pct);
        $("#auPctTxt").val(ut.pct);
        $("#auRngo").val(ut.rango.min + " - " + ut.rango.max);
        ajustarProgreso(ut.raw, "auPct");
    });

    $("#dv").change( pctdv);
    $("#ipau").change( pctau);
    $("#ipacm").change( pctacm);

    $( '#dbp' ).change( deDBP);
    $( '#cc' ).change( function(){
        valccca();
        pctcc();
    });
    $( '#ca' ).change( function(){
        valccca();
        pctca();
    });
    $( '#lf' ).change( pctlf);
    $( '#cerebelo' ).change( pctcb);
    $( "#bvm" ).change(bvm).on("keyup", function(){
        the("bvmEcoDos").value = this.value

        let txt = (isNumeric(this.value) == true) ? bvmTxt(this.value) : "normal";
        the("liq-cualitativo-eco").value = txt;
    });
 
    $( '#lh').change( pctlh);
    $( '#dof').change( calcdof);

    $("#art\\.ut").on("click", function(){
        if (this.checked == true){
            the("art.ut.div").classList.remove("d-none");
            the("respuesta_uterina_derecha").focus();
        }else{
            the("art.ut.div").classList.add("d-none");
        }
    });

    $("#larg\\.cerv").on("click", function(){
        if (this.checked == true){
            the("larg.cerv.div").classList.remove("d-none");
            the("largo.cervical.segundo").focus();
        }else{
            the("larg.cerv.div").classList.add("d-none");
        }
    });

    $("#largo\\.cervical\\.segundo").on("keyup", function(){
        let cV = +this.value;
        if (cV == NaN){
            the("info.cervix").innerHTML = "";
            the("info.cervix").classList.add("d-none");
        }else if (cV < 25){
            the("info.cervix").innerHTML ='<p class="mb-0">Cérvix corto</p>';
            the("info.cervix").classList.remove("d-none");
        }else if(cV > 24){
            the("info.cervix").innerHTML ='<p class="mb-0">Cérvix normal</p>';
            the("info.cervix").classList.remove("d-none");
        }
    })

    $("#ver\\.ref").on("click", function(){
        if (this.checked == true){
            the("ver.ref.div").classList.remove("d-none");
        }else{
            the("ver.ref.div").classList.add("d-none");
        }
    });

    $("#ver\\.ecoPrimTrim, #ver\\.ecoPrimTrim\\.snoopy, #ver\\.ecoObsSegTrim\\.snoopy, #ver\\.ecoDoppler\\.snoopy, #ver\\.ecoGinecologica\\.snoopy, #ver\\.ecoPrimTrim\\.new, #ver\\.ila\\.morfologia").on("click", function(){
        if (this.checked == true){
            this.parentElement.parentElement.children[1].classList.remove("d-none");
        }else{
            this.parentElement.parentElement.children[1].classList.add("d-none");
        }
    });

    $("#ver\\.consulta").on("click", function(){
        if (this.checked == true){
            this.parentElement.parentElement.children[1].classList.remove("d-none");
        }else{
            this.parentElement.parentElement.children[1].classList.add("d-none");
        }
    });

    $("#ver\\.morfo\\.new").on("click", function(){
        if (this.checked == true){
            this.parentElement.parentElement.children[1].classList.remove("d-none");
        }else{
            this.parentElement.parentElement.children[1].classList.add("d-none");
        }
    });

    $("#ver\\.ref\\.morfologia").on("click", function(){
        if (this.checked == true){
            the("ver.ref.div.morfologia").classList.remove("d-none");
        }else{
            the("ver.ref.div.morfologia").classList.add("d-none");
        }
    });

    $("#ver\\.ref\\.doppler\\.morfologia").on("click", function(){
        if (this.checked == true){
            the("ver.ref.div.doppler.morfologia").classList.remove("d-none");
        }else{
            the("ver.ref.div.doppler.morfologia").classList.add("d-none");
        }
    });

    $("#respuesta_uterina_derecha").on("keyup",function(){
        let ut = pctut(this.value);
        $("#respuesta_uterina_derecha_percentil").html(ut.pct);

        aui = parseFloat($("#respuesta_uterina_izquierda").val());
        aud = parseFloat(this.value);
        let utprom = ((aui + aud) / 2);
        the("respuesta_uterina_promedio").value = utprom.toFixed(2);
        $("#respuesta_uterina_promedio").trigger("change");
    });

    $("#respuesta_uterina_izquierda").on("keyup",function(){
        let ut = pctut(this.value);
        $("#respuesta_uterina_izquierda_percentil").html(ut.pct);

        aui = parseFloat(this.value);
        aud = parseFloat($("#respuesta_uterina_derecha").val());
        let utprom = ((aui + aud) / 2);
        the("respuesta_uterina_promedio").value = utprom.toFixed(2);
        $("#respuesta_uterina_promedio").trigger("change");
    });

    $("#respuesta_uterina_promedio").on("change",function(){
        let ut = pctut(this.value);
        $("#respuesta_uterina_promedio_percentil").html(ut.pct);
        $("#respuesta_uterina_promedio_rango").val(ut.rango.min + " - " + ut.rango.max);
    });

    $("#pdfnacionalview").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/gnacional.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#recienacido");
    });

    $("#pdfregionalview").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/gregional.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#recienacido");
    });

    $("#pdfregionalviewA").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/gregional.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#ajustepeso");
    });

    $("#pdfnuevo").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/uso_ecografia_doppler_obstetrcia.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#ajustepeso");
    });

    $("#pdfnacional").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/gnacional.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#inicio");
    });

    $("#pdfregional").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/gregional.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#inicio");
    });

    $("#pdfuno").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/1_ISUOG-Ultrasound-assessment-of-fetal-biometry-and-growth-Spanish.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#inicio");
    });

    $("#pdfmorfonewx").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://www.isuog.org/uploads/assets/uploaded/87c804a5-87af-4af8-96a700eb4061fb09.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#ecoObsSegTrim");
    });
    $("#pdfmorfonew").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://www.isuog.org/uploads/assets/uploaded/87c804a5-87af-4af8-96a700eb4061fb09.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#morfologiafet");
    });

    $("#pdfunoInternal").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/1_ISUOG-Ultrasound-assessment-of-fetal-biometry-and-growth-Spanish.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#ecoObsSegTrim");
    });

    $("#pdfminsal").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/minsal.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#ecoObsSegTrim");  
    })

    $("#pdfdopplernuevo").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/uso_ecografia_doppler_obstetrcia.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#ecoDoppler");
    });

    $("#pdfprimtrim").on("click", function(){
        $("#pdfview").html('<iframe class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/primtrim.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#ecoObsPrimTrim");
    });

    $("#pdfdos").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/2_Defectos_del_crecimiento_fetal.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#inicio");
    });

    $("#pdfbarcelona").on("click", function(){
        $("#pdfview").html('<iframe  class="embed-responsive-item" src="https://crecimientofetal.cl/pdf/2_Defectos_del_crecimiento_fetal.pdf"></iframe>');
        $("#pdfviebox").children("ol").children().children().attr("href","#ecoDoppler");
    });

    $('#ev-morfo').on('change', function() {
        if (this.value == "Descripcion general detallando distintos segmentos") {
            $("#comentarios-anatomia-informe-eg-texto").val("Evaluación anatómica general de aspecto normal; cráneo y estructura internas de aspecto normal, cara cuello normal, labio superior integro, Tórax y abdomen de aspecto normal, corazón cuatro cámaras, tractos de salida de aspecto normal, cámara gástrica y vejiga visibles, riñón derecho e izquierdo de aspecto normal, pared abdominal integra, columna visible en toda su extensión, extremidades con movilidad y tono de aspecto normal, sexo fetal masculino.");
            the("comentarios-anatomia-informe-eg-texto").parentElement.classList.remove("d-none");
        }else if (this.value == "hallazgos de siguientes patologías:"){
            $("#comentarios-anatomia-informe-eg-texto").val('');
            the("comentarios-anatomia-informe-eg-texto").parentElement.classList.remove("d-none");
        } else {
            $("#comentarios-anatomia-informe-eg-texto").val('');
            the("comentarios-anatomia-informe-eg-texto").parentElement.classList.add("d-none");
        }
    });

    $("#cm\\.ecoDosTres").on("keyup", function(){
        var cisM10 = [];
        var cisM90 = [];

        cisM10[14] = 1.69; cisM10[15] = 2.1; cisM10[16] = 2.4; cisM10[17] = 2.6;
        cisM10[18] = 2.8; cisM10[19] = 3.1; cisM10[20] = 3.3; cisM10[21] = 3.5;
        cisM10[22] = 3.7; cisM10[23] = 3.9; cisM10[24] = 4.1; cisM10[25] = 4.3;
        cisM10[26] = 4.4; cisM10[27] = 4.6; cisM10[28] = 4.7; cisM10[29] = 4.9;
        cisM10[30] = 5.0; cisM10[31] = 5.1; cisM10[32] = 5.2; cisM10[33] = 5.3;
        cisM10[34] = 5.3; cisM10[35] = 5.4; cisM10[36] = 5.4; cisM10[37] = 5.4;
        cisM10[38] = 5.5; cisM10[39] = 5.5;

        cisM90[14] = 5.3; cisM90[15] = 5.7; cisM90[16] = 6; cisM90[17] = 6.3;
        cisM90[18] = 6.6; cisM90[19] = 6.9; cisM90[20] = 7.2; cisM90[21] = 7.5;
        cisM90[22] = 7.7; cisM90[23] = 8; cisM90[24] = 8.2; cisM90[25] = 8.5;
        cisM90[26] = 8.7; cisM90[27] = 8.9; cisM90[28] = 9.1; cisM90[29] = 9.3;
        cisM90[30] = 9.4; cisM90[31] = 9.6; cisM90[32] = 9.7; cisM90[33] = 9.8;
        cisM90[34] = 9.9; cisM90[35] = 10; cisM90[36] = 10; cisM90[37] = 10.1;
        cisM90[38] = 10.1; cisM90[39] = 10.1;
        
        let eg = the("semanas").value;
        let cm = this.value;
        
        cm = cm.toString();
        cm = cm.replace(",", ".");
        cm = parseFloat(cm);

        if (eg < 14 ||eg > 39) {
            the("cm.pct.ecoDosTres").value = 0
        }else {
            eg = parseInt(eg);
            var uno = cisM90[eg] - cisM10[eg];
            var dos = cm - cisM10[eg];
            var resultado = parseInt(95 / (uno) * (dos));
            var pctCISM = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 99){
                pctCISM = '> 99';
            }
            else if (resultado < 1){
                pctCISM = '< 1';
            }
            else{
                pctCISM = resultado;
            }

            $('#cm\\.pct\\.ecoDosTres').val(pctCISM);
            ajustarProgreso(resultado, "cmEcoDosTres");
        }
    })

    $("#atrio\\.ecoDosTres").on("keyup", function(){
        atrio = this.value;
        atrio = atrio.toString();
        atrio = atrio.replace(",", ".");
        atrio = parseFloat(atrio);

        if (atrio < 10){
            the("atrio.desc.ecoDosTres").value = "Normal"
        }else if (atrio < 16){
            the("atrio.desc.ecoDosTres").value = "Ventriculomegalia"
        }else{
            the("atrio.desc.ecoDosTres").value = "Hidrocefalia"
        }
    })

    $("#nombre-paciente").on("change", function(){ the("nombre.morfologia").value = this.value; })

    $("#ecografista").on("change", function(){
        var nombre = this.options[this.selectedIndex].text
        the("ecografista.morfologia").value = nombre;
    })

    $("#morfologia-morfologia-tab").on("click", function(){
        var elemento = the("ecografista");
        var nombre = (the("ecografista").options.length == 0) ? "" : elemento.options[elemento.selectedIndex].text
        the("ecografista.morfologia").value = nombre;
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        //e.target  newly activated tab
        //e.relatedTarget  previous active tab
        if (e.target.id == "morfologia-morfologia-tab"){
            the("vlp.morfologia").focus()
        }else if (e.target.id == "morfologia-flujometria-tab"){
            the("art.ut.d.morfologia").focus()
        }

      })

    $("#goto\\.morfologia").on("click", function(){
        $("#morfologia-morfologia-tab").trigger("click");
        window.scrollTo(0, 0)
    })

    $("#goto\\.doppler").on("click", function(){
        $("#morfologia-flujometria-tab").trigger("click");
        window.scrollTo(0, 0)
    })

    $("#goto\\.ginecol").on("click", function(){
        //si va de primer trimestre a ginecologico, cambiar el volver para que regrese a
        //primer trimestre

        $("#volver").attr("href", "#ecoObsPrimTrim");
    })

    $("#bvmEcoDos").on("keyup", function(){
        let txt = (isNumeric(this.value) == true) ? bvmTxt(this.value) : "normal";
        the("liq-cualitativo-eco").value = txt;

        the("bvm").value = (isNumeric(this.value) == true) ? this.value : 0;
    })

    $("#bvmDoppler").on("keyup", function(){
        let txt = (isNumeric(this.value) == true) ? bvmTxt(this.value) : "normal";
        the("liqAmnioDoppler").value = txt;
    })

    $("#liquido\\.semi\\.morfologia").on("keyup", function(){
        let txt = (isNumeric(this.value) == true) ? bvmTxt(this.value) : "normal";
        the("liquido.cualitativo.morfologia").value = txt;
    })

    $("#fcf-prim-dos").on("change", function(){
        $("#fcf-prim").val(this.value)
    })

    $("#eco\\.seg\\.trim\\.select\\.comentario").on("change", function(){
		var sexoFetal = $('#ecografia\\.segtrim\\.sexo').val();
		
        if ($(this).val() == 1){
            $('#bvmEcoDos').val($('#bvm').val()).trigger('change');

            var percentilPeso = $('#pfePctRpt').val();
			percentilPeso = percentilPeso.replace('&lt;', '<').replace('&gt;', '>');
            var comentarios = 'Sexo Fetal ' + sexoFetal + '\r\nCrecimiento (peso) percentil ' + percentilPeso + ', para gráfica de peso fetal Hadlock* \r\n';

            var linea6 = "Líquido amniótico " + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor " + document.getElementById("bvmEcoDos").value + " mm.";

            comentarios = comentarios + linea6 + '\r\n';
            $("#comentarios-eco-dos-inf-dos").val(comentarios);
        }
        else if ($(this).val() == 2){

            let fur = new Date(Date.parse(the("fum").value));
            fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
            let fexamen = new Date(Date.parse(the("fee").value));
            fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();
            let fpp = new Date(Date.parse(the("fpp").value));
            fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();
            let eg = the("semanas").value + "."+ the("dias").value;

            var comentario = "Según edad gestacional obtenida de biometría fetal promedio\r\nFum operacional: " + fur + "\r\nFecha probable de parto: " + fpp + "\r\n";
            $('#comentarios-eco-dos-inf-dos').val(comentario);
        }
	});

    $("#calc\\.oms").on("change", function(){
        if (this.checked == true){
            $("#calc\\.oms\\.div").removeClass("d-none")
        }else{
            $("#calc\\.oms\\.div").addClass("d-none")
        }
    })
});

// Controlador de input clones
// Si se escribe en uno, se refleja en otro
$( document ).ready(function() {
    $("#lcn").on("change", function(){
        the("lcn.clon").value = the("lcn").value;
    });
    $("#saco").on("change", function(){
        the("saco.clon").value = the("saco").value;
    });

    $("#embrion").on("change", function(){
        the("embrion.clon").value = the("embrion").value;
    });

    $("#embrion\\.clon").on("change", function(){
        the("embrion").value = the("embrion.clon").value;
    });
    
});

// Controlador de los informes
$( document ).ready(function() {
    $("#btn\\.informe\\.precoz").on("click", function (){

        if (the("licencia").parentElement.classList.contains("active")){
            let licencia = makeModalLicencia();

            $('#'+licencia.email).on("click", function(){
                let email = makeModalEmail();

                the(email.button).dataset.parentmodal = this.dataset.modal;

                $('#'+email.button).on("click", function(){
                    var InformeString = infPrecozClon();

                    var data = new FormData();
                    data.append("licencia" , the("licencia").value);
                    data.append("informe" , 2);
                    data.append("data" , InformeString);
                    var membrete = "<p>"+$("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />") + "</p>";
                    data.append("header" , membrete);
                    verifyEmailSend(this,data);
                    if (data.get("email") == null){return false}


                    //determinar si el email es seleccionado o escrito

                    fetch('https://servidor.crecimientofetal.cl/crecimiento/informe', {method: 'POST',body: data, mode: 'cors'}).then(function(response) {
                        //console.log(response);
                        //response.blob().then((successMessage) => {
                        //    var link = document.createElement('a');
                        //    link.href = window.URL.createObjectURL(successMessage);
                        //    link.download = "document.pdf";
                        //    link.click();
                        //});
                    }).catch(function(error) {
                        makeModalError();
                    });

                    $('#'+this.dataset.modal).modal('hide');
                    $('#'+this.dataset.parentmodal).modal('hide');
                });
            });

            $('#'+licencia.imprimir).on("click", function(){
                imprInforme(infPrecoz());
                $('#'+this.dataset.modal).modal('hide');
            });

        } else {
            imprInforme(infPrecoz());
        }
    });

    $("#informe\\.morfologia").on("click", function(){
        if (the("licencia").parentElement.classList.contains("active")){
            let licencia = makeModalLicencia();

            $('#'+licencia.email).on("click", function(){
                let email = makeModalEmail();

                the(email.button).dataset.parentmodal = this.dataset.modal;

                $('#'+email.button).on("click", function(){
                    var InformeString = informeMorfologiaClon();
                
                    var data = new FormData();
                    data.append("licencia" , the("licencia").value);
                    data.append("informe" , 2);
                    data.append("data" , InformeString);
                    var membrete = "<p>"+$("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />") + "</p>";
                    data.append("header" , "");
                    verifyEmailSend(this,data);
                    if (data.get("email") == null){return false}
    
                    fetch('https://servidor.crecimientofetal.cl/crecimiento/informe', {method: 'POST',body: data, mode: 'cors'}).then(function(response) {
                        //console.log(response);
                        //response.blob().then((successMessage) => {
                        //    var link = document.createElement('a');
    
                        //    link.href = window.URL.createObjectURL(successMessage);
                        //    link.download = "document.pdf";
        
                        //    link.click();
                        //});
                    }).catch(function(error) {
                        makeModalError();
                    });

                    $('#'+this.dataset.modal).modal('hide');
                    $('#'+this.dataset.parentmodal).modal('hide');
                });
            });

            $('#'+licencia.imprimir).on("click", function(){
                imprInforme(informeMorfologia());
                $('#'+this.dataset.modal).modal('hide');
            });
        }else{
            imprInforme(informeMorfologia());
        }
    })

    $("#modalPreInfEcoObsSegTrim2").on("click", function(){
        var cb = parseInt($('#cerebelo').val());
        var lh = parseInt($('#lh').val());

        if (isNaN(cb) || isNaN(lh)){
            var modal = makeModal();
            document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
            the(modal.titulo).innerText = "Información";
            the(modal.contenido).innerHTML = "<p><strong>Desde 14 semanas en adelante, para el cálculo de edad gestacional es excluido el Abdómen, considerando solo biometrías de Cráneo y Fémur.<br>Para mayor exactitud es recomendable ingresar mediciones de Humero y Cerebelo.</strong><br>¿Desea ingresar biometrías de Humero y Cerebelo?</p><div class='btn-group btn-group-toggle' data-toggle='buttons'><label class='btn btn-outline-primary p-3' id='infEcoObsSegTrim2verNO' aria-pressed='true' data-modal='"+modal.id+"'><input type='radio' value='0' checked=''> NO</label><label class='btn btn-outline-primary p-3' id='infEcoObsSegTrim2verSi' aria-pressed='true' data-modal='"+modal.id+"'><input type='radio' value='1'> SI</label></div>";

            $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {$(this).remove();});

            $("#infEcoObsSegTrim2verNO").on("click", function(){
                $('#'+this.dataset.modal).modal('hide');
                modalEcoSegTrimInforme()
            });

            $("#infEcoObsSegTrim2verSi").on("click", function(){
                $('#'+this.dataset.modal).modal('hide');
                $('#lh').focus();
                $("html, body").animate({ scrollTop: 100 }, "slow");
            });
        }else{
            modalEcoSegTrimInforme()
        }
    });

    $("#modalPreInfEcoObsSegTrim1").on("click", function() {
        if (the("licencia").parentElement.classList.contains("active")){
            let licencia = makeModalLicencia();

            $('#'+licencia.email).on("click", function(){
                let email = makeModalEmail();

                the(email.button).dataset.parentmodal = this.dataset.modal;

                $('#'+email.button).on("click", function(){
                    var InformeString = InfEcoObsSegTrim1Clon();

                    var data = new FormData();
                    data.append("licencia" , the("licencia").value);
                    data.append("informe" , 2);
                    data.append("data" , InformeString);
                    var membrete = "<p>"+$("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />") + "</p>";
                    data.append("header" , membrete);
                    verifyEmailSend(this,data);
                    if (data.get("email") == null){return false}

                    fetch('https://servidor.crecimientofetal.cl/crecimiento/informe', {method: 'POST',body: data, mode: 'cors'}).then(function(response) {
                        //console.log(response);
                        //response.blob().then((successMessage) => {
                        //    var link = document.createElement('a');
                        //    link.href = window.URL.createObjectURL(successMessage);
                        //    link.download = "document.pdf";
                        //    link.click();
                        //});
                    }).catch(function(error) {
                        makeModalError();
                    });

                    $('#'+this.dataset.modal).modal('hide');
                    $('#'+this.dataset.parentmodal).modal('hide');
                });
            });

            $('#'+licencia.imprimir).on("click", function(){
                imprInforme(InfEcoObsSegTrim1());
                $('#'+this.dataset.modal).modal('hide');
            });
        } else {
            imprInforme(InfEcoObsSegTrim1());
        }
    });

    $("#modalPreInfEcoDoppler").on("click", function(){
        if (the("licencia").parentElement.classList.contains("active")){
            let licencia = makeModalLicencia();

            $('#'+licencia.email).on("click", function(){
                let email = makeModalEmail();

                the(email.button).dataset.parentmodal = this.dataset.modal;

                $('#'+email.button).on("click", function(){
                    var InformeString = informeDopplerClon();

                    var data = new FormData();
                    data.append("licencia" , the("licencia").value);
                    data.append("informe" , 2);
                    data.append("data" , InformeString);
                    var membrete = "<p>"+$("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />") + "</p>";
                    data.append("header" , membrete);
                    verifyEmailSend(this,data);
                    if (data.get("email") == null){return false}

                    fetch('https://servidor.crecimientofetal.cl/crecimiento/informe', {method: 'POST',body: data, mode: 'cors'}).then(function(response) {
                        //console.log(response);
                        //response.blob().then((successMessage) => {
                        //    var link = document.createElement('a');
                        //    link.href = window.URL.createObjectURL(successMessage);
                        //    link.download = "document.pdf";
                        //    link.click();
                        //});
                    }).catch(function(error) {
                        makeModalError();
                    });

                    $('#'+this.dataset.modal).modal('hide');
                    $('#'+this.dataset.parentmodal).modal('hide');
                });
            });

            $('#'+licencia.imprimir).on("click", function(){
                imprInforme(informeDoppler());
                $('#'+this.dataset.modal).modal('hide');
            });

        } else {
            imprInforme(informeDoppler());
        }
    });

    $("#btn\\.informe\\.ginecologica").on("click",function() {
        if (the("licencia").parentElement.classList.contains("active")){
            let licencia = makeModalLicencia();

            $('#'+licencia.email).on("click", function(){
                let email = makeModalEmail();

                the(email.button).dataset.parentmodal = this.dataset.modal;

                $('#'+email.button).on("click", function(){
                    var InformeString = informeGinecologico();

                    var data = new FormData();
                    data.append("licencia" , the("licencia").value);
                    data.append("informe" , 2);
                    data.append("data" , InformeString);
                    var membrete = "<p>"+$("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />") + "</p>";
                    data.append("header" , membrete);
                    verifyEmailSend(this,data);
                    if (data.get("email") == null){return false}

                    fetch('https://servidor.crecimientofetal.cl/crecimiento/informe', {method: 'POST',body: data, mode: 'cors'}).then(function(response) {
                        //console.log(response);
                        //response.blob().then((successMessage) => {
                        //    var link = document.createElement('a');
                        //    link.href = window.URL.createObjectURL(successMessage);
                        //    link.download = "document.pdf";
                        //    link.click();
                        //});
                    }).catch(function(error) {
                        makeModalError();
                    });

                    $('#'+this.dataset.modal).modal('hide');
                    $('#'+this.dataset.parentmodal).modal('hide');
                });
            });

            $('#'+licencia.imprimir).on("click", function(){
                imprInforme(informeGinecologico());
                $('#'+this.dataset.modal).modal('hide');
            });

        } else {
            imprInforme(informeGinecologico());
        }
    });
});

// Controlador de botones reset
$( document ).ready(function() {
    $("#btn\\.erase\\.ginecologica").on("click", function(){
        var modal = makeModal("Si");
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Borrar datos de exámen ginecológico";
        the(modal.contenido).innerHTML = '<h1 class="text-danger text-center">¿Está seguro de borrar los datos?</h1>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $("#"+modal.button).on("click", function(){
            let modal =  $(this).data("modal");
            the("utero.ginecologica").value = "";
            the("endometrio.ginecologica").value = "";
            the("anexo.izquierdo.ginecologica").value = "";
            the("anexo.derecho.ginecologica").value = "";
            the("ovario.izquierdo.ginecologica").value = "";
            the("ovario.derecho.ginecologica").value = "";
            the("douglas.ginecologica").value = "";
            the("comentario.ginecologica").value = "";
            resetDate();
            $('#'+modal).modal("hide");
        });
    });

    $("#btn\\.erase\\.precoz").on("click", function(){
        var modal = makeModal("Si");
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Borrar datos de ecografía obstétrica precoz";
        the(modal.contenido).innerHTML = '<h1 class="text-danger text-center">¿Está seguro de borrar los datos?</h1>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $("#"+modal.button).on("click", function(){
            let modal =  $(this).data("modal");
            the("saco").value = "";
            $("#saco").trigger("change");
            the("embrion").selectedIndex = 0;
            $("#embrion").trigger("change");
            the("lcn").value = 0;
            $("#lcn").trigger("change");
            the("utero-ubic1").selectedIndex = 0;
            the("utero-ubic2").selectedIndex = 0;
            the("cuerpo-uterino").selectedIndex = 0;
            the("saco-gestacional").selectedIndex = 0;
            the("saco-vitelino").selectedIndex = 1;
            $("#saco-vitelino").trigger("change");
            the("fcf-prim").selectedIndex = 0;
            the("fcf-prim-dos").selectedIndex = 0
            the("anexo-derecho").selectedIndex = 0;

            the("anexo-derecho").selectedIndex = 0;
            the("anexo-izquierdo").selectedIndex = 0;
            the("exploracion-douglas").selectedIndex = 0;
            the("comentarios-eco-uno").value = "";
            resetDate();
            $("#menu\\.modulo\\.prim\\.trim\\.no").button("toggle");
            $('#'+modal).modal("hide");
        });
    });

    $("#btn\\.erase\\.seg\\.trim").on("click", function(){
        var modal = makeModal("Si");
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Borrar datos de evaluación del crecimiento fetal";
        the(modal.contenido).innerHTML = '<h1 class="text-danger text-center">¿Está seguro de borrar los datos?</h1>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $("#"+modal.button).on("click", function(){
            let modal =  $(this).data("modal");
            the("dbp").value = "";
            the("dof").value = "";
            the("cc").value = "";
            the("ca").value = "";
            the("lf").value = "";
            the("lh").value = "";
            the("bvm").value = "";
            the("pfe").value = "";
            the("atrio.ecoDosTres").value = "";
            the("cerebelo").value = "";
            the("cm.ecoDosTres").selectedIndex = 0;
            the("respuesta_uterina_derecha").value = "";
            the("respuesta_uterina_izquierda").value = "";
            the("largo.cervical.segundo").value = ""
            the("egP50").value = ""
            the("presentacion").selectedIndex = 0;
            the("dorso").selectedIndex = 0;
            the("fcf").selectedIndex = 0;
            the("accardSi").checked = true;
            the("movfetSi").checked = true;
            the("ecografia.segtrim.sexo").selectedIndex = 2;
            the("grado-placenta").selectedIndex = 0
            the("ubicacion").selectedIndex = 0;
            the("incersion").selectedIndex = 0;
            the("liq-cualitativo-eco").selectedIndex = 0;
            the("bvmEcoDos").value = "";
            the("cordon").selectedIndex = 0;
            the("vasos").selectedIndex = 0;
            the("ev-morfo").selectedIndex = 0;
            the("comentarios-anatomia-informe-eg-texto").value = "";
            the("eco.seg.trim.select.comentario").selectedIndex = 0;
            the("comentarios-eco-dos-inf-dos").value = "";
            resetDate();
            $('#'+modal).modal("hide");
        });
    });

    $("#eco\\.doppler\\.nuevo").on("click", function(){
        var modal = makeModal("Si");
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Borrar datos Doppler";
        the(modal.contenido).innerHTML = '<h1 class="text-danger text-center">¿Está seguro de borrar los datos?</h1>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $("#"+modal.button).on("click", function(){
            let modal =  $(this).data("modal");
            the("aud").value = "";
            the("aui").value = "";
            the("auprom").value = "";
            the("ipau").value = "";
            the("ipacm").value = "";
            the("ccp").value = "";
            the("dv").value = "";
            the("psmACM").value = "";
            the("liqAmnioDoppler").selectedIndex = 0;
            the("bvmDoppler").value = "";
            the("liqAmnioDoppler").selectedIndex = 12;
            the("antecedentes-doppler").selectedIndex = 0;
            the("presentacion-doppler").selectedIndex = 0;
            the("motilidad-doppler").selectedIndex = 0;
            the("ubicacion-doppler").selectedIndex = 0;
            the("comentarios-doppler").value = "";
            the("fee").value = getDate();
            the("fum").value = getDate();
            the("semanas").value = 0;
            the("dias").value = 0;
            $('#'+modal).modal("hide");
        });
    })
});

// Controlador de los keypress
$( document ).ready(function() {
    $("input").on("keypress",function( e ) {
        var key_enter = ["saco","embrion","lcn","btn.informe.precoz","utero-ubic1","utero-ubic2", "cuerpo-uterino", "saco-gestacional", "saco-vitelino","fcf-prim","anexo-derecho","anexo-izquierdo","exploracion-douglas","comentarios-eco-uno","dbp","dof", "ca", "lf", "bvm", "lh", "cerebelo", "cm.ecoDosTres", "atrio.ecoDosTres", "", "respuesta_uterina_derecha", "respuesta_uterina_izquierda", "","aud","aui","ipau","ipacm","dv","psmACM","", "modalPreInfEcoDoppler","utero.ginecologica","endometrio.ginecologica", "anexo.izquierdo.ginecologica","anexo.derecho.ginecologica","ovario.izquierdo.ginecologica","ovario.derecho.ginecologica","douglas.ginecologica","comentario.ginecologica","liquido.semi.morfologia", "liquido.ila.uno.morfologia", "liquido.ila.dos.morfologia", "liquido.ila.tres.morfologia", "liquido.ila.cuatro.morfologia", "dbp.morfologia", "dof.morfologia", "pa.morfologia", "femur.morfologia", "humero.morfologia", "tc.morfologia", "cm.morfologia","art.ut.d.morfologia","art.ut.i.morfologia","lc.morfologia", "art.umb.morfologia","art.cm.morfologia","dv.morfologia","p.sis.morfologia", "", "vlp.morfologia", "vld.morfologia"];

        if ( e.which == 13 ) {
           e.preventDefault();
           if (key_enter.includes(this.id)== true){
                pos = key_enter.indexOf(this.id);
                the(key_enter[pos+1]).focus();
           }
        }
    });  
});

// Controlador de los gráficos
$( document ).ready(function() {
    $("#graficoSaco").on( 'click', function() {
        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Saco Gestacional promedio en milímetros (mm)";
        the(modal.contenido).innerHTML = '<div id="graficoSacoView"></div>';

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
                    var edadGest = the("semanas").value +"."+the("dias").value;
    
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
        the(modal.titulo).innerText = "Longitud Cefalo Nalgas (LCC) en milimetros";
        the(modal.contenido).innerHTML = '<div id="graficoLcnBaseView"></div>';

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
                name: 'LCC (Hadlock y col. Radiology 182. 501, 1992)',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    // generate an array of random data
                    var data = [];
                    var egLcn2 = the("semanas").value;
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

    $( '#graficoDbp' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 12){
            alert("Edad Gestacional inferior a 12 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico DBP";
        the(modal.contenido).innerHTML = '<div id="graficoDbpView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoDbpView').highcharts({
           title: {
               text: 'DBP',
               x: -20
           },
           subtitle: {
               text: 'Milimetros (mm)',
               x: -20
           },
           plotOptions: {
               series: {
                   enableMouseTracking: false
               }
           },
           yAxis: {
               title: { text: 'Milimetros (mm)' },
               tickPositions: [10,30, 50, 72, 90, 114]
           },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
           },
           credits: {enabled: false},
           series: [{
               type: "line",
               name: '(-) 2DE',
               marker: {enabled: false},
               data: [14,17,19,25,29,33,34,38,41,43,46,49,52,54,57,61,63,65,69,69,74,74,77,78,80,83,85,87]
           }, {
               type: "line",
               name: 'DE',
               marker: { enabled: false },
               data: [20,23,26,30,35,38,40,44,46,49,52,56,59,62,64,68,70,73,76,78,81,83,85,86,87,90,91,94]
           }, {
                type: "line",
                name: '(+) 2DE',
                marker: { enabled: false },
                data: [25,29,33,35,41,42,46,50,52,56,59,63,66,70,71,75,77,81,83,87,88,91,94,95,97,99,102,104]        
           }, {
               type: "line",
               name: 'DBP',
               dashStyle: "Dot",
               marker: { symbol: 'square' },
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
    
                   for (i = 12; i < edadGest; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   var dbp = $("#dbp").val();
                   dbp = dbp.toString();
                   dbp = dbp.replace(",", ".");
                   dbp = parseFloat(dbp);
                       
                   data.push({
                       y: dbp,
                   });
                   for (i = edadGest + 1; i <= 39; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
       });
    });

    $( '#graficoCc' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 12){
            alert("Edad Gestacional inferior a 12 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico CC";
        the(modal.contenido).innerHTML = '<div id="graficoCcView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoCcView').highcharts({
           title: {
               text: 'Circunferencia de Cráneo',
               x: -20
           },
           subtitle: {
               text: 'Milimetros (mm)',
               x: -20
           },
           plotOptions: {
               series: {
                   enableMouseTracking: false
               }
           },
           yAxis: {
               title: { text: 'Milimetros (mm)' },
               tickPositions: [30, 72, 114, 156, 198, 240, 282, 324, 366, 408]
           },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
           },
           credits: {enabled: false},
           series: [{
               type: "line",
               name: 'Pct. 3',
               marker: {enabled: false},
               data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
           }, {
               type: "line",
               name: 'Pct. 97',
               marker: {enabled: false},
               data: [90,100,111,124,136,150,165,179,193,206,219,232,243,256,268,279,290,300,310,319,328,336,343,351,358,363,368,373,377]
           }, {
               type: "line",
               name: 'CC',
               dashStyle: "Dot",
               marker: { symbol: 'square' },
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
    
                   for (i = 12; i < edadGest; i++) {
                       data.push({
                           y: 0,
                       });
                   }
    
                   var cc = $("#cc").val();
                   cc = cc.toString();
                   cc = cc.replace(",", ".");
                   cc = parseFloat(cc);
    
                   data.push({
                       y: cc,
                   });
                   for (i = edadGest + 1; i <= 39; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
       });
    });

    $( '#graficoCa' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 12){
            alert("Edad Gestacional inferior a 12 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico CA";
        the(modal.contenido).innerHTML = '<div id="graficoCaView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoCaView').highcharts({
           title: {
               text: 'CA**',
               x: -20
           },
           subtitle: {
               text: 'Milimetros (mm)',
               x: -20
           },
           plotOptions: {
               series: {
                   enableMouseTracking: false
               }
           },
           yAxis: {
               title: { text: 'Milimetros (mm)' },
               tickPositions: [20, 60, 100, 140, 180, 220, 260, 300, 340, 400]
           },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
           },
           credits: { enabled: false },
           series: [{
               type: "line",
               name: 'Pct. 3',
               marker: { enabled: false },
               data: [40,50,60,72,84,97,107,119,131,141,151,161,171,181,191,200,209,218,227,236,245,253,261,269,277,285,292,299,307]
           }, {
               type: "line",
               name: 'Pct 97',
               marker: { enabled: false },
               data: [68,78,88,101,112,127,141,155,168,183,196,209,223,235,248,260,271,284,295,306,318,329,339,349,359,370,380,389,399]
           }, {
               type: "line",
               name: 'CA',
               dashStyle: "Dot",
               marker: { symbol: 'square' },
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
    
                   for (i = 12; i < edadGest; i++) {
                       data.push({
                           y: 0,
                       });
                   }
    
                   var ca = $("#ca").val();
                   ca = ca.toString();
                   ca = ca.replace(",", ".");
                   ca = parseFloat(ca);
    
                   data.push({
                       y:ca,
                   });
                   for (i = edadGest + 1; i <= 39; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
       });
    });

    $( '#graficoLf' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 12){
            alert("Edad Gestacional inferior a 12 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico LF";
        the(modal.contenido).innerHTML = '<div id="graficoLfView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoLfView').highcharts({
           title: {
               text: 'Largo Femoral',
               x: -20
           },
           subtitle: {
               text: 'Milimetros (mm)',
               x: -20
           },
           plotOptions: {
               series: {
                   enableMouseTracking: false
               }
           },
           yAxis: {
               title: { text: 'Milimetros (mm)' },
               tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
           },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
           },
           credits: { enabled: false },
           series: [{
               type: "line",
               name: 'Pct. 3',
               marker: { enabled: false },
               data: [6,9,12,14,17,20,22,25,27,30,32,35,37,40,42,45,47,49,52,54,56,58,59,61,62,64,65,66,67]
           }, {
               type: "line",
               name: 'Pct. 97',
               marker: { enabled: false },
               data: [12,15,18,21,24,28,31,34,38,41,44,47,50,53,55,57,60,62,65,67,70,71,73,75,77,79,80,81,82]
           }, {
               type: "line",
               name: 'LF',
               dashStyle: "Dot",
               marker: { symbol: 'square' },
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
    
                   for (i = 12; i < edadGest; i++) {
                       data.push({ y: 0, });
                   }
                   
                   var lf = $("#lf").val();
                   lf = lf.toString();
                   lf = lf.replace(",", ".");
                   lf = parseFloat(lf);
                   data.push({
                       y: lf,
                   });
                   for (i = edadGest + 1; i <= 39; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
       });
    });

    $( '#graficoBVM' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 16){
            alert("Edad Gestacional inferior a 16 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico BVM";
        the(modal.contenido).innerHTML = '<div id="graficoBVMView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoBVMView').highcharts({
                 chart: {
                 height: 250
             },
             title: {
                 text: 'BVM de Líquido Amniótico ***',
                 x: -20,
                     style: {
                 fontSize: '14px'
             }
             },
             plotOptions: {
                 series: {
                     enableMouseTracking: false
                 }
             },
                 legend: {
                 itemStyle: {
                     fontSize: '10px',
                     fontWeight:'normal'
                 }
             },
             yAxis: {
                 title: { text: 'Milimetros (mm)' },
                 tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
             },
             colors: ['#313131','#313131','#313131'],
             xAxis: {
                 categories: ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
             },
             credits: {enabled:false},
             series: [{
                 type: "line",
                 name: 'Pct. 5',
                 dashStyle: "Dot",
                 marker: {enabled:false},
                 data: [23,25,27,28,29,29,30,30,30,30,30,30,30,29,29,29,29,29,28,28,27,26,24,23,21]
             }, {
                 type: "line",
                 name: 'Pct. 95',
                 dashStyle: "Dot",
                 marker: { enabled: false },
                 data: [59,62,64,66,67,68,68,68,68,68,68,69,69,69,69,70,71,72,72,72,71,70,68,66,62]
             }, {
                 type: "line",
                 name: 'BVM',
                 dashStyle: "Dot",
                 marker: { symbol: 'square' },
                 lineWidth: 0,
                 data: (
                     function () {
                         var data = [];
                         var edadGest = the("semanas").value;
     
                         for (i = 16; i < edadGest; i ++ ) {
                             data.push({
                                 y: 0,
                             });
                         }
                         data.push({
                                 y: parseFloat($('#bvm').val()),
                             });
                         for (i = edadGest +1; i <= 39; i ++ ) {
                             data.push({
                                 y: 0,
                             });
                         }
                         return data;
                     }())
                 }]
         });
    });

    $( '#graficoLh' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 12){
            alert("Edad Gestacional inferior a 12 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico LH";
        the(modal.contenido).innerHTML = '<div id="graficoLhView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoLhView').highcharts({
                title: {
                    text: 'Largo Humeral',
                    x: -20
                },
                subtitle: {
                    text: 'Milimetros (mm)',
                    x: -20
                },
                plotOptions: {
                    series: {
                        enableMouseTracking: false
                    }
                },
                yAxis: {
                    title: { text: 'Milimetros (mm)' },
                    tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80]
                },
                colors: ['#313131', '#313131', '#313131'],
                xAxis: {
                    categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
                },
                credits: { enabled: false },
                series: [{
                    type: "line",
                    name: 'Pct. 5',
                    marker: { enabled: false },
                    data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
                }, {
                    type: "line",
                    name: 'Pct. 95',
                    marker: { enabled: false },
                    data: [12.3, 15.1, 17.9, 20.7, 23.5, 26.3, 29.1, 31.6, 34.2, 36.7, 39.2, 41.6, 43.9, 46.1, 48.1, 50.1, 52.1, 53.9, 55.6, 57.3, 58.9, 60.5, 62.1, 63.5, 64.9, 66.4, 67.8, 69.3, 70.8]
                }, {
                    type: "line",
                    name: 'Humero',
                    dashStyle: "Dot",
                    marker: { symbol: 'square' },
                    lineWidth: 0,
                    data: (function () {
                        var data = [];
                        var edadGest = the("semanas").value;
    
                        for (i = 12; i < edadGest; i++) {
                            data.push({ y: 0, });
                        }
     
                        var lh = $("#lh").val();
                        lh = lh.toString();
                        lh = lh.replace(",", ".");
                        lh = parseFloat(lh);
                            
                        data.push({
                            y: lh,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        return data;
                    }())
                }]
            });
    });

    $( '#graficoCerebelo' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 15){
            alert("Edad Gestacional inferior a 15 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Cerebelo";
        the(modal.contenido).innerHTML = '<div id="graficoCerebeloView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoCerebeloView').highcharts({
                title: {
                    text: 'Diámetro de Cerebelo',
                    x: -20
                },
                subtitle: {
                    text: 'Milimetros (mm)',
                    x: -20
                },
                plotOptions: {
                    series: {
                        enableMouseTracking: false
                    }
                },
                yAxis: {
                    title: { text: 'Milimetros (mm)' },
                    tickPositions: [5, 10,20,30,40,50,60,70]
                },
                colors: ['#313131', '#313131', '#313131'],
                xAxis: {
                    categories:['15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
                },
                credits: {enabled: false},
                series: [{
                    type: "line",
                    name: '-2DE',
                    marker: {enabled: false},
                    data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44]
                }, {
                    type: "line",
                    name: 'media',
                    marker: {enabled: false},
                    data: [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52]
                }, {
                    type: "line",
                    name: '+2DE',
                    marker: {enabled: false},
                    data: [18, 18, 19, 20, 22, 23, 25, 26, 27, 30, 32, 34, 34, 37, 38, 41, 43, 46, 48, 53, 56, 58, 60, 62, 62, 62]
                }, {
                    type: "line",
                    name: 'Cerebelo',
                    dashStyle: "Dot",
                    marker: { symbol: 'square' },
                    lineWidth: 0,
                    data: (function () {
                        var data = [];
                        var edadGest = the("semanas").value;
    
                        for (i = 15; i < edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
    
                       var cerebelo = $("#cerebelo").val();
                       cerebelo = cerebelo.toString();
                       cerebelo = cerebelo.replace(",", ".");
                       cerebelo = parseFloat(cerebelo);
    
                        data.push({
                            y: cerebelo,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        return data;
                    }())
                }]
            });
    });

    //Grafico Prom Art. UT. en Exm. seg Terc. Trim
    $('#graficoUterinasCrecimiento').on("click", function(){
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 10){
            alert("Edad Gestacional inferior a 10 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Promedio Arterias Uterinas";
        the(modal.contenido).innerHTML = '<div id="graficoArtUtDerView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoArtUtDerView').highcharts({
            title: {
                text: 'IP Promedio Arterias Uterinas',
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
                        var edadGest = the("semanas").value;
                        for (i = 10; i < edadGest; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        var aud = the("respuesta_uterina_promedio").value;
                        aud = aud.toString();
                        aud = aud.replace(",", ".");
                        aud = parseFloat(aud);
                        
                        data.push({
                                y: aud,
                            });
                        for (i = (edadGest +1); i < 39; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        return data;
                    }())
                }]
        });
    });

    $( '#graficoPFE' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 16){ alert("Edad Gestacional inferior a 16 semanas"); return false;}

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Peso Fetal Estimado";
        the(modal.contenido).innerHTML = '<div id="graficoPesoView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

        $('#graficoPesoView').highcharts({
           title: {
               text: 'Peso Fetal Estimado grs. *',
               x: -20 //center
           },
           subtitle: {
               text: 'Kilogramos',
               x: -20
           },
           plotOptions: {
               series: {
                   enableMouseTracking: false,
                   pointInterval: 1
               }
           },
           yAxis: {
               title: { text: 'Kilogramos' },
               tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
           },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
           },
           credits: {enabled: false},
           series: [{
               type: "line",
               name: 'Pct 3',
               dashStyle: "Dot",
               marker: {enabled: false},
               data: [110,136,167,205,248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714]
           }, {
               type: "line",
               name: 'Pct 10',
               marker: { enabled: false },
               data: [121,150,185,227,275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985]
           }, {
               type: "line",
               name: 'Pct 90',
               marker: { enabled: false },
               data: [171,212,261,319,387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234]
           }, {
               type: "line",
               name: 'Pct 97',
               dashStyle: "Dot",
               marker: { enabled: false, },
               data: [183,226,279,341,414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474]
           }, {
               type: "line",
               name: 'Peso',
               dashStyle: "Dot",
               marker: {symbol:'square'},
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
    
                   for (i = 16; i < edadGest; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   data.push({
                       y: parseFloat($('#pfe').val()),
                   });
                   for (i = edadGest + 1; i <= 39; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
        });
    });

    $( '#infecoObsSegTrim1' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 16){
            alert("Edad Gestacional inferior a 16 semanas");
            return false;
        }

        var modal = makeModal("Ver Impresion");

        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfica evaluación ecográfica del crecimiento fetal";
        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });
        
        var stringGraficos = "<div class='container'> <div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica evaluación ecográfica del crecimiento fetal</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'> <p style='font-size:10px;'><strong>Nombre: </strong>:PACIENTE </p></div><div class='col-3'> <p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'> <p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><div class='row'> <div class='col'> <div id='graficoInfecoObsSegTrimPFEView'></div><div class='row'> <div class='col-12'> <div id='graficoInfecoObsSegTrimPFEView'></div></div><div class='col-12'> <div id='graficoBVMView'></div></div></div></div><div class='col'> <div class='row'> <div class='col-12'> <div id='graficoCaView'></div></div><div class='col-12'> <div id='graficoCcCaView'></div></div></div></div></div><div class='row' id='lineclear'> <div class='col'> <p class='d-none' style='font-size:10px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> <br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista: <strong>:ECOGRAFISTA</strong> </p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina d-none'>* Evaluación del crecimiento fetal, según referencia propuesta por Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad pct. 10 a 90) <br>** Circunferencia Ambominal según referencia de Hadlock y col. Radiology 152:497 - 501, 1984. (Normalidad Pct 3 a 97) <br>*** Liquido Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000 <br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil. <br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
        var comentarios = $("#comentarios-eco-dos-inf-dos").val();
        comentarios = (typeof comentarios == 'undefined') ? 'Crecimiento (peso) percentil ' + parseInt($('#pfePctRpt').val()) + ', para gráfica de peso fetal Hadlock*<br />Bolsillo vertical mayor de ' + the("bvm").value + ' mm' : $("#comentarios-eco-dos-inf-dos").val().replace(/\r\n|\r|\n/g,"<br />");
        stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);

        var paciente = the("nombre-paciente").value;
        var idpaciente = the("id-paciente").value;
        var ecografista = $( '#ecografista option:selected').text();
        let fexamen = new Date(Date.parse(the("fee").value));
        fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();

        stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
        stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
        stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
        stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);
        
        the(modal.contenido).innerHTML = stringGraficos;
        the(modal.button).dataset.id = modal.contenido;
        $("#"+modal.button).on("click", function(){
            let modal =  this.dataset.id;
            imprSelec(modal);
        });


        $('#graficoInfecoObsSegTrimPFEView').highcharts({
            chart: { height: 250 },
            title: {
                text: 'Peso Fetal Estimado grs. *',
                x: -20,
                style: { fontSize: '12px' }
            },
            legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight:'normal'
                }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false,
                    pointInterval: 1
                }
            },
            yAxis: {
                title: { text: 'Kilogramos' },
                tickPositions: [100, 560, 1020, 1940, 2400, 2860, 3320, 3780, 4500]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
           credits: {enabled: false},
           series: [{
               type: "line",
               name: 'Pct 10',
               dashStyle: "Dot",
               marker: { enabled: false },
               data: [121,150,185,227,275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985]
           }, {
               type: "line",
               name: 'Pct 90',
               dashStyle: "Dot",
               marker: { enabled: false },
               data: [171,212,261,319,387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234]
           }, {
               type: "line",
               name: 'Peso',
               dashStyle: "Dot",
               marker: {symbol:'square'},
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
                   edadGest = parseInt(edadGest);
    
                   for (i = 16; i < edadGest; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   data.push({
                       y: parseFloat($('#pfe').val()),
                   });
                   for (i = edadGest + 1; i < 40; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
        });
        $('#graficoCaView').highcharts({
            chart: { height: 250 },
            title: {
                text: 'Circunferencia Abdominal **',
                x: -20,
                style: {fontSize: '12px'}
            },
            legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight:'normal'
                }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
           yAxis: {
               title: { text: 'Milimetros (mm)' },
               tickPositions: [20, 60, 100, 140, 180, 220, 260, 300, 340, 400]
           },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
           },
           credits: { enabled: false },
           series: [{
               type: "line",
               name: 'Pct. 3',
               dashStyle: "Dot",
               marker: { enabled: false },
               data: [40,50,60,72,84,97,107,119,131,141,151,161,171,181,191,200,209,218,227,236,245,253,261,269,277,285,292,299,307]
           }, {
               type: "line",
               name: 'Pct 97',
               dashStyle: "Dot",
               marker: { enabled: false },
               data: [68,78,88,101,112,127,141,155,168,183,196,209,223,235,248,260,271,284,295,306,318,329,339,349,359,370,380,389,399]
           }, {
               type: "line",
               name: 'CA',
               dashStyle: "Dot",
               marker: { symbol: 'square' },
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
                   edadGest = parseInt(edadGest);
                   for (i = 12; i < edadGest; i++) {
                       data.push({
                           y: 0,
                       });
                   }
    
                   var ca = $("#ca").val();
                   ca = ca.toString();
                   ca = ca.replace(",", ".");
                   ca = parseFloat(ca);
    
                   data.push({
                       y:ca,
                   });
                   for (i = edadGest + 1; i < 40; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
       }); 

       $('#graficoBVMView').highcharts({
        chart: {
        height: 250
    },
    title: {
        text: 'Profundidad del bolsillo mayor (Liq. Amniótico)',
        x: -20,
            style: {
        fontSize: '12px'
    }
    },
    plotOptions: {
        series: {
            enableMouseTracking: false
        }
    },
        legend: {
        itemStyle: {
            fontSize: '10px',
            fontWeight:'normal'
        }
    },
    yAxis: {
        title: { text: 'Milimetros (mm)' },
        tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
    },
    colors: ['#313131','#313131','#313131'],
    xAxis: {
        categories: ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
    },
    credits: {enabled:false},
    series: [{
        type: "line",
        name: 'Pct. 5',
        dashStyle: "Dot",
        marker: {enabled:false},
        data: [23,25,27,28,29,29,30,30,30,30,30,30,30,29,29,29,29,29,28,28,27,26,24,23,21]
    }, {
        type: "line",
        name: 'Pct. 95',
        dashStyle: "Dot",
        marker: { enabled: false },
        data: [59,62,64,66,67,68,68,68,68,68,68,69,69,69,69,70,71,72,72,72,71,70,68,66,62]
    }, {
        type: "line",
        name: 'BVM',
        dashStyle: "Dot",
        marker: { symbol: 'square' },
        lineWidth: 0,
        data: (
            function () {
                var data = [];
                var edadGest = the("semanas").value;
                edadGest = parseInt(edadGest);
                for (i = 16; i < edadGest; i ++ ) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                        y: parseFloat($('#bvm').val()),
                    });
                for (i = (edadGest +1); i < 40; i ++ ) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });
       
       let uterinasData = {
           min:[1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47],
           max: [2.84,2.71,2.53,2.38,2.24,2.11,1.99,1.88,1.79,1.71,1.61,1.54,1.47,1.41,1.35,1.3,1.25,1.21,1.17,1.13,1.11,1.06,1.04,1.01,0.99,0.97,0.95,0.94,0.92,0.91,0.91]
       }
            if (the("art.ut").checked == true){
                $('#graficoCcCaView').highcharts({
                    chart: {
                        height: 250
                    },
                    title: {
                        text: 'IP Promedio Arterias Uterinas',
                        x: -20,
                        style: {
                            fontSize: '12px'
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
                    legend: {
                        itemStyle: {
                            fontSize: '10px',
                            fontWeight:'normal'
                        }
                    },
                    colors: ['#313131', '#313131', '#313131'],
                    xAxis: {
                        categories: ['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'] 
                    },
                    credits: { enabled: false },
                    series: [{
                        type: "line",
                        name: 'Pct. 5',
                        dashStyle: "Dot",
                        marker: { enabled: false },
                        data: uterinasData.min
                    }, {
                        type: "line",
                        name: 'Pct. 95',
                        dashStyle: "Dot",
                        marker: { enabled: false },
                        data: uterinasData.max
                    }, {
                        type: "line",
                        name: 'IP Promedio',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                        data: (function () {
                            // generate an array of random data
                            var data = [];
                            var edadGest = the("semanas").value;
                            edadGest = parseInt(edadGest);
                            for (i = 10; i < edadGest; i ++ ) {
                                data.push({
                                    y: 0,
                                });
                            }
                            var aud = $("#respuesta_uterina_promedio").val();
                            aud = aud.toString();
                            aud = aud.replace(",", ".");
                            aud = parseFloat(aud);
                                
                            data.push({
                                y: aud,
                            });
                            for (i = (edadGest +1); i < 39; i ++ ) {
                                data.push({
                                    y: 0,
                                });
                            }
                            return data;
                        }())
                    }]
                });
            }else{
                $('#graficoCcCaView').highcharts({
                    chart: {
                        height: 250
                    },
                    title: {
                        text: 'Relación Craneo / Abdómen',
                        x: -20,
                        style: {fontSize: '12px'}
                    },
                    plotOptions: { series: { enableMouseTracking: false }},
                    legend: {
                        itemStyle: {
                            fontSize: '10px',
                            fontWeight:'normal'
                        }
                    },
                    yAxis: {
                        title: { text: 'Valor cuociente' },
                        tickPositions: [0.75, 0.82, 0.88, 0.95, 1, 1.07, 1.14, 1.2, 1.27, 1.33]
                    },
                    colors: ['#313131', '#313131', '#313131'],
                    xAxis: {
                        categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
                    },
                    credits: { enabled: false },
                    series: [{
                        type: "line",
                        name: 'Pct. 3',
                        dashStyle: "Dot",
                        marker: { enabled: false },
                        data: [1.1,1.09,1.08,1.07,1.06,1.06,1.05,1.04,1.03,1.02,1.01,1,1,0.99,0.98,0.97,0.96,0.95,0.95,0.94,0.93,0.92,0.91,0.9,0.89,0.89]
                    }, {
                        type: "line",
                        name: 'Pct. 97',
                        dashStyle: "Dot",
                        marker: { enabled: false },
                        data: [1.29,1.28,1.27,1.26,1.25,1.24,1.24,1.23,1.22,1.21,1.2,1.19,1.18,1.18,1.17,1.17,1.16,1.15,1.14,1.13,1.12,1.11,1.1,1.09,1.08,1.08]
                    }, {
                        type: "line",
                        name: 'CC/CA',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                        data: (function () {
                            var data = [];
                            var edadGest = the("semanas").value;
                            edadGest = parseInt(edadGest);

                            for (i = 16; i < edadGest; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                            var ccca = parseInt($('#cc').val()) / parseInt($('#ca').val());
                            ccca = ccca.toFixed(2);
                            ccca = parseFloat(ccca);

                            data.push({
                                y: ccca,
                            });
                            for (i = (edadGest + 1); i <= 39; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                            return data;
                        }())
                    }]
                 });
            }
    });
    
    $( '#infecoObsSegTrim2' ).on( 'click', function() {

        var edadGestacional = the("semanas").value;

        var modal = makeModal("Ver Impresion");

        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfica Determinación Ecográfica (Tardía) de la Edad Gestacional";
        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        var stringGraficos = "<div class='container'><div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica evaluación ecográfica del crecimiento fetal</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Nombre: </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><div class='row mt-2'> <div class='col'><div id='graficoCcView'></div></div><div class='col'><div id='graficoCerebeloView'></div></div></div><div class='row'><div class='col'><div id='graficoLfView'></div></div><div class='col'><div id='graficoLhView'></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:12px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista: <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Para la evaluación morfológica fetal, ceñirse a recomendaciones oficiales vigentes, para Chile: Guías Perinatales MINSAL 2015<br>Ver dirección web: http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf<br>** Referencias: CC y LF Hadlock y col. 1984; LH Jeanty y col.<br>*** Diámetro cerebeloso transverso Hill LM. y col. Obstet Gynecol. 1990; 75(6) : 981-5<br>**** Referencia liq. amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
        let fur = new Date(Date.parse(the("fum").value));
        fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
        let fpp = new Date(Date.parse(the("fpp").value));
        fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();

        var paciente = the("nombre-paciente").value;
        var idpaciente = the("id-paciente").value;
        var ecografista = $( '#ecografista option:selected').text();
        let fexamen = new Date(Date.parse(the("fee").value));
        fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();
        var comentarios = $("#comentarios-eco-dos-inf-dos").val();

        stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
        stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
        stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
        stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);

        comentarios = (typeof comentarios == 'undefined') ? "Fum operacional: " + fur + "<br>Fecha probable de parto: " + fpp + "<br>" + $('#comentarios-eco-dos-generico').val().replace(/\r\n|\r|\n/g,"<br />") : $("#comentarios-eco-dos-inf-dos").val().replace(/\r\n|\r|\n/g,"<br />");
        stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);

        the(modal.contenido).innerHTML = stringGraficos;
        the(modal.button).dataset.id = modal.contenido;
        $("#"+modal.button).on("click", function(){
            let modal =  this.dataset.id;
            imprSelec(modal);
        });

        $('#graficoCcView').highcharts({
                chart: {
                height: 250
            },
           title: {
               text: 'Circunferencia de Cráneo',
               x: -20,
                   style: {
                fontSize: '12px'
            }
           },
           plotOptions: {
               series: {
                   enableMouseTracking: false
               }
           },
           yAxis: {
               title: { text: 'Milimetros (mm)' },
               tickPositions: [30, 72, 114, 156, 198, 240, 282, 324, 366, 408]
           },
                legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight:'normal'
                }
            },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
           },
           credits: {enabled: false},
           series: [{
               type: "line",
               name: 'Pct. 3',
               dashStyle: "Dot",
               marker: {enabled: false},
               data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
           }, {
               type: "line",
               name: 'Pct. 97',
               dashStyle: "Dot",
               marker: {enabled: false},
               data: [90,100,111,124,136,150,165,179,193,206,219,232,243,256,268,279,290,300,310,319,328,336,343,351,358,363,368,373,377]
           }, {
               type: "line",
               name: 'CC',
               dashStyle: "Dot",
               marker: { symbol: 'square' },
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
    
                   for (i = 12; i < edadGest; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   data.push({
                       y: parseInt(the("cc").value),
                   });
                   for (i = edadGest + 1; i < 40; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
       });
       if (the("art.ut").checked == true){
        $('#graficoCerebeloView').highcharts({
            chart: {
                height: 250
            },
            title: {
                text: 'IP Promedio Arterias Uterinas',
                x: -20,
                style: {
                    fontSize: '12px'
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
                dashStyle: "Dot",
                marker: { enabled: false },
                data: [1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
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
                    var edadGest = the("semanas").value;
                    for (i = 10; i < edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    var aud = $("#respuesta_uterina_promedio").val();
                    aud = aud.toString();
                    aud = aud.replace(",", ".");
                    aud = parseFloat(aud);
                        
                    data.push({
                        y: aud,
                    });
                    for (i = (edadGest +1); i < 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
        });
        }else if (edadGestacional > 14){
                $('#graficoCerebeloView').highcharts({
                    chart: {
                        height: 250
                    },
                        title: {
                            text: 'Diámetro de Cerebelo',
                            x: -20,
                                style: {
                        fontSize: '12px'
                    }
                        },
                        plotOptions: {
                            series: {
                                enableMouseTracking: false
                            }
                        },
                        yAxis: {
                            title: { text: 'Milimetros (mm)' },
                            tickPositions: [5, 10,20,30,40,50,60,70]
                        },
                    legend: {
                        itemStyle: {
                            fontSize: '10px',
                            fontWeight:'normal'
                        }
                    },
                        colors: ['#313131', '#313131', '#313131'],
                        xAxis: {
                            categories:['15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
                        },
                        credits: {enabled: false},
                        series: [{
                            type: "line",
                            name: '-2DE',
                            dashStyle: "Dot",
                            marker: {enabled: false},
                            data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44]
                        }, {
                            type: "line",
                            name: 'media',
                            dashStyle: "Dot",
                            marker: {enabled: false},
                            data: [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52]
                        }, {
                            type: "line",
                            name: '+2DE',
                            dashStyle: "Dot",
                            marker: {enabled: false},
                            data: [18, 18, 19, 20, 22, 23, 25, 26, 27, 30, 32, 34, 34, 37, 38, 41, 43, 46, 48, 53, 56, 58, 60, 62, 62, 62]
                        }, {
                            type: "line",
                            name: 'Cerebelo',
                            dashStyle: "Dot",
                            marker: { symbol: 'square' },
                            lineWidth: 0,
                            data: (function () {
                                var data = [];
                                var edadGest = the("semanas").value;
            
                                for (i = 15; i < edadGest; i++) {
                                    data.push({
                                        y: 0,
                                    });
                                }
                                data.push({
                                    y: parseInt(the("cerebelo").value),
                                });
                                for (i = edadGest + 1; i < 40; i++) {
                                    data.push({
                                        y: 0,
                                    });
                                }
                                return data;
                            }())
                        }]
            });
        }
        
        $('#graficoLfView').highcharts({
                chart: {
                height: 250
            },
           title: {
               text: 'Largo Femoral',
               x: -20,
                   style: {
                fontSize: '12px'
            }
           },
           plotOptions: {
               series: {
                   enableMouseTracking: false
               }
           },
                legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight:'normal'
                }
            },
           yAxis: {
               title: { text: 'Milimetros (mm)' },
               tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
           },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
           },
           credits: { enabled: false },
           series: [{
               type: "line",
               name: 'Pct. 3',
               dashStyle: "Dot",
               marker: { enabled: false },
               data: [6,9,12,14,17,20,22,25,27,30,32,35,37,40,42,45,47,49,52,54,56,58,59,61,62,64,65,66,67]
           }, {
               type: "line",
               name: 'Pct. 97',
               dashStyle: "Dot",
               marker: { enabled: false },
               data: [12,15,18,21,24,28,31,34,38,41,44,47,50,53,55,57,60,62,65,67,70,71,73,75,77,79,80,81,82]
           }, {
               type: "line",
               name: 'LF',
               dashStyle: "Dot",
               marker: { symbol: 'square' },
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
    
                   for (i = 12; i < edadGest; i++) {
                       data.push({ y: 0, });
                   }
                   data.push({
                       y: parseInt(the("lf").value),
                   });
                   for (i = edadGest + 1; i < 40; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
       });
       $('#graficoLhView').highcharts({
               chart: {
                height: 250
            },
                title: {
                    text: 'Largo Humeral',
                    x: -20,
                        style: {
                fontSize: '12px'
            }
                },
                plotOptions: {
                    series: {
                        enableMouseTracking: false
                    }
                },
               legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight:'normal'
                }
            },
                yAxis: {
                    title: { text: 'Milimetros (mm)' },
                    tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80]
                },
                colors: ['#313131', '#313131', '#313131'],
                xAxis: {
                    categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
                },
                credits: { enabled: false },
                series: [{
                    type: "line",
                    name: 'Pct. 5',
                    dashStyle: "Dot",
                    marker: { enabled: false },
                    data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
                }, {
                    type: "line",
                    name: 'Pct. 95',
                    dashStyle: "Dot",
                    marker: { enabled: false },
                    data: [12.3, 15.1, 17.9, 20.7, 23.5, 26.3, 29.1, 31.6, 34.2, 36.7, 39.2, 41.6, 43.9, 46.1, 48.1, 50.1, 52.1, 53.9, 55.6, 57.3, 58.9, 60.5, 62.1, 63.5, 64.9, 66.4, 67.8, 69.3, 70.8]
                }, {
                    type: "line",
                    name: 'Humero',
                    dashStyle: "Dot",
                    marker: { symbol: 'square' },
                    lineWidth: 0,
                    data: (function () {
                        var data = [];
                        var edadGest = the("semanas").value;
    
                        for (i = 12; i < edadGest; i++) {
                            data.push({ y: 0, });
                        }
                        data.push({
                            y: parseInt(the("lh").value),
                        });
                        for (i = edadGest + 1; i < 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        return data;
                    }())
                }]
        });
    });

    $("#graficoAud").on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 10){
            alert("Edad Gestacional inferior a 10 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Arteria Uterina Derecha";
        the(modal.contenido).innerHTML = '<div id="graficoArtUtDerView"></div>';

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
                        var edadGest = the("semanas").value;
                        for (i = 10; i < edadGest; i ++ ) {
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
                        for (i = (edadGest +1); i < 39; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        return data;
                    }())
                }]
        });
    });

    $("#graficoAui").on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 10){
            alert("Edad Gestacional inferior a 10 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Arteria Uterina Izquierda";
        the(modal.contenido).innerHTML = '<div id="graficoArtUtIzqView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoArtUtIzqView').highcharts({
            title: {
                text: 'IP Arterias Uterinas Izquierda',
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
                        var edadGest = the("semanas").value;
    
                        for (i = 10; i < edadGest; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        
                        var aui = $("#aui").val();
                        aui = aui.toString();
                        aui = aui.replace(",", ".");
                        aui = parseFloat(aui);
                        
                        data.push({
                                y: aui,
                            });
                        for (i = (edadGest +1); i < 40; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        return data;
                    }())
                }]
        });
    });

    $("#graficoAu").on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 10){
            alert("Edad Gestacional inferior a 10 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Promedio Arteria Uterinas";
        the(modal.contenido).innerHTML = '<div id="graficoArtUtView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoArtUtView').highcharts({
            title: {
                text: 'IP Promedio Arteria Uterinas',
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
                        var edadGest = the("semanas").value;
    
                        for (i = 10; i < edadGest; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        var auprom = $("#auprom").val();
                        auprom = auprom.toString();
                        auprom = auprom.replace(",", ".");
                        auprom = parseFloat(auprom);
                        
                        data.push({
                                y: auprom,
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

    $("#graficoIpau").on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 20){
            alert("Edad Gestacional inferior a 20 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico IP Arteria Umbilical";
        the(modal.contenido).innerHTML = '<div id="graficoIpauView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoIpauView').highcharts({
            title: {
                text: 'IP Arteria Umbilical **',
                x: -20, //center
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
                tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: { enabled: false },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: { enabled: false },
                data: [0.97,0.95,0.94,0.92,0.9,0.89,0.87,0.85,0.82,0.8,0.78,0.75,0.73,0.7,0.67,0.65,0.62,0.58,0.55,0.52,0.49]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: { enabled: false },
                data: [1.6,1.56,1.53,1.5,1.46,1.43,1.4,1.37,1.35,1.32,1.29,1.27,1.25,1.22,1.2,1.18,1.16,1.14,1.13,1.11,1.09]
            }, {
                type: "line",
                name: 'Arteria',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    var data = [];
                    var edadGest = the("semanas").value;
   
                    for (i = 20; i < edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    var ipau = $("#ipau").val();
                    ipau = ipau.toString();
                    ipau = ipau.replace(",", ".");
                    ipau = parseFloat(ipau);
                    
                    data.push({
                        y: ipau,
                    });
                    for (i = edadGest + 1; i <= 39; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
       });
    });

    $("#graficoIpacm").on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 20){
            alert("Edad Gestacional inferior a 20 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico IP Arteria C. Media";
        the(modal.contenido).innerHTML = '<div id="graficoIpacmView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoIpacmView').highcharts({
            title: {
                 text: 'IP Arteria Cerebral Media **',
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
                 tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
             },
             colors: ['#313131', '#313131', '#313131'],
             xAxis: {
                 categories: ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
             },
             credits: {
                 enabled: false
             },
             series: [{
                 type: "line",
                 name: 'Pct. 5',
                 marker: { enabled: false },
                 data: [1.24,1.29,1.34,1.37,1.4,1.43,1.44,1.45,1.45,1.44,1.43,1.41,1.38,1.34,1.3,1.25,1.19,1.13,1.05,0.98,0.89]
             }, {
                 type: "line",
                 name: 'Pct. 95',
                 marker: { enabled: false },
                 data: [1.98,2.12,2.25,2.36,2.45,2.53,2.59,2.63,2.66,2.67,2.67,2.65,2.62,2.56,2.5,2.41,2.31,2.2,2.07,1.92,1.76]
             }, {
                 type: "line",
                 name: 'Arteria',
                 dashStyle: "Dot",
                 marker: { symbol: 'square' },
                 lineWidth: 0,
                 data: (function () {
                     var data = [];
                     var edadGest = the("semanas").value;
    
                     for (i = 20; i < edadGest; i++) {
                         data.push({
                             y: 0,
                         });
                     }
                         
                     var ipacm = $("#ipacm").val();
                     ipacm = ipacm.toString();
                     ipacm = ipacm.replace(",", ".");
                     ipacm = parseFloat(ipacm);
                         
                     data.push({
                         y: ipacm,
                     });
                     for (i = edadGest + 1; i <= 39; i++) {
                         data.push({
                             y: 0,
                         });
                     }
                     return data;
                 }())
             }]
        });
    });

    $("#graficoCcp").on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 20){
            alert("Edad Gestacional inferior a 20 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Cuociente Cerebro Placentario";
        the(modal.contenido).innerHTML = '<div id="graficoCcpView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoCcpView').highcharts({
            title: {
                text: 'IP de CCP (Indice ACM / AU) **',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: 'Valor IP' },
                tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:
                ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: { enabled: false },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: { enabled: false },
                data: [0.78,0.87,0.95,1.02,1.09,1.15,1.2,1.24,1.28,1.31,1.33,1.35,1.36,1.36,1.36,1.34,1.32,1.3,1.26,1.22,1.18]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: { enabled: false },
                data: [1.68,1.88,2.06,2.22,2.36,2.49,2.6,2.7,2.78,2.84,2.89,2.92,2.93,2.93,2.91,2.87,2.82,2.75,2.67,2.57,2.45]
            }, {
                type: "line",
                name: 'Cuociente',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    // generate an array of random data
                    var data = [];
                    var edadGest = the("semanas").value;
   
                    for (i = 20; i < edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    var ccp = $("#ccp").val();
                    ccp = ccp.toString();
                    ccp = ccp.replace(",", ".");
                    ccp = parseFloat(ccp);
                    
                    data.push({
                        y: ccp,
                    });
                    for (i = edadGest + 1; i <= 38; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
       });
    });

    $("#graficoDv").on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 20){
            alert("Edad Gestacional inferior a 20 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Ductus Venoso";
        the(modal.contenido).innerHTML = '<div id="graficoDvView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoDvView').highcharts({
            title: {
                text: 'Ductus Venoso',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: 'Valor IP' },
                tickPositions: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: 
                ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: { enabled: false },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: { enabled: false },
                data: [0.32,0.32,0.32,0.32,0.32,0.32,0.31,0.31,0.31,0.3,0.29,0.28,0.28,0.27,0.26,0.25,0.24,0.23,0.22,0.21,0.2]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: { enabled: false },
                data: [0.83,0.83,0.83,0.83,0.83,0.83,0.82,0.82,0.81,0.81,0.8,0.79,0.78,0.77,0.76,0.75,0.74,0.73,0.72,0.71,0.7]
            }, {
                type: "line",
                    name: 'Ductus Venoso',
                    dashStyle: "Dot",
                    marker: { symbol: 'square' },
                    lineWidth: 0,
                data: (function () {
                        var data = [];
                        var edadGest = the("semanas").value;
    
                        for (i = 20; i < edadGest; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        var dv = $("#dv").val();
                        dv = dv.toString();
                        dv = dv.replace(",", ".");
                        dv = parseFloat(dv);
                        
                        data.push({
                                y: dv,
                            });
                        for (i = edadGest +1; i <= 39; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        return data;
                    }())
                }]
        });
    });

    $("#graficopsmACM").on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 18){
            alert("Edad Gestacional inferior a 18 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Peak sistólico máximo de ACM";
        the(modal.contenido).innerHTML = '<div id="viewGraficopsmACM"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });
                                
        $('#viewGraficopsmACM').highcharts({
        title: {
            text: 'Peak sistólico máximo de ACM',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'cm/s' },
            tickPositions: [20, 40, 60, 80, 100]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Valor de la Media',
            marker: { enabled: false },  
            data:  [23.2,24.3,25.5,26.7,27.9,29.3,30.7,32.1,33.6,35.2,36.9,38.7,40.5,42.4,44.4,46.5,48.7,51.1,53.5,56,58.7,61.5,64.4]
        }, {
            type: "line",
            name: 'Anemia leve',
            marker: { enabled: false },
            data: [29.9, 31.1, 32.8,34.5,36,37.8,39.5,41.5,43.3,45.6,47.6,50.4,52.2,55,57.3,60.1,62.9,66,69,72.8,75.7,79.8,83] 
        }, {
            type: "line",
            name: 'Anemia moderada',
            marker: { enabled: false },
            data: [34.8,36.5,38.2,39.7,41.9,44,46,48,50.4,53,55.4,58,60.9,63.5,66.6,70,73.1,76.5,80.2,84,88,92.5,96.6]
        }, {
            type: "line",
            name: 'Peak sistólico máximo de ACM',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = the("semanas").value;
                var medida = parseFloat(the("psmACM").value);

                for (i = 18; i < edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: medida,
                });
                for (i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
        });
    });

    $( '#infDoppler1' ).on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 20){
            alert("Edad Gestacional inferior a 20 semanas");
            return false;
        }

        var modal = makeModal("Ver Impresion");
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfica para evaluación de la flujometría doppler materno fetal básica";
        
        var stringGraficos = "<h4 class='text-center d-none mt-2'>Gráfica para evaluación de la flujometría doppler materno fetal básica</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Nombre: </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><div class='row'><div class='col'><div id='graficoIpArtUtView'></div></div><div class='col'><div id='graficoIpArtUmbView'></div></div></div><div class='row'><div class='col'><div id='graficoIpArtCMView'></div></div><div class='col'><div id='graficoIpCCPView'></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:12px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista: <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32<br>** Referencia para Doppler de arteria umbilical, C Media y CCP Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
        var comentarios = $("#comentarios-doppler").val();
    
        var paciente = $( '#nombre-paciente').val();
        var idpaciente = $( '#id-paciente').val();
        var fexamen = $( "input[name='fee']").val();
        var ecografista = $( '#ecografista option:selected').text();
        stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
        stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
        stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
        stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);
        
        if(typeof comentarios == 'undefined'){
        if ($('#auprom').val() > 0){
            comentarios = 'F. Doppler materno (promedio uterinas), IP percentil ' + $('#auPctTxt').val() + '<br />';
        }
        if ($('#ipau').val() > 0){
            comentarios = comentarios + 'F. Doppler fetal, IP de CCP percentil ' + $('#ccpPctTxt').val() + '<br />';
             }
        }
        else{
            comentarios = $("#comentarios-doppler").val().replace(/\r\n|\r|\n/g,"<br />");
        }
        stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);
        
        the(modal.contenido).innerHTML = stringGraficos;

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        the(modal.button).dataset.id = modal.contenido;
        $("#"+modal.button).on("click", function(){
            let modal =  this.dataset.id;
            imprSelec(modal);
        });

        graficoUno = Highcharts.chart('graficoIpArtUtView', {
            chart: {
                height: 250
            },
            title: {
                text: 'IP Promedio Arteria Uterinas *',
                x: -20,
                style: { fontSize: '12px' }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight:'normal'
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
                dashStyle: "Dot",
                marker: { enabled: false },
                data: [1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
                marker: { enabled: false },
                data: [2.84,2.71,2.53,2.38,2.24,2.11,1.99,1.88,1.79,1.71,1.61,1.54,1.47,1.41,1.35,1.3,1.25,1.21,1.17,1.13,1.11,1.06,1.04,1.01,0.99,0.97,0.95,0.94,0.92,0.91,0.91]
            }, {
                type: "line",
                    name: 'Promedio Uterinas',
                    dashStyle: "Dot",
                    marker: { symbol: 'square' },
                    lineWidth: 0,
                data: (function () {
                        // generate an array of random data
                        var data = [];
                        var edadGest = the("semanas").value;
    
                        for (i = 10; i < edadGest; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        
                        var auprom = $("#auprom").val();
                        auprom = auprom.toString();
                        auprom = auprom.replace(",", ".");
                        auprom = parseFloat(auprom);
                        
                        data.push({
                                y: auprom,
                            });
                        for (i = edadGest +1; i <= 39; i ++ ) {
                            data.push({
                                y: 0,
                            });
                        }
                        return data;
                    }())
                }]
        });
        
        //$('#graficoIpArtUmbView').highcharts({
        graficoDos = Highcharts.chart('graficoIpArtUmbView', {
                chart: {
                height: 250
            },
             title: {
                 text: 'IP Arteria Umbilical **',
                 x: -20,
                 style: { fontSize: '12px' }
             },
             plotOptions: {
                 series: {
                     enableMouseTracking: false
                 }
             },
             yAxis: {
                 title: { text: 'Valor IP' },
                 tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
             },
             colors: ['#313131', '#313131', '#313131'],
             xAxis: {
                 categories:['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
             },
             legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight:'normal'
                }
            },
             credits: { enabled: false },
             series: [{
                 type: "line",
                 name: 'Pct. 5',
                     dashStyle: "Dot",
                 marker: { enabled: false },
                 data: [0.97,0.95,0.94,0.92,0.9,0.89,0.87,0.85,0.82,0.8,0.78,0.75,0.73,0.7,0.67,0.65,0.62,0.58,0.55,0.52,0.49]
             }, {
                 type: "line",
                 name: 'Pct. 95',
                     dashStyle: "Dot",
                 marker: { enabled: false },
                 data: [1.6,1.56,1.53,1.5,1.46,1.43,1.4,1.37,1.35,1.32,1.29,1.27,1.25,1.22,1.2,1.18,1.16,1.14,1.13,1.11,1.09]
             }, {
                 type: "line",
                 name: 'Arteria Umbilical',
                 dashStyle: "Dot",
                 marker: { symbol: 'square' },
                 lineWidth: 0,
                 data: (function () {
                     var data = [];
                     var edadGest = the("semanas").value;
    
                     for (i = 20; i < edadGest; i++) {
                         data.push({
                             y: 0,
                         });
                     }
                     var ipau = $("#ipau").val();
                     ipau = ipau.toString();
                     ipau = ipau.replace(",", ".");
                     ipau = parseFloat(ipau);
                     
                     data.push({
                         y: ipau,
                     });
                     for (i = edadGest + 1; i <= 39; i++) {
                         data.push({
                             y: 0,
                         });
                     }
                     return data;
                 }())
             }]
        });
        //$('#graficoIpArtCMView').highcharts({
        graficoTres = Highcharts.chart('graficoIpArtCMView', {
                chart: {
                height: 250
            },
            title: {
                 text: 'IP Arteria Cerebral Media **',
                 x: -20,
                 style: { fontSize: '12px' }
             },
             plotOptions: {
                 series: {
                     enableMouseTracking: false
                 }
             },
             yAxis: {
                 title: { text: 'Valor IP' },
                 tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
             },
             colors: ['#313131', '#313131', '#313131'],
             xAxis: {
                 categories: ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
             },
             legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight:'normal'
                }
            },
             credits: {
                 enabled: false
             },
             series: [{
                 type: "line",
                 name: 'Pct. 5',
                     dashStyle: "Dot",
                 marker: { enabled: false },
                 data: [1.24,1.29,1.34,1.37,1.4,1.43,1.44,1.45,1.45,1.44,1.43,1.41,1.38,1.34,1.3,1.25,1.19,1.13,1.05,0.98,0.89]
             }, {
                 type: "line",
                 name: 'Pct. 95',
                     dashStyle: "Dot",
                 marker: { enabled: false },
                 data: [1.98,2.12,2.25,2.36,2.45,2.53,2.59,2.63,2.66,2.67,2.67,2.65,2.62,2.56,2.5,2.41,2.31,2.2,2.07,1.92,1.76]
             }, {
                 type: "line",
                 name: 'Arteria C. Media',
                 dashStyle: "Dot",
                 marker: { symbol: 'square' },
                 lineWidth: 0,
                 data: (function () {
                     var data = [];
                     var edadGest = the("semanas").value;
    
                     for (i = 20; i < edadGest; i++) {
                         data.push({
                             y: 0,
                         });
                     }
    
                     var ipacm = $("#ipacm").val();
                     ipacm = ipacm.toString();
                     ipacm = ipacm.replace(",", ".");
                     ipacm = parseFloat(ipacm);
    
                     data.push({
                         y: ipacm,
                     });
                     for (i = edadGest + 1; i <= 39; i++) {
                         data.push({
                             y: 0,
                         });
                     }
                     return data;
                 }())
             }]
        });
        //$('#graficoIpCCPView').highcharts({

        var dvp = the("dv").value;

        if (dvp != ""){
            graficoCuatro = Highcharts.chart('graficoIpCCPView', {
                chart: { height: 250 },
                title: {
                    text: 'IP Ductus Venoso',
                    x: -20, //center
                    style: { fontSize: '12px' }
                },
                plotOptions: {
                    series: {
                        enableMouseTracking: false
                    }
                },
                yAxis: {
                    title: { text: 'Valor IP' },
                    tickPositions: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
                },
                legend: {
                    itemStyle: {
                        fontSize: '10px',
                        fontWeight:'normal'
                    }
                },
                colors: ['#313131', '#313131', '#313131'],
                xAxis: {
                    categories: 
                    ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
                },
                credits: { enabled: false },
                series: [{
                    type: "line",
                    name: 'Pct. 5',
                    dashStyle: "Dot",
                    marker: { enabled: false },
                    data: [0.32,0.32,0.32,0.32,0.32,0.32,0.31,0.31,0.31,0.3,0.29,0.28,0.28,0.27,0.26,0.25,0.24,0.23,0.22,0.21,0.2]
                }, {
                    type: "line",
                    name: 'Pct. 95',
                    dashStyle: "Dot",
                    marker: { enabled: false },
                    data: [0.83,0.83,0.83,0.83,0.83,0.83,0.82,0.82,0.81,0.81,0.8,0.79,0.78,0.77,0.76,0.75,0.74,0.73,0.72,0.71,0.7]
                }, {
                    type: "line",
                        name: 'Ductus Venoso',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                    data: (function () {
                            var data = [];
                            var edadGest = the("semanas").value;
        
                            for (i = 20; i < edadGest; i ++ ) {
                                data.push({
                                    y: 0,
                                });
                            }
                            var dv = $("#dv").val();
                            dv = dv.toString();
                            dv = dv.replace(",", ".");
                            dv = parseFloat(dv);
                            
                            data.push({
                                    y: dv,
                                });
                            for (i = edadGest +1; i <= 39; i ++ ) {
                                data.push({
                                    y: 0,
                                });
                            }
                            return data;
                        }())
                }]
            });
        }else{
            graficoCuatro = Highcharts.chart('graficoIpCCPView', {
                chart: { height: 250 },
                title: {
                    text: 'IP de CCP (Indice ACM / AU) **',
                    x: -20,
                    style: { fontSize: '12px' }
                },
                plotOptions: {
                    series: {
                        enableMouseTracking: false
                    }
                },
                yAxis: {
                    title: { text: 'Valor IP' },
                    tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
                },
                legend: {
                    itemStyle: {
                        fontSize: '10px',
                        fontWeight:'normal'
                    }
                },
                colors: ['#313131', '#313131', '#313131'],
                xAxis: {
                    categories:['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
                },
                credits: { enabled: false },
                series: [{
                     type: "line",
                     name: 'Pct. 5',
                     dashStyle: "Dot",
                     marker: { enabled: false },
                     data: [0.78,0.87,0.95,1.02,1.09,1.15,1.2,1.24,1.28,1.31,1.33,1.35,1.36,1.36,1.36,1.34,1.32,1.3,1.26,1.22,1.18]
                 }, {
                     type: "line",
                     name: 'Pct. 95',
                     dashStyle: "Dot",
                     marker: { enabled: false },
                     data: [1.68,1.88,2.06,2.22,2.36,2.49,2.6,2.7,2.78,2.84,2.89,2.92,2.93,2.93,2.91,2.87,2.82,2.75,2.67,2.57,2.45]
                 }, {
                     type: "line",
                     name: 'Cuociente CP.',
                     dashStyle: "Dot",
                     marker: { symbol: 'square' },
                     lineWidth: 0,
                     data: (function () {
                         // generate an array of random data
                         var data = [];
                         var edadGest = the("semanas").value;
        
                         for (i = 20; i < edadGest; i++) {
                             data.push({
                                 y: 0,
                             });
                         }
        
                         var ccp = $("#ccp").val();
                         ccp = ccp.toString();
                         ccp = ccp.replace(",", ".");
                         ccp = parseFloat(ccp);
        
                         data.push({y: ccp});
                         for (i = edadGest + 1; i <= 38; i++) {
                             data.push({y: 0});
                         }
                         return data;
                     }())
                 }]
            });
        }
    });

    $("#graficoCisterna").on("click", function(){
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 14){
            alert("Edad Gestacional inferior a 14 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Cisterna Magna";
        the(modal.contenido).innerHTML = '<div id="graficoCMView"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });

        $('#graficoCMView').highcharts({
           title: {
               text: 'Cisterna Magna',
               x: -20
           },
           subtitle: {
               text: 'Milimetros (mm)',
               x: -20
           },
           plotOptions: {
               series: {
                   enableMouseTracking: false
               }
           },
           yAxis: {
               title: { text: 'Milimetros (mm)' },
               tickPositions: [1, 3, 5, 7, 9, 11, 13]
           },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories:['14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
           },
           credits: { enabled: false },
           series: [{
               type: "line",
               name: 'Pct. 5',
               marker: { enabled: false },
               data: [1.69, 2.1, 2.4, 2.6,2.8, 3.1, 3.3, 3.5,3.7, 3.9, 4.1, 4.3,4.4, 4.6, 4.7, 4.9,5.0, 5.1, 5.2, 5.3,5.3, 5.4, 5.4, 5.4,5.5, 5.5]
           }, {
               type: "line",
               name: 'Pct. 95',
               marker: { enabled: false },
               data: [5.3, 5.7, 6, 6.3,6.6, 6.9, 7.2, 7.5,7.7, 8, 8.2, 8.5,8.7, 8.9, 9.1, 9.3,9.4, 9.6, 9.7, 9.8,9.9, 10, 10, 10.1,10.1, 10.1]
           }, {
               type: "line",
               name: 'LF',
               dashStyle: "Dot",
               marker: { symbol: 'square' },
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = the("semanas").value;
    
                   for (i = 14; i < edadGest; i++) {
                       data.push({ y: 0, });
                   }
                   
                   var lf = $("#cm\\.ecoDosTres").val();
                   lf = lf.toString();
                   lf = lf.replace(",", ".");
                   lf = parseFloat(lf);
                   data.push({
                       y: lf,
                   });
                   for (i = edadGest + 1; i <= 39; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
       });
    })

    $("#p\\.sis\\.grafica\\.morfologia").on( 'click', function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 18){
            alert("Edad Gestacional inferior a 18 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico Peak sistólico máximo de ACM";
        the(modal.contenido).innerHTML = '<div id="viewGraficopsmACM"></div>';

        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) {
            $(this).remove();
        });
                                
        $('#viewGraficopsmACM').highcharts({
        title: {
            text: 'Peak sistólico máximo de ACM',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'cm/s' },
            tickPositions: [20, 40, 60, 80, 100]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Valor de la Media',
            marker: { enabled: false },  
            data:  [23.2,24.3,25.5,26.7,27.9,29.3,30.7,32.1,33.6,35.2,36.9,38.7,40.5,42.4,44.4,46.5,48.7,51.1,53.5,56,58.7,61.5,64.4]
        }, {
            type: "line",
            name: 'Anemia leve',
            marker: { enabled: false },
            data: [29.9, 31.1, 32.8,34.5,36,37.8,39.5,41.5,43.3,45.6,47.6,50.4,52.2,55,57.3,60.1,62.9,66,69,72.8,75.7,79.8,83] 
        }, {
            type: "line",
            name: 'Anemia moderada',
            marker: { enabled: false },
            data: [34.8,36.5,38.2,39.7,41.9,44,46,48,50.4,53,55.4,58,60.9,63.5,66.6,70,73.1,76.5,80.2,84,88,92.5,96.6]
        }, {
            type: "line",
            name: 'Peak sistólico máximo de ACM',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = the("semanas").value;

                var medida = $("#p\\.sis\\.morfologia").val();
                medida = medida.toString();
                medida = medida.replace(",", ".");
                medida = parseFloat(medida);

                for (i = 18; i < edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: medida,
                });
                for (i = edadGest + 1; i <= 39; i++) {
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

// Controlador de morfología
$(document).ready(function(){
    $('#liquido\\.ila\\.uno\\.morfologia, #liquido\\.ila\\.dos\\.morfologia, #liquido\\.ila\\.tres\\.morfologia, #liquido\\.ila\\.cuatro\\.morfologia').on("keyup", function(){
        var uno = $("#liquido\\.ila\\.uno\\.morfologia ").val();
        var dos = $("#liquido\\.ila\\.dos\\.morfologia ").val();
        var tres = $("#liquido\\.ila\\.tres\\.morfologia").val();
        var cuatro = $("#liquido\\.ila\\.cuatro\\.morfologia").val();

        uno = (uno.length > 0) ? +uno : 0;
        dos = (dos.length > 0) ? +dos : 0;
        tres = (tres.length > 0) ? +tres : 0;
        cuatro = (cuatro.length > 0) ? +cuatro : 0;

        var suma = (uno + dos + tres + cuatro);
        $("#liquido\\.ila\\.suma\\.morfologia").val(suma);

        let pct5ILA = [], pct95ILA = [];

        pct5ILA[16] = 79; pct5ILA[17] = 83; pct5ILA[18] = 87;
        pct5ILA[19] = 90; pct5ILA[20] = 93; pct5ILA[21] = 95;
        pct5ILA[22] = 97; pct5ILA[23] = 98; pct5ILA[24] = 98;
        pct5ILA[25] = 97; pct5ILA[26] = 97; pct5ILA[27] = 95;
        pct5ILA[28] = 94; pct5ILA[29] = 92; pct5ILA[30] = 90;
        pct5ILA[31] = 88; pct5ILA[32] = 86; pct5ILA[33] = 83;
        pct5ILA[34] = 81; pct5ILA[35] = 79; pct5ILA[36] = 77;
        pct5ILA[37] = 75; pct5ILA[38] = 73; pct5ILA[39] = 72;
        pct5ILA[40] = 71; pct5ILA[41] = 70; pct5ILA[42] = 72;

        pct95ILA[16] = 185; pct95ILA[17] = 194; pct95ILA[18] = 200;
        pct95ILA[19] = 204; pct95ILA[20] = 208; pct95ILA[21] = 212;
        pct95ILA[22] = 214; pct95ILA[23] = 217; pct95ILA[24] = 218;
        pct95ILA[25] = 221; pct95ILA[26] = 223; pct95ILA[27] = 226;
        pct95ILA[28] = 228; pct95ILA[29] = 231; pct95ILA[30] = 234;
        pct95ILA[31] = 238; pct95ILA[32] = 242; pct95ILA[33] = 245;
        pct95ILA[34] = 248; pct95ILA[35] = 249; pct95ILA[36] = 249;
        pct95ILA[37] = 244; pct95ILA[38] = 239; pct95ILA[39] = 226;
        pct95ILA[40] = 214; pct95ILA[41] = 194; pct95ILA[42] = 179;
    
        let eg = the("semanas").value;
        let ila = suma;
        the("liquido.ila.percentil.morfologia").classList.remove("is-valid", "is-invalid");
        if (eg > 15 || eg < 41){
            eg = parseInt(eg);
            var uno = pct95ILA[eg] - pct5ILA[eg];
            var dos = ila - pct5ILA[eg];
            var resultado = parseInt(90 / (uno) * (dos) + 5);
            $("#liquido\\.ila\\.percentil\\.morfologia").val(resultado);

            if (resultado < 10 || resultado > 90){
                the("liquido.ila.percentil.morfologia").classList.add("is-invalid");
            }else{
                the("liquido.ila.percentil.morfologia").classList.add("is-valid");
            }
        }
    });

    $('#dbp\\.morfologia').on("keyup", function(){
        /* 3 97*/
        let a = [], b = [];

        a[0]=14;a[1]=17;a[2]=19;a[3]=25;a[4]=29;a[5]=33;a[6]=34;a[7]=38;a[8]=41;a[9]=43;a[10]=46;a[11]=49;a[12]=52;a[13]=54;a[14]=57;a[15]=61;a[16]=63;a[17]=65;a[18]=69;a[19]=69;a[20]=74;a[21]=74;a[22]=77;a[23]=78;a[24]=78;a[25]=81;a[26]=85;a[27]=88;
        b[0]=25;b[1]=29;b[2]=33;b[3]=35;b[4]=41;b[5]=42;b[6]=46;b[7]=50;b[8]=52;b[9]=56;b[10]=59;b[11]=63;b[12]=66;b[13]=70;b[14]=71;b[15]=75;b[16]=77;b[17]=81;b[18]=83;b[19]=87;b[20]=88;b[21]=91;b[22]=94;b[23]=95;b[24]=97;b[25]=99;b[26]=97;b[27]=106;
    
        let eg = the("semanas").value;
        let dbp = this.value;
        
        dbp = dbp.toString();
        dbp = dbp.replace(",", ".");
        dbp = parseFloat(dbp);
    
        the("dbp.pct.morfologia").classList.remove("is-valid", "is-invalid");
        the("dof.ic.morfologia").classList.remove("is-valid", "is-invalid");

        if (eg < 12 || eg > 40){
            $("#dbp\\.pct\\.morfologia").val('0');
        }
        else {
            eg = eg - 12;
            eg = parseInt(eg);
    
            var uno = b[eg] - a[eg];
            var dos = dbp - a[eg];
            var resultado = (parseInt(95 / (uno) * (dos) + 3));

            the("dbp.pct.real.morfologia").value = resultado;

            ajustarProgreso(resultado, "dbpMorfologia");
            var pctDBP = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 97){
                pctDBP = '> 97';
            }
            else if (resultado < 3){
                pctDBP = '< 3';
            }
            else{
                pctDBP = resultado;
            }
            
            $('#dbp\\.pct\\.morfologia').val(pctDBP);

            if (resultado < 3 || resultado > 97){
                the("dbp.pct.morfologia").classList.add("is-invalid");
            }else{
                the("dbp.pct.morfologia").classList.add("is-valid");
            }

            let dof = the("dof.morfologia").value;

            if (dbp > 0){
                var valor = ((dbp/dof)*100);
                    
                $('#dof\\.ic\\.morfologia').val(valor.toFixed(0) + "%");
                if (valor < 76 || valor > 84){
                    the("dof.ic.morfologia").classList.add("is-invalid");
                }else{
                    the("dof.ic.morfologia").classList.add("is-valid");
                }

                the("pc.morfologia").value = valCC(dof,dbp);
                let ev = new KeyboardEvent('keyup', {keyCode: 13});
                the("pc.morfologia").dispatchEvent(ev);
            }
            else{
                $('#dof\\.ic\\.morfologia').val(0);
            }
        }
    })

    $('#dof\\.morfologia').on("keyup", function(){
        /* 3 97*/
        let a = [], b = [];
        let dof = this.value;
    
        a[10]=7;a[11]=11; a[12]=16; a[13]=20;a[14]=24; a[15]=29; a[16]=33; a[17]=37;a[18]=41; a[19]=46; a[20]=50; a[21]=54;a[22]=58; a[23]=62; a[24]=65; a[25]=69;a[26]=73; a[27]=76; a[28]=80; a[29]=83;a[30]=86; a[31]=89; a[32]=92; a[33]=95;a[34]=97; a[35]=99; a[36]=102; a[37]=104;a[38]=105; a[39]=107; a[40]=108;
        b[10]=21; b[11]=25; b[12]=30; b[13]=34;b[14]=38; b[15]=43; b[16]=47; b[17]=51;b[18]=55; b[19]=60; b[20]=64; b[21]=68;b[22]=72; b[23]=76; b[24]=79; b[25]=83;b[26]=87; b[27]=90; b[28]=94; b[29]=97;b[30]=100; b[31]=103; b[32]=106; b[33]=108;b[34]=111; b[35]=113; b[36]=116; b[37]=118;b[38]=119; b[39]=121; b[40]=122;
        
        let eg = the("semanas").value;
        
        the("dof.pct.morfologia").classList.remove("is-valid", "is-invalid");
        the("dof.ic.morfologia").classList.remove("is-valid", "is-invalid");

        if (eg > 9 && dof > 0){
            var uno = b[eg] - a[eg];
            var dos = dof - a[eg];
            var resultado = (parseInt(95 / (uno) * (dos) + 3));

            the("dof.pct.real.morfologia").value = resultado;
            ajustarProgreso(resultado, "dofMorfologia");

            var pctDOF = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 97){
                pctDOF = '> 97';
            }
            else if (resultado < 3){
                pctDOF = '< 3';
            }
            else{
                pctDOF = resultado;
            }
            
            $('#dof\\.pct\\.morfologia').val(pctDOF);

            if (resultado < 3 || resultado > 97){
                the("dof.pct.morfologia").classList.add("is-invalid");
            }else{
                the("dof.pct.morfologia").classList.add("is-valid");
            }

            let dbp = the("dbp.morfologia").value;

            if (dbp > 0){
                var valor = ((dbp/dof)*100);
                    
                $('#dof\\.ic\\.morfologia').val(valor.toFixed(0) + "%");
                if (valor < 76 || valor > 84){
                    the("dof.ic.morfologia").classList.add("is-invalid");
                }else{
                    the("dof.ic.morfologia").classList.add("is-valid");
                }

                the("pc.morfologia").value = valCC(dof,dbp);
                let ev = new KeyboardEvent('keyup', {keyCode: 13});
                the("pc.morfologia").dispatchEvent(ev);
            }
            else{
                $('#dof\\.ic\\.morfologia').val(0);
            }

        }else{
            $('#dof\\.pct\\.morfologia').val('0');
            $('#dof\\.ic\\.morfologia').val('0');
        }
    })

    $("#pc\\.morfologia").on("keyup", function(){
        /* 3 97*/
        let a = [], b = [];
        a[0]=64;a[1]=74;a[2]=88;a[3]=100;a[4]=113;a[5]=126; a[6]=137;a[7]=149;a[8]=161;a[9]=172;a[10]=183; a[11]=194;a[12]=204;a[13]=214;a[14]=224;a[15]=233; a[16]=242;a[17]=250;a[18]=258;a[19]=267;a[20]=274; a[21]=280;a[22]=287;a[23]=293;a[24]=299;a[25]=303; a[26]=308;a[27]=311;a[28]=315;
        b[0]=81;b[1]=94;b[2]=106;b[3]=120;b[4]=135; b[5]=150;b[6]=165;b[7]=179;b[8]=193;b[9]=206; b[10]=219;b[11]=232;b[12]=243;b[13]=256;b[14]=268; b[15]=279;b[16]=290;b[17]=300;b[18]=310;b[19]=319; b[20]=328;b[21]=336;b[22]=343;b[23]=351;b[24]=358; b[25]=363;b[26]=368;b[27]=373;b[28]=377;
       
        let eg = the("semanas").value;
        let cc = parseInt(this.value);
       
        the("pc.pct.morfologia").classList.remove("is-valid", "is-invalid");

        if (eg < 12 || eg > 40){ 
            $("#pc\\.pct\\.morfologia").val("");
        }
        else {
            eg = eg - 12;
            eg = parseInt(eg);
            var uno=b[eg] - a[eg];
            var dos=cc - a[eg];
            var resultado = parseInt(95 / (uno) * (dos) + 3);

            the("pc.pct.real.morfologia").value = resultado
            ajustarProgreso(resultado, "pcMorfologia");
            var pctCC = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 97){
                pctCC = '> 97';
            }
            else if (resultado < 3){
                pctCC = '< 3';
            }
            else{
                pctCC = resultado;
            }
            psohdlkMorfologia();

            the("pc.pct.morfologia").value = pctCC

            if (resultado < 3 || resultado > 97){
                the("pc.pct.morfologia").classList.add("is-invalid");
            }else{
                the("pc.pct.morfologia").classList.add("is-valid");
            }
        }
    })

    $("#pa\\.morfologia").on("keyup", function(){
        /* 3 97*/
        let a = [], b = [];
        a[0]=42;a[1]=52;a[2]=64;a[3]=75;a[4]=86; a[5]=97;a[6]=109;a[7]=119;a[8]=131;a[9]=141; a[10]=151;a[11]=161;a[12]=171;a[13]=181; a[14]=191;a[15]=200;a[16]=209;a[17]=218;a[18]=227; a[19]=236;a[20]=245;a[21]=253;a[22]=261;a[23]=269; a[24]=277;a[25]=285;a[26]=292;a[27]=299;a[28]=307;
        b[0]=71;b[1]=79;b[2]=92;b[3]=102;b[4]=113; b[5]=127;b[6]=141;b[7]=155;b[8]=170; b[9]=183;b[10]=192;b[11]=209;b[12]=223; b[13]=235;b[14]=248;b[15]=260;b[16]=271;b[17]=284; b[18]=295;b[19]=306;b[20]=318;b[21]=329;b[22]=339; b[23]=349;b[24]=359;b[25]=370;b[26]=380;b[27]=389; b[28]=399;

        let eg = the("semanas").value;
        let ca = parseInt(this.value);

        the("pa.pct.morfologia").classList.remove("is-valid", "is-invalid");

        if (eg < 12 || eg > 40){ 
            $("#pa\\.pct\\.morfologia").val("0");
        } else {
            eg = eg - 12;
            eg = parseInt(eg);
            var uno=b[eg] - a[eg];
            var dos=ca - a[eg];
            var resultado = parseInt(95 / (uno) * (dos) + 3);

            the("pa.pct.real.morfologia").value = resultado;

            ajustarProgreso(resultado, "paMorfologia");
            var pctCA = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 97){
                pctCA = '> 97';
            } else if (resultado < 3){
                pctCA = '< 3';
            } else {
                pctCA = resultado;
            }
            psohdlkMorfologia();

            the("pa.pct.morfologia").value = pctCA;

            if (resultado < 3 || resultado > 97){
                the("pa.pct.morfologia").classList.add("is-invalid");
            } else {
                the("pa.pct.morfologia").classList.add("is-valid");
            }
        }
    })

    $("#femur\\.morfologia").on("keyup", function(){
        /* 3 97*/
        let a = [], b = [];
   
        a[0]=7;a[1]=9;a[2]=12;a[3]=15;a[4]=17;a[5]=21; a[6]=23;a[7]=26;a[8]=28;a[9]=30;a[10]=33;a[11]=35; a[12]=38;a[13]=40;a[14]=42;a[15]=44;a[16]=46; a[17]=48;a[18]=50;a[19]=52;a[20]=53;a[21]=55; a[22]=57;a[23]=59;a[24]=60;a[25]=62;a[26]=64; a[27]=65;a[28]=66;
        b[0]=12;b[1]=14;b[2]=17;b[3]=20;b[4]=23;b[5]=27; b[6]=31;b[7]=34;b[8]=38;b[9]=40;b[10]=43;b[11]=47; b[12]=50;b[13]=52;b[14]=56;b[15]=58;b[16]=62; b[17]=64;b[18]=66;b[19]=68;b[20]=71;b[21]=73; b[22]=75;b[23]=78;b[24]=80;b[25]=82;b[26]=84; b[27]=86;b[28]=88;
   
        let eg = the("semanas").value;
        let lf=parseInt(this.value);
   
        the("femur.pct.morfologia").classList.remove("is-valid", "is-invalid");

        if (eg < 12 || eg > 40){ 
            $("#femur\\.pct\\.morfologia").val("0");
        }
        else {
            eg = eg - 12;
            eg = parseInt(eg);
            var uno=b[eg] - a[eg];
            var dos=lf - a[eg];
            var resultado = parseInt(95 / (uno) * (dos) + 3);

            the("femur.pct.real.morfologia").value = resultado;

            ajustarProgreso(resultado, "femurMorfologia");
            var pctLF = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 97){
                pctLF = '> 97';
            }
            else if (resultado < 3){
                pctLF = '< 3';
            }
            else{
                pctLF = resultado;
            }
            
            psohdlkMorfologia()
            $('#femur\\.pct\\.morfologia').val(pctLF);
            if (resultado < 3 || resultado > 97){
                the("femur.pct.morfologia").classList.add("is-invalid");
            }else{
                the("femur.pct.morfologia").classList.add("is-valid");
            }
        }
    })

    $("#humero\\.morfologia").on("keyup", function(){
        /* 5 95*/
        let a = [], b = [];
   
        a[12] = 4.8;   b[12] = 12.3; a[13] = 7.6;   b[13] = 15.1;
        a[14] = 10.3;  b[14] = 17.9; a[15] = 13.1;  b[15] = 20.7;
        a[16] = 15.8;  b[16] = 23.5; a[17] = 18.5;  b[17] = 26.3;
        a[18] = 21.2;  b[18] = 29.1; a[19] = 23.8;  b[19] = 31.6;
        a[20] = 26.3;  b[20] = 34.2; a[21] = 28.8;  b[21] = 36.7;
        a[22] = 31.2;  b[22] = 39.2; a[23] = 33.5;  b[23] = 41.6;
        a[24] = 35.7;  b[24] = 43.9; a[25] = 37.9;  b[25] = 46.1;
        a[26] = 39.9;  b[26] = 48.1; a[27] = 41.9;  b[27] = 50.1;
        a[28] = 43.7;  b[28] = 52.1; a[29] = 45.5;  b[29] = 53.9;
        a[30] = 47.2;  b[30] = 55.6; a[31] = 48.9;  b[31] = 57.3;
        a[32] = 50.4;  b[32] = 58.9; a[33] = 52.1;  b[33] = 60.5;
        a[34] = 53.4;  b[34] = 62.1; a[35] = 54.8;  b[35] = 63.5;
        a[36] = 56.2;  b[36] = 64.9; a[37] = 57.6;  b[37] = 66.4;
        a[38] = 59.8;  b[38] = 67.8; a[39] = 60.4;  b[39] = 69.3;
        a[40] = 61.9;  b[40] = 70.8;
       
        let eg = the("semanas").value;
        var lh=parseInt(this.value);
   
        the("humero.pct.morfologia").classList.remove("is-valid", "is-invalid");
        if (eg < 12 || eg > 40) {
            $("#humero\\.pct\\.morfologia").val('0');
        }
        else {
            eg = parseInt(eg);
            var uno = b[eg] - a[eg];
            var dos = lh - a[eg];
            var resultado = (parseInt(90 / (uno) * (dos) + 5));

            the("humero.pct.real.morfologia").value = resultado;

            ajustarProgreso(resultado, "humeroMorfologia");
            var pctLH = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 95){
                pctLH = '> 95';
            }
            else if (resultado < 5){
                pctLH = '< 5';
            }
            else{
               pctLH = resultado;
            }
            $('#humero\\.pct\\.morfologia').val(pctLH);
            if (resultado < 5 || resultado > 95){
                the("humero.pct.morfologia").classList.add("is-invalid");
            }else{
                the("humero.pct.morfologia").classList.add("is-valid");
            }
        }
    })

    $("#tc\\.morfologia").on("keyup", function(){
        /* 3 97*/
        //cerebelo segun Hill
        var pct2ds = [];
        var pctmedia = [];
        var pct2dsmas = [];
    
        pct2ds[0] = 12;pct2ds[1] = 14;pct2ds[2] = 15;pct2ds[3] = 16;pct2ds[4] = 17;pct2ds[5] = 18;
        pct2ds[6] = 19;pct2ds[7] = 20;pct2ds[8] = 21;pct2ds[9] = 22;pct2ds[10] = 24;
        pct2ds[11] = 26;pct2ds[12] = 27;pct2ds[13] = 29;pct2ds[14] = 30;pct2ds[15] = 31;
        pct2ds[16] = 33;pct2ds[17] = 36;pct2ds[18] = 37;pct2ds[19] = 38;pct2ds[20] = 40;
        pct2ds[21] = 40;pct2ds[22] = 40;pct2ds[23] = 41;pct2ds[24] = 42;pct2ds[25] = 44;
        
        pctmedia[0] = 15;pctmedia[1] = 16;pctmedia[2] = 17;pctmedia[3] = 18;pctmedia[4] = 20;
        pctmedia[5] = 20;pctmedia[6] = 22;pctmedia[7] = 23;pctmedia[8] = 24;pctmedia[9] = 26;
        pctmedia[10] = 28;pctmedia[11] = 30;pctmedia[12] = 31;pctmedia[13] = 33;pctmedia[14] = 34;
        pctmedia[15] = 37;pctmedia[16] = 39;pctmedia[17] = 41;pctmedia[18] = 43;pctmedia[19] = 46;
        pctmedia[20] = 47;pctmedia[21] = 49;pctmedia[22] = 51;pctmedia[23] = 51;pctmedia[24] = 52;
        pctmedia[25] = 52
        
        pct2dsmas[0] = 18;pct2dsmas[1] = 18;pct2dsmas[2] = 19;pct2dsmas[3] = 20;pct2dsmas[4] = 22;
        pct2dsmas[5] = 23;pct2dsmas[6] = 25;pct2dsmas[7] = 26;pct2dsmas[8] = 27;pct2dsmas[9] = 30;
        pct2dsmas[10] = 32;pct2dsmas[11] = 34;pct2dsmas[12] = 34;pct2dsmas[13] = 37;pct2dsmas[14] = 38;
        pct2dsmas[15] = 41;pct2dsmas[16] = 43;pct2dsmas[17] = 46;pct2dsmas[18] = 48;pct2dsmas[19] = 53;
        pct2dsmas[20] = 56;pct2dsmas[21] = 58;pct2dsmas[22] = 60;pct2dsmas[23] = 62;pct2dsmas[24] = 62;
        pct2dsmas[25] = 62;
    
        var cb=0;
        let eg = the("semanas").value;
        cb=parseInt(the("tc.morfologia").value);
    
        the("tc.pct.morfologia").classList.remove("is-valid", "is-invalid");

        if (eg < 15 ||eg > 40) {
            the("tc.pct.morfologia").value = 0
        }else {
            eg = eg - 15;
            eg = parseInt(eg);
            var uno=pct2dsmas[eg] - pct2ds[eg];
            var dos=cb - pct2ds[eg];
            var resultado = parseInt(95 / (uno) * (dos) + 3);
            var pctCB = '';

            the("tc.pct.real.morfologia").value = resultado;
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 97){
                pctCB = '> 97';
            }
            else if (resultado < 3){
                pctCB = '< 3';
            }
            else{
                pctCB = resultado;
            }

            $('#tc\\.pct\\.morfologia').val(pctCB);
            ajustarProgreso(resultado, "tcMorfologia");

            if (resultado < 3 || resultado > 97){
                the("tc.pct.morfologia").classList.add("is-invalid");
            }else{
                the("tc.pct.morfologia").classList.add("is-valid");
            }
        }
    })

    $("#cm\\.morfologia").on("keyup", function(){
        /* esta es 5 95 corregir el algoritmo de calculo de porcentaje*/
        var cisM10 = [];
        var cisM90 = [];

        cisM10[14] = 1.69; cisM10[15] = 2.1; cisM10[16] = 2.4; cisM10[17] = 2.6;
        cisM10[18] = 2.8; cisM10[19] = 3.1; cisM10[20] = 3.3; cisM10[21] = 3.5;
        cisM10[22] = 3.7; cisM10[23] = 3.9; cisM10[24] = 4.1; cisM10[25] = 4.3;
        cisM10[26] = 4.4; cisM10[27] = 4.6; cisM10[28] = 4.7; cisM10[29] = 4.9;
        cisM10[30] = 5.0; cisM10[31] = 5.1; cisM10[32] = 5.2; cisM10[33] = 5.3;
        cisM10[34] = 5.3; cisM10[35] = 5.4; cisM10[36] = 5.4; cisM10[37] = 5.4;
        cisM10[38] = 5.5; cisM10[39] = 5.5;

        cisM90[14] = 5.3; cisM90[15] = 5.7; cisM90[16] = 6; cisM90[17] = 6.3;
        cisM90[18] = 6.6; cisM90[19] = 6.9; cisM90[20] = 7.2; cisM90[21] = 7.5;
        cisM90[22] = 7.7; cisM90[23] = 8; cisM90[24] = 8.2; cisM90[25] = 8.5;
        cisM90[26] = 8.7; cisM90[27] = 8.9; cisM90[28] = 9.1; cisM90[29] = 9.3;
        cisM90[30] = 9.4; cisM90[31] = 9.6; cisM90[32] = 9.7; cisM90[33] = 9.8;
        cisM90[34] = 9.9; cisM90[35] = 10; cisM90[36] = 10; cisM90[37] = 10.1;
        cisM90[38] = 10.1; cisM90[39] = 10.1;
        
        let eg = the("semanas").value;
        let cm = this.value;
        
        cm = cm.toString();
        cm = cm.replace(",", ".");
        cm = parseFloat(cm);
    
        the("cm.pct.morfologia").classList.remove("is-valid", "is-invalid");

        if (eg < 14 ||eg > 39) {
            the("cm.pct.morfologia").value = 0
        }else {
            eg = parseInt(eg);
            var uno = cisM90[eg] - cisM10[eg];
            var dos = cm - cisM10[eg];
            var resultado = (parseInt(90 / (uno) * (dos) + 5));

            the("cm.pct.real.morfologia").value = resultado;

            var pctCISM = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 95){
                pctCISM = '> 95';
            }
            else if (resultado < 5){
                pctCISM = '< 5';
            }
            else{
                pctCISM = resultado;
            }

            $('#cm\\.pct\\.morfologia').val(pctCISM);
            ajustarProgreso(resultado, "cmMorfologia");

            if (resultado < 5 || resultado > 95){
                the("cm.pct.morfologia").classList.add("is-invalid");
            }else{
                the("cm.pct.morfologia").classList.add("is-valid");
            }
        }
    })

    $("#liquido\\.semi\\.morfologia").on("keyup", function(){
         /* 5 95*/
        let a = [], b = [];
        a[0]=23; a[1]=25; a[2]=27; a[3]=28; a[4]=29; a[5]=29; a[6]=30; a[7]=30; a[8]=30; a[9]=30; a[10]=30; a[11]=30; a[12]=30; a[13]=29; a[14]=29; a[15]=29; a[16]=29; a[17]=29; a[18]=28; a[19]=28; a[20]=27; a[21]=26; a[22]=24; a[23]=23; a[24]=21;
        b[0]=59; b[1]=62; b[2]=64; b[3]=66; b[4]=67; b[5]=68; b[6]=68; b[7]=68; b[8]=68; b[9]=68; b[10]=68; b[11]=69; b[12]=69; b[13]=69; b[14]=69; b[15]=70; b[16]=71; b[17]=72; b[18]=72; b[19]=72; b[20]=71; b[21]=70; b[22]=68; b[23]=66; b[24]=62;

        let eg = the("semanas").value;
        let bvm = parseInt(the("liquido.semi.morfologia").value);


        the("liquido.semi.pct.morfologia").classList.remove("is-valid", "is-invalid");
        
        if (eg > 15 || eg < 41){
            eg = eg - 16;
            eg = parseInt(eg);
            var uno = b[eg] - a[eg];
            var dos = bvm - a[eg];
            var resultado = parseInt(90 / (uno) * (dos) + 5);
            var pctCISM = 0;
            ajustarProgreso(resultado, "bvmMorfologia");
            
            if (resultado > 95){
                pctCISM = '> 95';
            }
            else if (resultado < 5){
                pctCISM = '< 5';
            }
            else{
                pctCISM = resultado;
            }

            $('#liquido\\.semi\\.pct\\.morfologia').val(pctCISM);

            if (resultado < 5 || resultado > 95){
                the("liquido.semi.pct.morfologia").classList.add("is-invalid");
            }else{
                the("liquido.semi.pct.morfologia").classList.add("is-valid");
            }
        }else{
            the("liquido.semi.pct.morfologia").value = 0
        }
    })

    $("#art\\.ut\\.d\\.morfologia").on("keyup", function(){
        /* 5 95*/
        let ut = pctut(this.value);
        the("art.ut.d.pct.morfologia").classList.remove("is-valid", "is-invalid");

        the("art.ut.d.pct.morfologia").value = ut.pct
        the("art.ut.d.pct.real.morfologia").value = ut.raw
        ajustarProgreso(ut.raw, "artUtDMorfologia");
        
        if (ut.raw < 5 || ut.raw > 95){
            the("art.ut.d.pct.morfologia").classList.add("is-invalid");
        }else{
            the("art.ut.d.pct.morfologia").classList.add("is-valid");
        }

        aui = the("art.ut.i.morfologia").value;
        aud = the("art.ut.d.morfologia").value;

        aui = aui.toString(); 
        aui = aui.replace(",", ".");
        aui = parseFloat(aui);

        aud = aud.toString(); 
        aud = aud.replace(",", ".");
        aud = parseFloat(aud);

        if (aui > 0 && aud > 0){
            let utprom = ((aui + aud) / 2);

            the("art.ut.prom.pct.morfologia").classList.remove("is-valid", "is-invalid");
            the("art.ut.prom.morfologia").value = utprom.toFixed(2);

            utprom = pctut(utprom);

            the("art.ut.prom.pct.morfologia").value = utprom.pct;
            the("art.ut.prom.pct.real.morfologia").value = utprom.raw
            ajustarProgreso(utprom.raw, "artUtPromMorfologia");

            if (utprom.raw < 5 || utprom.raw > 95){
                the("art.ut.prom.pct.morfologia").classList.add("is-invalid");
            }else{
                the("art.ut.prom.pct.morfologia").classList.add("is-valid");
            }
        }

    })

    $("#art\\.ut\\.i\\.morfologia").on("keyup", function(){
        /* 5 95*/
        let ut = pctut(this.value);
        the("art.ut.i.pct.morfologia").classList.remove("is-valid", "is-invalid");

        the("art.ut.i.pct.morfologia").value = ut.pct
        the("art.ut.i.pct.real.morfologia").value = ut.raw
        ajustarProgreso(ut.raw, "artUtIMorfologia");
        
        if (ut.raw < 5 || ut.raw > 95){
            the("art.ut.i.pct.morfologia").classList.add("is-invalid");
        }else{
            the("art.ut.i.pct.morfologia").classList.add("is-valid");
        }

        aui = the("art.ut.i.morfologia").value;
        aud = the("art.ut.d.morfologia").value;

        aui = aui.toString(); 
        aui = aui.replace(",", ".");
        aui = parseFloat(aui);

        aud = aud.toString(); 
        aud = aud.replace(",", ".");
        aud = parseFloat(aud);

        if (aui > 0 && aud > 0){
            let utprom = ((aui + aud) / 2);

            the("art.ut.prom.pct.morfologia").classList.remove("is-valid", "is-invalid");
            the("art.ut.prom.morfologia").value = utprom.toFixed(2);

            utprom = pctut(utprom);

            the("art.ut.prom.pct.morfologia").value = utprom.pct;
            the("art.ut.prom.pct.real.morfologia").value = utprom.raw
            ajustarProgreso(utprom.raw, "artUtPromMorfologia");

            if (utprom.raw < 5 || utprom.raw > 95){
                the("art.ut.prom.pct.morfologia").classList.add("is-invalid");
            }else{
                the("art.ut.prom.pct.morfologia").classList.add("is-valid");
            }
        }

    })

    $("#art\\.umb\\.morfologia").on("keyup", function(){
        /* 5 95*/
        'use strict';
        let a = [],b = [],c = [],d = [];

        a[0]=0.97;a[1]=0.95;a[2]=0.94;a[3]=0.92;a[4]=0.9;a[5]=0.89;a[6]=0.87;a[7]=0.85;a[8]=0.82;a[9]=0.8;a[10]=0.78; a[11]=0.75;a[12]=0.73; a[13]=0.7;a[14]=0.67; a[15]=0.65;a[16]=0.62; a[17]=0.58;a[18]=0.55; a[19]=0.52;a[20]=0.49;
        b[0]=1.6;b[1]=1.56;b[2]=1.53; b[3]=1.5;b[4]=1.46; b[5]=1.43;b[6]=1.4;b[7]=1.37;b[8]=1.35; b[9]=1.32;b[10]=1.29; b[11]=1.27;b[12]=1.25; b[13]=1.22;b[14]=1.2; b[15]=1.18;b[16]=1.16; b[17]=1.14;b[18]=1.13; b[19]=1.11;b[20]=1.09;
        c[20]=0.78; c[21]=0.87; c[22]=0.95; c[23]=1.02;c[24]=1.09; c[25]=1.15; c[26]=1.2; c[27]=1.24;c[28]=1.28; c[29]=1.31; c[30]=1.33; c[31]=1.35;c[32]=1.36; c[33]=1.36; c[34]=1.36; c[35]=1.34;c[36]=1.32; c[37]=1.3; c[38]=1.26; c[39]=1.22;c[40]=1.18;
        d[20]=1.68; d[21]=1.88; d[22]=2.06; d[23]=2.22;d[24]=2.36; d[25]=2.49; d[26]=2.6;d[27]=2.7;d[28]=2.78; d[29]=2.84; d[30]=2.89; d[31]=2.92;d[32]=2.93; d[33]=2.93; d[34]=2.91; d[35]=2.87;d[36]=2.82; d[37]=2.75; d[38]=2.67; d[39]=2.57;

        let eg = the("semanas").value;
 	    var aumb = this.value;
	    aumb = aumb.toString();
 	    aumb = aumb.replace(",", ".");
 	    aumb = parseFloat(aumb);
 
        the("art.umb.pct.morfologia").classList.remove("is-valid", "is-invalid");

	    if (eg < 20 || eg > 40){
            the("art.umb.pct.morfologia").value = 0;
            ajustarProgreso(0, "artUmbMorfologia");
            the("ind.cp.morfologia").value = 0
            the("ind.cp.pct.morfologia").value = 0
            ajustarProgreso(0, "indCpMorfologia");
	    }else {
		    eg = eg - 20;
		    eg = parseInt(eg);

            var uno=b[eg] - a[eg];
		    var dos=aumb - a[eg];
            var resultado = parseInt(90 / (uno) * (dos) + 5);
            the("art.umb.pct.real.morfologia").value = resultado
            ajustarProgreso(resultado, "artUmbMorfologia");

		    var pctAUMB = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 95){
				pctAUMB = '> 95';
			}
			else if (resultado < 5){
				pctAUMB = '< 5';
			}
			else{
				pctAUMB = resultado;
            }

            $("#art\\.umb\\.pct\\.morfologia").val(pctAUMB);

            if (resultado < 5 || resultado > 95){
                the("art.umb.pct.morfologia").classList.add("is-invalid");
            }else{
                the("art.umb.pct.morfologia").classList.add("is-valid");
            }

		    if ($('#art\\.cm\\.morfologia').val()){
                /* 5 95*/
                var cm = $('#art\\.cm\\.morfologia').val();
                cm = cm.toString();
                cm = cm.replace(",", ".");
                cm = parseFloat(cm);

                var ccp = (cm / aumb);
                
                $('#ind\\.cp\\.morfologia').val(ccp.toFixed(2));
                the("ind.cp.pct.morfologia").classList.remove("is-valid", "is-invalid");

			    eg = eg + 20;
			    uno = d[eg] - c[eg];
			    dos = ccp - c[eg];
                resultado = parseInt(90 / (uno) * (dos) + 5);
                the("ind.cp.pct.real.morfologia").value = resultado
			    ajustarProgreso(resultado, "indCpMorfologia");

                var pctCCP = '';
			    //truncador de Pct, sobre 100 o bajo 1
			    if (resultado > 95){
				    pctCCP = '> 95';
			    }else if (resultado < 5){
				    pctCCP = '< 5';
			    }else{
				    pctCCP = resultado;
			    }

                the("ind.cp.pct.morfologia").value = pctCCP;

                if (resultado < 5 || resultado > 95){
                    the("ind.cp.pct.morfologia").classList.add("is-invalid");
                }else{
                    the("ind.cp.pct.morfologia").classList.add("is-valid");
                }

		    }
	    }
    })

    $("#art\\.cm\\.morfologia").on("keyup", function(){
        'use strict';
        /* 5 95*/
	    var a = [],b = [],c = [],d = [];

        a[0]=1.24;a[1]=1.29;a[2]=1.34;a[3]=1.37;a[4]=1.4;a[5]=1.43;a[6]=1.44;a[7]=1.45;a[8]=1.45;a[9]=1.44;a[10]=1.43;a[11]=1.41;a[12]=1.38;a[13]=1.34;a[14]=1.3;a[15]=1.25;a[16]=1.19;a[17]=1.13;a[18]=1.05;a[19]=0.98;a[20]=0.89;
        b[0]=1.98;b[1]=2.12;b[2]=2.25;b[3]=2.36;b[4]=2.45;b[5]=2.53;b[6]=2.59;b[7]=2.63;b[8]=2.66;b[9]=2.67;b[10]=2.67;b[11]=2.65;b[12]=2.62;b[13]=2.56;b[14]=2.5;b[15]=2.41;b[16]=2.31;b[17]=2.2;b[18]=2.07;b[19]=1.92;b[20]=1.76;
        c[20]=0.78;c[21]=0.87;c[22]=0.95;c[23]=1.02;c[24]=1.09;c[25]=1.15;c[26]=1.2;c[27]=1.24;c[28]=1.28;c[29]=1.31;c[30]=1.33;c[31]=1.35;c[32]=1.36;c[33]=1.36;c[34]=1.36;c[35]=1.34;c[36]=1.32;c[37]=1.3;c[38]=1.26;c[39]=1.22;c[40]=1.18;
        d[20]=1.68;d[21]=1.88;d[22]=2.06;d[23]=2.22;d[24]=2.36;d[25]=2.49;d[26]=2.6;d[27]=2.7;d[28]=2.78;d[29]=2.84;d[30]=2.89;d[31]=2.92;d[32]=2.93;d[33]=2.93;d[34]=2.91;d[35]=2.87;d[36]=2.82;d[37]=2.75;d[38]=2.67;d[39]=2.57;

        let eg = the("semanas").value;
	    var acm = $('#art\\.cm\\.morfologia').val();
	    acm = acm.toString();
 	    acm = acm.replace(",", ".");
        acm = parseFloat(acm);
         
        the("art.cm.pct.morfologia").classList.remove("is-valid", "is-invalid");

	    if (eg < 20 || eg > 40){
            the("art.cm.pct.morfologia").value = 0;
            ajustarProgreso(0, "artCmMorfologia");
            the("ind.cp.morfologia").value = 0
            the("ind.cp.pct.morfologia").value = 0
            ajustarProgreso(0, "indCpMorfologia");
        } else {
            eg = eg - 20;
            eg = parseInt(eg);
            var uno = b[eg] - a[eg];
            var dos = acm - a[eg];
            var resultado = parseInt(90 / (uno) * (dos) + 5);
            the("art.cm.pct.real.morfologia").value = resultado
            ajustarProgreso(resultado, "artCmMorfologia");

            var pctACM = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 95){
				pctACM = '> 95';
			}
			else if (resultado < 5){
				pctACM = '< 5';
			}
			else{
				pctACM = resultado;
            }
            
            the("art.cm.pct.morfologia").value = pctACM;
            
            if (resultado < 5 || resultado > 95){
                the("art.cm.pct.morfologia").classList.add("is-invalid");
            }else{
                the("art.cm.pct.morfologia").classList.add("is-valid");
            }

		    if ($('#art\\.umb\\.morfologia').val()){
                /* 5 95*/
                var aumb = $('#art\\.umb\\.morfologia').val();
                aumb = aumb.toString();
                aumb = aumb.replace(",", ".");
                aumb = parseFloat(aumb);

                var ccp = (acm / aumb);

                $('#ind\\.cp\\.morfologia').val(ccp.toFixed(2));
                the("ind.cp.pct.morfologia").classList.remove("is-valid", "is-invalid");

                eg = eg + 20;
                uno = d[eg] - c[eg];
                dos = ccp - c[eg];
                resultado = parseInt(90 / (uno) * (dos) + 5);
                the("ind.cp.pct.real.morfologia").value = resultado
                ajustarProgreso(resultado, "indCpMorfologia");

                var pctCCP = '';
                //truncador de Pct, sobre 100 o bajo 1
                if (resultado > 95){
                    pctCCP = '> 95';
                }
                else if (resultado < 5){
                    pctCCP = '< 5';
                }
                else{
                    pctCCP = resultado;
                }

                the("ind.cp.pct.morfologia").value = pctCCP;

                if (resultado < 5 || resultado > 95){
                    the("ind.cp.pct.morfologia").classList.add("is-invalid");
                }else{
                    the("ind.cp.pct.morfologia").classList.add("is-valid");
                }
		    }
	    }
    })

    $("#lc\\.morfologia").on("keyup", function(){
        let cV = +this.value;
        if (cV == NaN){
            the("lc.pct.morfologia").value = "";
        }else if (cV < 25){
            the("lc.pct.morfologia").value ="Cérvix corto";
        }else if(cV > 24){
            the("lc.pct.morfologia").value ="Cérvix normal";
        }
    })

    $("#dv\\.morfologia").on("keyup", function(){
        'use strict';
        /* 5 95*/
        let a = [];
        let b = [];

        a[0]=0.32; a[1]=0.32; a[2]=0.32; a[3]=0.32; a[4]=0.32; a[5]=0.32; a[6]=0.31; a[7]=0.31; a[8]=0.31; a[9]=0.3; a[10]=0.29; a[11]=0.28; a[12]=0.28; a[13]=0.27; a[14]=0.26; a[15]=0.25; a[16]=0.24; a[17]=0.23; a[18]=0.22; a[19]=0.21; a[20]=0.2;
        b[0]=0.83; b[1]=0.83; b[2]=0.83; b[3]=0.83; b[4]=0.83; b[5]=0.83; b[6]=0.82; b[7]=0.82; b[8]=0.81; b[9]=0.81; b[10]=0.8; b[11]=0.79; b[12]=0.78; b[13]=0.77; b[14]=0.76; b[15]=0.75; b[16]=0.74; b[17]=0.73; b[18]=0.72; b[19]=0.71; b[20]=0.7;

        let eg = the("semanas").value;
        var dv = this.value;

        the("dv.pct.morfologia").classList.remove("is-valid", "is-invalid");

        dv = dv.toString();
        dv = dv.replace(",", ".");
        dv = parseFloat(dv);

        if (eg < 20 || eg > 40){
            the("dv.pct.morfologia").value = 0
        }else {
            eg = eg - 20;
            eg = parseInt(eg);

            var uno=b[eg] - a[eg];
            var dos= dv - a[eg];
            var resultado = parseInt(90 / (uno) * (dos) + 5);

            the("dv.pct.real.morfologia").value = resultado;
            var pctDV = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 95){
                pctDV = '> 95';
            }else if (resultado < 5){
                pctDV = '< 5';
            }else{
                pctDV = resultado;
            }
            ajustarProgreso(resultado, "dvMorfologia");

            the("dv.pct.morfologia").value = pctDV;

            if (resultado < 5 || resultado > 95){
                the("dv.pct.morfologia").classList.add("is-invalid");
            }else{
                the("dv.pct.morfologia").classList.add("is-valid");
            }
        }
    })

    $("#vlp\\.morfologia").on("keyup", function(){
        atrio = this.value;
        atrio = atrio.toString();
        atrio = atrio.replace(",", ".");
        atrio = parseFloat(atrio);

        if (atrio < 10){
            the("vlp.txt.morfologia").value = "Normal"
        }else if (atrio < 16){
            the("vlp.txt.morfologia").value = "Ventriculomegalia"
        }else{
            the("vlp.txt.morfologia").value = "Hidrocefalia"
        }
    })

    $("#vld\\.morfologia").on("keyup", function(){
        atrio = this.value;
        atrio = atrio.toString();
        atrio = atrio.replace(",", ".");
        atrio = parseFloat(atrio);

        if (atrio < 10){
            the("vld.txt.morfologia").value = "Normal"
        }else if (atrio < 16){
            the("vld.txt.morfologia").value = "Ventriculomegalia"
        }else{
            the("vld.txt.morfologia").value = "Hidrocefalia"
        }
    })

    $("input[type='radio']").on("change",function() {
        if (this.value == "si"){
            this.parentElement.parentElement.parentElement.parentElement.children[2].classList.add("d-none");
        }else if (this.value == "no"){
            this.parentElement.parentElement.parentElement.parentElement.children[2].classList.remove("d-none");
        }
    });  
})

$(window).on('hashchange', function(){
    var hash = document.location.hash;
    var div = ["#inicio","#consulta","#paciente","#ajustepeso","#about","#tipoExamen","#ecoDoppler","#ecoObsSegTrim","#ecoObsPrimTrim","#configuracion","#postnatal","#recienacido","#investigacion","#hipoglicemia","#pdfviebox","#registro","#consentimiento","#construccion","#ecoGinecologica","#ecoObsPrimTrimTrisomia", "#morfologiafet"];
    var div_fecha = ["#consulta","#paciente", "#tipoExamen","#ecoDoppler","#ecoObsSegTrim","#ecoObsPrimTrim","#construccion","#ecoGinecologica","#ecoObsPrimTrimTrisomia", "#morfologiafet"];
    let d = "d-none";

    if (div.includes(hash)){
        $(activeHash).addClass(d);
        $(hash).removeClass(d);
        activeHash = hash;

        if (div_fecha.includes(hash)){
            document.getElementsByTagName("section")[0].classList.remove(d);
            the("titulo").innerHTML = titulos[hash];

            if (hash == "#ecoGinecologica"){
                the("semanas").parentElement.parentElement.parentElement.parentElement.classList.add(d);
                the("fpp").parentElement.parentElement.classList.add(d);
                the("diaciclo").parentElement.parentElement.classList.remove(d);
            }else{
                the("diaciclo").parentElement.parentElement.classList.add(d);
                the("semanas").parentElement.parentElement.parentElement.parentElement.classList.remove(d);
                the("fpp").parentElement.parentElement.classList.remove(d);
            }
        }
        else{
            document.getElementsByTagName("section")[0].classList.add(d);
            //especial
            if (hash == "#recienacido"){
                $("#graficoEstandar").trigger("click");
            }
        }

        //especial
        if (hash == "#ecoObsPrimTrim" || hash == "#ecoObsSegTrim" || hash == "#inicio"){
            $("#volver").attr("href", "#inicio");
        }

        //especial para el header
        if (hash == "#inicio"){
            document.getElementsByTagName("header")[0].classList.remove("d-none");
        }else{
            document.getElementsByTagName("header")[0].classList.add("d-none");
        }
    }
    else{
        $(activeHash).addClass(d);
        the("inicio").classList.remove(d);
    }
});

// Guardar para partos
$(document).ready(function(){

    $("#modalPreInfEcoObsSegTrim1, #modalPreInfEcoObsSegTrim2").on('click', function() {
        let data = new FormData()

        data.append("nombre" , the("nombre-paciente").value)
        data.append("paciente" , the("id-paciente").value)

        data.append("fum" , the("fum").value)
        data.append("semanas" , the("semanas").value)
        data.append("dias" , the("dias").value)
        data.append("fpp" , the("fpp").value)

        let profref = the("profref").value

        var configuracion = JSON.parse(localStorage["configuracion"]);
        let resultado = configuracion.correos[+profref -1]

        data.append("profref" , resultado)

        fetch('https://partos.crecimientofetal.cl/api/guardar', {method: 'POST',body: data, mode: 'cors'}).then(function(response) {

            console.log(response)

        }).catch(function(error) {
            console.log(error)
        });
    });

})

function infPrecoz(){

    let sacovitelinotxt = (the("saco-vitelino").value == "no se observa") ? "." : " de diametro " + the("saco-vitelino-mm").value + " mm.";
    let sacogestacionaltxt = the("saco").value;
    sacogestacionaltxt = (sacogestacionaltxt > 0) ? " diametro promedio " + sacogestacionaltxt + " mm." : ".";

    //si solo tiena saco
    var InformeString = "";

    if (the("lcn").value < 1 && the("saco").value > 1){

        InformeString = '<div class="container-fluid" style="margin-top: 5rem;"><h4 class="page-header text-center">Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h4></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container-fluid"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table> <p> <strong>FUM: </strong>:FUR <br/> <strong>Ege: </strong>:EG semanas <br/> <strong>FPP: </strong>:FPP </p></div><div class="container-fluid"> <p><strong style="color: #045dab;">DESCRIPCIÓN</strong></p><p> Cuerpo Uterino :LINEA1 <br/> Saco Gestacional :LINEA2 <br/> Saco Vitelino :LINEA3 <br/> Embrión :LINEA4 <br/> Exploración anexial derecha :LINEA5 <br/> Exploración anexial izquierda :LINEA6 <br/> Exploración de Douglas :LINEA7 </p><p></p><p></p><p><strong style="color: #045dab;">:TITULOBIOMETRIAS</strong></p><p>:LINEA12</p><p></p><p></p></div><div class="container-fluid"> <p><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong><span style="color: #045dab;"> (Adicionar comentarios del examinador)</span></p><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><div class="container-fluid" style="margin-top: 5rem;"> <p class="text-right top40">Ecografista: <strong>:ECOGRAFISTA</strong></p><span style="border-top: 1px solid #000; width: 100% !important; display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000; width: 100% !important; display: block;"></span> <p style="border-bottom: 0; margin-top: 10px;"> Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br/> Referencia Edad menstrual por LCC Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br/> Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br/> <strong> El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </p></div>';

    }else if (the("lcn").value < 1 && the("saco").value < 1 && sacogestacionaltxt == "."){

        InformeString = '<div class="container-fluid" style="margin-top: 5rem;"><h4 class="page-header text-center">Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h4></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container-fluid"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table> <p> <strong>FUM: </strong>:FUR <br/> <strong>Ege: </strong>:EG semanas <br/> <strong>FPP: </strong>:FPP </p></div><div class="container-fluid"> <p><strong style="color: #045dab;">DESCRIPCIÓN</strong></p><p> Cuerpo Uterino :LINEA1 <br/> Exploración anexial derecha :LINEA5 <br/> Exploración anexial izquierda :LINEA6 <br/> Exploración de Douglas :LINEA7 </p><p></p><p></p><p><strong style="color: #045dab;">:TITULOBIOMETRIAS</strong></p><p>:LINEA12</p><p></p><p></p><p><strong style="color: #045dab;">HIPÓTESIS DIAGNÓSTICA</strong></p><p> :LINEA8 :LINEA9 <br/> :LINEA10 <br/> :LINEA11 </p></div><div class="container-fluid"> <p><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong></p><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><div class="container-fluid" style="margin-top: 5rem;"> <p class="text-right top40">Ecografista: <strong>:ECOGRAFISTA</strong></p><span style="border-top: 1px solid #000; width: 100% !important; display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000; width: 100% !important; display: block;"></span> <p style="border-bottom: 0;"> Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br/> Referencia Edad menstrual por LCC Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br/> Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br/> <strong> El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </p></div>';

    }else{

        InformeString = '<div class="container-fluid" style="margin-top: 5rem;"><h4 class="page-header text-center">Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h4></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container-fluid"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table> <p> <strong>FUM: </strong>:FUR <br/> <strong>Ege: </strong>:EG semanas <br/> <strong>FPP: </strong>:FPP </p></div><div class="container-fluid"> <p><strong style="color: #045dab;">DESCRIPCIÓN</strong></p><p> Cuerpo Uterino :LINEA1 <br/> Saco Gestacional :LINEA2 <br/> Saco Vitelino :LINEA3 <br/> Embrión :LINEA4 <br/> Exploración anexial derecha :LINEA5 <br/> Exploración anexial izquierda :LINEA6 <br/> Exploración de Douglas :LINEA7 </p><p></p><p></p><p><strong style="color: #045dab;">:TITULOBIOMETRIAS</strong></p><p>:LINEA12</p><p></p><p></p><p><strong style="color: #045dab;">HIPÓTESIS DIAGNÓSTICA</strong></p><p> :LINEA8 :LINEA9 <br/> :LINEA10 <br/> :LINEA11 </p></div><div class="container-fluid"> <p><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong></p><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><div class="container-fluid" style="margin-top: 5rem;"> <p class="text-right top40">Ecografista: <strong>:ECOGRAFISTA</strong></p><span style="border-top: 1px solid #000; width: 100% !important; display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000; width: 100% !important; display: block;"></span> <p style="border-bottom: 0;"> Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br/> Referencia Edad menstrual por LCC Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br/> Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br/> <strong> El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </p></div>';

    }

    let fcftexto = the("embrion").value;
    let optiones = ["no se observa aun","act. no evidenciable","act. card. y Corp. (-)"];

    if (optiones.includes(fcftexto)){
        fcftexto = ".";
    }
    else{
        fcftexto = (the("fcf-prim").value == '(+) inicial') ? " frecuencia cardiaca fetal " + the("fcf-prim").value : " frecuencia cardiaca fetal de " + the("fcf-prim").value +" x min.";
    }

    let douglasinforme = (the("exploracion-douglas").value == 'ocupado') ? the("comentarios-douglas-informe").value : ".";

    var LINEA1 = the("utero-ubic1").value + " " + the("utero-ubic2").value+ ", " + the("cuerpo-uterino").value + ".";
    var LINEA2 = the("saco-gestacional").value + sacogestacionaltxt;
    var LINEA3 = the("saco-vitelino").value + sacovitelinotxt;
    var LINEA4 = the("embrion").value + fcftexto;
    var LINEA5 = the("anexo-derecho").value;
    var LINEA6 = the("anexo-izquierdo").value;
    var LINEA7 = the("exploracion-douglas").value + ", " + douglasinforme;
    var LINEA12 = '';
    var LINEA8 = '';

    if (the("lcn").value > 0){

        var LINEA9 = "Utero " + the("utero-ubic1").value + " " + the("utero-ubic2").value + ", " + the("cuerpo-uterino").value + ".";
        var LINEA10 = "Exploración anexial derecha " + the("anexo-derecho").value;
        var LINEA11 = "Exploración anexial izquierda " + the("anexo-izquierdo").value + "<br>";

    } 
    else if (the("lcn").value == "" && the("embrion").value == "no procede"){

        var LINEA9 = "Utero " + the("utero-ubic1").value + " " + the("utero-ubic2").value + ", " + the("cuerpo-uterino").value + ".";
        var LINEA10 = "Exploración anexial " + the("anexo-derecho").value;
        var LINEA11 = "";
        LINEA12 = "no procede";

    }else{

        var LINEA9 = "Gestación Inicial<br>Utero " + the("utero-ubic1").value + " " + the("utero-ubic2").value + ", " + the("cuerpo-uterino").value + ".";
        var LINEA10 = "Exploración anexial " + the("anexo-derecho").value;
        var LINEA11 = "";
        LINEA12 = "Embrion no se observa";

    }

    if (sacogestacionaltxt > 0){
        LINEA12 = "Saco gestacional diámetro promedio de " + sacogestacionaltxt +" mm.<br>";
        LINEA8 = "Edad gestacional estimada " + the("sacoPct").value + " por saco gestacional.<br>";
    }

    if (the("lcn").value > 0) {
        LINEA12 = "Largo embrionario máximo de " + the("lcn").value + " mm.";
        LINEA8 = "Edad gestacional estimada " + the("lcnPct").value + " semanas por LCC.<br>";
    }

    var TITULOBIOMETRIAS = 'BIOMETRÍAS EMBRIO/FETAL';

    if (the("lcn").value < 1) {
        if (sacogestacionaltxt < 1){
            LINEA12 = '';
            LINEA8 = '';
            TITULOBIOMETRIAS = '';
        }
    }

    var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista option:selected').text();

    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();

    InformeString = InformeString.replace(":PACIENTE", paciente);
    InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
    InformeString = InformeString.replace(":MOTIVO", motivo);
    InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);

    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + ' de '+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + ' de '+ monthsES[fpp.getUTCMonth()+1] + ' ' + fpp.getFullYear();
    let eg = the("semanas").value + '.'+ the("dias").value;
    InformeString = InformeString.replace(":FUR", fur);
    InformeString = InformeString.replace(":EG", eg);
    InformeString = InformeString.replace(":FPP", fpp);

    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();

    var comentario = the("comentarios-eco-uno").value;
    comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : comentario='';

    if (the("saco").value && the("embrion").value == "no se observa aun"){

        comentario += "<br>Calculo inicial de edad según saco gestacional: "+the("sacoPct").value+" semanas<br><br>-Se sugiere agendar próxima ecografía para determinar edad gestacional ecográfica<br>";

    } else if (the("embrion").value != "act. card. y Corp. (-)"){

        let fur = new Date(Date.parse(the("fum").value));
        fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
        let fpp = new Date(Date.parse(the("fpp").value));
        fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();
        let eg = the("semanas").value + "."+ the("dias").value + " semanas.";
        comentario += "<br>Para edad gestacional calculada, corresponde a: "+eg+"<br>- FUR operacional: "+ fur +"<br>- Fecha probable de parto: " + fpp + "<br>";
        comentario += "<br>-Se sugiere agendar próxima ecografía para evaluación 11 - 14 semanas";

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

    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();
    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);

    return InformeString;
}

function infPrecozClon(){
    let sacovitelinotxt = (the("saco-vitelino").value == "no se observa") ? "." : " de diametro " + the("saco-vitelino-mm").value + " mm.";
    let sacogestacionaltxt = the("saco").value;
    sacogestacionaltxt = (sacogestacionaltxt > 0) ? " diametro promedio " + sacogestacionaltxt + " mm." : ".";

    //si solo tiena saco
    var InformeString = "";

    if (the("lcn").value < 1 && the("saco").value > 1){
        InformeString = '<div class="container-fluid" style="margin-top: 5rem;"> <h4 class="page-header text-center" style="border-bottom: 1px solid #000; margin-botton: 15px; text-align: center;">Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h4></div><div class="container-fluid"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr><tr> <td class="p-0" style="margin-top: 0.5rem;"><strong>FUM: </strong>:FUR</td><td class="p-0"></td><td class="p-0"></td></tr><tr> <td class="p-0"><strong>Ege: </strong>:EG semanas</td><td class="p-0"></td><td class="p-0"></td></tr><tr> <td class="p-0"><strong>FPP: </strong>:FPP</td><td class="p-0"></td><td class="p-0"></td></tr></tbody> </table></div><div class="container-fluid"> <p><strong style="color: #045dab;">DESCRIPCIÓN</strong></p><p> Cuerpo Uterino :LINEA1 <br/> Saco Gestacional :LINEA2 <br/> Saco Vitelino :LINEA3 <br/> Embrión :LINEA4 <br/> Exploración anexial derecha :LINEA5 <br/> Exploración anexial izquierda :LINEA6 <br/> Exploración de Douglas :LINEA7 </p><p></p><p></p><p><strong style="color: #045dab;">:TITULOBIOMETRIAS</strong></p><p>:LINEA12</p><p></p><p></p></div><div class="container-fluid"> <p><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong><span style="color: #045dab;"> (Adicionar comentarios del examinador)</span></p><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><div class="container-fluid" style="margin-top: 5rem;"> <p class="text-right top40" style="text-align:right;margin-top:1rem">Ecografista: <strong>:ECOGRAFISTA</strong></p><p style="margin-top:1rem;border-top: 1px solid #000;padding:3px">Fecha Informe: :DATEINFORME</p><p style="margin-top: 10px;"> Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br/> Referencia Edad menstrual por LCC Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br/> Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br/> <strong> El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </p></div>';
    }else if (the("lcn").value < 1 && the("saco").value < 1 && sacogestacionaltxt == "."){
        InformeString = '<div class="container-fluid" style="margin-top: 5rem;"> <h4 class="page-header text-center" style="border-bottom: 1px solid #000; margin-botton: 15px; text-align: center;">Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h4></div><div class="container-fluid"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr><tr> <td class="p-0" style="margin-top: 0.5rem;"><strong>FUM: </strong>:FUR</td><td class="p-0"></td><td class="p-0"></td></tr><tr> <td class="p-0"><strong>Ege: </strong>:EG semanas</td><td class="p-0"></td><td class="p-0"></td></tr><tr> <td class="p-0"><strong>FPP: </strong>:FPP</td><td class="p-0"></td><td class="p-0"></td></tr></tbody> </table></div><div class="container-fluid"> <p><strong style="color: #045dab;">DESCRIPCIÓN</strong></p><p> Cuerpo Uterino :LINEA1 <br/> Exploración anexial derecha :LINEA5 <br/> Exploración anexial izquierda :LINEA6 <br/> Exploración de Douglas :LINEA7 </p><p></p><p></p><p><strong style="color: #045dab;">:TITULOBIOMETRIAS</strong></p><p>:LINEA12</p><p></p><p></p><p><strong style="color: #045dab;">HIPÓTESIS DIAGNÓSTICA</strong></p><p> :LINEA8 :LINEA9 <br/> :LINEA10 <br/> :LINEA11 </p></div><div class="container-fluid"> <p><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong></p><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><div class="container-fluid" style="margin-top: 5rem;"> <p class="text-right top40" style="text-align:right;margin-top:1rem">Ecografista: <strong>:ECOGRAFISTA</strong></p><p style="margin-top:1rem;border-top: 1px solid #000;padding:3px">Fecha Informe: :DATEINFORME</p><p> Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br/> Referencia Edad menstrual por LCC Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br/> Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br/> <strong> El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </p></div>';
    }else{
        InformeString = '<div class="container-fluid" style="margin-top: 5rem;"> <h4 class="page-header text-center" style="border-bottom: 1px solid #000; margin-botton: 15px; text-align: center;">Evaluación ecográfica obstétrica precoz (edades menores a 11 semanas)</h4></div><div class="container-fluid"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr><tr> <td class="p-0" style="margin-top: 0.5rem;"><strong>FUM: </strong>:FUR</td><td class="p-0"></td><td class="p-0"></td></tr><tr> <td class="p-0"><strong>Ege: </strong>:EG semanas</td><td class="p-0"></td><td class="p-0"></td></tr><tr> <td class="p-0"><strong>FPP: </strong>:FPP</td><td class="p-0"></td><td class="p-0"></td></tr></tbody> </table></div><div class="container-fluid"> <p><strong style="color: #045dab;">DESCRIPCIÓN</strong></p><p> Cuerpo Uterino :LINEA1 <br/> Saco Gestacional :LINEA2 <br/> Saco Vitelino :LINEA3 <br/> Embrión :LINEA4 <br/> Exploración anexial derecha :LINEA5 <br/> Exploración anexial izquierda :LINEA6 <br/> Exploración de Douglas :LINEA7 </p><p></p><p></p><p><strong style="color: #045dab;">:TITULOBIOMETRIAS</strong></p><p>:LINEA12</p><p></p><p></p><p><strong style="color: #045dab;">HIPÓTESIS DIAGNÓSTICA</strong></p><p> :LINEA8 :LINEA9 <br/> :LINEA10 <br/> :LINEA11 </p></div><div class="container-fluid"> <p><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong></p><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><div class="container-fluid" style="margin-top: 5rem;"> <p class="text-right top40" style="text-align:right;margin-top:1rem">Ecografista: <strong>:ECOGRAFISTA</strong></p><p style="margin-top:1rem;border-top: 1px solid #000;padding:3px">Fecha Informe: :DATEINFORME</p><p> Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br/> Referencia Edad menstrual por LCC Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br/> Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br/> <strong> El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </p></div>';
    }

    let fcftexto = the("embrion").value;
    let optiones = ["no se observa aun","act. no evidenciable","act. card. y Corp. (-)"];

    if (optiones.includes(fcftexto)){
        fcftexto = ".";
    }
    else{
        fcftexto = (the("fcf-prim").value == '(+) inicial') ? " frecuencia cardiaca fetal " + the("fcf-prim").value : " frecuencia cardiaca fetal de " + the("fcf-prim").value +" x min.";
    }

    let douglasinforme = (the("exploracion-douglas").value == 'ocupado') ? the("comentarios-douglas-informe").value : ".";

    var LINEA1 = the("utero-ubic1").value + " " + the("utero-ubic2").value+ ", " + the("cuerpo-uterino").value + ".";
    var LINEA2 = the("saco-gestacional").value + sacogestacionaltxt;
    var LINEA3 = the("saco-vitelino").value + sacovitelinotxt;
    var LINEA4 = the("embrion").value + fcftexto;
    var LINEA5 = the("anexo-derecho").value;
    var LINEA6 = the("anexo-izquierdo").value;
    var LINEA7 = the("exploracion-douglas").value + ", " + douglasinforme;
    var LINEA12 = '';
    var LINEA8 = '';

    if (the("lcn").value > 0){
        var LINEA9 = "Utero " + the("utero-ubic1").value + " " + the("utero-ubic2").value + ", " + the("cuerpo-uterino").value + ".";
        var LINEA10 = "Exploración anexial derecha " + the("anexo-derecho").value;
        var LINEA11 = "Exploración anexial izquierda " + the("anexo-izquierdo").value;
    } 
    else if (the("lcn").value == "" && the("embrion").value == "no procede"){
        var LINEA9 = "Utero " + the("utero-ubic1").value + " " + the("utero-ubic2").value + ", " + the("cuerpo-uterino").value + ".";
        var LINEA10 = "Exploración anexial " + the("anexo-derecho").value;
        var LINEA11 = "";
        LINEA12 = "no procede";
    }else{
        var LINEA9 = "Gestación Inicial<br>Utero " + the("utero-ubic1").value + " " + the("utero-ubic2").value + ", " + the("cuerpo-uterino").value + ".";
        var LINEA10 = "Exploración anexial " + the("anexo-derecho").value;
        var LINEA11 = "";
        LINEA12 = "Embrion no se observa";
    }

    if (sacogestacionaltxt > 0){
        LINEA12 = "Saco gestacional diámetro promedio de " + sacogestacionaltxt +" mm.<br>";
        LINEA8 = "Edad gestacional estimada " + the("sacoPct").value + " por saco gestacional.<br>";
    }

    if (the("lcn").value > 0) {
        LINEA12 = "Largo embrionario máximo de " + the("lcn").value + " mm.";
        LINEA8 = "Edad gestacional estimada " + the("lcnPct").value + " semanas por LCC.<br>";
    }

    var TITULOBIOMETRIAS = 'BIOMETRÍAS EMBRIO/FETAL';

    if (the("lcn").value < 1) {
        if (sacogestacionaltxt < 1){
            LINEA12 = '';
            LINEA8 = '';
            TITULOBIOMETRIAS = '';
        }
    }

    var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista option:selected').text();

    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();

    InformeString = InformeString.replace(":PACIENTE", paciente);
    InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
    InformeString = InformeString.replace(":MOTIVO", motivo);
    InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);

    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + ' de '+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + ' de '+ monthsES[fpp.getUTCMonth()+1] + ' ' + fpp.getFullYear();
    let eg = the("semanas").value + '.'+ the("dias").value;
    InformeString = InformeString.replace(":FUR", fur);
    InformeString = InformeString.replace(":EG", eg);
    InformeString = InformeString.replace(":FPP", fpp);

    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();

    var comentario = the("comentarios-eco-uno").value;
    comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : comentario='';

    if (the("saco").value && the("embrion").value == "no se observa aun"){
        comentario += "<br>Calculo inicial de edad según saco gestacional: "+the("sacoPct").value+" semanas<br>Se sugiere agendar próxima ecografía para determinar edad gestacional por LCC<br>";
    }
    else if (the("embrion").value != "act. card. y Corp. (-)"){
        let fur = new Date(Date.parse(the("fum").value));
        fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
        let fpp = new Date(Date.parse(the("fpp").value));
        fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();
        let eg = the("semanas").value + "."+ the("dias").value + " semanas.";
        comentario += "<br>Para edad gestacional calculada, corresponde a: "+eg+"<br>- FUR operacional: "+ fur +"<br>- Fecha probable de parto: " + fpp + "<br>";
        comentario += "<br><br>Se sugiere agendar próxima ecografía para evaluación 11 - 14 semanas";
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

    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();
    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);

    return InformeString;
}

function InfEcoObsSegTrim1(){
    var actCard;
    var movCorp;

    elem = document.getElementsByName('accard');
    for(i = 0;i < elem.length;i++)
        if (elem[i].checked) {
            actCard = elem[i].value;
        }

    elem=document.getElementsByName('movfet');
    for(i=0;i<elem.length;i++)
        if (elem[i].checked) {
            movCorp = elem[i].value;
        }

    actCard = (actCard == 0) ? 'sin actividad cardiaca': 'con actividad cardiaca';
    movCorp = (movCorp == 0) ? 'sin movimientos corporales': 'con movimientos corporales';

    var linea1 = 'Feto en presentación ' + the("presentacion").value + ', dorso ' + the("dorso").value + ', ' + actCard + ' y ' + movCorp + '.';
    var linea2 = 'Frecuencia cardiaca fetal de ' + the("fcf").value + ' x minuto.';
    var anatomiaFetal = $('#ev-morfo').val();

    var linea3 = '<strong>Anatomía fetal ***</strong>  ' + anatomiaFetal + $('#comentarios-anatomia-informe-eg-texto').val();

    if (anatomiaFetal == "no evaluada dirigidamente, pero el aspecto morfológico general es normal"){
        linea3 += "<br>atrio posterior " + the("atrio.ecoDosTres").value + " mm ( " + the("atrio.desc.ecoDosTres").value + " ), diámetro cerebeloso transverso "+ the("cerebelo").value +" mm, cisterna magna "+ the("cm.ecoDosTres").value + " mm, sexo fetal " + $("#ecografia\\.segtrim\\.sexo").val() + ".";
    }else{
        linea3 += " <br>";
    }

    var linea4 = '<strong>Placenta</strong> de ubicación ' + the("ubicacion").value + ', ' + the("incersion").value + '. Cordón umbilical ' + the("cordon").value + ', identificandose '+ the("vasos").value +' vasos.';
    var linea6 = '<strong>Líquido amniótico **</strong>' + $('#liq-cualitativo-eco').val() + ', con bolsillo vertical mayor de ' + the("bvm").value + ' mm.';

    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + ' de '+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    
    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + ' de '+ monthsES[fexamen.getUTCMonth()] + ' ' + fexamen.getFullYear();

    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + ' de '+ monthsES[fpp.getUTCMonth()+1] + ' ' + fpp.getFullYear();
    let eg = the("semanas").value + '.'+ the("dias").value;

    var dbp = the("dbp").value + ' mm';
    var dbpPct = the("dbpPct").value;

    let tmpData = "";

    if (dbpPct == "&gt; 99" || dbpPct == "&lt; 1"){
        tmpData = 0;
    }else{
        tmpData = dbpPct;
    }
    var dbpRango = oldProgress(tmpData);

    var lh = $( '#lh').val() + ' mm';
    var lhPct = the("lhPctRpt").value;

    if (lhPct == "&gt; 95" || lhPct == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = lhPct;
    }
    var lhRango = oldProgress(tmpData);

    var cc = the("cc").value + ' mm';
    var ccPct = $('#ccPctRpt').val();
    if (ccPct == "&gt; 97" || ccPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = ccPct;
    }

    var ccRango = oldProgress(tmpData);

    var ca = the("ca").value + ' mm';
    var caPct = the("caPctRpt").value;
    if (caPct == "&gt; 97" || caPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = caPct;
    }
    var caRango = oldProgress(tmpData);

    var lf = $( '#lf').val() + ' mm';
    var lfPct = the("lfPctRpt").value;
    if (lfPct == "&gt; 97" || lfPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = lfPct;
    }
    var lfRango = oldProgress(tmpData);

    var ccca = the("ccca").value;
    var cccaPctVal = the("cccaPctVal").value;
    if (cccaPctVal == "&gt; 97" || cccaPctVal == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = cccaPctVal;
    }
    var cccaRango = oldProgress(tmpData);

    var pfe = $( '#pfe').val() + ' gr.';
    var percentilPeso = the("pfePctRpt").value;
    percentilPeso = percentilPeso.replace('&lt;','<').replace('&gt;', '>');
    var pfePct = percentilPeso;

    if (percentilPeso == "> 90" || percentilPeso == "< 10"){
        tmpData = 0;
    }else{
        tmpData = percentilPeso;
    }
    var pfeRango = oldProgress(tmpData);

    var ic = the("dof-dbp").value;
    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();

    var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista option:selected').text();

    var comentario = the("comentarios-eco-dos-inf-dos").value;
    comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : comentario='';

    var edadmaterna = $( "select[name='edad_materna']").val();

    var InformeString = '<div class="container"><h3>Evaluación ecográfica del crecimiento fetal</h3></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table><p> <strong>FUM: </strong>:FUR <br/> <strong>Ege: </strong>:EG semanas <br/> <strong>FPP: </strong>:FPP <br/> <strong>Cesárea previa: </strong>:CESAPREV </p></div><div class="container"><p style="margin-bottom: 0;"><strong style="color: #045dab;">DESCRIPCIÓN</strong><br> :LINEA1 <br/> :LINEA2 </p><p style="margin-bottom: 0; word-wrap: break-word;">:LINEA3</p><p> :LINEA4 <br/> :LINEA6 </p><p></p><p></p></div><div class="container"> <table class="table"> <tbody> <tr> <th style="color: #045dab;">BIOMETRÍA FETAL</th> <th style="text-align: center;">Valor observado</th> <th class="text-center">Pct de Crecimiento</th> <th class="text-center">Rango percentilar</th> </tr><tr> <td>DBP (Hadlock):</td><td style="text-align: center;">:DBP</td><td class="text-center">:DBPPCT</td><td class="text-center">:DBPRANGO</td></tr><tr> <td>CC (Hadlock):</td><td style="text-align: center;">:CC</td><td class="text-center">:CCPCT</td><td class="text-center">:CCRANGO</td></tr><tr> <td>CA (Hadlock):</td><td style="text-align: center;">:CA</td><td class="text-center">:CAPCT</td><td class="text-center">:CARANGO</td></tr><tr> <td style="padding-bottom: 15px !important;">LF (Hadlock):</td><td style="text-align: center; padding-bottom: 15px !important;">:LF</td><td style="text-align: center; padding-bottom: 15px !important;">:LFPCT</td><td style="text-align: center; padding-bottom: 15px !important;">:LFRANGO</td></tr><tr> <td>LH (Jeanty):</td><td style="text-align: center;">:LH</td><td class="text-center">:LHPCT</td><td class="text-center">:LHRANGO</td></tr><tr> <td style="border-top: 1px dashed #045dab;"><strong>Peso Fetal Estimado</strong> según fórmula de Hadlock (CC-CA-LF)</td><td style="text-align: center; border-top: 1px dashed #045dab;">:PFE</td><td style="text-align: center; border-top: 1px dashed #045dab;">:PFEPCT</td><td style="text-align: center; border-top: 1px dashed #045dab;">:PFERANGO</td></tr><tr> <td style="border-top: 1px dashed #045dab;">Relación CC / CA (Hadlock)</td><td class="text-center" style="border-top: 1px dashed #045dab;">:CCCA</td><td class="text-center" style="border-top: 1px dashed #045dab;">:CCCAPCTVAL</td><td class="text-center" style="border-top: 1px dashed #045dab;">:CCCARANGO</td></tr><tr> <td>Indice Cefálico (DBP / DOF)</td><td style="text-align: center;">:IC</td><td></td><td class="text-center">( 70% - 86% )</td></tr>';
    var CESAPREV = $('#grado-placenta').val();
    InformeString = InformeString.replace(":CESAPREV", CESAPREV);

    var contadorOpcional = 0;
    if (the("art.ut").checked == true){
        InformeString += '<tr> <td><strong>IP Promedio Arterias Uterinas</strong></td><td style="text-align:center;">:ARTUT</td><td class="text-center" style="border-top:1px dashed #045dab;">:ARTUTPCTVAL</td><td class="text-center" style="border-top:1px dashed #045dab;">:ARTUTRANGO</td></tr>';
    
        InformeString = InformeString.replace(":ARTUT", $("#respuesta_uterina_promedio").val());
        InformeString = InformeString.replace(":ARTUTPCTVAL", $("#respuesta_uterina_promedio_percentil").html());

        pctUT = $("#respuesta_uterina_promedio_percentil").html();

        if (pctUT == "&gt; 95" || pctUT == "&lt; 5"){
            tmpData = 0;
        }else{
            tmpData = +pctUT;
        }
        var ARTUTRANGO = oldProgress(tmpData);

        InformeString = InformeString.replace(":ARTUTRANGO", ARTUTRANGO);
        contadorOpcional++;
    }

    if (the("larg.cerv").checked == true){
        InformeString += '<tr> <td><strong>Largo Cervical</strong></td><td style="text-align:center;">:LARGCERV mm</td><td class="text-center" style="border-top:1px dashed #045dab;">:LARGCERVTXT</td><td class="text-center" style="border-top:1px dashed #045dab;"></td></tr>';
    
        InformeString = InformeString.replace(":LARGCERV", $("#largo\\.cervical\\.segundo").val());
        InformeString = InformeString.replace(":LARGCERVTXT", the("info.cervix").children[0].innerHTML);
        contadorOpcional++;
    }

    if (contadorOpcional == 1){
        InformeString += '<tr> <td></td><td></td><td></td><td></td>';
    }

    InformeString += '</tbody> </table></div><div class="container"> <p style="margin-bottom;0px;padding-bottom:0px;margin-bottom:0px;"><strong style="color:#045dab;">COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small> </p><p style="max-width: 700px;text-align: justify;margin-top:0px;padding-top:0px;">:COMENTARIO</p></div><div class="container"> <p class="text-right" style="margin-right:100px;margin-top:5rem;">Ecografista: <strong>:ECOGRAFISTA</strong> </p><span style="border-top: 1px solid #000;width: 100% !important;display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000;width: 100% !important;display: block;"></span> <p style="margin-bottom:0;" class="pie-pagina">* Evaluación de crecimiento fetal (Gráfica), según referencia propuesta por Hadlock y col. Radiology 181: 129 - 133; 1991 (Normalidad Pct 10 a 90) <br>** Referencia para medición de líquido amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000</p><p style="margin-bottom:0 !important;"><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong> </p></div>';

    InformeString = InformeString.replace(":PACIENTE", paciente);
    InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
    InformeString = InformeString.replace(":MOTIVO", motivo);
    InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
    InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);

    InformeString = InformeString.replace(":FUR", fur);
    InformeString = InformeString.replace(":FEXAMEN", fexamen);
    InformeString = InformeString.replace(":EG", eg);
    InformeString = InformeString.replace(":FPP", fpp);
    InformeString = InformeString.replace(":DBP", dbp);
    InformeString = InformeString.replace(":DBPPCT", dbpPct);
    InformeString = InformeString.replace(":DBPRANGO", dbpRango);
    InformeString = InformeString.replace(":LH", lh);
    InformeString = InformeString.replace(":LHPCT", lhPct);
    InformeString = InformeString.replace(":LHRANGO", lhRango);
    InformeString = InformeString.replace(":CC", cc);
    InformeString = InformeString.replace(":CCPCT", ccPct);
    InformeString = InformeString.replace(":CCRANGO", ccRango);
    InformeString = InformeString.replace(":CA", ca);
    InformeString = InformeString.replace(":CAPCT", caPct);
    InformeString = InformeString.replace(":CARANGO", caRango);
    InformeString = InformeString.replace(":CCCA", ccca);
    InformeString = InformeString.replace(":CCCAPCTVAL", cccaPctVal);
    InformeString = InformeString.replace(":CCCARANGO", cccaRango);
    InformeString = InformeString.replace(":LF", lf);
    InformeString = InformeString.replace(":LFPCT", lfPct);
    InformeString = InformeString.replace(":LFRANGO", lfRango);
    InformeString = InformeString.replace(":PFE", pfe);
    InformeString = InformeString.replace(":PFEPCT", pfePct);
    InformeString = InformeString.replace(":PFERANGO", pfeRango);
    InformeString = InformeString.replace(":IC", ic);

    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ', ' + dayHoy.getUTCDate() + ' de '+ monthsES[dayHoy.getUTCMonth()] + ' ' + dayHoy.getFullYear();
    
    InformeString = InformeString.replace(":DATEINFORME", dateInf);
    
    InformeString = InformeString.replace(":LINEA1", linea1);
    InformeString = InformeString.replace(":LINEA2", linea2);
    InformeString = InformeString.replace(":LINEA3", linea3);
    InformeString = InformeString.replace(":LINEA4", linea4);
    InformeString = InformeString.replace(":LINEA6", linea6);
    InformeString = InformeString.replace(":COMENTARIO", comentario);
    InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);

    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();
    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);

    return InformeString;
}

function InfEcoObsSegTrim1Clon(){
    var actCard;
    var movCorp;

    elem = document.getElementsByName('accard');
    for(i = 0;i < elem.length;i++)
        if (elem[i].checked) {
            actCard = elem[i].value;
        }

    elem=document.getElementsByName('movfet');
    for(i=0;i<elem.length;i++)
        if (elem[i].checked) {
            movCorp = elem[i].value;
        }

    actCard = (actCard == 0) ? 'sin actividad cardiaca': 'con actividad cardiaca';
    movCorp = (movCorp == 0) ? 'sin movimientos corporales': 'con movimientos corporales';

    var linea1 = 'Feto en presentación ' + the("presentacion").value + ', dorso ' + the("dorso").value + ', ' + actCard + ' y ' + movCorp + '.';
    var linea2 = 'Frecuencia cardiaca fetal de ' + the("fcf").value + ' x minuto.';
    var anatomiaFetal = $('#ev-morfo').val();

    var linea3 = '<strong>Anatomía fetal ***</strong>  ' + anatomiaFetal + $('#comentarios-anatomia-informe-eg-texto').val();

    if (anatomiaFetal == "no evaluada dirigidamente, pero el aspecto morfológico general es normal"){
        linea3 += "<br>atrio posterior " + the("atrio.ecoDosTres").value + " mm ( " + the("atrio.desc.ecoDosTres").value + " ), diámetro cerebeloso transverso "+ the("cerebelo").value +" mm, cisterna magna "+ the("cm.ecoDosTres").value + " mm, sexo fetal " + $("#ecografia\\.segtrim\\.sexo").val() + ".";
    }else{
        linea3 += " <br>";
    }

    var linea4 = '<strong>Placenta</strong> de ubicación ' + the("ubicacion").value + ', ' + the("incersion").value + '. Cordón umbilical ' + the("cordon").value + ', identificandose '+ the("vasos").value +' vasos.';
    var linea6 = '<strong>Líquido amniótico **</strong>' + $('#liq-cualitativo-eco').val() + ', con bolsillo vertical mayor de ' + the("bvm").value + ' mm.';

    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + ' de '+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    
    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + ' de '+ monthsES[fexamen.getUTCMonth()] + ' ' + fexamen.getFullYear();

    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + ' de '+ monthsES[fpp.getUTCMonth()+1] + ' ' + fpp.getFullYear();
    let eg = the("semanas").value + '.'+ the("dias").value;

    var dbp = the("dbp").value + ' mm';
    var dbpPct = the("dbpPct").value;

    let tmpData = "";

    if (dbpPct == "&gt; 99" || dbpPct == "&lt; 1"){
        tmpData = 0;
    }else{
        tmpData = dbpPct;
    }
    var dbpRango = oldProgress(tmpData);

    var lh = $( '#lh').val() + ' mm';
    var lhPct = the("lhPctRpt").value;

    if (lhPct == "&gt; 95" || lhPct == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = lhPct;
    }
    var lhRango = oldProgress(tmpData);

    var cc = the("cc").value + ' mm';
    var ccPct = $('#ccPctRpt').val();
    if (ccPct == "&gt; 97" || ccPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = ccPct;
    }

    var ccRango = oldProgress(tmpData);

    var ca = the("ca").value + ' mm';
    var caPct = the("caPctRpt").value;
    if (caPct == "&gt; 97" || caPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = caPct;
    }
    var caRango = oldProgress(tmpData);

    var lf = $( '#lf').val() + ' mm';
    var lfPct = the("lfPctRpt").value;
    if (lfPct == "&gt; 97" || lfPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = lfPct;
    }
    var lfRango = oldProgress(tmpData);

    var ccca = the("ccca").value;
    var cccaPctVal = the("cccaPctVal").value;
    if (cccaPctVal == "&gt; 97" || cccaPctVal == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = cccaPctVal;
    }
    var cccaRango = oldProgress(tmpData);

    var pfe = $( '#pfe').val() + ' gr.';
    var percentilPeso = the("pfePctRpt").value;
    percentilPeso = percentilPeso.replace('&lt;','<').replace('&gt;', '>');
    var pfePct = percentilPeso;

    if (percentilPeso == "> 90" || percentilPeso == "< 10"){
        tmpData = 0;
    }else{
        tmpData = percentilPeso;
    }
    var pfeRango = oldProgress(tmpData);

    var ic = the("dof-dbp").value;
    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();

    var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista option:selected').text();

    var comentario = the("comentarios-eco-dos-inf-dos").value;
    comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : comentario='';

    var edadmaterna = $( "select[name='edad_materna']").val();

    var InformeString = '<div class="container"><h3>Evaluación ecográfica del crecimiento fetal</h3></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table><p> <strong>FUM: </strong>:FUR <br/> <strong>Ege: </strong>:EG semanas <br/> <strong>FPP: </strong>:FPP <br/> <strong>Cesárea previa: </strong>:CESAPREV </p></div><div class="container"><p style="margin-bottom: 0;"><strong style="color: #045dab;">DESCRIPCIÓN</strong><br> :LINEA1 <br/> :LINEA2 </p><p style="margin-bottom: 0; word-wrap: break-word;">:LINEA3</p><p> :LINEA4 <br/> :LINEA6 </p><p></p><p></p></div><div class="container"> <table class="table"> <tbody> <tr> <th style="color: #045dab;">BIOMETRÍA FETAL</th> <th style="text-align: center;">Valor observado</th> <th class="text-center">Pct de Crecimiento</th> <th class="text-center">Rango percentilar</th> </tr><tr> <td>DBP (Hadlock):</td><td style="text-align: center;">:DBP</td><td style="text-align:center;">:DBPPCT</td><td style="text-align:center;">:DBPRANGO</td></tr><tr> <td>CC (Hadlock):</td><td style="text-align: center;">:CC</td><td style="text-align:center;">:CCPCT</td><td style="text-align:center;">:CCRANGO</td></tr><tr> <td>CA (Hadlock):</td><td style="text-align: center;">:CA</td><td style="text-align:center;">:CAPCT</td><td style="text-align:center;">:CARANGO</td></tr><tr> <td style="padding-bottom: 15px !important;">LF (Hadlock):</td><td style="text-align: center; padding-bottom: 15px !important;">:LF</td><td style="text-align: center; padding-bottom: 15px !important;">:LFPCT</td><td style="text-align: center; padding-bottom: 15px !important;">:LFRANGO</td></tr><tr> <td>LH (Jeanty):</td><td style="text-align: center;">:LH</td><td style="text-align:center;">:LHPCT</td><td style="text-align:center;">:LHRANGO</td></tr><tr> <td><strong>Peso Fetal Estimado</strong> según fórmula de Hadlock (CC-CA-LF)</td><td style="text-align: center;">:PFE</td><td style="text-align: center;">:PFEPCT</td><td style="text-align: center;">:PFERANGO</td></tr><tr> <td>Relación CC / CA (Hadlock)</td><td style="text-align:center;">:CCCA</td><td style="text-align:center;">:CCCAPCTVAL</td><td style="text-align:center;">:CCCARANGO</td></tr><tr> <td>Indice Cefálico (DBP / DOF)</td><td style="text-align: center;">:IC</td><td></td><td style="text-align:center;">( 70% - 86% )</td></tr>';
    var CESAPREV = $('#grado-placenta').val();
    InformeString = InformeString.replace(":CESAPREV", CESAPREV);

    var contadorOpcional = 0;
    if (the("art.ut").checked == true){
        InformeString += '<tr> <td><strong>IP Promedio Arterias Uterinas</strong></td><td style="text-align:center;">:ARTUT</td><td style="text-align:center;">:ARTUTPCTVAL</td><td style="text-align:center;">:ARTUTRANGO</td></tr>';
    
        InformeString = InformeString.replace(":ARTUT", $("#respuesta_uterina_promedio").val());
        InformeString = InformeString.replace(":ARTUTPCTVAL", $("#respuesta_uterina_promedio_percentil").html());

        pctUT = $("#respuesta_uterina_promedio_percentil").html();

        if (pctUT == "&gt; 95" || pctUT == "&lt; 5"){
            tmpData = 0;
        }else{
            tmpData = +pctUT;
        }
        var ARTUTRANGO = oldProgress(tmpData);

        InformeString = InformeString.replace(":ARTUTRANGO", ARTUTRANGO);
        contadorOpcional++;
    }

    if (the("larg.cerv").checked == true){
        InformeString += '<tr> <td><strong>Largo Cervical</strong></td><td style="text-align:center;">:LARGCERV mm</td><td style="text-align:center;">:LARGCERVTXT</td><td></td></tr>';
        InformeString = InformeString.replace(":LARGCERV", $("#largo\\.cervical\\.segundo").val());
        InformeString = InformeString.replace(":LARGCERVTXT", the("info.cervix").children[0].innerHTML);
        contadorOpcional++;
    }

    if (contadorOpcional == 1){
        InformeString += '<tr> <td></td><td></td><td></td><td></td>';
    }

    InformeString += '</tbody> </table></div><div class="container"> <p style="margin-bottom;0px;padding-bottom:0px;margin-bottom:0px;"><strong style="color:#045dab;">COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small> </p><p style="max-width: 700px;text-align: justify;margin-top:0px;padding-top:0px;">:COMENTARIO</p></div><div class="container"> <p style="text-align:right;margin-top:1rem">Ecografista: <strong>:ECOGRAFISTA</strong> </p><span style="border-top: 1px solid #000;width: 100% !important;display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000;width: 100% !important;display: block;"></span> <p style="margin-bottom:0;" class="pie-pagina">* Evaluación de crecimiento fetal (Gráfica), según referencia propuesta por Hadlock y col. Radiology 181: 129 - 133; 1991 (Normalidad Pct 10 a 90) <br>** Referencia para medición de líquido amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000</p><p style="margin-bottom:0 !important;"><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong> </p></div>';

    InformeString = InformeString.replace(":PACIENTE", paciente);
    InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
    InformeString = InformeString.replace(":MOTIVO", motivo);
    InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
    InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);

    InformeString = InformeString.replace(":FUR", fur);
    InformeString = InformeString.replace(":FEXAMEN", fexamen);
    InformeString = InformeString.replace(":EG", eg);
    InformeString = InformeString.replace(":FPP", fpp);
    InformeString = InformeString.replace(":DBP", dbp);
    InformeString = InformeString.replace(":DBPPCT", dbpPct);
    InformeString = InformeString.replace(":DBPRANGO", dbpRango);
    InformeString = InformeString.replace(":LH", lh);
    InformeString = InformeString.replace(":LHPCT", lhPct);
    InformeString = InformeString.replace(":LHRANGO", lhRango);
    InformeString = InformeString.replace(":CC", cc);
    InformeString = InformeString.replace(":CCPCT", ccPct);
    InformeString = InformeString.replace(":CCRANGO", ccRango);
    InformeString = InformeString.replace(":CA", ca);
    InformeString = InformeString.replace(":CAPCT", caPct);
    InformeString = InformeString.replace(":CARANGO", caRango);
    InformeString = InformeString.replace(":CCCA", ccca);
    InformeString = InformeString.replace(":CCCAPCTVAL", cccaPctVal);
    InformeString = InformeString.replace(":CCCARANGO", cccaRango);
    InformeString = InformeString.replace(":LF", lf);
    InformeString = InformeString.replace(":LFPCT", lfPct);
    InformeString = InformeString.replace(":LFRANGO", lfRango);
    InformeString = InformeString.replace(":PFE", pfe);
    InformeString = InformeString.replace(":PFEPCT", pfePct);
    InformeString = InformeString.replace(":PFERANGO", pfeRango);
    InformeString = InformeString.replace(":IC", ic);

    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ', ' + dayHoy.getUTCDate() + ' de '+ monthsES[dayHoy.getUTCMonth()] + ' ' + dayHoy.getFullYear();

    InformeString = InformeString.replace(":DATEINFORME", dateInf);

    InformeString = InformeString.replace(":LINEA1", linea1);
    InformeString = InformeString.replace(":LINEA2", linea2);
    InformeString = InformeString.replace(":LINEA3", linea3);
    InformeString = InformeString.replace(":LINEA4", linea4);
    InformeString = InformeString.replace(":LINEA6", linea6);
    InformeString = InformeString.replace(":COMENTARIO", comentario);
    InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);

    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();
    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);

    return InformeString;
}

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

function resetDate(){
    dayHoy = new Date();
    day = ("0" + dayHoy.getUTCDate()).slice(-2);
    month = ("0" + (dayHoy.getUTCMonth() + 1)).slice(-2);

    the("semanas").value = 0;
    the("dias").value = 0;
    the("fum").value = getDate();
    the("fee").value = getDate();

    $("#fum").trigger("change");
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
        modal:'<div class="modal fade" tabindex="-1" role="dialog" id="'+id+'"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="'+titulo+'">Modal title</h5></div><div class="modal-body" id="'+contenido+'"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>'+ button_string+'</div></div></div></div>'
    }
        
    return resultado;
}

function imprInforme(datos){
	var document = '<!DOCTYPE html><html lang="es-CL"> <head> <meta charset="utf-8"/> <title>Impresión de Gráficos</title> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/> <link rel="stylesheet" href="consulta.css"/> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> :ESTILO </head> <body> <div class="container"><div style="width: 45%; text-align: center;" class="membrete">:MEMBRETE</div></div><div class="container" style="margin-top: 50px !important;">:DATOS</div>:FUNCION </body></html>';
	var ventimp = window.open(" ","popimpr");
	var estilo = '<style>@media print{.newpage{ page-break-before: always; margin-bottom:5rem; }.pie-pagina{font-size:0.9rem;}.pie-pagina-dos{font-size:1rem;}*, ::after, ::before{box-sizing: border-box;}body{margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529; background-color: #fff; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent;}[tabindex="-1"]:focus:not(:focus-visible){outline: 0 !important;}hr{margin: 1rem 0; color: inherit; background-color: currentColor; border: 0; opacity: 0.25;}hr:not([size]){height: 1px;}h1, h2, h3, h4, h5, h6{margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2;}h1{font-size: calc(1.375rem + 1.5vw);}h2{font-size: calc(1.325rem + 0.9vw);}h3{font-size: calc(1.3rem + 0.6vw);}h4{font-size: calc(1.275rem + 0.3vw);}h5{font-size: 1.25rem;}h6{font-size: 1rem;}p{margin-top: 0; margin-bottom: 1rem;}ol, ul{padding-left: 2rem;}dl, ol, ul{margin-top: 0; margin-bottom: 1rem;}ol ol, ol ul, ul ol, ul ul{margin-bottom: 0;}b, strong{font-weight: bolder;}small{font-size: 0.875em;}mark{padding: 0.2em; background-color: #fcf8e3;}sub, sup{position: relative; font-size: 0.75em; line-height: 0; vertical-align: baseline;}sub{bottom: -0.25em;}sup{top: -0.5em;}a{color: #0d6efd; text-decoration: underline;}a:hover{color: #024dbc;}a:not([href]):not([class]), a:not([href]):not([class]):hover{color: inherit; text-decoration: none;}code, kbd, pre, samp{font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 1em;}pre{display: block; margin-top: 0; margin-bottom: 1rem; overflow: auto; font-size: 0.875em; -ms-overflow-style: scrollbar;}pre code{font-size: inherit; color: inherit; word-break: normal;}code{font-size: 0.875em; color: #d63384; word-wrap: break-word;}a > code{color: inherit;}.membrete{margin-top:2rem;}.membrete::first-letter{font-size: 1.3rem;}.membrete::first-line{font-size: 1.3rem;}table{caption-side: bottom; border-collapse: collapse;}caption{padding-top: 0.5rem; padding-bottom: 0.5rem; color: #6c757d; text-align: left;}th{text-align: inherit; text-align: -webkit-match-parent;}tbody, td, tfoot, th, thead, tr{border-color: inherit; border-style: solid; border-width: 0;}label{display: inline-block;}[hidden]{display: none !important;}.pie-pagina-dos{font-size: 10px;}#lineclear{clear: both;}.table{--bs-table-bg: transparent; --bs-table-accent-bg: transparent; --bs-table-striped-color: #212529; --bs-table-striped-bg: rgba(0, 0, 0, 0.05); --bs-table-active-color: #212529; --bs-table-active-bg: rgba(0, 0, 0, 0.1); --bs-table-hover-color: #212529; --bs-table-hover-bg: rgba(0, 0, 0, 0.075); width: 100%; margin-bottom: 1rem; color: #212529; vertical-align: top; border-color: #dee2e6;}.table > :not(caption) > * > *{padding: 0.5rem 0.5rem; background-color: var(--bs-table-bg); background-image: linear-gradient(var(--bs-table-accent-bg), var(--bs-table-accent-bg)); border-bottom-width: 1px;}.table > tbody{vertical-align: inherit;}.table > thead{vertical-align: bottom;}.table > :not(:last-child) > :last-child > *{border-bottom-color: currentColor;}.caption-top{caption-side: top;}.table-sm > :not(caption) > * > *{padding: 0.25rem 0.25rem;}.table-bordered > :not(caption) > *{border-width: 1px 0;}.table-bordered > :not(caption) > * > *{border-width: 0 1px;}.table-borderless > :not(caption) > * > *{border-bottom-width: 0;}.table-striped > tbody > tr:nth-of-type(odd){--bs-table-accent-bg: var(--bs-table-striped-bg); color: var(--bs-table-striped-color);}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg); color: var(--bs-table-active-color);}.table-hover > tbody > tr:hover{--bs-table-accent-bg: var(--bs-table-hover-bg); color: var(--bs-table-hover-color);}.table-primary{--bs-table-bg: #bbd6fe; --bs-table-striped-bg: #b3cdf3; --bs-table-striped-color: #212529; --bs-table-active-bg: #acc4e9; --bs-table-active-color: #212529; --bs-table-hover-bg: #afc9ee; --bs-table-hover-color: #212529; color: #212529; border-color: #acc4e9;}.table-secondary{--bs-table-bg: #d6d8db; --bs-table-striped-bg: #cdcfd2; --bs-table-striped-color: #212529; --bs-table-active-bg: #c4c6c9; --bs-table-active-color: #212529; --bs-table-hover-bg: #c8cbce; --bs-table-hover-color: #212529; color: #212529; border-color: #c4c6c9;}.table-success{--bs-table-bg: #c3e6cb; --bs-table-striped-bg: #bbdcc3; --bs-table-striped-color: #212529; --bs-table-active-bg: #b3d3bb; --bs-table-active-color: #212529; --bs-table-hover-bg: #b7d8bf; --bs-table-hover-color: #212529; color: #212529; border-color: #b3d3bb;}.table-info{--bs-table-bg: #bee5eb; --bs-table-striped-bg: #b6dbe1; --bs-table-striped-color: #212529; --bs-table-active-bg: #aed2d8; --bs-table-active-color: #212529; --bs-table-hover-bg: #b2d7dc; --bs-table-hover-color: #212529; color: #212529; border-color: #aed2d8;}.table-warning{--bs-table-bg: #ffeeba; --bs-table-striped-bg: #f4e4b3; --bs-table-striped-color: #212529; --bs-table-active-bg: #e9daac; --bs-table-active-color: #212529; --bs-table-hover-bg: #eedfaf; --bs-table-hover-color: #212529; color: #212529; border-color: #e9daac;}.table-danger{--bs-table-bg: #f5c6cb; --bs-table-striped-bg: #eabec3; --bs-table-striped-color: #212529; --bs-table-active-bg: #e0b6bb; --bs-table-active-color: #212529; --bs-table-hover-bg: #e5babf; --bs-table-hover-color: #212529; color: #212529; border-color: #e0b6bb;}.table-light{--bs-table-bg: #f8f9fa; --bs-table-striped-bg: #edeef0; --bs-table-striped-color: #212529; --bs-table-active-bg: #e3e4e5; --bs-table-active-color: #212529; --bs-table-hover-bg: #e8e9ea; --bs-table-hover-color: #212529; color: #212529; border-color: #e3e4e5;}.table-dark{--bs-table-bg: #343a40; --bs-table-striped-bg: #3e444a; --bs-table-striped-color: #fff; --bs-table-active-bg: #484e53; --bs-table-active-color: #fff; --bs-table-hover-bg: #43494e; --bs-table-hover-color: #fff; color: #fff; border-color: #484e53;}.table-responsive{overflow-x: auto; -webkit-overflow-scrolling: touch;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	var membrete = $("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />");
	document = document.replace(/:DATOS/g, datos);
	document = document.replace(/:ESTILO/g, estilo);
	document = document.replace(/:FUNCION/g, funcion);
	document = document.replace(new RegExp('invisible', 'g'), "");
	document = document.replace(":MEMBRETE", membrete);
	ventimp.document.write(document);
	ventimp.document.close();
}

//imprimir informe mounstruo eliminar para 
//morfologico
function imprInformeMM(datos){
	var document = '<!DOCTYPE html><html lang="es-CL"> <head> <meta charset="utf-8"/> <title>Impresión de Gráficos</title> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/> <link rel="stylesheet" href="consulta.css"/> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> :ESTILO </head> <body> <div class="container">:DATOS</div>:FUNCION </body></html>';
	var ventimp = window.open(" ","popimpr");
	var estilo = '<style>@media print{.newpage{ page-break-before: always; margin-bottom:5rem; }.pie-pagina{font-size:0.9rem;}.pie-pagina-dos{font-size:1rem;}*, ::after, ::before{box-sizing: border-box;}body{margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529; background-color: #fff; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent;}[tabindex="-1"]:focus:not(:focus-visible){outline: 0 !important;}hr{margin: 1rem 0; color: inherit; background-color: currentColor; border: 0; opacity: 0.25;}hr:not([size]){height: 1px;}h1, h2, h3, h4, h5, h6{margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2;}h1{font-size: calc(1.375rem + 1.5vw);}h2{font-size: calc(1.325rem + 0.9vw);}h3{font-size: calc(1.3rem + 0.6vw);}h4{font-size: calc(1.275rem + 0.3vw);}h5{font-size: 1.25rem;}h6{font-size: 1rem;}p{margin-top: 0; margin-bottom: 1rem;}ol, ul{padding-left: 2rem;}dl, ol, ul{margin-top: 0; margin-bottom: 1rem;}ol ol, ol ul, ul ol, ul ul{margin-bottom: 0;}b, strong{font-weight: bolder;}small{font-size: 0.875em;}mark{padding: 0.2em; background-color: #fcf8e3;}sub, sup{position: relative; font-size: 0.75em; line-height: 0; vertical-align: baseline;}sub{bottom: -0.25em;}sup{top: -0.5em;}a{color: #0d6efd; text-decoration: underline;}a:hover{color: #024dbc;}a:not([href]):not([class]), a:not([href]):not([class]):hover{color: inherit; text-decoration: none;}code, kbd, pre, samp{font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 1em;}pre{display: block; margin-top: 0; margin-bottom: 1rem; overflow: auto; font-size: 0.875em; -ms-overflow-style: scrollbar;}pre code{font-size: inherit; color: inherit; word-break: normal;}code{font-size: 0.875em; color: #d63384; word-wrap: break-word;}a > code{color: inherit;}.membrete{margin-top:2rem;}.membrete::first-letter{font-size: 1.3rem;}.membrete::first-line{font-size: 1.3rem;}table{caption-side: bottom; border-collapse: collapse;}caption{padding-top: 0.5rem; padding-bottom: 0.5rem; color: #6c757d; text-align: left;}th{text-align: inherit; text-align: -webkit-match-parent;}tbody, td, tfoot, th, thead, tr{border-color: inherit; border-style: solid; border-width: 0;}label{display: inline-block;}[hidden]{display: none !important;}.pie-pagina-dos{font-size: 10px;}#lineclear{clear: both;}.table{--bs-table-bg: transparent; --bs-table-accent-bg: transparent; --bs-table-striped-color: #212529; --bs-table-striped-bg: rgba(0, 0, 0, 0.05); --bs-table-active-color: #212529; --bs-table-active-bg: rgba(0, 0, 0, 0.1); --bs-table-hover-color: #212529; --bs-table-hover-bg: rgba(0, 0, 0, 0.075); width: 100%; margin-bottom: 1rem; color: #212529; vertical-align: top; border-color: #dee2e6;}.table > :not(caption) > * > *{padding: 0.5rem 0.5rem; background-color: var(--bs-table-bg); background-image: linear-gradient(var(--bs-table-accent-bg), var(--bs-table-accent-bg)); border-bottom-width: 1px;}.table > tbody{vertical-align: inherit;}.table > thead{vertical-align: bottom;}.table > :not(:last-child) > :last-child > *{border-bottom-color: currentColor;}.caption-top{caption-side: top;}.table-sm > :not(caption) > * > *{padding: 0.25rem 0.25rem;}.table-bordered > :not(caption) > *{border-width: 1px 0;}.table-bordered > :not(caption) > * > *{border-width: 0 1px;}.table-borderless > :not(caption) > * > *{border-bottom-width: 0;}.table-striped > tbody > tr:nth-of-type(odd){--bs-table-accent-bg: var(--bs-table-striped-bg); color: var(--bs-table-striped-color);}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg); color: var(--bs-table-active-color);}.table-hover > tbody > tr:hover{--bs-table-accent-bg: var(--bs-table-hover-bg); color: var(--bs-table-hover-color);}.table-primary{--bs-table-bg: #bbd6fe; --bs-table-striped-bg: #b3cdf3; --bs-table-striped-color: #212529; --bs-table-active-bg: #acc4e9; --bs-table-active-color: #212529; --bs-table-hover-bg: #afc9ee; --bs-table-hover-color: #212529; color: #212529; border-color: #acc4e9;}.table-secondary{--bs-table-bg: #d6d8db; --bs-table-striped-bg: #cdcfd2; --bs-table-striped-color: #212529; --bs-table-active-bg: #c4c6c9; --bs-table-active-color: #212529; --bs-table-hover-bg: #c8cbce; --bs-table-hover-color: #212529; color: #212529; border-color: #c4c6c9;}.table-success{--bs-table-bg: #c3e6cb; --bs-table-striped-bg: #bbdcc3; --bs-table-striped-color: #212529; --bs-table-active-bg: #b3d3bb; --bs-table-active-color: #212529; --bs-table-hover-bg: #b7d8bf; --bs-table-hover-color: #212529; color: #212529; border-color: #b3d3bb;}.table-info{--bs-table-bg: #bee5eb; --bs-table-striped-bg: #b6dbe1; --bs-table-striped-color: #212529; --bs-table-active-bg: #aed2d8; --bs-table-active-color: #212529; --bs-table-hover-bg: #b2d7dc; --bs-table-hover-color: #212529; color: #212529; border-color: #aed2d8;}.table-warning{--bs-table-bg: #ffeeba; --bs-table-striped-bg: #f4e4b3; --bs-table-striped-color: #212529; --bs-table-active-bg: #e9daac; --bs-table-active-color: #212529; --bs-table-hover-bg: #eedfaf; --bs-table-hover-color: #212529; color: #212529; border-color: #e9daac;}.table-danger{--bs-table-bg: #f5c6cb; --bs-table-striped-bg: #eabec3; --bs-table-striped-color: #212529; --bs-table-active-bg: #e0b6bb; --bs-table-active-color: #212529; --bs-table-hover-bg: #e5babf; --bs-table-hover-color: #212529; color: #212529; border-color: #e0b6bb;}.table-light{--bs-table-bg: #f8f9fa; --bs-table-striped-bg: #edeef0; --bs-table-striped-color: #212529; --bs-table-active-bg: #e3e4e5; --bs-table-active-color: #212529; --bs-table-hover-bg: #e8e9ea; --bs-table-hover-color: #212529; color: #212529; border-color: #e3e4e5;}.table-dark{--bs-table-bg: #343a40; --bs-table-striped-bg: #3e444a; --bs-table-striped-color: #fff; --bs-table-active-bg: #484e53; --bs-table-active-color: #fff; --bs-table-hover-bg: #43494e; --bs-table-hover-color: #fff; color: #fff; border-color: #484e53;}.table-responsive{overflow-x: auto; -webkit-overflow-scrolling: touch;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	var membrete = $("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />");
	document = document.replace(/:DATOS/g, datos);
	document = document.replace(/:ESTILO/g, estilo);
	document = document.replace(/:FUNCION/g, funcion);
	ventimp.document.write(document);
	ventimp.document.close();
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

function pctut(uterina) {
    'use strict';
    let a = [];
    let b = [];
	a[0]=1.23; a[1]=1.18; a[2]=1.11; a[3]=1.05;a[4]=0.99; a[5]=0.94; a[6]=0.89; a[7]=0.85; a[8]=0.81; a[9]=0.78; a[10]=0.74; a[11]=0.71; a[12]=0.69; a[13]=0.66; a[14]=0.64; a[15]=0.62; a[16]=0.6; a[17]=0.58; a[18]=0.56; a[19]=0.55; a[20]=0.54; a[21]=0.52; a[22]=0.51; a[23]=0.51; a[24]=0.51; a[25]=0.49; a[26]=0.48; a[27]=0.48; a[28]=0.47; a[29]=0.47; a[30]=0.47;
	b[0]=2.84; b[1]=2.71; b[2]=2.53; b[3]=2.38;b[4]=2.24; b[5]=2.11; b[6]=1.99; b[7]=1.88;b[8]=1.79; b[9]=1.71; b[10]=1.61; b[11]=1.54;b[12]=1.47; b[13]=1.41; b[14]=1.35; b[15]=1.3;b[16]=1.25; b[17]=1.21;b[18]=1.17; b[19]=1.13;b[20]=1.11; b[21]=1.06;b[22]=1.04; b[23]=1.01; b[24]=0.99; b[25]=0.97;b[26]=0.95; b[27]=0.94;b[28]=0.92; b[29]=0.91; b[30]=0.91;
    
    let eg = the("semanas").value;
	uterina = uterina.toString(); 
    uterina = uterina.replace(",", ".");
    uterina = parseFloat(uterina);

    let respuesta = {
        pct: 0,
        raw: 0,
        rango: {
            min:0,
            max:0
        }
    }

    if (eg < 10 || eg > 40) {
        return respuesta;
	}
	else {
		eg = eg - 10;
        let uno = 0, dos = 0;
        
		if (uterina > 0){
			eg = parseInt(eg);
			uno = b[eg] - a[eg];
			dos = uterina - a[eg];
			uterina = parseInt(90 / (uno) * (dos) + 5);

            respuesta.raw = uterina;

			if (uterina > 95){
				uterina = '> 95';
			}
			else if (uterina < 5){
				uterina = '< 5';
            }

            respuesta.pct = uterina;
            respuesta.rango.min = a[eg];
            respuesta.rango.max = b[eg];
            return respuesta;
        }
    }
}

function pctdv() {
    'use strict';
    let a = [];
    let b = [];
   
    a[0]=0.32; a[1]=0.32; a[2]=0.32; a[3]=0.32; a[4]=0.32; a[5]=0.32; a[6]=0.31; a[7]=0.31; a[8]=0.31; a[9]=0.3; a[10]=0.29; a[11]=0.28; a[12]=0.28; a[13]=0.27; a[14]=0.26; a[15]=0.25; a[16]=0.24; a[17]=0.23; a[18]=0.22; a[19]=0.21; a[20]=0.2;
    b[0]=0.83; b[1]=0.83; b[2]=0.83; b[3]=0.83; b[4]=0.83; b[5]=0.83; b[6]=0.82; b[7]=0.82; b[8]=0.81; b[9]=0.81; b[10]=0.8; b[11]=0.79; b[12]=0.78; b[13]=0.77; b[14]=0.76; b[15]=0.75; b[16]=0.74; b[17]=0.73; b[18]=0.72; b[19]=0.71; b[20]=0.7;
   
    let eg = the("semanas").value;
    var dv = the("dv").value;
   dv = dv.toString();
    dv = dv.replace(",", ".");
    dv = parseFloat(dv);
       
    if (eg < 20 || eg > 40)
    {
      $("#dvPct").val("0");
    }
    else {
         eg = eg - 20;
         eg = parseInt(eg);
         var uno=b[eg] - a[eg];
         var dos=dv - a[eg];
        var resultado = parseInt(90 / (uno) * (dos) + 5);
        var pctDV = '';
               //truncador de Pct, sobre 100 o bajo 1
               if (resultado > 99){
                   pctDV = '&gt; 99';
               }
               else if (resultado < 1){
                   pctDV = '&lt; 1';
               }
               else{
                   pctDV = resultado;
               }
         ajustarProgreso(resultado, "dvPct");
         $("#dvPctTxt").val(pctDV);
         $("#dvRngo").val( a[eg] + " - " + b[eg]);
    }
}

function pctau() {
    /* 5 95 */
    'use strict';
	let a = [],b = [],c = [],d = [];

    a[0]=0.97;a[1]=0.95;a[2]=0.94;a[3]=0.92;a[4]=0.9;a[5]=0.89;a[6]=0.87;a[7]=0.85;a[8]=0.82;a[9]=0.8;a[10]=0.78; a[11]=0.75;a[12]=0.73; a[13]=0.7;a[14]=0.67; a[15]=0.65;a[16]=0.62; a[17]=0.58;a[18]=0.55; a[19]=0.52;a[20]=0.49;
    b[0]=1.6;b[1]=1.56;b[2]=1.53; b[3]=1.5;b[4]=1.46; b[5]=1.43;b[6]=1.4;b[7]=1.37;b[8]=1.35; b[9]=1.32;b[10]=1.29; b[11]=1.27;b[12]=1.25; b[13]=1.22;b[14]=1.2; b[15]=1.18;b[16]=1.16; b[17]=1.14;b[18]=1.13; b[19]=1.11;b[20]=1.09;
    c[20]=0.78; c[21]=0.87; c[22]=0.95; c[23]=1.02;c[24]=1.09; c[25]=1.15; c[26]=1.2; c[27]=1.24;c[28]=1.28; c[29]=1.31; c[30]=1.33; c[31]=1.35;c[32]=1.36; c[33]=1.36; c[34]=1.36; c[35]=1.34;c[36]=1.32; c[37]=1.3; c[38]=1.26; c[39]=1.22;c[40]=1.18;
    d[20]=1.68; d[21]=1.88; d[22]=2.06; d[23]=2.22;d[24]=2.36; d[25]=2.49; d[26]=2.6;d[27]=2.7;d[28]=2.78; d[29]=2.84; d[30]=2.89; d[31]=2.92;d[32]=2.93; d[33]=2.93; d[34]=2.91; d[35]=2.87;d[36]=2.82; d[37]=2.75; d[38]=2.67; d[39]=2.57;
	
    let eg = the("semanas").value;
 	var aumb = $('#ipau').val();
	aumb = aumb.toString();
 	aumb = aumb.replace(",", ".");
 	aumb = parseFloat(aumb);
 
	if (eg < 20 || eg > 40)
	{
		$('#ipauPct').val('0');
	}
	else {
		eg = eg - 20;
		eg = parseInt(eg);
		var uno=b[eg] - a[eg];
		var dos=aumb - a[eg];
		var resultado = parseInt(90 / (uno) * (dos) + 5);
		ajustarProgreso(resultado, "ipauPct");
		var pctAUMB = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 95){
				pctAUMB = '&gt; 95';
			}
			else if (resultado < 5){
				pctAUMB = '&lt; 5';
			}
			else{
				pctAUMB = resultado;
			}
		$("#ipauPctTxt").val(pctAUMB);
                $("#ipauRngo").val(a[eg] + " - " + b[eg]);
		if ($('#ipacm').val()){
			var ccp = ($('#ipacm').val() / $('#ipau').val());
			$('#ccp').val(ccp.toFixed(2));

			eg = eg + 20;
			uno = d[eg] - c[eg];
			dos = ccp - c[eg];
			resultado = parseInt(90 / (uno) * (dos) + 5);
			ajustarProgreso(resultado, "ccpPct");
			var pctCCP = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 95){
				pctCCP = '&gt; 95';
			}
			else if (resultado < 5){
				pctCCP = '&lt; 5';
			}
			else{
				pctCCP = resultado;
			}
			$("#ccpPctTxt").val(pctCCP);
                        $("#ccpRngo").val(c[eg] + " - " + d[eg]);
		}
	}
}

function pctacm() {
    /* 5 95 */
    'use strict';
	var a = [],b = [],c = [],d = [];

    a[0]=1.24;a[1]=1.29;a[2]=1.34;a[3]=1.37;a[4]=1.4;a[5]=1.43;a[6]=1.44;a[7]=1.45;a[8]=1.45;a[9]=1.44;a[10]=1.43;a[11]=1.41;a[12]=1.38;a[13]=1.34;a[14]=1.3;a[15]=1.25;a[16]=1.19;a[17]=1.13;a[18]=1.05;a[19]=0.98;a[20]=0.89;
    b[0]=1.98;b[1]=2.12;b[2]=2.25;b[3]=2.36;b[4]=2.45;b[5]=2.53;b[6]=2.59;b[7]=2.63;b[8]=2.66;b[9]=2.67;b[10]=2.67;b[11]=2.65;b[12]=2.62;b[13]=2.56;b[14]=2.5;b[15]=2.41;b[16]=2.31;b[17]=2.2;b[18]=2.07;b[19]=1.92;b[20]=1.76;
    c[20]=0.78;c[21]=0.87;c[22]=0.95;c[23]=1.02;c[24]=1.09;c[25]=1.15;c[26]=1.2;c[27]=1.24;c[28]=1.28;c[29]=1.31;c[30]=1.33;c[31]=1.35;c[32]=1.36;c[33]=1.36;c[34]=1.36;c[35]=1.34;c[36]=1.32;c[37]=1.3;c[38]=1.26;c[39]=1.22;c[40]=1.18;
    d[20]=1.68;d[21]=1.88;d[22]=2.06;d[23]=2.22;d[24]=2.36;d[25]=2.49;d[26]=2.6;d[27]=2.7;d[28]=2.78;d[29]=2.84;d[30]=2.89;d[31]=2.92;d[32]=2.93;d[33]=2.93;d[34]=2.91;d[35]=2.87;d[36]=2.82;d[37]=2.75;d[38]=2.67;d[39]=2.57;

    let eg = the("semanas").value;
	var acm = $('#ipacm').val();
	acm = acm.toString();
 	acm = acm.replace(",", ".");
 	acm = parseFloat(acm);

	if (eg < 20 || eg > 40)
	{
		$('#ipacmPct').val('0');
		$('#ccp').val('');
		$('#ccpPct').val('');
	}
	else {
		eg = eg - 20;
		eg = parseInt(eg);
		var uno = b[eg] - a[eg];
		var dos = acm - a[eg];
 		var resultado = parseInt(90 / (uno) * (dos) + 5);
		ajustarProgreso(resultado, "ipacmPct");
		var pctACM = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 95){
				pctACM = '&gt; 95';
			}
			else if (resultado < 5){
				pctACM = '&lt; 5';
			}
			else{
				pctACM = resultado;
			}
		$("#ipacmPctTxt").val(pctACM);
                $("#ipacmRngo").val(a[eg] + " - " + b[eg]);

		if ($('#ipau').val()){
			var ccp = (acm / $('#ipau').val());

			$('#ccp').val(ccp.toFixed(2));

			eg = eg + 20;
			uno = d[eg] - c[eg];
			dos = ccp - c[eg];
			resultado = parseInt(90 / (uno) * (dos) + 5);
			ajustarProgreso(resultado, "ccpPct");
			var pctCCP = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 95){
				pctCCP = '&gt; 95';
			}
			else if (resultado < 5){
				pctCCP = '&lt; 5';
			}
			else{
				pctCCP = resultado;
			}
			$("#ccpPctTxt").val(pctCCP);
            $("#ccpRngo").val(c[eg] + " - " + d[eg]);
		}
	}
}

function ajustarProgreso(valor, objeto){
    valor = (valor == "&gt; 99") ? 99 : valor; // si es mayor a 99
    valor = (isNaN(valor)== true) ? 0 : valor;
	valor = valor + "%";
	$("#"+objeto + " > .progress-consulta").css({"width": valor});
}

function imprSelec(muestra){
	var ficha=$("#"+muestra).html();
	var document = '<!DOCTYPE html><html lang="es-CL"><head><meta charset="utf-8"><title>Impresión de Gráficos</title><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel="stylesheet" href="consulta.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">:ESTILO</head><body><div class="container"><div style="width:35%;text-align:center;" class="membrete"> :MEMBRETE </div></div><div class="container" style="margin-top:50px !important;"> :DATOS </div> :FUNCION </body></html>';
	var ventimp = window.open(" ","_blank");
	var estilo = '<style>@media print {.col{width:40%; height:30% float:left;}.text-center{text-align:center;}.pie-pagina{font-size:9px;}.pie-pagina-dos{font-size:10px;}#lineclear{clear:both;}h4{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;}.membrete::first-letter{font-size:14px;}.membrete::first-line {font-size: 14px;}.membrete {font-size: 10px;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	var membrete = $("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />");
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();
	document = document.replace(":DATOS", ficha);
	document = document.replace(":DATEINFORME", dateInf);
	document = document.replace(":ESTILO", estilo);
	document = document.replace(/:FUNCION/g, funcion);
	document = document.replace(new RegExp('d-none', 'g'), "");
	document = document.replace(":MEMBRETE", membrete);
	ventimp.document.write(document);
	ventimp.document.close();
}

function deDBP() {
    'use strict';
	let a = [], b = [];

    a[0]=14;a[1]=17;a[2]=19;a[3]=25;a[4]=29;a[5]=33;a[6]=34;a[7]=38;a[8]=41;a[9]=43;a[10]=46;a[11]=49;a[12]=52;a[13]=54;a[14]=57;a[15]=61;a[16]=63;a[17]=65;a[18]=69;a[19]=69;a[20]=74;a[21]=74;a[22]=77;a[23]=78;a[24]=78;a[25]=81;a[26]=85;a[27]=88;
	b[0]=25;b[1]=29;b[2]=33;b[3]=35;b[4]=41;b[5]=42;b[6]=46;b[7]=50;b[8]=52;b[9]=56;b[10]=59;b[11]=63;b[12]=66;b[13]=70;b[14]=71;b[15]=75;b[16]=77;b[17]=81;b[18]=83;b[19]=87;b[20]=88;b[21]=91;b[22]=94;b[23]=95;b[24]=97;b[25]=99;b[26]=97;b[27]=106;

	let eg = the("semanas").value;
	let dbp = $("#dbp").val();
    let dof = $("#dof").val();
    
	dbp = dbp.toString();
    dbp = dbp.replace(",", ".");
	dbp = parseFloat(dbp);

	if (eg < 12 || eg > 40){
		$("#dbpDE").val('0');
		$('#dbpPct').val('0');
	}
	else {
		eg = eg - 12;
		eg = parseInt(eg);

		var uno = b[eg] - a[eg];
		var dos = dbp - a[eg];
		var resultado = (parseInt(95 / (uno) * (dos) + 3));
		ajustarProgreso(resultado, "dbpDE");
		var pctDBP = '';
		//truncador de Pct, sobre 100 o bajo 1
		if (resultado > 99){
			pctDBP = '&gt; 99';
		}
		else if (resultado < 1){
			pctDBP = '&lt; 1';
		}
		else{
			pctDBP = resultado;
		}
		
		$('#dbpPct').val(pctDBP);
		$('#dbpRango').val(a[eg] + ' - ' + b[eg] );
		p50();
	}
	
	if (dbp > 0 && dof > 0){
		var valor = ((dbp/dof)*100);
		$('#dof-dbp').val(valor.toFixed(0) + "%");
		$('#ic').val(valor.toFixed(0) + "%");
	}
	else{
		$('#dof-dbp').val("0");
		$('#ic').val("0");
	}
}

function calcdof(){
    'use strict';
	let a = [], b = [];
	let dof = $("#dof").val();

    a[10]=7;a[11]=11; a[12]=16; a[13]=20;a[14]=24; a[15]=29; a[16]=33; a[17]=37;a[18]=41; a[19]=46; a[20]=50; a[21]=54;a[22]=58; a[23]=62; a[24]=65; a[25]=69;a[26]=73; a[27]=76; a[28]=80; a[29]=83;a[30]=86; a[31]=89; a[32]=92; a[33]=95;a[34]=97; a[35]=99; a[36]=102; a[37]=104;a[38]=105; a[39]=107; a[40]=108;
    b[10]=21; b[11]=25; b[12]=30; b[13]=34;b[14]=38; b[15]=43; b[16]=47; b[17]=51;b[18]=55; b[19]=60; b[20]=64; b[21]=68;b[22]=72; b[23]=76; b[24]=79; b[25]=83;b[26]=87; b[27]=90; b[28]=94; b[29]=97;b[30]=100; b[31]=103; b[32]=106; b[33]=108;b[34]=111; b[35]=113; b[36]=116; b[37]=118;b[38]=119; b[39]=121; b[40]=122;
    
    let eg = the("semanas").value;
	
	if (eg > 9 && dof > 0){
		var uno = b[eg] - a[eg];
		var dos = dof - a[eg];
		var resultado = (parseInt(95 / (uno) * (dos) + 3));
		ajustarProgreso(resultado, "dofPct");
		var pctDOF = '';
		//truncador de Pct, sobre 100 o bajo 1
		if (resultado > 99){
			pctDOF = '&gt; 99';
		}
		else if (resultado < 1){
			pctDOF = '&lt; 1';
		}
		else{
			pctDOF = resultado;
		}
		$('#dofPctRpt').val(pctDOF);
		$('#dofRango').val(a[eg] + ' - '+ b[eg]);

		var dbp = $("#dbp").val();

		if (dbp > 0){
			var valor = ((dbp/dof)*100);
				
			$('#dof-dbp').val(valor.toFixed(0) + "%");
			$('#ic').val(valor.toFixed(0) + "%");
			$('#cc').val(valCC(dof,dbp)).trigger('change');
		}
		else{
			$('#dof-dbp').val("0");
			$('#ic').val("0");
		}
	}
	else{
		ajustarProgreso(0, "dofPct");
		$('#dofRango').val(0);
		$('#dofPctRpt').val(0);
		$('#dof-dbp').val("0");
		$('#ic').val("0");
	}
}

function pctcc() {
    /* 3 97 */
    'use strict';
	let a = [], b = [];
    a[0]=64;a[1]=74;a[2]=88;a[3]=100;a[4]=113;a[5]=126; a[6]=137;a[7]=149;a[8]=161;a[9]=172;a[10]=183; a[11]=194;a[12]=204;a[13]=214;a[14]=224;a[15]=233; a[16]=242;a[17]=250;a[18]=258;a[19]=267;a[20]=274; a[21]=280;a[22]=287;a[23]=293;a[24]=299;a[25]=303; a[26]=308;a[27]=311;a[28]=315;
    b[0]=81;b[1]=94;b[2]=106;b[3]=120;b[4]=135; b[5]=150;b[6]=165;b[7]=179;b[8]=193;b[9]=206; b[10]=219;b[11]=232;b[12]=243;b[13]=256;b[14]=268; b[15]=279;b[16]=290;b[17]=300;b[18]=310;b[19]=319; b[20]=328;b[21]=336;b[22]=343;b[23]=351;b[24]=358; b[25]=363;b[26]=368;b[27]=373;b[28]=377;
   
    let eg = the("semanas").value;
    let cc = parseInt(the("cc").value);
   
    if (eg < 12 || eg > 40){ 
        $("#ccPct").val("");
        $('#ccPctRpt').val("");
    }
    else {
        eg = eg - 12;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=cc - a[eg];
        ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "ccPct");
        var resultado = parseInt(95 / (uno) * (dos) + 3);
        var pctCC = '';
        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 97){
            pctCC = '&gt; 97';
        }
        else if (resultado < 3){
            pctCC = '&lt; 3';
        }
        else{
            pctCC = resultado;
        }
        
        $('#ccPctRpt').val(pctCC);
        $('#ccRango').val(a[eg] + ' - ' + b[eg]);
        psohdlk();
        p50();
    }
}

function pctca() {
    /* 3 97 */
    'use strict';
	let a = [], b = [];
    a[0]=42;a[1]=52;a[2]=64;a[3]=75;a[4]=86; a[5]=97;a[6]=109;a[7]=119;a[8]=131;a[9]=141; a[10]=151;a[11]=161;a[12]=171;a[13]=181; a[14]=191;a[15]=200;a[16]=209;a[17]=218;a[18]=227; a[19]=236;a[20]=245;a[21]=253;a[22]=261;a[23]=269; a[24]=277;a[25]=285;a[26]=292;a[27]=299;a[28]=307;
    b[0]=71;b[1]=79;b[2]=92;b[3]=102;b[4]=113; b[5]=127;b[6]=141;b[7]=155;b[8]=170; b[9]=183;b[10]=192;b[11]=209;b[12]=223; b[13]=235;b[14]=248;b[15]=260;b[16]=271;b[17]=284; b[18]=295;b[19]=306;b[20]=318;b[21]=329;b[22]=339; b[23]=349;b[24]=359;b[25]=370;b[26]=380;b[27]=389; b[28]=399;
   
    let eg = the("semanas").value;
    let ca = parseInt(the("ca").value);
   
    if (eg < 12 || eg > 40){ 
            $("#caPct").val("0");
        $('#caPctRpt').val("0");
    }
    else {
        eg = eg - 12;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=ca - a[eg];
        var resultado = parseInt(95 / (uno) * (dos) + 3);
        ajustarProgreso(resultado, "caPct");
        var pctCA = '';
        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 97){
            pctCA = '&gt; 97';
        }
        else if (resultado < 3){
            pctCA = '&lt; 3';
        }
        else{
            pctCA = resultado;
        }
        $('#caPctRpt').val(pctCA);
        $('#caRango').val(a[eg] + ' - ' + b[eg]);
        psohdlk();
        p50();
    }
}

function pctlf() {
    /* 3 97 */
    'use strict';
	let a = [], b = [];
   
    a[0]=7;a[1]=9;a[2]=12;a[3]=15;a[4]=17;a[5]=21; a[6]=23;a[7]=26;a[8]=28;a[9]=30;a[10]=33;a[11]=35; a[12]=38;a[13]=40;a[14]=42;a[15]=44;a[16]=46; a[17]=48;a[18]=50;a[19]=52;a[20]=53;a[21]=55; a[22]=57;a[23]=59;a[24]=60;a[25]=62;a[26]=64; a[27]=65;a[28]=66;
    b[0]=12;b[1]=14;b[2]=17;b[3]=20;b[4]=23;b[5]=27; b[6]=31;b[7]=34;b[8]=38;b[9]=40;b[10]=43;b[11]=47; b[12]=50;b[13]=52;b[14]=56;b[15]=58;b[16]=62; b[17]=64;b[18]=66;b[19]=68;b[20]=71;b[21]=73; b[22]=75;b[23]=78;b[24]=80;b[25]=82;b[26]=84; b[27]=86;b[28]=88;
   
    let eg = the("semanas").value;
    let lf=parseInt(the("lf").value);
   
    if (eg < 12 || eg > 40){ 
        $("#lfPct").val("0");
        $('#lfPctRpt').val("0");
    }else {
        eg = eg - 12;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=lf - a[eg];
        var resultado = parseInt(95 / (uno) * (dos) + 3);
        ajustarProgreso(resultado, "lfPct");
        var pctLF = '';
        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 97){
            pctLF = '&gt; 97';
        }else if (resultado < 3){
            pctLF = '&lt; 3';
        }else{
            pctLF = resultado;
        }
        $('#lfPctRpt').val(pctLF);
        $('#lfRango').val(a[eg] + ' - ' + b[eg]);
        psohdlk();
        p50();
    }
}

function pctcb() {
    /* 3 97 desvio estandar, no percentil*/ 
    //cerebelo segun Hill
    var pct2ds = [];
    var pctmedia = [];
    var pct2dsmas = [];
    
    pct2ds[0] = 12;pct2ds[1] = 14;pct2ds[2] = 15;pct2ds[3] = 16;pct2ds[4] = 17;pct2ds[5] = 18;
    pct2ds[6] = 19;pct2ds[7] = 20;pct2ds[8] = 21;pct2ds[9] = 22;pct2ds[10] = 24;
    pct2ds[11] = 26;pct2ds[12] = 27;pct2ds[13] = 29;pct2ds[14] = 30;pct2ds[15] = 31;
    pct2ds[16] = 33;pct2ds[17] = 36;pct2ds[18] = 37;pct2ds[19] = 38;pct2ds[20] = 40;
    pct2ds[21] = 40;pct2ds[22] = 40;pct2ds[23] = 41;pct2ds[24] = 42;pct2ds[25] = 44;
    
    pctmedia[0] = 15;pctmedia[1] = 16;pctmedia[2] = 17;pctmedia[3] = 18;pctmedia[4] = 20;
    pctmedia[5] = 20;pctmedia[6] = 22;pctmedia[7] = 23;pctmedia[8] = 24;pctmedia[9] = 26;
    pctmedia[10] = 28;pctmedia[11] = 30;pctmedia[12] = 31;pctmedia[13] = 33;pctmedia[14] = 34;
    pctmedia[15] = 37;pctmedia[16] = 39;pctmedia[17] = 41;pctmedia[18] = 43;pctmedia[19] = 46;
    pctmedia[20] = 47;pctmedia[21] = 49;pctmedia[22] = 51;pctmedia[23] = 51;pctmedia[24] = 52;
    pctmedia[25] = 52
    
    pct2dsmas[0] = 18;pct2dsmas[1] = 18;pct2dsmas[2] = 19;pct2dsmas[3] = 20;pct2dsmas[4] = 22;
    pct2dsmas[5] = 23;pct2dsmas[6] = 25;pct2dsmas[7] = 26;pct2dsmas[8] = 27;pct2dsmas[9] = 30;
    pct2dsmas[10] = 32;pct2dsmas[11] = 34;pct2dsmas[12] = 34;pct2dsmas[13] = 37;pct2dsmas[14] = 38;
    pct2dsmas[15] = 41;pct2dsmas[16] = 43;pct2dsmas[17] = 46;pct2dsmas[18] = 48;pct2dsmas[19] = 53;
    pct2dsmas[20] = 56;pct2dsmas[21] = 58;pct2dsmas[22] = 60;pct2dsmas[23] = 62;pct2dsmas[24] = 62;
    pct2dsmas[25] = 62;
    
    var cb=0;
    let eg = the("semanas").value;
    cb=parseInt(the("cerebelo").value);
    
    if (eg < 15 || eg > 40) {
        $("#cbPct").val("0");
        $('#cerebeloPctRpt').val("0")
    }else {
        eg = eg - 15;
        eg = parseInt(eg);
        var uno=pct2dsmas[eg] - pct2ds[eg];
        var dos=cb - pct2ds[eg];
        var resultado = parseInt(95 / (uno) * (dos));
        var pctCB = '';
        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 97){
            pctCB = '&gt; 97';
        }else if (resultado < 3){
            pctCB = '&lt; 3';
        }else{
            pctCB = resultado;
        }
        $('#cerebeloPctRpt').val(pctCB);
        $('#cerebeloRango').val(pct2ds[eg] + ' - ' + pct2dsmas[eg]);
        ajustarProgreso(resultado, "cerebeloPct");
         
        p50();
    }
}

function pctlh() {
    /* 5 95 */
    'use strict';
	let a = [], b = [];
   
    a[12] = 4.8;   b[12] = 12.3; a[13] = 7.6;   b[13] = 15.1;
    a[14] = 10.3;  b[14] = 17.9; a[15] = 13.1;  b[15] = 20.7;
    a[16] = 15.8;  b[16] = 23.5; a[17] = 18.5;  b[17] = 26.3;
    a[18] = 21.2;  b[18] = 29.1; a[19] = 23.8;  b[19] = 31.6;
    a[20] = 26.3;  b[20] = 34.2; a[21] = 28.8;  b[21] = 36.7;
    a[22] = 31.2;  b[22] = 39.2; a[23] = 33.5;  b[23] = 41.6;
    a[24] = 35.7;  b[24] = 43.9; a[25] = 37.9;  b[25] = 46.1;
    a[26] = 39.9;  b[26] = 48.1; a[27] = 41.9;  b[27] = 50.1;
    a[28] = 43.7;  b[28] = 52.1; a[29] = 45.5;  b[29] = 53.9;
    a[30] = 47.2;  b[30] = 55.6; a[31] = 48.9;  b[31] = 57.3;
    a[32] = 50.4;  b[32] = 58.9; a[33] = 52.1;  b[33] = 60.5;
    a[34] = 53.4;  b[34] = 62.1; a[35] = 54.8;  b[35] = 63.5;
    a[36] = 56.2;  b[36] = 64.9; a[37] = 57.6;  b[37] = 66.4;
    a[38] = 59.8;  b[38] = 67.8; a[39] = 60.4;  b[39] = 69.3;
    a[40] = 61.9;  b[40] = 70.8;
       
    let eg = the("semanas").value;
    var lh=parseInt($("#lh").val());
   
    if (eg < 12 || eg > 40) {
        $("#lhPct").val('0');
        $('#lhPctRpt').val('0');
    }else {
        eg = parseInt(eg);
        var uno = b[eg] - a[eg];
        var dos = lh - a[eg];
        var resultado = (parseInt(95 / (uno) * (dos) + 5));
        var pctLH = '';
        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 95){
            pctLH = '&gt; 95';
        }else if (resultado < 5){
            pctLH = '&lt; 5';
        }else{
            pctLH = resultado;
        }
        $('#lhPctRpt').val(pctLH);
        $('#lhRango').val(a[eg] + ' - ' + b[eg]);
        ajustarProgreso(resultado, "lhPct");
        p50();
    }
}

function p50() {
    'use strict';
	let a = [];
    //calcular dbp
    const N7 = new Number(9.468544279);
    const N8 = new Number(1.015432196);
    var dbp= $('#dbp').val();
    var N = new Number(N7 * Math.pow(N8, dbp));
    dbp = Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);
    var c1 = new Number(9.413641651);
    var c2 = new Number(1.004137705);
    var cc = $('#cc').val();
    N = new Number(c1 * Math.pow(c2, cc));
    cc =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);
    c1 = new Number(11.20178254);
    c2 = new Number(1.01704237);
    var lf = $('#lf').val();
    N = new Number(c1 * Math.pow(c2, lf));
    lf =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

    a[10]=12.4;a[11]=12.6;a[12]=13.1;a[13]=13.4; a[14]=13.6;a[15]=14.1;a[16]=14.4;a[17]=14.6; a[18]=15.1;a[19]=15.4;a[20]=15.6;a[21]=16.2; a[22]=16.5;a[23]=17.1;a[24]=17.3;a[25]=17.6; a[26]=18.1;a[27]=18.4;a[28]=19;a[29]=19.3; a[30]=19.6;a[31]=20.2;a[32]=20.5;a[33]=21.1; a[34]=21.4;a[35]=22;a[36]=22.4;a[37]=22.6; a[38]=23.3;a[39]=23.6;a[40]=24.2;a[41]=24.6; a[42]=25.2;a[43]=25.5;a[44]=26.1;a[45]=26.5; a[46]=27.1;a[47]=27.5;a[48]=28.1;a[49]=28.6; a[50]=29.2;a[51]=29.6;a[52]=30.2;a[53]=30.6; a[54]=31.3;a[55]=32;a[56]=32.4;a[57]=33.1; a[58]=33.4;a[59]=34.1;a[60]=34.6;a[61]=35.2; a[62]=35.6;a[63]=36.4;a[64]=37.1;a[65]=37.5; a[66]=38.2;a[67]=38.6;a[68]=39.4;a[69]=40.1;

    var dbpdias = (Math.floor(dbp) * 7) + ((dbp - Math.floor(dbp)) * 10);
    var ccdias = (Math.floor(cc) * 7) + ((cc - Math.floor(cc)) * 10);
    var lfdias = (Math.floor(lf) * 7) + ((lf - Math.floor(lf)) * 10);
    var cb = $('#cerebelo').val();
    let egbio = "";
    if (cb > 0) {
        cb = cb / 10;
        var egHill = 6.37+(5.4*cb)+(0.78*Math.pow(cb,2))-(0.13*Math.pow(cb,3));
        //añadir mayor presicion, ya se suma 1 dia
        cb = Math.round( egHill * 10 ) / 10;
        var cbdias = (Math.floor(cb) * 7) + ((cb - Math.floor(cb)) * 10);
        egbio = (ccdias + lfdias + cbdias) /3;
    } else {
        egbio = (dbpdias + ccdias + lfdias) /3;
    }
    var lh = parseInt($('#lh').val());
    if (lh > 0) {
	    lh =  a[lh];
        var lhdias = (Math.floor(lh) * 7) + ((lh - Math.floor(lh)) * 10);
        egbio = (lhdias + egbio) /2;
    }

    egbio = Math.floor(egbio / 7)+"."+ Math.floor(egbio - (Math.floor(egbio/7) *7));
    $('#egP50').val(egbio);
}

function psohdlk() {
    let CC = parseFloat($("#cc").val());
    let CA = parseInt($("#ca").val());
    let LF = parseInt($("#lf").val());

    CC = CC / 10;
    CA = CA / 10;
    LF = LF / 10;
    var psoP = Math.pow(10, (1.326 + 0.0107 * CC + 0.0438 * CA + 0.158 * LF - 0.00326 * CA * LF));

    if (isNaN(psoP) != true) {
        $("#pfe").val(Math.trunc(psoP));
        pctpfe();
    }
    else{
        $("#pfe").val(0);
        pctpfe();
    }
}

function psohdlkMorfologia() {
    let CC = the("pc.morfologia").value;
    let CA = the("pa.morfologia").value;
    let LF = the("femur.morfologia").value;

    CC = CC / 10;
    CA = CA / 10;
    LF = LF / 10;
    var psoP = Math.pow(10, (1.326 + 0.0107 * CC + 0.0438 * CA + 0.158 * LF - 0.00326 * CA * LF));

    if (isNaN(psoP) != true) {
        the("pfe.morfologia").value = Math.trunc(psoP);
        pctpfeMorfologia();
    }
    else{
        the("pfe.morfologia").value = 0;
        pctpfeMorfologia();
    }
}

function pctpfe() {
    'use strict';
    /* 10 90 */
	let a = [], b = [];
   
    a[0]=97;a[1]=121;a[2]=150;a[3]=185;a[4]=227;a[5]=275; a[6]=331;a[7]=398;a[8]=471;a[9]=556;a[10]=652;a[11]=758; a[12]=876;a[13]=1004;a[14]=1145;a[15]=1294;a[16]=1453; a[17]=1621;a[18]=1794;a[19]=1973;a[20]=2154;a[21]=2335; a[22]=2513; a[23]=2686; a[24]=2851; a[25]=2985;
    b[0]=137;b[1]=171;b[2]=212;b[3]=261;b[4]=319; b[5]=387;b[6]=467;b[7]=559;b[8]=665;b[9]=784; b[10]=918;b[11]=1068;b[12]=1234;b[13]=1416;b[14]=1613; b[15]=1824;b[16]=2049;b[17]=2285;b[18]=2530; b[19]=2781;b[20]=3036;b[21]=3291;b[22]=3543;b[23]=3786; b[24]=4019;b[25]=4234;   

    let eg = the("semanas").value;
    let pfe=parseInt($("#pfe").val());
   
    if (eg < 15 || eg > 40) {  
        $("#pfePct").val('0');
    }else {
        eg = eg - 15;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=pfe - a[eg];
        var pctFinal = (80 / (uno) * (dos)) + 10
        ajustarProgreso(pctFinal, "pfePct");
        var pctPFE = '';
        //truncador de Pct, sobre 100 o bajo 1
        if (pctFinal > 90){
            pctPFE = '&gt; 90';
        }
        else if (pctFinal < 10){
            pctPFE = '&lt; 10';
        }
        else{
            pctPFE = pctFinal.toFixed();
        }
        $('#pfePctRpt').val(pctPFE);
        $('#pfeRango').val(a[eg] + ' - ' +b[eg]);
    }
}

function pctpfeMorfologia() {
    /* 10 90*/
    'use strict';
	let a = [], b = [];
   
    a[0]=97;a[1]=121;a[2]=150;a[3]=185;a[4]=227;a[5]=275; a[6]=331;a[7]=398;a[8]=471;a[9]=556;a[10]=652;a[11]=758; a[12]=876;a[13]=1004;a[14]=1145;a[15]=1294;a[16]=1453; a[17]=1621;a[18]=1794;a[19]=1973;a[20]=2154;a[21]=2335; a[22]=2513; a[23]=2686; a[24]=2851; a[25]=2985;
    b[0]=137;b[1]=171;b[2]=212;b[3]=261;b[4]=319; b[5]=387;b[6]=467;b[7]=559;b[8]=665;b[9]=784; b[10]=918;b[11]=1068;b[12]=1234;b[13]=1416;b[14]=1613; b[15]=1824;b[16]=2049;b[17]=2285;b[18]=2530; b[19]=2781;b[20]=3036;b[21]=3291;b[22]=3543;b[23]=3786; b[24]=4019;b[25]=4234;   

    let eg = the("semanas").value;
    let pfe= the("pfe.morfologia").value;
    the("pfe.pct.morfologia").classList.remove("is-valid", "is-invalid");
   
    if (eg < 15 || eg > 40) {  
        the("pfe.pct.morfologia").value = 0;
    } else {
        eg = eg - 15;
        eg = parseInt(eg);

        var uno=b[eg] - a[eg];
        var dos=pfe - a[eg];
        var pctFinal = (80 / (uno) * (dos)) + 10
        the("pfe.pct.real.morfologia").value = pctFinal
        ajustarProgreso(pctFinal, "pfeMorfologia");

        var pctPFE = '';
        //truncador de Pct, sobre 100 o bajo 1
        if (pctFinal > 90){
            pctPFE = '> 90';
        }
        else if (pctFinal < 10){
            pctPFE = '< 10';
        } else{
            pctPFE = pctFinal.toFixed();
        }

        the("pfe.pct.morfologia").value = pctPFE;
        
        if (pctFinal < 10 || pctFinal > 90){
            the("pfe.pct.morfologia").classList.add("is-invalid");
        }else{
            the("pfe.pct.morfologia").classList.add("is-valid");
        }
    }
}

function valCC(dof,dbp){
    var delta = parseFloat(1.60);
    return Math.round((parseInt(dof) + parseInt(dbp)) * delta);
}

function bvm() {
    /* 5 95*/
    'use strict';
	let a = [], b = [];
    a[0]=23; a[1]=25; a[2]=27; a[3]=28; a[4]=29; a[5]=29; a[6]=30; a[7]=30; a[8]=30; a[9]=30; a[10]=30; a[11]=30; a[12]=30; a[13]=29; a[14]=29; a[15]=29; a[16]=29; a[17]=29; a[18]=28; a[19]=28; a[20]=27; a[21]=26; a[22]=24; a[23]=23; a[24]=21;
    b[0]=59; b[1]=62; b[2]=64; b[3]=66; b[4]=67; b[5]=68; b[6]=68; b[7]=68; b[8]=68; b[9]=68; b[10]=68; b[11]=69; b[12]=69; b[13]=69; b[14]=69; b[15]=70; b[16]=71; b[17]=72; b[18]=72; b[19]=72; b[20]=71; b[21]=70; b[22]=68; b[23]=66; b[24]=62;

    let eg = the("semanas").value;
    let bvm = parseInt($("#bvm").val());
    if (eg > 15 || eg < 41){
        eg = eg - 16;
        eg = parseInt(eg);
        var uno = b[eg] - a[eg];
        var dos = bvm - a[eg];
        var resultado = parseInt(90 / (uno) * (dos) + 5);
        ajustarProgreso(resultado, "bvmPct");
        $("#bvmPctRpt").val(resultado);
    }
}

function crearInformeEcoSegTrim2(){
	var actCard;
    var movCorp;

    elem=document.getElementsByName('accard');
    for(i=0;i<elem.length;i++)
        if (elem[i].checked) {
            actCard = elem[i].value;
        }

        elem=document.getElementsByName('movfet');
        for(i=0;i<elem.length;i++)
            if (elem[i].checked) {
                movCorp = elem[i].value;
            }

    if (actCard = 0){
        actCard = "sin actividad cardiaca";
    } else {
        actCard = "con actividad cardiaca";
    }
    
    if (movCorp = 0){
        movCorp = "sin movimientos corporales";
    } else {
        movCorp = "con movimientos corporales";
    }

	var p50 = $('#egP50').val() + ' semanas';
    var lh =  $( '#lh').val() + ' mm';
    var lhPct = the("lhPctRpt").value;
    var tmpData = "";

    if (lhPct == "&gt; 95" || lhPct == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = lhPct;
    }
    var lhRango = oldProgress(tmpData);
    
    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();
    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();
    let eg = the("semanas").value + "."+ the("dias").value;
    
    var dbp = $( '#dbp').val() + ' mm';
    var dbpPct = the("dbpPct").value;

    if (dbpPct == "&gt; 99" || dbpPct == "&lt; 1"){
        tmpData = 0;
    }else{
        tmpData = dbpPct;
    }
    var dbpRango = oldProgress(tmpData);

    var dof = $( '#dof').val() + ' mm';
    var dofPctRpt = $('#dofPctRpt').val();
    if (dofPctRpt == "&gt; 99" || dofPctRpt == "&lt; 1"){
        tmpData = 0;
    }else{
        tmpData = dofPctRpt;
    }
    var dofRango = oldProgress(tmpData);

    var cc = $( '#cc').val() + ' mm';
    var ccPct = $('#ccPctRpt').val();
    if (ccPct == "&gt; 97" || ccPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = ccPct;
    }
    var ccRango = oldProgress(tmpData);

    var ca = $( '#ca').val() + ' mm';
    var caPct = the("caPctRpt").value;
    if (caPct == "&gt; 97" || caPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = caPct;
    }
    var caRango = oldProgress(tmpData);

    var lf = $( '#lf').val() + ' mm';
    var lfPct = the("lfPctRpt").value;
    if (lfPct == "&gt; 97" || lfPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = lfPct;
    }
    var lfRango = oldProgress(tmpData);

	var ic = $( '#dof-dbp').val();
    var cb = $('#cerebelo').val() + ' mm';
    var cerebeloPctRpt = the("cerebeloPctRpt").value;
    if (cerebeloPctRpt == "&gt; 97" || cerebeloPctRpt == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = cerebeloPctRpt;
    }
    var cbRango = oldProgress(tmpData);
	
	var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista option:selected').text();
    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
    var edadmaterna = $( "select[name='edad_materna']").val();
    
    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();

	var linea1 = "Feto en presentación " + the("presentacion").value + ", dorso " + the("dorso").value + ", " + actCard + " y " + movCorp + ".";
    var linea2 = "Frecuencia cardiaca fetal de " + the("fcf").value + " x minuto.";

	var anatomiaFetal = $('#ev-morfo').val();

	var linea3 = "<strong>Anatomía fetal *</strong>  " + anatomiaFetal + $('#comentarios-anatomia-informe-eg-texto').val();

    if (anatomiaFetal == "no evaluada dirigidamente, pero el aspecto morfológico general es normal"){
        linea3 += "<br>atrio posterior " + the("atrio.ecoDosTres").value + " mm ( " + the("atrio.desc.ecoDosTres").value + " ), diámetro cerebeloso transverso "+ the("cerebelo").value +" mm, cisterna magna "+ the("cm.ecoDosTres").value + " mm, sexo fetal " + $("#ecografia\\.segtrim\\.sexo").val() + ".";
    }else{
        linea3 += " <br>";
    }

    var linea4 = '<strong>Placenta</strong> de ubicación ' + the("ubicacion").value + ', ' + the("incersion").value + '.';
    var linea5 = "<strong>Cordón umbilical</strong> " + the("cordon").value + ", identificandose "+ the("vasos").value +" vasos.";
    var linea6 = "<strong>Líquido amniótico**</strong> " + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor de " + the("bvm").value + " mm.";

    var InformeString = '<div class="container"> <h3>Determinación ecográfica de edad gestacional sobre las 14 semana</h3></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table> <p> <strong>FUM: </strong> :FUR <br/> <strong>EG (UPM): </strong> :EG semanas<br/> <strong>FPP: </strong> :FPP </p></div><div class="container"><p style="margin-bottom: 0;"><strong style="color: #045dab;">DESCRIPCIÓN</strong><br> :LINEA1 <br/> :LINEA2 </p><p style="margin-bottom: 0; word-wrap: break-word;">:LINEA3</p><p> :LINEA4 <br/> :LINEA5 <br/> :LINEA6 </p><p></p><p></p></div><div class="container-fluid"> <table class="table"> <tbody> <tr> <th style="line-height: 15px !important; color: #045dab;">BIOMETRIA FETAL</th> <th style="text-align: center;">Valor observado</th> <th style="text-align: center;">Referencia para Edad</th> </tr><tr> <td>DBP (Hadlock):</td><td style="text-align: center;">:DBP</td><td style="text-align: center;">:DBPRANGO</td></tr><tr> <td>DOF (Jeanty):</td><td style="text-align: center;">:DOF</td><td style="text-align: center;">:DOFRANGO</td></tr><tr> <td>CC (Hadlock):</td><td style="text-align: center;">:CC</td><td style="text-align: center;">:CCRANGO</td></tr><tr> <td>CA (Hadlock)* :</td><td style="text-align: center;">:CA</td><td style="text-align: center;">:CARANGO</td></tr><tr> <td>LF (Hadlock):</td><td style="text-align: center;">:LF</td><td style="text-align: center;">:LFRANGO</td></tr><tr> <td>LH (Jeanty):</td><td style="text-align: center;">:LH</td><td style="text-align: center;">:LHRANGO</td></tr><tr> <td>Cerebelo (Diámetro transverso) (Hill):</td><td style="text-align: center;">:CB</td><td style="text-align: center;">:CBRANGO</td></tr><tr> <td style="padding-bottom: 15px !important;">Indice Cefálico (DBP / DOF)</td><td style="text-align: center; padding-bottom: 15px !important;">:IC</td><td style="text-align: center; padding-bottom: 15px !important;">( 70% - 86% )</td></tr>';

    if (the("art.ut").checked == true){
        InformeString += "<tr> <td style='padding-bottom: 15px !important;'>IP Promedio Arterias Uterinas:</td><td style='text-align:center;padding-bottom: 15px !important;'>:ARTUT</td><td style='text-align:center;padding-bottom: 15px !important;'>:ARTUTRANGO</td></tr>";
        InformeString = InformeString.replace(":ARTUT", $("#respuesta_uterina_promedio").val());
        InformeString = InformeString.replace(":ARTUTRANGO", $("#respuesta_uterina_promedio_rango").val());
    }

    if (the("larg.cerv").checked == true){
        InformeString += "<tr> <td style='padding-bottom: 15px !important;'>Largo Cervical</td><td style='text-align:center;padding-bottom: 15px !important;'>:LARGCERV mm</td><td style='text-align:center;padding-bottom: 15px !important;'></td><td style='text-align:center;padding-bottom: 15px !important;'></td></tr>"
        InformeString = InformeString.replace(":LARGCERV", $("#largo\\.cervical\\.segundo").val());
    }

    InformeString += "<tr> <td style='padding-bottom: 15px !important;'><strong>Edad Gestacional Promedio:</strong></td><td style='text-align:center;padding-bottom: 15px !important;'>:EGPROM</td><td style='text-align:center;padding-bottom: 15px !important;'></td></tr>";
    InformeString = InformeString.replace(":EGPROM", the("egP50").value + " semanas");

    InformeString += "<tr> <td style='border-top:1px dashed #045dab;' colspan='3'>* En el cálculo de edad gestacional tardia, la aplicacion excluye el perímetro abdominal, considerando solo CC y LF.</td></tr><tr> <td style='border-top:1px dashed #045dab;'></td><td style='border-top:1px dashed #045dab;'></td><td style='border-top:1px dashed #045dab;'></td></tr></tbody> </table></div><div class='container-fluid'> <p style='margin-top:0.5rem;padding-bottom:0px;margin-bottom:0px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container-fluid'> <p class='text-right top40' style='margin-right:100px;margin-top:4rem;'>Ecografista: <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p style='margin-bottom:0;' class='pie-pagina'><small><strong>* Para la evaluación morfológica fetal, ceñirse a recomendaciones oficiales vigentes, para Chile: Guías Perinatales MINSAL 2015</strong> <br>Ver dirección web: http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf <br>** Referencia para medición de líquido amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000</small></p><p style='margin-bottom:0 !important;'><small><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></small> </p></div>";

	var comentario = $('#comentarios-eco-dos-inf-dos').val()
	comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : '';

	InformeString = InformeString.replace(":PACIENTE", paciente);
	InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
	InformeString = InformeString.replace(":MOTIVO", motivo);
	InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
	InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);

	InformeString = InformeString.replace(":FUR", fur);
	InformeString = InformeString.replace(":FEXAMEN", fexamen);
	InformeString = InformeString.replace(":EG", eg);
	InformeString = InformeString.replace(":FPP", fpp);
	InformeString = InformeString.replace(":DBP", dbp);
	InformeString = InformeString.replace(":DBPRANGO", dbpRango);
	InformeString = InformeString.replace(":DOF", dof);
	InformeString = InformeString.replace(":DOFRANGO", dofRango);
	InformeString = InformeString.replace(":CC", cc);
	InformeString = InformeString.replace(":CCRANGO", ccRango);
	InformeString = InformeString.replace(":CA", ca);
	InformeString = InformeString.replace(":CARANGO", caRango);
	InformeString = InformeString.replace(":LF", lf);
	InformeString = InformeString.replace(":LFRANGO", lfRango);
	InformeString = InformeString.replace(":LH", lh);
	InformeString = InformeString.replace(":LHRANGO", lhRango);
	InformeString = InformeString.replace(":IC", ic);
	InformeString = InformeString.replace(":CB", cb);
	InformeString = InformeString.replace(":CBRANGO", cbRango);
	InformeString = InformeString.replace(":COMENTARIO", comentario);
	InformeString = InformeString.replace(":P50", p50);
	
	InformeString = InformeString.replace(":LINEA1", linea1);
	InformeString = InformeString.replace(":LINEA2", linea2);
	InformeString = InformeString.replace(":LINEA3", linea3);
	InformeString = InformeString.replace(":LINEA4", linea4);
	InformeString = InformeString.replace(":LINEA5", linea5);
	InformeString = InformeString.replace(":LINEA6", linea6);
	InformeString = InformeString.replace(":DATEINFORME", dateInf);
	InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);
    
    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();
    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);

	return InformeString;
}

function crearInformeEcoSegTrim2Clon(){
	var actCard;
    var movCorp;

    elem=document.getElementsByName('accard');
    for(i=0;i<elem.length;i++)
        if (elem[i].checked) {
            actCard = elem[i].value;
        }

        elem=document.getElementsByName('movfet');
        for(i=0;i<elem.length;i++)
            if (elem[i].checked) {
                movCorp = elem[i].value;
            }

    if (actCard = 0){
        actCard = "sin actividad cardiaca";
    } else {
        actCard = "con actividad cardiaca";
    }
    
    if (movCorp = 0){
        movCorp = "sin movimientos corporales";
    } else {
        movCorp = "con movimientos corporales";
    }

	var p50 = $('#egP50').val() + ' semanas';
    var lh =  $( '#lh').val() + ' mm';
    var lhPct = the("lhPctRpt").value;
    var tmpData = "";

    if (lhPct == "&gt; 95" || lhPct == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = lhPct;
    }
    var lhRango = oldProgress(tmpData);
    
    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();
    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();
    let eg = the("semanas").value + "."+ the("dias").value;
    
    var dbp = $( '#dbp').val() + ' mm';
    var dbpPct = the("dbpPct").value;

    if (dbpPct == "&gt; 99" || dbpPct == "&lt; 1"){
        tmpData = 0;
    }else{
        tmpData = dbpPct;
    }
    var dbpRango = oldProgress(tmpData);

    var dof = $( '#dof').val() + ' mm';
    var dofPctRpt = $('#dofPctRpt').val();
    if (dofPctRpt == "&gt; 99" || dofPctRpt == "&lt; 1"){
        tmpData = 0;
    }else{
        tmpData = dofPctRpt;
    }
    var dofRango = oldProgress(tmpData);

    var cc = $( '#cc').val() + ' mm';
    var ccPct = $('#ccPctRpt').val();
    if (ccPct == "&gt; 97" || ccPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = ccPct;
    }
    var ccRango = oldProgress(tmpData);

    var ca = $( '#ca').val() + ' mm';
    var caPct = the("caPctRpt").value;
    if (caPct == "&gt; 97" || caPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = caPct;
    }
    var caRango = oldProgress(tmpData);

    var lf = $( '#lf').val() + ' mm';
    var lfPct = the("lfPctRpt").value;
    if (lfPct == "&gt; 97" || lfPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = lfPct;
    }
    var lfRango = oldProgress(tmpData);

	var ic = $( '#dof-dbp').val();
    var cb = $('#cerebelo').val() + ' mm';
    var cerebeloPctRpt = the("cerebeloPctRpt").value;
    if (cerebeloPctRpt == "&gt; 97" || cerebeloPctRpt == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = cerebeloPctRpt;
    }
    var cbRango = oldProgress(tmpData);
	
	var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista option:selected').text();
    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
    var edadmaterna = $( "select[name='edad_materna']").val();
    
    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();

	var linea1 = "Feto en presentación " + the("presentacion").value + ", dorso " + the("dorso").value + ", " + actCard + " y " + movCorp + ".";
    var linea2 = "Frecuencia cardiaca fetal de " + the("fcf").value + " x minuto.";

	var anatomiaFetal = $('#ev-morfo').val();

	var linea3 = "<strong>Anatomía fetal *</strong>  " + anatomiaFetal + $('#comentarios-anatomia-informe-eg-texto').val();

    if (anatomiaFetal == "no evaluada dirigidamente, pero el aspecto morfológico general es normal"){
        linea3 += "<br>atrio posterior " + the("atrio.ecoDosTres").value + " mm ( " + the("atrio.desc.ecoDosTres").value + " ), diámetro cerebeloso transverso "+ the("cerebelo").value +" mm, cisterna magna "+ the("cm.ecoDosTres").value + " mm, sexo fetal " + $("#ecografia\\.segtrim\\.sexo").val() + ".";
    }else{
        linea3 += " <br>";
    }

    var linea4 = '<strong>Placenta</strong> de ubicación ' + the("ubicacion").value + ', ' + the("incersion").value + '.';
    var linea5 = "<strong>Cordón umbilical</strong> " + the("cordon").value + ", identificandose "+ the("vasos").value +" vasos.";
    var linea6 = "<strong>Líquido amniótico**</strong> " + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor de " + the("bvm").value + " mm.";

    var InformeString = '<div class="container"> <h3>Determinación Ecográfica <small>(Tardía)</small> de la Edad Gestacional</h3></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table> <p> <strong>FUM: </strong> :FUR <br/> <strong>EG (UPM): </strong> :EG semanas<br/> <strong>FPP: </strong> :FPP </p></div><div class="container"><p style="margin-bottom: 0;"><strong style="color: #045dab;">DESCRIPCIÓN</strong><br> :LINEA1 <br/> :LINEA2 </p><p style="margin-bottom: 0; word-wrap: break-word;">:LINEA3</p><p> :LINEA4 <br/> :LINEA5 <br/> :LINEA6 </p><p></p><p></p></div><div class="container-fluid"> <table class="table"> <tbody> <tr> <th style="line-height: 15px !important; color: #045dab;">BIOMETRIA FETAL</th> <th style="text-align: center;">Valor observado</th> <th style="text-align: center;">Referencia para Edad</th> </tr><tr> <td>DBP (Hadlock):</td><td style="text-align: center;">:DBP</td><td style="text-align: center;">:DBPRANGO</td></tr><tr> <td>DOF (Jeanty):</td><td style="text-align: center;">:DOF</td><td style="text-align: center;">:DOFRANGO</td></tr><tr> <td>CC (Hadlock):</td><td style="text-align: center;">:CC</td><td style="text-align: center;">:CCRANGO</td></tr><tr> <td>CA (Hadlock)* :</td><td style="text-align: center;">:CA</td><td style="text-align: center;">:CARANGO</td></tr><tr> <td>LF (Hadlock):</td><td style="text-align: center;">:LF</td><td style="text-align: center;">:LFRANGO</td></tr><tr> <td>LH (Jeanty):</td><td style="text-align: center;">:LH</td><td style="text-align: center;">:LHRANGO</td></tr><tr> <td>Cerebelo (Diámetro transverso) (Hill):</td><td style="text-align: center;">:CB</td><td style="text-align: center;">:CBRANGO</td></tr><tr> <td style="padding-bottom: 15px !important;">Indice Cefálico (DBP / DOF)</td><td style="text-align: center; padding-bottom: 15px !important;">:IC</td><td style="text-align: center; padding-bottom: 15px !important;">( 70% - 86% )</td></tr></tbody> </table></div>';

    if (the("art.ut").checked == true){
        InformeString += '<tr> <td style="padding-bottom: 15px !important;">IP Promedio Arterias Uterinas:</td><td style="text-align:center;padding-bottom: 15px !important;">:ARTUT</td><td style="text-align:center;padding-bottom: 15px !important;">:ARTUTRANGO</td></tr>';
        InformeString = InformeString.replace(":ARTUT", $("#respuesta_uterina_promedio").val());
        InformeString = InformeString.replace(":ARTUTRANGO", $("#respuesta_uterina_promedio_rango").val());
    }

    if (the("larg.cerv").checked == true){
        InformeString += '<tr> <td style="padding-bottom: 15px !important;">Largo Cervical</td><td style="text-align:center;padding-bottom: 15px !important;">:LARGCERV mm</td><td style="text-align:center;padding-bottom: 15px !important;"></td><td style="text-align:center;padding-bottom: 15px !important;"></td></tr>'
        InformeString = InformeString.replace(":LARGCERV", $("#largo\\.cervical\\.segundo").val());
    }

    InformeString += '<tr> <td style="border-top:1px dashed #045dab;">* En el cálculo de edad gestacional tardía, es excluido perímetro abdominal, adicionando Largo Humeral y Diámetro de Cerebelo</td></tr><tr> <td style="border-top:1px dashed #045dab;"></td><td style="border-top:1px dashed #045dab;"></td><td style="border-top:1px dashed #045dab;"></td></tr></tbody> </table></div><div class="container-fluid"> <p style="margin-top:0.5rem;padding-bottom:0px;margin-bottom:0px;"><strong style="color:#045dab;">COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small> </p><p style="max-width: 700px;text-align: justify;">:COMENTARIO</p></div><div class="container-fluid"> <p style="text-align:right;margin-top:1rem">Ecografista: <strong>:ECOGRAFISTA</strong> </p><span style="border-top: 1px solid #000;width: 100% !important;display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000;width: 100% !important;display: block;"></span> <p style="margin-bottom:0;" class="pie-pagina"><small><strong>* Para la evaluación morfológica fetal, ceñirse a recomendaciones oficiales vigentes, para Chile: Guías Perinatales MINSAL 2015</strong> <br>Ver dirección web: http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf <br>** Referencia para medición de líquido amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000</small></p><p style="margin-bottom:0 !important;"><small><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></small> </p></div>';

	var comentario = $('#comentarios-eco-dos-inf-dos').val()
	comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : '';

	InformeString = InformeString.replace(":PACIENTE", paciente);
	InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
	InformeString = InformeString.replace(":MOTIVO", motivo);
	InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
	InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);

	InformeString = InformeString.replace(":FUR", fur);
	InformeString = InformeString.replace(":FEXAMEN", fexamen);
	InformeString = InformeString.replace(":EG", eg);
	InformeString = InformeString.replace(":FPP", fpp);
	InformeString = InformeString.replace(":DBP", dbp);
	InformeString = InformeString.replace(":DBPRANGO", dbpRango);
	InformeString = InformeString.replace(":DOF", dof);
	InformeString = InformeString.replace(":DOFRANGO", dofRango);
	InformeString = InformeString.replace(":CC", cc);
	InformeString = InformeString.replace(":CCRANGO", ccRango);
	InformeString = InformeString.replace(":CA", ca);
	InformeString = InformeString.replace(":CARANGO", caRango);
	InformeString = InformeString.replace(":LF", lf);
	InformeString = InformeString.replace(":LFRANGO", lfRango);
	InformeString = InformeString.replace(":LH", lh);
	InformeString = InformeString.replace(":LHRANGO", lhRango);
	InformeString = InformeString.replace(":IC", ic);
	InformeString = InformeString.replace(":CB", cb);
	InformeString = InformeString.replace(":CBRANGO", cbRango);
	InformeString = InformeString.replace(":COMENTARIO", comentario);
	InformeString = InformeString.replace(":P50", p50);
	
	InformeString = InformeString.replace(":LINEA1", linea1);
	InformeString = InformeString.replace(":LINEA2", linea2);
	InformeString = InformeString.replace(":LINEA3", linea3);
	InformeString = InformeString.replace(":LINEA4", linea4);
	InformeString = InformeString.replace(":LINEA5", linea5);
	InformeString = InformeString.replace(":LINEA6", linea6);
	InformeString = InformeString.replace(":DATEINFORME", dateInf);
	InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);
    
    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();
    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);

	return InformeString;
}

function valccca() {
    /* 3 97*/
    var cc=parseInt($("#cc").val());
    var ca=parseInt($("#ca").val());
    if (cc > 0 && ca >0 ) {
        var ccca = cc / ca;
        $("#ccca").val(ccca.toFixed(2));
        var pct3 = [];
        var pct97 = [];
   
        pct3[0] = 1.1;pct3[1] = 1.09;pct3[2] = 1.08;pct3[3] = 1.07;pct3[4] = 1.06;
        pct3[5] = 1.06;pct3[6] = 1.05;pct3[7] = 1.04;pct3[8] = 1.03;pct3[9] = 1.02;
        pct3[10] = 1.01;pct3[11] = 1;pct3[12] = 1;pct3[13] = 0.99;pct3[14] = 0.98;
        pct3[15] = 0.97;pct3[16] = 0.96;pct3[17] = 0.95;pct3[18] = 0.95;pct3[19] = 0.94;
        pct3[20] = 0.93;pct3[21] = 0.92;pct3[22] = 0.91;pct3[23] = 0.9;pct3[24] = 0.89;
        pct3[25] = 0.89;
    
        pct97[0] = 1.29;pct97[1] = 1.28;pct97[2] = 1.27;pct97[3] = 1.26;pct97[4] = 1.25;
        pct97[5] = 1.24;pct97[6] = 1.24;pct97[7] = 1.23;pct97[8] = 1.22;pct97[9] = 1.21;
        pct97[10] = 1.2;pct97[11] = 1.19;pct97[12] = 1.18;pct97[13] = 1.18;pct97[14] = 1.17;
        pct97[15] = 1.17;pct97[16] = 1.16;pct97[17] = 1.15;pct97[18] = 1.14;pct97[19] = 1.13;
        pct97[20] = 1.12;pct97[21] = 1.11;pct97[22] = 1.1;pct97[23] = 1.09;pct97[24] = 1.08;
        pct97[25] = 1.08;
   
        let eg = the("semanas").value;
    
        if (eg < 15 || eg > 40) {
            $("#ccca").val('0');
            $("#cccaPctVal").val('0');
        }else {
            eg = eg - 15;
            eg = parseInt(eg);
            var uno= pct97[eg] - pct3[eg];
            var dos=ccca - pct3[eg];
            var resultado = parseInt(95 / (uno) * (dos) + 3);
            ajustarProgreso(resultado, "cccaPct");
            var pctCCCA = '';
            //truncador de Pct, sobre 100 o bajo 1
            if (resultado > 97){
                pctCCCA = '&gt; 97';
            }
            else if (resultado < 3){
                pctCCCA = '&lt; 3';
            }
            else{
                pctCCCA = resultado;
            }
            $('#cccaPctVal').val(pctCCCA);
            $("#cccaRango").val(pct3[eg] + ' - ' + pct97[eg]);
        }
    }
}

function informeGinecologico(){
    let informe = '<div class="container-fluid"><h4 class="page-header text-center">INFORME ECOGRÁFICO GINECOLÓGICO ALTERNATIVO</h4></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container-fluid" style="margin-top: 1rem;"> <p> <strong><em>Datos generales</em></strong> </p><table class="table table-borderless"> <tbody> <tr> <td class="p-0">Nombre de paciente:</td><td class="p-0">:PACIENTE</td><td class="p-0">Edad Materna:</td><td class="p-0">:EDADMATERNA años.</td></tr><tr> <td class="p-0">RUT (DNI):</td><td class="p-0">:IDPACIENTE</td><td class="p-0">Fecha de Exámen:</td><td class="p-0">:FEXAMEN</td></tr><tr> <td class="p-0">Ciudad de procedencia:</td><td class="p-0">:CIUDAD</td><td class="p-0">Lugar de control:</td><td class="p-0">:LCONTROL</td></tr></tbody> </table></div><div class="container-fluid"> <p> <strong><em>Antecedentes clínicos</em></strong> </p><table class="table table-borderless"> <tbody> <tr> <td class="w-50 p-0">FUR referida:</td><td class="p-0">:FUM</td></tr><tr> <td class="w-50 p-0">Días del ciclo mestrual:</td><td class="p-0">:DIACICLO días.</td></tr><tr> <td class="w-50 p-0">Motivo de exámen:</td><td class="p-0">:MOTIVO</td></tr></tbody> </table></div><div class="container-fluid"> <p> <strong><em>Descripción hallazgos ecográficos</em></strong> </p><table class="table table-borderless"> <tbody> <tr> <td>Cuerpo uterino:</td><td>:LINEA2</td></tr><tr> <td>Contenido endouterino (endometrio):</td><td>:LINEA3</td></tr><tr> <td>Anexo Derecho:</td><td>:LINEA6</td></tr><tr> <td>&nbsp;-&nbsp;Ovario Derecho:</td><td>:LINEA7</td></tr><tr> <td>Anexo Izquierdo:</td><td>:LINEA4</td></tr><tr> <td>&nbsp;-&nbsp;Ovario Izquierdo:</td><td>:LINEA5</td></tr><tr> <td>Espacio retro-uterino (Douglas):</td><td>:LINEA8</td></tr></tbody> </table></div><div class="container-fluid"> <p><strong>Comentarios y observaciones:</strong></p><p>:COMENTARIO</p></div><div class="container-fluid" style="margin-top: 7rem;"> <p style="text-align: right;" class="top40">Ecografista: <strong>:ECOGRAFISTA</strong></p><p style="margin-top: 2rem; border-top: 1px solid #000; width: 100% !important; display: block;">Fecha Informe: :DATEINFORME</p><span style="border-top: 1px solid #000; width: 100% !important; display: block;"></span> <p style="border-bottom: 0;"> Informe generado desde software crecimientofetal.cl, el objetivo de este es favorecer análisis preeliminar de los datos, la interpretación de los resultados de este informe, es responsabilidad fundamentalmente del profesional referente a exámen ecográfico. Profesional quien finalmente evaluará clínicamente la información contenida en este informe. </p></div>';

    let LINEA2 = the("utero.ginecologica").value;
    let LINEA3 = the("endometrio.ginecologica").value;
    let LINEA4 = the("anexo.izquierdo.ginecologica").value;
    let LINEA6 = the("anexo.derecho.ginecologica").value;
    let LINEA5 = the("ovario.izquierdo.ginecologica").value;
    let LINEA7 = the("ovario.derecho.ginecologica").value;
    let LINEA8 = the("douglas.ginecologica").value;
    let paciente = $( '#nombre-paciente').val();
    let idpaciente = $( '#id-paciente').val();
    let motivo = $( '#motivo-examen option:selected').text();
    let ecografista = $( '#ecografista option:selected').text();
    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();

    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();

    let comentario = the("comentario.ginecologica").value;
    comentario = (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : "";

    let patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
    let edadmaterna = $( "select[name='edad_materna']").val();
    let diaciclo = the("diaciclo").value;

    informe = informe.replace(/:PACIENTE/g, paciente);
    informe = informe.replace(/:IDPACIENTE/g, idpaciente);
    informe = informe.replace(/:MOTIVO/g, motivo);
    informe = informe.replace(/:ECOGRAFISTA/g, ecografista);
    informe = informe.replace(/:FUM/g, fur);
    informe = informe.replace(/:EDADMATERNA/g, edadmaterna);
    informe = informe.replace(/:FEXAMEN/g, fexamen);
    informe = informe.replace(/:LINEA1/g, fexamen);
    informe = informe.replace(/:LINEA2/g, LINEA2);
    informe = informe.replace(/:LINEA3/g, LINEA3);
    informe = informe.replace(/:LINEA4/g, LINEA4);
    informe = informe.replace(/:LINEA5/g, LINEA5);
    informe = informe.replace(/:LINEA6/g, LINEA6);
    informe = informe.replace(/:LINEA7/g, LINEA7);
    informe = informe.replace(/:LINEA8/g, LINEA8);
    informe = informe.replace(/:DIACICLO/g, diaciclo);
    informe = informe.replace(/:COMENTARIO/g, comentario);
    informe = informe.replace(/:DATEINFORME/g, dateInf);
    informe = informe.replace(/:PATOLOGIAOBSTETRICA/g, patologiaObstetrica);

    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();
    informe = informe.replace(":CIUDAD", CIUDAD);
    informe = informe.replace(":LCONTROL", LCONTROL);

    return informe;
}

//destruir
function modal(button){
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
        modal:'<div class="modal fade" tabindex="-1" role="dialog" id="'+id+'"><div class="modal-dialog modal-lg modal-dialog-scrollable" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="'+titulo+'">Modal title</h5></div><div class="modal-body" id="'+contenido+'"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal" id="cancelarmodal">Cancelar</button>'+ button_string+'</div></div></div></div>'
    }

    return resultado;
}

//crea id random para los modales
function uuidv4() {
    //genera un uuid
    let uid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )

    // genera infinitamente uuid mientras no comience con una letra
    if (isNaN(uid.charAt(0))){
        return uid
    }else{
        return uuidv4()
    }
}

function oldProgress(value){
    let step = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

    let result = "[";
    let footer = "]"

    step.forEach(element => {
        if (element < 50 || (element > 50 && element < 100)){
            if (value > element && value < (element +5) || (value == (element + 5) && value != 50 && value != 100)){
                result += "x";

            }else{
                result += "-";
            }

        }else if (element == 50){
            if (value >= element && value <= (element +5)){
                result += "x";
            }else{
                result += "|";
            }

        }else if (element == 100){
            result += footer;
        }
    })

    return result;
}

function the(id){
    return document.getElementById(id);
}

function setCursor(id) { 
    if (typeof the(id).createTextRange != "undefined") {
        the(id).focus({preventScroll:true});
        var range = the(id).createTextRange();
        range.collapse(false);
        range.select();
    }
}

function informeMorfologia(){
    InformeString = '<div class="container-fluid" style="margin-top: 3rem;"><h4 class="page-header text-center">Ecografía 22 - 24 semanas para evaluación de morfología fetal</h4></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container-fluid"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table> <p class="mb-0"> <strong>FUM: </strong>:FUR <br/> <strong>Ege: </strong>:EG semanas <br/> <strong>FPP: </strong>:FPP <br/> <strong>Cesárea previa:</strong> :ANTECESA </p></div><div class="container-fluid"> <p><strong style="color: #045dab;">BIOMETRÍA</strong></p><p> <strong>Actividad cardíaca:</strong> :ACTCAR , <strong>Movimientos fetales:</strong> :MOVFET , Embarazo: :EMB <br/> <strong>Presentación:</strong> :PRESENT , <strong>Dorso fetal:</strong> :DORSOFET <br/> <strong>Placenta</strong> Ubicación: :PLAUB , Placenta inserción: :PLAIN </p><table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Liquido amniótico</strong></td><td class="p-0">Medicion cualitativa: :BVMCUA .</td></tr><tr> <td class="p-0"></td><td class="p-0">Medicion semi cuantitativa, Bolsillo Vertical Mayor (BVM): :BVMMED mm</td></tr></tbody> </table></div>';

    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();
    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();
    let eg = the("semanas").value + "."+ the("dias").value;

    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();

    var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista\\.morfologia').val();
    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
    var edadmaterna = $( "select[name='edad_materna']").val();

    var ACTCAR = the("actividad.cardiaca.morfologia").value;
    var MOVFET = the("movimientos.fetales.morfologia").value;
    var EMB = the("embarazo.morfologica").value;
    var PRESENT = the("presentacion.morfologia").value;
    var DORSOFET = the("dorso.morfologia").value;
    var ANTECESA = the("antecedentes.cesarea.morfologia").value;
    var PLAUB = the("placenta.ubicacion.morfologia").value;
    var PLAIN = the("placenta.insercion.morfologia").value;
    var BVMCUA = the("liquido.cualitativo.morfologia").value;
    var BVMMED = the("liquido.semi.morfologia").value;

    if (the("ver.ila.morfologia").checked == true){
        InformeString += ' <tr> <td class="p-0"></td><td class="p-0">Medicion semi cuantitativa, Sumatoria de 4 cuadrantes (ILA): :ILA mm</td></tr>';
        var ILA = the("liquido.ila.suma.morfologia").value;
        InformeString = InformeString.replace(":ILA", ILA);
    }

    InformeString += ' </tbody> </table> <table class="table"> <tbody> <tr> <th style="color: #045dab;">A).- EVALUACIÓN BIOMETRÍA FETAL (mm)</th> <th style="text-align: center;">Valor observado</th> <th class="text-center" style="text-align: center;">Pct de Crecimiento</th> <th class="text-center" style="text-align: center;">Rango percentilar</th> </tr><tr> <td class="p-0 pl-3">DBP (Hadlock):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DBP</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DBPPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DBPRANGO</td></tr><tr> <td class="p-0 pl-3">DOF:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DOF</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DOFPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DOFRANGO</td></tr><tr> <td class="p-0 pl-3">CC (Hadlock):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CC</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CCPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CCRANGO</td></tr><tr> <td class="p-0 pl-3">CA (Hadlock):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CA</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CAPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CARANGO</td></tr><tr> <td class="p-0 pl-3">Femur (Hadlock):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:FEMUR</td><td class="p-0 pl-3 text-center" style="text-align: center;">:FEMURPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:FEMURRANGO</td></tr><tr> <td class="p-0 pl-3"><strong>Peso Fetal Estimado</strong> según fórmula de Hadlock (CC-CA-LF)</td><td class="p-0 pl-3 text-center" style="text-align: center;">:PFE</td><td class="p-0 pl-3 text-center" style="text-align: center;">:PFEPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:PFERANGO</td></tr><tr> <td class="p-0 pl-3">Humero (Jeanty):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:HUMERO</td><td class="p-0 pl-3 text-center" style="text-align: center;">:HUMEROPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:HUMERORANGO</td></tr><tr> <td class="p-0 pl-3">Índice Cefálico:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:INDCEF</td><td class="p-0 pl-3 text-center" style="text-align: center;"></td><td class="p-0 pl-3 text-center" style="text-align: center;"></td></tr><tr> <td class="p-0 pl-3">Transverso cerebeloso:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:TRANSCERE</td><td class="p-0 pl-3 text-center" style="text-align: center;">:TRANSCEREPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:TRANSCERERANGO</td></tr><tr> <td class="p-0 pl-3">Cisterna magna:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CISMAG</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CISMAGPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CISMAGRANGO</td></tr><tr> <td class="p-0 pl-3">&nbsp;</td><td class="p-0 pl-3 text-center">&nbsp;</td><td class="p-0 pl-3 text-center">&nbsp;</td><td class="p-0 pl-3 text-center">&nbsp;</td></tr><tr> <th class="p-0 pl-3" style="color: #045dab;">B).- FLUJOMETRÍA DE UTERINAS Y CERVIX</th> <th class="p-0 pl-3 text-center"></th> <th class="p-0 pl-3 text-center"></th> <th class="p-0 pl-3 text-center"></th> </tr><tr> <td class="p-0 pl-3">IP Arteria uterina derecha:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUD</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUDPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUDRANGO</td></tr><tr> <td class="p-0 pl-3">IP Arteria uterina izquierda:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUI</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUIPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUIRANGO</td></tr><tr> <td class="p-0 pl-3"><strong>IP Arteria uterinas promedio:</strong></td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUP</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUPPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUPRANGO</td></tr><tr> <td class="p-0 pl-3"><strong>Largo cervical (mm):</strong></td><td class="p-0 pl-3 text-center" style="text-align: center;">:LARCERV</td><td class="p-0 pl-3 text-center" style="text-align: center;">:LARCERVTXT</td><td class="p-0 pl-3 text-center" style="text-align: center;"></td></tr><tr> <td class="p-0 pl-3">&nbsp;</td><td class="p-0 pl-3">&nbsp;</td><td class="p-0 pl-3">&nbsp;</td><td class="p-0 pl-3">&nbsp;</td></tr><tr> <td class="p-0 pl-3" style="color: #045dab;">ADICIONAL DOPPLER FETAL</td><td class="p-0 pl-3 text-center"></td><td class="p-0 pl-3 text-center"></td><td class="p-0 pl-3 text-center"></td></tr><tr> <td class="p-0 pl-3">IP Arteria Umbilical:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AU</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AURANGO</td></tr><tr> <td class="p-0 pl-3">IP Arteria cerebral media:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CM</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CMPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CMRANGO</td></tr><tr> <td class="p-0 pl-3">IP Índice cerebro placentario:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:ICEREP</td><td class="p-0 pl-3 text-center" style="text-align: center;">:ICEREPPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:ICEREPRANGO</td></tr><tr> <td class="p-0 pl-3">Ductus venoso:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DUCV</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DUCVPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DUCVRANGO</td></tr><tr> <td class="p-0 pl-3">Peak sistólico de ACM, PSV (cm/s):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:PACM</td><td class="p-0 pl-3 text-center"></td><td class="p-0 pl-3 text-center"></td></tr></tbody></table><div class="newpage" pagebreak="true"></div>'
    var membrete = "<p>"+$("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />") + "</p>";
    InformeString += membrete;
    InformeString += '<div class="container-fluid" style="margin-top: 3rem;"><h4 class="page-header text-center">Ecografía 22 - 24 semanas para evaluación de morfología fetal</h4></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container-fluid"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table><p style="color: #045dab;margin-top:2rem"><strong>C).- EVALUACIÓN MORFOLOGÍA FETAL</strong></p><table class="table"> <tbody> <tr> <td class="p-0 pl-3" style="width: 360px;">Cerebro Ventrículo Lateral proximal: :CEREVLP mm</td><td class="p-0 pl-3">:CEREVLPTXT</td></tr><tr> <td class="p-0 pl-3">Cerebro Ventrículo Lateral distal: :CEREVLD mm</td><td class="p-0 pl-3">:CEREVLDTXT</td></tr><tr> <td class="p-0 pl-3">Cavum SP presente: :CAVUM</td><td class="p-0 pl-3">:CAVUMTXT</td></tr><tr> <td class="p-0 pl-3">Cuerpo calloso visible: :CCV</td><td class="p-0 pl-3">:CCVTXT</td></tr><tr> <td class="p-0 pl-3">Cuello normal: :CUELLO</td><td class="p-0 pl-3">:CUELLOTXT</td></tr><tr> <td class="p-0 pl-3">Labio nariz normal: :LNN</td><td class="p-0 pl-3">:LNNTXT</td></tr><tr> <td class="p-0 pl-3">Corazón 4 cámaras visible: :CORACV</td><td class="p-0 pl-3">:CORACVTXT</td></tr><tr> <td class="p-0 pl-3">Corazón Tracto de salida pulmonar normal: :CORATSPN</td><td class="p-0 pl-3">:CORATSPNTXT</td></tr><tr> <td class="p-0 pl-3">Corazón Tracto salida Aórtico normal: :CORATSAN</td><td class="p-0 pl-3">:CORATSANTXT</td></tr><tr> <td class="p-0 pl-3">Corazón 3 vasos tráquea visible: :CORAVTV</td><td class="p-0 pl-3">:CORAVTVTXT</td></tr><tr> <td class="p-0 pl-3">Tórax Normal: :TN</td><td class="p-0 pl-3">:TNTXT</td></tr><tr> <td class="p-0 pl-3">Abdomen: :ABDO</td><td class="p-0 pl-3">:ABDOTXT</td></tr><tr> <td class="p-0 pl-3">Pared normal: :PARNOR</td><td class="p-0 pl-3">:PARNORTXT</td></tr><tr> <td class="p-0 pl-3">Estómago visible: :ESTOV</td><td class="p-0 pl-3">:ESTOVTXT</td></tr><tr> <td class="p-0 pl-3">Riñones visibles: :RINOV</td><td class="p-0 pl-3">:RINOVTXT</td></tr><tr> <td class="p-0 pl-3">Vejiga visible: :VEJIV</td><td class="p-0 pl-3">:VEJIVTXT</td></tr><tr> <td class="p-0 pl-3">Columna normal: :COLUMN</td><td class="p-0 pl-3">:COLUMNTXT</td></tr><tr> <td class="p-0 pl-3">Extremidades superiores normales: :EXSUP</td><td class="p-0 pl-3">:EXSUPTXT</td></tr><tr> <td class="p-0 pl-3">Extremidades inferiores normales: :EXINF</td><td class="p-0 pl-3">:EXINFTXT</td></tr><tr> <td class="p-0 pl-3">Sexo fetal:</td><td class="p-0 pl-3">:GEN</td></tr></tbody></table> <p><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong></p><div class="container-fluid"><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><p><strong style="color: #045dab;">INDICACIONES (seguimiento)</strong>:</p><div class="container-fluid"><p style="max-width: 700px; text-align: justify;">:INDI</p></div><div class="container-fluid" style="margin-top: 5rem;"> <p class="text-right top40">Ecografista: <strong>:ECOGRAFISTA</strong></p><span style="border-top: 1px solid #000; width: 100% !important; display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000; width: 100% !important; display: block;"></span> <p style="border-bottom: 0;"></p></div></div>';

    var DBP = the("dbp.morfologia").value;
    var DBPPCT = the("dbp.pct.morfologia").value;
    var DBPRANGO = oldProgress(the("dbp.pct.real.morfologia").value);

    var DOF = the("dof.morfologia").value;
    var DOFPCT = the("dof.pct.morfologia").value;
    var DOFRANGO = oldProgress(the("dof.pct.real.morfologia").value);

    var CC = the("pc.morfologia").value;
    var CCPCT = the("pc.pct.morfologia").value;
    var CCRANGO = oldProgress(the("pc.pct.real.morfologia").value);

    var CA = the("pa.morfologia").value;
    var CAPCT = the("pa.pct.morfologia").value;
    var CARANGO = oldProgress(the("pa.pct.real.morfologia").value);

    var FEMUR = the("femur.morfologia").value;
    var FEMURPCT = the("femur.pct.morfologia").value;
    var FEMURRANGO = oldProgress(the("femur.pct.real.morfologia").value);

    var HUMERO = the("humero.morfologia").value;
    var HUMEROPCT = the("humero.pct.morfologia").value;
    var HUMERORANGO = oldProgress(the("humero.pct.real.morfologia").value);

    var INDCEF = the("dof.ic.morfologia").value;
    var TRANSCERE = the("tc.morfologia").value;
    var TRANSCEREPCT = the("tc.pct.morfologia").value;
    var TRANSCERERANGO = oldProgress(the("tc.pct.real.morfologia").value);

    var CISMAG = the("cm.morfologia").value;
    var CISMAGPCT = the("cm.pct.morfologia").value;
    var CISMAGRANGO = oldProgress(the("cm.pct.real.morfologia").value);

    var PFE = the("pfe.morfologia").value;
    var PFEPCT = the("pfe.pct.morfologia").value;
    var PFERANGO = oldProgress(the("pfe.pct.real.morfologia").value);

    var CEREVLP = the("vlp.morfologia").value;
    var CEREVLD = the("vld.morfologia").value;
    var CAVUM = document.querySelector('input[name="cspp.morfologia"]:checked').value;
    var CCV = document.querySelector('input[name="ccv.morfologia"]:checked').value;
    var CUELLO = document.querySelector('input[name="cn.morfologia"]:checked').value;
    var LNN = document.querySelector('input[name="lnn.morfologia"]:checked').value;
    var CORACV = document.querySelector('input[name="cv.morfologia"]:checked').value;
    var CORATSPN = document.querySelector('input[name="tspn.morfologia"]:checked').value;
    var CORATSAN = document.querySelector('input[name="tsan.morfologia"]:checked').value;
    var CORAVTV = document.querySelector('input[name="vtv.morfologia"]:checked').value;
    var TN = document.querySelector('input[name="tn.morfologia"]:checked').value;
    var ABDO = document.querySelector('input[name="abdo.morfologia"]:checked').value;
    var PARNOR = document.querySelector('input[name="pn.morfologia"]:checked').value;
    var ESTOV = document.querySelector('input[name="ev.morfologia"]:checked').value;
    var RINOV = document.querySelector('input[name="rv.morfologia"]:checked').value;
    var VEJIV = document.querySelector('input[name="vv.morfologia"]:checked').value;
    var COLUMN = document.querySelector('input[name="cn.morfologia"]:checked').value;
    var EXSUP = document.querySelector('input[name="esn.morfologia"]:checked').value;
    var EXINF = document.querySelector('input[name="ein.morfologia"]:checked').value;
    var GEN = the("gen.morfologia").value;

    var CEREVLPTXT = the("vlp.txt.morfologia").value;
    var CEREVLDTXT = the("vld.txt.morfologia").value;
    var CAVUMTXT = document.querySelector('input[name="cspp.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CCVTXT = document.querySelector('input[name="ccv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CUELLOTXT = document.querySelector('input[name="cn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var LNNTXT = document.querySelector('input[name="lnn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CORACVTXT = document.querySelector('input[name="cv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CORATSPNTXT = document.querySelector('input[name="tspn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CORATSANTXT = document.querySelector('input[name="tsan.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CORAVTVTXT = document.querySelector('input[name="vtv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var TNTXT = document.querySelector('input[name="tn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var ABDOTXT = document.querySelector('input[name="abdo.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var PARNORTXT = document.querySelector('input[name="pn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var ESTOVTXT = document.querySelector('input[name="ev.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var RINOVTXT = document.querySelector('input[name="rv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var VEJIVTXT = document.querySelector('input[name="vv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var COLUMNTXT = document.querySelector('input[name="cn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var EXSUPTXT = document.querySelector('input[name="esn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var EXINFTXT = document.querySelector('input[name="ein.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;

    var AUD = the("art.ut.d.morfologia").value;
    var AUDPCT = the("art.ut.d.pct.morfologia").value;
    var AUDRANGO = oldProgress(the("art.ut.d.pct.real.morfologia").value);

    var AUI = the("art.ut.i.morfologia").value;
    var AUIPCT = the("art.ut.i.pct.morfologia").value;
    var AUIRANGO = oldProgress(the("art.ut.i.pct.real.morfologia").value);

    var AUP = the("art.ut.prom.morfologia").value;
    var AUPPCT = the("art.ut.prom.pct.morfologia").value;
    var AUPRANGO = oldProgress(the("art.ut.prom.pct.real.morfologia").value);

    var AU = the("art.umb.morfologia").value;
    var AUPCT = the("art.umb.pct.morfologia").value;
    var AURANGO = oldProgress(the("art.umb.pct.real.morfologia").value);

    var CM = the("art.cm.morfologia").value;
    var CMPCT = the("art.cm.pct.morfologia").value;
    var CMRANGO = oldProgress(the("art.cm.pct.real.morfologia").value);

    var ICEREP = the("ind.cp.morfologia").value;
    var ICEREPPCT = the("ind.cp.pct.morfologia").value;
    var ICEREPRANGO = oldProgress(the("ind.cp.pct.real.morfologia").value);

    var PACM = the("p.sis.morfologia").value;

    var DUCV = the("dv.morfologia").value;
    var DUCVPCT = the("dv.pct.morfologia").value;
    var DUCVRANGO = oldProgress(the("dv.pct.real.morfologia").value);

    var LARCERV = the("lc.morfologia").value;
    var LARCERVTXT = the("lc.pct.morfologia").value;

    var INDI = the("seguimiento.morfologia").value;
    var COMENTARIO = the("biometria.comentario.morfologia").value +  "<br>" + the("conclusion.morfologia").value + "<br>" + the("morfologia.comentario.morfologia").value;

    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();

    InformeString = InformeString.replace(":FUR", fur);
    InformeString = InformeString.replace(":EG", eg);
    InformeString = InformeString.replace(":FPP", fpp);
    InformeString = InformeString.replace(":DATEINFORME", dateInf);

    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);

    InformeString = InformeString.replace(":PACIENTE", paciente);
    InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);
    InformeString = InformeString.replace(":FEXAMEN", fexamen);
    InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
    InformeString = InformeString.replace(":MOTIVO", motivo);
    InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
    InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);

    InformeString = InformeString.replace(":ACTCAR", ACTCAR);
    InformeString = InformeString.replace(":MOVFET", MOVFET);
    InformeString = InformeString.replace(":EMB", EMB);
    InformeString = InformeString.replace(":PRESENT", PRESENT);
    InformeString = InformeString.replace(":DORSOFET", DORSOFET);
    InformeString = InformeString.replace(":ANTECESA", ANTECESA);
    InformeString = InformeString.replace(":PLAUB", PLAUB);
    InformeString = InformeString.replace(":PLAIN", PLAIN);
    InformeString = InformeString.replace(":BVMCUA", BVMCUA);
    InformeString = InformeString.replace(":BVMMED", BVMMED);

    InformeString = InformeString.replace(":DBP", DBP);
    InformeString = InformeString.replace(":DBPPCT", DBPPCT);
    InformeString = InformeString.replace(":DBPRANGO", DBPRANGO);

    InformeString = InformeString.replace(":DOF", DOF);
    InformeString = InformeString.replace(":DOFPCT", DOFPCT);
    InformeString = InformeString.replace(":DOFRANGO", DOFRANGO);
    InformeString = InformeString.replace(":CC", CC);
    InformeString = InformeString.replace(":CCPCT", CCPCT);
    InformeString = InformeString.replace(":CCRANGO", CCRANGO);
    InformeString = InformeString.replace(":CA", CA);
    InformeString = InformeString.replace(":CAPCT", CAPCT);
    InformeString = InformeString.replace(":CARANGO", CARANGO);
    InformeString = InformeString.replace(":FEMUR", FEMUR);
    InformeString = InformeString.replace(":FEMURPCT", FEMURPCT);
    InformeString = InformeString.replace(":FEMURRANGO", FEMURRANGO);
    InformeString = InformeString.replace(":HUMERO", HUMERO);
    InformeString = InformeString.replace(":HUMEROPCT", HUMEROPCT);
    InformeString = InformeString.replace(":HUMERORANGO", HUMERORANGO);

    InformeString = InformeString.replace(":INDCEF", INDCEF);

    InformeString = InformeString.replace(":TRANSCERE", TRANSCERE);
    InformeString = InformeString.replace(":TRANSCEREPCT", TRANSCEREPCT);
    InformeString = InformeString.replace(":TRANSCERERANGO", TRANSCERERANGO);

    InformeString = InformeString.replace(":CISMAG", CISMAG);
    InformeString = InformeString.replace(":CISMAGPCT", CISMAGPCT);
    InformeString = InformeString.replace(":CISMAGRANGO", CISMAGRANGO);

    InformeString = InformeString.replace(":PFE", PFE);
    InformeString = InformeString.replace(":PFEPCT", PFEPCT);
    InformeString = InformeString.replace(":PFERANGO", PFERANGO);

    InformeString = InformeString.replace(":CEREVLP", CEREVLP);
    InformeString = InformeString.replace(":CEREVLD", CEREVLD);
    InformeString = InformeString.replace(":CAVUM", CAVUM);
    InformeString = InformeString.replace(":CCV", CCV);
    InformeString = InformeString.replace(":CUELLO", CUELLO);
    InformeString = InformeString.replace(":LNN", LNN);
    InformeString = InformeString.replace(":CORACV", CORACV);
    InformeString = InformeString.replace(":CORATSPN", CORATSPN);
    InformeString = InformeString.replace(":CORATSAN", CORATSAN);

    InformeString = InformeString.replace(":CORAVTV", CORAVTV);
    InformeString = InformeString.replace(":TN", TN);
    InformeString = InformeString.replace(":ABDO", ABDO);
    InformeString = InformeString.replace(":PARNOR", PARNOR);
    InformeString = InformeString.replace(":ESTOV", ESTOV);
    InformeString = InformeString.replace(":RINOV", RINOV);
    InformeString = InformeString.replace(":VEJIV", VEJIV);
    InformeString = InformeString.replace(":COLUMN", COLUMN);
    InformeString = InformeString.replace(":EXSUP", EXSUP);
    InformeString = InformeString.replace(":EXINF", EXINF);
    InformeString = InformeString.replace(":GEN", GEN);
    InformeString = InformeString.replace(":AUD", AUD);
    InformeString = InformeString.replace(":AUDPCT", AUDPCT);
    InformeString = InformeString.replace(":AUDRANGO", AUDRANGO);
    InformeString = InformeString.replace(":AUI", AUI);
    InformeString = InformeString.replace(":AUIPCT", AUIPCT);
    InformeString = InformeString.replace(":AUIRANGO", AUIRANGO);
    InformeString = InformeString.replace(":AUP", AUP);
    InformeString = InformeString.replace(":AUPPCT", AUPPCT);
    InformeString = InformeString.replace(":AUPRANGO", AUPRANGO);
    InformeString = InformeString.replace(":AU", AU);
    InformeString = InformeString.replace(":AUPCT", AUPCT);
    InformeString = InformeString.replace(":AURANGO", AURANGO);
    InformeString = InformeString.replace(":CM", CM);
    InformeString = InformeString.replace(":CMPCT", CMPCT);
    InformeString = InformeString.replace(":CMRANGO", CMRANGO);
    InformeString = InformeString.replace(":ICEREP", ICEREP);
    InformeString = InformeString.replace(":ICEREPPCT", ICEREPPCT);
    InformeString = InformeString.replace(":ICEREPRANGO", ICEREPRANGO);

    InformeString = InformeString.replace(":CEREVLPTXT", CEREVLPTXT);
    InformeString = InformeString.replace(":CEREVLDTXT", CEREVLDTXT);
    InformeString = InformeString.replace(":CAVUMTXT", CAVUMTXT);
    InformeString = InformeString.replace(":CCVTXT", CCVTXT);
    InformeString = InformeString.replace(":CUELLOTXT", CUELLOTXT);
    InformeString = InformeString.replace(":LNNTXT", LNNTXT);
    InformeString = InformeString.replace(":CORACVTXT", CORACVTXT);
    InformeString = InformeString.replace(":CORATSPNTXT", CORATSPNTXT);
    InformeString = InformeString.replace(":CORATSANTXT", CORATSANTXT);
    InformeString = InformeString.replace(":CORAVTVTXT", CORAVTVTXT);
    InformeString = InformeString.replace(":TNTXT", TNTXT);
    InformeString = InformeString.replace(":ABDOTXT", ABDOTXT);
    InformeString = InformeString.replace(":PARNORTXT", PARNORTXT);
    InformeString = InformeString.replace(":ESTOVTXT", ESTOVTXT);
    InformeString = InformeString.replace(":RINOVTXT", RINOVTXT);
    InformeString = InformeString.replace(":VEJIVTXT", VEJIVTXT);
    InformeString = InformeString.replace(":COLUMNTXT", COLUMNTXT);
    InformeString = InformeString.replace(":EXSUPTXT", EXSUPTXT);
    InformeString = InformeString.replace(":EXINFTXT", EXINFTXT);

    InformeString = InformeString.replace(":PACM", PACM);
    InformeString = InformeString.replace(":DUCV", DUCV);
    InformeString = InformeString.replace(":DUCVPCT", DUCVPCT);
    InformeString = InformeString.replace(":DUCVRANGO", DUCVRANGO);

    InformeString = InformeString.replace(":LARCERV", LARCERV);
    InformeString = InformeString.replace(":LARCERVTXT", LARCERVTXT);
    InformeString = InformeString.replace(":INDI", INDI);
    InformeString = InformeString.replace(":COMENTARIO", COMENTARIO);

    return InformeString;
}

function informeMorfologiaClon(){

    var membrete = "<p>"+$("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />") + "</p>";
    InformeString = membrete;
    InformeString += '<div class="container-fluid" style="margin-top: 3rem;"><h4 class="page-header text-center">Ecografía 22 - 24 semanas para evaluación de morfología fetal</h4></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container-fluid"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table> <p class="mb-0"> <strong>FUM: </strong>:FUR <br/> <strong>Ege: </strong>:EG semanas <br/> <strong>FPP: </strong>:FPP <br/> <strong>Cesárea previa:</strong> :ANTECESA </p></div><div class="container-fluid"> <p><strong style="color: #045dab;">BIOMETRÍA</strong></p><p> <strong>Actividad cardíaca:</strong> :ACTCAR , <strong>Movimientos fetales:</strong> :MOVFET , Embarazo: :EMB <br/> <strong>Presentación:</strong> :PRESENT , <strong>Dorso fetal:</strong> :DORSOFET <br/> <strong>Placenta</strong> Ubicación: :PLAUB , Placenta inserción: :PLAIN </p><table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Liquido amniótico</strong></td><td class="p-0">Medicion cualitativa: :BVMCUA .</td></tr><tr> <td class="p-0"></td><td class="p-0">Medicion semi cuantitativa, Bolsillo Vertical Mayor (BVM): :BVMMED mm</td></tr></tbody> </table></div>';

    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();
    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();
    let eg = the("semanas").value + "."+ the("dias").value;

    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();

    var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista\\.morfologia').val();
    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
    var edadmaterna = $( "select[name='edad_materna']").val();

    var ACTCAR = the("actividad.cardiaca.morfologia").value;
    var MOVFET = the("movimientos.fetales.morfologia").value;
    var EMB = the("embarazo.morfologica").value;
    var PRESENT = the("presentacion.morfologia").value;
    var DORSOFET = the("dorso.morfologia").value;
    var ANTECESA = the("antecedentes.cesarea.morfologia").value;
    var PLAUB = the("placenta.ubicacion.morfologia").value;
    var PLAIN = the("placenta.insercion.morfologia").value;
    var BVMCUA = the("liquido.cualitativo.morfologia").value;
    var BVMMED = the("liquido.semi.morfologia").value;

    if (the("ver.ila.morfologia").checked == true){
        InformeString += ' <tr> <td class="p-0"></td><td class="p-0">Medicion semi cuantitativa, Sumatoria de 4 cuadrantes (ILA): :ILA mm</td></tr>';
        var ILA = the("liquido.ila.suma.morfologia").value;
        InformeString = InformeString.replace(":ILA", ILA);
    }

    InformeString += ' </tbody> </table> <table class="table"> <tbody> <tr> <th style="color: #045dab;">EVALUACIÓN BIOMETRÍA FETAL (mm)</th> <th style="text-align: center;">Valor observado</th> <th class="text-center" style="text-align: center;">Pct de Crecimiento</th> <th class="text-center" style="text-align: center;">Rango percentilar</th> </tr><tr> <td class="p-0 pl-3">DBP (Hadlock):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DBP</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DBPPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DBPRANGO</td></tr><tr> <td class="p-0 pl-3">DOF:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DOF</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DOFPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DOFRANGO</td></tr><tr> <td class="p-0 pl-3">CC (Hadlock):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CC</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CCPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CCRANGO</td></tr><tr> <td class="p-0 pl-3">CA (Hadlock):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CA</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CAPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CARANGO</td></tr><tr> <td class="p-0 pl-3">Femur (Hadlock):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:FEMUR</td><td class="p-0 pl-3 text-center" style="text-align: center;">:FEMURPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:FEMURRANGO</td></tr><tr> <td class="p-0 pl-3"><strong>Peso Fetal Estimado</strong> según fórmula de Hadlock (CC-CA-LF)</td><td class="p-0 pl-3 text-center" style="text-align: center;">:PFE</td><td class="p-0 pl-3 text-center" style="text-align: center;">:PFEPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:PFERANGO</td></tr><tr> <td class="p-0 pl-3">Humero (Jeanty):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:HUMERO</td><td class="p-0 pl-3 text-center" style="text-align: center;">:HUMEROPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:HUMERORANGO</td></tr><tr> <td class="p-0 pl-3">Índice Cefálico:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:INDCEF</td><td class="p-0 pl-3 text-center" style="text-align: center;"></td><td class="p-0 pl-3 text-center" style="text-align: center;"></td></tr><tr> <td class="p-0 pl-3">Transverso cerebeloso:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:TRANSCERE</td><td class="p-0 pl-3 text-center" style="text-align: center;">:TRANSCEREPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:TRANSCERERANGO</td></tr><tr> <td class="p-0 pl-3">Cisterna magna:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CISMAG</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CISMAGPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CISMAGRANGO</td></tr><tr> <td class="p-0 pl-3">&nbsp;</td><td class="p-0 pl-3 text-center">&nbsp;</td><td class="p-0 pl-3 text-center">&nbsp;</td><td class="p-0 pl-3 text-center">&nbsp;</td></tr><tr> <th class="p-0 pl-3" style="color: #045dab;">FLUJOMETRÍA DE UTERINAS Y CERVIX</th> <th class="p-0 pl-3 text-center"></th> <th class="p-0 pl-3 text-center"></th> <th class="p-0 pl-3 text-center"></th> </tr><tr> <td class="p-0 pl-3">IP Arteria uterina derecha:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUD</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUDPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUDRANGO</td></tr><tr> <td class="p-0 pl-3">IP Arteria uterina izquierda:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUI</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUIPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUIRANGO</td></tr><tr> <td class="p-0 pl-3"><strong>IP Arteria uterinas promedio:</strong></td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUP</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUPPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUPRANGO</td></tr><tr> <td class="p-0 pl-3"><strong>Largo cervical (mm):</strong></td><td class="p-0 pl-3 text-center" style="text-align: center;">:LARCERV</td><td class="p-0 pl-3 text-center" style="text-align: center;">:LARCERVTXT</td><td class="p-0 pl-3 text-center" style="text-align: center;"></td></tr><tr> <td class="p-0 pl-3">&nbsp;</td><td class="p-0 pl-3">&nbsp;</td><td class="p-0 pl-3">&nbsp;</td><td class="p-0 pl-3">&nbsp;</td></tr><tr> <td class="p-0 pl-3" style="color: #045dab;">ADICIONAL DOPPLER FETAL</td><td class="p-0 pl-3 text-center"></td><td class="p-0 pl-3 text-center"></td><td class="p-0 pl-3 text-center"></td></tr><tr> <td class="p-0 pl-3">IP Arteria Umbilical:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AU</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AUPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:AURANGO</td></tr><tr> <td class="p-0 pl-3">IP Arteria cerebral media:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CM</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CMPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:CMRANGO</td></tr><tr> <td class="p-0 pl-3">IP Índice cerebro placentario:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:ICEREP</td><td class="p-0 pl-3 text-center" style="text-align: center;">:ICEREPPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:ICEREPRANGO</td></tr><tr> <td class="p-0 pl-3">Ductus venoso:</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DUCV</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DUCVPCT</td><td class="p-0 pl-3 text-center" style="text-align: center;">:DUCVRANGO</td></tr><tr> <td class="p-0 pl-3">Peak sistólico de ACM, PSV (cm/s):</td><td class="p-0 pl-3 text-center" style="text-align: center;">:PACM</td><td class="p-0 pl-3 text-center"></td><td class="p-0 pl-3 text-center"></td></tr></tbody></table><div class="newpage" pagebreak="true"></div>';
    InformeString += membrete;
    InformeString += '<p style="margin-top: 7rem;">&nbsp;</p><p style="margin-top: 5rem;">&nbsp;</p><p style="color: #045dab; margin-top: 5rem;"><strong>EVALUACIÓN MORFOLOGÍA FETAL</strong></p><table class="table"> <tbody> <tr> <td class="p-0 pl-3" style="width: 360px;">Cerebro Ventrículo Lateral proximal: :CEREVLP mm</td><td class="p-0 pl-3">:CEREVLPTXT</td></tr><tr> <td class="p-0 pl-3">Cerebro Ventrículo Lateral distal: :CEREVLD mm</td><td class="p-0 pl-3">:CEREVLDTXT</td></tr><tr> <td class="p-0 pl-3">Cavum SP presente: :CAVUM</td><td class="p-0 pl-3">:CAVUMTXT</td></tr><tr> <td class="p-0 pl-3">Cuerpo calloso visible: :CCV</td><td class="p-0 pl-3">:CCVTXT</td></tr><tr> <td class="p-0 pl-3">Cuello normal: :CUELLO</td><td class="p-0 pl-3">:CUELLOTXT</td></tr><tr> <td class="p-0 pl-3">Labio nariz normal: :LNN</td><td class="p-0 pl-3">:LNNTXT</td></tr><tr> <td class="p-0 pl-3">Corazón 4 cámaras visible: :CORACV</td><td class="p-0 pl-3">:CORACVTXT</td></tr><tr> <td class="p-0 pl-3">Corazón Tracto de salida pulmonar normal: :CORATSPN</td><td class="p-0 pl-3">:CORATSPNTXT</td></tr><tr> <td class="p-0 pl-3">Corazón Tracto salida Aórtico normal: :CORATSAN</td><td class="p-0 pl-3">:CORATSANTXT</td></tr><tr> <td class="p-0 pl-3">Corazón 3 vasos tráquea visible: :CORAVTV</td><td class="p-0 pl-3">:CORAVTVTXT</td></tr><tr> <td class="p-0 pl-3">Tórax Normal: :TN</td><td class="p-0 pl-3">:TNTXT</td></tr><tr> <td class="p-0 pl-3">Abdomen: :ABDO</td><td class="p-0 pl-3">:ABDOTXT</td></tr><tr> <td class="p-0 pl-3">Pared normal: :PARNOR</td><td class="p-0 pl-3">:PARNORTXT</td></tr><tr> <td class="p-0 pl-3">Estómago visible: :ESTOV</td><td class="p-0 pl-3">:ESTOVTXT</td></tr><tr> <td class="p-0 pl-3">Riñones visibles: :RINOV</td><td class="p-0 pl-3">:RINOVTXT</td></tr><tr> <td class="p-0 pl-3">Vejiga visible: :VEJIV</td><td class="p-0 pl-3">:VEJIVTXT</td></tr><tr> <td class="p-0 pl-3">Columna normal: :COLUMN</td><td class="p-0 pl-3">:COLUMNTXT</td></tr><tr> <td class="p-0 pl-3">Extremidades superiores normales: :EXSUP</td><td class="p-0 pl-3">:EXSUPTXT</td></tr><tr> <td class="p-0 pl-3">Extremidades inferiores normales: :EXINF</td><td class="p-0 pl-3">:EXINFTXT</td></tr><tr> <td class="p-0 pl-3">Sexo fetal:</td><td class="p-0 pl-3">:GEN</td></tr></tbody></table> <p><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong></p><div class="container-fluid"><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><p><strong style="color: #045dab;">INDICACIONES (seguimiento)</strong>:</p><div class="container-fluid"><p style="max-width: 700px; text-align: justify;">:INDI</p></div><div class="container-fluid" style="margin-top: 5rem;"> <p class="text-right top40">Ecografista: <strong>:ECOGRAFISTA</strong></p><span style="border-top: 1px solid #000; width: 100% !important; display: block; margin-top: 5rem;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000; width: 100% !important; display: block;"></span> <p style="border-bottom: 0;"></p></div></div>';

    var DBP = the("dbp.morfologia").value;
    var DBPPCT = the("dbp.pct.morfologia").value;
    var DBPRANGO = oldProgress(the("dbp.pct.real.morfologia").value);

    var DOF = the("dof.morfologia").value;
    var DOFPCT = the("dof.pct.morfologia").value;
    var DOFRANGO = oldProgress(the("dof.pct.real.morfologia").value);

    var CC = the("pc.morfologia").value;
    var CCPCT = the("pc.pct.morfologia").value;
    var CCRANGO = oldProgress(the("pc.pct.real.morfologia").value);

    var CA = the("pa.morfologia").value;
    var CAPCT = the("pa.pct.morfologia").value;
    var CARANGO = oldProgress(the("pa.pct.real.morfologia").value);

    var FEMUR = the("femur.morfologia").value;
    var FEMURPCT = the("femur.pct.morfologia").value;
    var FEMURRANGO = oldProgress(the("femur.pct.real.morfologia").value);

    var HUMERO = the("humero.morfologia").value;
    var HUMEROPCT = the("humero.pct.morfologia").value;
    var HUMERORANGO = oldProgress(the("humero.pct.real.morfologia").value);

    var INDCEF = the("dof.ic.morfologia").value;
    var TRANSCERE = the("tc.morfologia").value;
    var TRANSCEREPCT = the("tc.pct.morfologia").value;
    var TRANSCERERANGO = oldProgress(the("tc.pct.real.morfologia").value);

    var CISMAG = the("cm.morfologia").value;
    var CISMAGPCT = the("cm.pct.morfologia").value;
    var CISMAGRANGO = oldProgress(the("cm.pct.real.morfologia").value);

    var PFE = the("pfe.morfologia").value;
    var PFEPCT = the("pfe.pct.morfologia").value;
    var PFERANGO = oldProgress(the("pfe.pct.real.morfologia").value);

    var CEREVLP = the("vlp.morfologia").value;
    var CEREVLD = the("vld.morfologia").value;
    var CAVUM = document.querySelector('input[name="cspp.morfologia"]:checked').value;
    var CCV = document.querySelector('input[name="ccv.morfologia"]:checked').value;
    var CUELLO = document.querySelector('input[name="cn.morfologia"]:checked').value;
    var LNN = document.querySelector('input[name="lnn.morfologia"]:checked').value;
    var CORACV = document.querySelector('input[name="cv.morfologia"]:checked').value;
    var CORATSPN = document.querySelector('input[name="tspn.morfologia"]:checked').value;
    var CORATSAN = document.querySelector('input[name="tsan.morfologia"]:checked').value;
    var CORAVTV = document.querySelector('input[name="vtv.morfologia"]:checked').value;
    var TN = document.querySelector('input[name="tn.morfologia"]:checked').value;
    var ABDO = document.querySelector('input[name="abdo.morfologia"]:checked').value;
    var PARNOR = document.querySelector('input[name="pn.morfologia"]:checked').value;
    var ESTOV = document.querySelector('input[name="ev.morfologia"]:checked').value;
    var RINOV = document.querySelector('input[name="rv.morfologia"]:checked').value;
    var VEJIV = document.querySelector('input[name="vv.morfologia"]:checked').value;
    var COLUMN = document.querySelector('input[name="cn.morfologia"]:checked').value;
    var EXSUP = document.querySelector('input[name="esn.morfologia"]:checked').value;
    var EXINF = document.querySelector('input[name="ein.morfologia"]:checked').value;
    var GEN = the("gen.morfologia").value;

    var CEREVLPTXT = the("vlp.txt.morfologia").value;
    var CEREVLDTXT = the("vld.txt.morfologia").value;
    var CAVUMTXT = document.querySelector('input[name="cspp.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CCVTXT = document.querySelector('input[name="ccv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CUELLOTXT = document.querySelector('input[name="cn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var LNNTXT = document.querySelector('input[name="lnn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CORACVTXT = document.querySelector('input[name="cv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CORATSPNTXT = document.querySelector('input[name="tspn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CORATSANTXT = document.querySelector('input[name="tsan.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var CORAVTVTXT = document.querySelector('input[name="vtv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var TNTXT = document.querySelector('input[name="tn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var ABDOTXT = document.querySelector('input[name="abdo.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var PARNORTXT = document.querySelector('input[name="pn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var ESTOVTXT = document.querySelector('input[name="ev.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var RINOVTXT = document.querySelector('input[name="rv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var VEJIVTXT = document.querySelector('input[name="vv.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var COLUMNTXT = document.querySelector('input[name="cn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var EXSUPTXT = document.querySelector('input[name="esn.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;
    var EXINFTXT = document.querySelector('input[name="ein.morfologia"]:checked').parentElement.parentElement.parentElement.parentElement.children[2].children[0].value;

    var AUD = the("art.ut.d.morfologia").value;
    var AUDPCT = the("art.ut.d.pct.morfologia").value;
    var AUDRANGO = oldProgress(the("art.ut.d.pct.real.morfologia").value);

    var AUI = the("art.ut.i.morfologia").value;
    var AUIPCT = the("art.ut.i.pct.morfologia").value;
    var AUIRANGO = oldProgress(the("art.ut.i.pct.real.morfologia").value);

    var AUP = the("art.ut.prom.morfologia").value;
    var AUPPCT = the("art.ut.prom.pct.morfologia").value;
    var AUPRANGO = oldProgress(the("art.ut.prom.pct.real.morfologia").value);

    var AU = the("art.umb.morfologia").value;
    var AUPCT = the("art.umb.pct.morfologia").value;
    var AURANGO = oldProgress(the("art.umb.pct.real.morfologia").value);

    var CM = the("art.cm.morfologia").value;
    var CMPCT = the("art.cm.pct.morfologia").value;
    var CMRANGO = oldProgress(the("art.cm.pct.real.morfologia").value);

    var ICEREP = the("ind.cp.morfologia").value;
    var ICEREPPCT = the("ind.cp.pct.morfologia").value;
    var ICEREPRANGO = oldProgress(the("ind.cp.pct.real.morfologia").value);

    var PACM = the("p.sis.morfologia").value;

    var DUCV = the("dv.morfologia").value;
    var DUCVPCT = the("dv.pct.morfologia").value;
    var DUCVRANGO = oldProgress(the("dv.pct.real.morfologia").value);

    var LARCERV = the("lc.morfologia").value;
    var LARCERVTXT = the("lc.pct.morfologia").value;

    var INDI = the("seguimiento.morfologia").value;
    var COMENTARIO = the("biometria.comentario.morfologia").value +  "<br>" + the("conclusion.morfologia").value + "<br>" + the("morfologia.comentario.morfologia").value;

    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();

    InformeString = InformeString.replace(":FUR", fur);
    InformeString = InformeString.replace(":EG", eg);
    InformeString = InformeString.replace(":FPP", fpp);
    InformeString = InformeString.replace(":DATEINFORME", dateInf);

    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);

    InformeString = InformeString.replace(":PACIENTE", paciente);
    InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);
    InformeString = InformeString.replace(":FEXAMEN", fexamen);
    InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
    InformeString = InformeString.replace(":MOTIVO", motivo);
    InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
    InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);

    InformeString = InformeString.replace(":ACTCAR", ACTCAR);
    InformeString = InformeString.replace(":MOVFET", MOVFET);
    InformeString = InformeString.replace(":EMB", EMB);
    InformeString = InformeString.replace(":PRESENT", PRESENT);
    InformeString = InformeString.replace(":DORSOFET", DORSOFET);
    InformeString = InformeString.replace(":ANTECESA", ANTECESA);
    InformeString = InformeString.replace(":PLAUB", PLAUB);
    InformeString = InformeString.replace(":PLAIN", PLAIN);
    InformeString = InformeString.replace(":BVMCUA", BVMCUA);
    InformeString = InformeString.replace(":BVMMED", BVMMED);

    InformeString = InformeString.replace(":DBP", DBP);
    InformeString = InformeString.replace(":DBPPCT", DBPPCT);
    InformeString = InformeString.replace(":DBPRANGO", DBPRANGO);

    InformeString = InformeString.replace(":DOF", DOF);
    InformeString = InformeString.replace(":DOFPCT", DOFPCT);
    InformeString = InformeString.replace(":DOFRANGO", DOFRANGO);
    InformeString = InformeString.replace(":CC", CC);
    InformeString = InformeString.replace(":CCPCT", CCPCT);
    InformeString = InformeString.replace(":CCRANGO", CCRANGO);
    InformeString = InformeString.replace(":CA", CA);
    InformeString = InformeString.replace(":CAPCT", CAPCT);
    InformeString = InformeString.replace(":CARANGO", CARANGO);
    InformeString = InformeString.replace(":FEMUR", FEMUR);
    InformeString = InformeString.replace(":FEMURPCT", FEMURPCT);
    InformeString = InformeString.replace(":FEMURRANGO", FEMURRANGO);
    InformeString = InformeString.replace(":HUMERO", HUMERO);
    InformeString = InformeString.replace(":HUMEROPCT", HUMEROPCT);
    InformeString = InformeString.replace(":HUMERORANGO", HUMERORANGO);

    InformeString = InformeString.replace(":INDCEF", INDCEF);

    InformeString = InformeString.replace(":TRANSCERE", TRANSCERE);
    InformeString = InformeString.replace(":TRANSCEREPCT", TRANSCEREPCT);
    InformeString = InformeString.replace(":TRANSCERERANGO", TRANSCERERANGO);

    InformeString = InformeString.replace(":CISMAG", CISMAG);
    InformeString = InformeString.replace(":CISMAGPCT", CISMAGPCT);
    InformeString = InformeString.replace(":CISMAGRANGO", CISMAGRANGO);

    InformeString = InformeString.replace(":PFE", PFE);
    InformeString = InformeString.replace(":PFEPCT", PFEPCT);
    InformeString = InformeString.replace(":PFERANGO", PFERANGO);

    InformeString = InformeString.replace(":CEREVLP", CEREVLP);
    InformeString = InformeString.replace(":CEREVLD", CEREVLD);
    InformeString = InformeString.replace(":CAVUM", CAVUM);
    InformeString = InformeString.replace(":CCV", CCV);
    InformeString = InformeString.replace(":CUELLO", CUELLO);
    InformeString = InformeString.replace(":LNN", LNN);
    InformeString = InformeString.replace(":CORACV", CORACV);
    InformeString = InformeString.replace(":CORATSPN", CORATSPN);
    InformeString = InformeString.replace(":CORATSAN", CORATSAN);

    InformeString = InformeString.replace(":CORAVTV", CORAVTV);
    InformeString = InformeString.replace(":TN", TN);
    InformeString = InformeString.replace(":ABDO", ABDO);
    InformeString = InformeString.replace(":PARNOR", PARNOR);
    InformeString = InformeString.replace(":ESTOV", ESTOV);
    InformeString = InformeString.replace(":RINOV", RINOV);
    InformeString = InformeString.replace(":VEJIV", VEJIV);
    InformeString = InformeString.replace(":COLUMN", COLUMN);
    InformeString = InformeString.replace(":EXSUP", EXSUP);
    InformeString = InformeString.replace(":EXINF", EXINF);
    InformeString = InformeString.replace(":GEN", GEN);
    InformeString = InformeString.replace(":AUD", AUD);
    InformeString = InformeString.replace(":AUDPCT", AUDPCT);
    InformeString = InformeString.replace(":AUDRANGO", AUDRANGO);
    InformeString = InformeString.replace(":AUI", AUI);
    InformeString = InformeString.replace(":AUIPCT", AUIPCT);
    InformeString = InformeString.replace(":AUIRANGO", AUIRANGO);
    InformeString = InformeString.replace(":AUP", AUP);
    InformeString = InformeString.replace(":AUPPCT", AUPPCT);
    InformeString = InformeString.replace(":AUPRANGO", AUPRANGO);
    InformeString = InformeString.replace(":AU", AU);
    InformeString = InformeString.replace(":AUPCT", AUPCT);
    InformeString = InformeString.replace(":AURANGO", AURANGO);
    InformeString = InformeString.replace(":CM", CM);
    InformeString = InformeString.replace(":CMPCT", CMPCT);
    InformeString = InformeString.replace(":CMRANGO", CMRANGO);
    InformeString = InformeString.replace(":ICEREP", ICEREP);
    InformeString = InformeString.replace(":ICEREPPCT", ICEREPPCT);
    InformeString = InformeString.replace(":ICEREPRANGO", ICEREPRANGO);

    InformeString = InformeString.replace(":CEREVLPTXT", CEREVLPTXT);
    InformeString = InformeString.replace(":CEREVLDTXT", CEREVLDTXT);
    InformeString = InformeString.replace(":CAVUMTXT", CAVUMTXT);
    InformeString = InformeString.replace(":CCVTXT", CCVTXT);
    InformeString = InformeString.replace(":CUELLOTXT", CUELLOTXT);
    InformeString = InformeString.replace(":LNNTXT", LNNTXT);
    InformeString = InformeString.replace(":CORACVTXT", CORACVTXT);
    InformeString = InformeString.replace(":CORATSPNTXT", CORATSPNTXT);
    InformeString = InformeString.replace(":CORATSANTXT", CORATSANTXT);
    InformeString = InformeString.replace(":CORAVTVTXT", CORAVTVTXT);
    InformeString = InformeString.replace(":TNTXT", TNTXT);
    InformeString = InformeString.replace(":ABDOTXT", ABDOTXT);
    InformeString = InformeString.replace(":PARNORTXT", PARNORTXT);
    InformeString = InformeString.replace(":ESTOVTXT", ESTOVTXT);
    InformeString = InformeString.replace(":RINOVTXT", RINOVTXT);
    InformeString = InformeString.replace(":VEJIVTXT", VEJIVTXT);
    InformeString = InformeString.replace(":COLUMNTXT", COLUMNTXT);
    InformeString = InformeString.replace(":EXSUPTXT", EXSUPTXT);
    InformeString = InformeString.replace(":EXINFTXT", EXINFTXT);

    InformeString = InformeString.replace(":PACM", PACM);
    InformeString = InformeString.replace(":DUCV", DUCV);
    InformeString = InformeString.replace(":DUCVPCT", DUCVPCT);
    InformeString = InformeString.replace(":DUCVRANGO", DUCVRANGO);

    InformeString = InformeString.replace(":LARCERV", LARCERV);
    InformeString = InformeString.replace(":LARCERVTXT", LARCERVTXT);
    InformeString = InformeString.replace(":INDI", INDI);
    InformeString = InformeString.replace(":COMENTARIO", COMENTARIO);

    return InformeString;
}

function informeDoppler(){
    var InformeString = '<div class="container"><h3>Evaluación de flujometria doppler materno fetal</h3></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table><p> <strong>FUM: </strong> :FUM <br/> <strong>Ege: </strong> :EG semanas <br/> <strong>FPP: </strong> :FPP </p></div><div class="container"> <p><strong style="color: #045dab;">ANTECEDENTES</strong> <small>(Descripción general del feto y anexos ovulares)</small></p><p> Motivo del exámen: :MOTIVODOPPLER <br/> Antecedentes Obstétricos: :ANTECEDENTES <br/> Feto en Presentación: :PRESENTACION <br/> Motilidad Fetal: :MOTILIDAD <br/> Ubicación Placentaria: :UBICACION <br/> Líquido Amniótico***: :LIQUIDO <br/> Medida única de BVM***: :BVM </p></div><div class="container"> <table class="table"> <thead> <tr> <th style="color: #045dab;">FLUJOMETRIA DOPPLER</th> <th style="text-align: center;">IP Observado</th> <th style="text-align: center;">Percentiles de IP</th> <th style="text-align: center;">Rango percentilar</th> </tr></thead> <tbody> <tr> <td>Arteria Uterina Derecha*</td><td style="text-align: center;">:UD</td><td style="text-align: center;">:UDTXT</td><td style="text-align: center;">:UDRGO</td></tr><tr> <td>Arteria Uterina Izquierda*</td><td style="text-align: center;">:UI</td><td style="text-align: center;">:UITXT</td><td style="text-align: center;">:UIRGO</td></tr><tr> <td style="border-top: 1px dashed #045dab;">Promedio Arterias Uterinas*</td><td style="text-align: center; border-top: 1px dashed #045dab;">:UPROM</td><td style="text-align: center; border-top: 1px dashed #045dab;">:UPROMTXT</td><td style="text-align: center; border-top: 1px dashed #045dab;">:UPROMRGO</td></tr><tr> <td style="padding-top: 15px !important; border-top: 1px dashed #045dab;">Arteria Umbilical**</td><td style="text-align: center; padding-top: 15px !important; border-top: 1px dashed #045dab;">:AU</td><td style="text-align: center; padding-top: 15px !important; border-top: 1px dashed #045dab;">:AUTXT</td><td style="text-align: center; padding-top: 15px !important; border-top: 1px dashed #045dab;">:AURGO</td></tr><tr> <td style="padding-bottom: 15px !important;">Arteria Cerebral Media**</td><td style="text-align: center; padding-bottom: 15px !important;">:ACM</td><td style="text-align: center; padding-bottom: 15px !important;">:ACMTXT</td><td style="text-align: center; padding-bottom: 15px !important;">:ACMRGO</td></tr><tr> <td style="border-top: 1px dashed #045dab;">Cuociente Cerebro Placentario ( CCP )**</td><td style="text-align: center; border-top: 1px dashed #045dab;">:CCP</td><td style="text-align: center; border-top: 1px dashed #045dab;">:CCPTXT</td><td style="text-align: center; border-top: 1px dashed #045dab;">:CCPRGO</td></tr>';

    var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista option:selected').text();

    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();
    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();
    let eg = the("semanas").value + "."+ the("dias").value;

    var bvm = the("bvmDoppler").value;
    var comentario = the("comentarios-doppler").value;
    comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : comentario='';

    var motivoDoppler = the("motivo-doppler").value;
    var antecedentes = the("antecedentes-doppler").value;
    var motilidad = the("motilidad-doppler").value;
    var ubicacion = the("ubicacion-doppler").value;
    var liquido = the("liqAmnioDoppler").value;
    var ud = the("aud").value;
    var udTxt = the("audPctTxt").value;

    let tmpData = "";

    if (udTxt == "&gt; 95" || udTxt == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = udTxt;
    }
    var udRgo = oldProgress(tmpData);

    var ui = the("aui").value;
    var uiTxt = the("auiPctTxt").value;
    if (uiTxt == "&gt; 95" || uiTxt == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = uiTxt;
    }
    var uiRgo = oldProgress(tmpData);

    var uprom = '<strong>' + the("auprom").value + '</strong>';
    var upromTxt = '<strong>' + the("auPctTxt").value + '</strong>';
    if (the("auPctTxt").value == "&gt; 95" || the("auPctTxt").value == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = the("auPctTxt").value;
    }
    var upromRgo = oldProgress(tmpData);

    var au = the("ipau").value;
    var auTxt = the("ipauPctTxt").value;
    if (auTxt == "&gt; 95" || auTxt == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = +auTxt;
    }
    var auRgo = oldProgress(tmpData);

    var acm =the("ipacm").value;
    var acmTxt = the("ipacmPctTxt").value;
    if (acmTxt == "&gt; 95" || acmTxt == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = acmTxt;
    }
    var acmRgo = oldProgress(tmpData);

    var ccp = '<strong>' + the("ccp").value + '</strong>';
    var ccpTxt = '<strong>' + the("ccpPctTxt").value + '</strong>';
    if (the("ccpPctTxt").value == "&gt; 95" || the("ccpPctTxt").value == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = +the("ccpPctTxt").value;
    }
    var ccpRgo = oldProgress(tmpData);

    var presentacion = the("presentacion-doppler").value;
    var edadmaterna = $( "select[name='edad_materna']").val();
        
    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();

    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
    var dvp = the("dv").value;

    if (dvp != ""){
        var dvPctTxt = the("dvPctTxt").value;
        if (dvPctTxt == "&gt; 95" || dvPctTxt == "&lt; 5"){
            tmpData = 0;
        }else{
            tmpData = dvPctTxt;
        }
        var dvRngo = oldProgress(tmpData);

        InformeString += ' <tr> <td style="padding-top: 15px !important; border-top: 1px dashed #045dab;">Ductus Venoso</td><td style="padding-top: 15px !important; text-align: center; border-top: 1px dashed #045dab;">:DVP</td><td style="padding-top: 15px !important; text-align: center; border-top: 1px dashed #045dab;">:DVPTXT</td><td style="padding-top: 15px !important; text-align: center; border-top: 1px dashed #045dab;">:DVPRGO</td></tr>';
        InformeString = InformeString.replace(":DVP", dvp);
        InformeString = InformeString.replace(":DVPTXT", dvPctTxt);
        InformeString = InformeString.replace(":DVPRGO", dvRngo);
    }

    var psmACM = the("psmACM").value;

    if (psmACM != ""){
        InformeString += ' <tr> <td style="padding-top: 15px !important; border-top: 1px dashed #045dab;">Peak sistólico de ACM</td><td style="padding-top: 15px !important; text-align: center; border-top: 1px dashed #045dab;">:PSMACM</td><td style="padding-top: 15px !important; text-align: center; border-top: 1px dashed #045dab;"></td><td style="padding-top: 15px !important; text-align: center; border-top: 1px dashed #045dab;"></td></tr>';
        InformeString = InformeString.replace(":PSMACM", psmACM);
    }

    InformeString += '</tbody></table></div><div class="container"> <p style="padding-bottom: 0px; margin-bottom: 0px;"><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small></p><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><div class="container"> <p class="text-right top40" style="margin-right: 100px;">Ecografista: :ECOGRAFISTA</p><span style="border-top: 1px solid #000; width: 100% !important; display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000; width: 100% !important; display: block;"></span> <p class="pie-pagina"> * Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32 <br/> ** Referencia para Doppler de arteria umbilical, C Media y CCP; Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127 <br/> *** Referencia para Liq. Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000 </p><p><strong> El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </p></div>';

    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();

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
    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);
        
    return InformeString;
}

function informeDopplerClon(){
    var InformeString = '<div class="container"><h3>Evaluación de flujometria doppler materno fetal</h3></div><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr><tr> <td class="p-0"><strong>Ciudad de procedencia: </strong>:CIUDAD</td><td class="p-0"><strong>Lugar de control: </strong>:LCONTROL</td><td class="p-0"></td></tr></tbody> </table><p> <strong>FUM: </strong> :FUM <br/> <strong>Ege: </strong> :EG semanas <br/> <strong>FPP: </strong> :FPP </p></div><div class="container"> <p><strong style="color: #045dab;">ANTECEDENTES</strong> <small>(Descripción general del feto y anexos ovulares)</small></p><p> Motivo del exámen: :MOTIVODOPPLER <br/> Antecedentes Obstétricos: :ANTECEDENTES <br/> Feto en Presentación: :PRESENTACION <br/> Motilidad Fetal: :MOTILIDAD <br/> Ubicación Placentaria: :UBICACION <br/> Líquido Amniótico***: :LIQUIDO <br/> Medida única de BVM***: :BVM </p></div><div class="container"> <table class="table"> <thead> <tr> <th style="color: #045dab;">FLUJOMETRIA DOPPLER</th> <th style="text-align: center;">IP Observado</th> <th style="text-align: center;">Percentiles de IP</th> <th style="text-align: center;">Rango percentilar</th> </tr></thead> <tbody> <tr> <td>Arteria Uterina Derecha*</td><td style="text-align: center;">:UD</td><td style="text-align: center;">:UDTXT</td><td style="text-align: center;">:UDRGO</td></tr><tr> <td>Arteria Uterina Izquierda*</td><td style="text-align: center;">:UI</td><td style="text-align: center;">:UITXT</td><td style="text-align: center;">:UIRGO</td></tr><tr> <td>Promedio Arterias Uterinas*</td><td style="text-align: center;">:UPROM</td><td style="text-align: center;">:UPROMTXT</td><td style="text-align: center;">:UPROMRGO</td></tr><tr> <td>Arteria Umbilical**</td><td style="text-align: center;">:AU</td><td style="text-align: center;">:AUTXT</td><td style="text-align: center;">:AURGO</td></tr><tr> <td style="padding-bottom: 15px !important;">Arteria Cerebral Media**</td><td style="text-align: center; padding-bottom: 15px !important;">:ACM</td><td style="text-align: center; padding-bottom: 15px !important;">:ACMTXT</td><td style="text-align: center; padding-bottom: 15px !important;">:ACMRGO</td></tr><tr> <td>Cuociente Cerebro Placentario ( CCP )**</td><td style="text-align: center;">:CCP</td><td style="text-align: center;">:CCPTXT</td><td style="text-align: center;">:CCPRGO</td></tr>';

    var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista option:selected').text();

    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + " de "+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();
    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + " de "+ monthsES[fexamen.getUTCMonth()] + " " + fexamen.getFullYear();
    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + " de "+ monthsES[fpp.getUTCMonth()+1] + " " + fpp.getFullYear();
    let eg = the("semanas").value + "."+ the("dias").value;

    var bvm = the("bvmDoppler").value;
    var comentario = the("comentarios-doppler").value;
    comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : comentario='';

    var motivoDoppler = the("motivo-doppler").value;
    var antecedentes = the("antecedentes-doppler").value;
    var motilidad = the("motilidad-doppler").value;
    var ubicacion = the("ubicacion-doppler").value;
    var liquido = the("liqAmnioDoppler").value;
    var ud = the("aud").value;
    var udTxt = the("audPctTxt").value;

    let tmpData = "";

    if (udTxt == "&gt; 95" || udTxt == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = udTxt;
    }
    var udRgo = oldProgress(tmpData);

    var ui = the("aui").value;
    var uiTxt = the("auiPctTxt").value;
    if (uiTxt == "&gt; 95" || uiTxt == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = uiTxt;
    }
    var uiRgo = oldProgress(tmpData);

    var uprom = '<strong>' + the("auprom").value + '</strong>';
    var upromTxt = '<strong>' + the("auPctTxt").value + '</strong>';
    if (the("auPctTxt").value == "&gt; 95" || the("auPctTxt").value == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = the("auPctTxt").value;
    }
    var upromRgo = oldProgress(tmpData);

    var au = the("ipau").value;
    var auTxt = the("ipauPctTxt").value;
    if (auTxt == "&gt; 95" || auTxt == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = +auTxt;
    }
    var auRgo = oldProgress(tmpData);

    var acm =the("ipacm").value;
    var acmTxt = the("ipacmPctTxt").value;
    if (acmTxt == "&gt; 95" || acmTxt == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = acmTxt;
    }
    var acmRgo = oldProgress(tmpData);

    var ccp = '<strong>' + the("ccp").value + '</strong>';
    var ccpTxt = '<strong>' + the("ccpPctTxt").value + '</strong>';
    if (the("ccpPctTxt").value == "&gt; 95" || the("ccpPctTxt").value == "&lt; 5"){
        tmpData = 0;
    }else{
        tmpData = +the("ccpPctTxt").value;
    }
    var ccpRgo = oldProgress(tmpData);

    var presentacion = the("presentacion-doppler").value;
    var edadmaterna = $( "select[name='edad_materna']").val();
        
    dayHoy = new Date();
    let dateInf = daysES[dayHoy.getDay()] + ", " + dayHoy.getUTCDate() + " de "+ monthsES[dayHoy.getUTCMonth()] + " " + dayHoy.getFullYear();

    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
    var dvp = the("dv").value;

    if (dvp != ""){
        var dvPctTxt = the("dvPctTxt").value;
        if (dvPctTxt == "&gt; 95" || dvPctTxt == "&lt; 5"){
            tmpData = 0;
        }else{
            tmpData = dvPctTxt;
        }
        var dvRngo = oldProgress(tmpData);

        InformeString += ' <tr> <td>Ductus Venoso</td><td style="text-align: center;">:DVP</td><td style="text-align: center;">:DVPTXT</td><td style="text-align: center;">:DVPRGO</td></tr>';
        InformeString = InformeString.replace(":DVP", dvp);
        InformeString = InformeString.replace(":DVPTXT", dvPctTxt);
        InformeString = InformeString.replace(":DVPRGO", dvRngo);
    }

    var psmACM = the("psmACM").value;

    if (psmACM != ""){
        InformeString += ' <tr> <td>Peak sistólico de ACM</td><td style="text-align: center;">:PSMACM</td><td></td><td></td></tr>';
        InformeString = InformeString.replace(":PSMACM", psmACM);
    }

    InformeString += '</tbody></table></div><div class="container"> <p style="padding-bottom: 0px; margin-bottom: 0px;"><strong style="color: #045dab;">COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small></p><p style="max-width: 700px; text-align: justify;">:COMENTARIO</p></div><div class="container"> <p style="text-align:right;margin-top:1rem">Ecografista: :ECOGRAFISTA</p><span style="border-top: 1px solid #000; width: 100% !important; display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000; width: 100% !important; display: block;"></span> <p class="pie-pagina"> * Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32 <br/> ** Referencia para Doppler de arteria umbilical, C Media y CCP; Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127 <br/> *** Referencia para Liq. Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000 </p><p><strong> El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento. </strong> </p></div>';

    var CIUDAD =  $( '#ciudadpaciente option:selected').text();
    var LCONTROL =  $( '#lcontrolpaciente option:selected').text();

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
    InformeString = InformeString.replace(":CIUDAD", CIUDAD);
    InformeString = InformeString.replace(":LCONTROL", LCONTROL);
        
    return InformeString;
}

//crear modal si tiene licencia
function makeModalLicencia(){
    let _modal = modal();

    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "Exportar a ...";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-success", "text-white");

    _modal.email = uuidv4();
    _modal.imprimir = uuidv4();
    let _contenido = '<div class="row"><div class="col-6"><button type="button" id='+_modal.email+' class="btn btn-primary">Enviar por E-Mail</button></div><div class="col-6"><button type="button" id='+_modal.imprimir+' class="btn btn-primary">Ver Informe</button></div></div>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");

    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
    the(_modal.email).dataset.modal = _modal.id;
    the(_modal.imprimir).dataset.modal = _modal.id;

    return _modal;
}

//creador de modal enviar por email
function makeModalEmail(){
    let _modal = modal("Enviar");

    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "Seleccionar E-Mail";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-success", "text-white");

    var _correo = uuidv4();
    var _correoe = uuidv4();
    let _contenido = '<div class="row"> <div class="col-12"><div class="form-check"> <input class="form-check-input" type="radio" name="emalRadios" id="seleccionar" value="sel" checked> <label class="form-check-label" for="seleccionar"> Seleccionar E-Mail </label></div><div class="form-group"><select id="'+_correo+'" class="form-control"></select></div></div><div class="col-12"> <div class="form-check"> <input class="form-check-input" type="radio" name="emalRadios" id="escribir" value="esc" > <label class="form-check-label" for="escribir"> Escribir E-Mail </label></div><div class="form-group"><input id="'+_correoe+'" class="form-control  d-none" type="email"></div></div></div>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");

    the(_modal.button).dataset.email = _correo;
    the(_modal.button).dataset.emaile = _correoe;
    the("seleccionar").dataset.email = _correo;
    the("seleccionar").dataset.emaile = _correoe;
    the("escribir").dataset.email = _correo;
    the("escribir").dataset.emaile = _correoe;
    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });

    $("#seleccionar").on("change",function() {
        if (this.checked == true){
            the(this.dataset.email).classList.remove("d-none");
            the(this.dataset.emaile).classList.add("d-none");
        }
    });

    $("#escribir").on("change",function() {
        if (this.checked == true){
            the(this.dataset.email).classList.add("d-none");
            the(this.dataset.emaile).classList.remove("d-none");
        }
    }); 

    let configuracion = JSON.parse(localStorage["configuracion"]);
    if (configuracion.correos.length > 0) {
        for (var i = 0; i < configuracion.correos.length; i++) {
            let elemento = the(_correo);
            let opt = document.createElement('option');
            opt.appendChild( document.createTextNode(configuracion.correos[i][1] + ", " + configuracion.correos[i][0] + " - " + configuracion.correos[i][2]) );
            opt.value = configuracion.correos[i][3]; 
            elemento.appendChild(opt); 
        }
    }

    the(_modal.button).dataset.modal = _modal.id;

    return _modal;
}

function makeModalError(){
    let _modal = modal();
            
    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "ERROR";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    let _contenido = '<p class="text-center">Sin conexión a internet<br>No es posible enviar el informe</p>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");

    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
}

function verifyEmailSend(_this,data){
    if (the("seleccionar").checked == true){
        //verificar si escribió emails en configuración
        if (the(_this.dataset.email).options.length == 0){
            makeModalNoEMailSelected();
        } else{
            data.append("email" , the(_this.dataset.email).value);
        }
    }else{
        //verificar si escribió un correo electrónico

        if (the(_this.dataset.emaile).value == ""){
            makeModalNoEMail();
        }else{
            data.append("email" , the(_this.dataset.emaile).value); 
        }
    }
}

function makeModalNoEMail(){
    let _modal = modal();
            
    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "ERROR";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    let _contenido = '<p class="text-center">No ha escrito un correo electrónico</p>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");

    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
}

function makeModalNoEMailSelected(){
    let _modal = modal();
            
    document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', _modal.modal);
    the(_modal.titulo).innerHTML = "ERROR";
    the(_modal.titulo).classList.add("mx-auto");
    the(_modal.titulo).parentElement.classList.add("bg-danger", "text-white");

    let _contenido = '<p class="text-center">No ha seleccionado un correo electrónico</p><p class="text-center"><strong>Agregue un correo electrónico en configuración</strong></p>'

    the(_modal.contenido).innerHTML = _contenido;
    the(_modal.id).children[0].classList.remove("modal-lg");

    $('#'+_modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
}

function bvmTxt(valor){
    'use strict';
    let eg = +the("semanas").value;

	let a = [], b = [];
    a[0]=23; a[1]=25; a[2]=27; a[3]=28; a[4]=29; a[5]=29; a[6]=30; a[7]=30; a[8]=30; a[9]=30; a[10]=30; a[11]=30; a[12]=30; a[13]=29; a[14]=29; a[15]=29; a[16]=29; a[17]=29; a[18]=28; a[19]=28; a[20]=27; a[21]=26; a[22]=24; a[23]=23; a[24]=21;
    b[0]=59; b[1]=62; b[2]=64; b[3]=66; b[4]=67; b[5]=68; b[6]=68; b[7]=68; b[8]=68; b[9]=68; b[10]=68; b[11]=69; b[12]=69; b[13]=69; b[14]=69; b[15]=70; b[16]=71; b[17]=72; b[18]=72; b[19]=72; b[20]=71; b[21]=70; b[22]=68; b[23]=66; b[24]=62;

    if (eg > 15 || eg < 41){
        eg = eg - 16;

        if (valor < a[eg]) {
            return "disminuido";
        } else if (valor > b[eg]){
            return "aumentado"
        } else{
            return "normal"
        }
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function modalEcoSegTrimInforme(){
    if (the("licencia").parentElement.classList.contains("active")){
        let licencia = makeModalLicencia();

        $('#'+licencia.email).on("click", function(){
            let email = makeModalEmail();

            the(email.button).dataset.parentmodal = this.dataset.modal;

            $('#'+email.button).on("click", function(){
                var InformeString = crearInformeEcoSegTrim2Clon();

                var data = new FormData();
                data.append("licencia" , the("licencia").value);
                data.append("informe" , 2);
                data.append("data" , InformeString);
                var membrete = "<p>"+$("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />") + "</p>";
                data.append("header" , membrete);
                verifyEmailSend(this,data);
                if (data.get("email") == null){return false}

                fetch('https://servidor.crecimientofetal.cl/crecimiento/informe', {method: 'POST',body: data, mode: 'cors'}).then(function(response) {
                    //console.log(response);
                    //response.blob().then((successMessage) => {
                    //    var link = document.createElement('a');
                    //    link.href = window.URL.createObjectURL(successMessage);
                    //    link.download = "document.pdf";
                    //    link.click();
                    //});
                }).catch(function(error) {
                    makeModalError();
                });

                $('#'+this.dataset.modal).modal('hide');
                $('#'+this.dataset.parentmodal).modal('hide');
            });
        });

        $('#'+licencia.imprimir).on("click", function(){
            imprInforme(crearInformeEcoSegTrim2());
            $('#'+this.dataset.modal).modal('hide');
        });

    } else {
        imprInforme(crearInformeEcoSegTrim2());
    }
}