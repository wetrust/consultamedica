function p50() {

    //codigo antiguo
    //const N1 = new Number(9.413641651);
    //const N2 = new Number(1.004137705);
    //const N3 = new Number(6.457851324);
    //const N4 = new Number(0.0919705147);
    //const N5 = new Number(11.20178254);
    //const N6 = new Number(1.01704237);
    //const N7 = new Number(9.468544279);
    //const N8 = new Number(1.015432196);

    //var cont= new Number(4);
    //var N = [3];

    //var dbp= new Number(document.getElementById("dbp").value);
    //var cc= new Number(document.getElementById("cc").value);
    //var ca= new Number(document.getElementById("ca").value);
    //var lf = new Number(document.getElementById("lf").value);

    //if (dbp > 0 && cc > 0 && ca > 0 && lf > 0){
    // N[3] = N7 * Math.pow(N8,dbp);
    // N[0] = N1 * Math.pow(N2,cc);
    // N[1] = N3 + N4 * ca;
    // N[2] = N5 * Math.pow(N6,lf);

    // var egbio = new Number((N[0] + N[1] + N[2] + N[3]) / cont);

    //calcular dbp
    const N7 = new Number(9.468544279);
    const N8 = new Number(1.015432196);
    var dbp= new Number(document.getElementById("dbp").value);
    var N = new Number(N7 * Math.pow(N8, dbp));
    dbp = Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);
    console.log(dbp);

    var c1 = new Number(9.413641651);
    var c2 = new Number(1.004137705);
    var cc = parseInt(document.getElementById("cc").value);
    N = new Number(c1 * Math.pow(c2, cc));
    cc =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);
    console.log(cc);

    c1 = new Number(11.20178254);
    c2 = new Number(1.01704237);
    var lf = parseInt(document.getElementById("lf").value);
    N = new Number(c1 * Math.pow(c2, lf));
    lf =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);
    console.log(lf);

     var cb = new Number(document.getElementById("egcb").innerHTML);
     var lh = new Number(document.getElementById("eglh").innerHTML);


     var dbpdias = (Math.floor(dbp) * 7) + ((dbp - Math.floor(dbp)) * 10);
     var ccdias = (Math.floor(cc) * 7) + ((cc - Math.floor(cc)) * 10);
     var lfdias = (Math.floor(lf) * 7) + ((lf - Math.floor(lf)) * 10);

     if (cb > 0) {
        var cbdias = (Math.floor(cb) * 7) + ((cb - Math.floor(cb)) * 10);
        egbio = (ccdias + lfdias + cbdias) /3;
     }
     else {
        egbio = (dbpdias + ccdias + lfdias) /3;
     }

     if (lh > 0) {
        var lhdias = (Math.floor(lh) * 7) + ((lh - Math.floor(lh)) * 10);
        egbio = (lhdias + egbio) /2;
     }



     egbio = Math.floor(egbio / 7)+"."+ Math.floor(egbio - (Math.floor(egbio/7) *7));

     document.getElementById("p50x1").innerHTML = egbio;
     document.getElementById("p50x2").innerHTML = egbio + "   Semanas";
     document.getElementById("p50-informe2").innerHTML = egbio;

     var eg = document.getElementById("edadG3").innerHTML;

     var eg1 =new Number((Math.floor(egbio) *7) + Math.round((egbio - Math.floor(egbio)) * 7));
     var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));

     document.getElementById("absddif").innerHTML = Math.abs(Math.floor(eg1 - eg2) + Math.round(((eg1 - eg2) - Math.floor(eg1 - eg2)) * 7));

    }