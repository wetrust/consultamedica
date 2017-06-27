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