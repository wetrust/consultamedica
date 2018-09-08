function PctHumFet(){

 var pct05 = [];
 var pct95 = [];

        pct05[12] = 4.8;   pct95[12] = 12.3;
        pct05[13] = 7.6;   pct95[13] = 15.1;
        pct05[14] = 10.3;  pct95[14] = 17.9;
        pct05[15] = 13.1;  pct95[15] = 20.7;
        pct05[16] = 15.8;  pct95[16] = 23.5;
        pct05[17] = 18.5;  pct95[17] = 26.3;
        pct05[18] = 21.2;  pct95[18] = 29.1;
        pct05[19] = 23.8;  pct95[19] = 31.6;
        pct05[20] = 26.3;  pct95[20] = 34.2;
        pct05[21] = 28.8;  pct95[21] = 36.7;
        pct05[22] = 31.2;  pct95[22] = 39.2;
        pct05[23] = 33.5;  pct95[23] = 41.6;
        pct05[24] = 35.7;  pct95[24] = 43.9;
        pct05[25] = 37.9;  pct95[25] = 46.1;
        pct05[26] = 39.9;  pct95[26] = 48.1;
        pct05[27] = 41.9;  pct95[27] = 50.1;
        pct05[28] = 43.7;  pct95[28] = 52.1;
        pct05[29] = 45.5;  pct95[29] = 53.9;
        pct05[30] = 47.2;  pct95[30] = 55.6;
        pct05[31] = 48.9;  pct95[31] = 57.3;
        pct05[32] = 50.4;  pct95[32] = 58.9;
        pct05[33] = 52.1;  pct95[33] = 60.5;
        pct05[34] = 53.4;  pct95[34] = 62.1;
        pct05[35] = 54.8;  pct95[35] = 63.5;
        pct05[36] = 56.2;  pct95[36] = 64.9;
        pct05[37] = 57.6;  pct95[37] = 66.4;
        pct05[38] = 59.8;  pct95[38] = 67.8;
        pct05[39] = 60.4;  pct95[39] = 69.3;
        pct05[40] = 61.9;  pct95[40] = 70.8;




        //para calcular edad según medida
        var humeroMenosDE = [];
        var humeroPromedioDE = [];
        var humeroMasDE = [];

    humeroMenosDE[10]=9.6;humeroMenosDE[11]=10.1;humeroMenosDE[12]=10.3;humeroMenosDE[13]=10.6;
    humeroMenosDE[14]=11.1;humeroMenosDE[15]=11.3;humeroMenosDE[16]=11.6;humeroMenosDE[17]=12.1;
    humeroMenosDE[18]=12.4;humeroMenosDE[19]=12.6;humeroMenosDE[20]=13.1;humeroMenosDE[21]=13.4;
    humeroMenosDE[22]=13.6;humeroMenosDE[23]=14.2;humeroMenosDE[24]=14.5;humeroMenosDE[25]=15.1;
    humeroMenosDE[26]=15.4;humeroMenosDE[27]=15.6;humeroMenosDE[28]=16.2;humeroMenosDE[29]=16.5;
    humeroMenosDE[30]=17.1;humeroMenosDE[31]=17.4;humeroMenosDE[32]=18;humeroMenosDE[33]=18.3;
    humeroMenosDE[34]=18.6;humeroMenosDE[35]=19.2;humeroMenosDE[36]=19.5;humeroMenosDE[37]=20.1;
    humeroMenosDE[38]=20.4;humeroMenosDE[39]=21.1;humeroMenosDE[40]=21.4;humeroMenosDE[41]=22;
    humeroMenosDE[42]=22.4;humeroMenosDE[43]=23;humeroMenosDE[44]=23.4;humeroMenosDE[45]=24;
    humeroMenosDE[46]=24.4;humeroMenosDE[47]=25.0;humeroMenosDE[48]=25.4;humeroMenosDE[49]=26;
    humeroMenosDE[50]=26.4;humeroMenosDE[51]=27.1;humeroMenosDE[52]=27.4;humeroMenosDE[53]=28.1;
    humeroMenosDE[54]=28.5;humeroMenosDE[55]=29.1;humeroMenosDE[56]=29.6;humeroMenosDE[57]=30.2;
    humeroMenosDE[58]=30.6;humeroMenosDE[59]=31.3;humeroMenosDE[60]=32;humeroMenosDE[61]=32.4;
    humeroMenosDE[62]=33.1;humeroMenosDE[63]=33.6;humeroMenosDE[64]=34.3;humeroMenosDE[65]=35;
    humeroMenosDE[66]=35.4;humeroMenosDE[67]=36.1;humeroMenosDE[68]=36.6;humeroMenosDE[69]=37.3;

    humeroPromedioDE[10]=12.4;humeroPromedioDE[11]=12.6;humeroPromedioDE[12]=13.1;humeroPromedioDE[13]=13.4;
    humeroPromedioDE[14]=13.6;humeroPromedioDE[15]=14.1;humeroPromedioDE[16]=14.4;humeroPromedioDE[17]=14.6;
    humeroPromedioDE[18]=15.1;humeroPromedioDE[19]=15.4;humeroPromedioDE[20]=15.6;humeroPromedioDE[21]=16.2;
    humeroPromedioDE[22]=16.5;humeroPromedioDE[23]=17.1;humeroPromedioDE[24]=17.3;humeroPromedioDE[25]=17.6;
    humeroPromedioDE[26]=18.1;humeroPromedioDE[27]=18.4;humeroPromedioDE[28]=19;humeroPromedioDE[29]=19.3;
    humeroPromedioDE[30]=19.6;humeroPromedioDE[31]=20.2;humeroPromedioDE[32]=20.5;humeroPromedioDE[33]=21.1;
    humeroPromedioDE[34]=21.4;humeroPromedioDE[35]=22;humeroPromedioDE[36]=22.4;humeroPromedioDE[37]=22.6;
    humeroPromedioDE[38]=23.3;humeroPromedioDE[39]=23.6;humeroPromedioDE[40]=24.2;humeroPromedioDE[41]=24.6;
    humeroPromedioDE[42]=25.2;humeroPromedioDE[43]=25.5;humeroPromedioDE[44]=26.1;humeroPromedioDE[45]=26.5;
    humeroPromedioDE[46]=27.1;humeroPromedioDE[47]=27.5;humeroPromedioDE[48]=28.1;humeroPromedioDE[49]=28.6;
    humeroPromedioDE[50]=29.2;humeroPromedioDE[51]=29.6;humeroPromedioDE[52]=30.2;humeroPromedioDE[53]=30.6;
    humeroPromedioDE[54]=31.3;humeroPromedioDE[55]=32;humeroPromedioDE[56]=32.4;humeroPromedioDE[57]=33.1;
    humeroPromedioDE[58]=33.4;humeroPromedioDE[59]=34.1;humeroPromedioDE[60]=34.6;humeroPromedioDE[61]=35.2;
    humeroPromedioDE[62]=35.6;humeroPromedioDE[63]=36.4;humeroPromedioDE[64]=37.1;humeroPromedioDE[65]=37.5;
    humeroPromedioDE[66]=38.2;humeroPromedioDE[67]=38.6;humeroPromedioDE[68]=39.4;humeroPromedioDE[69]=40.1;

    humeroMasDE[10]=15.2;humeroMasDE[11]=15.4;humeroMasDE[12]=15.6;humeroMasDE[13]=16.1;
    humeroMasDE[14]=16.4;humeroMasDE[15]=16.6;humeroMasDE[16]=17.2;humeroMasDE[17]=17.4;
    humeroMasDE[18]=18;humeroMasDE[19]=18.2;humeroMasDE[20]=18.5;humeroMasDE[21]=19.1;
    humeroMasDE[22]=19.3;humeroMasDE[23]=19.6;humeroMasDE[24]=20.1;humeroMasDE[25]=20.4;
    humeroMasDE[26]=21;humeroMasDE[27]=21.3;humeroMasDE[28]=21.6;humeroMasDE[29]=22.1;
    humeroMasDE[30]=22.4;humeroMasDE[31]=23;humeroMasDE[32]=23.4;humeroMasDE[33]=23.6;
    humeroMasDE[34]=24.2;humeroMasDE[35]=24.6;humeroMasDE[36]=25.1;humeroMasDE[37]=25.5;
    humeroMasDE[38]=26.1;humeroMasDE[39]=26.4;humeroMasDE[40]=27.1;humeroMasDE[41]=27.4;
    humeroMasDE[42]=28;humeroMasDE[43]=28.4;humeroMasDE[44]=29;humeroMasDE[45]=29.4;
    humeroMasDE[46]=30;humeroMasDE[47]=30.4;humeroMasDE[48]=31;humeroMasDE[49]=31.4;
    humeroMasDE[50]=32;humeroMasDE[51]=32.4;humeroMasDE[52]=33.1;humeroMasDE[53]=33.4;
    humeroMasDE[54]=34.1;humeroMasDE[55]=34.5;humeroMasDE[56]=35.2;humeroMasDE[57]=35.6;
    humeroMasDE[58]=36.3;humeroMasDE[59]=36.6;humeroMasDE[60]=37.4;humeroMasDE[61]=38.1;
    humeroMasDE[62]=38.5;humeroMasDE[63]=39.2;humeroMasDE[64]=39.6;humeroMasDE[65]=40.4;
    humeroMasDE[66]=41.1;humeroMasDE[67]=41.5;humeroMasDE[68]=42.2;humeroMasDE[69]=42.6;

var eg=0;
var hum = 0;
var pcthum = 0;
 eg=parseFloat(document.getElementById("edadG").innerHTML);
 hum=parseFloat(document.getElementById("lh").value);
 document.getElementById("lh-informe2").innerHTML = hum;

        if (eg < 12) {
            document.getElementById("pctlh").innerHTML = "0";
        }
        else if (eg > 40) {
            document.getElementById("pctlh").innerHTML = "0";
        }
         else {
           eg = parseInt(eg);
           var uno=pct95[eg] - pct05[eg];
           var dos=hum - pct05[eg];

           var humpct = (parseInt(90 / (uno) * (dos) + 5));

           if (humpct < 5){
               document.getElementById("pctlh").innerHTML = "< 5";
           }
           else if (humpct > 95){
               document.getElementById("pctlh").innerHTML = "> 95";

           }
           else {
               document.getElementById("pctlh").innerHTML = humpct;
           }

         }

         hum = parseInt(hum);
          if (hum < 10) {
              document.getElementById("eglh").innerHTML = "";
              document.getElementById("lh-edad-informe2").innerHTML = "";
          }
          else if (hum > 69) {
              document.getElementById("eglh").innerHTML = "";
              document.getElementById("lh-edad-informe2").innerHTML = "";
          }
          else {
              document.getElementById("eglh").innerHTML = humeroPromedioDE[hum];
              document.getElementById("lh-edad-informe2").innerHTML = humeroPromedioDE[hum];
          }




}