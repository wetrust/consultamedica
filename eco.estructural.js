import { the, these } from "./wetrust.js";

the("liquido.semi.ecoEstructural").onkeyup = function(){
    let suma = this.value
    if (suma > 999){ e.preventDefault() }

    let txt = (isNumeric(this.value) == true) ? bvmTxt(this.value) : "normal";
    the("liquido.cualitativo.ecoEstructural").value = txt;

    let a = [], b = [];
    a[0]=23; a[1]=25; a[2]=27; a[3]=28; a[4]=29; a[5]=29; a[6]=30; a[7]=30; a[8]=30; a[9]=30; a[10]=30; a[11]=30; a[12]=30; a[13]=29; a[14]=29; a[15]=29; a[16]=29; a[17]=29; a[18]=28; a[19]=28; a[20]=27; a[21]=26; a[22]=24; a[23]=23; a[24]=21;
    b[0]=59; b[1]=62; b[2]=64; b[3]=66; b[4]=67; b[5]=68; b[6]=68; b[7]=68; b[8]=68; b[9]=68; b[10]=68; b[11]=69; b[12]=69; b[13]=69; b[14]=69; b[15]=70; b[16]=71; b[17]=72; b[18]=72; b[19]=72; b[20]=71; b[21]=70; b[22]=68; b[23]=66; b[24]=62;

    let eg = Number(the("semanas").value);
    let bvm = parseInt(this.value);
    if (eg > 15 || eg < 41){

        eg = eg - 16;
        eg = parseInt(eg);
        var uno = b[eg] - a[eg];
        var dos = bvm - a[eg];
        var resultado = parseInt(90 / (uno) * (dos) + 5);
        the("liquido.semi.pct.ecoEstructural").value = resultado;
        ajustarProgreso(resultado, "bvmMorfologia.ecoEstructural");

    }else{
        the("liquido.semi.pct.ecoEstructural").value = ""
        ajustarProgreso(0, "bvmMorfologia.ecoEstructural");
    }
}


the("dbp.ecoEstructural").onkeyup = function(){
    'use strict';
    let a = [], b = [];

    a[0]=14;a[1]=17;a[2]=19;a[3]=25;a[4]=29;a[5]=33;a[6]=34;a[7]=38;a[8]=41;a[9]=43;a[10]=46;a[11]=49;a[12]=52;a[13]=54;a[14]=57;a[15]=61;a[16]=63;a[17]=65;a[18]=69;a[19]=69;a[20]=74;a[21]=74;a[22]=77;a[23]=78;a[24]=78;a[25]=81;a[26]=85;a[27]=88;a[28]=88;
    b[0]=25;b[1]=29;b[2]=33;b[3]=35;b[4]=41;b[5]=42;b[6]=46;b[7]=50;b[8]=52;b[9]=56;b[10]=59;b[11]=63;b[12]=66;b[13]=70;b[14]=71;b[15]=75;b[16]=77;b[17]=81;b[18]=83;b[19]=87;b[20]=88;b[21]=91;b[22]=94;b[23]=95;b[24]=97;b[25]=99;b[26]=97;b[27]=106;b[28]=106;

    let eg = the("semanas").value;
    let dbp = this.value;
    let dof = the("dof.ecoEstructural").value;
        
    dbp = dbp.toString();
    dbp = dbp.replace(",", ".");
    dbp = parseFloat(dbp);
    
    if (eg < 12 || eg > 40){
        the("dbp.pct.ecoEstructural").value
    } else {
        eg = eg - 12;
        eg = parseInt(eg);

        var uno = b[eg] - a[eg];
        var dos = dbp - a[eg];
        var resultado = (parseInt(95 / (uno) * (dos) + 3));
        ajustarProgreso(resultado, "dbpEcoEstructural");
        var pctDBP = '';
        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 99){
            pctDBP = '> 99';
        }
        else if (resultado < 1){
            pctDBP = '< 1';
        }
        else{
            pctDBP = resultado;
        }
        
        the("dbp.pct.ecoEstructural").value = pctDBP
    }
        
    if (dbp > 0 && dof > 0){
        var valor = ((dbp/dof)*100);
        the("dof.ic.ecoEstructural").value = valor.toFixed(0) + "%";
    }
    else{
        the("dof.ic.ecoEstructural").value = "";
    }
}

the("pc.ecoEstructural").onkeyup = function(){

    /* 3 97 */
    'use strict';
    let a = [], b = [];
    a[0]=64;a[1]=74;a[2]=88;a[3]=100;a[4]=113;a[5]=126; a[6]=137;a[7]=149;a[8]=161;a[9]=172;a[10]=183; a[11]=194;a[12]=204;a[13]=214;a[14]=224;a[15]=233; a[16]=242;a[17]=250;a[18]=258;a[19]=267;a[20]=274; a[21]=280;a[22]=287;a[23]=293;a[24]=299;a[25]=303; a[26]=308;a[27]=311;a[28]=315;
    b[0]=81;b[1]=94;b[2]=106;b[3]=120;b[4]=135; b[5]=150;b[6]=165;b[7]=179;b[8]=193;b[9]=206; b[10]=219;b[11]=232;b[12]=243;b[13]=256;b[14]=268; b[15]=279;b[16]=290;b[17]=300;b[18]=310;b[19]=319; b[20]=328;b[21]=336;b[22]=343;b[23]=351;b[24]=358; b[25]=363;b[26]=368;b[27]=373;b[28]=377;

    let eg = the("semanas").value;
    let cc = parseInt(this.value);

    if (eg < 12 || eg > 40){

        the("pc.pct.ecoEstructural").value = "";

    }
    else {

        eg = eg - 12;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=cc - a[eg];
        ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "pcecoEstructural");
        var resultado = parseInt(95 / (uno) * (dos) + 3);
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
        
        the("pc.pct.ecoEstructural").value = pctCC;
        psohdlk();

    }
}


function bvmTxt(valor){
    'use strict';
    let eg = +the("semanas").value;

	let a = [23, 25, 27, 28, 29, 29, 30, 30, 30, 30, 30, 30, 30, 29, 29, 29, 29, 29, 28, 28, 27, 26, 24, 23, 21];
    let b = [59, 62, 64, 66, 67, 68, 68, 68, 68, 68, 68, 69, 69, 69, 69, 70, 71, 72, 72, 72, 71, 70, 68, 66, 62];

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


function psohdlk() {

    let CC = parseFloat(the("pc.ecoEstructural").value);
    let CA = parseInt(the("pa.ecoEstructural").value);
    let LF = parseInt(the("femur.ecoEstructural").value);

    CC = CC / 10;
    CA = CA / 10;
    LF = LF / 10;
    var psoP = Math.pow(10, (1.326 + 0.0107 * CC + 0.0438 * CA + 0.158 * LF - 0.00326 * CA * LF));

    if ( isNaN( psoP ) != true ) {
        the("pfe.ecoEstructural").value = Math.trunc(psoP);
        pctpfe();
    } else {
        the("pfe.ecoEstructural").value = "";
        pctpfe();
    }

}

function pctpfe() {
    'use strict';

    let a = [], b = [];
    let eg = Number(the("semanas").value) + (0 + (Number(the("dias").value) || 0)) / 7;

    let sexo = the("ecografia.segtrim.sexo").value
    if (sexo == "masculino"){
        sexo = "men"
        a = Math.exp(-.52610096513854 + eg * (.44906549056954 + eg * (-.0089009550762548 + eg * (9868293523919e-17 + eg * -6.1862373692705e-7))))
        b = Math.exp(.79018076483077 + eg * (.32585025131141 + eg * (-.0025559098706069 + eg * (-42038969571238e-18 + eg * 5.4228420412733e-7))))
    } else if (sexo == "femenino"){
        sexo = "wom"
        a = Math.exp(-.915523725804273 + eg * (.529374415518249 + eg * (-.0147446585943781 + eg * (.000269201219853759 + eg * -23537061714461e-19))))
        b = Math.exp(.32551154984358 + eg * (.40214557617585 + eg * (-.0074145176202411 + eg * (88196644838898e-18 + eg * -7.1015932637436e-7))))
    } else {
        sexo = "z"
        a = Math.exp(-.230518383014592 + eg * (.400511116318458 + eg * (-.00617993235833267 + eg * (316595762972649e-19 + eg * 0))))
        b = Math.exp(.408170594889372 + eg * (.381068214664342 + eg * (-.00550913922743603 + eg * (246713147783532e-19 + eg * 0))));
    }

    //let eg = the("semanas").value;
    // funcion que calcula el v alor de eg y suma los dias

    
    let pfe = parseInt(the("pfe.ecoEstructural").value);
    if (eg < 14 || eg > 40) {
        the("pfe.pct.ecoEstructural").value = 0
        ajustarProgreso(0, "pcecoEstructural");
    } else {
        var pctPFE = percentilOMS(pfe,eg, sexo);
        pctPFE = ("number" == typeof pctPFE) ? Math.round(pctPFE * 1000) : pctPFE
        the("pfe.pct.ecoEstructural").value = pctPFE
        ajustarProgreso(pctPFE, "pcecoEstructural");
        return true
    }

}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function ajustarProgreso(valor, objeto){
    valor = (valor == "&gt; 99") ? 99 : valor; // si es mayor a 99
    valor = (isNaN(valor)== true) ? 0 : valor;
	valor = valor + "%";
	the(objeto).children[0].style.width = valor;
}


