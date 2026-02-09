import { the, inputDate, these, humanDate } from '../wetrust.js'
var daysES = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var monthsES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var dayHoy = new Date();

export function InfEcoObsSegTrim1(){
    var actCard;
    var movCorp;

    let elem = document.getElementsByName('accard');
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
    var linea2 = "";

    if (the("fcf").value == "no se observa"){
        linea2 = "Frecuencia cardiaca fetal no se observa";
    }else if (the("fcf").value == "(+) inicial"){
        linea2 = "Frecuencia cardiaca fetal (+) inicial ";
    }else{
        linea2 = "Frecuencia cardiaca fetal de " + the("fcf").value + " x minuto.";
    }

    if (the("fcf").value == "no se observa"){
        linea2 = "Frecuencia cardiaca fetal no se observa";
    }else if (the("fcf").value == "(+) inicial"){
        linea2 = "Frecuencia cardiaca fetal (+) inicial ";
    }else{
        linea2 = "Frecuencia cardiaca fetal de " + the("fcf").value + " x minuto.";
    }

    var anatomiaFetal = $('#ev-morfo').val();
    var textoExtra = ""
    if (the("ev-morfo").value = "Descripcion general detallando distintos segmentos, "){
        textoExtra = "***"
    }
    var linea3 = '<strong>Anatomía fetal '+textoExtra+'</strong>  ' + anatomiaFetal + $('#comentarios-anatomia-informe-eg-texto').val();

    if (anatomiaFetal == "no evaluada dirigidamente, pero de aspecto morfológico general normal"){
        linea3 += "<br>sexo fetal " + $("#ecografia\\.segtrim\\.sexo").val() + ".";
    }else{
        linea3 += " <br>";
    }

    var linea4 = '<strong>Placenta</strong> de ubicación ' + the("ubicacion").value + ', ' + the("incersion").value + '. Cordón umbilical ' + the("cordon").value + ', identificandose '+ the("vasos").value +' vasos.';
    var linea6 = '<strong>Líquido amniótico **</strong>' + $('#liq-cualitativo-eco').val() + ', con bolsillo vertical mayor de ' + the("bvm").value + ' mm';

    if (the("liquido.ila.suma").value != ""){
        linea6 += ' e ILA de '+ the("liquido.ila.suma").value + ' mm'
    }else{
        linea6 += '.' 
    }

    let fur = new Date(Date.parse(the("fum").value));
    fur = fur.getUTCDate() + ' de '+ monthsES[fur.getUTCMonth()] + " " + fur.getFullYear();

    let fexamen = new Date(Date.parse(the("fee").value));
    fexamen = fexamen.getUTCDate() + ' de '+ monthsES[fexamen.getUTCMonth()] + ' ' + fexamen.getFullYear();

    let fpp = new Date(Date.parse(the("fpp").value));
    fpp = fpp.getUTCDate() + ' de '+ monthsES[fpp.getUTCMonth()] + ' ' + fpp.getFullYear();
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


    var lh = the("lh").value + ' mm';
    var lhPct = the("lhPctRpt").value;
    if (lhPct == "&gt; 97" || caPct == "&lt; 3"){
        tmpData = 0;
    }else{
        tmpData = lhPct;
    }
    var lhRango = oldProgress(tmpData);

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

    var patologiaObstetrica = the("patologiaObstetricaUno").value;

    var paciente = the("nombre-paciente").value;
    var idpaciente = the("id-paciente").value;
    var motivo = the("motivo-examen").value;
    var ecografista = the("ecografista").value;

    var comentario = the("comentarios-eco-dos-inf-dos").value;
    comentario =  (typeof comentario !== 'undefined') ? comentario.replace(/\r?\n/g, "<br>") : comentario='';

    var edadmaterna = these("edad_materna")[0].value;

    var InformeString = '<h3 class="text-center">Evaluación ecográfica del crecimiento fetal</h3><span style="border-top: 1px solid #000; width: 100% !important; display: block; border-bottom: 2px solid #000; padding-top: 2px; margin-bottom: 15px;"></span><div class="container"> <table class="table table-borderless"> <tbody> <tr> <td class="p-0"><strong>Nombre: </strong>:PACIENTE</td><td class="p-0"><strong>Edad Materna: </strong>:EDADMATERNA años.</td><td class="p-0"><strong>Fecha de Exámen: </strong>:FEXAMEN</td></tr><tr> <td class="p-0"><strong>ID Paciente: </strong>:IDPACIENTE</td><td class="p-0"><strong>Motivo de exámen: </strong>:MOTIVO</td><td class="p-0"><strong>Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</td></tr></tbody> </table> <p> <strong>FUM: </strong>:FUR <br/> <strong>Ege: </strong>:EG semanas <br/> <strong>FPP: </strong>:FPP <br/> <strong>Cesárea previa: </strong>:CESAPREV </p></div><div class="container"> <p style="margin-bottom: 0;"> <strong style="color: #045dab;">DESCRIPCIÓN</strong><br/> :LINEA1 <br/> :LINEA2 </p><p style="margin-bottom: 0; word-wrap: break-word;">:LINEA3</p><p> :LINEA4 <br/> :LINEA6 </p><p></p><p></p></div><div class="container"> <table class="table"> <tbody> <tr> <th style="color: #045dab;">BIOMETRÍA FETAL</th> <th style="text-align: center;">Valor observado</th> <th style="text-align: center;">Pct de Crecimiento</th> <th style="text-align: center;">Rango percentilar</th> </tr><tr> <td>DBP (Hadlock):</td><td style="text-align: center;">:DBP</td><td style="text-align: center;">:DBPPCT</td><td style="text-align: center;">:DBPRANGO</td></tr><tr> <td>CC (Hadlock):</td><td style="text-align: center;">:CC</td><td style="text-align: center;">:CCPCT</td><td style="text-align: center;">:CCRANGO</td></tr><tr> <td>CA (Hadlock):</td><td style="text-align: center;">:CA</td><td style="text-align: center;">:CAPCT</td><td style="text-align: center;">:CARANGO</td></tr><tr> <td style="padding-bottom: 15px !important;">LF (Hadlock):</td><td style="text-align: center; padding-bottom: 15px !important;">:LF</td><td style="text-align: center; padding-bottom: 15px !important;">:LFPCT</td><td style="text-align: center; padding-bottom: 15px !important;">:LFRANGO</td></tr><tr> <td>LH (Jeanty)</td><td style="text-align:center;">:LH</td><td class="text-center" style="border-top:1px dashed #045dab;">:LHPCT</td><td class="text-center" style="border-top:1px dashed #045dab;">:LHRANGO</td></tr><tr> <td style="border-top: 1px dashed #045dab;"><strong>Peso Fetal Estimado</strong> según fórmula de Hadlock 3 (CC-CA-LF)</td><td style="text-align: center; border-top: 1px dashed #045dab;">:PFE</td><td style="text-align: center; border-top: 1px dashed #045dab;">:PFEPCT</td><td style="text-align: center; border-top: 1px dashed #045dab;">:PFERANGO</td></tr><tr> <td style="border-top: 1px dashed #045dab;">Relación CC / CA (Hadlock)</td><td style="text-align: center; border-top: 1px dashed #045dab; text">:CCCA</td><td style="text-align: center; border-top: 1px dashed #045dab;">:CCCAPCTVAL</td><td style="text-align: center; border-top: 1px dashed #045dab;">:CCCARANGO</td></tr>';
    var CESAPREV = $('#grado-placenta').val();
    InformeString = InformeString.replace(":CESAPREV", CESAPREV);
    var contadorOpcional = 0;
    if ($("#largo\\.cervical\\.segundo").val() != "" && $("#largo\\.cervical\\.segundo").val() != "0"){

        InformeString += '<tr> <td><strong>Largo Cervical</strong></td><td style="text-align:center;">:LARGCERV mm</td><td class="text-center" style="border-top:1px dashed #045dab;"></td><td class="text-center" style="border-top:1px dashed #045dab;">:LARGCERVTXT</td></tr>';

        InformeString = InformeString.replace(":LARGCERV", $("#largo\\.cervical\\.segundo").val());
        InformeString = InformeString.replace(":LARGCERVTXT", the("info.cervix").children[0].innerHTML);
        contadorOpcional++;

        if ($("#respuesta_uterina_promedio").val()){
            InformeString += '<tr> <td><strong>IP Promedio Arterias Uterinas</strong></td><td style="text-align:center;">:ARTUT</td><td class="text-center" style="border-top:1px dashed #045dab;">:ARTUTPCTVAL</td><td class="text-center" style="border-top:1px dashed #045dab;">:ARTUTRANGO</td></tr>';

            InformeString = InformeString.replace(":ARTUT", $("#respuesta_uterina_promedio").val());
            InformeString = InformeString.replace(":ARTUTPCTVAL", $("#respuesta_uterina_promedio_percentil").html());

            let pctUT = $("#respuesta_uterina_promedio_percentil").html();

            if (pctUT == "&gt; 95" || pctUT == "&lt; 5"){
                tmpData = 0;
            }else{
                tmpData = +pctUT;
            }
            var ARTUTRANGO = oldProgress(tmpData);

            InformeString = InformeString.replace(":ARTUTRANGO", ARTUTRANGO);
        }

        contadorOpcional++;
    }

    if (contadorOpcional == 1){
        InformeString += '<tr> <td></td><td></td><td></td><td></td>';
    }

    InformeString += '</tbody> </table></div><div class="container"> <p style="margin-bottom;0px;padding-bottom:0px;margin-bottom:0px;"><strong style="color:#045dab;">COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small> </p><p style="max-width: 700px;text-align: justify;margin-top:0px;padding-top:0px;margin-bottom:0px">:COMENTARIO</p></div><div class="container"> <p class="text-right" style="margin-right:100px;margin-top:2rem;text-align: right;">Ecografista: <strong>:ECOGRAFISTA</strong> </p><span style="border-top: 1px solid #000;width: 100% !important;display: block;"></span> <p>Fecha Informe: :DATEINFORME</p><span style="border-top: 2px solid #000;width: 100% !important;display: block;"></span> <p style="margin-bottom:0;" class="pie-pagina">* Tablas de crecimiento fetal Organización Mundial de la Salud: https://www.ajog.org/article/S0002-9378%2817%2932485-7/fulltext. <br>** Referencia medición líquido amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000</p><p style="margin-bottom:0 !important;">';
    
    if (the("ev-morfo").value = "Descripcion general detallando distintos segmentos, "){ InformeString += "*** Referencia, Guías Perinatales 2015: MINSAL-Chile<br>" }

    InformeString += '<strong>El software tiene por objetivo favorecer análisis preliminar de datos obtenidos en exámen ecográfico, la interpretación clínica de los mismos, inicialmente es responsabilidad exclusiva de quien realiza y certifica este documento.</strong> </p>'

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
    InformeString = InformeString.replace(":LH", lh);
    InformeString = InformeString.replace(":LHPCT", lhPct);
    InformeString = InformeString.replace(":LHRANGO", lhRango);
    InformeString = InformeString.replace(":PFE", pfe);
    InformeString = InformeString.replace(":PFEPCT", pfePct);
    InformeString = InformeString.replace(":PFERANGO", pfeRango);

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

    return InformeString;
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