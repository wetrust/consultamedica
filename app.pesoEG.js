import { the } from './wetrust.js'
import { graficoPFEMasMenos } from './graficoPFEMasMenos.js?H'
//import { Highcharts } from './js/highcharts.js'

function contenedor(){

    let _c = document.createElement("div")
    _c.classList.add("row")

    let _cUno = document.createElement("div")
    _cUno.classList.add("col-3")
    _cUno.innerHTML = generarDatos()
    _c.appendChild(_cUno)

    let _cDos = document.createElement("div")

    _cDos.classList.add("col-9")

    let _cHead = document.createElement("div")
    _cHead.classList.add("row")

    let _cHLeft = document.createElement("div")
    _cHLeft.classList.add("col-6")

    let cCinco = document.createElement("p")
    cCinco.classList.add("text-center")
    cCinco.id = "textoTipoOMS"
    _cHLeft.appendChild(cCinco)

    let _cHRight = document.createElement("div")
    _cHRight.classList.add("col-6")

    let cTres = document.createElement("p")
    cTres.classList.add("text-center")
    cTres.id = "tituloGraficoDinamico"
    _cHRight.appendChild(cTres)

    _cHead.appendChild(_cHLeft)
    _cHead.appendChild(_cHRight)
    _cDos.appendChild(_cHead)

    let cCuatro = document.createElement("div")
    cCuatro.id = "graficoPFEDinamico"
    _cDos.appendChild(cCuatro)
    //_cDos.appendChild(crearGrafico())
    _c.appendChild(_cDos)

    return _c

}

function generarDatos(){

    let datos = '<div class="row"><div class="col-12"><label for="unounouno">Edad Gestacional</label></div><div class="col-6"><div class="form-group"><label for="cuacuacua">Semanas</label>'

    datos += '<select class="form-control" id="cuacuacua"></select>'

    datos += '</div></div><div class="col-6"><div class="form-group"><label for="papapapa">Dias</label>'
    datos += '<select class="form-control" id="papapapa"></select>'

    datos += '</div></div></div><div class="row"><div class="col-6"><div class="form-group"><label for="unounouno">PFE en gramos</label>'
    datos += '<input type="number" class="form-control" id="unounouno" value="'+the("pfe").value+'">'

    datos += '</div></div><div class="col-6"><div class="form-group"><label for="dosdosdos">Percentil de PFE</label>'
    datos += '<input type="number" class="form-control text-danger" id="dosdosdos" disabled></div></div></div>'

    datos += '<label for="sexsexsex">Sexo Fetal</label><br><div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-outline-secondary active"><input type="radio" name="sexsexsex" id="option1" value="" checked > Desconocido</label><label class="btn btn-outline-secondary"><input type="radio" name="sexsexsex" id="option2" value="men"> Masculino</label><label class="btn btn-outline-secondary"><input type="radio" name="sexsexsex" id="option3" value="wom"> Femenino</label></div><div class="row mt-3 justify-content-md-center"><div class="col-10 mb-2 mt-2 text-center"><img src="img/PFE.png" alt="letrero" class="img-fluid"><a class="btn btn-outline-secondary active" href="#ecoDoppler" id="goto.doppler.grafico">Flujometría Doppler Fetal</a></div></div>'

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
            name: 'Pct 97,5',
            dashStyle: "Dot",
            marker: { enabled: false, },
            data: []
        },{
            type: "line",
            name: 'Pct 95',
            marker: { enabled: false },
            data: []
        },{
            type: "line",
            name: 'Pct 90',
            marker: { enabled: false },
            data: []
        },{
            type: "line",
            name: 'Pct 75',
            marker: { enabled: false },
            data: []
        },{
            type: "line",
            name: 'Pct 50',
            dashStyle: "Dot",
            marker: {enabled: false},
            data: []
        },{
            type: "line",
            name: 'Pct 25',
            dashStyle: "Dot",
            marker: {enabled: false},
            data: []
        },{
            type: "line",
            name: 'Pct 10',
            dashStyle: "Dot",
            marker: {enabled: false},
            data: []
        },{
            type: "line",
            name: 'Pct 5',
            dashStyle: "Dot",
            marker: {enabled: false},
            data: []
        },{
            type: "line",
            name: 'Pct 2,5',
            dashStyle: "Dot",
            marker: {enabled: false},
            data: []
        }]
    }

    _highcharts.series[8].data = _grafico.valores.uno
    _highcharts.series[7].data = _grafico.valores.dos
    _highcharts.series[6].data = _grafico.valores.tres
    _highcharts.series[5].data = _grafico.valores.cuatro
    _highcharts.series[4].data = _grafico.valores.cinco
    _highcharts.series[3].data = _grafico.valores.seis
    _highcharts.series[2].data = _grafico.valores.siete
    _highcharts.series[1].data = _grafico.valores.ocho
    _highcharts.series[0].data = _grafico.valores.nueve
    _highcharts.xAxis.categories = _grafico.semanas
    _highcharts.title.text = "<small>PFE = " + the("pfe").value + " grs. percentil " +the("pfePctRpt").value + "</small>";

    return Highcharts.chart(_highcharts);

}

function modalx(){

    let id = uuidv4x();
    let titulo = uuidv4x();
    let contenido = uuidv4x();
    let _buttonID = uuidv4x();
    let _button = "";

    let _dive = document.createElement("div")
    _dive.classList.add("modal", "fade")
    _dive.tabindex = "-1"
    _dive.role = "dialog"
    _dive.id = id

    let _divw = document.createElement("div")
    _divw.classList.add("modal-dialog", "modal-lg", "modal-dialog-scrollable")
    _divw.role = "document"

    let _divx = document.createElement("div")
    _divx.classList.add("modal-content")
    _divx.id = contenido

    let _divz = document.createElement("div")
    _divz.classList.add("modal-header")
    _divz.id = contenido

    let _divv = document.createElement("h6")
    _divv.classList.add("modal-title")
    _divv.innerText = "Modal title"
    _divv.id = titulo

    _divz.appendChild(_divv)
    _divx.appendChild(_divz)

    let _divy = document.createElement("div")
    _divy.classList.add("modal-body")
    _divy.id = contenido

    _divx.appendChild(_divy)

    let _footer = document.createElement("div")
    _footer.classList.add("modal-footer")

    let _mensaje = document.createElement("p")
    _mensaje.innerText = "El software tiene por objetivo favorecer análisis preliminar de datos obtenidos en exámen ecográfico, la interpretación clínica de los mismos, inicialmente es responsabilidad exclusiva de quien realiza y certifica este documento."
    _footer.appendChild(_mensaje)
    
    if (typeof button !== typeof undefined){
        _button = document.createElement("button")
        _button.classList.add("btn", "wetrust")
        _button.type = "button"
        _button.dataset.modal = id
        _button.id = _buttonID
        _button.textContent = button

        _footer.appendChild(_button)
    }

    _button = document.createElement("button")
    _button.classList.add("btn", "btn-outline-secondary", "active")
    _button.type = "button"
    _button.dataset.dismiss = "modal"
    _button.dataset.bsDismiss = "modal"
    _button.textContent = "Volver"

    _footer.appendChild(_button)

    _divx.appendChild(_footer)
    _divw.appendChild(_divx)
    _dive.appendChild(_divw)

    let resultado ={ id: id, titulo: titulo, contenido: contenido, button: _button, modal: _dive }

    return resultado;

}

function uuidv4x() {
    //genera un uuid
    let uid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )

    // genera infinitamente uuid mientras no comience con una letra
    if (isNaN(uid.charAt(0))){
        return uid
    }else{
        return uuidv4x()
    }
}

export function appPesoEG(){
    var modal = modalx();
    modal.modal.children[0].children[0].children[1].appendChild(contenedor());

    modal.modal.children[0].classList.remove("modal-lg")
    modal.modal.children[0].style.cssText = "max-width:1300px;"
    modal.modal.children[0].children[0].children[0].children[0].innerHTML = "Peso Fetal Estimado (PFE) por formula de Hadlock-3 <small>(CC CA LF)</small> y categorizado mediante gráfica de la OMS";

    return modal
}