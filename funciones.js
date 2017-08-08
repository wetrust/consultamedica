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

function deDBP() {
	var DBPMenos2DE = [];
	var DBPMas2DE = [];

	DBPMenos2DE[0] = 14;	DBPMenos2DE[1] = 17;
	DBPMenos2DE[2] = 19;	DBPMenos2DE[3] = 25;
	DBPMenos2DE[4] = 29;	DBPMenos2DE[5] = 33;
	DBPMenos2DE[6] = 34;	DBPMenos2DE[7] = 38;
	DBPMenos2DE[8] = 41;	DBPMenos2DE[9] = 43;
	DBPMenos2DE[10] = 46;	DBPMenos2DE[11] = 49;
	DBPMenos2DE[12] = 52;	DBPMenos2DE[13] = 54;
	DBPMenos2DE[14] = 57;	DBPMenos2DE[15] = 61;
	DBPMenos2DE[16] = 63;	DBPMenos2DE[17] = 65;
	DBPMenos2DE[18] = 69;	DBPMenos2DE[19] = 69;
	DBPMenos2DE[20] = 74;	DBPMenos2DE[21] = 74;
	DBPMenos2DE[22] = 77;	DBPMenos2DE[23] = 78;
	DBPMenos2DE[24] = 78;	DBPMenos2DE[25] = 81;
	DBPMenos2DE[26] = 85;	DBPMenos2DE[27] = 88;

	DBPMas2DE[0] = 25;	DBPMas2DE[1] = 29;
	DBPMas2DE[2] = 33;	DBPMas2DE[3] = 35;
	DBPMas2DE[4] = 41;	DBPMas2DE[5] = 42;
	DBPMas2DE[6] = 46;	DBPMas2DE[7] = 50;
	DBPMas2DE[8] = 52;	DBPMas2DE[9] = 56;
	DBPMas2DE[10] = 59;	DBPMas2DE[11] = 63;
	DBPMas2DE[12] = 66;	DBPMas2DE[13] = 70;
	DBPMas2DE[14] = 71;	DBPMas2DE[15] = 75;
	DBPMas2DE[16] = 77;	DBPMas2DE[17] = 81;
	DBPMas2DE[18] = 83;	DBPMas2DE[19] = 87;
	DBPMas2DE[20] = 88;	DBPMas2DE[21] = 91;
	DBPMas2DE[22] = 94;	DBPMas2DE[23] = 95;
	DBPMas2DE[24] = 97;	DBPMas2DE[25] = 99;
	DBPMas2DE[26] = 97;	DBPMas2DE[27] = 106;

	var eg=0, dbp=0;
	eg=parseFloat(localStorage.eg);
	dbp = $("#dbp").val();

	if (eg < 12) {
		$("#dbpDE").val('0');
	}
	else if (eg > 40)
	{
		$("#dbpDE").val('0');
	}
	else {
		eg = eg - 12;
		eg = parseInt(eg);

		var uno = DBPMas2DE[eg] - DBPMenos2DE[eg];
		var dos = dbp - DBPMenos2DE[eg];
		var resultado = (parseInt(95 / (uno) * (dos) + 3));
		$("#dbpDE").val(resultado);
	}
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
 cb=parseInt(document.getElementById("cerebelo").value);

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
	
	var eg=0;
 	var cb=0;
 	eg=parseFloat(localStorage.eg);
 	lh=parseInt($("#lh").val());

        if (eg < 12) {
        	$("#lhPct").val('0');
        }
        else if (eg > 40) {
        	$("#lhPct").val('0');
        }
        else {
        	eg = parseInt(eg);
		var uno = pct95[eg] - pct05[eg];
		var dos = lh - pct05[eg];
		var resultado = (parseInt(95 / (uno) * (dos) + 5));
		$("#lhPct").val(resultado);
	}
}

function egsaco() {

var y = [];

    y[5] =4.2;
    y[6] =4.3;
    y[7] =4.4;
    y[8] =4.5;
    y[9] =4.6;
    y[10] =5;
    y[11] =5.1;
    y[12] =5.2;
    y[13] =5.3;
    y[14] =5.4;
    y[15] =5.5;
    y[16] =5.6;
    y[17] =6;
    y[18] =6.1;
    y[19] =6.2;
    y[20] =6.3;
    y[21] =6.4;
    y[22] =6.5;
    y[23] =6.6;
    y[24] =7;
    y[25] =7.1;
    y[26] =7.2;
    y[27] =7.3;
    y[28] =7.4;
    y[29] =7.5;
    y[30] =7.6;
    y[31] =8;
    y[32] =8.1;
    y[33] =8.2;
    y[34] =8.3;
    y[35] =8.4;
    y[36] =8.5;
    y[37] =8.6;
    y[38] =9;
    y[39] =9.1;
    y[40] =9.2;
    y[41] =9.3;
    y[42] =9.4;
    y[43] =9.5;
    y[44] =9.6;
    y[45] =9.6;
    y[46] =10;
    y[47] =10.1;
    y[48] =10.2;
    y[49] =10.3;
    y[50] =10.4;
    y[51] =10.5;
    y[52] =11;
    y[53] =11.1;
    y[54] =11.2;
    y[55] =11.3;
    y[56] =11.4;
    y[57] =11.5;
    y[58] =11.6;
    y[59] =12;
    y[60] =12.1;
    y[61] =12.2;

	
    var prs = parseInt(document.getElementById("saco").value);

    if (prs < 5) {
        $("#sacoPct").val("0");
    }
    else if (prs > 61) {
        $("#sacoPct").val("0");
    }
    else {
        var egsaco = y[prs];
	$("#sacoPct").val(egsaco);
    }
};

function eglcn() {

    var LCN = [[],[]];

    LCN[0][0] = 0.09; LCN[0][1] = 0.2; LCN[0][2] = 0.37;
    LCN[0][3] = 0.57; LCN[0][4] = 0.7; LCN[0][5] = 0.8;
    LCN[0][6] = 0.9; LCN[0][7] = 1; LCN[0][8] = 1.1;
    LCN[0][9] = 1.12; LCN[0][10] = 1.13; LCN[0][11] = 1.18;
    LCN[0][12] = 1.27; LCN[0][13] = 1.38; LCN[0][14] = 1.47;
    LCN[0][15] = 1.58; LCN[0][16] = 1.65; LCN[0][17] = 1.72;
    LCN[0][18] = 1.87; LCN[0][19] = 1.96; LCN[0][20] = 2.05;
    LCN[0][21] = 2.18; LCN[0][22] = 2.25; LCN[0][23] = 2.35;
    LCN[0][24] = 2.54; LCN[0][25] = 2.62; LCN[0][26] = 2.7;
    LCN[0][27] = 2.9; LCN[0][28] = 3.08; LCN[0][29] = 3.16;
    LCN[0][30] = 3.4; LCN[0][31] = 3.51; LCN[0][32] = 3.57;
    LCN[0][33] = 3.76; LCN[0][34] = 3.85; LCN[0][35] = 4.05;
    LCN[0][36] = 4.18; LCN[0][37] = 4.46; LCN[0][38] = 4.55;
    LCN[0][39] = 4.66; LCN[0][40] = 4.88; LCN[0][41] = 5.07;
    LCN[0][42] = 5.29; LCN[0][43] = 5.46; LCN[0][44] = 5.66;
    LCN[0][45] = 5.87; LCN[0][46] = 6.01; LCN[0][47] = 6.27;
    LCN[0][48] = 6.37; LCN[0][49] = 6.65; LCN[0][50] = 6.77;
    LCN[0][51] = 7.08; LCN[0][52] = 7.19; LCN[0][53] = 7.39;
    LCN[0][54] = 7.57; LCN[0][55] = 7.68; LCN[0][56] = 7.98;
    LCN[0][57] = 8.09; LCN[0][58] = 8.35; LCN[0][59] = 8.48;
    LCN[0][60] = 8.56; LCN[0][61] = 8.76; LCN[0][62] = 8.88;
    LCN[0][63] = 9.09;

    LCN[1][0] = 0; LCN[1][1] = 5.5; LCN[1][2] = 6;
    LCN[1][3] = 6.2; LCN[1][4] = 6.4; LCN[1][5] = 6.5;
    LCN[1][6] = 6.6; LCN[1][7] = 7.1; LCN[1][8] = 7.1;
    LCN[1][9] = 7.1; LCN[1][10] = 7.2; LCN[1][11] = 7.3;
    LCN[1][12] = 7.4; LCN[1][13] = 7.5; LCN[1][14] = 7.6;
    LCN[1][15] = 8; LCN[1][16] = 8.1; LCN[1][17] = 8.2;
    LCN[1][18] = 8.3; LCN[1][19] = 8.4; LCN[1][20] = 8.5;
    LCN[1][21] = 8.6; LCN[1][22] = 9; LCN[1][23] = 9.1;
    LCN[1][24] = 9.2; LCN[1][25] = 9.3; LCN[1][26] = 9.4;
    LCN[1][27] = 9.5; LCN[1][28] = 10; LCN[1][29] = 10.1;
    LCN[1][30] = 10.2; LCN[1][31] = 10.3; LCN[1][32] = 10.4;
    LCN[1][33] = 10.5; LCN[1][34] = 10.6; LCN[1][35] = 11;
    LCN[1][36] = 11.1; LCN[1][37] = 11.2; LCN[1][38] = 11.3;
    LCN[1][39] = 11.4; LCN[1][40] = 11.5; LCN[1][41] = 11.6;
    LCN[1][42] = 12; LCN[1][43] = 12.1; LCN[1][44] = 12.2;
    LCN[1][45] = 12.3; LCN[1][46] = 12.4; LCN[1][47] = 12.5;
    LCN[1][48] = 12.6; LCN[1][49] = 13; LCN[1][50] = 13.1;
    LCN[1][51] = 13.2; LCN[1][52] = 13.3; LCN[1][53] = 13.4;
    LCN[1][54] = 13.5; LCN[1][55] = 13.6; LCN[1][56] = 14;
    LCN[1][57] = 14.1; LCN[1][58] = 14.2; LCN[1][59] = 14.3;
    LCN[1][60] = 14.4; LCN[1][61] = 14.5; LCN[1][62] = 14.6;
    LCN[1][63] = 15;

    var lcn = document.getElementById("lcn").value;

    if (lcn > 90) {
        $("#lcnPct").val("0");
    }
    else {

	    var ValLCN1 = lcn / 10;

	    for (i = 1; i <= 63; i ++ ) {
		if (LCN[0][i] >= ValLCN1) {
		    var eglcn = LCN[1][i];
		    i = 63;
		}
	    }
            $("#lcnPct").val(eglcn);
    }
};

function pctdv() {

 var pct5 = [];
 var pct95 = [];

 pct5[0] = 0.32;
 pct5[1] = 0.32;
 pct5[2] = 0.32;
 pct5[3] = 0.32;
 pct5[4] = 0.32;
 pct5[5] = 0.32;
 pct5[6] = 0.31;
 pct5[7] = 0.31;
 pct5[8] = 0.31;
 pct5[9] = 0.3;
 pct5[10] = 0.29;
 pct5[11] = 0.28;
 pct5[12] = 0.28;
 pct5[13] = 0.27;
 pct5[14] = 0.26;
 pct5[15] = 0.25;
 pct5[16] = 0.24;
 pct5[17] = 0.23;
 pct5[18] = 0.22;
 pct5[19] = 0.21;
 pct5[20] = 0.2;
    
 pct95[0] = 0.83;
 pct95[1] = 0.83;
 pct95[2] = 0.83;
 pct95[3] = 0.83;
 pct95[4] = 0.83;
 pct95[5] = 0.83;
 pct95[6] = 0.82;
 pct95[7] = 0.82;
 pct95[8] = 0.81;
 pct95[9] = 0.81;
 pct95[10] = 0.8;
 pct95[11] = 0.79;
 pct95[12] = 0.78;
 pct95[13] = 0.77;
 pct95[14] = 0.76;
 pct95[15] = 0.75;
 pct95[16] = 0.74;
 pct95[17] = 0.73;
 pct95[18] = 0.72;
 pct95[19] = 0.71;
 pct95[20] = 0.7;


 var eg=0;
 
 eg=parseFloat(localStorage.eg);
 var dv = parseFloat(document.getElementById("dv").value);
 
 if (eg < 20) {  
   $("#dvPct").val("0");
 }
 else if (eg > 40)
 {
   $("#dvPct").val("0");
 }
 else {
      eg = eg - 20;
      eg = parseInt(eg);
      var uno=pct95[eg] - pct5[eg];
      var dos=dv - pct5[eg];
      $("#dvPct").val(parseInt(90 / (uno) * (dos) + 5));
 }

}

function pctut() {

 var pct5 = [];
 var pct95 = [];

 pct5[0] = 1.23;
 pct5[1] = 1.18;
 pct5[2] = 1.11;
 pct5[3] = 1.05;
 pct5[4] = 0.99;
 pct5[5] = 0.94;
 pct5[6] = 0.89;
 pct5[7] = 0.85;
 pct5[8] = 0.81;
 pct5[9] = 0.78;
 pct5[10] = 0.74;
 pct5[11] = 0.71;
 pct5[12] = 0.69;
 pct5[13] = 0.66;
 pct5[14] = 0.64;
 pct5[15] = 0.62;
 pct5[16] = 0.6;
 pct5[17] = 0.58;
 pct5[18] = 0.56;
 pct5[19] = 0.55;
 pct5[20] = 0.54;
 pct5[21] = 0.52;
 pct5[22] = 0.51;
 pct5[23] = 0.51;
 pct5[24] = 0.51;
 pct5[25] = 0.49;
 pct5[26] = 0.48;
 pct5[27] = 0.48;
 pct5[28] = 0.47;
 pct5[29] = 0.47;
 pct5[30] = 0.47;

 pct95[0] = 2.84;
 pct95[1] = 2.71;
 pct95[2] = 2.53;
 pct95[3] = 2.38;
 pct95[4] = 2.24;
 pct95[5] = 2.11;
 pct95[6] = 1.99;
 pct95[7] = 1.88;
 pct95[8] = 1.79;
 pct95[9] = 1.71;
 pct95[10] = 1.61;
 pct95[11] = 1.54;
 pct95[12] = 1.47;
 pct95[13] = 1.41;
 pct95[14] = 1.35;
 pct95[15] = 1.3;
 pct95[16] = 1.25;
 pct95[17] = 1.21;
 pct95[18] = 1.17;
 pct95[19] = 1.13;
 pct95[20] = 1.11;
 pct95[21] = 1.06;
 pct95[22] = 1.04;
 pct95[23] = 1.01;
 pct95[24] = 0.99;
 pct95[25] = 0.97;
 pct95[26] = 0.95;
 pct95[27] = 0.94;
 pct95[28] = 0.92;
 pct95[29] = 0.91;
 pct95[30] = 0.91;

 var eg=0;
 
 eg=parseFloat(localStorage.eg);
 var utd = parseFloat(document.getElementById("utd").value);
 var uti = parseFloat(document.getElementById("uti").value);

 if (eg < 10) {  
   document.getElementById("utdpct").innerHTML="0";
   document.getElementById("pctuti").innerHTML="0";
   document.getElementById("pctutp").innerHTML="0";
 }
 else if (eg > 40)
 {
   document.getElementById("pctutd").innerHTML="0";
   document.getElementById("pctuti").innerHTML="0";
   document.getElementById("pctutp").innerHTML="0";
 }
 else {
    eg = eg - 10;
 	if (utd > 0){
      eg = parseInt(eg);
      var uno=pct95[eg] - pct5[eg];
      var dos=utd - pct5[eg];
     document.getElementById("pctutd").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
 	}
 	if (uti > 0){
      eg = parseInt(eg);
      var uno=pct95[eg] - pct5[eg];
      var dos=uti - pct5[eg];
     document.getElementById("pctuti").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
 	}
  	if (utd > 0){
 	 if (uti > 0){
      eg = parseInt(eg);
      var uno=pct95[eg] - pct5[eg];
      var dos = ((uti + utd) / 2) - pct5[eg];
      var utprom = ((uti + utd) / 2)
      document.getElementById("utp").innerHTML = utprom.toFixed(2);
     document.getElementById("pctutp").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
 	 }
 	}
 }
}
