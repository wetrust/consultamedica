function pctcm() {

 var pct5 = [];
 var pct95 = [];

 var xpct5 = [];
 var xpct95 = [];

 pct5[0] = 1.24;
 pct5[1] = 1.29;
 pct5[2] = 1.34;
 pct5[3] = 1.37;
 pct5[4] = 1.4;
 pct5[5] = 1.43;
 pct5[6] = 1.44;
 pct5[7] = 1.45;
 pct5[8] = 1.45;
 pct5[9] = 1.44;
 pct5[10] = 1.43;
 pct5[11] = 1.41;
 pct5[12] = 1.38;
 pct5[13] = 1.34;
 pct5[14] = 1.3;
 pct5[15] = 1.25;
 pct5[16] = 1.19;
 pct5[17] = 1.13;
 pct5[18] = 1.05;
 pct5[19] = 0.98;
 pct5[20] = 0.89;

 pct95[0] = 1.98;
 pct95[1] = 2.12;
 pct95[2] = 2.25;
 pct95[3] = 2.36;
 pct95[4] = 2.45;
 pct95[5] = 2.53;
 pct95[6] = 2.59;
 pct95[7] = 2.63;
 pct95[8] = 2.66;
 pct95[9] = 2.67;
 pct95[10] = 2.67;
 pct95[11] = 2.65;
 pct95[12] = 2.62;
 pct95[13] = 2.56;
 pct95[14] = 2.5;
 pct95[15] = 2.41;
 pct95[16] = 2.31;
 pct95[17] = 2.2;
 pct95[18] = 2.07;
 pct95[19] = 1.92;
 pct95[20] = 1.76;

 xpct5[20] = 0.78;
 xpct5[21] = 0.87;
 xpct5[22] = 0.95;
 xpct5[23] = 1.02;
 xpct5[24] = 1.09;
 xpct5[25] = 1.15;
 xpct5[26] = 1.2;
 xpct5[27] = 1.24;
 xpct5[28] = 1.28;
 xpct5[29] = 1.31;
 xpct5[30] = 1.33;
 xpct5[31] = 1.35;
 xpct5[32] = 1.36;
 xpct5[33] = 1.36;
 xpct5[34] = 1.36;
 xpct5[35] = 1.34;
 xpct5[36] = 1.32;
 xpct5[37] = 1.3;
 xpct5[38] = 1.26;
 xpct5[39] = 1.22;
 xpct5[40] = 1.18;

 xpct95[20] = 1.68;
 xpct95[21] = 1.88;
 xpct95[22] = 2.06;
 xpct95[23] = 2.22;
 xpct95[24] = 2.36;
 xpct95[25] = 2.49;
 xpct95[26] = 2.6;
 xpct95[27] = 2.7;
 xpct95[28] = 2.78;
 xpct95[29] = 2.84;
 xpct95[30] = 2.89;
 xpct95[31] = 2.92;
 xpct95[32] = 2.93;
 xpct95[33] = 2.93;
 xpct95[34] = 2.91;
 xpct95[35] = 2.87;
 xpct95[36] = 2.82;
 xpct95[37] = 2.75;
 xpct95[38] = 2.67;
 xpct95[39] = 2.57;
 xpct95[40] = 2.45;


 var eg=0;
 
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 var acm = parseFloat(document.getElementById("acm").value);
 document.getElementById("acm-informe").innerHTML =acm;

 
 if (eg < 20) {  
   document.getElementById("pctacm").innerHTML="0";
 }
 else if (eg > 40)
 {
   document.getElementById("pctacm").innerHTML="0";
 }
 else {
      eg = eg - 20;
      eg = parseInt(eg);
      document.getElementById("rgo-acm-informe").innerHTML=pct5[eg] + " - "+ pct95[eg];
      var uno=pct95[eg] - pct5[eg];
      var dos=acm - pct5[eg];
  
      document.getElementById("pctacm").innerHTML = (parseInt(90 / (uno) * (dos) + 5));
      document.getElementById("pct-acm-informe").innerHTML=(parseInt(90 / (uno) * (dos) + 5));


      var ccp = ((acm / parseFloat(document.getElementById("aumb").value)));

      document.getElementById("ccp-informe").innerHTML = ccp.toFixed(2);

      document.getElementById("ccp").innerHTML = ccp.toFixed(2);

      eg = eg + 20;
      if (eg < 20) {  
          document.getElementById("pctccp").innerHTML = "0";
      }
      else if (eg > 40) {
          document.getElementById("pctccp").innerHTML = "0";
      }
      else {

          document.getElementById("rgo-ccp-informe").innerHTML = xpct5[eg] + " - "+ xpct95[eg];
          eg = parseInt(eg);
          var uno1 = xpct95[eg] - xpct5[eg];
          var dos1 = ccp - xpct5[eg];

          document.getElementById("pctccp").innerHTML = (parseInt(90 / (uno1) * (dos1) + 5));

          document.getElementById("pct-ccp-informe").innerHTML = (parseInt(90 / (uno1) * (dos1) + 5));
      }
 }
} 