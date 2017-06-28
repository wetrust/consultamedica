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
  
  if (FExame.getTime() < FUM.getTime()) {
    EdadGestacional = "0";
  }
  else if (((FExame.getTime() - FUM.getTime()) / unasemana) > 42) {
    EdadGestacional = "42";
  }
  else {
    EdadGestacional = Math.floor(EdadGestacional)+"."+Math.round((EdadGestacional - Math.floor(EdadGestacional))*7);
  }
 
  return EdadGestacional;
}


function dbpPct() {

 var pct3 = [];
 var pct97 = [];

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

 var eg=0;
 var cc=0;
  
 if (navegadorDowgrade == false) {
    eg=localStorage.eg
		cc=localStorage.cc
	}
  else{ $("#home")
    eg=parseFloat(document.getElementById("edadG").innerHTML);
    cc=parseInt($("#cc").val());
  }
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 cc=parseInt(document.getElementById("cc").value);

 if (eg < 12) {document.getElementById("pctcc").innerHTML="0";}
 else if (eg > 40){document.getElementById("pctcc").innerHTML="0";}
 else {

  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=cc - pct3[eg];

  document.getElementById("pctcc").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
 }
}
