function pctumb() {

 var pct5 = [];
 var pct95 = [];

 pct5[0] = 0.97;
 pct5[1] = 0.95;
 pct5[2] = 0.94;
 pct5[3] = 0.92;
 pct5[4] = 0.9;
 pct5[5] = 0.89;
 pct5[6] = 0.87;
 pct5[7] = 0.85;
 pct5[8] = 0.82;
 pct5[9] = 0.8;
 pct5[10] = 0.78;
 pct5[11] = 0.75;
 pct5[12] = 0.73;
 pct5[13] = 0.7;
 pct5[14] = 0.67;
 pct5[15] = 0.65;
 pct5[16] = 0.62;
 pct5[17] = 0.58;
 pct5[18] = 0.55;
 pct5[19] = 0.52;
 pct5[20] = 0.49;

 pct95[0] = 1.6;
 pct95[1] = 1.56;
 pct95[2] = 1.53;
 pct95[3] = 1.5;
 pct95[4] = 1.46;
 pct95[5] = 1.43;
 pct95[6] = 1.4;
 pct95[7] = 1.37;
 pct95[8] = 1.35;
 pct95[9] = 1.32;
 pct95[10] = 1.29;
 pct95[11] = 1.27;
 pct95[12] = 1.25;
 pct95[13] = 1.22;
 pct95[14] = 1.2;
 pct95[15] = 1.18;
 pct95[16] = 1.16;
 pct95[17] = 1.14;
 pct95[18] = 1.13;
 pct95[19] = 1.11;
 pct95[20] = 1.09;

 var eg=0;
 
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 var aumb = parseFloat(document.getElementById("aumb").value);
 document.getElementById("aum-informe").innerHTML=aumb;
 
 if (eg < 20) {  
   document.getElementById("pctaumb").innerHTML="0";
 }
 else if (eg > 40)
 {
   document.getElementById("pctaumb").innerHTML="0";
 }
 else {
      eg = eg - 20;
      eg = parseInt(eg);
      document.getElementById("rgo-aum-informe").innerHTML=pct5[eg] + " - " + pct95[eg];
      var uno=pct95[eg] - pct5[eg];
      var dos=aumb - pct5[eg];
  
     document.getElementById("pctaumb").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
     document.getElementById("pct-aum-informe").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
 }

}