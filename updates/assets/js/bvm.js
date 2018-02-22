function pctbvm() {

 var pct5 = [];
 var pct95 = [];

    pct5[0] = 23;
    pct5[1] = 25;
    pct5[2] = 27;
    pct5[3] = 28;
    pct5[4] = 29;
    pct5[5] = 29;
    pct5[6] = 30;
    pct5[7] = 30;
    pct5[8] = 30;
    pct5[9] = 30;
    pct5[10] = 30;
    pct5[11] = 30;
    pct5[12] = 30;
    pct5[13] = 29;
    pct5[14] = 29;
    pct5[15] = 29;
    pct5[16] = 29;
    pct5[17] = 29;
    pct5[18] = 28;
    pct5[19] = 28;
    pct5[20] = 27;
    pct5[21] = 26;
    pct5[22] = 24;
    pct5[23] = 23;
    pct5[24] = 21;

     pct95[0] = 59;
     pct95[1] = 62;
     pct95[2] = 64;
     pct95[3] = 66;
     pct95[4] = 67;
     pct95[5] = 68;
     pct95[6] = 68;
     pct95[7] = 68;
     pct95[8] = 68;
     pct95[9] = 68;
     pct95[10] = 68;
     pct95[11] = 69;
     pct95[12] = 69;
     pct95[13] = 69;
     pct95[14] = 69;
     pct95[15] = 70;
     pct95[16] = 71;
     pct95[17] = 72;
     pct95[18] = 72;
     pct95[19] = 72;
     pct95[20] = 71;
     pct95[21] = 70;
     pct95[22] = 68;
     pct95[23] = 66;
     pct95[24] = 62;

 var eg=0;
 var bvm=0;
 
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 bvm=parseInt(document.getElementById("bvm").value);
 
 if (eg < 16) {  
   document.getElementById("pctbvm").innerHTML="";
 }
 else if (eg > 40)
 {
   document.getElementById("pctbvm").innerHTML="";
 }
 else {
  eg = eg - 16;
  eg = parseInt(eg);
  var uno=pct95[eg] - pct5[eg];
  var dos=bvm - pct5[eg];
  
  document.getElementById("pctbvm").innerHTML = (parseInt(90 / (uno) * (dos) + 5));

  valorpct=(parseInt(90 / (uno) * (dos) + 5));
  var element = document.getElementById('liq-amnio');
  if (valorpct < 10){
      element.value = 'disminuido';
  }
  else if (valorpct > 90){
        element.value = 'aumentado';
  }
  else {
        element.value = 'normal';
  }
 }
}

function pctbvmdoppler() {

 var pct5 = [];
 var pct95 = [];

    pct5[0] = 23;
    pct5[1] = 25;
    pct5[2] = 27;
    pct5[3] = 28;
    pct5[4] = 29;
    pct5[5] = 29;
    pct5[6] = 30;
    pct5[7] = 30;
    pct5[8] = 30;
    pct5[9] = 30;
    pct5[10] = 30;
    pct5[11] = 30;
    pct5[12] = 30;
    pct5[13] = 29;
    pct5[14] = 29;
    pct5[15] = 29;
    pct5[16] = 29;
    pct5[17] = 29;
    pct5[18] = 28;
    pct5[19] = 28;
    pct5[20] = 27;
    pct5[21] = 26;
    pct5[22] = 24;
    pct5[23] = 23;
    pct5[24] = 21;

     pct95[0] = 59;
     pct95[1] = 62;
     pct95[2] = 64;
     pct95[3] = 66;
     pct95[4] = 67;
     pct95[5] = 68;
     pct95[6] = 68;
     pct95[7] = 68;
     pct95[8] = 68;
     pct95[9] = 68;
     pct95[10] = 68;
     pct95[11] = 69;
     pct95[12] = 69;
     pct95[13] = 69;
     pct95[14] = 69;
     pct95[15] = 70;
     pct95[16] = 71;
     pct95[17] = 72;
     pct95[18] = 72;
     pct95[19] = 72;
     pct95[20] = 71;
     pct95[21] = 70;
     pct95[22] = 68;
     pct95[23] = 66;
     pct95[24] = 62;

 var eg=0;
 var bvm=0;

 eg=parseFloat(document.getElementById("edadG").innerHTML);
 bvm=parseInt(document.getElementById("bvm-doppler").value);

 document.getElementById("bvm-doppler-informe").innerHTML=bvm;

 if (eg < 16) {
   document.getElementById("pctbvm-doppler").innerHTML="";
 }
 else if (eg > 40)
 {
   document.getElementById("pctbvm-doppler").innerHTML="";
 }
 else {
  eg = eg - 16;
  eg = parseInt(eg);
  var uno=pct95[eg] - pct5[eg];
  var dos=bvm - pct5[eg];

  document.getElementById("pctbvm-doppler").innerHTML = (parseInt(90 / (uno) * (dos) + 5));

  valorpct=(parseInt(90 / (uno) * (dos) + 5));
  var element = document.getElementById('liq-amnio-doppler');
  if (valorpct < 10){
      element.value = 'disminuido';
      document.getElementById("liqui-informe").innerHTML=element.value;

  }
  else if (valorpct > 90){
        element.value = 'aumentado';
        document.getElementById("liqui-informe").innerHTML=element.value;
  }
  else {
        element.value = 'normal';
        document.getElementById("liqui-informe").innerHTML=element.value;
  }
 }

}



 
 
 