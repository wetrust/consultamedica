import { the, these } from "./wetrust.js";
import { percentilOMS } from "./graficoPFEMasMenos.js?H"

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

    }else{
        the("liquido.semi.pct.ecoEstructural").value = ""
    }
}

the("graficoBVM.ecoEstructural").onclick =  function() {
        var edadGestacional = the("semanas").value;

        if (edadGestacional < 16){
            alert("Edad Gestacional inferior a 16 semanas");
            return false;
        }

        var modal = makeModal();
        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
        the(modal.titulo).innerText = "Gráfico BVM";
        the(modal.contenido).innerHTML = '<div id="graficoBVMView"></div>';
        the(modal.id).children[0].classList.remove("modal-lg");

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
                            y: Number(the("liquido.semi.ecoEstructural").value),
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
};

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
        ajustarProgreso(0, "dbpEcoEstructural");

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
        ajustarProgreso(0, "pcecoEstructural");

    } else {

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

the("pa.ecoEstructural").onkeyup = function(){
    /* 3 97 */
    'use strict';
    let a = [], b = [];
    a[0]=42;a[1]=52;a[2]=64;a[3]=75;a[4]=86; a[5]=97;a[6]=109;a[7]=119;a[8]=131;a[9]=141; a[10]=151;a[11]=161;a[12]=171;a[13]=181; a[14]=191;a[15]=200;a[16]=209;a[17]=218;a[18]=227; a[19]=236;a[20]=245;a[21]=253;a[22]=261;a[23]=269; a[24]=277;a[25]=285;a[26]=292;a[27]=299;a[28]=307;
    b[0]=71;b[1]=79;b[2]=92;b[3]=102;b[4]=113; b[5]=127;b[6]=141;b[7]=155;b[8]=170; b[9]=183;b[10]=192;b[11]=209;b[12]=223; b[13]=235;b[14]=248;b[15]=260;b[16]=271;b[17]=284; b[18]=295;b[19]=306;b[20]=318;b[21]=329;b[22]=339; b[23]=349;b[24]=359;b[25]=370;b[26]=380;b[27]=389; b[28]=399;

    let eg = the("semanas").value;
    let ca = parseInt(this.value);

    if (eg < 12 || eg > 40){ 

        the("pa.pct.ecoEstructural").value = "";
        ajustarProgreso(0, "paecoEstructural");

    } else {

        eg = eg - 12;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=ca - a[eg];
        var resultado = parseInt(95 / (uno) * (dos) + 3);
        ajustarProgreso(resultado, "paecoEstructural");
        var pctCA = '';

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 97){
            pctCA = '> 97';
        } else if (resultado < 3){
            pctCA = '< 3';
        } else {
            pctCA = resultado;
        }

        the("pa.pct.ecoEstructural").value = pctCA;
        psohdlk();

    }
}

the("femur.ecoEstructural").onkeyup = function(){
    /* 3 97 */
    'use strict';
    let a = [], b = [];

    a[0]=7;a[1]=9;a[2]=12;a[3]=15;a[4]=17;a[5]=21; a[6]=23;a[7]=26;a[8]=28;a[9]=30;a[10]=33;a[11]=35; a[12]=38;a[13]=40;a[14]=42;a[15]=44;a[16]=46; a[17]=48;a[18]=50;a[19]=52;a[20]=53;a[21]=55; a[22]=57;a[23]=59;a[24]=60;a[25]=62;a[26]=64; a[27]=65;a[28]=66;
    b[0]=12;b[1]=14;b[2]=17;b[3]=20;b[4]=23;b[5]=27; b[6]=31;b[7]=34;b[8]=38;b[9]=40;b[10]=43;b[11]=47; b[12]=50;b[13]=52;b[14]=56;b[15]=58;b[16]=62; b[17]=64;b[18]=66;b[19]=68;b[20]=71;b[21]=73; b[22]=75;b[23]=78;b[24]=80;b[25]=82;b[26]=84; b[27]=86;b[28]=88;

    let eg = the("semanas").value;
    let lf = parseInt(this.value);

    if (eg < 12 || eg > 40){ 
        the("femur.pct.ecoEstructural").value = "";
        ajustarProgreso(0, "femurecoEstructural");
    } else {
        eg = eg - 12;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=lf - a[eg];
        var resultado = parseInt(95 / (uno) * (dos) + 3);
        ajustarProgreso(resultado, "femurecoEstructural");
        var pctLF = '';

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 95){
            pctLF = '> 95';
            the("femur.pct.ecoEstructural").value = pctLF
        }else if (resultado < 5){
            pctLF = '< 5';
            the("femur.pct.ecoEstructural").value = pctLF
        }else{
            the("femur.pct.ecoEstructural").value = resultado
        }

        psohdlk();
    }
}

the("humero.ecoEstructural").onkeyup = function() {
    /* 5 95 */
    'use strict';
    let a = [], b = [];

    a[12] = 3;   b[12] = 11; a[13] = 5;   b[13] = 14;
    a[14] = 8;   b[14] = 17; a[15] = 11;  b[15] = 20;
    a[16] = 14;  b[16] = 22; a[17] = 16;  b[17] = 25;
    a[18] = 19;  b[18] = 28; a[19] = 22;  b[19] = 30;
    a[20] = 24;  b[20] = 33; a[21] = 26;  b[21] = 35;
    a[22] = 29;  b[22] = 37; a[23] = 31;  b[23] = 39;
    a[24] = 33;  b[24] = 42; a[25] = 35;  b[25] = 44;
    a[26] = 36;  b[26] = 46; a[27] = 39;  b[27] = 47;
    a[28] = 41;  b[28] = 49; a[29] = 43;  b[29] = 51;
    a[30] = 44;  b[30] = 53; a[31] = 46;  b[31] = 54;
    a[32] = 47;  b[32] = 56; a[33] = 49;  b[33] = 57;
    a[34] = 50;  b[34] = 59; a[35] = 52;  b[35] = 60;
    a[36] = 53;  b[36] = 61; a[37] = 54;  b[37] = 63;
    a[38] = 55;  b[38] = 64; a[39] = 56;  b[39] = 65;
    a[40] = 57;  b[40] = 66;

    let eg = the("semanas").value;
    var lh = parseInt(this.value);

    if (eg < 12 || eg > 40) {

        the("humero.pct.ecoEstructural").value = "";
        ajustarProgreso(0, "humeroecoEstructural");

    }else {

        eg = parseInt(eg);
        var uno = b[eg] - a[eg];
        var dos = lh - a[eg];
        var resultado = (parseInt(95 / (uno) * (dos) + 5));
        var pctLH = '';

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 95){
            pctLH = '> 95';
            the("humero.pct.ecoEstructural").value = pctLH
        }else if (resultado < 5){
            pctLH = '< 5';
            the("humero.pct.ecoEstructural").value = pctLH
        }else{
            the("humero.pct.ecoEstructural").value = resultado
        }

        ajustarProgreso(resultado, "humeroecoEstructural");
        p50();
    }
}

the("dof.ecoEstructural").onkeyup = function(){
    'use strict';
    let a = [], b = [];
    let dof = this.value;

    a[10]=7;a[11]=11; a[12]=16; a[13]=20;a[14]=24; a[15]=29; a[16]=33; a[17]=37;a[18]=41; a[19]=46; a[20]=50; a[21]=54;a[22]=58; a[23]=62; a[24]=65; a[25]=69;a[26]=73; a[27]=76; a[28]=80; a[29]=83;a[30]=86; a[31]=89; a[32]=92; a[33]=95;a[34]=97; a[35]=99; a[36]=102; a[37]=104;a[38]=105; a[39]=107; a[40]=108;
    b[10]=21; b[11]=25; b[12]=30; b[13]=34;b[14]=38; b[15]=43; b[16]=47; b[17]=51;b[18]=55; b[19]=60; b[20]=64; b[21]=68;b[22]=72; b[23]=76; b[24]=79; b[25]=83;b[26]=87; b[27]=90; b[28]=94; b[29]=97;b[30]=100; b[31]=103; b[32]=106; b[33]=108;b[34]=111; b[35]=113; b[36]=116; b[37]=118;b[38]=119; b[39]=121; b[40]=122;

    let eg = the("semanas").value;

    if (eg > 9 && dof > 0){

        var uno = b[eg] - a[eg];
        var dos = dof - a[eg];
        var resultado = (parseInt(95 / (uno) * (dos) + 3));
        ajustarProgreso(0, "dofecoEstructural");
        var pctDOF = '';

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 99){
            pctDOF = '> 99';
        }
        else if (resultado < 1){
            pctDOF = '< 1';
        }
        else{
            pctDOF = resultado;
        }

        the("dof.pct.ecoEstructural").value = pctDOF;

    } else {

        ajustarProgreso(0, "dofecoEstructural");
        the("dof.pct.ecoEstructural").value = "";

    }

    let dbp = the("dbp.ecoEstructural").value;

    if (dbp > 0 && dof > 0){
        var valor = ((dbp/dof)*100);
        the("dof.ic.ecoEstructural").value = valor.toFixed(0) + "%";
    } else {
        the("dof.ic.ecoEstructural").value = "";
    }
}

the("tc.ecoEstructural").onkeyup = function(){
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

    var cb = 0;
    let eg = the("semanas").value;
    cb = parseInt(this.value);

    if (eg < 15 ||eg > 40) {
        the("tc.pct.ecoEstructural").value = 0
        ajustarProgreso(0, "tcecoEstructural");
    }else {
        eg = eg - 15;
        eg = parseInt(eg);
        var uno=pct2dsmas[eg] - pct2ds[eg];
        var dos=cb - pct2ds[eg];
        var resultado = parseInt(95 / (uno) * (dos) + 3);
        var pctCB = '';

        the("tc.pct.real.ecoEstructural").value = resultado;
        ajustarProgreso(resultado, "tcecoEstructural");
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

        the("tc.pct.ecoEstructural").value = resultado;

        ajustarProgreso(resultado, "tcMorfologia");
    }
}

the("cm.ecoEstructural").onkeyup = function(){
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

    if (eg < 14 ||eg > 39) {

        the("cm.pct.ecoEstructural").value = 0
        ajustarProgreso(0, "cmecoEstructural");

    }else {

        eg = parseInt(eg);
        var uno = cisM90[eg] - cisM10[eg];
        var dos = cm - cisM10[eg];
        var resultado = (parseInt(90 / (uno) * (dos) + 5));

        the("cm.pct.real.ecoEstructural").value = resultado;

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

        the("cm.pct.ecoEstructural").value = pctCISM;

    }
}

the("pfe.ecoEstructural").onkeyup = function(){
    pctpfe()
}

//Flujometría
the("art.ut.d.ecoEstructural").onkeyup = function(){

}

let sexo_ecoEstructural = these("sexo.ecoEstructural")
sexo_ecoEstructural.forEach(input => { input.parentElement.onchange = function(){pctpfe()}})

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

    let _sexo = these("sexo.ecoEstructural")
    _sexo.forEach(alter => { return (alter.checked == true) ? _sexo = alter.value : false })

    if (_sexo == "masculino"){
        _sexo = "men"
        a = Math.exp(-.52610096513854 + eg * (.44906549056954 + eg * (-.0089009550762548 + eg * (9868293523919e-17 + eg * -6.1862373692705e-7))))
        b = Math.exp(.79018076483077 + eg * (.32585025131141 + eg * (-.0025559098706069 + eg * (-42038969571238e-18 + eg * 5.4228420412733e-7))))
    } else if (_sexo == "femenino"){
        _sexo = "wom"
        a = Math.exp(-.915523725804273 + eg * (.529374415518249 + eg * (-.0147446585943781 + eg * (.000269201219853759 + eg * -23537061714461e-19))))
        b = Math.exp(.32551154984358 + eg * (.40214557617585 + eg * (-.0074145176202411 + eg * (88196644838898e-18 + eg * -7.1015932637436e-7))))
    } else {
        _sexo = "z"
        a = Math.exp(-.230518383014592 + eg * (.400511116318458 + eg * (-.00617993235833267 + eg * (316595762972649e-19 + eg * 0))))
        b = Math.exp(.408170594889372 + eg * (.381068214664342 + eg * (-.00550913922743603 + eg * (246713147783532e-19 + eg * 0))));
    }

    //let eg = the("semanas").value;
    // funcion que calcula el v alor de eg y suma los dias

    
    let pfe = parseInt(the("pfe.ecoEstructural").value);
    if (eg < 14 || eg > 40) {
        the("pfe.pct.ecoEstructural").value = 0
    } else {
        var pctPFE = percentilOMS(pfe,eg, _sexo);
        pctPFE = ("number" == typeof pctPFE) ? Math.round(pctPFE * 1000) : pctPFE
        the("pfe.pct.ecoEstructural").value = pctPFE

        if (pctPFE > 90 || pctPFE == "> 97.5"){
            the("pfeecoEstructural").value = "grande"
            the("pfeecoEstructural").classList.remove("text-danger")
        }else if (pctPFE < 10 || pctPFE == "< 2.5"){
            the("pfeecoEstructural").value = "pequeño"
            the("pfeecoEstructural").classList.add("text-danger")
        }else{
            the("pfeecoEstructural").value = "adecuado"
            the("pfeecoEstructural").classList.remove("text-danger")
        }

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

function uuidv4() {
    //genera un uuid
    let uid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )

    // genera infinitamente uuid mientras no comience con una letra
    if (isNaN(uid.charAt(0))){ return uid } else { return uuidv4() }
}