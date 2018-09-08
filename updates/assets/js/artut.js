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
 
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 var utd = parseFloat(document.getElementById("utd").value);
 var uti = parseFloat(document.getElementById("uti").value);
 document.getElementById("aud-informe").innerHTML=utd;
 document.getElementById("aui-informe").innerHTML=uti;

 if (eg < 10) {  
   document.getElementById("pctutd").innerHTML="0";
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
     document.getElementById("pct-aud-informe").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
 	}
 	if (uti > 0){
      eg = parseInt(eg);
      var uno=pct95[eg] - pct5[eg];
      var dos=uti - pct5[eg];
     document.getElementById("pctuti").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
     document.getElementById("pct-aui-informe").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
 	}
  	if (utd > 0){
 	 if (uti > 0){
      eg = parseInt(eg);
      var uno=pct95[eg] - pct5[eg];
      var dos = ((uti + utd) / 2) - pct5[eg];
      var utprom = ((uti + utd) / 2)
      document.getElementById("utp").innerHTML = utprom.toFixed(2);
     document.getElementById("pctutp").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
     document.getElementById("pau-informe").innerHTML= utprom.toFixed(2);
     document.getElementById("pct-pau-informe").innerHTML= (parseInt(90 / (uno) * (dos) + 5));
 	 }
 	}
 	document.getElementById("au-rango1-informe").innerHTML=pct5[eg] + " - " + pct95[eg];
    document.getElementById("au-rango2-informe").innerHTML=pct5[eg] + " - " + pct95[eg];
    document.getElementById("au-rango3-informe").innerHTML=pct5[eg] + " - " + pct95[eg];
 }
}