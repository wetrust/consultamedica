//funciones
//from https://stackoverflow.com/questions/17907445/how-to-detect-ie11
function isIE() { return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))); }

$( '#adicionalCrecimientoView' ).on( 'click', function() {
	if ($('#adicionalCrecimiento').css( "display" ) == 'none'){
		$('#adicionalCrecimiento').show();
	}
	else{
		$('#adicionalCrecimiento').hide();
	}
	
});
//enters
$( "#lcn" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#saco").focus()
  }
});

$( "#saco" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#graficoSaco").focus()
  }
});

$( "#dbp" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#cc").focus()
  }
});

$( "#cc" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#ca").focus()
  }
});

$( "#ca" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#lf").focus()
  }
});

$( "#lf" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#lh").focus()
  }
});

$( "#lh" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#cerebelo").focus()
  }
});

$( "#cerebelo" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#bvm").focus()
  }
});

$( "#bvm" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#pfe").focus()
  }
});

$( "#ila" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#graficoILA").focus()
  }
});

$( "#aud" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#aui").focus()
  }
});

$( "#aui" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#ipau").focus()
  }
});

$( "#aui" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#ipau").focus()
  }
});

$( "#ipau" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#ipacm").focus()
  }
});

$( "#ipacm" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#dv").focus()
  }
});

$( "#dv" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#graficoDv").focus()
  }
});

function show_hide(id){
  if (document.getElementById){
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
  }
};

////////////////////////////////////////////
// Ajuste primer trimestre
//
////////////////////////////////////////////


$("input[name='ajusteEcoPrimTrim']").on("change", function(){
	event.preventDefault();
	if ($(this).is(":checked")){
		if ($(this).val() == 1){
			var LCN = parseInt($('#lcn').val());
			var saco = parseInt($('#saco').val());
			if (isNaN(LCN) | isNaN(saco) | LCN < 0 | saco < 0) {
				$('#popupTitle').html("Información");
				$('#popupBody').html("<p>Debe escribir un valor en LCN o Saco Gestacional</p>");
				$('#popupGenerico').modal('show');
				$(this).closest( 'label' ).removeClass('active');
				$(this).attr('checked', false);
				$("input[name='ajusteEcoPrimTrim'][value=0]").trigger('click');
			}
			else {
				$('#calculoAjusteEcoPrimTrim').show();
				$('#preguntaAjusteEcoPrimTrim').show();
			}
		}
		else {
			$('#calculoAjusteEcoPrimTrim').hide();
			$('#preguntaAjusteEcoPrimTrim').hide();
		}
	}
});


////////////////////////////////////////////
function calcularEG(){
 var FExamen, FUM, EdadGestacional;
 var undia = 1000 * 60 * 60 * 24;
 var unasemana = undia * 7;
  
    FUM = localStorage.fum;
    FExamen = $("#fee").val();
    $("#fee-dos").val(FExamen);
  
    FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
    FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy

  FUM = new Date (FUM);
  FExamen = new Date (FExamen);
  
  EdadGestacional = ((FExamen.getTime() - FUM.getTime()) / unasemana).toFixed(1);
  var B = new Date();
  B.setTime(FUM.getTime() + 40 * unasemana);    
  $("#fppPaciente").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
  $("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
  
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

function calcularEdad(){
	var fcumpleanos, Edad;
	var d = new Date();
	var undia = 1000 * 60 * 60 * 24;
 	var unasemana = undia * 7;
	var unano = undia * 365;
	
	fcumpleanos = new Date($("#fNacimiento").val());

	Edad = ((d.getTime() - fcumpleanos.getTime()) / unano).toFixed(0);

	return Edad;
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

	var eg=0;
	eg=parseFloat(localStorage.eg);
	var dbp = $("#dbp").val();
	dbp = dbp.toString();
    	dbp = dbp.replace(",", ".");
	dbp = parseFloat(dbp);

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
		ajustarProgreso(resultado, "dbpDE");
		p50();
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
  ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "ccPct");
	 psohdlk();
	 p50();
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
	 ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "caPct");
	 psohdlk();
	 p50();
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
	 ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "lfPct");
	 p50();
	 $('#tallaFetal').val(parseInt(lf * 0.55 + 9.6));
	 //$('#tallaFetal').val(parseInt(6.18+5.9*lf/10));

	 eg = eg + 12;
	 
	 if (eg >= 24){
	 
	  var Pct90Talla = [];
	  var Pct10Talla = [];
	  Pct90Talla[24] = 34.1;
	  Pct90Talla[25] = 35.7;
	  Pct90Talla[26] = 37.2;
	  Pct90Talla[27] = 38.7;
	  Pct90Talla[28] = 40.1;
	  Pct90Talla[29] = 41.6;
	  Pct90Talla[30] = 43.1;
	  Pct90Talla[31] = 44.3;
	  Pct90Talla[32] = 45.6;
	  Pct90Talla[33] = 46.8;
	  Pct90Talla[34] = 47.9;
	  Pct90Talla[35] = 49.1;
	  Pct90Talla[36] = 49.9;
	  Pct90Talla[37] = 50.8;
	  Pct90Talla[38] = 51.5;
	  Pct90Talla[39] = 52.1;
	  Pct90Talla[40] = 52.6;
	  Pct90Talla[41] = 52.9;
	  Pct90Talla[42] = 53.1;		 
		 
	  Pct10Talla[24] = 29.8;
	  Pct10Talla[25] = 31.1;
	  Pct10Talla[26] = 32.3;
	  Pct10Talla[27] = 33.6;
	  Pct10Talla[28] = 35.1;
	  Pct10Talla[29] = 36.5;
	  Pct10Talla[30] = 37.7;
	  Pct10Talla[31] = 39.1;
	  Pct10Talla[32] = 40.5;
	  Pct10Talla[33] = 41.8;
	  Pct10Talla[34] = 43.1;
	  Pct10Talla[35] = 44.2;
	  Pct10Talla[36] = 45.3;
	  Pct10Talla[37] = 46.3;
	  Pct10Talla[38] = 47.2;
	  Pct10Talla[39] = 47.9;
	  Pct10Talla[40] = 48.5;
	  Pct10Talla[41] = 48.8;
	  Pct10Talla[42] = 49.1;

          eg = parseInt(eg);
          var tallaFet = $('#tallaFetal').val(); 
          uno=Pct90Talla[eg] -  Pct10Talla[eg];
          dos=tallaFet -  Pct10Talla[eg];
		 
          ajustarProgreso(parseInt(80 / (uno) * (dos) + 10), "tallaPct");
		 ipn()
	 } 
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
	 ajustarProgreso(parseInt(95 / (uno) * (dos)), "cerebeloPct");
	 p50();
 }
};

function pctlh() {

 var pct05 = [];
 var pct95 = [];

        pct05[12] = 4.8;   pct95[12] = 12.3;        pct05[13] = 7.6;   pct95[13] = 15.1;
        pct05[14] = 10.3;  pct95[14] = 17.9;        pct05[15] = 13.1;  pct95[15] = 20.7;
        pct05[16] = 15.8;  pct95[16] = 23.5;        pct05[17] = 18.5;  pct95[17] = 26.3;
        pct05[18] = 21.2;  pct95[18] = 29.1;        pct05[19] = 23.8;  pct95[19] = 31.6;
        pct05[20] = 26.3;  pct95[20] = 34.2;        pct05[21] = 28.8;  pct95[21] = 36.7;
        pct05[22] = 31.2;  pct95[22] = 39.2;        pct05[23] = 33.5;  pct95[23] = 41.6;
        pct05[24] = 35.7;  pct95[24] = 43.9;        pct05[25] = 37.9;  pct95[25] = 46.1;
        pct05[26] = 39.9;  pct95[26] = 48.1;        pct05[27] = 41.9;  pct95[27] = 50.1;
        pct05[28] = 43.7;  pct95[28] = 52.1;        pct05[29] = 45.5;  pct95[29] = 53.9;
        pct05[30] = 47.2;  pct95[30] = 55.6;        pct05[31] = 48.9;  pct95[31] = 57.3;
        pct05[32] = 50.4;  pct95[32] = 58.9;        pct05[33] = 52.1;  pct95[33] = 60.5;
        pct05[34] = 53.4;  pct95[34] = 62.1;        pct05[35] = 54.8;  pct95[35] = 63.5;
        pct05[36] = 56.2;  pct95[36] = 64.9;        pct05[37] = 57.6;  pct95[37] = 66.4;
        pct05[38] = 59.8;  pct95[38] = 67.8;        pct05[39] = 60.4;  pct95[39] = 69.3;
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
		 ajustarProgreso(resultado, "lhPct");
		p50();
	}
}

function egsaco() {

var y = [];

    y[5] =4.2;    y[6] =4.3;    y[7] =4.4;    y[8] =4.5;
    y[9] =4.6;    y[10] =5;    y[11] =5.1;    y[12] =5.2;
    y[13] =5.3;    y[14] =5.4;    y[15] =5.5;    y[16] =5.6;
    y[17] =6;    y[18] =6.1;    y[19] =6.2;    y[20] =6.3;
    y[21] =6.4;    y[22] =6.5;    y[23] =6.6;    y[24] =7;
    y[25] =7.1;    y[26] =7.2;    y[27] =7.3;    y[28] =7.4;
    y[29] =7.5;    y[30] =7.6;    y[31] =8;    y[32] =8.1;
    y[33] =8.2;    y[34] =8.3;    y[35] =8.4;    y[36] =8.5;
    y[37] =8.6;    y[38] =9;    y[39] =9.1;    y[40] =9.2;
    y[41] =9.3;    y[42] =9.4;    y[43] =9.5;    y[44] =9.6;
    y[45] =9.6;    y[46] =10;    y[47] =10.1;    y[48] =10.2;
    y[49] =10.3;    y[50] =10.4;    y[51] =10.5;    y[52] =11;
    y[53] =11.1;    y[54] =11.2;    y[55] =11.3;    y[56] =11.4;
    y[57] =11.5;    y[58] =11.6;    y[59] =12;    y[60] =12.1;
    y[61] =12.2;
	
    var saco = document.getElementById("saco").value;
    saco = saco.replace(",", ".");
    var prs = parseInt(saco);

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
    lcn = lcn.toString();
    lcn = lcn.replace(",", ".");
    lcn = parseFloat(lcn);

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

 pct5[0] = 0.32; pct5[1] = 0.32; pct5[2] = 0.32; pct5[3] = 0.32;
 pct5[4] = 0.32; pct5[5] = 0.32; pct5[6] = 0.31; pct5[7] = 0.31;
 pct5[8] = 0.31; pct5[9] = 0.3; pct5[10] = 0.29; pct5[11] = 0.28;
 pct5[12] = 0.28; pct5[13] = 0.27; pct5[14] = 0.26; pct5[15] = 0.25;
 pct5[16] = 0.24; pct5[17] = 0.23; pct5[18] = 0.22; pct5[19] = 0.21;
 pct5[20] = 0.2;
    
 pct95[0] = 0.83; pct95[1] = 0.83; pct95[2] = 0.83; pct95[3] = 0.83;
 pct95[4] = 0.83; pct95[5] = 0.83; pct95[6] = 0.82; pct95[7] = 0.82;
 pct95[8] = 0.81; pct95[9] = 0.81; pct95[10] = 0.8; pct95[11] = 0.79;
 pct95[12] = 0.78; pct95[13] = 0.77; pct95[14] = 0.76; pct95[15] = 0.75;
 pct95[16] = 0.74; pct95[17] = 0.73; pct95[18] = 0.72; pct95[19] = 0.71;
 pct95[20] = 0.7;


 var eg=0;
 
 eg=parseFloat(localStorage.eg);
 var dv = document.getElementById("dv").value;
dv = dv.toString();
 dv = dv.replace(",", ".");
 dv = parseFloat(dv);
	
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
      ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "dvPct");
 }

}

function pctau() {
	var pct5 = [];
	var pct95 = [];
	var xpct5 = [];
	var xpct95 = [];

	pct5[0] = 0.97;	pct5[1] = 0.95;
	pct5[2] = 0.94;	pct5[3] = 0.92;
	pct5[4] = 0.9;	pct5[5] = 0.89;
	pct5[6] = 0.87;	pct5[7] = 0.85;
	pct5[8] = 0.82;	pct5[9] = 0.8;
	pct5[10] = 0.78;	pct5[11] = 0.75;
	pct5[12] = 0.73;	pct5[13] = 0.7;
	pct5[14] = 0.67;	pct5[15] = 0.65;
	pct5[16] = 0.62;	pct5[17] = 0.58;
	pct5[18] = 0.55;	pct5[19] = 0.52;
	pct5[20] = 0.49;

	pct95[0] = 1.6;	pct95[1] = 1.56;
	pct95[2] = 1.53;	pct95[3] = 1.5;
	pct95[4] = 1.46;	pct95[5] = 1.43;
	pct95[6] = 1.4;	pct95[7] = 1.37;
	pct95[8] = 1.35;	pct95[9] = 1.32;
	pct95[10] = 1.29;	pct95[11] = 1.27;
	pct95[12] = 1.25;	pct95[13] = 1.22;
	pct95[14] = 1.2;	pct95[15] = 1.18;
	pct95[16] = 1.16;	pct95[17] = 1.14;
	pct95[18] = 1.13;	pct95[19] = 1.11;
	pct95[20] = 1.09;

	xpct5[20] = 0.78;	xpct5[21] = 0.87;
	xpct5[22] = 0.95;	xpct5[23] = 1.02;
	xpct5[24] = 1.09;	xpct5[25] = 1.15;
	xpct5[26] = 1.2;	xpct5[27] = 1.24;
	xpct5[28] = 1.28;	xpct5[29] = 1.31;
	xpct5[30] = 1.33;	xpct5[31] = 1.35;
	xpct5[32] = 1.36;	xpct5[33] = 1.36;
	xpct5[34] = 1.36;	xpct5[35] = 1.34;
	xpct5[36] = 1.32;	xpct5[37] = 1.3;
	xpct5[38] = 1.26;	xpct5[39] = 1.22;
	xpct5[40] = 1.18;

	xpct95[20] = 1.68;	xpct95[21] = 1.88;	xpct95[22] = 2.06;	xpct95[23] = 2.22;
	xpct95[24] = 2.36;	xpct95[25] = 2.49;	xpct95[26] = 2.6;	xpct95[27] = 2.7;
	xpct95[28] = 2.78;	xpct95[29] = 2.84;	xpct95[30] = 2.89;	xpct95[31] = 2.92;
	xpct95[32] = 2.93;	xpct95[33] = 2.93;	xpct95[34] = 2.91;	xpct95[35] = 2.87;
	xpct95[36] = 2.82;	xpct95[37] = 2.75;	xpct95[38] = 2.67;	xpct95[39] = 2.57;
	
	var eg=0;
	eg=parseFloat(localStorage.eg);
 	var aumb = $('#ipau').val();
	aumb = aumb.toString();
 	aumb = aumb.replace(",", ".");
 	aumb = parseFloat(aumb);
 
	if (eg < 20) {
		$('#ipauPct').val('0');
	}
	else if (eg > 40)
	{
		$('#ipauPct').val('0');
	}
	else {
		eg = eg - 20;
		eg = parseInt(eg);
		var uno=pct95[eg] - pct5[eg];
		var dos=aumb - pct5[eg];
		ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ipauPct");
		
		if ($('#ipacm').val()){
			var ccp = ($('#ipacm').val() / $('#ipau').val());

			$('#ccp').val(ccp.toFixed(2));

			eg = eg + 20;
			uno = xpct95[eg] - xpct5[eg];
			dos = ccp - xpct5[eg];

			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ccpPct");
		}
	}
}

function pctacm() {

	var pct5 = [];
	var pct95 = [];
	var xpct5 = [];
	var xpct95 = [];

	pct5[0] = 1.24;pct5[1] = 1.29;	pct5[2] = 1.34;pct5[3] = 1.37;
	pct5[4] = 1.4;pct5[5] = 1.43;	pct5[6] = 1.44;pct5[7] = 1.45;
	pct5[8] = 1.45;pct5[9] = 1.44;	pct5[10] = 1.43;pct5[11] = 1.41;
	pct5[12] = 1.38;pct5[13] = 1.34;	pct5[14] = 1.3;pct5[15] = 1.25;
	pct5[16] = 1.19;pct5[17] = 1.13;	pct5[18] = 1.05;pct5[19] = 0.98;
	pct5[20] = 0.89;

	pct95[0] = 1.98;	pct95[1] = 2.12;	pct95[2] = 2.25;	pct95[3] = 2.36;
	pct95[4] = 2.45;	pct95[5] = 2.53;	pct95[6] = 2.59;	pct95[7] = 2.63;
	pct95[8] = 2.66;	pct95[9] = 2.67;	pct95[10] = 2.67;	pct95[11] = 2.65;
	pct95[12] = 2.62;	pct95[13] = 2.56;	pct95[14] = 2.5;	pct95[15] = 2.41;
	pct95[16] = 2.31;	pct95[17] = 2.2;	pct95[18] = 2.07;	pct95[19] = 1.92;
	pct95[20] = 1.76;

	xpct5[20] = 0.78;	xpct5[21] = 0.87;	xpct5[22] = 0.95;	xpct5[23] = 1.02;
	xpct5[24] = 1.09;	xpct5[25] = 1.15;	xpct5[26] = 1.2;	xpct5[27] = 1.24;
	xpct5[28] = 1.28;	xpct5[29] = 1.31;	xpct5[30] = 1.33;	xpct5[31] = 1.35;
	xpct5[32] = 1.36;	xpct5[33] = 1.36;	xpct5[34] = 1.36;	xpct5[35] = 1.34;
	xpct5[36] = 1.32;	xpct5[37] = 1.3;	xpct5[38] = 1.26;	xpct5[39] = 1.22;
	xpct5[40] = 1.18;

	xpct95[20] = 1.68;	xpct95[21] = 1.88;	xpct95[22] = 2.06;	xpct95[23] = 2.22;
	xpct95[24] = 2.36;	xpct95[25] = 2.49;	xpct95[26] = 2.6;	xpct95[27] = 2.7;
	xpct95[28] = 2.78;	xpct95[29] = 2.84;	xpct95[30] = 2.89;	xpct95[31] = 2.92;
	xpct95[32] = 2.93;	xpct95[33] = 2.93;	xpct95[34] = 2.91;	xpct95[35] = 2.87;
	xpct95[36] = 2.82;	xpct95[37] = 2.75;	xpct95[38] = 2.67;	xpct95[39] = 2.57;

	var eg=0;

	eg=parseFloat(localStorage.eg);
	var acm = $('#ipacm').val();
	acm = acm.toString();
 	acm = acm.replace(",", ".");
 	acm = parseFloat(acm);

	if (eg < 20) {  
		$('#ipacmPct').val('0');
		$('#ccp').val('0');
		$('#ccpPct').val('0');
	}
	else if (eg > 40)
	{
		$('#ipacmPct').val('0');
		$('#ccp').val('0');
		$('#ccpPct').val('0');
	}
	else {
		eg = eg - 20;
		eg = parseInt(eg);
		var uno = pct95[eg] - pct5[eg];
		var dos = acm - pct5[eg];
 
		ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ipacmPct");

		if ($('#ipau').val()){
			var ccp = (acm / $('#ipau').val());

			$('#ccp').val(ccp.toFixed(2));

			eg = eg + 20;
			uno = xpct95[eg] - xpct5[eg];
			dos = ccp - xpct5[eg];

			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ccpPct");
		}
	}
}

function psohdlk() {

    var CC = 0;
    var CA = 0;

 CC=parseFloat($("#cc").val());
 CA=parseInt($("#ca").val());
 if ($("#cc").val() && $("#cc").val()) {
    var psoP =  Math.pow(10, (1.182 + 0.00273 * CC + 0.007057 * CA - 0.0000063 *  Math.pow(CA, 2) - 0.000002184 * CC * CA));
    $("#pfe").val(psoP.toFixed(0));
    pctpfe();
	valccca()
	 ipn()
  }
}

function pctpfe() {

 var pct10 = [];
 var pct90 = [];

 pct10[0] = 97;pct10[1] = 121;pct10[2] = 150;pct10[3] = 185;pct10[4] = 227;pct10[5] = 275;
 pct10[6] = 331;pct10[7] = 398;pct10[8] = 471;pct10[9] = 556;pct10[10] = 652;pct10[11] = 758;
 pct10[12] = 876;pct10[13] = 1004;pct10[14] = 1145;pct10[15] = 1294;pct10[16] = 1453;
 pct10[17] = 1621;pct10[18] = 1794;pct10[19] = 1973;pct10[20] = 2154;pct10[21] = 2335;
 pct10[22] = 2513; pct10[23] = 2686; pct10[24] = 2851; pct10[25] = 2985;

 pct90[0] = 137;pct90[1] = 171;pct90[2] = 212;pct90[3] = 261;pct90[4] = 319;
 pct90[5] = 387;pct90[6] = 467;pct90[7] = 559;pct90[8] = 665;pct90[9] = 784;
 pct90[10] = 918;pct90[11] = 1068;pct90[12] = 1234;pct90[13] = 1416;pct90[14] = 1613;
 pct90[15] = 1824;pct90[16] = 2049;pct90[17] = 2285;pct90[18] = 2530;
 pct90[19] = 2781;pct90[20] = 3036;pct90[21] = 3291;pct90[22] = 3543;pct90[23] = 3786;
 pct90[24] = 4019;pct90[25] = 4234;

 var eg=0;
 var pfe=0;
 eg=parseFloat(localStorage.eg);
 pfe=parseInt($("#pfe").val());

 if (eg < 15) {  
   $("#pfePct").val('0');
 }
 else if (eg > 40)
 {
   $("#pfePct").val('0');
 }
 else {
  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct90[eg] - pct10[eg];
  var dos=pfe - pct10[eg];
  var pctFinal = (80 / (uno) * (dos)) + 10
  ajustarProgreso(pctFinal, "pfePct");
 }
}

function pctbvm() {

 var pct5 = [];
 var pct95 = [];

    pct5[0] = 23;    pct5[1] = 25;    pct5[2] = 27;    pct5[3] = 28;
    pct5[4] = 29;    pct5[5] = 29;    pct5[6] = 30;    pct5[7] = 30;
    pct5[8] = 30;    pct5[9] = 30;    pct5[10] = 30;    pct5[11] = 30;
    pct5[12] = 30;    pct5[13] = 29;    pct5[14] = 29;    pct5[15] = 29;
    pct5[16] = 29;    pct5[17] = 29;    pct5[18] = 28;    pct5[19] = 28;
    pct5[20] = 27;    pct5[21] = 26;    pct5[22] = 24;    pct5[23] = 23;
    pct5[24] = 21;

     pct95[0] = 59;     pct95[1] = 62;     pct95[2] = 64;     pct95[3] = 66;
     pct95[4] = 67;     pct95[5] = 68;     pct95[6] = 68;     pct95[7] = 68;
     pct95[8] = 68;     pct95[9] = 68;     pct95[10] = 68;     pct95[11] = 69;
     pct95[12] = 69;     pct95[13] = 69;     pct95[14] = 69;     pct95[15] = 70;
     pct95[16] = 71;     pct95[17] = 72;     pct95[18] = 72;     pct95[19] = 72;
     pct95[20] = 71;     pct95[21] = 70;     pct95[22] = 68;     pct95[23] = 66;
     pct95[24] = 62;

 var eg=0;
 var bvm=0;
 
 eg=parseFloat(localStorage.eg);
 bvm=parseInt($("#bvm").val());
 
 if (eg < 16) {  
   $("#bvm").val('0');
 }
 else if (eg > 40)
 {
   $("#bvm").val('0');
 }
 else {
  eg = eg - 16;
  eg = parseInt(eg);
  var uno=pct95[eg] - pct5[eg];
  var dos=bvm - pct5[eg];
ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "bvmPct");

 }
}

function pctila() {

 var pct5 = [];
 var pct95 = [];


 pct5[0] = 79;pct5[1] = 83;pct5[2] = 87;pct5[3] = 90;pct5[4] = 93;pct5[5] = 95;
 pct5[6] = 97;pct5[7] = 98;pct5[8] = 98;pct5[9] = 97;pct5[10] = 97;pct5[11] = 95;
 pct5[12] = 94;pct5[13] = 92;pct5[14] = 90;pct5[15] = 88;pct5[16] = 86;pct5[17] = 83;
 pct5[18] = 81;pct5[19] = 79;pct5[20] = 77;pct5[21] = 75;pct5[23] = 73;
 pct5[24] = 72;pct5[25] = 71;

 pct95[0] = 185;pct95[1] = 194;pct95[2] = 200;pct95[3] = 204;pct95[4] = 208;
 pct95[5] = 212;pct95[6] = 214;pct95[7] = 217;pct95[8] = 218;pct95[9] = 221;
 pct95[10] = 223;pct95[11] = 226;pct95[12] = 228;pct95[13] = 231;
 pct95[14] = 234;pct95[15] = 238;pct95[16] = 242;pct95[17] = 245;
 pct95[18] = 248;pct95[19] = 249;pct95[20] = 249;pct95[21] = 244;
 pct95[22] = 239;pct95[23] = 226;pct95[24] = 214;

 var eg=0;
 var ila=0;
 
 eg=parseFloat(localStorage.eg);
 ila=parseInt($("#ila").val());
 
 if (eg < 16) {  
   $("#ila").val('0');
 }
 else if (eg > 40)
 {
   $("#ila").val('0');
 }
 else {
  eg = eg - 16;
  eg = parseInt(eg);
  var uno=pct95[eg] - pct5[eg];
  var dos=ila - pct5[eg];
  ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ilaPct");
 }
} 

function valccca() {

 var cc=parseInt($("#cc").val());
 var ca=parseInt($("#ca").val());
 if (cc > 0) {
  if (ca >0 ) {
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

 var eg=0;
 eg=parseFloat(localStorage.eg);

 if (eg < 15) {
   $("#cccaPct").val('0');
 }
 else if (eg > 40)
 {
   $("#cccaPct").val('0');
 }
 else {
  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=ccca - pct3[eg];

  ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "cccaPct");
 }
  } else {
    $("#ccca").val('0');
    $("#cccaPct").val('0');
  }
 } else {
    $("#ccca").val('0');
    $("#cccaPct").val('0');
 }
}

function ajustarProgreso(valor, objeto){
	$("#"+objeto + " > .pivote-uno").html("");
	$("#"+objeto + " > .pivote-dos").html("");
	$("#"+objeto + " > .pivote-cero").html("|");
	$("#"+objeto + " > .pivote-centro").html("|");
	$("#"+objeto + " > .pivote-cien").html("|");
	$("#"+objeto + " > .pivote-tres").html("");
	$("#"+objeto + " > .pivote-cuatro").html("");
	
	if (valor <= 6){
		$("#"+objeto + " > .pivote-cero").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 10){
		$("#"+objeto + " > .pivote-uno").css( "width", "10%");
		$("#"+objeto + " > .pivote-uno").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-dos").css("width", "25%");
	}
	else if (valor <= 20){
		$("#"+objeto + " > .pivote-uno").css( "width", "17.5%");
		$("#"+objeto + " > .pivote-uno").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-dos").css("width", "17.5%");
	}
	else if (valor <= 30){
		$("#"+objeto + " > .pivote-uno").css( "width", "20%");
		$("#"+objeto + " > .pivote-dos").css("width", "15%");
		$("#"+objeto + " > .pivote-dos").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 40){
		$("#"+objeto + " > .pivote-uno").css( "width", "25%");
		$("#"+objeto + " > .pivote-dos").css("width", "10%");
		$("#"+objeto + " > .pivote-dos").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 50){
		$("#"+objeto + " > .pivote-centro").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 60){
		$("#"+objeto + " > .pivote-tres").css( "width", "10%");
		$("#"+objeto + " > .pivote-tres").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-cuatro").css("width", "25%");
	}
	else if (valor <= 70){
		$("#"+objeto + " > .pivote-tres").css( "width", "17.5%");
		$("#"+objeto + " > .pivote-tres").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-cuatro").css("width", "17.5%");
	}
	else if (valor <= 80){
		$("#"+objeto + " > .pivote-tres").css( "width", "20%");
		$("#"+objeto + " > .pivote-cuatro").css("width", "15%");
		$("#"+objeto + " > .pivote-cuatro").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 90){
		$("#"+objeto + " > .pivote-tres").css( "width", "25%");
		$("#"+objeto + " > .pivote-cuatro").css("width", "10%");
		$("#"+objeto + " > .pivote-cuatro").html("<strong style='color:red;'>X</strong>");
	}
	else{
		$("#"+objeto + " > .pivote-cien").html("<strong style='color:red;'>X</strong>");
	}
}

function pctut() {

	var pct5 = [];
	var pct95 = [];

	pct5[0] = 1.23; pct5[1] = 1.18;	pct5[2] = 1.11; pct5[3] = 1.05;
	pct5[4] = 0.99; pct5[5] = 0.94;	pct5[6] = 0.89; pct5[7] = 0.85;
	pct5[8] = 0.81; pct5[9] = 0.78;	pct5[10] = 0.74; pct5[11] = 0.71;
	pct5[12] = 0.69; pct5[13] = 0.66;	pct5[14] = 0.64; pct5[15] = 0.62;
	pct5[16] = 0.6; pct5[17] = 0.58;	pct5[18] = 0.56; pct5[19] = 0.55;
	pct5[20] = 0.54; pct5[21] = 0.52;	pct5[22] = 0.51; pct5[23] = 0.51;
	pct5[24] = 0.51; pct5[25] = 0.49;	pct5[26] = 0.48; pct5[27] = 0.48;
	pct5[28] = 0.47; pct5[29] = 0.47;	pct5[30] = 0.47;

	pct95[0] = 2.84; pct95[1] = 2.71;	pct95[2] = 2.53; pct95[3] = 2.38;
	pct95[4] = 2.24; pct95[5] = 2.11;	pct95[6] = 1.99; pct95[7] = 1.88;
	pct95[8] = 1.79; pct95[9] = 1.71;	pct95[10] = 1.61; pct95[11] = 1.54;
	pct95[12] = 1.47; pct95[13] = 1.41;	pct95[14] = 1.35; pct95[15] = 1.3;
	pct95[16] = 1.25; pct95[17] = 1.21;	pct95[18] = 1.17; pct95[19] = 1.13;
	pct95[20] = 1.11; pct95[21] = 1.06;	pct95[22] = 1.04; pct95[23] = 1.01;
	pct95[24] = 0.99; pct95[25] = 0.97;	pct95[26] = 0.95; pct95[27] = 0.94;
	pct95[28] = 0.92; pct95[29] = 0.91;	pct95[30] = 0.91;
//
	var eg=0;
 
	eg=parseFloat(localStorage.eg);
	var utd = $("#aud").val();
	utd = utd.toString(); 
 	utd = utd.replace(",", ".");
 	utd = parseFloat(utd);
	var uti =$("#aui").val();
	uti = uti.toString();
 	uti = uti.replace(",", ".");
 	uti = parseFloat(uti);
	
	var utprom = ((uti + utd) / 2)
	$("#auprom").val(utprom.toFixed(2));

	if (eg < 10) {  
		$("#audPct").val('0');
		$("#auiPct").val('0');
		$("#auPct").val('0');
	 }
	 else if (eg > 40)
	 {
	   $("#audPct").val('0');
	   $("#auiPct").val('0');
	   $("#auPct").val('0');
	 }
	 else {
		eg = eg - 10;
		var uno=0;
		var dos=0;
		if (utd > 0){
			eg = parseInt(eg);
			uno=pct95[eg] - pct5[eg];
			dos=utd - pct5[eg];
			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "audPct");
		}
		if (uti > 0){
			eg = parseInt(eg);
			uno=pct95[eg] - pct5[eg];
			dos=uti - pct5[eg];
			$('#auiPct').val(parseInt(90 / (uno) * (dos) + 5));
			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "auiPct");
		}
		if ($("#aud").val() && $("#aui").val()){
			uno = pct95[eg] - pct5[eg];
			dos = utprom - pct5[eg];
			$('#auPct').val(parseInt(90 / (uno) * (dos) + 5));
			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "auPct");
		}
	 }
}

function imprSelec(muestra)
{
	var ficha=$("#popupBody").html();
	var document = '<!DOCTYPE html><html lang="es-CL"><head><meta charset="utf-8"><title>Impresión de Gráficos</title><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel="stylesheet" href="consulta.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">:ESTILO</head><body><div class="container">:DATOS</div>:FUNCION</body></html>';
	var ventimp=window.open(" ","popimpr");
	var estilo = '<style>@media print {.col{width:48%;float:left;}.pie-pagina{font-size:9px;}#lineclear{clear:both;}h4{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	document = document.replace(":DATOS", ficha);
	document = document.replace(":ESTILO", estilo);
	document = document.replace(":FUNCION", funcion);
	document = document.replace("invisible", "");
	
	ventimp.document.write(document);
	ventimp.document.close();
	ventimp.show();
}

function p50() {

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

    var cb = $('#cerebelo').val();
    cb = cb / 10;
    var egHill = 6.37+(5.4*cb)+(0.78*Math.pow(cb,2))-(0.13*Math.pow(cb,3));
    //añadir mayor presicion, ya se suma 1 dia
    cb = Math.round( egHill * 10 ) / 10;

    var  humeroPromedioDE = [];

    humeroPromedioDE[10]=12.4;humeroPromedioDE[11]=12.6;humeroPromedioDE[12]=13.1;humeroPromedioDE[13]=13.4;
    humeroPromedioDE[14]=13.6;humeroPromedioDE[15]=14.1;humeroPromedioDE[16]=14.4;humeroPromedioDE[17]=14.6;
    humeroPromedioDE[18]=15.1;humeroPromedioDE[19]=15.4;humeroPromedioDE[20]=15.6;humeroPromedioDE[21]=16.2;
    humeroPromedioDE[22]=16.5;humeroPromedioDE[23]=17.1;humeroPromedioDE[24]=17.3;humeroPromedioDE[25]=17.6;
    humeroPromedioDE[26]=18.1;humeroPromedioDE[27]=18.4;humeroPromedioDE[28]=19;humeroPromedioDE[29]=19.3;
    humeroPromedioDE[30]=19.6;humeroPromedioDE[31]=20.2;humeroPromedioDE[32]=20.5;humeroPromedioDE[33]=21.1;
    humeroPromedioDE[34]=21.4;humeroPromedioDE[35]=22;humeroPromedioDE[36]=22.4;humeroPromedioDE[37]=22.6;
    humeroPromedioDE[38]=23.3;humeroPromedioDE[39]=23.6;humeroPromedioDE[40]=24.2;humeroPromedioDE[41]=24.6;
    humeroPromedioDE[42]=25.2;humeroPromedioDE[43]=25.5;humeroPromedioDE[44]=26.1;humeroPromedioDE[45]=26.5;
    humeroPromedioDE[46]=27.1;humeroPromedioDE[47]=27.5;humeroPromedioDE[48]=28.1;humeroPromedioDE[49]=28.6;
    humeroPromedioDE[50]=29.2;humeroPromedioDE[51]=29.6;humeroPromedioDE[52]=30.2;humeroPromedioDE[53]=30.6;
    humeroPromedioDE[54]=31.3;humeroPromedioDE[55]=32;humeroPromedioDE[56]=32.4;humeroPromedioDE[57]=33.1;
    humeroPromedioDE[58]=33.4;humeroPromedioDE[59]=34.1;humeroPromedioDE[60]=34.6;humeroPromedioDE[61]=35.2;
    humeroPromedioDE[62]=35.6;humeroPromedioDE[63]=36.4;humeroPromedioDE[64]=37.1;humeroPromedioDE[65]=37.5;
    humeroPromedioDE[66]=38.2;humeroPromedioDE[67]=38.6;humeroPromedioDE[68]=39.4;humeroPromedioDE[69]=40.1;
     
    var lh = parseInt($('#lh').val());
    lh =  humeroPromedioDE[lh];

     var dbpdias = (Math.floor(dbp) * 7) + ((dbp - Math.floor(dbp)) * 10);
     var ccdias = (Math.floor(cc) * 7) + ((cc - Math.floor(cc)) * 10);
     var lfdias = (Math.floor(lf) * 7) + ((lf - Math.floor(lf)) * 10);

     if (cb > 0) {
        var cbdias = (Math.floor(cb) * 7) + ((cb - Math.floor(cb)) * 10);
        egbio = (ccdias + lfdias + cbdias) /3;
     }
     else {
        egbio = (dbpdias + ccdias + lfdias) /3;
     }

     if (lh > 0) {
        var lhdias = (Math.floor(lh) * 7) + ((lh - Math.floor(lh)) * 10);
        egbio = (lhdias + egbio) /2;
     }

     egbio = Math.floor(egbio / 7)+"."+ Math.floor(egbio - (Math.floor(egbio/7) *7));

     $('#egP50').val(egbio);
    }

function ipn() {
    var talla = $('#tallaFetal').val();
    var peso = $('#pfe').val();

    if (talla > 0) {
        if (peso > 0) {
            var IPN = peso / (Math.pow((talla * 10), 3));
            IPN = IPN * 100000;
           $('#ipn').val(IPN.toFixed(2));
	
	   var Pct10IPN = [];
	   var Pct90IPN = [];
		
	   Pct10IPN[24] = 1.79;	   Pct10IPN[25] = 1.83;
	   Pct10IPN[26] = 1.87;	   Pct10IPN[27] = 1.91;
	   Pct10IPN[28] = 1.95;	   Pct10IPN[29] = 1.99;
	   Pct10IPN[30] = 2.04;	   Pct10IPN[31] = 2.08;
	   Pct10IPN[32] = 2.12;	   Pct10IPN[33] = 2.16;
	   Pct10IPN[34] = 2.2;	   Pct10IPN[35] = 2.25;
	   Pct10IPN[36] = 2.29;	   Pct10IPN[37] = 2.33;
	   Pct10IPN[38] = 2.37;	   Pct10IPN[39] = 2.41;
	   Pct10IPN[40] = 2.45;	   Pct10IPN[41] = 2.5;
	   Pct10IPN[42] = 2.54;
		
	   Pct90IPN[24] = 2.54;	   Pct90IPN[25] = 2.57;
	   Pct90IPN[26] = 2.59;	   Pct90IPN[27] = 2.62;
	   Pct90IPN[28] = 2.65;	   Pct90IPN[29] = 2.68;
	   Pct90IPN[30] = 2.71;	   Pct90IPN[31] = 2.74;
	   Pct90IPN[32] = 2.77;	   Pct90IPN[33] = 2.8;
	   Pct90IPN[34] = 2.83;	   Pct90IPN[35] = 2.86;
	   Pct90IPN[36] = 2.89;	   Pct90IPN[37] = 2.92;
	   Pct90IPN[38] = 2.95;	   Pct90IPN[39] = 2.98;
	   Pct90IPN[40] = 3.01;	   Pct90IPN[41] = 3.04;
	   Pct90IPN[42] = 3.07;
	
	   var eg = parseFloat(localStorage.eg);
           eg = parseInt(eg);
           var uno=Pct90IPN[eg] - Pct10IPN[eg];
           var dos=IPN - Pct10IPN[eg];

           ajustarProgreso(parseInt(80 / (uno) * (dos) + 10), "IPNPct");

        }
    }
}
