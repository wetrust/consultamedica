function valccca() {
 var cc=parseInt(document.getElementById("cc").value);
 var ca=parseInt(document.getElementById("ca").value);
 if (cc > 0) {
  if (ca >0 ) {
   var ccca = cc / ca;
   document.getElementById("ccca").innerHTML=ccca.toFixed(2);
   document.getElementById("ccca-informe").innerHTML=ccca.toFixed(2);
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
 eg=parseFloat(document.getElementById("edadG").innerHTML);

 if (eg < 15) {
   document.getElementById("pctccca").innerHTML="0";
   document.getElementById("ccca-pct-informe").innerHTML="0";
 }
 else if (eg > 40)
 {
   document.getElementById("pctccca").innerHTML="0";
   document.getElementById("ccca-pct-informe").innerHTML="0";
 }
 else {
  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=ccca - pct3[eg];

  document.getElementById("pctccca").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("ccca-pct-informe").innerHTML= (parseInt(95 / (uno) * (dos) + 3));
 }
  } else {
    document.getElementById("ccca").innerHTML="0";
    document.getElementById("pctccca").innerHTML="0";
    document.getElementById("ccca-pct-informe").innerHTML="0";
  }
 } else {
    document.getElementById("ccca").innerHTML="0";
    document.getElementById("pctccca").innerHTML="0";
    document.getElementById("ccca-pct-informe").innerHTML="0";
 }
}