function calcularEG() {

 var oneday = 1000 * 60 * 60 * 24;
 var oneweek = oneday * 7;

 var fecha_hoy = new Date();
 		
 var D3 = document.getElementById("dateEx").value;
 var M3 = document.getElementById("monthEx").value;
 var Y3 = document.getElementById("yearEx").value;

 var D1 = document.getElementById("dateF").value;
 var M1 = document.getElementById("monthF").value;
 var Y1 = document.getElementById("yearF").value;

 document.getElementById("fur2").innerHTML=D1+"/"+M1+"/"+Y1;
 document.getElementById("fur3").innerHTML=D1+"/"+M1+"/"+Y1;
 document.getElementById("fur4").innerHTML=D1+"/"+M1+"/"+Y1;
 document.getElementById("fur6").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur7").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur8").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur9").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur10").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur11").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur12").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur13").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur14").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur15").innerHTML = D1 + "/" + M1 + "/" + Y1;
 document.getElementById("fur16").innerHTML = D1 + "/" + M1 + "/" + Y1;

 var input = new Date (Y1,M1-1,D1);

 var B = new Date();
 B.setTime(input.getTime() + 40 * oneweek);               
 document.getElementById("FPP").innerHTML=B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear();
 document.getElementById("FPP2").innerHTML=B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear();
 document.getElementById("FPP3").innerHTML=B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear();
 document.getElementById("FPP4").innerHTML=B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear();
 document.getElementById("FPP6").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
 document.getElementById("FPP7").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
 document.getElementById("FPP8").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
 document.getElementById("FPP9").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
 document.getElementById("FPP10").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
 document.getElementById("FPP12").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
 document.getElementById("FPP13").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
 document.getElementById("FPP15").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
 document.getElementById("FPP16").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();

 var X = new Date (Y1,M1-1,D1);

 var Z = new Date (Y3,M3-1,D3);
 
 var Y = ((Z.getTime() - X.getTime()) / oneweek).toFixed(1);

 
 if (Z.getTime() < X.getTime()) {
  document.getElementById("edadG").innerHTML="0";
  document.getElementById("edadG2").innerHTML="0";
  document.getElementById("edadG3").innerHTML="0";
  document.getElementById("edadG4").innerHTML = "0";
  document.getElementById("edadG6").innerHTML = "0";
  document.getElementById("edadG7").innerHTML = "0";
  document.getElementById("edadG8").innerHTML = "0";
  document.getElementById("edadG9").innerHTML = "0";
  document.getElementById("edadG10").innerHTML = "0";
  document.getElementById("edadG11").innerHTML = "0";
  document.getElementById("edadG12").innerHTML = "0";
  document.getElementById("edadG13").innerHTML = "0";
  document.getElementById("edadG14").innerHTML = "0";
  document.getElementById("edadG15").innerHTML = "0";
  document.getElementById("edadG16").innerHTML = "0";
  document.getElementById("edadG17").innerHTML = "0";
  document.getElementById("edadG18").innerHTML = "0";
  document.getElementById("edadG19").innerHTML = "0";
  document.getElementById("edadG20").innerHTML = "0";
 }
 else if (((Z.getTime() - X.getTime()) / oneweek) > 42) {
  document.getElementById("edadG").innerHTML="42";
  document.getElementById("edadG2").innerHTML="42";
  document.getElementById("edadG3").innerHTML="42";
  document.getElementById("edadG4").innerHTML = "42";
  document.getElementById("edadG6").innerHTML = "42";
  document.getElementById("edadG7").innerHTML = "42";
  document.getElementById("edadG8").innerHTML = "42";
  document.getElementById("edadG9").innerHTML = "42";
  document.getElementById("edadG10").innerHTML = "42";
  document.getElementById("edadG11").innerHTML = "42";
  document.getElementById("edadG12").innerHTML = "42";
  document.getElementById("edadG13").innerHTML = "42";
  document.getElementById("edadG14").innerHTML = "42";
  document.getElementById("edadG15").innerHTML = "42";
  document.getElementById("edadG16").innerHTML = "42";
  document.getElementById("edadG17").innerHTML = "42";
  document.getElementById("edadG18").innerHTML = "42";
  document.getElementById("edadG19").innerHTML = "42";
  document.getElementById("edadG20").innerHTML = "42";
 }
 else {
  document.getElementById("edadG").innerHTML=Math.floor(Y)+"."+Math.round((Y - Math.floor(Y))*7);
  document.getElementById("edadG2").innerHTML=Math.floor(Y)+"."+Math.round((Y - Math.floor(Y))*7);
  document.getElementById("edadG3").innerHTML=Math.floor(Y)+"."+Math.round((Y - Math.floor(Y))*7);
  document.getElementById("edadG4").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG6").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG7").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG8").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG9").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG10").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG11").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG12").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG13").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG14").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG15").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG16").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG17").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG18").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG19").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
  document.getElementById("edadG20").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
 }	
}

function getFieldFloatValue(fieldId) {
    return parseFloat(document.getElementById(fieldId).value.replace("\,","."));
}

function round(n,dig)
{
	X = n * Math.pow(10,dig);
	X= Math.round(X);
	return X / Math.pow(10,dig);
}
    