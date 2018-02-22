function pctdvo() {

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
 
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 var dvo = parseFloat(document.getElementById("dvo").value);
 
 if (eg < 20) {  
   document.getElementById("pctdvo").innerHTML="0";
 }
 else if (eg > 40)
 {
   document.getElementById("pctdvo").innerHTML="0";
 }
 else {
      eg = eg - 20;
      eg = parseInt(eg);
      var uno=pct95[eg] - pct5[eg];
      var dos=dvo - pct5[eg];
  
     document.getElementById("pctdvo").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
 }

} 