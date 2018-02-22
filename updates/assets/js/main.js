function back() {
    var p1 = document.getElementById('panel1');
    var p2 = document.getElementById('panel2');
    var p3 = document.getElementById('panel3');
    var p4 = document.getElementById('panel4');
    var p5 = document.getElementById('panel5');
    var p6 = document.getElementById('panel6');
    var p7 = document.getElementById('panel7');
    var p8 = document.getElementById('panel8');
    var p9 = document.getElementById('panel9');
    var p10 = document.getElementById('panel10');
    var p11 = document.getElementById('panel11');
    var p12 = document.getElementById('panel12');
    var p13 = document.getElementById('panel13');
    var p14 = document.getElementById('panel14');
    var p15 = document.getElementById('panel15');
    var p16 = document.getElementById('panel16');
    var p17 = document.getElementById('panel17');
    var p18 = document.getElementById('panel18');
    var p20 = document.getElementById('panel20');
    var p21 = document.getElementById('panel21');
    var p22 = document.getElementById('panel22');

    if (p22.style.display == 'block'){
        show_hide('panel22');
        show_hide('panel3');
        return false;
    }
    else if (p21.style.display == 'block'){
        show_hide('panel21');
        show_hide('panel4');
        return false;
    }
    else if (p20.style.display == 'block'){
        show_hide('panel20');
        show_hide('panel4');
        return false;
    }
	else if (p18.style.display == 'block'){
        show_hide('panel18');
        show_hide('panel3');
        return false;
    }
    else if (p17.style.display == 'block'){
        show_hide('panel17');
        show_hide('panel8');
        return false;
    }
    else if (p16.style.display == 'block'){
        show_hide('panel16');
        show_hide('panel3');
        return false;
    }
    else if (p15.style.display == 'block'){
        show_hide('panel15');
        show_hide('panel2');
        document.body.style.backgroundColor = "#e8e8e8";
        return false;
    }
    else if (p14.style.display == 'block'){
        show_hide('panel14');
        show_hide('panel2');
        document.body.style.backgroundColor = "#e8e8e8";
        return false;
    }
    else if (p13.style.display == 'block'){
        show_hide('panel13');
        show_hide('panel2');
        document.body.style.backgroundColor = "#e8e8e8";
        return false;
    }
    else if (p12.style.display == 'block'){
        show_hide('panel12');
        show_hide('panel8');
        return false;
    }
    else if (p11.style.display == 'block') {
            show_hide('panel11');
            show_hide('panel4');
            return false;
    }
    else if (p10.style.display == 'block') {
            show_hide('panel10');
            show_hide('panel3');
            return false;
    }
    else if (p9.style.display == 'block') {
        show_hide('panel9');
        show_hide('panel8');
        app.titulo6();
        return false;
    }
    else if (p8.style.display == 'block') {
        show_hide('panel8');
        show_hide('panel2');
        app.titulo2();
        return false;
    }
    else if (p7.style.display == 'block') {
        show_hide('panel7');
        show_hide('panel4');
        app.titulo4();
        return false;
    }
    else if (p6.style.display == 'block') {
        show_hide('panel6');
        show_hide('panel4');
        app.titulo4();
        return false;
    }
    else if (p5.style.display == 'block') {
        show_hide('panel5');
        show_hide('panel3');
        app.titulo3();
        return false;
    }
    else if (p4.style.display == 'block') {
        show_hide('panel4');
        show_hide('panel2');
        app.titulo2();
        return false;
    }
    else if (p3.style.display == 'block') {
        show_hide('panel3');
        show_hide('panel2');
        app.titulo2();
        return false;
    }
    else if (p2.style.display == 'block') {
        show_hide('panel2');
        show_hide('panel1');
        app.titulo1();
        return false;
    }
    else {
        app.salir()
        return false;
    }
}

function show_hide(id){
    if (document.getElementById){
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
}

function resizeChart(){
    originChartWidth =400;
    originChartHeight = 300;

    //g8.setSize(originChartWidth,originChartHeight);
    //g9.setSize(originChartWidth,originChartHeight);
    //g10.setSize(originChartWidth,originChartHeight);
    //g12.setSize(originChartWidth,originChartHeight);

    var p10 = document.getElementById('panel10');
    if (p10.style.display == 'block') {
        var comentario = document.getElementById("comentarios-informe-eg-texto").value;
        comentario = comentario.replace(/\r?\n/g, "<br>");
        document.getElementById("comentarios-informe-eg").innerHTML=comentario;
    }
    var p11 = document.getElementById('panel11');
    if (p11.style.display == 'block') {
        var comentario = document.getElementById("comentarios-informe-doppler-texto").value;
        comentario = comentario.replace(/\r?\n/g, "<br>");
        document.getElementById("comentarios-informe-doppler").innerHTML=comentario;
    }

    var p12 = document.getElementById('panel12');
    if (p12.style.display == 'block') {
        var comentario = document.getElementById("comentarios-informe-eco-texto").value;
        comentario = comentario.replace(/\r?\n/g, "<br>");
        document.getElementById("comentarios-informe-eco1").innerHTML=comentario;
    }
        var p16 = document.getElementById('panel16');
        if (p16.style.display == 'block') {
            var comentario = document.getElementById("comentarios-informe-deter-eg-texto").value;
            comentario = comentario.replace(/\r?\n/g, "<br>");
            document.getElementById("comentarios-informe-deter-eg").innerHTML=comentario;
        }
}

function obtenerTituloDocAndroid()
{
     var p5 = document.getElementById('panel5');
     var p6 = document.getElementById('panel6');
     var p10 = document.getElementById('panel10');
     var p11 = document.getElementById('panel11');
     var p12 = document.getElementById('panel12');
     var p16 = document.getElementById('panel16');
     var p18 = document.getElementById('panel18');
     var p20 = document.getElementById('panel20');
     var p21 = document.getElementById('panel21');

     if (p5.style.display == 'block') {
        app.getDataFromJs('Gráfica Crecimiento');
     }
     else if (p6.style.display == 'block') {
        app.getDataFromJs('Gráfica Doppler N° 1');
     }
     else if (p10.style.display == 'block') {
        app.getDataFromJs('Informe Crecimiento');
     }
     else if (p11.style.display == 'block') {
        app.getDataFromJs('Informe Doppler');
     }
     else if (p12.style.display == 'block') {
        if (document.getElementById("lcn").value < 1){
            app.getDataFromJs('Informe Eco Saco');
        }
        else {
            app.getDataFromJs('Informe Eco LCN');
        }
     }
     else if (p16.style.display == 'block') {
        app.getDataFromJs('Informe Eco Eg Tardia');
     }
     else if (p18.style.display == 'block') {
        app.getDataFromJs('Grafica Eg Tardia');
     }
     else if (p20.style.display == 'block') {
        app.getDataFromJs('Gráfica Doppler N° 2');
     }
     else if (p21.style.display == 'block') {
        app.getDataFromJs('Gráfica Doppler N° 3');
     }
     else{
        app.getDataFromJs('impresion');
     }
}

function cargarDatosStorage(){
	//localstorage
	if (window.localStorage) {

		if (localStorage.ecografista != null) {
		var ecografista = JSON.parse(localStorage["ecografista"]);
				for (var i = 0; i < ecografista.length; i++) {
			// Iterate over numeric indexes from 0 to 5, as everyone expects.
			var node = document.createElement("option");
			node.value = ecografista[i];
			document.getElementById("ecografista-list").appendChild(node);
		} 
		}
	}
}

window.onload = function () {
    var fecha_hoy = new Date();
    document.getElementById("dateEx").value = fecha_hoy.getDate();
    document.getElementById("monthEx").value = fecha_hoy.getMonth() + 1;

    //error corrige en algunos telefonos
    //algunos huawei no necesitan agregar 1900 a la fecha, ya que javascript entrega el año correcto
    //ej
    // maquinas normales
    // fecha_hoy.getYear() = años que han pasado desde 1900, por eso se suman 1900 (116 + 1900 = 2016)
    //
    //huawei
    // fecha_hoy.getYear() = año actual (2016)

    var elAno = fecha_hoy.getYear() + 1900;
    if (elAno > 2020){
        document.getElementById("yearEx").value = fecha_hoy.getYear();
    }
    else {
        document.getElementById("yearEx").value = elAno;
    }
	cargarDatosStorage();
}

document.getElementById("dateF").addEventListener("change", calcularEG);
document.getElementById("monthF").addEventListener("change", calcularEG);
document.getElementById("yearF").addEventListener("change", calcularEG);
document.getElementById("dateEx").addEventListener("change", calcularEG);
document.getElementById("monthEx").addEventListener("change", calcularEG);
document.getElementById("yearEx").addEventListener("change", calcularEG);

document.getElementById("infodoppler").addEventListener("click", function(){
        show_hide('panel4');
        show_hide('panel11');
        document.getElementById("motivo-doppler-informe").innerHTML=document.getElementById("motivo-doppler").value;
        document.getElementById("antcdentes-informe").innerHTML=document.getElementById("antecedentes-doppler").value;
        document.getElementById("presentacion-informe").innerHTML=document.getElementById("presentacion-doppler").value;
        document.getElementById("motilidad-informe").innerHTML=document.getElementById("motilidad-doppler").value;
        document.getElementById("ubicacion-iforme").innerHTML=document.getElementById("ubicacion-doppler").value;
        document.getElementById("comentarios-informe-doppler-texto").value ="La flujometría feto materna es: ";
        obtenerTituloDocAndroid();
});

document.getElementById("infoeco").addEventListener("click", function(){
        show_hide('panel10');
        show_hide('panel3');
        var actCard;
        var movCorp;
        var ilatxt;

        elem=document.getElementsByName('accard');
        for(i=0;i<elem.length;i++)
            if (elem[i].checked) {
                actCard = elem[i].value;
            }

        elem=document.getElementsByName('movfet');
        for(i=0;i<elem.length;i++)
            if (elem[i].checked) {
                movCorp = elem[i].value;
            }

        if (actCard = 0){
            actCard = "sin actividad cardiaca";
        }
        else
        {
            actCard = "con actividad cardiaca";
        }
        if (movCorp = 0){
            movCorp = "sin movimientos corporales";
        }
        else
        {
            movCorp = "con movimientos corporales";
        }

        ilatxt = document.getElementById("ila").value;

        if (ilatxt > 0){
            ilatxt = " e ILA de " + ilatxt +" mm."
        }
        else{
            ilatxt = "."
        }
        
        document.getElementById("linea1-informe1").innerHTML = "Feto en presentación " + document.getElementById("presentacion").value + ", dorso " + document.getElementById("dorso").value + ", " + actCard + " y " + movCorp + ".";
        document.getElementById("linea2-informe1").innerHTML = "Frecuencia cardiaca fetal de " + document.getElementById("fcf").value + " x minuto.";
        document.getElementById("linea3-informe1").innerHTML = "<strong>Anatomía fetal *</strong>  " + document.getElementById("ev-morfo").value + ", " + document.getElementById("comentarios-anatomia-informe-eg-texto").value;
        document.getElementById("linea4-informe1").innerHTML = "<strong>Placenta</strong> inserción " + document.getElementById("incersion").value + " y de ubicación " + document.getElementById("ubicacion").value + ", grado " + document.getElementById("grado-placenta").value;
        document.getElementById("linea5-informe1").innerHTML = "<strong>Cordón</strong> umbilical " + document.getElementById("cordon").value + ", identificandose "+ document.getElementById("vasos").value +" vasos.";
        document.getElementById("linea6-informe1").innerHTML = "<strong>Líquido</strong> amniótico cualitativamente " + document.getElementById("liq-amnio").value + ", con bolsillo vertical mayor de " + document.getElementById("bvm").value + " mm" + ilatxt;
        document.getElementById("comentarios-informe-eg-texto").value= "El crecimiento fetal es: ";
        obtenerTituloDocAndroid();
});

document.getElementById("infoeco1").addEventListener("click", function(){
        show_hide('panel12');
        show_hide('panel8');
        obtenerTituloDocAndroid();
        sacovitelinotxt = document.getElementById("saco-vitelino-mm").value;

        if (sacovitelinotxt > 0){
            sacovitelinotxt = " de diametro " + sacovitelinotxt +" mm.";
        }
        else{
            sacovitelinotxt = ".";
        }

                sacogestacionaltxt = document.getElementById("prs").value;

                if (sacogestacionaltxt > 0){
                    sacogestacionaltxt = " diametro promedio " + sacogestacionaltxt +" mm.";
                }
                else{
                    sacogestacionaltxt = ".";
                }

                fcftexto = document.getElementById("embrion").value;

                if (fcftexto == 'no se observa aun'){
                    fcftexto = ".";
                }
                else if (fcftexto == 'act. no evidenciable'){
                    fcftexto = ".";
                }
                else{
                     if (document.getElementById("fcf-prim").value == '(+) inicial'){
                         fcftexto = " frecuencia cardiaca fetal " + document.getElementById("fcf-prim").value;
                     }
                     else {
                         fcftexto = " frecuencia cardiaca fetal de " + document.getElementById("fcf-prim").value +" x min.";
                     }
                }


                if (document.getElementById("exploracion-douglas").value == 'ocupado'){
                    douglasinforme = document.getElementById("comentarios-douglas-informe").value
                }
                else
                {
                    douglasinforme = ".";
                }

                document.getElementById("eco1-linea1").innerHTML = document.getElementById("utero-ubic1").value + " " + document.getElementById("utero-ubic2").value + ", " + document.getElementById("cuerpo-uterino").value + ".";
                document.getElementById("eco1-linea2").innerHTML = document.getElementById("saco-gestacional").value + sacogestacionaltxt;
                document.getElementById("eco1-linea3").innerHTML = document.getElementById("saco-vitelino").value + sacovitelinotxt;
                document.getElementById("eco1-linea4").innerHTML = document.getElementById("embrion").value + fcftexto;
                document.getElementById("eco1-linea5").innerHTML = document.getElementById("anexo-derecho").value;
                document.getElementById("eco1-linea6").innerHTML = document.getElementById("anexo-izquierdo").value;
                document.getElementById("eco1-linea7").innerHTML = document.getElementById("exploracion-douglas").value + ", " + douglasinforme;
                document.getElementById("eco1-linea9").innerHTML = "Utero " + document.getElementById("utero-ubic1").value + " " + document.getElementById("utero-ubic2").value + ", " + document.getElementById("cuerpo-uterino").value + ".";
                document.getElementById("eco1-linea10").innerHTML = "Exploración anexial derecha " + document.getElementById("anexo-derecho").value;
                document.getElementById("eco1-linea11").innerHTML = "Exploración anexial izquierda " + document.getElementById("anexo-izquierdo").value;
                if (document.getElementById("exploracion-douglas").value == 'ocupado'){
                }

                sacogestacionaltxt = document.getElementById("prs").value;
                if (sacogestacionaltxt > 0){
                    document.getElementById("eco1-linea12").innerHTML = "Saco gestacional diámetro promedio de " + sacogestacionaltxt +" mm.<br>" + document.getElementById("eco1-linea12").innerHTML;
                    document.getElementById("eco1-linea8").innerHTML = "Edad gestacional estimada " + document.getElementById("pctprs").innerHTML + " por saco gestacional.<br>";
                    //eliminar referencias que no son alusivas a saco
                    //comprobar si no hay lcn
                    if (document.getElementById("lcn").value < 1){
                        $("#referencia-eco1").html("Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800<br><br>Software diseñado por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br>Este software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.")
                    }
                }

                if (document.getElementById("lcn").value > 0) {
                    document.getElementById("eco1-linea12").innerHTML = "Largo embrionario máximo de " + document.getElementById("lcn").value + "mm";
                    document.getElementById("eco1-linea8").innerHTML = "Edad gestacional estimada " + document.getElementById("edadG").innerHTML + " semanas por LCN.<br>";
                }

                if (document.getElementById("eco1-dbp").value > 0){
                    document.getElementById("eco1-linea13").innerHTML = "DBP: " + document.getElementById("eco1-dbp").value + "mm";
                }

                if (document.getElementById("lcn").value <1){
                    if (document.getElementById("eco1-dbp").value <1){
                        if (sacogestacionaltxt <1){
                            document.getElementById("eco1-linea12").innerHTML = "";
                            document.getElementById("eco1-linea8").innerHTML = "";
                            document.getElementById("titulo-biometria").innerHTML = "";
                        }
                    }
                }

});

document.getElementById("infoecoeg").addEventListener("click", function(){
        show_hide('panel16');
        show_hide('panel3');

        document.getElementById("comentarios-informe-deter-eg-texto").value = "Edad ecográfica (Bp50): "+ document.getElementById("p50x2").innerHTML + "\nFUM operacional: " + document.getElementById("fur2").innerHTML + "\nFecha probable de parto:  " + document.getElementById("FPP2").innerHTML;

             var actCard;
                var movCorp;
                var ilatxt;

                elem=document.getElementsByName('accard');
                for(i=0;i<elem.length;i++)
                    if (elem[i].checked) {
                        actCard = elem[i].value;
                    }

                elem=document.getElementsByName('movfet');
                for(i=0;i<elem.length;i++)
                    if (elem[i].checked) {
                        movCorp = elem[i].value;
                    }

                if (actCard = 0){
                    actCard = "sin actividad cardiaca";
                }
                else
                {
                    actCard = "con actividad cardiaca";
                }
                if (movCorp = 0){
                    movCorp = "sin movimientos corporales";
                }
                else
                {
                    movCorp = "con movimientos corporales";
                }

                ilatxt = document.getElementById("ila").value;

                if (ilatxt > 0){
                    ilatxt = " e ILA de " + ilatxt +" mm."
                }
                else{
                    ilatxt = "."
                }
                document.getElementById("linea1-informe2").innerHTML = "Feto en presentación " + document.getElementById("presentacion").value + ", dorso " + document.getElementById("dorso").value + ", " + actCard + " y " + movCorp + ".";
                document.getElementById("linea2-informe2").innerHTML = "Frecuencia cardiaca fetal de " + document.getElementById("fcf").value + " x minuto.";
                document.getElementById("linea3-informe2").innerHTML = "<strong>Anatomía fetal *</strong>  " + document.getElementById("ev-morfo").value + ", " + document.getElementById("comentarios-anatomia-informe-eg-texto").value;
                document.getElementById("linea4-informe2").innerHTML = "<strong>Placenta</strong> inserción " + document.getElementById("incersion").value + " y de ubicación " + document.getElementById("ubicacion").value + ", grado " + document.getElementById("grado-placenta").value;
                document.getElementById("linea5-informe2").innerHTML = "<strong>Cordón</strong> umbilical " + document.getElementById("cordon").value + ", identificandose "+ document.getElementById("vasos").value +" vasos.";
                document.getElementById("linea6-informe2").innerHTML = "<strong>Líquido</strong> amniótico cualitativamente " + document.getElementById("liq-amnio").value + ", con bolsillo vertical mayor de " + document.getElementById("bvm").value + " mm" + ilatxt;
                obtenerTituloDocAndroid();
});

document.getElementById("go2").addEventListener("click", function(){
	var eg = document.getElementById("edadG").innerHTML;
	if ( eg < 1)
	{
	    app.nfur();
	    return false;
	}else {
	  var nombre = document.getElementById("nombre-paciente").value;
	  var apellido = document.getElementById("apellido-paciente").value;
	  var ecografista = document.getElementById("ecografista").value;
	  var idPaciente = document.getElementById("id-paciente").value;
	  var motivoExamen = document.getElementById("motivo-examen").value;

	  var D3 = document.getElementById("dateEx").value;
      var M3 = document.getElementById("monthEx").value;
      var Y3 = document.getElementById("yearEx").value;

      document.getElementById("texto-paciente").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente1").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha1").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente2").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha2").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente3").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha3").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente4").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha4").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente5").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha5").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente6").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha6").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente7").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha7").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente8").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha8").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente9").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha9").innerHTML=D3+"/"+M3+"/"+Y3;
      document.getElementById("texto-paciente10").innerHTML=nombre+" "+apellido;
      document.getElementById("texto-fecha10").innerHTML=D3+"/"+M3+"/"+Y3;

      document.getElementById("texto-ecografista").innerHTML=ecografista;
      document.getElementById("texto-ecografista1").innerHTML=ecografista;
      document.getElementById("texto-ecografista2").innerHTML=ecografista;
      document.getElementById("texto-ecografista3").innerHTML=ecografista;
      document.getElementById("texto-ecografista4").innerHTML=ecografista;
      document.getElementById("texto-ecografista5").innerHTML=ecografista;
      document.getElementById("texto-ecografista6").innerHTML=ecografista;
      document.getElementById("texto-ecografista7").innerHTML=ecografista;
      document.getElementById("texto-ecografista8").innerHTML=ecografista;
      document.getElementById("texto-ecografista9").innerHTML=ecografista;

      document.getElementById("texto-id-paciente").innerHTML=idPaciente;
      document.getElementById("texto-id-paciente1").innerHTML=idPaciente;
      document.getElementById("texto-id-paciente2").innerHTML=idPaciente;
      document.getElementById("texto-id-paciente3").innerHTML=idPaciente;

      document.getElementById("texto-motivo-paciente").innerHTML=motivoExamen;
      document.getElementById("texto-motivo-paciente1").innerHTML=motivoExamen;
      document.getElementById("texto-motivo-paciente2").innerHTML=motivoExamen;
      document.getElementById("texto-motivo-paciente3").innerHTML=motivoExamen;

	show_hide('panel2');
	show_hide('panel1');
	
	//localstorage
	if (window.localStorage) {
		/*Guardando los datos en el LocalStorage*/

	if (localStorage.ecografista != null) {
			var ecog = JSON.parse(localStorage["ecografista"]);
		}else{
			var ecog = [];
		}

        //comprueba y guarda el ecografista
        if (ecog.length < 1 && ecografista.length > 1){
            ecog.push(ecografista);
        }
        else {
           for (var i = 0; i < ecog.length; i++) {
                // Iterate over numeric indexes from 0 to 5, as everyone expects.
                if (ecog[i] == ecografista){
                    i = ecog.length;
                }
                else {
                    if (i +1 == ecog.length && ecografista.length > 1){
                        ecog.push(ecografista);
                    }
                }
            }
        }

		localStorage["ecografista"] = JSON.stringify(ecog);

		document.getElementById("ecografista-list").innerHTML = "";
		cargarDatosStorage();
	}
}});

document.getElementById("goCopia").addEventListener("click", function(){
 $("#go2").trigger( "click" );
});

document.getElementById("goDatos").addEventListener("click", function(){
	show_hide('panel19');
	show_hide('panel1');

		if (localStorage.ecografista != null) {
		var ecografista = JSON.parse(localStorage["ecografista"]);
				for (var i = 0; i < ecografista.length; i++) {
			var nodeB = document.createElement("option");
			nodeB.value = ecografista[i];
			nodeB.text = ecografista[i];
			document.getElementById("ecografista-eliminar").appendChild(nodeB);
		}
		}
});

document.getElementById("eliminarEcografista").addEventListener("click", function(){
    var ecografista = document.getElementById("ecografista-eliminar").value;
    if (localStorage.ecografista != null) {
    	var ecograf = JSON.parse(localStorage["ecografista"]);
    }else{
    	var ecograf = [];
    }
    var ecografN = [];
    if (ecograf.length < 1){
                document.getElementById("ecografista-eliminar").innerHTML = "";
            }
            else {
                for (var i = 0; i < ecograf.length; i++) {
                    // Iterate over numeric indexes from 0 to 5, as everyone expects.
                    if (ecograf[i] == ecografista){
                        i = i;
                    }
                    else {
                        ecografN.push(ecograf[i]);
                    }
                }
            }
    localStorage["ecografista"] = JSON.stringify(ecografN);
    document.getElementById("ecografista-eliminar").innerHTML = ""; 0;

if (localStorage.ecografista != null) {
		var ecografista = JSON.parse(localStorage["ecografista"]);
				for (var i = 0; i < ecografista.length; i++) {
			var node = document.createElement("option");
			node.value = ecografista[i];
			node.text = ecografista[i];
			document.getElementById("ecografista-eliminar").appendChild(node);
		}
		}
    		document.getElementById("ecografista-list").innerHTML = "";
    		cargarDatosStorage();
});

document.getElementById("go3").addEventListener("click", function(){
	show_hide('panel2');
	show_hide('panel3');
	//app.titulo3();
	return false;
});

document.getElementById("go4").addEventListener("click", function () {
	show_hide('panel2');
	show_hide('panel4');
	app.titulo4();
	return false;
});

document.getElementById("go5").addEventListener("click", function () {
    show_hide('panel2');
    show_hide('panel8');
    app.titulo6();
    return false;
});

document.getElementById("gf1").addEventListener("click", function () {
    show_hide('panel3');
    show_hide('panel5');

$('#g27').highcharts({
            title: {
                text: 'Largo Humeral',
                x: -20
            },
            subtitle: {
                text: 'Milimetros (mm)',
                x: -20
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: 'Milimetros (mm)' },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: { enabled: false },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: { enabled: false },
                data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: { enabled: false },
                data: [12.3, 15.1, 17.9, 20.7, 23.5, 26.3, 29.1, 31.6, 34.2, 36.7, 39.2, 41.6, 43.9, 46.1, 48.1, 50.1, 52.1, 53.9, 55.6, 57.3, 58.9, 60.5, 62.1, 63.5, 64.9, 66.4, 67.8, 69.3, 70.8]
            }, {
                type: "line",
                name: 'Humero',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    var data = [];
                    var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                    for (i = 12; i <= edadGest; i++) {
                        data.push({ y: 0, });
                    }
                    data.push({
                        y: parseInt(document.getElementById("lh").value),
                    });
                    for (i = edadGest + 1; i <= 39; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
        });
    $('#g1').highcharts({
        title: {
            text: 'BVM***',
            x: -20
        },
        subtitle: {
            text: 'Milimetros (mm)',
            x: -20
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Milimetros (mm)' },
            tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
        },
        colors: ['#313131','#313131','#313131'],
        xAxis: {
            categories: ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
        },
        credits: {enabled:false},
        series: [{
            type: "line",
            name: 'Pct. 5',
            marker: {enabled:false},
            data: [23,25,27,28,29,29,30,30,30,30,30,30,30,29,29,29,29,29,28,28,27,26,24,23,21]
        }, {
            type: "line",
            name: 'Pct. 95',
            marker: { enabled: false },
            data: [59,62,64,66,67,68,68,68,68,68,68,69,69,69,69,70,71,72,72,72,71,70,68,66,62]
        }, {
            type: "line",
            name: 'BVM',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (
                function () {
                    var data = [];
                    var edadGest = parseInt(document.getElementById("edadG").innerHTML)-1;

                    for (i = 16; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                            y: parseInt(document.getElementById("bvm").value),
                        });
                    for (i = edadGest +1; i <= 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
    });
   $('#g2').highcharts({
       title: {
           text: 'ILA',
           x: -20
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [20, 52, 84, 116, 148, 180, 212, 244, 276, 308]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories: ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct. 5',
           marker: {enabled: false},
           data: [79,83,87,90,93,95,97,98,98,97,97,95,94,92,90,88,86,83,81,79,77,75,73,72,71]
       }, {
           type: "line",
           name: 'Pct. 95',
           marker: {enabled: false},
           data: [185,194,200,204,208,212,214,217,218,221,223,226,228,231,234,238,242,245,248,249,249,244,239,226,214]
       }, {
           type: "line",
           name: 'ILA',
           dashStyle: "Dot",
           marker: {symbol: 'square'},
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseInt(document.getElementById("ila").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });

   obtenerTituloDocAndroid();

   $('#g3').highcharts({
       title: {
           text: 'CC',
           x: -20
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [30, 72, 114, 156, 198, 240, 282, 324, 366, 408]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct. 3',
           marker: {enabled: false},
           data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
       }, {
           type: "line",
           name: 'Pct. 97',
           marker: {enabled: false},
           data: [90,100,111,124,136,150,165,179,193,206,219,232,243,256,268,279,290,300,310,319,328,336,343,351,358,363,368,373,377]
       }, {
           type: "line",
           name: 'CC',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseInt(document.getElementById("cc").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
   $('#g4').highcharts({
       title: {
           text: 'CA**',
           x: -20
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [20, 60, 100, 140, 180, 220, 260, 300, 340, 400]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: { enabled: false },
       series: [{
           type: "line",
           name: 'Pct. 3',
           marker: { enabled: false },
           data: [40,50,60,72,84,97,107,119,131,141,151,161,171,181,191,200,209,218,227,236,245,253,261,269,277,285,292,299,307]
       }, {
           type: "line",
           name: 'Pct 97',
           marker: { enabled: false },
           data: [68,78,88,101,112,127,141,155,168,183,196,209,223,235,248,260,271,284,295,306,318,329,339,349,359,370,380,389,399]
       }, {
           type: "line",
           name: 'CA',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseInt(document.getElementById("ca").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
   $('#g5').highcharts({
       title: {
           text: 'LF',
           x: -20
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: { enabled: false },
       series: [{
           type: "line",
           name: 'Pct. 3',
           marker: { enabled: false },
           data: [6,9,12,14,17,20,22,25,27,30,32,35,37,40,42,45,47,49,52,54,56,58,59,61,62,64,65,66,67]
       }, {
           type: "line",
           name: 'Pct. 97',
           marker: { enabled: false },
           data: [12,15,18,21,24,28,31,34,38,41,44,47,50,53,55,57,60,62,65,67,70,71,73,75,77,79,80,81,82]
       }, {
           type: "line",
           name: 'LF',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({ y: 0, });
               }
               data.push({
                   y: parseInt(document.getElementById("lf").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
   $('#g6').highcharts({
       title: {
           text: 'Peso Fetal Estimado *',
           x: -20 //center
       },
       subtitle: {
           text: 'Kilogramos',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false,
               pointInterval: 1
           }
       },
       yAxis: {
           title: { text: 'Kilogramos' },
           tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct 3',
           dashStyle: "Dot",
           marker: {enabled: false},
           data: [110,136,167,205,248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714]
       }, {
           type: "line",
           name: 'Pct 10',
           marker: { enabled: false },
           data: [121,150,185,227,275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985]
       }, {
           type: "line",
           name: 'Pct 90',
           marker: { enabled: false },
           data: [171,212,261,319,387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234]
       }, {
           type: "line",
           name: 'Pct 97',
           dashStyle: "Dot",
           marker: { enabled: false, },
           data: [183,226,279,341,414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474]
       }, {
           type: "line",
           name: 'Peso',
           dashStyle: "Dot",
           marker: {symbol:'square'},
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseInt(document.getElementById("pfe").innerHTML),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
   $('#g7').highcharts({
       title: {
           text: 'Cc / Ca *',
           x: -20 //center
       },
       subtitle: {
           text: '',
           x: -20
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Valor cuociente' },
           tickPositions: [0.75, 0.82, 0.88, 0.95, 1, 1.07, 1.14, 1.2, 1.27, 1.33]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
       },
       credits: { enabled: false },
       series: [{
           type: "line",
           name: 'Pct. 3',
           marker: { enabled: false },
           data: [1.1,1.09,1.08,1.07,1.06,1.06,1.05,1.04,1.03,1.02,1.01,1,1,0.99,0.98,0.97,0.96,0.95,0.95,0.94,0.93,0.92,0.91,0.9,0.89,0.89]
       }, {
           type: "line",
           name: 'Pct. 97',
           marker: { enabled: false },
           data: [1.29,1.28,1.27,1.26,1.25,1.24,1.24,1.23,1.22,1.21,1.2,1.19,1.18,1.18,1.17,1.17,1.16,1.15,1.14,1.13,1.12,1.11,1.1,1.09,1.08,1.08]
       }, {
           type: "line",
           name: 'CC/CA',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseFloat(document.getElementById("ccca").innerHTML),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
   app.titulo5();
   return false;
});

document.getElementById("dbp").addEventListener("change", egdbp);
document.getElementById("bvm").addEventListener("change", pctbvm);
document.getElementById("bvm-doppler").addEventListener("change", pctbvmdoppler);
document.getElementById("ila").addEventListener("change", pctila);
document.getElementById("cc").addEventListener("change", pctcc);
document.getElementById("ca").addEventListener("change", pctca);
document.getElementById("lf").addEventListener("change", pctlf);
document.getElementById("cb").addEventListener("change", pctcb);
document.getElementById("pfe").addEventListener("change", pctpfe);
document.getElementById("saco-vitelino").addEventListener("change", saco_vitelino_change);
document.getElementById("embrion").addEventListener("change", embrion_change);
document.getElementById("lh").addEventListener("change", PctHumFet);
document.getElementById("tf").addEventListener("change", tallaFetal);


document.getElementById("gf2").addEventListener("click", function () {
  show_hide('panel4');
  show_hide('panel6');

     $('#g8').highcharts({
        title: {
            text: 'IP promedio de Arterias Uterinas *',
            x: -20
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Valor IP' },
            tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'] 
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 5',
            marker: { enabled: false },
            data: [1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47]
        }, {
            type: "line",
            name: 'Pct. 95',
            marker: { enabled: false },
            data: [2.84,2.71,2.53,2.38,2.24,2.11,1.99,1.88,1.79,1.71,1.61,1.54,1.47,1.41,1.35,1.3,1.25,1.21,1.17,1.13,1.11,1.06,1.04,1.01,0.99,0.97,0.95,0.94,0.92,0.91,0.91]
        }, {
            type: "line",
                name: 'Arteria Promedio',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
            data: (function () {
                    // generate an array of random data
                    var data = [];
                    var edadGest = parseInt(document.getElementById("edadG").innerHTML)-1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                            y: parseFloat(document.getElementById("utp").innerHTML),
                        });
                    for (i = edadGest +1; i <= 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
    });
     $('#g9').highcharts({
         title: {
             text: 'IP Arteria Umbilical **',
             x: -20 //center
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor IP' },
             tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories:['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [0.97,0.95,0.94,0.92,0.9,0.89,0.87,0.85,0.82,0.8,0.78,0.75,0.73,0.7,0.67,0.65,0.62,0.58,0.55,0.52,0.49]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.6,1.56,1.53,1.5,1.46,1.43,1.4,1.37,1.35,1.32,1.29,1.27,1.25,1.22,1.2,1.18,1.16,1.14,1.13,1.11,1.09]
         }, {
             type: "line",
             name: 'Arteria',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat(document.getElementById("aumb").value),
                 });
                 for (i = edadGest + 1; i <= 39; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
     });
     obtenerTituloDocAndroid();
     $('#g10').highcharts({
         title: {
             text: 'IP Arteria Cerebral Media **',
             x: -20
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor IP' },
             tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories: ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         credits: {
             enabled: false
         },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [1.24,1.29,1.34,1.37,1.4,1.43,1.44,1.45,1.45,1.44,1.43,1.41,1.38,1.34,1.3,1.25,1.19,1.13,1.05,0.98,0.89]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.98,2.12,2.25,2.36,2.45,2.53,2.59,2.63,2.66,2.67,2.67,2.65,2.62,2.56,2.5,2.41,2.31,2.2,2.07,1.92,1.76]
         }, {
             type: "line",
             name: 'Arteria',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat(document.getElementById("acm").value),
                 });
                 for (i = edadGest + 1; i <= 39; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
     });
     $('#g12').highcharts({
         title: {
             text: 'IP de CCP (Indice ACM / AU) **',
             x: -20 //center
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor IP' },
             tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories:
             ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
         },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [0.78,0.87,0.95,1.02,1.09,1.15,1.2,1.24,1.28,1.31,1.33,1.35,1.36,1.36,1.36,1.34,1.32,1.3,1.26,1.22,1.18]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.68,1.88,2.06,2.22,2.36,2.49,2.6,2.7,2.78,2.84,2.89,2.92,2.93,2.93,2.91,2.87,2.82,2.75,2.67,2.57,2.45]
         }, {
             type: "line",
             name: 'Cuociente',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 // generate an array of random data
                 var data = [];
                 var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat(document.getElementById("ccp").innerHTML),
                 });
                 for (i = edadGest + 1; i <= 38; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
     });
     app.titulo5();
     return false;
});

document.getElementById("gf3").addEventListener("click", function () {
  show_hide('panel4');
  show_hide('panel7');

     $('#g11').highcharts({
        title: {
            text: 'Ductus Venoso',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Valor' },
            tickPositions: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: 
            ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 5',
            marker: { enabled: false },
            data: [0.32,0.32,0.32,0.32,0.32,0.32,0.31,0.31,0.31,0.3,0.29,0.28,0.28,0.27,0.26,0.25,0.24,0.23,0.22,0.21,0.2]
        }, {
            type: "line",
            name: 'Pct. 95',
            marker: { enabled: false },
            data: [0.83,0.83,0.83,0.83,0.83,0.83,0.82,0.82,0.81,0.81,0.8,0.79,0.78,0.77,0.76,0.75,0.74,0.73,0.72,0.71,0.7]
        }, {
            type: "line",
                name: 'Ductus Venoso',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
            data: (function () {
                    // generate an array of random data
                    var data = [];
                    var edadGest = parseInt(document.getElementById("edadG").innerHTML)-1;

                    for (i = 20; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                            y: parseFloat(document.getElementById("dvo").value),
                        });
                    for (i = edadGest +1; i <= 39; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
     });
     app.titulo5();
     return false;
});

document.getElementById("utd").addEventListener("change", pctut);
document.getElementById("uti").addEventListener("change", pctut);
document.getElementById("aumb").addEventListener("change", pctumb);
document.getElementById("acm").addEventListener("change", pctcm);
document.getElementById("dvo").addEventListener("change", pctdvo);

document.getElementById("prs").addEventListener("change", PromSaco);
document.getElementById("lcn").addEventListener("change", eglcn);
document.getElementById("exploracion-douglas").addEventListener("change", douglas_eco1_change);

document.getElementById("adedadg").addEventListener("click", function () {
        //var cb, lh;

        //cb = parseInt($("#cb").val());
        //lh = parseInt($("#lh").val());
        //if (cb <0 || isNaN(cb)){
        //    app.cbText();
        //    $("#cb").focus();
        //    document.getElementById("adedadg").setAttribute("checked", "");
        //    document.getElementById("adedadg").removeAttribute("checked");
        //    document.getElementById("adedadg").checked = false;

        //    document.getElementById("noadedadg").setAttribute("checked", "true");
        //    document.getElementById("noadedadg").checked = true;
        //    ajustePendiente = true;
        //}

        //if (lh <0 || isNaN(lh)){
        //     app.lhText();
        //     $("#lh").focus();
        //     document.getElementById("adedadg").setAttribute("checked", "");
        //     document.getElementById("adedadg").removeAttribute("checked");
        //     document.getElementById("adedadg").checked = false;

        //     document.getElementById("noadedadg").setAttribute("checked", "true");
        //     document.getElementById("noadedadg").checked = true;
        //     ajustePendiente = true;
        //}

        //if (cb > 0 && lh > 0){
            $('#ege').collapse('show');
            $('#egeRef').html($("#edadG3").html() + " semanas");
        //}
})

document.getElementById("noadedadg").addEventListener("click", function () {
    $('#ege').collapse('hide');
})


document.getElementById("addatosinfg").addEventListener("click", function () {
    $('#informgest').collapse('show');
})

document.getElementById("noaddatosinfg").addEventListener("click", function () {
    $('#informgest').collapse('hide');
})

document.getElementById("addatosinfd").addEventListener("click", function () {
    $('#informdoppler').collapse('show');
})

document.getElementById("noaddatosinfd").addEventListener("click", function () {
    $('#informdoppler').collapse('hide');
})

document.getElementById("addatosinfe").addEventListener("click", function () {
    $('#informecog1').collapse('show');
    saco_vitelino_change();
})

document.getElementById("noaddatosinfe").addEventListener("click", function () {
    $('#informecog1').collapse('hide');
    saco_vitelino_change();
})

document.getElementById("dbp").addEventListener("keypress", dbp_change);
document.getElementById("cc").addEventListener("keypress", cc_change);
document.getElementById("ca").addEventListener("keypress", ca_change);
document.getElementById("lf").addEventListener("keypress", lf_change);
document.getElementById("bvm").addEventListener("keypress", bvm_change);
document.getElementById("bvm-doppler").addEventListener("keypress", bvm_change);
document.getElementById("ila").addEventListener("keypress", ila_change);
document.getElementById("utd").addEventListener("keypress", utd_change);
document.getElementById("uti").addEventListener("keypress", uti_change);
document.getElementById("utp").addEventListener("keypress", utp_change);
document.getElementById("aumb").addEventListener("keypress", aumb_change);
document.getElementById("acm").addEventListener("keypress", acm_change);
document.getElementById("dvo").addEventListener("keypress", dvo_change);
document.getElementById("prs").addEventListener("keypress", prs_change);
document.getElementById("lcn").addEventListener("keypress", lcn_change);
document.getElementById("saco-vitelino-mm").addEventListener("keypress", saco_change);
document.getElementById("eco1-dbp").addEventListener("keypress", dbp_eco1_change);

$( "#dbp" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#cc").focus();
  }
});

$( "#cc" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#ca").focus();
  }
});

$( "#ca" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#lf").focus();
  }
});

$( "#lf" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#bvm").focus();
  }
});

$( "#lh" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#cb").focus();
  }
});

$( "#cb" ).keypress(function( event ) {
  if ( event.which == 13 ) {
          if (ajustePendiente == true){
                        document.getElementById("adedadg").setAttribute("checked", "true");
                        document.getElementById("adedadg").checked = true;
                        $("#adedadg").trigger("click");
                        $("#adedadg").focus();
          }
          else{
            $("#pfe").focus();
          }
  }
});

$( "#bvm" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#pfe").focus();
  }
});

$( "#ila" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#pfe").focus();
  }
});

$( "#utd" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#uti").focus();
  }
});

$( "#uti" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#utp").focus();
  }
});

$( "#uti" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#aumb").focus();
  }
});

$( "#aumb" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#acm").focus();
  }
});

$( "#acm" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     $("#dvo").focus();
  }
});



document.getElementById("fexa").addEventListener("click", function () {
    $('#fx1').collapse('hide');
    $('#fx2').collapse('hide');
})

document.getElementById("fexb").addEventListener("click", function () {
    $('#fx1').collapse('show');
    $('#fx2').collapse('show');
})

document.getElementById("ajusta").addEventListener("click", function () {
    $('#ajst').collapse('show');

    var oneday = 1000 * 60 * 60 * 24;
    var oneweek = oneday * 7;
    var D1 = document.getElementById("dateF").value;
    var M1 = document.getElementById("monthF").value;
    var Y1 = document.getElementById("yearF").value;
    var input = new Date(Y1, M1 - 1, D1);

    var B = new Date();


    var egbio =  document.getElementById("p50x1").innerHTML;
    var eg = document.getElementById("edadG3").innerHTML;

    var eg1 = new Number((Math.floor(egbio) * 7) + Math.round((egbio - Math.floor(egbio)) * 7));
    var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));

    var xs1 = eg2 - eg1;
    var xs2 = Math.floor(eg2 - eg1);
    var xs3 = Math.floor(eg2 - eg1);
    var xs4 = (eg2 - eg1) - Math.floor(eg2 - eg1);
    var xs5 = ((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7;
    var xs6= Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7);


    var C = new Number(Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
    C = C / 7
    C = Math.floor(C) + "." + Math.round((C - Math.floor(C)) * 7);
    B.setTime(input.getTime() + C * oneweek);

    document.getElementById("furaj").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();

    document.getElementById("dateF").value = B.getDate();
    document.getElementById("monthF").value = (B.getMonth() + 1);
    document.getElementById("yearF").value = B.getFullYear();

    document.getElementById("fur2").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
    document.getElementById("fur3").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
    document.getElementById("fur4").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
    document.getElementById("fur6").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
    document.getElementById("fur7").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
    document.getElementById("fur8").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
    document.getElementById("fur9").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
    document.getElementById("fur10").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();

    var FURAJUSTE = new Date(B.getFullYear(), B.getMonth(), B.getDate());
    var A = new Date();
    A.setTime(FURAJUSTE.getTime() + 40 * oneweek);

    document.getElementById("FPPaj").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
    document.getElementById("FPP").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
    document.getElementById("FPP2").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
    document.getElementById("FPP3").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
    document.getElementById("FPP4").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
    document.getElementById("FPP6").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
    document.getElementById("FPP7").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
    document.getElementById("FPP8").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
    document.getElementById("FPP9").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
    document.getElementById("FPP10").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();

    var D3 = document.getElementById("dateEx").value;
    var M3 = document.getElementById("monthEx").value;
    var Y3 = document.getElementById("yearEx").value;

    var D1 = document.getElementById("dateF").value;
    var M1 = document.getElementById("monthF").value;
    var Y1 = document.getElementById("yearF").value;

    var X = new Date (Y1,M1-1,D1);

    var Z = new Date (Y3,M3-1,D3);
 
    var Y = ((Z.getTime() - X.getTime()) / oneweek);
 
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
    }
    egdbp();
    pctbvm();
    pctila();
    pctcc();
    pctca();
    pctlf();
    pctpfe();
})

document.getElementById("ajustb").addEventListener("click", function () {
    $('#ajst').collapse('hide');
})

document.getElementById("ajlcna").addEventListener("click", function () {
    if ($('#lcn').val() > 0){
        show_hide('ege-segun-saco');
        $('#egelcn').collapse('show');
        $('#egelcndos').collapse('show');
    }
    else if ($('#prs').val() > 0){
        show_hide('ege-segun-lcn');

        var eg = document.getElementById("edadG9").innerHTML;
        var egsaco = document.getElementById("pctprsx2").innerHTML;
        var eg1 = new Number((Math.floor(egsaco) * 7) + Math.round((egsaco - Math.floor(egsaco)) * 7));
        var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
        var diferencia = Math.abs(Math.floor(eg1 - eg2) + Math.round(((eg1 - eg2) - Math.floor(eg1 - eg2)) * 7));

        $('#mensaje-ajuste-primer-trimestre').html('Hay ' + diferencia + ' días de diferencia entre la edad  de FUM y la obtenida por Saco Gestacional');
        $('#primtrim-rango').html('La determinación de edad gestacional por saco es solo un referencial transitorio. Edad gestacional definitiva se determinará mediante biometría embrionaria.')
        $('#egelcn').collapse('show');
        $('#egelcndos').collapse('show');

    }
    else{
        app.ajuste1trim();
    }
})

document.getElementById("ajlcnb").addEventListener("click", function () {
    $('#egelcn').collapse('hide');
    $('#egelcndos').collapse('hide');
})
document.getElementById("ajustlcna").addEventListener("click", function () {
    $('#ajstlcn').collapse('show');

    if ($('#lcn').val() > 0){
        var oneday = 1000 * 60 * 60 * 24;
        var oneweek = oneday * 7;
        var D1 = document.getElementById("dateF").value;
        var M1 = document.getElementById("monthF").value;
        var Y1 = document.getElementById("yearF").value;
        var input = new Date(Y1, M1 - 1, D1);

        var B = new Date();


        var egbio = document.getElementById("pctlcnx3").innerHTML;
        var eg = document.getElementById("edadG9").innerHTML;

        var eg1 = new Number((Math.floor(egbio) * 7) + Math.round((egbio - Math.floor(egbio)) * 7));
        var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));

        var xs1 = eg2 - eg1;
        var xs2 = Math.floor(eg2 - eg1);
        var xs3 = Math.floor(eg2 - eg1);
        var xs4 = (eg2 - eg1) - Math.floor(eg2 - eg1);
        var xs5 = ((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7;
        var xs6 = Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7);


        var C = new Number(Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
        C = C / 7
        C = Math.floor(C) + "." + Math.round((C - Math.floor(C)) * 7);
        B.setTime(input.getTime() + C * oneweek);

        document.getElementById("furajlcn").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();


        document.getElementById("dateF").value = B.getDate();
        document.getElementById("monthF").value = (B.getMonth() + 1);
        document.getElementById("yearF").value = B.getFullYear();

        document.getElementById("fur2").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur3").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur4").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur6").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur7").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur8").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur9").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur10").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();

        var FURAJUSTE = new Date(B.getFullYear(), B.getMonth(), B.getDate());
        var A = new Date();
        A.setTime(FURAJUSTE.getTime() + 40 * oneweek);
        document.getElementById("FPPajlcn").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();

        document.getElementById("FPPaj").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP2").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP3").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP4").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP6").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP7").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP8").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP9").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP10").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();

        var D3 = document.getElementById("dateEx").value;
        var M3 = document.getElementById("monthEx").value;
        var Y3 = document.getElementById("yearEx").value;

        var D1 = document.getElementById("dateF").value;
        var M1 = document.getElementById("monthF").value;
        var Y1 = document.getElementById("yearF").value;

        var X = new Date(Y1, M1 - 1, D1);

        var Z = new Date(Y3, M3 - 1, D3);

        var Y = ((Z.getTime() - X.getTime()) / oneweek);

        if (Z.getTime() < X.getTime()) {
            document.getElementById("edadG").innerHTML = "0";
            document.getElementById("edadG2").innerHTML = "0";
            document.getElementById("edadG3").innerHTML = "0";
            document.getElementById("edadG4").innerHTML = "0";
            document.getElementById("edadG6").innerHTML = "0";
            document.getElementById("edadG7").innerHTML = "0";
            document.getElementById("edadG8").innerHTML = "0";
            document.getElementById("edadG9").innerHTML = "0";
            document.getElementById("edadG10").innerHTML = "0";
            document.getElementById("edadG11").innerHTML = "0";
            document.getElementById("edadG12").innerHTML = "0";
            document.getElementById("edadG13").innerHTML = "0";
        }
        else if (((Z.getTime() - X.getTime()) / oneweek) > 42) {
            document.getElementById("edadG").innerHTML = "42";
            document.getElementById("edadG2").innerHTML = "42";
            document.getElementById("edadG3").innerHTML = "42";
            document.getElementById("edadG4").innerHTML = "42";
            document.getElementById("edadG6").innerHTML = "42";
            document.getElementById("edadG7").innerHTML = "42";
            document.getElementById("edadG8").innerHTML = "42";
            document.getElementById("edadG9").innerHTML = "42";
            document.getElementById("edadG10").innerHTML = "42";
            document.getElementById("edadG11").innerHTML = "42";
            document.getElementById("edadG12").innerHTML = "42";
            document.getElementById("edadG13").innerHTML = "42";
        }
        else {
            document.getElementById("edadG").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG2").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG3").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG4").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG6").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG7").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG8").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG9").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG10").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG11").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG12").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG13").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
        }
        eglcn();
        document.getElementById("comentarios-informe-eco-texto").value = "Edad ecográfica (LCN): "+ document.getElementById("edadG9").innerHTML + "\nFUM operacional: " + document.getElementById("fur9").innerHTML + "\nFecha probable de parto:  " + document.getElementById("FPP9").innerHTML;
    }
    else if ($('#prs').val() > 0){
        var oneday = 1000 * 60 * 60 * 24;
        var oneweek = oneday * 7;
        var D1 = document.getElementById("dateF").value;
        var M1 = document.getElementById("monthF").value;
        var Y1 = document.getElementById("yearF").value;
        var input = new Date(Y1, M1 - 1, D1);

        var B = new Date();


        var egbio = document.getElementById("pctprsx2").innerHTML;
        var eg = document.getElementById("edadG9").innerHTML;

        var eg1 = new Number((Math.floor(egbio) * 7) + Math.round((egbio - Math.floor(egbio)) * 7));
        var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));

        var xs1 = eg2 - eg1;
        var xs2 = Math.floor(eg2 - eg1);
        var xs3 = Math.floor(eg2 - eg1);
        var xs4 = (eg2 - eg1) - Math.floor(eg2 - eg1);
        var xs5 = ((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7;
        var xs6 = Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7);


        var C = new Number(Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
        C = C / 7
        C = Math.floor(C) + "." + Math.round((C - Math.floor(C)) * 7);
        B.setTime(input.getTime() + C * oneweek);

        document.getElementById("furajlcn").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();


        document.getElementById("dateF").value = B.getDate();
        document.getElementById("monthF").value = (B.getMonth() + 1);
        document.getElementById("yearF").value = B.getFullYear();

        document.getElementById("fur2").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur3").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur4").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur6").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur7").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur8").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur9").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();
        document.getElementById("fur10").innerHTML = B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear();

        var FURAJUSTE = new Date(B.getFullYear(), B.getMonth(), B.getDate());
        var A = new Date();
        A.setTime(FURAJUSTE.getTime() + 40 * oneweek);
        document.getElementById("FPPajlcn").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();

        document.getElementById("FPPaj").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP2").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP3").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP4").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP6").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP7").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP8").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP9").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();
        document.getElementById("FPP10").innerHTML = A.getDate() + "/" + (A.getMonth() + 1) + "/" + A.getFullYear();

        var D3 = document.getElementById("dateEx").value;
        var M3 = document.getElementById("monthEx").value;
        var Y3 = document.getElementById("yearEx").value;

        var D1 = document.getElementById("dateF").value;
        var M1 = document.getElementById("monthF").value;
        var Y1 = document.getElementById("yearF").value;

        var X = new Date(Y1, M1 - 1, D1);

        var Z = new Date(Y3, M3 - 1, D3);

        var Y = ((Z.getTime() - X.getTime()) / oneweek);

        if (Z.getTime() < X.getTime()) {
            document.getElementById("edadG").innerHTML = "0";
            document.getElementById("edadG2").innerHTML = "0";
            document.getElementById("edadG3").innerHTML = "0";
            document.getElementById("edadG4").innerHTML = "0";
            document.getElementById("edadG6").innerHTML = "0";
            document.getElementById("edadG7").innerHTML = "0";
            document.getElementById("edadG8").innerHTML = "0";
            document.getElementById("edadG9").innerHTML = "0";
            document.getElementById("edadG10").innerHTML = "0";
            document.getElementById("edadG11").innerHTML = "0";
            document.getElementById("edadG12").innerHTML = "0";
            document.getElementById("edadG13").innerHTML = "0";
        }
        else if (((Z.getTime() - X.getTime()) / oneweek) > 42) {
            document.getElementById("edadG").innerHTML = "42";
            document.getElementById("edadG2").innerHTML = "42";
            document.getElementById("edadG3").innerHTML = "42";
            document.getElementById("edadG4").innerHTML = "42";
            document.getElementById("edadG6").innerHTML = "42";
            document.getElementById("edadG7").innerHTML = "42";
            document.getElementById("edadG8").innerHTML = "42";
            document.getElementById("edadG9").innerHTML = "42";
            document.getElementById("edadG10").innerHTML = "42";
            document.getElementById("edadG11").innerHTML = "42";
            document.getElementById("edadG12").innerHTML = "42";
            document.getElementById("edadG13").innerHTML = "42";
        }
        else {
            document.getElementById("edadG").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG2").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG3").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG4").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG6").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG7").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG8").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG9").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG10").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG11").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG12").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
            document.getElementById("edadG13").innerHTML = Math.floor(Y) + "." + Math.round((Y - Math.floor(Y)) * 7);
        }

        var eg = document.getElementById("edadG9").innerHTML;
        var egsaco = document.getElementById("pctprsx2").innerHTML;
        var eg1 = new Number((Math.floor(egsaco) * 7) + Math.round((egsaco - Math.floor(egsaco)) * 7));
        var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
        var diferencia = Math.abs(Math.floor(eg1 - eg2) + Math.round(((eg1 - eg2) - Math.floor(eg1 - eg2)) * 7));

        $('#mensaje-ajuste-primer-trimestre').html('Hay ' + diferencia + ' días de diferencia entre la edad  de FUM y la obtenida por Saco Gestacional');
        $('#primtrim-rango').html('La determinación de edad gestacional por saco es solo un referencial transitorio. Edad gestacional definitiva se determinará mediante biometría embrionaria.')
        var stringL = 'La Edad Gestacional estimada mediante biometría de saco gestacional (' + egbio + ' semanas ) es sólo un referencial.\nEdad gestacional definitiva deberá determinarse posteriormente mediante biometría embrionaria.';
        $('#comentarios-informe-eco-texto').val(stringL);
    }
})

document.getElementById("ajustlcnb").addEventListener("click", function () {
    $('#ajstlcn').collapse('hide');
})

document.getElementById("gf4").addEventListener("click", function () {
    show_hide('panel8');
    show_hide('panel9');

    $('#g13').highcharts({
        title: {
            text: 'LCN',
            x: -20 //center
        },
        xAxis: {
            categories: ['6', '7', '8', '9', '10',  '11', '12', '13', '14', '15']
        },
        yAxis: {
            title: {
                text: 'Milimetros (mm)'
            },
            tickPositions: [0.2, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11]
        },
        credits: {enabled:false},
        colors: ['#313131', '#313131', '#313131'],
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
         },
        series: [{
            name: '(-) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.26, 0.77, 1.4, 2.05, 2.75,3.65, 4.64, 5.82, 7.1, 8.02],
            dashStyle: 'shortdot'
        }, {
            name: 'Media',
            type: "line",
            marker: { enabled: false },
            data: [0.38, 0.89, 1.54, 2.25, 3.05,4.05, 5.29, 6.65, 7.98, 9.01]
        }, {
            name: '(+) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.53, 1.04, 1.71, 2.49, 3.42,4.64, 6.12, 7.67, 9.01, 10.01],
            dashStyle: 'shortdot'
        }, {
            type: "line",
            name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {

                // generate an array of random data
                var data = [];
                var egLcn = parseInt(document.getElementById("edadG9").innerHTML);
                var valLcn = parseFloat(document.getElementById("lcn").value) / 10;
                var lcnegx = [];
                var flag = false;

                lcnegx[1] = 6;
                lcnegx[2] = 7;
                lcnegx[3] = 8;
                lcnegx[4] = 9;
                lcnegx[5] = 10;
                lcnegx[6] = 11;
                lcnegx[7] = 12;
                lcnegx[8] = 13;
                lcnegx[9] = 14;
                lcnegx[10] = 14;

                for (i = 1; i <= 10; i++) {
                    if (lcnegx[i] >= egLcn) {
                        if (flag == false) {
                        data.push({
                            y: valLcn,
                        });
                        flag = true;
                        }
                        else {
                         data.push({
                            y:0,
                         });
                        }
                    }
                    else {
                        data.push({
                            y: 0,
                        });
                    }
                }
                return data;
            }())
        }]
    });
    app.titulo5();
    return false;
});

function saco_vitelino_change(){
    elemento = document.getElementById("saco-vitelino");

    if (elemento.value == 'presente'){
      var el = document.getElementById("valor-saco-vitelino");
      el.style.display = 'block';
    }
    else{
      var el = document.getElementById("valor-saco-vitelino");
      el.style.display = 'none';
    }
}
 function embrion_change() {
     elemento = document.getElementById("embrion");

     if (elemento.value == 'no se observa aun'){
        var el = document.getElementById("fcf-primer-trim");
        el.style.display = 'none';
     }
     else if (elemento.value == 'act. no evidenciable'){
        var el = document.getElementById("fcf-primer-trim");
        el.style.display = 'none';
     }
      else if (elemento.value == 'act. card. y Corp. (-)'){
        var el = document.getElementById("fcf-primer-trim");
        el.style.display = 'none';
      }
     else{
        var el = document.getElementById("fcf-primer-trim");
        el.style.display = 'block';
        if (elemento.value == 'act. cardiaca evidenciable'){
            var el = document.getElementById("fcf-prim");
            el.selectedIndex = "0";
        }
     }
 }
 function douglas_eco1_change(){
     elemento = document.getElementById("exploracion-douglas");

     if (elemento.value == 'ocupado'){
       var el = document.getElementById("exploracion-douglas-informe");
       el.style.display = 'block';
     }
     else{
       var el = document.getElementById("exploracion-douglas-informe");
       el.style.display = 'none';
     }
 }

 document.getElementById("imagen1").addEventListener("click", function(){
    show_hide("panel2");
    document.body.style.backgroundColor = "#000";
    show_hide("panel13");
 });

 document.getElementById("imagen2").addEventListener("click", function(){
     show_hide("panel2");
     document.body.style.backgroundColor = "#000";
     show_hide("panel14");
 });

 document.getElementById("imagen3").addEventListener("click", function(){
     show_hide("panel2");
     document.body.style.backgroundColor = "#000";
     show_hide("panel15");
 });

 document.getElementById("gf5").addEventListener("click", function () {
     show_hide('panel3');
     show_hide('panel18');
     obtenerTituloDocAndroid()
     $('#g14').highcharts({
        title: {
            text: 'Perímetro de Cráneo',
            x: -20
        },
        subtitle: {
            text: 'Milimetros (mm)',
            x: -20
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Milimetros (mm)' },
            tickPositions: [30, 72, 114, 156, 198, 240, 282, 324, 366, 408]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
        },
        credits: {enabled: false},
        series: [{
            type: "line",
            name: 'Pct. 3',
            marker: {enabled: false},
            data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
        }, {
            type: "line",
            name: 'Pct. 97',
            marker: {enabled: false},
            data: [90,100,111,124,136,150,165,179,193,206,219,232,243,256,268,279,290,300,310,319,328,336,343,351,358,363,368,373,377]
        }, {
            type: "line",
            name: 'CC',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                var data = [];
                var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                for (i = 12; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseInt(document.getElementById("cc").value),
                });
                for (i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });

    $('#g15').highcharts({
            title: {
                text: 'Diámetro de Cerebelo',
                x: -20
            },
            subtitle: {
                text: 'Milimetros (mm)',
                x: -20
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: 'Milimetros (mm)' },
                tickPositions: [5, 10,20,30,40,50,60,70]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: {enabled: false},
            series: [{
                type: "line",
                name: '-2DE',
                marker: {enabled: false},
                data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44]
            }, {
                type: "line",
                name: 'media',
                marker: {enabled: false},
                data: [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52]
            }, {
                type: "line",
                name: '+2DE',
                marker: {enabled: false},
                data: [18, 18, 19, 20, 22, 23, 25, 26, 27, 30, 32, 34, 34, 37, 38, 41, 43, 46, 48, 53, 56, 58, 60, 62, 62, 62]
            }, {
                type: "line",
                name: 'Cerebelo',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    var data = [];
                    var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                    for (i = 15; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseInt(document.getElementById("cb").value),
                    });
                    for (i = edadGest + 1; i <= 39; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
        });

    $('#g16').highcharts({
           title: {
               text: 'Largo Femoral',
               x: -20
           },
           subtitle: {
               text: 'Milimetros (mm)',
               x: -20
           },
           plotOptions: {
               series: {
                   enableMouseTracking: false
               }
           },
           yAxis: {
               title: { text: 'Milimetros (mm)' },
               tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
           },
           colors: ['#313131', '#313131', '#313131'],
           xAxis: {
               categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
           },
           credits: { enabled: false },
           series: [{
               type: "line",
               name: 'Pct. 3',
               marker: { enabled: false },
               data: [6,9,12,14,17,20,22,25,27,30,32,35,37,40,42,45,47,49,52,54,56,58,59,61,62,64,65,66,67]
           }, {
               type: "line",
               name: 'Pct. 97',
               marker: { enabled: false },
               data: [12,15,18,21,24,28,31,34,38,41,44,47,50,53,55,57,60,62,65,67,70,71,73,75,77,79,80,81,82]
           }, {
               type: "line",
               name: 'LF',
               dashStyle: "Dot",
               marker: { symbol: 'square' },
               lineWidth: 0,
               data: (function () {
                   var data = [];
                   var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                   for (i = 12; i <= edadGest; i++) {
                       data.push({ y: 0, });
                   }
                   data.push({
                       y: parseInt(document.getElementById("lf").value),
                   });
                   for (i = edadGest + 1; i <= 39; i++) {
                       data.push({
                           y: 0,
                       });
                   }
                   return data;
               }())
           }]
       });

       $('#g17').highcharts({
            title: {
                text: 'Largo Humeral',
                x: -20
            },
            subtitle: {
                text: 'Milimetros (mm)',
                x: -20
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: 'Milimetros (mm)' },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: { enabled: false },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: { enabled: false },
                data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: { enabled: false },
                data: [12.3, 15.1, 17.9, 20.7, 23.5, 26.3, 29.1, 31.6, 34.2, 36.7, 39.2, 41.6, 43.9, 46.1, 48.1, 50.1, 52.1, 53.9, 55.6, 57.3, 58.9, 60.5, 62.1, 63.5, 64.9, 66.4, 67.8, 69.3, 70.8]
            }, {
                type: "line",
                name: 'Humero',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    var data = [];
                    var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                    for (i = 12; i <= edadGest; i++) {
                        data.push({ y: 0, });
                    }
                    data.push({
                        y: parseInt(document.getElementById("lh").value),
                    });
                    for (i = edadGest + 1; i <= 39; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
        });

     //app.titulo5();
     return false;
 });

 document.getElementById("gf6").addEventListener("click", function(){
         show_hide('panel17');
         show_hide('panel8');

        $('#g18').highcharts({
             title: {
                 text: 'Promedio Saco Gestacional',
                 x: -20
             },
             subtitle: {
                 text: 'Milimetros (mm)',
                 x: -20
             },
             plotOptions: {
                 series: {
                     enableMouseTracking: false
                 }
             },
             yAxis: {
                 title: { text: '' },
                 tickPositions: [-1, 1.0, 2.5, 4.0]
             },
             colors: ['#313131', '#313131', '#313131'],
             xAxis: {
                 categories:['4.2','4.3','4.4','4.5','4.6','5','5.1','5.2','5.3','5.4','5.5','5.6','6','6.1','6.2','6.3','6.4','6.5','6.6','7','7.1','7.2','7.3','7.4','7.5','7.6','8']
             },
             credits: { enabled: false },
             series: [{
                 type: "line",
                 name: '-DE',
                 marker: { enabled: false },
                 data: [0.012,0.101,0.145,0.214,0.293,0.41,0.51,0.61,0.7,0.8,0.9,0.99,1.07,1.15,1.22,1.33,1.39,1.49,1.59,1.67,1.76,1.86,1.94,2.04,2.1,2.2,2.3],
                 dashStyle: 'shortdot'
             },{
                 type: "line",
                 name: 'media',
                 marker: { enabled: false },
                 data: [0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,1.99,2.09,2.18,2.29,2.41,2.5,2.6,2.7,2.8,2.9,3]
             },{
                 type: "line",
                 name: '+DE',
                 marker: { enabled: false },
                 data: [0.99,1.09,1.16,1.26,1.36,1.51,1.6,1.7,1.8,1.9,1.99,2.11,2.19,2.29,2.41,2.51,2.61,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6],
                 dashStyle: 'shortdot'
             }, {
                 type: "line",
                 name: 'Saco gestacional [Hellmann y col. Am. J O & G 1968; 1.03(6)789 800]',
                 dashStyle: "Dot",
                 marker: { symbol: 'square' },
                 lineWidth: 0,
                 data: (function () {
                     var data = [];
                     var categories = [4.2,4.3,4.4,4.5,4.6,5,5.1,5.2,5.3,5.4,5.5,5.6,6,6.1,6.2,6.3,6.4,6.5,6.6,7,7.1,7.2,7.3,7.4,7.5,7.6,8];
                     var edadGest = document.getElementById("edadG9").innerHTML;

                     for (i = 0; i <= 27; i++) {

                         if (categories[i] == edadGest){
                              data.push({
                                   y: document.getElementById("prs").value /10,
                              });
                         }
                         else{
                              data.push({ y: -2, });
                         }
                     }
                     return data;
                 }())
             }]
         });

      //app.titulo5(): app.titulo6(); app.titulo6(); app.titulo8();
      return false;
 });

 function tallaFetal(){

    tallafetal = document.getElementById("tf").innerHTML;
    document.getElementById("tf-informe").innerHTML = tallafetal;
 }

 document.getElementById("gf9").addEventListener("click", function () {
         show_hide('panel20');
         show_hide('panel4');
        document.getElementById("fur18").innerHTML = document.getElementById("fur3").innerHTML;
        document.getElementById("edadG21").innerHTML = document.getElementById("edadG3").innerHTML;
        document.getElementById("edadG22").innerHTML = document.getElementById("edadG3").innerHTML;
        document.getElementById("FPP17").innerHTML = document.getElementById("FPP3").innerHTML;

        obtenerTituloDocAndroid();

        $('#g19').highcharts({
        title: {
            text: 'Peso Fetal Estimado *',
            x: -20 //center
        },
        subtitle: {
            text: 'Kilogramos',
            x: -20
        },
        plotOptions: {
            series: {
                enableMouseTracking: false,
                pointInterval: 1
            }
        },
        yAxis: {
            title: { enabled: false },
            tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
        },
        credits: {enabled: false},
        series: [{
            type: "line",
            name: 'Pct 3',
            dashStyle:"Dot",
            marker: {enabled: false},
            data: [248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714]
        }, {
            type: "line",
            name: 'Pct 10',
            marker: { enabled: false },
            data: [275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985]
        }, {
            type: "line",
            name: 'Pct 90',
            marker: { enabled: false },
            data: [387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234]
        }, {
            type: "line",
            name: 'Pct 97',
            dashStyle:"Dot",
            marker: { enabled: false, },
            data: [414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474]
        }, {
            type: "line",
            name: 'Peso',
            dashStyle: "Dot",
            marker: {symbol:'square'},
            lineWidth: 0,
            data: (function () {
                var data = [];
                var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                for (i = 20; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseInt(document.getElementById("pfe").innerHTML),
                });
                for (i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });

$('#g20').highcharts({
         title: {
             text: 'IP Arteria Umbilical **',
             x: -20 //center
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { enabled: false },
             tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories:['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [0.97,0.95,0.94,0.92,0.9,0.89,0.87,0.85,0.82,0.8,0.78,0.75,0.73,0.7,0.67,0.65,0.62,0.58,0.55,0.52,0.49]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.6,1.56,1.53,1.5,1.46,1.43,1.4,1.37,1.35,1.32,1.29,1.27,1.25,1.22,1.2,1.18,1.16,1.14,1.13,1.11,1.09]
         }, {
             type: "line",
             name: 'Arteria',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat(document.getElementById("aumb").value),
                 });
                 for (i = edadGest + 1; i <= 39; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
     });

     $('#g21').highcharts({
         title: {
             text: 'IP Arteria Cerebral Media **',
             x: -20
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { enabled: false },
             tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories: ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         credits: {
             enabled: false
         },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [1.24,1.29,1.34,1.37,1.4,1.43,1.44,1.45,1.45,1.44,1.43,1.41,1.38,1.34,1.3,1.25,1.19,1.13,1.05,0.98,0.89]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.98,2.12,2.25,2.36,2.45,2.53,2.59,2.63,2.66,2.67,2.67,2.65,2.62,2.56,2.5,2.41,2.31,2.2,2.07,1.92,1.76]
         }, {
             type: "line",
             name: 'Arteria',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat(document.getElementById("acm").value),
                 });
                 for (i = edadGest + 1; i <= 39; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
     });
     $('#g22').highcharts({
         title: {
             text: 'IP de CCP (Indice ACM / AU) **',
             x: -20 //center
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { enabled: false },
             tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories:
             ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
         },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: 'Pct. 5',
             marker: { enabled: false },
             data: [0.78,0.87,0.95,1.02,1.09,1.15,1.2,1.24,1.28,1.31,1.33,1.35,1.36,1.36,1.36,1.34,1.32,1.3,1.26,1.22,1.18]
         }, {
             type: "line",
             name: 'Pct. 95',
             marker: { enabled: false },
             data: [1.68,1.88,2.06,2.22,2.36,2.49,2.6,2.7,2.78,2.84,2.89,2.92,2.93,2.93,2.91,2.87,2.82,2.75,2.67,2.57,2.45]
         }, {
             type: "line",
             name: 'Cuociente',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 // generate an array of random data
                 var data = [];
                 var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat(document.getElementById("ccp").innerHTML),
                 });
                 for (i = edadGest + 1; i <= 38; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
     });
      //app.titulo5();
      return false;
 });


 document.getElementById("gf10").addEventListener("click", function () {
          show_hide('panel21');
          show_hide('panel4');
         document.getElementById("fur19").innerHTML = document.getElementById("fur3").innerHTML;
         document.getElementById("edadG23").innerHTML = document.getElementById("edadG3").innerHTML;
         document.getElementById("edadG24").innerHTML = document.getElementById("edadG3").innerHTML;
         document.getElementById("FPP18").innerHTML = document.getElementById("FPP3").innerHTML;

         obtenerTituloDocAndroid();
         obtenerTituloDocAndroid();
         $('#g23').highcharts({
         title: {
             text: 'Peso Fetal Estimado *',
             x: -20 //center
         },
         subtitle: {
             text: 'Kilogramos',
             x: -20
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false,
                 pointInterval: 1
             }
         },
         yAxis: {
             title: { enabled: false },
             tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
         },
         credits: {enabled: false},
         series: [{
             type: "line",
             name: 'Pct 3',
             dashStyle:"Dot",
             marker: {enabled: false},
             data: [248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714]
         }, {
             type: "line",
             name: 'Pct 10',
             marker: { enabled: false },
             data: [275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985]
         }, {
             type: "line",
             name: 'Pct 90',
             marker: { enabled: false },
             data: [387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234]
         }, {
             type: "line",
             name: 'Pct 97',
             dashStyle:"Dot",
             marker: { enabled: false, },
             data: [414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474]
         }, {
             type: "line",
             name: 'Peso',
             dashStyle: "Dot",
             marker: {symbol:'square'},
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseInt(document.getElementById("pfe").innerHTML),
                 });
                 for (i = edadGest + 1; i <= 39; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
     });
     $('#g24').highcharts({
              title: {
                  text: 'IP Arteria Umbilical **',
                  x: -20 //center
              },
              plotOptions: {
                  series: {
                      enableMouseTracking: false
                  }
              },
              yAxis: {
                  title: { enabled: false },
                  tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
              },
              colors: ['#313131', '#313131', '#313131'],
              xAxis: {
                  categories:['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
              },
              credits: { enabled: false },
              series: [{
                  type: "line",
                  name: 'Pct. 5',
                  marker: { enabled: false },
                  data: [0.97,0.95,0.94,0.92,0.9,0.89,0.87,0.85,0.82,0.8,0.78,0.75,0.73,0.7,0.67,0.65,0.62,0.58,0.55,0.52,0.49]
              }, {
                  type: "line",
                  name: 'Pct. 95',
                  marker: { enabled: false },
                  data: [1.6,1.56,1.53,1.5,1.46,1.43,1.4,1.37,1.35,1.32,1.29,1.27,1.25,1.22,1.2,1.18,1.16,1.14,1.13,1.11,1.09]
              }, {
                  type: "line",
                  name: 'Arteria',
                  dashStyle: "Dot",
                  marker: { symbol: 'square' },
                  lineWidth: 0,
                  data: (function () {
                      var data = [];
                      var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                      for (i = 20; i <= edadGest; i++) {
                          data.push({
                              y: 0,
                          });
                      }
                      data.push({
                          y: parseFloat(document.getElementById("aumb").value),
                      });
                      for (i = edadGest + 1; i <= 39; i++) {
                          data.push({
                              y: 0,
                          });
                      }
                      return data;
                  }())
              }]
          });
      $('#g25').highcharts({
          title: {
              text: 'IP de CCP (Indice ACM / AU) **',
              x: -20 //center
          },
          plotOptions: {
              series: {
                  enableMouseTracking: false
              }
          },
          yAxis: {
              title: { enabled: false },
              tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
          },
          colors: ['#313131', '#313131', '#313131'],
          xAxis: {
              categories:
              ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
          },
          credits: { enabled: false },
          series: [{
              type: "line",
              name: 'Pct. 5',
              marker: { enabled: false },
              data: [0.78,0.87,0.95,1.02,1.09,1.15,1.2,1.24,1.28,1.31,1.33,1.35,1.36,1.36,1.36,1.34,1.32,1.3,1.26,1.22,1.18]
          }, {
              type: "line",
              name: 'Pct. 95',
              marker: { enabled: false },
              data: [1.68,1.88,2.06,2.22,2.36,2.49,2.6,2.7,2.78,2.84,2.89,2.92,2.93,2.93,2.91,2.87,2.82,2.75,2.67,2.57,2.45]
          }, {
              type: "line",
              name: 'Cuociente',
              dashStyle: "Dot",
              marker: { symbol: 'square' },
              lineWidth: 0,
              data: (function () {
                  // generate an array of random data
                  var data = [];
                  var edadGest = parseInt(document.getElementById("edadG").innerHTML) - 1;

                  for (i = 20; i <= edadGest; i++) {
                      data.push({
                          y: 0,
                      });
                  }
                  data.push({
                      y: parseFloat(document.getElementById("ccp").innerHTML),
                  });
                  for (i = edadGest + 1; i <= 38; i++) {
                      data.push({
                          y: 0,
                      });
                  }
                  return data;
              }())
          }]
      });
           $('#g26').highcharts({
              title: {
                  text: 'IP promedio arterias uterinas ***',
                  x: -20
              },
              plotOptions: {
                  series: {
                      enableMouseTracking: false
                  }
              },
              yAxis: {
                  title: { text: 'Valor IP' },
                  tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
              },
              colors: ['#313131', '#313131', '#313131'],
              xAxis: {
                  categories: ['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
                          },
                          credits: { enabled: false },
                          series: [{
                              type: "line",
                              name: 'Pct. 5',
                              marker: { enabled: false },
                              data: [1.23,1.18,1.11,1.05,0.99,0.94,0.89,0.85,0.81,0.78,0.74,0.71,0.69,0.66,0.64,0.62,0.6,0.58,0.56,0.55,0.54,0.52,0.51,0.51,0.51,0.49,0.48,0.48,0.47,0.47,0.47]
                          }, {
                              type: "line",
                              name: 'Pct. 95',
                              marker: { enabled: false },
                              data: [2.84,2.71,2.53,2.38,2.24,2.11,1.99,1.88,1.79,1.71,1.61,1.54,1.47,1.41,1.35,1.3,1.25,1.21,1.17,1.13,1.11,1.06,1.04,1.01,0.99,0.97,0.95,0.94,0.92,0.91,0.91]
                          }, {
                              type: "line",
                                  name: 'Arteria Promedio',
                                  dashStyle: "Dot",
                                  marker: { symbol: 'square' },
                                  lineWidth: 0,
                              data: (function () {
                                      // generate an array of random data
                                      var data = [];
                                      var edadGest = parseInt(document.getElementById("edadG").innerHTML)-1;

                                      for (i = 10; i <= edadGest; i ++ ) {
                              data.push({
                                  y: 0,
                              });
                          }
                          data.push({
                                  y: parseFloat(document.getElementById("utp").innerHTML),
                              });
                          for (i = edadGest +1; i <= 39; i ++ ) {
                              data.push({
                                  y: 0,
                              });
                          }
                          return data;
                      }())
                  }]
          });
       //app.titulo5();
       return false;
  });

 document.getElementById("gf7").addEventListener("click", function () {
    show_hide('panel22');
    show_hide('panel3');

    document.getElementById("fur20").innerHTML = document.getElementById("fur3").innerHTML;
    document.getElementById("edadG25").innerHTML = document.getElementById("edadG3").innerHTML;
    document.getElementById("edadG26").innerHTML = document.getElementById("edadG3").innerHTML;
    document.getElementById("FPP19").innerHTML = document.getElementById("FPP3").innerHTML;

    $('#g29').highcharts({
        title: {
            text: 'Z-Score para DBP',
            x: -20
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Valor mm' },
            tickPositions: [10, 22, 37, 51, 63, 75, 84, 96,115]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: '(-) 2DE',
            marker: { enabled: false },
            data: [14,17,19,25,29,33,34,38,41,43,46,49,52,54,57,61,63,65,69,69,74,74,77,78,78,81,85,88]
        }, {
            type: "line",
            name: 'DE',
            marker: { enabled: false },
            data: [20,23,26,30,35,38,40,44,46,49,52,56,59,62,64,68,70,73,76,78,81,83,85,86,87,90,91,94]
        }, {
            type: "line",
            name: '(+) 2DE',
            marker: { enabled: false },
            data: [25,29,33,35,41,42,46,50,52,56,59,63,66,70,71,75,77,81,83,87,88,91,94,95,97,99,97,106]
        }, {
            type: "line",
            name: 'DBP',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
            // generate an array of random data
                var data = [];
                var edadGest = parseInt(document.getElementById("edadG").innerHTML)-1;

                for (i = 12; i <= edadGest; i ++ ) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseFloat($('#dbp').val()),
                });
                for (i = edadGest +1; i <= 39; i ++ ) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });

    $('#g30').highcharts({
        title: {
            text: 'Z-Score para Cráneo CC',
            x: -20
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'Valor mm' },
            tickPositions: [40, 80, 140, 180, 220, 260, 300, 340,380]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: '(-) 2DE',
            marker: { enabled: false },
            data: [63,71,76,93,116,128,133,146,160,168,177,189,202,207,222,231,240,242,252,262,265,275,284,287,285,299,309,307]
        }, {
            type: "line",
            name: 'DE',
            marker: { enabled: false },
            data: [78,91,101,115,132,143,153,167,179,188,199,212,223,234,241,254,262,271,279,288,296,303,312,318,318,328,331,337]
        }, {
            type: "line",
            name: '(+) 2DE',
            marker: { enabled: false },
            data: [93,112,126,138,149,158,172,188,197,209,222,235,245,260,261,277,284,300,306,313,327,332,340,348,351,358,354,367]
        }, {
            type: "line",
            name: 'CC',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
            // generate an array of random data
                var data = [];
                var edadGest = parseInt(document.getElementById("edadG").innerHTML)-1;

                for (i = 12; i <= edadGest; i ++ ) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseFloat($('#cc').val()),
                });
                for (i = edadGest +1; i <= 39; i ++ ) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });

    $('#g31').highcharts({
         title: {
             text: 'Z-Score para Abdómen CA',
             x: -20
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor mm' },
             tickPositions: [40, 80, 140, 180, 220, 260, 300, 340,380, 410]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories: ['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39']
         },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: '(-) 2DE',
             marker: { enabled: false },
             data: [45,53,58,79,90,108,119,129,144,155,164,174,182,193,201,212,226,233,247,246,257,267,267,277,276,275,295,314]
         }, {
             type: "line",
             name: 'DE',
             marker: { enabled: false },
             data: [63,72,84,96,108,119,131,142,151,165,181,190,202,210,221,233,248,257,270,280,289,297,309,319,325,330,340,353]
         }, {
             type: "line",
             name: '(+) 2DE',
             marker: { enabled: false },
             data: [81,92,110,113,126,137,153,165,173,187,207,216,230,237,249,266,284,297,308,313,332,338,350,361,375,384,384,391]
         }, {
             type: "line",
             name: 'CA',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
             // generate an array of random data
                 var data = [];
                 var edadGest = parseInt(document.getElementById("edadG").innerHTML)-1;

                 for (i = 12; i <= edadGest; i ++ ) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat($('#ca').val()),
                 });
                 for (i = edadGest +1; i <= 39; i ++ ) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
    });

    $('#g32').highcharts({
         title: {
             text: 'Z-Score para Largo Femoral LF',
             x: -20
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
         yAxis: {
             title: { text: 'Valor mm' },
             tickPositions: [5, 15, 25, 35, 45, 55, 65, 75, 85]
         },
         colors: ['#313131', '#313131', '#313131'],
         xAxis: {
             categories: ['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39']
         },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: '(-) 2DE',
             marker: { enabled: false },
             data: [3,5,6,11,15,20,19,23,27,28,31,34,37,38,41,45,46,45,49,47,54,52,56,58,59,63,63,65]
         }, {
             type: "line",
             name: 'DE',
             marker: { enabled: false },
             data: [8,10,13,16,20,23,25,28,32,34,37,40,43,44,47,50,52,53,56,57,60,61,64,65,66,69,69,72]
         }, {
             type: "line",
             name: '(+) 2DE',
             marker: { enabled: false },
             data: [12,16,21,21,25,27,31,34,37,39,42,46,48,49,53,55,57,60,62,67,66,71,71,72,73,74,75,78]
         }, {
             type: "line",
             name: 'LF',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
             // generate an array of random data
                 var data = [];
                 var edadGest = parseInt(document.getElementById("edadG").innerHTML)-1;

                 for (i = 10; i <= edadGest; i ++ ) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat($('#lf').val()),
                 });
                 for (i = edadGest +1; i <= 39; i ++ ) {
                     data.push({
                         y: 0,
                     });
                 }
                 return data;
             }())
         }]
     });
 });