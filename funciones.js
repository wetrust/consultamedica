function puedoGuardarEnElNavegador() {
  if (window.localStorage) {
    navegadorDowgrade = false;
    if (localStorage.ecografista != null) {
      var ecografista = JSON.parse(localStorage["ecografista"]);
    }
  }
  else {
    $("#home").prepend("<div class='alert alert-warning alert-dismissible fade show' role='alert' id='navegadorDowgrade'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Hey!</strong> debes actualizar tu navegador para mejorar el desempeño de esta aplicación.</div>");
    navegadorDowgrade = true;
  }
};

function queDiaEs(){
  var d = new Date();

  if (navegadorDowgrade == false) {
    localStorage.lastLoginDate = d;
  }
  Hoy.push(d.getDay());
  Hoy.push(d.getDate());
  Hoy.push(d.getMonth());
  Hoy.push(d.getFullYear());
};

function cualEsMiIp(){

  if (navegadorDowgrade == false) {
    $.getJSON( "https://jsonip.com/?callback=?", function( data ) {
      localStorage.lastLoginIP = data.ip;
    });
  }
};

function show_hide(id){
  if (document.getElementById){
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
  }
};

function activarTooltips(){
  $('[data-toggle="tooltip"]').tooltip();
}

function calcularEG(){
 var FExamen, FUM, EdadGestacional;
 var undia = 1000 * 60 * 60 * 24;
 var unasemana = undia * 7;
  
 if (navegadorDowgrade == false) {
    FUM = localStorage.fum;
	FExamen = localStorage.fee;
  }
  else{ 
    FUM = $("#fum").val();
    FExamen = $("#fee").val();
  }
  
  FUM = new Date (FUM);
  FExamen = new Date (FExamen);
  
  EdadGestacional = ((FExamen.getTime() - FUM.getTime()) / unasemana);
  
  if (FExamen.getTime() < FUM.getTime()) {
    EdadGestacional = "0";
  }
  else if (((FExamen.getTime() - FUM.getTime()) / unasemana) > 42) {
    EdadGestacional = "42";
  }
  else {
    EdadGestacional = Math.floor(EdadGestacional)+"."+Math.round((EdadGestacional - Math.floor(EdadGestacional))*7);
  }
 
  return EdadGestacional;
}

function pctcc() {

 var pct3 = [], pct97 = [];

 pct3[0] = 64;pct3[1] = 74;pct3[2] = 88;pct3[3] = 100;pct3[4] = 113;pct3[5] = 126;
 pct3[6] = 137;pct3[7] = 149;pct3[8] = 161;pct3[9] = 172;pct3[10] = 183;
 pct3[11] = 194;pct3[12] = 204;pct3[13] = 214;pct3[14] = 224;pct3[15] = 233;
 pct3[16] = 242;pct3[17] = 250;pct3[18] = 258;pct3[19] = 267;pct3[20] = 274;
 pct3[21] = 280;pct3[22] = 287;pct3[23] = 293;pct3[24] = 299;pct3[25] = 303;
 pct3[26] = 308;pct3[27] = 311;pct3[28] = 315;

 pct97[0] = 81;pct97[1] = 94;pct97[2] = 106;pct97[3] = 120;pct97[4] = 135;
 pct97[5] = 150;pct97[6] = 165;pct97[7] = 179;pct97[8] = 193;pct97[9] = 206;
 pct97[10] = 219;pct97[11] = 232;pct97[12] = 243;pct97[13] = 256;pct97[14] = 268;
 pct97[15] = 279;pct97[16] = 290;pct97[17] = 300;pct97[18] = 310;pct97[19] = 319;
 pct97[20] = 328;pct97[21] = 336;pct97[22] = 343;pct97[23] = 351;pct97[24] = 358;
 pct97[25] = 363;pct97[26] = 368;pct97[27] = 373;pct97[28] = 377;

 var eg=0, cc=0;

 eg=parseFloat(localStorage.eg);
 cc=parseInt(document.getElementById("cc").value);

 if (eg < 12) {
         $("#ccPct").val("0");
 }
 else if (eg > 40){ 
         $("#ccPct").val("0");
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=cc - pct3[eg];
  $("#ccPct").val(parseInt(95 / (uno) * (dos) + 3));
 }
};

function pctca() {

 var pct3 = [], pct97 = [];

 pct3[0] = 42;pct3[1] = 52;pct3[2] = 64;pct3[3] = 75;pct3[4] = 86;
 pct3[5] = 97;pct3[6] = 109;pct3[7] = 119;pct3[8] = 131;pct3[9] = 141;
 pct3[10] = 151;pct3[11] = 161;pct3[12] = 171;pct3[13] = 181;
 pct3[14] = 191;pct3[15] = 200;pct3[16] = 209;pct3[17] = 218;pct3[18] = 227;
 pct3[19] = 236;pct3[20] = 245;pct3[21] = 253;pct3[22] = 261;pct3[23] = 269;
 pct3[24] = 277;pct3[25] = 285;pct3[26] = 292;pct3[27] = 299;pct3[28] = 307;

 pct97[0] = 71;pct97[1] = 79;pct97[2] = 92;pct97[3] = 102;pct97[4] = 113;
 pct97[5] = 127;pct97[6] = 141;pct97[7] = 155;pct97[8] = 170;
 pct97[9] = 183;pct97[10] = 192;pct97[11] = 209;pct97[12] = 223;
 pct97[13] = 235;pct97[14] = 248;pct97[15] = 260;pct97[16] = 271;pct97[17] = 284;
 pct97[18] = 295;pct97[19] = 306;pct97[20] = 318;pct97[21] = 329;pct97[22] = 339;
 pct97[23] = 349;pct97[24] = 359;pct97[25] = 370;pct97[26] = 380;pct97[27] = 389;
 pct97[28] = 399;

 var eg=0, ca=0;

 eg=parseFloat(localStorage.eg);
 ca=parseInt(document.getElementById("ca").value);

 if (eg < 12) {
         $("#caPct").val("0");
 }
 else if (eg > 40){ 
         $("#caPct").val("0");
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=ca - pct3[eg];
  $("#caPct").val(parseInt(95 / (uno) * (dos) + 3));
 }
};

function pctlf() {

 var pct3 = [], pct97 = [];

 pct3[0] = 7;pct3[1] = 9;pct3[2] = 12;pct3[3] = 15;pct3[4] = 17;pct3[5] = 21;
 pct3[6] = 23;pct3[7] = 26;pct3[8] = 28;pct3[9] = 30;pct3[10] = 33;pct3[11] = 35;
 pct3[12] = 38;pct3[13] = 40;pct3[14] = 42;pct3[15] = 44;pct3[16] = 46;
 pct3[17] = 48;pct3[18] = 50;pct3[19] = 52;pct3[20] = 53;pct3[21] = 55;
 pct3[22] = 57;pct3[23] = 59;pct3[24] = 60;pct3[25] = 62;pct3[26] = 64;
 pct3[27] = 65;pct3[28] = 66;

 pct97[0] = 12;pct97[1] = 14;pct97[2] = 17;pct97[3] = 20;pct97[4] = 23;pct97[5] = 27;
 pct97[6] = 31;pct97[7] = 34;pct97[8] = 38;pct97[9] = 40;pct97[10] = 43;pct97[11] = 47;
 pct97[12] = 50;pct97[13] = 52;pct97[14] = 56;pct97[15] = 58;pct97[16] = 62;
 pct97[17] = 64;pct97[18] = 66;pct97[19] = 68;pct97[20] = 71;pct97[21] = 73;
 pct97[22] = 75;pct97[23] = 78;pct97[24] = 80;pct97[25] = 82;pct97[26] = 84;
 pct97[27] = 86;pct97[28] = 88;

 var eg=0, lf=0;

 eg=parseFloat(localStorage.eg);
 lf=parseInt(document.getElementById("lf").value);

 if (eg < 12) {
         $("#lfPct").val("0");
 }
 else if (eg > 40){ 
         $("#lfPct").val("0");
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=lf - pct3[eg];
  $("#lfPct").val(parseInt(95 / (uno) * (dos) + 3));
 }
};

function pctcb() {

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


 var eg=0;
 var cb=0;
 eg=parseFloat(localStorage.eg);
 cb=parseInt(document.getElementById("cb").value);

 if (eg < 15) {$("#cbPct").val("0");}
 else if (eg > 40){$("#cbPct").val("0");}
 else {

  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct2dsmas[eg] - pct2ds[eg];
  var dos=cb - pct2ds[eg];
  $("#cerebeloPct").val(parseInt(95 / (uno) * (dos)));
 }
};

function pctlh() {

 var pct05 = [];
 var pct95 = [];

        pct05[12] = 4.8;   pct95[12] = 12.3;
        pct05[13] = 7.6;   pct95[13] = 15.1;
        pct05[14] = 10.3;  pct95[14] = 17.9;
        pct05[15] = 13.1;  pct95[15] = 20.7;
        pct05[16] = 15.8;  pct95[16] = 23.5;
        pct05[17] = 18.5;  pct95[17] = 26.3;
        pct05[18] = 21.2;  pct95[18] = 29.1;
        pct05[19] = 23.8;  pct95[19] = 31.6;
        pct05[20] = 26.3;  pct95[20] = 34.2;
        pct05[21] = 28.8;  pct95[21] = 36.7;
        pct05[22] = 31.2;  pct95[22] = 39.2;
        pct05[23] = 33.5;  pct95[23] = 41.6;
        pct05[24] = 35.7;  pct95[24] = 43.9;
        pct05[25] = 37.9;  pct95[25] = 46.1;
        pct05[26] = 39.9;  pct95[26] = 48.1;
        pct05[27] = 41.9;  pct95[27] = 50.1;
        pct05[28] = 43.7;  pct95[28] = 52.1;
        pct05[29] = 45.5;  pct95[29] = 53.9;
        pct05[30] = 47.2;  pct95[30] = 55.6;
        pct05[31] = 48.9;  pct95[31] = 57.3;
        pct05[32] = 50.4;  pct95[32] = 58.9;
        pct05[33] = 52.1;  pct95[33] = 60.5;
        pct05[34] = 53.4;  pct95[34] = 62.1;
        pct05[35] = 54.8;  pct95[35] = 63.5;
        pct05[36] = 56.2;  pct95[36] = 64.9;
        pct05[37] = 57.6;  pct95[37] = 66.4;
        pct05[38] = 59.8;  pct95[38] = 67.8;
        pct05[39] = 60.4;  pct95[39] = 69.3;
        pct05[40] = 61.9;  pct95[40] = 70.8;
	
 var eg=0, lh=0;
 eg=parseFloat(localStorage.eg);
 lh=parseInt(document.getElementById("lh").value);

 if (eg < 12) {$("#lhPct").val("0");}
 else if (eg > 40){$("#lhPct").val("0");}
 else {

  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct95[eg] - pct05[eg];
  var dos=lh - pct05[eg];
  $("#lhPct").val(parseInt(90 / (uno) * (dos)+5));
 }
};
