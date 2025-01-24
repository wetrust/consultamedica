import { the, make } from './wetrust.js'
import { graficoPFEMasMenos } from './graficoPFEMasMenos.js'
//import { Highcharts } from './js/highcharts.js'

export function appPesoEG(){

    var modal = make.modal();
    modal.modal.children[0].children[0].children[1].appendChild(contenedor());

    modal.modal.children[0].classList.remove("modal-lg")
    modal.modal.children[0].style.cssText = "max-width:1700px;"
    modal.modal.children[0].children[0].children[0].children[0].textContent = "Evaluación de Peso Fetal Estimado por gráfica de Hadlock 1991 Percentiles 3 a 97";

    return modal

}

function contenedor(){

    let _c = document.createElement("div")
    _c.classList.add("row")

    let _cUno = document.createElement("div")
    _cUno.classList.add("col-3")
    _cUno.innerHTML = generarDatos()
    _c.appendChild(_cUno)

    let _cDos = document.createElement("div")

    _cDos.classList.add("col-9")
    _cDos.id = "graficoPFEDinamico"
    //_cDos.appendChild(crearGrafico())
    _c.appendChild(_cDos)

    return _c

}

function generarDatos(){
    let datos = '<div class="row"><div class="col-12"><label for="unounouno">Edad Gestacional</label></div><div class="col-6"><div class="form-group"><label for="cuacuacua">Semanas</label>'

    datos += '<input type="number" class="form-control" id="cuacuacua" value="'+the("semanas").value+'">'

    datos += '</div></div><div class="col-6"><div class="form-group"><label for="papapapa">Dias</label>'
    datos += '<input type="number" class="form-control" id="papapapa" value="'+the("dias").value+'">'

    datos += '</div></div></div><div class="row"><div class="col-6"><div class="form-group"><label for="unounouno">Peso en gramos</label>'
    datos += '<input type="number" class="form-control" id="unounouno" value="'+the("pfe").value+'">'

    datos += '</div></div><div class="col-6"><div class="form-group"><label for="dosdosdos">Percentil de PFE</label>'

    datos += '<input type="number" class="form-control" id="dosdosdos"></div></div></div>'

    datos += '<div class="form-group"><label for="sexsexsex">Ajuste Sexo Fetal</label><select class="form-control" id="sexsexsex">'
    datos += '<option value="no identificado">Desconocido</option><option value="masculino">Hombre</option><option value="femenino">Mujer</option></select></div>'

    return datos
}

function crearGrafico(){

    let _grafico = graficoPFEMasMenos()

    let _highcharts = {
        title: {
            text: '<small>Peso Fetal Estimado ( gramos )</small>',
            x: -20, //center
            useHTML: true
        },
        subtitle: {
            text: '',
            x: -20
        },
        plotOptions: {
            series: {
                enableMouseTracking: false,
                pointInterval: 1
            }
        },
        yAxis: {
            title: { text: 'Gramos' },
        },
        xAxis: {
            categories: [],
            showEmpty:true
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            column: {
                grouping: false
            }
        },
        colors: ['#313131', '#313131', '#313131', '#313131', '#313131', '#FF0000'],
        credits: {enabled: false},
        series: [{
            type: "line",
            name: 'Pct 97',
            dashStyle: "Dot",
            marker: { enabled: false, },
            data: []
        },{
            type: "line",
            name: 'Pct 90',
            marker: { enabled: false },
            data: []
        },{
            type: "line",
            name: 'Pct 50',
            marker: { enabled: false },
            data: []
        },{
            type: "line",
            name: 'Pct 10',
            marker: { enabled: false },
            data: []
        },{
            type: "line",
            name: 'Pct 3',
            dashStyle: "Dot",
            marker: {enabled: false},
            data: []
        },  {
            type: "line",
            name: 'Peso estimado',
            dashStyle: "Dot",
            marker: {symbol:'circle'},
            lineWidth: 0,
            data: (function () {
                var data = [[0,1]];
                data[0][0] = parseInt(the("semanas").value);

                if (the("dias").value > 0){
                    data[0][0] += "." + the("dias").value; 
                    data[0][0] = parseFloat(data[0][0])
                }

                data[0][1] = parseFloat(the("pfe").value);

                return data;
            }())
        }]
    }

    _highcharts.series[4].data = _grafico.valores.uno
    _highcharts.series[3].data = _grafico.valores.dos
    _highcharts.series[2].data = _grafico.valores.tres
    _highcharts.series[1].data = _grafico.valores.cuatro
    _highcharts.series[0].data = _grafico.valores.cinco
    _highcharts.xAxis.categories = _grafico.semanas
    _highcharts.title.text = "<small>PFE = " + the("pfe").value + " grs. percentil " +the("pfePctRpt").value + "</small>";

    return Highcharts.chart(_highcharts);

}