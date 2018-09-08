function pctcc() {

 var pct3 = [];
 var pct97 = [];

 // para calculo de percentil
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

 var eg=0;
 var cc=0;
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 cc=parseInt(document.getElementById("cc").value);

 if (eg < 12) {
    document.getElementById("pctcc").innerHTML="0";
 }
 else if (eg > 40){
    document.getElementById("pctcc").innerHTML="0";
 }
 else {

  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=cc - pct3[eg];

  document.getElementById("pctcc").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("cc-pct-informe").innerHTML = (parseInt(95 / (uno) * (dos) + 3));

    var CCMenos2DE = [];
    var CCMas2DE = [];

     CCMenos2DE[0] = 63;
     CCMenos2DE[1] = 71;
     CCMenos2DE[2] = 76;
     CCMenos2DE[3] = 93;
     CCMenos2DE[4] = 116;
     CCMenos2DE[5] = 128;
     CCMenos2DE[6] = 133;
     CCMenos2DE[7] = 146;
     CCMenos2DE[8] = 160;
     CCMenos2DE[9] = 168;
     CCMenos2DE[10] = 177;
     CCMenos2DE[11] = 189;
     CCMenos2DE[12] = 202;
     CCMenos2DE[13] = 207;
     CCMenos2DE[14] = 222;
     CCMenos2DE[15] = 231;
     CCMenos2DE[16] = 240;
     CCMenos2DE[17] = 242;
     CCMenos2DE[18] = 252;
     CCMenos2DE[19] = 262;
     CCMenos2DE[20] = 265;
     CCMenos2DE[21] = 275;
     CCMenos2DE[22] = 284;
     CCMenos2DE[23] = 287;
     CCMenos2DE[24] = 285;
     CCMenos2DE[25] = 299;
     CCMenos2DE[26] = 309;
     CCMenos2DE[27] = 307;

     CCMas2DE[0] = 93;
     CCMas2DE[1] = 112;
     CCMas2DE[2] = 126;
     CCMas2DE[3] = 138;
     CCMas2DE[4] = 149;
     CCMas2DE[5] = 158;
     CCMas2DE[6] = 172;
     CCMas2DE[7] = 188;
     CCMas2DE[8] = 197;
     CCMas2DE[9] = 209;
     CCMas2DE[10] = 222;
     CCMas2DE[11] = 235;
     CCMas2DE[12] = 245;
     CCMas2DE[13] = 260;
     CCMas2DE[14] = 261;
     CCMas2DE[15] = 277;
     CCMas2DE[16] = 284;
     CCMas2DE[17] = 300;
     CCMas2DE[18] = 306;
     CCMas2DE[19] = 313;
     CCMas2DE[20] = 327;
     CCMas2DE[21] = 332;
     CCMas2DE[22] = 340;
     CCMas2DE[23] = 348;
     CCMas2DE[24] = 351;
     CCMas2DE[25] = 358;
     CCMas2DE[26] = 354;
     CCMas2DE[27] = 367;

  uno=CCMas2DE[eg] - CCMenos2DE[eg];
  dos=cc - CCMenos2DE[eg];

  //const c1 = new Number(9.413641651);
  //const c2 = new Number(1.004137705);

  //var N = new Number(c1 * Math.pow(c2, cc));

  document.getElementById("egcc").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("cc-edad-informe2").innerHTML = (parseInt(95 / (uno) * (dos) + 3));
  document.getElementById("cc-informe").innerHTML = parseInt(document.getElementById("cc").value);
  document.getElementById("cc-informe2").innerHTML = parseInt(document.getElementById("cc").value);
  p50();
  psohdlk();
  valccca();

 }
}