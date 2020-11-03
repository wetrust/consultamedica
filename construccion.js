$(document).ready(function(){
    var i;
    for (i = 14; i <51; i++) {
        if (i == 20){
            $("#edadmaternaprimtrim").append('<option value="'+ i +'" selected>' + i + ' años</option>');
        }
        else{
            $("#edadmaternaprimtrim").append('<option value="'+ i +'">' + i + ' años</option>');
        }
    }
    for (i = 45; i < 84; i++) {
        $("#loncefalocaudal").append('<option value="'+ i +'">' + i + ' mm</option>');
    }
    $("#psisTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#pdiasTamizaje").focus();
		}
		if ($("#psisTamizaje").val() > 1){
			var unTercioPSis = $("#psisTamizaje").val() / 3;
			var unTercioPDias = "";
			var pMedia = "";
			if ($("#pdiasTamizaje").val() > 1){
				unTercioPDias = $("#pdiasTamizaje").val() / 3;
			}

			if (unTercioPDias > 0){
				pMedia = Math.trunc((unTercioPDias * 2) + (unTercioPSis));
			}
			$("#pmediaTamizaje").val(pMedia);
		}
	});

	$("#pdiasTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#tallaTamizaje").focus();
		}
		if ($("#psisTamizaje").val() > 1){
			var unTercioPSis = $("#psisTamizaje").val() / 3;
			var unTercioPDias = "";
			var pMedia = "";
			if ($("#pdiasTamizaje").val() > 1){
				unTercioPDias = $("#pdiasTamizaje").val() / 3;
			}
			if (unTercioPDias > 0){
				pMedia = Math.trunc((unTercioPDias * 2) + (unTercioPSis));
			}
			$("#pmediaTamizaje").val(pMedia);
		}
	});

	$("#tallaTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#pesoTamizaje").focus();
		}
		if ($("#tallaTamizaje").val() > 1 && $("#pesoTamizaje").val() > 1){
			$("#imcTamizaje").val(imc($("#tallaTamizaje").val(), $("#pesoTamizaje").val()));
		}
	});

	$("#translucenciaNucal").on("change", function(){
		if ($(this).val() == "no procede" || $(this).val() == "no medible"){
			$("#translunucal").addClass("d-none");
			$("#primtrim\\.adicionales\\.translucencia").addClass("d-none");
			$("#primtrim\\.adicionales\\.translucencia\\.ocultar").addClass("d-none");
			$("#prob").addClass("d-none");
			$("#prob2").addClass("d-none");
		}else{
			$("#translunucal").removeClass("d-none");
			$("#primtrim\\.adicionales\\.translucencia").removeClass("d-none");
			$("#primtrim\\.adicionales\\.translucencia\\.ocultar").removeClass("d-none");
		}
	});

	$("#pesoTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#primigesta").focus();
		}
		if ($("#tallaTamizaje").val() > 1 && $("#pesoTamizaje").val() > 1){
			$("#imcTamizaje").val(imc($("#tallaTamizaje").val(), $("#pesoTamizaje").val()));
		}
	});

	$("#audTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#auiTamizaje").focus();
		}
		var aud = "";
		if ($("#audTamizaje").val() != ""){
			aud = $("#audTamizaje").val();
			aud = aud.toString(); 
			aud = aud.replace(",", ".");
			aud = parseFloat(aud);
		}
		var aui = "";
		if ($("#auiTamizaje").val() != ""){
			aui = $("#auiTamizaje").val();
			aui = aui.toString(); 
			aui = aui.replace(",", ".");
			aui = parseFloat(aui);
		}
		if (aud > 0 && aui > 0){
			var ut = (aud + aui) / 2;
			$("#aupromTamizaje").val(ut);
			$("#aupromTamizajePct").val(pctUtApi(ut));
			ajustarProgreso(pctUtApi(ut), "auTamizajePct");
		}
		else{
			$("#aupromTamizaje").val(0);
			$("#aupromTamizajePct").val(0);
			ajustarProgreso($("#aupromTamizaje").val(), "auTamizajePct");
		}
	});
	
	$("#auiTamizaje").on("keyup", function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
			$("#psisTamizaje").focus();
		}
		var aud = "";
		if ($("#audTamizaje").val() != ""){
			aud = $("#audTamizaje").val();
			aud = aud.toString(); 
			aud = aud.replace(",", ".");
			aud = parseFloat(aud);
		}
		var aui = "";
		if ($("#auiTamizaje").val() != ""){
			aui = $("#auiTamizaje").val();
			aui = aui.toString(); 
			aui = aui.replace(",", ".");
			aui = parseFloat(aui);
		}
		if (aud > 0 && aui > 0){
			var ut = (aud + aui) / 2;
			$("#aupromTamizaje").val(ut);
			$("#aupromTamizajePct").val(pctUtApi(ut));
			ajustarProgreso(pctUtApi(ut), "auTamizajePct");
		}
		else{
			$("#aupromTamizaje").val(0);
			$("#aupromTamizajePct").val(0);
			ajustarProgreso($("#aupromTamizaje").val(), "auTamizajePct");
		}
    });
    
    $("#primtrim\\.adicionales\\.translucencia").on("click", function(event){
		event.preventDefault();
			calcularRiesgo();
			$("#prob").removeClass("d-none");
			$("#prob2").removeClass("d-none");
	});

	$("#primtrim\\.adicionales\\.translucencia\\.ocultar").on("click", function(event){
		event.preventDefault();
		$("#prob").addClass("d-none");
		$("#prob2").addClass("d-none");
	});
    
});

function pctUtApi(ut) {
	var pct5 = [];
	var pct95 = [];
	pct5[0] = 1.23; pct5[1] = 1.18;	pct5[2] = 1.11; pct5[3] = 1.05;
	pct5[4] = 0.99; pct5[5] = 0.94;	pct5[6] = 0.89; pct5[7] = 0.85;
	pct5[8] = 0.81; pct5[9] = 0.78;	pct5[10] = 0.74; pct5[11] = 0.71;
	pct5[12] = 0.69; pct5[13] = 0.66;	pct5[14] = 0.64; pct5[15] = 0.62;
	pct5[16] = 0.6; pct5[17] = 0.58;	pct5[18] = 0.56; pct5[19] = 0.55;
	pct5[20] = 0.54; pct5[21] = 0.52;	pct5[22] = 0.51; pct5[23] = 0.51;
	pct5[24] = 0.51; pct5[25] = 0.49;	pct5[26] = 0.48; pct5[27] = 0.48;
	pct5[28] = 0.47; pct5[29] = 0.47;	pct5[30] = 0.47;
	pct95[0] = 2.84; pct95[1] = 2.71;	pct95[2] = 2.53; pct95[3] = 2.38;
	pct95[4] = 2.24; pct95[5] = 2.11;	pct95[6] = 1.99; pct95[7] = 1.88;
	pct95[8] = 1.79; pct95[9] = 1.71;	pct95[10] = 1.61; pct95[11] = 1.54;
	pct95[12] = 1.47; pct95[13] = 1.41;	pct95[14] = 1.35; pct95[15] = 1.3;
	pct95[16] = 1.25; pct95[17] = 1.21;	pct95[18] = 1.17; pct95[19] = 1.13;
	pct95[20] = 1.11; pct95[21] = 1.06;	pct95[22] = 1.04; pct95[23] = 1.01;
	pct95[24] = 0.99; pct95[25] = 0.97;	pct95[26] = 0.95; pct95[27] = 0.94;
	pct95[28] = 0.92; pct95[29] = 0.91;	pct95[30] = 0.91;
	
	var eg=0;
	eg=parseFloat(document.getElementById("semanas").value);
	ut = ut.toString(); 
 	ut = ut.replace(",", ".");
 	ut = parseFloat(ut);

	if (eg < 10) {  
		return 0;
	 }
	 else if (eg > 40)
	 {
		return 0;
	 }
	 else {
		eg = eg - 10;
		var uno=0;
		var dos=0;
		 var resultado = '';
		if (ut > 0){
			eg = parseInt(eg);
			uno=pct95[eg] - pct5[eg];
			dos=ut - pct5[eg];
			resultado = parseInt(90 / (uno) * (dos) + 5);
			var pctUT = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctUT = 'mayor 99';
			}
			else if (resultado < 1){
				pctUT = 'menor 1';
			}
			else{
				pctUT = resultado;
			}
			return pctUT;
		}
		else{
			return 0;
		}
	 }
}

function imc(talla, peso){
    var tallapeso = peso / Math.pow(talla,2);
    var IMC = tallapeso * 10000;
    
    return IMC.toFixed(1);
}

//funciones para calcular riesgo de trisonomía
function cacularGA(CRL){
    ga=(23.53 + 8.052 * Math.sqrt(1.037 * CRL))
    ga=(ga/7)
    return ga
}

function calcularProbabilidad(estMean,estSTD,logNT){
    factor1=estSTD*estSTD*2;
    factor2=logNT-estMean;
    factor3=(-1*factor2*factor2)/factor1;
    factor4=Math.exp(factor3);
    factor5=estSTD*estSTD*Math.PI*2;
    factor6=Math.sqrt(factor5);
    factor7=1/factor6;
    factor8=factor4*factor7;
    return factor8;
    
}

function crlIndependant(nt){
    var NT=nt;
    var STD=0.1945;
    var op_std_dev=0.0289;
    var estMean= 0.3019;
    var estSTD=( Math.pow((STD *STD + op_std_dev * op_std_dev ) , 0.5)  ) ;
    var logNT= Math.log10(NT);
    return probFinal=calcularProbabilidad(estMean,estSTD,logNT);
}

function crlDependant(nt,crl){
    var PI=3.14;
    var NT=   nt;
    var op_std_dev=0.0289;
    var CRL=crl;
    var STD=0.079;
    var estMean=(-1*0.8951 + (0.0294 * CRL)  -(0.0001812 *CRL  * CRL) );
    var estSTD=( Math.pow((STD *STD + op_std_dev * op_std_dev ) , 0.5)  ) ;
    var logNT= Math.log10(NT);
    var medianNT=Math.pow(10,estMean);
    var NTMoM=logNT/medianNT;
    var probabilidadFinal=calcularProbabilidad(estMean,estSTD,logNT);
 
    var independantProb=crlIndependant(NT);
    var factor9=-0.3319 - (0.0379 * CRL  )
    var proportion=1/(1+Math.exp(-1*(factor9)))
    var Nproportion=1-proportion;

    var mixtureModel=(proportion*independantProb)+(Nproportion*probabilidadFinal);
    return ([probabilidadFinal,mixtureModel]);
}

function relPrev(gestation){
    var a,b,c,d,e;

    A4=gestation;
    a=0.2718;
    b=Math.pow(Math.log10(A4),2);
    c=1.023*Math.log10(A4)*-1;
    d=a*b;
    e=0.9425;
    f=d+c+e;
    g=Math.pow(10,f);
    h=(1/g);
    return (h)
}

function riskPriori(age,gestation){

    var factorG = relPrev(gestation)
    a=0.0006305;
    b=-16.60785;

    c=0.2993735;
    g=c*age;
    d=0.286;
  
    risk=1/(a+Math.exp(b+(g)) );
    riskFinal=risk*factorG
    return (riskFinal)
}
function crlIndependantT21(nt,risk){
    var NT=nt;
    var STD=0.2093;
    var op_std_dev=0.0289;
    var estMean= 0.533;
    var estSTD=( Math.pow((STD *STD + op_std_dev * op_std_dev ) , 0.5)  ) ;
    var logNT= Math.log10(NT);
    var probComponent=0.9406;
    var NprobComponent=1-probComponent;
    var probabilidadFinal=calcularProbabilidad(estMean,estSTD,logNT);
    console.log(probabilidadFinal);
    console.log("probabilida 21 arriba");
    var mixtureModel=probabilidadFinal*probComponent + risk*NprobComponent;
    return mixtureModel;
}
function crlIndependantT18(nt,risk){
    var NT=nt;
    var STD=0.1658;
    var op_std_dev=0.0289;
    var estMean= 0.7439;
    var estSTD=( Math.pow((STD *STD + op_std_dev * op_std_dev ) , 0.5)  ) ;
    var logNT= Math.log10(NT);
    var probComponent=0.7096;
    var NprobComponent=1-probComponent;
    var probabilidadFinal=calcularProbabilidad(estMean,estSTD,logNT);
    
    var mixtureModel=probabilidadFinal*probComponent + risk*NprobComponent;
    return mixtureModel;
}
function crlIndependantT13(nt,risk){
    var NT=nt;
    var STD=0.2032;
    var op_std_dev=0.0289;
    var estMean= 0.6018;
    var estSTD=( Math.pow((STD *STD + op_std_dev * op_std_dev ) , 0.5)  ) ;
    var logNT= Math.log10(NT);
    var probComponent=0.8376;
    var NprobComponent=1-probComponent;
    var probabilidadFinal=calcularProbabilidad(estMean,estSTD,logNT);
    
    var mixtureModel=probabilidadFinal*probComponent + risk*NprobComponent;
    return mixtureModel;
}
function cacularLR(mixModCRL,mixModTris){
    return (mixModTris/mixModCRL);
}
function calcularRiesgo(){
    var compr = parseInt($("#loncefalocaudal").val());
    var trasl = parseInt($("#translunucal").val());
    var age = $("#edadmaternaprimtrim").val(); 
        
    if( age!== null  && !Number.isNaN(compr)  ){ 

        NT = Number(trasl)

        var gestationalAge = cacularGA(Number(compr))

        lista = crlDependant(NT,compr);
        
        var risk = lista[0];
        
        riskT21 = riskPriori(age,gestationalAge);
        riskT18 = (1/0.62)*riskT21;
        riskT13 = (1/0.2)*riskT21;

        var mixtureModelCRL=lista[1];
    
        mixMod21=crlIndependantT21(NT,risk);
       
        mixMod18=crlIndependantT18(NT,risk);
        mixMod13=crlIndependantT13(NT,risk);
        LR21=cacularLR(mixtureModelCRL,mixMod21);
        LR18=cacularLR(mixtureModelCRL,mixMod18);
        LR13=cacularLR(mixtureModelCRL,mixMod13);
        factor=relPrev();
        risk=riskPriori();
         
        riskT21=Math.round(riskT21);

        var sDownRepetido = $('#examen\\.eco\\.primtrim\\.adicionales\\.translucencia\\.trisomia\\.si').is(':checked');

        console.log(sDownRepetido); 

        if(sDownRepetido){
            riskT21=(1/riskT21);
            riskT21=riskT21+0.52;
            riskT21=(100/riskT21);
        }

        $("#trisomia\\.priori\\.veintiuno").html("1 en " + Math.round(riskT21));
        $("#trisomia\\.priori\\.diesiocho").html("1 en " + Math.round(riskT18));
        $("#trisomia\\.priori\\.trece").html("1 en " + Math.round(riskT13));
        $("#trisomia\\.translucidez\\.veintiuno").html("1 en " + Math.round(riskT21*(1/LR21)));
        $("#trisomia\\.translucidez\\.diesiocho").html("1 en " + Math.round(riskT18*(1/LR18))) ;
        $("#trisomia\\.translucidez\\.trece").html("1 en " + Math.round( riskT13*(1/LR13)));
    }
    else{
        $('#popupTitle').html("Información");
        $('#popupBody').html("<p>Debe seleccionar una edad y una Longitud cefalo caudal</p>");
        $('#popupGenerico').modal('show');
    }
}