function PromSaco() {

    var y = [];

    y[5] =4.2;
    y[6] =4.3;
    y[7] =4.4;
    y[8] =4.5;
    y[9] =4.6;
    y[10] =5;
    y[11] =5.1;
    y[12] =5.2;
    y[13] =5.3;
    y[14] =5.4;
    y[15] =5.5;
    y[16] =5.6;
    y[17] =6;
    y[18] =6.1;
    y[19] =6.2;
    y[20] =6.3;
    y[21] =6.4;
    y[22] =6.5;
    y[23] =6.6;
    y[24] =7;
    y[25] =7.1;
    y[26] =7.2;
    y[27] =7.3;
    y[28] =7.4;
    y[29] =7.5;
    y[30] =7.6;
    y[31] =8;
    y[32] =8.1;
    y[33] =8.2;
    y[34] =8.3;
    y[35] =8.4;
    y[36] =8.5;
    y[37] =8.6;
    y[38] =9;
    y[39] =9.1;
    y[40] =9.2;
    y[41] =9.3;
    y[42] =9.4;
    y[43] =9.5;
    y[44] =9.6;
    y[45] =9.6;
    y[46] =10;
    y[47] =10.1;
    y[48] =10.2;
    y[49] =10.3;
    y[50] =10.4;
    y[51] =10.5;
    y[52] =11;
    y[53] =11.1;
    y[54] =11.2;
    y[55] =11.3;
    y[56] =11.4;
    y[57] =11.5;
    y[58] =11.6;
    y[59] =12;
    y[60] =12.1;
    y[61] =12.2;


    var prs = parseInt(document.getElementById("prs").value);
    document.getElementById("saco-gestacional-mm").innerHTML = prs + "mm.";

    if (prs < 5) {
        app.sacomin();
        return false;
    }
    if (prs > 61) {
        app.sacomax();
        return false;
    }
        var egsaco = y[prs]; 
        document.getElementById("pctprs").innerHTML=egsaco + " semanas";
        document.getElementById("pctprsx2").innerHTML=egsaco;
}
        
