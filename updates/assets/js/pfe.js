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
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 pfe=parseInt(document.getElementById("pfe").innerHTML);
 document.getElementById("pfe-informe").innerHTML = pfe + ' grs';

 if (eg < 15) {  
   document.getElementById("pctpfe").innerHTML="";
 }
 else if (eg > 40)
 {
   document.getElementById("pctpfe").innerHTML="";
 }
 else {
  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct90[eg] - pct10[eg];
  var dos=pfe - pct10[eg];
  var pctFinal = (80 / (uno) * (dos)) + 10
  if (pctFinal > 90) {
   document.getElementById("pctpfe").innerHTML="> pct 90";
   document.getElementById("pfe-pct-informe").innerHTML="> pct 90";
  }else if (pctFinal < 10) {
   document.getElementById("pctpfe").innerHTML="< pct 10";
   document.getElementById("pfe-pct-informe").innerHTML="< pct 10";
  }else if (pctFinal < 3){
   document.getElementById("pctpfe").innerHTML="< pct 3";
   document.getElementById("pfe-pct-informe").innerHTML="< pct 3";
  } else {
      document.getElementById("pctpfe").innerHTML = (parseInt((80 / (uno) * (dos)) + 10));
      document.getElementById("pfe-pct-informe").innerHTML= (parseInt((80 / (uno) * (dos)) + 10));
  }
 }
}