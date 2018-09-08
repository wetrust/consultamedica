function pctlf() {

 var pct3 = [];
 var pct97 = [];

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




	  var Pct90Talla = [];
	  var Pct10Talla = [];
	  Pct90Talla[24] = 34.1;	  Pct90Talla[25] = 35.7;	  Pct90Talla[26] = 37.2;	  Pct90Talla[27] = 38.7;
	  Pct90Talla[28] = 40.1;	  Pct90Talla[29] = 41.6;	  Pct90Talla[30] = 43.1;	  Pct90Talla[31] = 44.3;
	  Pct90Talla[32] = 45.6;	  Pct90Talla[33] = 46.8;	  Pct90Talla[34] = 47.9;	  Pct90Talla[35] = 49.1;
	  Pct90Talla[36] = 49.9;	  Pct90Talla[37] = 50.8;	  Pct90Talla[38] = 51.5;	  Pct90Talla[39] = 52.1;
	  Pct90Talla[40] = 52.6;	  Pct90Talla[41] = 52.9;	  Pct90Talla[42] = 53.1;

	  Pct10Talla[24] = 29.8;	  Pct10Talla[25] = 31.1;	  Pct10Talla[26] = 32.3;	  Pct10Talla[27] = 33.6;
	  Pct10Talla[28] = 35.1;	  Pct10Talla[29] = 36.5;	  Pct10Talla[30] = 37.7;	  Pct10Talla[31] = 39.1;
	  Pct10Talla[32] = 40.5;	  Pct10Talla[33] = 41.8;	  Pct10Talla[34] = 43.1;	  Pct10Talla[35] = 44.2;
	  Pct10Talla[36] = 45.3;	  Pct10Talla[37] = 46.3;	  Pct10Talla[38] = 47.2;	  Pct10Talla[39] = 47.9;
	  Pct10Talla[40] = 48.5;	  Pct10Talla[41] = 48.8;	  Pct10Talla[42] = 49.1;

 var eg=0;
 var lf=0;
 
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 lf=parseInt(document.getElementById("lf").value);
 
 if (eg < 12) {  
   document.getElementById("pctlf").innerHTML="";
 }
 else if (eg > 40)
 {
   document.getElementById("pctlf").innerHTML="";
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=lf - pct3[eg];
  
  document.getElementById("pctlf").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("lf-pct-informe").innerHTML = (parseInt(95 / (uno) * (dos) + 3));

  //const c1 = new Number(11.20178254);
  //const c2 = new Number(1.01704237);

  //var N = new Number(c1 * Math.pow(c2, lf));
  var LFMenos2DE = [];
  var LFMas2DE = [];

    LFMenos2DE[0] = 3;
    LFMenos2DE[1] = 5;
    LFMenos2DE[2] = 6;
    LFMenos2DE[3] = 11;
    LFMenos2DE[4] = 15;
    LFMenos2DE[5] = 20;
    LFMenos2DE[6] = 19;
    LFMenos2DE[7] = 23;
    LFMenos2DE[8] = 27;
    LFMenos2DE[9] = 28;
    LFMenos2DE[10] = 31;
    LFMenos2DE[11] = 34;
    LFMenos2DE[12] = 37;
    LFMenos2DE[13] = 38;
    LFMenos2DE[14] = 41;
    LFMenos2DE[15] = 45;
    LFMenos2DE[16] = 46;
    LFMenos2DE[17] = 45;
    LFMenos2DE[18] = 49;
    LFMenos2DE[19] = 47;
    LFMenos2DE[20] = 54;
    LFMenos2DE[21] = 52;
    LFMenos2DE[22] = 56;
    LFMenos2DE[23] = 58;
    LFMenos2DE[24] = 59;
    LFMenos2DE[25] = 63;
    LFMenos2DE[26] = 63;
    LFMenos2DE[27] = 65;

    LFMas2DE[0] = 12;
    LFMas2DE[1] = 16;
    LFMas2DE[2] = 21;
    LFMas2DE[3] = 21;
    LFMas2DE[4] = 25;
    LFMas2DE[5] = 27;
    LFMas2DE[6] = 31;
    LFMas2DE[7] = 34;
    LFMas2DE[8] = 37;
    LFMas2DE[9] = 39;
    LFMas2DE[10] = 42;
    LFMas2DE[11] = 46;
    LFMas2DE[12] = 48;
    LFMas2DE[13] = 49;
    LFMas2DE[14] = 53;
    LFMas2DE[15] = 55;
    LFMas2DE[16] = 57
    LFMas2DE[17] = 60;
    LFMas2DE[18] = 62;
    LFMas2DE[19] = 67;
    LFMas2DE[20] = 66;
    LFMas2DE[21] = 71;
    LFMas2DE[22] = 71;
    LFMas2DE[23] = 72;
    LFMas2DE[24] = 73;
    LFMas2DE[25] = 74;
    LFMas2DE[26] = 75;
    LFMas2DE[27] = 78;

    uno=LFMas2DE[eg] - LFMenos2DE[eg];
    dos=lf - LFMenos2DE[eg];


  document.getElementById("eglf").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("lf-edad-informe2").innerHTML =(parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("lf-informe").innerHTML = lf;
  document.getElementById("lf-informe2").innerHTML = lf;
  document.getElementById("tf").innerHTML = parseInt(lf * 0.55 + 9.6);
  document.getElementById("tf-informe").innerHTML = parseInt(lf * 0.55 + 9.6) + " cm.";


  if (eg >= 12){
        eg = parseInt(eg) + 12;
        var tallaFet = parseInt(lf * 0.55 + 9.6);
        uno=parseFloat(Pct90Talla[eg]) -  parseFloat(Pct10Talla[eg]);
        dos=parseFloat(tallaFet) -  parseFloat(Pct10Talla[eg]);
        console.log(parseInt(80 / (uno) * (dos) + 10));
  		$('#tfPct').html(parseInt(80 / (uno) * (dos) + 10));
  }
  else{
        $('#tfPct').val("");
  }

  p50();
 }

} 
 
 
 