function construirGraficos() {
        $('#graficolcn').highcharts({
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
            data: [0.26, 0.77, 1.4, 2.05, 2.75,3.65, 4.64, 5.82, 7.1, 8.02]
        }, {
            name: 'Media',
            type: "line",
            marker: { enabled: false },
            data: [0.38, 0.89, 1.54, 2.25, 3.05,4.05, 5.29, 6.65, 7.98, 9.01]
        }, {
            name: '(+) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.53, 1.04, 1.71, 2.49, 3.42,4.64, 6.12, 7.67, 9.01, 10.01]
        }]
    });
}

$( '#graficoDbp' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico DBP");
    $('#popupBody').html("<div id='graficoDbpView'></div>");
    $('#popupGenerico').modal('show')
});
$( '#graficoCc' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico CC");
    $('#popupBody').html("<div id='graficoCcView'></div>");
    $('#graficoCcView').highcharts({
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
               var edadGest = parseInt(localStorage.eg) - 1;

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
    $('#popupGenerico').modal('show')
});
$( '#graficoCa' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico CA");
    $('#popupBody').html("<div id='graficoCaView'></div>");
    $('#graficoCaView').highcharts({
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
               var edadGest = parseInt(localStorage.eg) - 1;

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
    $('#popupGenerico').modal('show')
});
$( '#graficoLf' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico LF");
    $('#popupBody').html("<div id='graficoLfView'></div>");
    $('#popupGenerico').modal('show')
});
$( '#graficoLh' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico LH");
    $('#popupBody').html("<div id='graficoLhView'></div>");
    $('#popupGenerico').modal('show')
});
$( '#graficoCerebelo' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Cerebelo");
    $('#popupBody').html("<div id='graficoCerebeloView'></div>");
    $('#popupGenerico').modal('show')
});
