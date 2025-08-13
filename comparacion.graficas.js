import { the } from './wetrust.js'
import { baseGraficoPFE, graficoPFECompleto, percentilOMS } from './graficoPFEMasMenos.js';
import { fechas } from './functionesM.js';
import { humanDate } from './wetrust.js'

the("ver.ref.otro").onclick = function(){
    if (this.checked == true){
        the("ver.ref.otro.div").classList.remove("d-none");
    }else{
        the("ver.ref.otro.div").classList.add("d-none");
    }
}

the("comparacion.graficas.no").onclick = function(){
    let listOne = ["comparacion.graficas.div", "ver.ref.otro.container", "opcional.flujometria.basico.div", "opcional.flujometria.basico"]
    let listTwo = ["comparacion.graficas.div", "opcional.flujometria.basico.div"]

        listOne.forEach(item => {
            the(item).classList.add("d-none");
        })

        listTwo.forEach(item => {
            the(item).classList.remove("d-flex");
        })
}

the("comparacion.graficas.si").onclick = function(){
    let listOne = ["comparacion.graficas.div", "ver.ref.otro.container", "opcional.flujometria.basico.div", "opcional.flujometria.basico"]
    let listTwo = ["comparacion.graficas.div", "opcional.flujometria.basico.div"]

    listOne.forEach(item => {
        the(item).classList.remove("d-none");
    })

    listTwo.forEach(item => {
        the(item).classList.add("d-flex");
    })

}

let columnaCounter = 1;
var _hchartsUno = null
var _hchartsDos = null
var _hchartsTres = null

// Función para agregar event listeners a los inputs de una columna
function agregarEventListeners(columnaId) {
    const inputs = ['dbp', 'cc', 'ca', 'lf', 'pfe','umb', 'acm','ccp','uterinas'];

    inputs.forEach(input => {
        const inputElement = document.getElementById(`comparador.${input}.${columnaId}`);
        const pctElement = document.getElementById(`comparador.${input}.pct.${columnaId}`);

        if (inputElement && pctElement) {
            inputElement.addEventListener('input', function() {
                const valor = parseFloat(this.value);
                if (!isNaN(valor)) {
                    const funcion = this.dataset.funcion
                    const semanas = document.getElementById(`comparador.semanas.${columnaId}`).value
                    const dias = document.getElementById(`comparador.dias.${columnaId}`).value
                    var resultado
                    if(funcion == 'dbp'){
                        resultado = comparacionDBP(parseFloat(semanas), valor)
                    }else if(funcion == 'cc'){
                        resultado = comparacionCC(parseFloat(semanas), valor)
                    }else if(funcion == 'ca'){
                        resultado = comparacionCA(parseFloat(semanas), valor)
                    }else if(funcion == 'lf'){
                        resultado = comparacionLF(parseFloat(semanas), valor)
                    }else if(funcion == 'pfe'){
                        resultado = comparacionPFE(parseFloat(semanas), parseFloat(dias), valor)
                    }else if(funcion == 'umb'){
                        resultado = comparacionAu(parseFloat(semanas), valor)
                    }else if(funcion == 'acm'){
                        resultado = comparacionAcm(parseFloat(semanas), valor)
                    }else if(funcion == 'ccp'){
                        resultado = comparacionCcp(parseFloat(semanas), valor)
                    }else if(funcion == 'uterinas'){
                        resultado = comparacionUt(parseFloat(semanas), valor)
                    }

                    pctElement.textContent = (('string' == typeof resultado) ? resultado : resultado.toFixed(2));
                } else {
                    pctElement.textContent = 'mm';
                }
            });

            inputElement.addEventListener('keyup', function(e){
                if ( e.key === "Enter" ) {
                    e.preventDefault();
                    var key_enter = ["dbp", "cc", "ca", "lf", "pfe", "uterinas", "umb", "acm"];
                    let id = this.id
                    id = id.split(".")
                    if (key_enter.includes(id[1])){
                        let pos = key_enter.indexOf(id[1]);
                        pos++
                        if (pos < key_enter.length){
                            let idNew = "comparador."+key_enter[pos]+"."+id[2]
                            the(idNew).focus();
                        }

                        let identificador = "comparador.pfe"+"."+id[2]
                        let semanas = the("comparador.semanas"+"."+id[2]).value
                        if (the(identificador).value == ""){
                            let peso = psohdlk(id[2])
                            let dias = the("comparador.dias"+"."+id[2]).value

                            the("comparador.pfe"+"."+id[2]).value = peso
                            the("comparador.pfe.pct"+"."+id[2]).innerHTML = comparacionPFE(parseFloat(semanas), parseFloat(dias), peso)
                        }

                        if ((id[1] == "umb" || id[1] == "acm")){
                            let _a = Number(the("comparador.umb"+"."+id[2]).value)
                            let _b = Number(the("comparador.acm"+"."+id[2]).value)

                            let _re = (_b / _a);
                            the("comparador.ccp"+"."+id[2]).value = (_re <= 0) ? "" : _re.toFixed(2)
                            _re = comparacionCcp(parseFloat(semanas), _re)
                            the("comparador.ccp.pct."+id[2]).textContent = (('string' == typeof _re) ? _re : _re.toFixed(2));
                        }
                    }
                }
            })
        }
    });

    // Event listener para el botón eliminar
    const eliminarBtn = document.getElementById(`comparador.eliminar.${columnaId}`);
    if (eliminarBtn) {
        eliminarBtn.addEventListener('click', function() {
            const columna = document.getElementById(`comparador.columna.${columnaId}`);
            const columnaDoppler = document.getElementById(`comparador.doppler.columna.${columnaId}`);
            if (columna) {
                columna.remove();
            }
            if (columnaDoppler) {
                columnaDoppler.remove();
            }
        });
    }

    the(`comparador.semanas.${columnaId}`).onchange = function(){
        let id = this.id
        id = id.split(".")

        let peso = psohdlk(id[2])
        let semanas = the("comparador.semanas"+"."+id[2]).value
        let dias = the("comparador.dias"+"."+id[2]).value

        the("comparador.pfe"+"."+id[2]).value = peso
        the("comparador.pfe.pct"+"."+id[2]).innerHTML = comparacionPFE(parseFloat(semanas), parseFloat(dias), peso)
    }

    the(`comparador.dias.${columnaId}`).onchange = function(){
        let id = this.id
        id = id.split(".")

        let peso = psohdlk(id[2])
        let semanas = the("comparador.semanas"+"."+id[2]).value
        let dias = the("comparador.dias"+"."+id[2]).value

        the("comparador.pfe"+"."+id[2]).value = peso
        the("comparador.pfe.pct"+"."+id[2]).innerHTML = comparacionPFE(parseFloat(semanas), parseFloat(dias), peso) 
    }
}

// Función para clonar una columna
function clonarColumna() {
    columnaCounter++;
    const columnaOriginal = document.getElementById('comparador.columna.1');
    const nuevaColumna = columnaOriginal.cloneNode(true);

    const columnaOriginalDoppler = document.getElementById('comparador.doppler.columna.1');
    const nuevaColumnaDoppler = columnaOriginalDoppler.cloneNode(true);

    // Cambiar el ID de la nueva columna
    nuevaColumna.id = `comparador.columna.${columnaCounter}`;
    nuevaColumnaDoppler.id = `comparador.doppler.columna.${columnaCounter}`;

    // Cambiar todos los IDs internos
    const elementos = nuevaColumna.querySelectorAll('[id]');
    elementos.forEach(elemento => {
        const oldId = elemento.id;
        const newId = oldId.replace('.1', `.${columnaCounter}`);
        elemento.id = newId;
    });

    const elementosDoppler = nuevaColumnaDoppler.querySelectorAll('[id]');
    elementosDoppler.forEach(elemento => {
        const oldId = elemento.id;
        const newId = oldId.replace('.1', `.${columnaCounter}`);
        elemento.id = newId;
    });

    // Limpiar los valores de los inputs
    const inputs = nuevaColumna.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });

    const inputsDoppler = nuevaColumnaDoppler.querySelectorAll('input');
    inputsDoppler.forEach(input => {
        input.value = '';
    });

    // Resetear los textos de los percentiles
    const pctElements = nuevaColumna.querySelectorAll('[id$=".pct.' + columnaCounter + '"]');
    pctElements.forEach(pct => {
        pct.textContent = 'mm';
    });

    const pctElementsDoppler = nuevaColumnaDoppler.querySelectorAll('[id$=".pct.' + columnaCounter + '"]');
    pctElementsDoppler.forEach(pct => {
        pct.textContent = 'mm';
    });

    // Resetear los selects
    const selects = nuevaColumna.querySelectorAll('select');
    selects.forEach(select => {
        select.selectedIndex = 0;
    });

    const selectsDoppler = nuevaColumnaDoppler.querySelectorAll('select');
    selectsDoppler.forEach(select => {
        select.selectedIndex = 0;
    });

    // Insertar la nueva columna antes de comparador.final
    const final = document.getElementById('comparador.final');
    final.parentNode.insertBefore(nuevaColumna, final);

    const finalDoppler = document.getElementById('comparador.doppler.final');
    finalDoppler.parentNode.insertBefore(nuevaColumnaDoppler, finalDoppler);

    // Agregar event listeners a la nueva columna
    agregarEventListeners(columnaCounter);
}

function eliminarColumna(){
    const final = document.getElementById('comparador.final');
    const preFinal = final.previousElementSibling;

    if (preFinal.id !== "comparador.columna.1"){ preFinal.remove() }

    const finalDoppler = document.getElementById('comparador.doppler.final');
    const preFinalDoppler = finalDoppler.previousElementSibling;

    if (preFinalDoppler.id !== "comparador.doppler.columna.1"){ preFinalDoppler.remove() }
}

// Función para obtener todos los valores organizados
function obtenerValores() {
    const columnas = document.querySelectorAll('[id^="comparador.columna."]');
    const datos = {
        'Edad Gestacional': [],
        'DBP': [],
        'C. Cráneo': [],
        'C. Abdomen': [],
        'L. Fémur': [],
        'PFE': [],
        'Umbilical': [],
        'Cerebral Media': [],
        'Cuociente Placentario': [],
        'Uterinas': []
    };

    columnas.forEach(columna => {
        const id = columna.id.split('.')[2];

        // Obtener edad gestacional
        const semanas = document.getElementById(`comparador.semanas.${id}`).value;
        const dias = document.getElementById(`comparador.dias.${id}`).value;
        datos['Edad Gestacional'].push(Number(semanas)+'.'+Number(dias));

        // Obtener valores y sus cálculos
        const campos = ['dbp', 'cc', 'ca', 'lf', 'pfe', 'umb','acm','ccp','uterinas'];
        const nombres = ['DBP', 'C. Cráneo', 'C. Abdomen', 'L. Fémur', 'PFE', 'Umbilical','Cerebral Media', 'Cuociente Placentario', 'Uterinas'];

        campos.forEach((campo, index) => {
            const valor = document.getElementById(`comparador.${campo}.${id}`).value;
            const calculo = document.getElementById(`comparador.${campo}.pct.${id}`).textContent;

            if (valor) {
                datos[nombres[index]].push([Number(valor), calculo]);
            }else{
                datos[nombres[index]].push(["", ""]);
            }
        });
    });

    // Mostrar los datos en el modal
    mostrarValoresEnModal(datos);
}

// Función para mostrar valores en el modal
function mostrarValoresEnModal(datos) {
    let _grafico = graficoPFECompleto()
    _hchartsUno = structuredClone(baseGraficoPFE)
    let par = false
    let multiplicador = 0

    let _datos = []
    let _datosUmb = []
    let _datosCCP = []
    // Agregar headers para cada columna
    let leyenda = ''
    for (let i = 0; i < datos['Edad Gestacional'].length; i++) {
        let _laEG = datos['Edad Gestacional'][i]
        let _laValor = (datos['PFE'].length > 0) ? datos['PFE'][i][0] : 0

        let pfe = 0
        let umbilicalPct = 0
        let cmediaPct = 0
        let cplacentarioPct = 0
        let uterinasPct = 0

        pfe = (datos['PFE'].length > 0) ? (('string' == typeof datos['PFE'][i][1]) ? datos['PFE'][i][1] : Number(datos['PFE'][i][1]).toFixed(0)) : 0
        umbilicalPct = (datos['Umbilical'].length > 0) ? (('string' == typeof datos['Umbilical'][i][1]) ? datos['Umbilical'][i][1] : Number(datos['Umbilical'][i][1]).toFixed(0)) : 0
        cmediaPct = (datos['Cerebral Media'].length > 0) ? (('string' == typeof datos['Cerebral Media'][i][1]) ? datos['Cerebral Media'][i][1] : Number(datos['Cerebral Media'][i][1]).toFixed(0)) : 0
        cplacentarioPct = (datos['Cuociente Placentario'].length > 0) ? (('string' == typeof datos['Cuociente Placentario'][i][1]) ? datos['Cuociente Placentario'][i][1] : Number(datos['Cuociente Placentario'][i][1]).toFixed(0)) : 0
        uterinasPct = (datos['Uterinas'].length > 0) ? (('string' == typeof datos['Uterinas'][i][1]) ? datos['Uterinas'][i][1] : Number(datos['Uterinas'][i][1]).toFixed(0)) : 0

        leyenda += '<tr><td class="text-center pan" style="background-color: #e9ecef;">'+_laEG+'</td><td class="text-center"><strong>'+ pfe +'</strong></td><td class="text-center pan" style="background-color: #e9ecef;">'+ uterinasPct +'</td><td class="text-center"><strong>'+ umbilicalPct +'</strong></td><td class="text-center pan" style="background-color: #e9ecef;">'+ cmediaPct +'</td><td class="text-center"><strong>'+ cplacentarioPct +'</strong></td></tr>'

        _laEG = Number(Number(_laEG).toFixed(0))
        _datos.push({x:_laEG, y:_laValor});

        _laValor = (datos['Umbilical'].length > 0) ? datos['Umbilical'][i][0] : 0
        if (_laValor > 0){
            _datosUmb.push({x:_laEG, y:_laValor});
        }

        _laValor = (datos['Cuociente Placentario'].length > 0) ? datos['Cuociente Placentario'][i][0] : 0
        if (_laValor > 0){
            _datosCCP.push({x:_laEG, y:_laValor});
        }

    }

    let menor = ((_datos[0].y - 50) <= 0) ? 0 : (_datos[0].y - 50)
    let mayor = 0

    _grafico.valores.nueve.forEach(clave =>{
        if (clave.x == _datos[_datos.length-1].x){ mayor = clave.y }
    })

    if (menor < 100){ menor = Math.trunc(menor / 10); multiplicador = 10;
    } else if (menor < 1000){ menor = Math.trunc(menor / 100); multiplicador = 100;
    } else if (menor < 10000){ menor = menor / 1000; multiplicador = 1000; }

    par = menor % 2;
    par = (par > 0) ? false : true

    if (par == true){
        _hchartsUno.yAxis.min = menor * multiplicador
    }else{
        if (menor > 1){
            _hchartsUno.yAxis.min = (menor-1) * multiplicador  
        } else {
            _hchartsUno.yAxis.min = 0
        }
    }

    if (mayor > 100){
        mayor = Math.trunc(mayor / 10); multiplicador = 10;
    }else if (mayor > 1000){
        mayor = Math.trunc(mayor / 100); multiplicador = 100;
    }else if (mayor > 10000){
        mayor = Math.trunc(mayor / 1000); multiplicador = 1000;
    }

    par = mayor % 2;
    par = (par > 0) ? false : true

    if (par == true){
        _hchartsUno.yAxis.max = mayor * multiplicador
    }else{
        _hchartsUno.yAxis.max = (mayor+1) * multiplicador  
    }

    _hchartsUno.series[9].data = _datos
    _hchartsUno.series[8].data = _grafico.valores.uno
    _hchartsUno.series[7].data = _grafico.valores.dos
    _hchartsUno.series[6].data = _grafico.valores.tres
    _hchartsUno.series[5].data = _grafico.valores.cuatro
    _hchartsUno.series[4].data = _grafico.valores.cinco
    _hchartsUno.series[3].data = _grafico.valores.seis
    _hchartsUno.series[2].data = _grafico.valores.siete
    _hchartsUno.series[1].data = _grafico.valores.ocho
    _hchartsUno.series[0].data = _grafico.valores.nueve
    _hchartsUno.xAxis.floor = _datos[0].x
    _hchartsUno.xAxis.ceiling = _datos[_datos.length-1].x
    _hchartsUno.yAxis.gridLineWidth = 0

    the("valoresTabla").innerHTML = leyenda

    _hchartsDos = graficoArtUmb()
    _hchartsDos.series[2].data = _datosUmb

    _hchartsTres = graficoCcp()
    _hchartsTres.series[2].data = _datosCCP

    let style = {style: {fontSize: '18px'}};

    Object.assign(_hchartsUno.xAxis.title, style)

    _hchartsUno = Highcharts.chart('valoresContent', _hchartsUno)

    if(_datosUmb.length > 0){
        Object.assign(_hchartsDos.title, style)
        _hchartsDos = Highcharts.chart('valoresUMBList', _hchartsDos)
    }

    if(_datosCCP.length > 0){
        Object.assign(_hchartsTres.title, style)
        _hchartsTres = Highcharts.chart('valoresCCPList', _hchartsTres)
    }

    $('#valoresModal').modal('show');

    the("verValoresTabla").onclick = function(){
        if(the("valoresTabla").parentElement.classList.contains("d-none")){
            the("valoresTabla").parentElement.classList.remove("d-none")
            the("valoresContent").classList.add("d-none")
            the("valoresUMBList").classList.add("d-none")
            the("valoresCCPList").classList.add("d-none")
            this.innerHTML = "Ver Gráficas"
            the("valoresModalLabel").innerHTML = "Tabla percentiles de PFE + Indice de pulsatilidad (IP) para Doppler de Uterinas, UMB, ACM, CCP"
        } else {
            the("valoresTabla").parentElement.classList.add("d-none")
            the("valoresContent").classList.remove("d-none")
            the("valoresUMBList").classList.remove("d-none")
            the("valoresCCPList").classList.remove("d-none")
            this.innerHTML = "Ver Datos"
            the("valoresModalLabel").innerHTML = "Graficas curvas de crecimiento"
        }
    }

}

// Event listeners iniciales
document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listeners a la primera columna
    agregarEventListeners(1);

    // Event listener para el botón agregar
    document.getElementById('comparador.agregar').addEventListener('click', clonarColumna);

    // Event listener para el botón eliminar
    document.getElementById('comparador.eliminar').addEventListener('click', eliminarColumna);

    // Event listener para el botón obtener valores
    document.getElementById('obtener.valores').addEventListener('click', obtenerValores);
    clonarColumna()

    document.getElementById('verInformeGrafica').addEventListener('click', informeComparacion);

});

function comparacionDBP(eg,dbp) {
    'use strict';
    let a = [], b = [];

    a[0]=14;a[1]=17;a[2]=19;a[3]=25;a[4]=29;a[5]=33;a[6]=34;a[7]=38;a[8]=41;a[9]=43;a[10]=46;a[11]=49;a[12]=52;a[13]=54;a[14]=57;a[15]=61;a[16]=63;a[17]=65;a[18]=69;a[19]=69;a[20]=74;a[21]=74;a[22]=77;a[23]=78;a[24]=78;a[25]=81;a[26]=85;a[27]=88;
    b[0]=25;b[1]=29;b[2]=33;b[3]=35;b[4]=41;b[5]=42;b[6]=46;b[7]=50;b[8]=52;b[9]=56;b[10]=59;b[11]=63;b[12]=66;b[13]=70;b[14]=71;b[15]=75;b[16]=77;b[17]=81;b[18]=83;b[19]=87;b[20]=88;b[21]=91;b[22]=94;b[23]=95;b[24]=97;b[25]=99;b[26]=97;b[27]=106;
    
    dbp = dbp.toString();
    dbp = dbp.replace(",", ".");
    dbp = parseFloat(dbp);

    if (eg < 12 || eg > 40){
        return 0;
    }
    else {
        eg = eg - 12;
        eg = parseInt(eg);

        var uno = b[eg] - a[eg];
        var dos = dbp - a[eg];
        var resultado = (parseInt(95 / (uno) * (dos) + 3));

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 99){
            return '> 99';
        }
        else if (resultado < 1){
            return '< 1';
        }
        else {
            return Number(resultado).toFixed(0);
        }
        //p50();
    }
}

function comparacionCC(eg, cc) {
    /* 3 97 */
    'use strict';
    let a = [], b = [];
    a[0]=64;a[1]=74;a[2]=88;a[3]=100;a[4]=113;a[5]=126; a[6]=137;a[7]=149;a[8]=161;a[9]=172;a[10]=183; a[11]=194;a[12]=204;a[13]=214;a[14]=224;a[15]=233; a[16]=242;a[17]=250;a[18]=258;a[19]=267;a[20]=274; a[21]=280;a[22]=287;a[23]=293;a[24]=299;a[25]=303; a[26]=308;a[27]=311;a[28]=315;
    b[0]=81;b[1]=94;b[2]=106;b[3]=120;b[4]=135; b[5]=150;b[6]=165;b[7]=179;b[8]=193;b[9]=206; b[10]=219;b[11]=232;b[12]=243;b[13]=256;b[14]=268; b[15]=279;b[16]=290;b[17]=300;b[18]=310;b[19]=319; b[20]=328;b[21]=336;b[22]=343;b[23]=351;b[24]=358; b[25]=363;b[26]=368;b[27]=373;b[28]=377;

    if (eg < 12 || eg > 40){ 
        return 0;
    }
    else {
        eg = eg - 12;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=cc - a[eg];

        var resultado = parseInt(95 / (uno) * (dos) + 3);
        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 97){
            return '> 97';
        }
        else if (resultado < 3){
            return '< 3';
        }
        else{
            return Number(resultado).toFixed(0);
        }

        // psohdlk();
        //p50();
    }
}

function comparacionCA(eg, ca) {
    /* 3 97 */
    'use strict';
    let a = [], b = [];
    a[0]=42;a[1]=52;a[2]=64;a[3]=75;a[4]=86; a[5]=97;a[6]=109;a[7]=119;a[8]=131;a[9]=141; a[10]=151;a[11]=161;a[12]=171;a[13]=181; a[14]=191;a[15]=200;a[16]=209;a[17]=218;a[18]=227; a[19]=236;a[20]=245;a[21]=253;a[22]=261;a[23]=269; a[24]=277;a[25]=285;a[26]=292;a[27]=299;a[28]=307;
    b[0]=71;b[1]=79;b[2]=92;b[3]=102;b[4]=113; b[5]=127;b[6]=141;b[7]=155;b[8]=170; b[9]=183;b[10]=192;b[11]=209;b[12]=223; b[13]=235;b[14]=248;b[15]=260;b[16]=271;b[17]=284; b[18]=295;b[19]=306;b[20]=318;b[21]=329;b[22]=339; b[23]=349;b[24]=359;b[25]=370;b[26]=380;b[27]=389; b[28]=399;
   
    if (eg < 12 || eg > 40){ 
        return 0;
    }
    else {
        eg = eg - 12;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=ca - a[eg];
        var resultado = parseInt(95 / (uno) * (dos) + 3);


        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 97){
            return '> 97';
        }
        else if (resultado < 3){
            return '< 3';
        }
        else{
            return Number(resultado).toFixed(0);
        }

        //psohdlk();
        //p50();
    }
}

function comparacionLF(eg, lf) {
    /* 3 97 */
    'use strict';
    let a = [], b = [];

    a[0]=7;a[1]=9;a[2]=12;a[3]=15;a[4]=17;a[5]=21; a[6]=23;a[7]=26;a[8]=28;a[9]=30;a[10]=33;a[11]=35; a[12]=38;a[13]=40;a[14]=42;a[15]=44;a[16]=46; a[17]=48;a[18]=50;a[19]=52;a[20]=53;a[21]=55; a[22]=57;a[23]=59;a[24]=60;a[25]=62;a[26]=64; a[27]=65;a[28]=66;
    b[0]=12;b[1]=14;b[2]=17;b[3]=20;b[4]=23;b[5]=27; b[6]=31;b[7]=34;b[8]=38;b[9]=40;b[10]=43;b[11]=47; b[12]=50;b[13]=52;b[14]=56;b[15]=58;b[16]=62; b[17]=64;b[18]=66;b[19]=68;b[20]=71;b[21]=73; b[22]=75;b[23]=78;b[24]=80;b[25]=82;b[26]=84; b[27]=86;b[28]=88;

    if (eg < 12 || eg > 40){ 
        return 0;
    }else {
        eg = eg - 12;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=lf - a[eg];
        var resultado = parseInt(95 / (uno) * (dos) + 3);

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 97){
            return '> 97';
        }else if (resultado < 3){
            return '< 3';
        }else{
            return Number(resultado).toFixed(0);
        }
    }
}

function comparacionPFE(eg, dias, pfe) {
    'use strict';

    let a = [], b = [];
    eg = eg + (0 + (dias || 0)) / 7;

    let sexo = the("ecografia.segtrim.sexo").value
    if (sexo == "masculino"){
        sexo = "men"
        a = Math.exp(-.52610096513854 + eg * (.44906549056954 + eg * (-.0089009550762548 + eg * (9868293523919e-17 + eg * -6.1862373692705e-7))))
        b = Math.exp(.79018076483077 + eg * (.32585025131141 + eg * (-.0025559098706069 + eg * (-42038969571238e-18 + eg * 5.4228420412733e-7))))
    } else if (sexo == "femenino"){
        sexo = "wom"
        a = Math.exp(-.915523725804273 + eg * (.529374415518249 + eg * (-.0147446585943781 + eg * (.000269201219853759 + eg * -23537061714461e-19))))
        b = Math.exp(.32551154984358 + eg * (.40214557617585 + eg * (-.0074145176202411 + eg * (88196644838898e-18 + eg * -7.1015932637436e-7))))
    } else {
        sexo = "z"
        a = Math.exp(-.230518383014592 + eg * (.400511116318458 + eg * (-.00617993235833267 + eg * (316595762972649e-19 + eg * 0))))
        b = Math.exp(.408170594889372 + eg * (.381068214664342 + eg * (-.00550913922743603 + eg * (246713147783532e-19 + eg * 0))));
    }

    //let eg = the("semanas").value;
    // funcion que calcula el v alor de eg y suma los dias

    if (eg < 14 || eg > 40) {
        return 0
    } else {
        var pctPFE = percentilOMS(pfe,eg, sexo);
        return ("number" == typeof pctPFE) ? Math.round(pctPFE * 1000).toFixed(0) : pctPFE
    }

}

function psohdlk(id) {

    let CC = parseFloat(the("comparador.cc."+id).value);
    let CA = parseInt(the("comparador.ca."+id).value);
    let LF = parseInt(the("comparador.lf."+id).value);

    CC = CC / 10;
    CA = CA / 10;
    LF = LF / 10;
    var psoP = Math.pow(10, (1.326 + 0.0107 * CC + 0.0438 * CA + 0.158 * LF - 0.00326 * CA * LF));

    if ( isNaN( psoP ) != true ) {
        return Math.trunc(psoP)
    } else {
        return "";
    }

}

function comparacionAu(eg, aumb) {
    /* 5 95 */
    'use strict';
    let a = [],b = [];

    a[0]=0.97;a[1]=0.95;a[2]=0.94;a[3]=0.92;a[4]=0.9;a[5]=0.89;a[6]=0.87;a[7]=0.85;a[8]=0.82;a[9]=0.8;a[10]=0.78; a[11]=0.75;a[12]=0.73; a[13]=0.7;a[14]=0.67; a[15]=0.65;a[16]=0.62; a[17]=0.58;a[18]=0.55; a[19]=0.52;a[20]=0.49;
    b[0]=1.6;b[1]=1.56;b[2]=1.53; b[3]=1.5;b[4]=1.46; b[5]=1.43;b[6]=1.4;b[7]=1.37;b[8]=1.35; b[9]=1.32;b[10]=1.29; b[11]=1.27;b[12]=1.25; b[13]=1.22;b[14]=1.2; b[15]=1.18;b[16]=1.16; b[17]=1.14;b[18]=1.13; b[19]=1.11;b[20]=1.09;
 
    if (eg < 20 || eg > 40)
    {
        return 0;
    }
    else {
        eg = eg - 20;
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=aumb - a[eg];
        var resultado = parseInt(90 / (uno) * (dos) + 5);

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 95){
            return '> 97';
        }
        else if (resultado < 5){
            return '< 3';
        }
        else{
            return resultado;
        }
    }
}

function comparacionAcm(eg, acm) {
    /* 5 95 */
    'use strict';
    var a = [],b = [];

    a[0]=1.24;a[1]=1.29;a[2]=1.34;a[3]=1.37;a[4]=1.4;a[5]=1.43;a[6]=1.44;a[7]=1.45;a[8]=1.45;a[9]=1.44;a[10]=1.43;a[11]=1.41;a[12]=1.38;a[13]=1.34;a[14]=1.3;a[15]=1.25;a[16]=1.19;a[17]=1.13;a[18]=1.05;a[19]=0.98;a[20]=0.89;
    b[0]=1.98;b[1]=2.12;b[2]=2.25;b[3]=2.36;b[4]=2.45;b[5]=2.53;b[6]=2.59;b[7]=2.63;b[8]=2.66;b[9]=2.67;b[10]=2.67;b[11]=2.65;b[12]=2.62;b[13]=2.56;b[14]=2.5;b[15]=2.41;b[16]=2.31;b[17]=2.2;b[18]=2.07;b[19]=1.92;b[20]=1.76;

    if (eg < 20 || eg > 40)
    {
        return 0;
    }
    else {
        eg = eg - 20;
        eg = parseInt(eg);
        var uno = b[eg] - a[eg];
        var dos = acm - a[eg];
        var resultado = parseInt(90 / (uno) * (dos) + 5);

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 95){
            return '> 95';
        }
        else if (resultado < 5){
            return '< 5';
        }
        else{
            return resultado;
        }

    }

}

function comparacionCcp(eg, ccp) {
    /* 5 95 */
    'use strict';
    let a = [],b = [];

    a[20]=0.78; a[21]=0.87; a[22]=0.95; a[23]=1.02;a[24]=1.09; a[25]=1.15; a[26]=1.2; a[27]=1.24;a[28]=1.28; a[29]=1.31; a[30]=1.33; a[31]=1.35;a[32]=1.36; a[33]=1.36; a[34]=1.36; a[35]=1.34;a[36]=1.32; a[37]=1.3; a[38]=1.26; a[39]=1.22; a[40]=1.18;
    b[20]=1.68; b[21]=1.88; b[22]=2.06; b[23]=2.22;b[24]=2.36; b[25]=2.49; b[26]=2.6;b[27]=2.7;b[28]=2.78; b[29]=2.84; b[30]=2.89; b[31]=2.92;b[32]=2.93; b[33]=2.93; b[34]=2.91; b[35]=2.87;b[36]=2.82; b[37]=2.75; b[38]=2.67; b[39]=2.57; b[40]=2.45;
 
    if (eg < 20 || eg > 40)
    {
        return 0;
    }
    else {
        eg = parseInt(eg);
        var uno=b[eg] - a[eg];
        var dos=ccp - a[eg];
        var resultado = parseInt(90 / (uno) * (dos) + 5);

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 95){
            return '> 95';
        }
        else if (resultado < 5){
            return '< 5';
        }
        else{
            return resultado;
        }

    }

}

function comparacionUt(eg, uterina) {
    'use strict';

	let a = [1.18, 1.11, 1.05, 0.99, 0.94, 0.89, 0.85, 0.81, 0.78, 0.74, 0.71, 0.69, 0.66, 0.64, 0.62, 0.6, 0.58, 0.56, 0.55, 0.54, 0.52, 0.51, 0.51, 0.51, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47, 0.89];
	let b = [2.71, 2.53, 2.38, 2.24, 2.11, 1.99, 1.88, 1.79, 1.71, 1.61, 1.54, 1.47, 1.41, 1.35, 1.3, 1.25, 1.21, 1.17, 1.13, 1.11, 1.06, 1.04, 1.01, 0.99, 0.97, 0.95, 0.94, 0.92, 0.91, 0.91, 0.47];

    if (eg < 11 || eg > 40) {
        return 0;
	}
	else {
		eg = eg - 11;
        let uno = 0, dos = 0;
        
		if (uterina > 0){
			eg = parseInt(eg);
			uno = b[eg] - a[eg];
			dos = uterina - a[eg];
			uterina = parseInt(90 / (uno) * (dos) + 5);

			if (uterina > 95){
				return '> 95';
			}
			else if (uterina < 5){
				return '< 5';
            }else {
                return uterina;
            }

        }else {
            return 0;
        }
    }
}

function graficoArtUmb()
{
    let estructura = {
        title: {
            text: 'IP Arteria Umbilical **',
            x: -20, //center
        },
        plotOptions: { series: { enableMouseTracking: false }},
        yAxis: {
            title: { text: 'Valor IP' },
            tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
        },
        colors: ['#313131', '#313131', '#313131'],
        credits: { enabled: false },
        series: [{
                type: "line",
                name: 'Pct. 5',
                marker: { enabled: false },
                data: [{x:20, y:0.97},{x:21, y:0.95},{x:22, y:0.94},{x:23, y:0.92},{x:24, y:0.9},{x:25, y:0.89},{x:26, y:0.87},{x:27, y:0.85},{x:28, y:0.82},{x:29, y:0.8},{x:30, y:0.78},{x:31, y:0.75},{x:32, y:0.73},{x:33, y:0.7},{x:34, y:0.67},{x:35, y:0.65},{x:36, y:0.62},{x:37, y:0.58},{x:38, y:0.55},{x:39, y:0.52},{x:40, y:0.49}]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: { enabled: false },
                data: [{x:20, y:1.6},{x:21, y:1.56},{x:22, y:1.53},{x:23, y:1.5},{x:24, y:1.46},{x:25, y:1.43},{x:26, y:1.4},{x:27, y:1.37},{x:28, y:1.35},{x:29, y:1.32},{x:30, y:1.29},{x:31, y:1.27},{x:32, y:1.25},{x:33, y:1.22},{x:34, y:1.2},{x:35, y:1.18},{x:36, y:1.16},{x:37, y:1.14},{x:38, y:1.13},{x:39, y:1.11},{x:40, y:1.09}]
            }, {
                type: "line",
                name: 'Arteria',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: []
            }]
       }

    return estructura
}

function graficoCcp()
{
    let estructura = {
        title: {
            text: 'IP de CCP (Indice ACM / AU) **',
            x: -20 //center
        },
        plotOptions: { series: { enableMouseTracking: false}},
        yAxis: {
            title: { text: 'Valor IP' },
            tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
        },
        colors: ['#313131', '#313131', '#313131'],
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 5',
            marker: { enabled: false },
            data: [{x:20, y:0.78},{x:21, y:0.87},{x:22, y:0.95},{x:23, y:1.02},{x:24, y:1.09},{x:25, y:1.15},{x:26, y:1.2},{x:27, y:1.24},{x:28, y:1.28},{x:29, y:1.31},{x:30, y:1.33},{x:31, y:1.35},{x:32, y:1.36},{x:33, y:1.36},{x:34, y:1.36},{x:35, y:1.34},{x:36, y:1.32},{x:37, y:1.3},{x:38, y:1.26},{x:39, y:1.22},{x:40, y:1.18}]
        }, {
            type: "line",
            name: 'Pct. 95',
            marker: { enabled: false },
            data: [{x:20, y:1.68},{x:21, y:1.88},{x:22, y:2.06},{x:23, y:2.22},{x:24, y:2.36},{x:25, y:2.49},{x:26, y:2.6},{x:27, y:2.7},{x:28, y:2.78},{x:29, y:2.84},{x:30, y:2.89},{x:31, y:2.92},{x:32, y:2.93},{x:33, y:2.93},{x:34, y:2.91},{x:35, y:2.87},{x:36, y:2.82},{x:37, y:2.75},{x:38, y:2.67},{x:39, y:2.57},{x:40, y:2.45}]
        }, {
            type: "line",
            name: 'Cuociente',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: []
        }]
    }

    return estructura
}

function informeComparacion()
{

    _hchartsUno.setSize(980, 340, false);
    _hchartsUno.reflow();

    if (_hchartsDos.hasOwnProperty('axes') !== null){
        _hchartsDos.setSize(430, 250, false);
        _hchartsDos.reflow();
    }

    if (_hchartsTres.hasOwnProperty('axes') !== null){
        _hchartsTres.setSize(430, 250, false);
        _hchartsTres.reflow();
    }

    let _peso = the("valoresContent").cloneNode(true);
    _peso.classList.remove("d-none")
    let _umb = the("valoresUMBList").cloneNode(true);
    _umb.classList.remove("d-none")
    let _ccp = the("valoresCCPList").cloneNode(true);
    _ccp.classList.remove("d-none")

    let _tabla = the("valoresTabla").parentElement.cloneNode(true);
    _tabla.classList.remove("d-none")

    let childElements = _tabla.querySelectorAll('*');

    childElements.forEach(child => { if (child.classList.contains('pam')){ child.classList.add('bg-secondary'); } });

    const columnas = document.querySelectorAll('[id^="comparador.columna."]');

    var _informe = document.createElement("div");
    if (columnas.length > 1){
        _informe.innerHTML = '<h5 class="text-center">Graficas evolución percentiles de peso fetal estimado (PFE) y flujometría Doppler Materno / Fetal</h5>'
    }else{
        _informe.innerHTML += '<h5 class="text-center">Graficas percentiles de peso fetal estimado (PFE) y flujometría Doppler Materno / Fetal</h5>'
    }

    _informe.innerHTML += '<span class="mt-2" style="border-top:1px solid #000;width:100%!important;display:block;padding-top:2px"></span><div class="mt-5 row"><div class="col-6"><p style="font-size: 15px" class="text-right"><strong>Identificación de paciente: </strong><span id="paciente"></span></p></div><div class="col-6"><p style="font-size: 15px"><strong>DNI: </strong><span id="rut"></span></p></div></div><div class="row"><div class="col-12"><div id="graficoUno"></div></div><div class="col-12 mt-5"><div id="graficoDos" class="row"></div></div></div><h5 class="text-center mt-5" style="padding-top:2px">Tabla percentiles de PFE más indice de pulsatilidad (IP) para Doppler de Uterinas, UMB, ACM, CCP.</h5><span class="my-2" style="border-top:1px solid #000;width:100%!important;display:block;padding-top:2px"></span><div class="row" id="lineclear"><div class="col-12" id="tablaDatos"></div></div>'
    _informe.innerHTML += '<hr><div class="mt-5 row"><div class="col-6"><p style="font-size: 15px"><strong>Médico examinador: </strong><span id="examinador"></span></p></div><div class="col-6"><p style="font-size: 15px" class="text-right"><strong>Fecha de Impresion: </strong><span id="fechaImpresion"></span></p></div></div>'

    _informe.querySelectorAll('[id$="graficoUno"')[0].append(_peso);
    _informe.querySelectorAll('[id$="graficoDos"')[0].append(_umb)
    _informe.querySelectorAll('[id$="graficoDos"')[0].append(_ccp)
    _informe.querySelectorAll('[id$="tablaDatos"')[0].append(_tabla)

    _informe.querySelectorAll('[id$="paciente"')[0].innerHTML = the("nombre.ecoObsSegTrim").value;
    _informe.querySelectorAll('[id$="rut"')[0].innerHTML = the("rut.ecoObsSegTrim").value;

    _informe.querySelectorAll('[id$="examinador"')[0].innerHTML = the("ecografista").value;
    _informe.querySelectorAll('[id$="fechaImpresion"')[0].innerHTML = humanDate(fechas.toDate(the("fee").value));

    imprInforme(_informe.innerHTML);

}

function imprInforme(datos)
{

	var document = '<!DOCTYPE html><html lang="es-CL"> <head> <meta charset="utf-8"/> <title>Impresión de Gráficos</title> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/> <link rel="stylesheet" href="consulta.css"/> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> :ESTILO </head> <body> <div class="container"><div style="width: 45%; text-align: center;margin-top:50px;padding-top:50px;" class="membrete">:MEMBRETE</div></div><div class="container" style="margin-top: 50px !important;">:DATOS</div>:FUNCION </body></html>';
	var estilo = '<style>@media print{.table { width: 100%; margin-bottom: 1rem; color:#212529 } .table td, .table th { padding: .75rem; vertical-align: top; border-top:1px solid #dee2e6 } .table thead th { vertical-align: bottom; border-bottom:2px solid #dee2e6 } .table tbody + tbody { border-top:2px solid #dee2e6 } .table-sm td, .table-sm th { padding:.3rem } .table-bordered { border:1px solid #dee2e6 } .table-bordered td, .table-bordered th { border:1px solid #dee2e6 } .table-bordered thead td, .table-bordered thead th { border-bottom-width:2px } .table-borderless tbody + tbody, .table-borderless td, .table-borderless th, .table-borderless thead th { border:0 } .table-striped tbody tr:nth-of-type(odd) { background-color:rgba(0, 0, 0, .05) } .table-hover tbody tr:hover { color: #212529; background-color:rgba(0, 0, 0, .075) } .table-primary, .table-primary > td, .table-primary > th { background-color:#b8daff } .table-primary tbody + tbody, .table-primary td, .table-primary th, .table-primary thead th { border-color:#7abaff } .table-hover .table-primary:hover { background-color:#9fcdff } .table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th { background-color:#9fcdff } .table-secondary, .table-secondary > td, .table-secondary > th { background-color:#d6d8db } .table-secondary tbody + tbody, .table-secondary td, .table-secondary th, .table-secondary thead th { border-color:#b3b7bb } .table-hover .table-secondary:hover { background-color:#c8cbcf } .table-hover .table-secondary:hover > td, .table-hover .table-secondary:hover > th { background-color:#c8cbcf } .table-success, .table-success > td, .table-success > th { background-color:#c3e6cb } .table-success tbody + tbody, .table-success td, .table-success th, .table-success thead th { border-color:#8fd19e } .table-hover .table-success:hover { background-color:#b1dfbb } .table-hover .table-success:hover > td, .table-hover .table-success:hover > th { background-color:#b1dfbb } .table-info, .table-info > td, .table-info > th { background-color:#bee5eb } .table-info tbody + tbody, .table-info td, .table-info th, .table-info thead th { border-color:#86cfda } .table-hover .table-info:hover { background-color:#abdde5 } .table-hover .table-info:hover > td, .table-hover .table-info:hover > th { background-color:#abdde5 } .table-warning, .table-warning > td, .table-warning > th { background-color:#ffeeba } .table-warning tbody + tbody, .table-warning td, .table-warning th, .table-warning thead th { border-color:#ffdf7e } .table-hover .table-warning:hover { background-color:#ffe8a1 } .table-hover .table-warning:hover > td, .table-hover .table-warning:hover > th { background-color:#ffe8a1 } .table-danger, .table-danger > td, .table-danger > th { background-color:#f5c6cb } .table-danger tbody + tbody, .table-danger td, .table-danger th, .table-danger thead th { border-color:#ed969e } .table-hover .table-danger:hover { background-color:#f1b0b7 } .table-hover .table-danger:hover > td, .table-hover .table-danger:hover > th { background-color:#f1b0b7 } .table-light, .table-light > td, .table-light > th { background-color:#fdfdfe } .table-light tbody + tbody, .table-light td, .table-light th, .table-light thead th { border-color:#fbfcfc } .table-hover .table-light:hover { background-color:#ececf6 } .table-hover .table-light:hover > td, .table-hover .table-light:hover > th { background-color:#ececf6 } .table-dark, .table-dark > td, .table-dark > th { background-color:#c6c8ca } .table-dark tbody + tbody, .table-dark td, .table-dark th, .table-dark thead th { border-color:#95999c } .table-hover .table-dark:hover { background-color:#b9bbbe } .table-hover .table-dark:hover > td, .table-hover .table-dark:hover > th { background-color:#b9bbbe } .table-active, .table-active > td, .table-active > th { background-color:rgba(0, 0, 0, .075) } .table-hover .table-active:hover { background-color:rgba(0, 0, 0, .075) } .table-hover .table-active:hover > td, .table-hover .table-active:hover > th { background-color:rgba(0, 0, 0, .075) } .table .thead-dark th { color: #fff; background-color: #343a40; border-color:#454d55 } .table .thead-light th { color: #495057; background-color: #e9ecef; border-color:#dee2e6 } .table-dark { color: #fff; background-color:#343a40 } .table-dark td, .table-dark th, .table-dark thead th { border-color:#454d55 } .table-dark.table-bordered { border:0 } .table-dark.table-striped tbody tr:nth-of-type(odd) { background-color:rgba(255, 255, 255, .05) } .table-dark.table-hover tbody tr:hover { color: #fff; background-color:rgba(255, 255, 255, .075) } @media (max-width: 575.98px) { .table-responsive-sm { display: block; width: 100%; overflow-x: auto; -webkit-overflow-scrolling:touch } .table-responsive-sm > .table-bordered { border:0 } } @media (max-width: 767.98px) { .table-responsive-md { display: block; width: 100%; overflow-x: auto; -webkit-overflow-scrolling:touch } .table-responsive-md > .table-bordered { border:0 } } @media (max-width: 991.98px) { .table-responsive-lg { display: block; width: 100%; overflow-x: auto; -webkit-overflow-scrolling:touch } .table-responsive-lg > .table-bordered { border:0 } } @media (max-width: 1199.98px) { .table-responsive-xl { display: block; width: 100%; overflow-x: auto; -webkit-overflow-scrolling:touch } .table-responsive-xl > .table-bordered { border:0 } } .table-responsive { display: block; width: 100%; overflow-x: auto; -webkit-overflow-scrolling:touch } .table-responsive > .table-bordered { border:0 } .form-control { display: block; width: 100%; height: calc(1.5em + .75rem + 2px); padding: .375rem .75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #495057; background-color: #fff; background-clip: padding-box; border: 1px solid #ced4da; border-radius: .25rem; transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out }.newpage{ page-break-before: always; margin-bottom:5rem; }.pie-pagina{font-size:1rem;}.pie-pagina-dos{font-size:1rem;}*, ::after, ::before{box-sizing: border-box;}body{margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #212529; background-color: #fff; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent;}[tabindex="-1"]:focus:not(:focus-visible){outline: 0 !important;}hr{margin: 1rem 0; color: inherit; background-color: currentColor; border: 0; opacity: 0.25;}hr:not([size]){height: 1px;}h1, h2, h3, h4, h5, h6{margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2;}h1{font-size: calc(1.375rem + 1.5vw);}h2{font-size: calc(1.325rem + 0.9vw);}h3{font-size: calc(1.3rem + 0.6vw);}h4{font-size: calc(1.275rem + 0.3vw);}h5{font-size: 1.25rem;}h6{font-size: 1rem;}p{margin-top: 0; margin-bottom: 1rem;}ol, ul{padding-left: 2rem;}dl, ol, ul{margin-top: 0; margin-bottom: 1rem;}ol ol, ol ul, ul ol, ul ul{margin-bottom: 0;}b, strong{font-weight: bolder;}small{font-size: 0.875em;}mark{padding: 0.2em; background-color: #fcf8e3;}sub, sup{position: relative; font-size: 0.75em; line-height: 0; vertical-align: baseline;}sub{bottom: -0.25em;}sup{top: -0.5em;}a{color: #0d6efd; text-decoration: underline;}a:hover{color: #024dbc;}a:not([href]):not([class]), a:not([href]):not([class]):hover{color: inherit; text-decoration: none;}code, kbd, pre, samp{font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 1em;}pre{display: block; margin-top: 0; margin-bottom: 1rem; overflow: auto; font-size: 0.875em; -ms-overflow-style: scrollbar;}pre code{font-size: inherit; color: inherit; word-break: normal;}code{font-size: 0.875em; color: #d63384; word-wrap: break-word;}a > code{color: inherit;}.membrete{margin-top:2rem;}.membrete::first-letter{font-size: 1.3rem;}.membrete::first-line{font-size: 1.3rem;}table{caption-side: bottom; border-collapse: collapse;}caption{padding-top: 0.5rem; padding-bottom: 0.5rem; color: #6c757d; text-align: left;}th{text-align: inherit; text-align: -webkit-match-parent;}tbody, td, tfoot, th, thead, tr{border-color: inherit; border-style: solid; border-width: 0;}label{display: inline-block;}[hidden]{display: none !important;}.pie-pagina-dos{font-size: 10px;}#lineclear{clear: both;}.table{--bs-table-bg: transparent; --bs-table-accent-bg: transparent; --bs-table-striped-color: #212529; --bs-table-striped-bg: rgba(0, 0, 0, 0.05); --bs-table-active-color: #212529; --bs-table-active-bg: rgba(0, 0, 0, 0.1); --bs-table-hover-color: #212529; --bs-table-hover-bg: rgba(0, 0, 0, 0.075); width: 100%; margin-bottom: 1rem; color: #212529; vertical-align: top; border-color: #dee2e6;}.table > :not(caption) > * > *{padding: 0.5rem 0.5rem; background-color: var(--bs-table-bg); background-image: linear-gradient(var(--bs-table-accent-bg), var(--bs-table-accent-bg)); border-bottom-width: 1px;}.table > tbody{vertical-align: inherit;}.table > thead{vertical-align: bottom;}.table > :not(:last-child) > :last-child > *{border-bottom-color: currentColor;}.caption-top{caption-side: top;}.table-sm > :not(caption) > * > *{padding: 0.25rem 0.25rem;}.table-bordered > :not(caption) > *{border-width: 1px 0;}.table-bordered > :not(caption) > * > *{border-width: 0 1px;}.table-borderless > :not(caption) > * > *{border-bottom-width: 0;}.table-striped > tbody > tr:nth-of-type(odd){--bs-table-accent-bg: var(--bs-table-striped-bg); color: var(--bs-table-striped-color);}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg); color: var(--bs-table-active-color);}.table-hover > tbody > tr:hover{--bs-table-accent-bg: var(--bs-table-hover-bg); color: var(--bs-table-hover-color);}.table-primary{--bs-table-bg: #bbd6fe; --bs-table-striped-bg: #b3cdf3; --bs-table-striped-color: #212529; --bs-table-active-bg: #acc4e9; --bs-table-active-color: #212529; --bs-table-hover-bg: #afc9ee; --bs-table-hover-color: #212529; color: #212529; border-color: #acc4e9;}.table-secondary{--bs-table-bg: #d6d8db; --bs-table-striped-bg: #cdcfd2; --bs-table-striped-color: #212529; --bs-table-active-bg: #c4c6c9; --bs-table-active-color: #212529; --bs-table-hover-bg: #c8cbce; --bs-table-hover-color: #212529; color: #212529; border-color: #c4c6c9;}.table-success{--bs-table-bg: #c3e6cb; --bs-table-striped-bg: #bbdcc3; --bs-table-striped-color: #212529; --bs-table-active-bg: #b3d3bb; --bs-table-active-color: #212529; --bs-table-hover-bg: #b7d8bf; --bs-table-hover-color: #212529; color: #212529; border-color: #b3d3bb;}.table-info{--bs-table-bg: #bee5eb; --bs-table-striped-bg: #b6dbe1; --bs-table-striped-color: #212529; --bs-table-active-bg: #aed2d8; --bs-table-active-color: #212529; --bs-table-hover-bg: #b2d7dc; --bs-table-hover-color: #212529; color: #212529; border-color: #aed2d8;}.table-warning{--bs-table-bg: #ffeeba; --bs-table-striped-bg: #f4e4b3; --bs-table-striped-color: #212529; --bs-table-active-bg: #e9daac; --bs-table-active-color: #212529; --bs-table-hover-bg: #eedfaf; --bs-table-hover-color: #212529; color: #212529; border-color: #e9daac;}.table-danger{--bs-table-bg: #f5c6cb; --bs-table-striped-bg: #eabec3; --bs-table-striped-color: #212529; --bs-table-active-bg: #e0b6bb; --bs-table-active-color: #212529; --bs-table-hover-bg: #e5babf; --bs-table-hover-color: #212529; color: #212529; border-color: #e0b6bb;}.table-light{--bs-table-bg: #f8f9fa; --bs-table-striped-bg: #edeef0; --bs-table-striped-color: #212529; --bs-table-active-bg: #e3e4e5; --bs-table-active-color: #212529; --bs-table-hover-bg: #e8e9ea; --bs-table-hover-color: #212529; color: #212529; border-color: #e3e4e5;}.table-dark{--bs-table-bg: #343a40; --bs-table-striped-bg: #3e444a; --bs-table-striped-color: #fff; --bs-table-active-bg: #484e53; --bs-table-active-color: #fff; --bs-table-hover-bg: #43494e; --bs-table-hover-color: #fff; color: #fff; border-color: #484e53;}.table-responsive{overflow-x: auto; -webkit-overflow-scrolling: touch;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	var membrete = $("#"+config.config[0].input[0].id).val().replace(/\r\n|\r|\n/g,"<br />");
	document = document.replace(/:DATOS/g, datos);
	document = document.replace(/:ESTILO/g, estilo);
	document = document.replace(/:FUNCION/g, funcion);
	document = document.replace(new RegExp('invisible', 'g'), "");
	document = document.replace(":MEMBRETE", membrete);
    var ventimp = window.open(" ","popimpr");
	ventimp.document.write(document);
	ventimp.document.close();

}