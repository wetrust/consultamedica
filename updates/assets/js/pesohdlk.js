function psohdlk() {

    var CC = 0;
    var CA = 0;

 CC=parseFloat(document.getElementById("cc").value);
 CA=parseInt(document.getElementById("ca").value);
 if (CC > 0)
 {
  if (CA > 0)
  {
    var psoP =  Math.pow(10, (1.182 + 0.00273 * CC + 0.007057 * CA - 0.0000063 *  Math.pow(CA, 2) - 0.000002184 * CC * CA))
    document.getElementById("pfe").innerHTML=psoP.toFixed(0);
    pctpfe();
  }
 } 
}


