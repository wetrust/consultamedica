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
 
 eg=parseFloat(document.getElementById("edadG").innerHTML); 
 ila=parseInt(document.getElementById("ila").value);
 
 if (eg < 16) {  
   document.getElementById("pctila").innerHTML="";
 }
 else if (eg > 40)
 {
   document.getElementById("pctila").innerHTML="";
 }
 else {
  eg = eg - 16;
  eg = parseInt(eg);
  var uno=pct95[eg] - pct5[eg];
  var dos=ila - pct5[eg];
  
  document.getElementById("pctila").innerHTML=(parseInt(90 / (uno) * (dos) + 5));
 }

} 
 
 
 