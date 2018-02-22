function pctca() {

 var pct3 = [];
 var pct97 = [];

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

 var eg=0;
 
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 
 var ca = new Number(document.getElementById("ca").value);
 
 if (eg < 12) {
   document.getElementById("pctca").innerHTML="0";
 }
 else if (eg > 40)
 {
   document.getElementById("pctca").innerHTML="0";
 }
 else {
 
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=ca - pct3[eg];
  
  document.getElementById("pctca").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("ca-pct-informe").innerHTML = (parseInt(95 / (uno) * (dos) + 3));

  //const c1 = new Number(6.457851324);
  //const c2 = new Number(0.0919705147);

  //var N = new Number(c1 + c2 * ca);

  var CAMenos2DE = [];
  var CAMas2DE = [];

  CAMenos2DE[0] = 45;
  CAMenos2DE[1] = 53;
  CAMenos2DE[2] = 58;
  CAMenos2DE[3] = 79;
  CAMenos2DE[4] = 90;
  CAMenos2DE[5] = 108;
  CAMenos2DE[6] = 119;
  CAMenos2DE[7] = 129;
  CAMenos2DE[8] = 144;
  CAMenos2DE[9] = 155;
  CAMenos2DE[10] = 164;
  CAMenos2DE[11] = 174;
  CAMenos2DE[12] = 182;
  CAMenos2DE[13] = 193;
  CAMenos2DE[14] = 201;
  CAMenos2DE[15] = 212;
  CAMenos2DE[16] = 226;
  CAMenos2DE[17] = 233;
  CAMenos2DE[18] = 247;
  CAMenos2DE[19] = 246;
  CAMenos2DE[20] = 257;
  CAMenos2DE[21] = 267;
  CAMenos2DE[22] = 267;
  CAMenos2DE[23] = 277;
  CAMenos2DE[24] = 276;
  CAMenos2DE[25] = 275;
  CAMenos2DE[26] = 295;
  CAMenos2DE[27] = 314;

  CAMas2DE[0] = 81;
  CAMas2DE[1] = 92;
  CAMas2DE[2] = 110;
  CAMas2DE[3] = 113;
  CAMas2DE[4] = 126;
  CAMas2DE[5] = 137;
  CAMas2DE[6] = 153;
  CAMas2DE[7] = 165;
  CAMas2DE[8] = 173;
  CAMas2DE[9] = 187;
  CAMas2DE[10] = 207;
  CAMas2DE[11] = 216;
  CAMas2DE[12] = 230;
  CAMas2DE[13] = 237;
  CAMas2DE[14] = 249;
  CAMas2DE[15] = 266;
  CAMas2DE[16] = 284;
  CAMas2DE[17] = 297;
  CAMas2DE[18] = 308;
  CAMas2DE[19] = 313;
  CAMas2DE[20] = 332;
  CAMas2DE[21] = 338;
  CAMas2DE[22] = 350;
  CAMas2DE[23] = 361;
  CAMas2DE[24] = 375;
  CAMas2DE[25] = 384;
  CAMas2DE[26] = 384;
  CAMas2DE[27] = 391;

  uno=CAMas2DE[eg] - CAMenos2DE[eg];
  dos=ca - CAMenos2DE[eg];

  document.getElementById("egca").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("ca-edad-informe2").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("ca-informe").innerHTML = ca;
  document.getElementById("ca-informe2").innerHTML = ca;

  p50();
  psohdlk();
  valccca();
 }
}