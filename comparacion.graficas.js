import { the } from './wetrust.js'
import { baseGraficoPFE, graficoPFECompleto, percentilOMS } from './graficoPFEMasMenos.js';

the("ver.ref.otro").onclick = function(){
    if (this.checked == true){
        the("ver.ref.otro.div").classList.remove("d-none");
    }else{
        the("ver.ref.otro.div").classList.add("d-none");
    }
}

the("comparacion.graficas").onclick = function(){
    if (this.checked == true){
        the("comparacion.graficas.div").classList.remove("d-none");
        the("comparacion.graficas.div").classList.add("d-flex");
       the("ver.ref.otro.container").classList.remove("d-none");
    }else{
        the("comparacion.graficas.div").classList.add("d-none");
        the("comparacion.graficas.div").classList.remove("d-flex");
        the("ver.ref.otro.container").classList.add("d-none");
    }
}

let columnaCounter = 1;

        // Función para agregar event listeners a los inputs de una columna
        function agregarEventListeners(columnaId) {
            const inputs = ['dbp', 'cc', 'ca', 'lf', 'pfe'];

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
                            }
                            pctElement.textContent = (('string' == typeof resultado) ? resultado : resultado.toFixed(2));
                        } else {
                            pctElement.textContent = 'mm';
                        }
                    });

                    inputElement.addEventListener('keyup', function(e){
                            if ( e.key === "Enter" ) {
                                e.preventDefault();
                                var key_enter = ["dbp", "cc", "ca", "lf", "pfe"];
                                let id = this.id
                                id = id.split(".")
                                if (key_enter.includes(id[1])){
                                    let pos = key_enter.indexOf(id[1]);
                                    pos++
                                    if (pos < key_enter.length){
                                        let idNew = "comparador."+key_enter[pos]+"."+id[2]
                                        the(idNew).focus();
                                    }
                                    let peso = psohdlk(id[2])
                                    let semanas = the("comparador.semanas"+"."+id[2]).value
                                    let dias = the("comparador.dias"+"."+id[2]).value

                                    the("comparador.pfe"+"."+id[2]).value = peso
                                    the("comparador.pfe.pct"+"."+id[2]).innerHTML = comparacionPFE(parseFloat(semanas), parseFloat(dias), peso)
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
                    if (columna) {
                        columna.remove();
                    }
                });
            }

            the(`comparador.semanas.${columnaId}`).onclick = function(){
                let id = this.id
                id = id.split(".")

                let peso = psohdlk(id[2])
                let semanas = the("comparador.semanas"+"."+id[2]).value
                let dias = the("comparador.dias"+"."+id[2]).value

                the("comparador.pfe"+"."+id[2]).value = peso
                the("comparador.pfe.pct"+"."+id[2]).innerHTML = comparacionPFE(parseFloat(semanas), parseFloat(dias), peso)
            }

            the(`comparador.dias.${columnaId}`).onclick = function(){
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
            
            // Cambiar el ID de la nueva columna
            nuevaColumna.id = `comparador.columna.${columnaCounter}`;
            
            // Cambiar todos los IDs internos
            const elementos = nuevaColumna.querySelectorAll('[id]');
            elementos.forEach(elemento => {
                const oldId = elemento.id;
                const newId = oldId.replace('.1', `.${columnaCounter}`);
                elemento.id = newId;
            });
            
            // Limpiar los valores de los inputs
            const inputs = nuevaColumna.querySelectorAll('input');
            inputs.forEach(input => {
                input.value = '';
            });
            
            // Resetear los textos de los percentiles
            const pctElements = nuevaColumna.querySelectorAll('[id$=".pct.' + columnaCounter + '"]');
            pctElements.forEach(pct => {
                pct.textContent = 'mm';
            });

            // Resetear los selects
            const selects = nuevaColumna.querySelectorAll('select');
            selects.forEach(select => {
                select.selectedIndex = 0;
            });

            // Insertar la nueva columna antes de comparador.final
            const final = document.getElementById('comparador.final');
            final.parentNode.insertBefore(nuevaColumna, final);

            // Agregar event listeners a la nueva columna
            agregarEventListeners(columnaCounter);
        }

        function eliminarColumna(){
            const final = document.getElementById('comparador.final');
            const preFinal = final.previousElementSibling;

            if (preFinal.id !== "comparador.columna.1"){ preFinal.remove() }
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
                'PFE': []
            };

            columnas.forEach(columna => {
                const id = columna.id.split('.')[2];
                
                // Obtener edad gestacional
                const semanas = document.getElementById(`comparador.semanas.${id}`).value;
                const dias = document.getElementById(`comparador.dias.${id}`).value;
                datos['Edad Gestacional'].push(Number(semanas));

                // Obtener valores y sus cálculos
                const campos = ['dbp', 'cc', 'ca', 'lf', 'pfe'];
                const nombres = ['DBP', 'C. Cráneo', 'C. Abdomen', 'L. Fémur', 'PFE'];
                
                campos.forEach((campo, index) => {
                    const valor = document.getElementById(`comparador.${campo}.${id}`).value;
                    const calculo = document.getElementById(`comparador.${campo}.pct.${id}`).textContent;
                    
                    if (valor) {
                        datos[nombres[index]].push([Number(valor), calculo]);
                    }
                });
            });

            // Mostrar los datos en el modal
            mostrarValoresEnModal(datos);
        }

        // Función para mostrar valores en el modal
        function mostrarValoresEnModal(datos) {
            let _grafico = graficoPFECompleto()
            let _hchartsUno = structuredClone(baseGraficoPFE)
            let par = false
            let multiplicador = 0

            let _datos = []
            // Agregar headers para cada columna
            let leyenda = ''
            for (let i = 0; i < datos['Edad Gestacional'].length; i++) {
                let _laEG = datos['Edad Gestacional'][i]
                let _laValor = datos['PFE'][i][0]

                _datos.push({x:_laEG, y:_laValor});
                leyenda += '<tr><th scope="row">'+_laEG+'</th><td>'+Number(datos['PFE'][i][0])+'</td><td>'+ (('string' == typeof datos['PFE'][i][1]) ? datos['PFE'][i][1] : Number(datos['PFE'][i][1]).toFixed(0)) +'</td></tr>'
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

            //let caption = {
            //    floating:true,
            //    x: 70,
            //    y: -250,
            //    useHTML:true,
            //    text: leyenda
            //}

            //_hchartsUno.caption = caption

            the("valoresTabla").innerHTML = leyenda

            $('#valoresContent').highcharts(_hchartsUno);
            $('#valoresModal').modal('show');

            the("verValoresTabla").onclick = function(){
                if(the("valoresTabla").parentElement.classList.contains("d-none")){
                    the("valoresTabla").parentElement.classList.remove("d-none")
                    the("valoresContent").classList.add("d-none")
                } else {
                    the("valoresTabla").parentElement.classList.add("d-none")
                    the("valoresContent").classList.remove("d-none")
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

        //psohdlk();
        //p50();
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
        return 0;
    }

}