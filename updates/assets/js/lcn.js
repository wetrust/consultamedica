function eglcn() {

    var LCN = [[],[]];

    LCN[0][0] = 0.09; LCN[0][1] = 0.2; LCN[0][2] = 0.37;
    LCN[0][3] = 0.57; LCN[0][4] = 0.7; LCN[0][5] = 0.8;
    LCN[0][6] = 0.9; LCN[0][7] = 1; LCN[0][8] = 1.1;
    LCN[0][9] = 1.12; LCN[0][10] = 1.13; LCN[0][11] = 1.18;
    LCN[0][12] = 1.27; LCN[0][13] = 1.38; LCN[0][14] = 1.47;
    LCN[0][15] = 1.58; LCN[0][16] = 1.65; LCN[0][17] = 1.72;
    LCN[0][18] = 1.87; LCN[0][19] = 1.96; LCN[0][20] = 2.05;
    LCN[0][21] = 2.18; LCN[0][22] = 2.25; LCN[0][23] = 2.35;
    LCN[0][24] = 2.54; LCN[0][25] = 2.62; LCN[0][26] = 2.7;
    LCN[0][27] = 2.9; LCN[0][28] = 3.08; LCN[0][29] = 3.16;
    LCN[0][30] = 3.4; LCN[0][31] = 3.51; LCN[0][32] = 3.57;
    LCN[0][33] = 3.76; LCN[0][34] = 3.85; LCN[0][35] = 4.05;
    LCN[0][36] = 4.18; LCN[0][37] = 4.46; LCN[0][38] = 4.55;
    LCN[0][39] = 4.66; LCN[0][40] = 4.88; LCN[0][41] = 5.07;
    LCN[0][42] = 5.29; LCN[0][43] = 5.46; LCN[0][44] = 5.66;
    LCN[0][45] = 5.87; LCN[0][46] = 6.01; LCN[0][47] = 6.27;
    LCN[0][48] = 6.37; LCN[0][49] = 6.65; LCN[0][50] = 6.77;
    LCN[0][51] = 7.08; LCN[0][52] = 7.19; LCN[0][53] = 7.39;
    LCN[0][54] = 7.57; LCN[0][55] = 7.68; LCN[0][56] = 7.98;
    LCN[0][57] = 8.09; LCN[0][58] = 8.35; LCN[0][59] = 8.48;
    LCN[0][60] = 8.56; LCN[0][61] = 8.76; LCN[0][62] = 8.88;
    LCN[0][63] = 9.09;

    LCN[1][0] = 0; LCN[1][1] = 5.5; LCN[1][2] = 6;
    LCN[1][3] = 6.2; LCN[1][4] = 6.4; LCN[1][5] = 6.5;
    LCN[1][6] = 6.6; LCN[1][7] = 7.1; LCN[1][8] = 7.1;
    LCN[1][9] = 7.1; LCN[1][10] = 7.2; LCN[1][11] = 7.3;
    LCN[1][12] = 7.4; LCN[1][13] = 7.5; LCN[1][14] = 7.6;
    LCN[1][15] = 8; LCN[1][16] = 8.1; LCN[1][17] = 8.2;
    LCN[1][18] = 8.3; LCN[1][19] = 8.4; LCN[1][20] = 8.5;
    LCN[1][21] = 8.6; LCN[1][22] = 9; LCN[1][23] = 9.1;
    LCN[1][24] = 9.2; LCN[1][25] = 9.3; LCN[1][26] = 9.4;
    LCN[1][27] = 9.5; LCN[1][28] = 10; LCN[1][29] = 10.1;
    LCN[1][30] = 10.2; LCN[1][31] = 10.3; LCN[1][32] = 10.4;
    LCN[1][33] = 10.5; LCN[1][34] = 10.6; LCN[1][35] = 11;
    LCN[1][36] = 11.1; LCN[1][37] = 11.2; LCN[1][38] = 11.3;
    LCN[1][39] = 11.4; LCN[1][40] = 11.5; LCN[1][41] = 11.6;
    LCN[1][42] = 12; LCN[1][43] = 12.1; LCN[1][44] = 12.2;
    LCN[1][45] = 12.3; LCN[1][46] = 12.4; LCN[1][47] = 12.5;
    LCN[1][48] = 12.6; LCN[1][49] = 13; LCN[1][50] = 13.1;
    LCN[1][51] = 13.2; LCN[1][52] = 13.3; LCN[1][53] = 13.4;
    LCN[1][54] = 13.5; LCN[1][55] = 13.6; LCN[1][56] = 14;
    LCN[1][57] = 14.1; LCN[1][58] = 14.2; LCN[1][59] = 14.3;
    LCN[1][60] = 14.4; LCN[1][61] = 14.5; LCN[1][62] = 14.6;
    LCN[1][63] = 15;

    var lcn = document.getElementById("lcn").value;

    if (lcn > 90) {
        app.lcn90();
        return false;
    }

    var ValLCN1 = lcn / 10;

    for (i = 1; i <= 63; i ++ ) {
        if (LCN[0][i] >= ValLCN1) {
            var eglcn = LCN[1][i];
            i = 63;
        }
    }

    document.getElementById("pctlcn").innerHTML = eglcn + " Semanas";
    document.getElementById("pctlcnx2").innerHTML = eglcn + " Semanas";
    document.getElementById("pctlcnx3").innerHTML = eglcn;
    var eg = document.getElementById("edadG9").innerHTML;

    var eg1 = new Number((Math.floor(eglcn) * 7) + Math.round((eglcn - Math.floor(eglcn)) * 7));
    var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));

    document.getElementById("eglcndif").innerHTML = Math.abs(Math.floor(eg1 - eg2) + Math.round(((eg1 - eg2) - Math.floor(eg1 - eg2)) * 7));

    if (lcn > 52) {
        var el = document.getElementById("dbp-eco1-box");
        el.style.display = 'block';
    }
    else{
        var el = document.getElementById("dbp-eco1-box");
        el.style.display = 'none';
    }
}