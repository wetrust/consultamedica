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
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoDbpView').highcharts({
       title: {
           text: 'DBP',
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
           tickPositions: [10,30, 50, 72, 90, 114]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: '(-) 2DE',
           marker: {enabled: false},
           data: [14,17,19,25,29,33,34,38,41,43,46,49,52,54,57,61,63,65,69,69,74,74,77,78,80,83,85,87]
       }, {
           type: "line",
           name: 'DE',
           marker: { enabled: false },
           data: [20,23,26,30,35,38,40,44,46,49,52,56,59,62,64,68,70,73,76,78,81,83,85,86,87,90,91,94]
       }, {
            type: "line",
            name: '(+) 2DE',
            marker: { enabled: false },
            data: [25,29,33,35,41,42,46,50,52,56,59,63,66,70,71,75,77,81,83,87,88,91,94,95,97,99,102,104]        
       }, {
           type: "line",
           name: 'DBP',
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
               var dbp = $("#dbp").val();
               dbp = dbp.toString();
               dbp = dbp.replace(",", ".");
               dbp = parseFloat(dbp);
                   
               data.push({
                   y: dbp,
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
$( '#graficoCc' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico CC");
    $('#popupBody').html("<div id='graficoCcView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCcView').highcharts({
       title: {
           text: 'Circunferencia de Cráneo',
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

               var cc = $("#cc").val();
               cc = cc.toString();
               cc = cc.replace(",", ".");
               cc = parseFloat(cc);

               data.push({
                   y: cc,
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
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
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

               var ca = $("#ca").val();
               ca = ca.toString();
               ca = ca.replace(",", ".");
               ca = parseFloat(ca);

               data.push({
                   y:ca,
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
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoLfView').highcharts({
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
               var edadGest = parseInt(localStorage.eg) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({ y: 0, });
               }
               
               var lf = $("#lf").val();
               lf = lf.toString();
               lf = lf.replace(",", ".");
               lf = parseFloat(lf);
               data.push({
                   y: lf,
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
$( '#graficoLh' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico LH");
    $('#popupBody').html("<div id='graficoLhView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoLhView').highcharts({
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
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 12; i <= edadGest; i++) {
                        data.push({ y: 0, });
                    }
 
                    var lh = $("#lh").val();
                    lh = lh.toString();
                    lh = lh.replace(",", ".");
                    lh = parseFloat(lh);
                        
                    data.push({
                        y: lh,
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
$( '#graficoCerebelo' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Cerebelo");
    $('#popupBody').html("<div id='graficoCerebeloView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCerebeloView').highcharts({
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
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 15; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }

                   var cerebelo = $("#cerebelo").val();
                   cerebelo = cerebelo.toString();
                   cerebelo = cerebelo.replace(",", ".");
                   cerebelo = parseFloat(cerebelo);

                    data.push({
                        y: cerebelo,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoLcn' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico LCN");
    $('#popupBody').html("<div class='row'><div class='col'><div id='graficoLcnBaseView'></div></div><div class='col'><div id='graficoLcnView'></div></div>");
        
    var egLcn = parseFloat($("input[name='eg']").val());
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoLcnBaseView').highcharts({
        title: {
            text: 'LCN 6 a 15 semanas',
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
            data: [0.26, 0.77, 1.4, 2.05, 2.62,3.55, 4.68, 5.82, 6.98, 8.02],
            dashStyle: 'shortdot'
        }, {
            name: 'Media',
            type: "line",
            marker: { enabled: false },
            data: [0.38, 0.89, 1.54, 2.25, 2.95,4.05, 5.29, 6.65, 7.90, 9.01]
        }, {
            name: '(+) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.53, 1.04, 1.71, 2.49, 3.32,4.64, 6.08, 7.57, 8.91, 10.01],
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
                var egLcn2 = parseInt(localStorage.eg);
                var lcn = $("#lcn").val();
                lcn = lcn.toString();
                lcn = lcn.replace(",", ".");
                lcn = parseFloat(lcn) / 10;

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
                    if (lcnegx[i] >= egLcn2) {
                        if (flag == false) {
                        data.push({
                            y: lcn,
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
        
    if (egLcn < 10){
            $('#graficoLcnView').highcharts({
                title: {
                    text: 'LCN semana 9',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['6', '7', '8', '9']
                },
                yAxis: {
                    title: {
                        text: 'Milimetros (mm)'
                    },
                    tickPositions: [0.2, 1.1, 2.2, 3.3]
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
                    data: [0.26, 0.77, 1.4, 2.05],
                    dashStyle: 'shortdot'
                }, {
                    name: 'Media',
                    type: "line",
                    marker: { enabled: false },
                    data: [0.38, 0.89, 1.54, 2.25]
                }, {
                    name: '(+) 2DE',
                    type: "line",
                    marker: { enabled: false },
                    data: [0.53, 1.04, 1.71, 2.49],
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
                        egLcn = parseInt(egLcn);
                        var lcn = $("#lcn").val();
                        lcn = lcn.toString();
                        lcn = lcn.replace(",", ".");
                        lcn = parseFloat(lcn) / 10;

                        var lcnegx = [];
                        var flag = false;

                        lcnegx[1] = 6;
                        lcnegx[2] = 7;
                        lcnegx[3] = 8;
                        lcnegx[4] = 9;

                        for (i = 1; i <= 4; i++) {
                            if (lcnegx[i] >= egLcn) {
                                if (flag == false) {
                                data.push({
                                    y: lcn,
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
    }
    else if (egLcn < 11){
            $('#graficoLcnView').highcharts({
                title: {
                    text: 'LCN semana 10',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['10',  '10,1', '10,2', '10,3', '10,4', '10,5', '10,6']
                },
                yAxis: {
                    title: {
                        text: 'Milimetros (mm)'
                    },
                    tickPositions: [1.1, 2.2, 3.3, 4.4, 5.5]
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
                    data: [2.62,2.75,2.85,2.95,3.11,3.25,3.45],
                    dashStyle: 'shortdot'
                }, {
                    name: 'Media',
                    type: "line",
                    marker: { enabled: false },
                    data: [2.95,3.10,3.25,3.40,3.55,3.70,3.9]
                }, {
                    name: '(+) 2DE',
                    type: "line",
                    marker: { enabled: false },
                    data: [3.32,3.55,3.68,3.9,4.05,4.25,4.45],
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
                        var lcn = $("#lcn").val();
                        lcn = lcn.toString();
                        lcn = lcn.replace(",", ".");
                        lcn = parseFloat(lcn) / 10;

                        var lcnegx = [];
                        var flag = false;

                        lcnegx[1] = 10;
                        lcnegx[2] = 10.1;
                        lcnegx[3] = 10.2;
                        lcnegx[4] = 10.3;
                        lcnegx[5] = 10.4;
                        lcnegx[6] = 10.5;
                        lcnegx[7] = 10.6;

                        for (i = 1; i <= 7; i++) {
                            if (lcnegx[i] >= egLcn) {
                                if (flag == false) {
                                data.push({
                                    y: lcn,
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
    }
    else if (egLcn < 12){
            $('#graficoLcnView').highcharts({
                title: {
                    text: 'LCN semana 11',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['11','11.1','11.2','11.3','11.4','11.5','11.6']
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
                    data: [3.55,3.75,3.85,4,4.2,4.4,4.55],
                    dashStyle: 'shortdot'
                }, {
                    name: 'Media',
                    type: "line",
                    marker: { enabled: false },
                    data: [4.05,4.2,4.38,4.58,4.8,4.95,5.15]
                }, {
                    name: '(+) 2DE',
                    type: "line",
                    marker: { enabled: false },
                    data: [4.64,4.8,5,5.24,5.44,5.64,5.84],
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
                        var lcn = $("#lcn").val();
                        lcn = lcn.toString();
                        lcn = lcn.replace(",", ".");
                        lcn = parseFloat(lcn) / 10;

                        var lcnegx = [];
                        var flag = false;

                        lcnegx[1] = 11;
                        lcnegx[2] = 11.1;
                        lcnegx[3] = 11.2;
                        lcnegx[4] = 11.3;
                        lcnegx[5] = 11.4;
                        lcnegx[6] = 11.5;
                        lcnegx[7] = 11.6;

                        for (i = 1; i <= 7; i++) {
                            if (lcnegx[i] >= egLcn) {
                                if (flag == false) {
                                data.push({
                                    y: lcn,
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
            
    }
    else if (egLcn < 13){
            $('#graficoLcnView').highcharts({
                title: {
                    text: 'LCN semana 12',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['12', '12.1', '12.2', '12.3', '12.4', '12.5', '12.6']
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
                    data: [4.68,4.87,5.02,5.2,5.4,5.52,5.7],
                    dashStyle: 'shortdot'
                }, {
                    name: 'Media',
                    type: "line",
                    marker: { enabled: false },
                    data: [5.29,5.5,5.7,5.9,6.1,6.3,6.5]
                }, {
                    name: '(+) 2DE',
                    type: "line",
                    marker: { enabled: false },
                    data: [6.08,6.28,6.5,6.7,6.90,7.15,7.35],
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
                        var egLcn = parseInt(localStorage.eg);
                        var lcn = $("#lcn").val();
                        lcn = lcn.toString();
                        lcn = lcn.replace(",", ".");
                        lcn = parseFloat(lcn) / 10;

                        var lcnegx = [];
                        var flag = false;

                        lcnegx[1] = 12;
                        lcnegx[2] = 12.1;
                        lcnegx[3] = 12.2;
                        lcnegx[4] = 12.3;
                        lcnegx[5] = 12.4;
                        lcnegx[6] = 12.5;
                        lcnegx[7] = 12.6;


                        for (i = 1; i <= 7; i++) {
                            if (lcnegx[i] >= egLcn) {
                                if (flag == false) {
                                data.push({
                                    y: lcn,
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
    }
    else if (egLcn < 14){
            $('#graficoLcnView').highcharts({
                title: {
                    text: 'LCN semana 13',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['13', '13.1', '13.2', '13.3', '13.4', '13.5', '13.6']
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
                    data: [5.82,6,6.15,6.29,6.45,6.65,6.85],
                    dashStyle: 'shortdot'
                }, {
                    name: 'Media',
                    type: "line",
                    marker: { enabled: false },
                    data: [6.65,6.85,7,7.15,7.3,7.5,7.67]
                }, {
                    name: '(+) 2DE',
                    type: "line",
                    marker: { enabled: false },
                    data: [7.57,7.78,7.98,8.15,8.4,8.55,8.75],
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
                        var egLcn = parseInt(localStorage.eg);
                        var lcn = $("#lcn").val();
                        lcn = lcn.toString();
                        lcn = lcn.replace(",", ".");
                        lcn = parseFloat(lcn) / 10;

                        var lcnegx = [];
                        var flag = false;

                        lcnegx[1] = 13;
                        lcnegx[2] = 13.1;
                        lcnegx[3] = 13.2;
                        lcnegx[4] = 13.3;
                        lcnegx[5] = 13.4;
                        lcnegx[6] = 13.5;
                        lcnegx[7] = 13.6;

                        for (i = 1; i <= 7; i++) {
                            if (lcnegx[i] >= egLcn) {
                                if (flag == false) {
                                data.push({
                                    y: lcn,
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
    }
    else if (egLcn < 15){
            $('#graficoLcnView').highcharts({
                title: {
                    text: 'LCN semana 14',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['14', '14.1', '14.2', '14.3', '14.4', '14.5', '14.6', '15']
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
                    data: [6.98,7.12,7.24,7.39,7.56,7.7,7.87,8.02],
                    dashStyle: 'shortdot'
                }, {
                    name: 'Media',
                    type: "line",
                    marker: { enabled: false },
                    data: [7.9,8.05,8.2,8.35,8.5,8.7,8.87,9.01]
                }, {
                    name: '(+) 2DE',
                    type: "line",
                    marker: { enabled: false },
                    data: [8.91,9.11,9.24,9.4,9.55,9.7,9.87,10.01],
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
                        var lcn = $("#lcn").val();
                        lcn = lcn.toString();
                        lcn = lcn.replace(",", ".");
                        lcn = parseFloat(lcn) / 10;

                        var lcnegx = [];
                        var flag = false;

                        lcnegx[1] = 14;
                        lcnegx[2] = 14.1;
                        lcnegx[3] = 14.2;
                        lcnegx[4] = 14.3;
                        lcnegx[5] = 14.4;
                        lcnegx[6] = 14.5;
                        lcnegx[7] = 14.6;
                        lcnegx[8] = 15;

                        for (i = 1; i <= 8; i++) {
                            if (lcnegx[i] >= egLcn) {
                                if (flag == false) {
                                data.push({
                                    y: lcn,
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
    }
    $('#popupGenerico').modal('show');
});

$( '#graficoSaco' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Saco");
    $('#popupBody').html("<div id='graficoSacoView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoSacoView').highcharts({
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
                     var edadGest = parseInt(localStorage.eg);

                     var saco = $("#saco").val();
                     saco = saco.toString();
                     saco = saco.replace(",", ".");
                     saco = parseFloat(saco) / 10;
                     
                     for (i = 0; i <= 27; i++) {

                         if (categories[i] == edadGest){
                              data.push({
                                   y: saco,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoAud' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Arteria Uterina Derecha");
    $('#popupBody').html("<div id='graficoArtUtDerView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoArtUtDerView').highcharts({
        title: {
            text: 'IP Arterias Uterinas Derecha',
            x: -20,
                style: {
            fontSize: '10px'
        }
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
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    var aud = $("#aud").val();
                    aud = aud.toString();
                    aud = aud.replace(",", ".");
                    aud = parseFloat(aud);
                    
                    data.push({
                            y: aud,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoAui' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Arteria Uterina Izquierda");
    $('#popupBody').html("<div id='graficoArtUtIzqView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoArtUtIzqView').highcharts({
        title: {
            text: 'IP Arterias Uterinas Izquierda',
            x: -20,
                style: {
            fontSize: '10px'
        }
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
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    
                    var aui = $("#aui").val();
                    aui = aui.toString();
                    aui = aui.replace(",", ".");
                    aui = parseFloat(aui);
                    
                    data.push({
                            y: aui,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoAu' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Promedio Arteria Uterinas");
    $('#popupBody').html("<div id='graficoArtUtView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoArtUtView').highcharts({
        title: {
            text: 'IP Promedio Arteria Uterinas',
            x: -20,
                style: {
            fontSize: '10px'
        }
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
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    var auprom = $("#auprom").val();
                    auprom = auprom.toString();
                    auprom = auprom.replace(",", ".");
                    auprom = parseFloat(auprom);
                    
                    data.push({
                            y: auprom,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoIpau' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico IP Arteria Umbilical");
    $('#popupBody').html("<div id='graficoIpauView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoIpauView').highcharts({
         title: {
             text: 'IP Arteria Umbilical **',
             x: -20, //center
                 style: {
            fontSize: '10px'
        }
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
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 var ipau = $("#ipau").val();
                 ipau = ipau.toString();
                 ipau = ipau.replace(",", ".");
                 ipau = parseFloat(ipau);
                 
                 data.push({
                     y: ipau,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoIpacm' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico IP Arteria C. Media");
    $('#popupBody').html("<div id='graficoIpacmView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoIpacmView').highcharts({
        title: {
             text: 'IP Arteria Cerebral Media **',
             x: -20,
                style: {
            fontSize: '10px'
        }
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
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                     
                 var ipacm = $("#ipacm").val();
                 ipacm = ipacm.toString();
                 ipacm = ipacm.replace(",", ".");
                 ipacm = parseFloat(ipacm);
                     
                 data.push({
                     y: ipacm,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoCcp' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Cuociente Cerebro Placentario");
    $('#popupBody').html("<div id='graficoCcpView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCcpView').highcharts({
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
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 var ccp = $("#ccp").val();
                 ccp = ccp.toString();
                 ccp = ccp.replace(",", ".");
                 ccp = parseFloat(ccp);
                 
                 data.push({
                     y: ccp,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoDv' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Ductus Venoso");
    $('#popupBody').html("<div id='graficoDvView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoDvView').highcharts({
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
            title: { text: 'Valor IP' },
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
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 20; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    var dv = $("#dv").val();
                    dv = dv.toString();
                    dv = dv.replace(",", ".");
                    dv = parseFloat(dv);
                    
                    data.push({
                            y: dv,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoPFE' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Peso Fetal Estimado");
    $('#popupBody').html("<div id='graficoPesoView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoPesoView').highcharts({
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
               var edadGest = parseInt(localStorage.eg) -1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseFloat($('#pfe').val()),
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
    $('#popupGenerico').modal('show');
});

$( '#graficoCCCA' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Relación Cráneo Abdómen (CC/CA)");
    $('#popupBody').html("<div id='graficoCCCAView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCCCAView').highcharts({
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
               var edadGest = parseInt(localStorage.eg) -1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseFloat($('#ccca').val()),
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
    $('#popupGenerico').modal('show');
});

$( '#graficoBVM' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico BVM");
    $('#popupBody').html("<div id='graficoBVMView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoBVMView').highcharts({
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
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 16; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    
                    var bvm = $("#bvm").val();
                    bvm = bvm.toString();
                    bvm = bvm.replace(",", ".");
                    bvm = parseFloat(bvm);
                    
                    data.push({
                            y: bvm,
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
    $('#popupGenerico').modal('show');
});

$( '#graficoILA' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico ILA");
    $('#popupBody').html("<div id='graficoILAView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoILAView').highcharts({
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
               var edadGest = parseInt(localStorage.eg) -1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               var ila = $("#ila").val();
               ila = ila.toString();
               ila = ila.replace(",", ".");
               ila = parseFloat(ila);
               
               data.push({
                   y: ila,
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
    $('#popupGenerico').modal('show');
});

$( '#infDoppler1' ).on( 'click', function() {
    $('#popupTitle').html("Gráfica para evaluación de la flujometría doppler materno fetal básica");
    $( '#impDoppler1').remove();
    $('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler1'>Ver Impresion</button>");
    var stringGraficos = "<span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none'></span><h4 class='text-center d-none mt-2'>Gráfica para evaluación de la flujometría doppler materno fetal básica</h4><div class='row'><div class='col'><div id='graficoIpArtUtView'></div></div><div class='col'><div id='graficoIpArtUmbView'></div></div></div><div class='row'><div class='col'><div id='graficoIpArtCMView'></div></div><div class='col'><div id='graficoIpCCPView'></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:12px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32<br>** Referencia para Doppler de arteria umbilical, C Media y CCP Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127<br><strong>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
    var comentarios = "";
    if ($('#auprom').val() > 0){
	comentarios = 'Flujometria doppler materno promedio de arterias uterinas IP = ' + $('#auprom').val() + '<br />';
    }
    if ($('#ipau').val() > 0){
	comentarios = comentarios + 'Flujometria doppler fetal<br />';
    }
	
    comentarios = comentarios + $('#comentarios-eco-doppler-generico').val().replace(/\r\n|\r|\n/g,"<br />");
    stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);
        
    $('#popupBody').html(stringGraficos);
    $( '#impDoppler1').on("click", function(){
      imprSelec("popupBody");
    });
    $( '#impEcoObsSegTrim2').remove();
    $( '#impEcoObsSegTrim1').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    //$('#graficoIpArtUtView').highcharts({
    graficoUno = Highcharts.chart('graficoIpArtUtView', {
            chart: {
            height: 250
        },
        title: {
            text: 'IP Promedio Arteria Uterinas *',
            x: -20,
                 style: {
            fontSize: '14px'
        }
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
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
                name: 'Promedio Uterinas',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
            data: (function () {
                    // generate an array of random data
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    
                    var auprom = $("#auprom").val();
                    auprom = auprom.toString();
                    auprom = auprom.replace(",", ".");
                    auprom = parseFloat(auprom);
                    
                    data.push({
                            y: auprom,
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
    
    //$('#graficoIpArtUmbView').highcharts({
    graficoDos = Highcharts.chart('graficoIpArtUmbView', {
            chart: {
            height: 250
        },
         title: {
             text: 'IP Arteria Umbilical **',
             x: -20, //center
                  style: {
            fontSize: '14px'
        }
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
         legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
         credits: { enabled: false },
         series: [{
             type: "line",
             name: 'Pct. 5',
                 dashStyle: "Dot",
             marker: { enabled: false },
             data: [0.97,0.95,0.94,0.92,0.9,0.89,0.87,0.85,0.82,0.8,0.78,0.75,0.73,0.7,0.67,0.65,0.62,0.58,0.55,0.52,0.49]
         }, {
             type: "line",
             name: 'Pct. 95',
                 dashStyle: "Dot",
             marker: { enabled: false },
             data: [1.6,1.56,1.53,1.5,1.46,1.43,1.4,1.37,1.35,1.32,1.29,1.27,1.25,1.22,1.2,1.18,1.16,1.14,1.13,1.11,1.09]
         }, {
             type: "line",
             name: 'Arteria Umbilical',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 var ipau = $("#ipau").val();
                 ipau = ipau.toString();
                 ipau = ipau.replace(",", ".");
                 ipau = parseFloat(ipau);
                 
                 data.push({
                     y: ipau,
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
    //$('#graficoIpArtCMView').highcharts({
    graficoTres = Highcharts.chart('graficoIpArtCMView', {
            chart: {
            height: 250
        },
        title: {
             text: 'IP Arteria Cerebral Media **',
             x: -20,
                 style: {
            fontSize: '14px'
        }
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
         legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
         credits: {
             enabled: false
         },
         series: [{
             type: "line",
             name: 'Pct. 5',
                 dashStyle: "Dot",
             marker: { enabled: false },
             data: [1.24,1.29,1.34,1.37,1.4,1.43,1.44,1.45,1.45,1.44,1.43,1.41,1.38,1.34,1.3,1.25,1.19,1.13,1.05,0.98,0.89]
         }, {
             type: "line",
             name: 'Pct. 95',
                 dashStyle: "Dot",
             marker: { enabled: false },
             data: [1.98,2.12,2.25,2.36,2.45,2.53,2.59,2.63,2.66,2.67,2.67,2.65,2.62,2.56,2.5,2.41,2.31,2.2,2.07,1.92,1.76]
         }, {
             type: "line",
             name: 'Arteria C. Media',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 var data = [];
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }

                 var ipacm = $("#ipacm").val();
                 ipacm = ipacm.toString();
                 ipacm = ipacm.replace(",", ".");
                 ipacm = parseFloat(ipacm);

                 data.push({
                     y: ipacm,
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
    //$('#graficoIpCCPView').highcharts({
    graficoCuatro = Highcharts.chart('graficoIpCCPView', {
            chart: {
            height: 250
        },
         title: {
             text: 'IP de CCP (Indice ACM / AU) **',
             x: -20, //center
                  style: {
            fontSize: '14px'
        }
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
         legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
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
             name: 'Cuociente CP.',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (function () {
                 // generate an array of random data
                 var data = [];
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }

                 var ccp = $("#ccp").val();
                 ccp = ccp.toString();
                 ccp = ccp.replace(",", ".");
                 ccp = parseFloat(ccp);

                 data.push({
                     y: ccp,
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
    $('#popupGenerico').modal('show');
});

$( '#infDoppler2' ).on( 'click', function() {
    $('#popupTitle').html("Gráfica crecimiento intrauterino, Peso Fetal Estimado + Flujometría Doppler - Fetal");
    $( '#impDoppler2').remove();
    $('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler2'>Ver Impresion</button>");
    $('#popupBody').html("<span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none'></span><h4 class='text-center d-none mt-2'>Gráfica crecimiento intrauterino, Peso Fetal Estimado + Flujometría Doppler - Fetal</h4><hr class='d-none'><div class='row'><div class='col'><div id='graficoInfPFEView'></div></div><div class='col'><div id='graficoInfIpArtUmbView'></div></div></div><div class='row'><div class='col'><div id='graficoInfIpArtCMView'></div></div><div class='col'><div id='graficoInfIpCCPView'></div></div></div><div class='row' id='lineclear'><div class='col'><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Referencia evaluación de crecimiento fetal según gráfica de Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad entre pct. 10 a 90)<br>** Referencia para Doppler Fetal: Baschat AA, Gembruch U. the cerebroplacental Doppler ratio revisited. Ultrasound Obstet. Ginecol. 2003; 21: 124 - 127<br><strong>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>");
    $( '#impDoppler2').on("click", function(){
      imprSelec("popupBody");
    });
    $( '#impEcoObsSegTrim2').remove();
    $( '#impEcoObsSegTrim1').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler1').remove();
    $('#graficoInfPFEView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Peso Fetal Estimado *',
           x: -20 //center
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
               var edadGest = parseInt(localStorage.eg) -1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseFloat($('#pfe').val()),
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
    $('#graficoInfIpArtUmbView').highcharts({
            chart: {
            height: 250
        },
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
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat($('#ipau').val()),
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
    $('#graficoInfIpArtCMView').highcharts({
            chart: {
            height: 250
        },
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
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat($('#ipacm').val()),
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
    $('#graficoInfIpCCPView').highcharts({
            chart: {
            height: 250
        },
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
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat($('#ccp').val()),
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
    $('#popupGenerico').modal('show');
});

$( '#infDoppler3' ).on( 'click', function() {
    $('#popupTitle').html("Gráfica crecimiento intrauterino, Peso Estimado + Flujometría Dopler Materno Fetal");
    $( '#impDoppler3').remove();
    $('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler3'>Ver Impresion</button>")
    $('#popupBody').html("<span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none'></span><h4 class='text-center d-none mt-2'>Gráfica crecimiento intrauterino, Peso Estimado + Flujometría Dopler Materno Fetal</h4><hr class='d-none'><div class='row'><div class='col'><div id='graficoInfDoplerPFEView'></div></div><div class='col'><div id='graficoInfDoplerIpArtUmbView'></div></div></div><div class='row'><div class='col'><div id='graficoInfDoplerArtUtView'></div></div><div class='col'><div id='graficoInfDoplerIpCCPView'></div></div></div><div class='row' id='lineclear'><div class='col'><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Referencia evaluación de crecimiento fetal según gráfica de Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad entre pct. 10 a 90)<br>** Referencia para Doppler Fetal: Baschat AA, Gembruch U. the cerebroplacental Doppler ratio revisited. Ultrasound Obstet. Ginecol. 2003; 21: 124 - 127<br>*** Referencia para arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32<br><strong>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>");
    $( '#impDoppler3').on("click", function(){
      imprSelec("popupBody");
    });
    $( '#impEcoObsSegTrim2').remove();
    $( '#impEcoObsSegTrim1').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoInfDoplerPFEView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Peso Fetal Estimado *',
           x: -20 //center
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
               var edadGest = parseInt(localStorage.eg) -1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseFloat($('#pfe').val()),
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
    $('#graficoInfDoplerIpArtUmbView').highcharts({
            chart: {
            height: 250
        },
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
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat($('#ipau').val()),
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
    $('#graficoInfDoplerArtUtView').highcharts({
            chart: {
            height: 250
        },
        title: {
            text: 'IP Promedio Arteria Uterinas',
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
                    var edadGest = parseInt(localStorage.eg) -1;

                    for (i = 10; i <= edadGest; i ++ ) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                            y: parseFloat($('#auprom').val()),
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
    $('#graficoInfDoplerIpCCPView').highcharts({
            chart: {
            height: 250
        },
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
                 var edadGest = parseInt(localStorage.eg) -1;

                 for (i = 20; i <= edadGest; i++) {
                     data.push({
                         y: 0,
                     });
                 }
                 data.push({
                     y: parseFloat($('#ccp').val()),
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
    $('#popupGenerico').modal('show');
});

$( '#infecoObsSegTrim1' ).on( 'click', function() {
    $('#popupTitle').html("Gráfica evaluación ecográfica del crecimiento fetal");
    $( '#impEcoObsSegTrim1').remove();
    $('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impEcoObsSegTrim1'>Ver Impresion</button>");
    var stringGraficos = "<span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none'></span><h4 class='text-center d-none mt-2'>Gráfica evaluación ecográfica del crecimiento fetal</h4><hr class='d-none'><div class='row'><div class='col'><div id='graficoInfecoObsSegTrimPFEView'></div></div><div class='col'><div class='row'><div class='col-12'><div id='graficoCaView'></div></div><div class='col-12'><div id='graficoBVMView'></div></div></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:10px;'><strong>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Evaluación del crecimiento fetal, según referencia propuesta por Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad pct. 10 a 90)<br>**  Circunferencia Ambominal según referencia de Hadlock y col. Radiology 152:497 - 501, 1984. (Normalidad Pct 3 a 97)<br>*** Liquido Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br><strong>Herramienta informática diseñada por Dr. Rudecindo Lagos S.  Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
    var comentarios = 'Crecimiento (peso) en percentil ' + parseInt($('#pfePctRpt').val()) + ', para gráfica de peso fetal Hadlock*<br />';
	
    var ilatxt = document.getElementById("ila").value;
    if (ilatxt > 0){
        ilatxt = " e ILA de " + ilatxt +" mm."
    }
    else{
        ilatxt = "."
    }
    var linea6 = "Líquido amniótico " + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor de " + document.getElementById("bvm").value + " mm" + ilatxt;
	
    comentarios = comentarios + linea6 + '<br />' +  $('#comentarios-eco-dos-generico').val().replace(/\r\n|\r|\n/g,"<br />");
    stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);
        
    $('#popupBody').html(stringGraficos);
    $( '#impEcoObsSegTrim1').on("click", function(){
      imprSelec("popupBody");
    });
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoInfecoObsSegTrimPFEView').highcharts({
            chart: {
            height: 512
        },
       title: {
           text: 'Peso Fetal Estimado *',
           x: -20, //center
               style: {
            fontSize: '14px'
        }
       },
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
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
               var edadGest = parseInt(localStorage.eg) -1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseFloat($('#pfe').val()),
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
    $('#graficoCaView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Circunferencia Abdominal **',
           x: -20, //center
               style: {
            fontSize: '14px'
        }
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
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
           dashStyle: "Dot",
           marker: { enabled: false },
           data: [40,50,60,72,84,97,107,119,131,141,151,161,171,181,191,200,209,218,227,236,245,253,261,269,277,285,292,299,307]
       }, {
           type: "line",
           name: 'Pct 97',
           dashStyle: "Dot",
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

               var ca = $("#ca").val();
               ca = ca.toString();
               ca = ca.replace(",", ".");
               ca = parseFloat(ca);

               data.push({
                   y:ca,
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
        
   $('#graficoBVMView').highcharts({
             chart: {
             height: 250
         },
         title: {
             text: 'BVM de Líquido Amniótico ***',
             x: -20,
                 style: {
             fontSize: '14px'
         }
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
             legend: {
             itemStyle: {
                 fontSize: '10px',
                 fontWeight:'normal'
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
             dashStyle: "Dot",
             marker: {enabled:false},
             data: [23,25,27,28,29,29,30,30,30,30,30,30,30,29,29,29,29,29,28,28,27,26,24,23,21]
         }, {
             type: "line",
             name: 'Pct. 95',
             dashStyle: "Dot",
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
                     var edadGest = parseInt(localStorage.eg) -1;
 
                     for (i = 16; i <= edadGest; i ++ ) {
                         data.push({
                             y: 0,
                         });
                     }
                     data.push({
                             y: parseFloat($('#bvm').val()),
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
    $('#popupGenerico').modal('show');
});

$( '#infecoObsSegTrim2' ).on( 'click', function() {
    $('#popupTitle').html("Gráfica Determinación Ecográfica (Tardía) de la Edad Gestacional");
    $( '#impEcoObsSegTrim2').remove();
    $('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impEcoObsSegTrim2'>Ver Impresion</button>");
    var stringGraficos = "<span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none'></span><h4 class='text-center d-none mt-2'>Gráfica Determinación Ecográfica (Tardía) de la Edad Gestacional</h4><hr class='d-none'><div class='row'><div class='col'><div id='graficoCcView'></div></div><div class='col'><div id='graficoCerebeloView'></div></div></div><div class='row'><div class='col'><div id='graficoLfView'></div></div><div class='col'><div id='graficoLhView'></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:12px;'><strong>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Para la evaluación morfológica fetal, ceñirse a recomendaciones oficiales vigentes, para Chile: Guías Perinatales MINSAL 2015<br>Ver dirección web: http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf<br>** Referencias: CC y LF Hadlock y col. 1984; LH Jeanty y col.<br>*** Diámetro cerebeloso transverso Hill LM. y col. Obstet Gynecol. 1990; 75(6) : 981-5<br>**** Referencia liq. amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br><strong>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
    var comentarios = $('#comentarios-eco-dos-generico').val().replace(/\r\n|\r|\n/g,"<br />");
    stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);
        
    $('#popupBody').html(stringGraficos);
    $( '#impEcoObsSegTrim2').on("click", function(){
      imprSelec("popupBody");
    });
    $( '#impEcoObsSegTrim1').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCcView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Circunferencia de Cráneo',
           x: -20,
               style: {
            fontSize: '14px'
        }
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
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct. 3',
           dashStyle: "Dot",
           marker: {enabled: false},
           data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
       }, {
           type: "line",
           name: 'Pct. 97',
           dashStyle: "Dot",
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
   $('#graficoCerebeloView').highcharts({
           chart: {
            height: 250
        },
            title: {
                text: 'Diámetro de Cerebelo',
                x: -20,
                    style: {
            fontSize: '14px'
        }
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
           legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: {enabled: false},
            series: [{
                type: "line",
                name: '-2DE',
                dashStyle: "Dot",
                marker: {enabled: false},
                data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44]
            }, {
                type: "line",
                name: 'media',
                dashStyle: "Dot",
                marker: {enabled: false},
                data: [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52]
            }, {
                type: "line",
                name: '+2DE',
                dashStyle: "Dot",
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
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 15; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseInt(document.getElementById("cerebelo").value),
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
    $('#graficoLfView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Largo Femoral',
           x: -20,
               style: {
            fontSize: '14px'
        }
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
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
           dashStyle: "Dot",
           marker: { enabled: false },
           data: [6,9,12,14,17,20,22,25,27,30,32,35,37,40,42,45,47,49,52,54,56,58,59,61,62,64,65,66,67]
       }, {
           type: "line",
           name: 'Pct. 97',
           dashStyle: "Dot",
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
               var edadGest = parseInt(localStorage.eg) - 1;

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
   $('#graficoLhView').highcharts({
           chart: {
            height: 250
        },
            title: {
                text: 'Largo Humeral',
                x: -20,
                    style: {
            fontSize: '14px'
        }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
           legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
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
                dashStyle: "Dot",
                marker: { enabled: false },
                data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
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
                    var edadGest = parseInt(localStorage.eg) - 1;

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
    $('#popupGenerico').modal('show');
});

$( '#graficoTallaPeso' ).on( 'click', function() {
    $('#popupTitle').html("Análisis Talla Peso según referencias postnatales");
    $('#popupBody').html("<div id='viewGraficoTallaPeso'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoTallaPeso').highcharts({
    title: {
        text: 'Análisis Talla Peso según referencias postnatales'
    },
    subtitle: {
        text: 'Alarcón y col. 2008'
    },
    xAxis: [{
        categories: ['24', '25', '26', '27', '28', '29',
            '30', '31', '32', '33', '34', '35','36','37','38','39','40','41','42'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Talla Fetal',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true,
        min:5,
        max: 55,
        tickAmount: 5

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Peso',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} kgs',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        min:5
    }],
    tooltip: {
        shared: true
    },
    credits: { enabled: false },
    series: [{
        name: 'Peso PCT90',
        type: 'spline',
        yAxis: 1,
        data: [899,966,1074,1219,1395,1597,1820,2059,2308,2562,2817,3067,3307,3532,3736,3914,4061,4173,4244],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    },{
        name: 'Peso PCT50',
        type: 'spline',
        yAxis: 1,
        data: [750,810,905,1032,1185,1361,1555,1763,1980,2202,2424,2642,2852,3049,3228,3386,3517,3618,3684],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    },{
        name: 'Peso PCT10',
        type: 'spline',
        yAxis: 1,
        data: [630,661,728,826,951,1099,1265,1446,1637,1834,2032,2263,2438,2596,2795,2903,3024,3116,3176],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    },{
        name: 'Peso',
        type: 'spline',
        yAxis: 1,
        data: (function () {
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                        data.push({ y: 0, });
                }
                data.push({
                        y: parseInt(document.getElementById("pfe").value),
                });
                for (i = edadGest + 1; i <= 41; i++) {
                        data.push({
                            y: 0,
                        });
                }
                return data;
        }()),
        dashStyle: "Dot",
        marker: { symbol: 'square' },
        lineWidth: 0,
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    }, {
        name: 'Talla PCT 90',
        type: 'spline',
        data: [34.1,35.7,37.2,38.7,40.1,41.6,43.1,44.3,45.6,46.8,47.9,49.1,49.9,50.8,51.5,52.1,52.6,52.9,53.1],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }, {
        name: 'Talla PCT 50',
        type: 'spline',
        data: [31.6,33.1,34.5,36.1,37.5,39.1,40.5,41.9,43.3,44.6,45.8,46.9,47.9,48.7,49.6,50.3,50.8,51.1,51.3],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }, {
        name: 'Talla PCT 10',
        type: 'spline',
        data: [29.8,31.1,32.3,33.6,35.1,36.5,37.7,39.1,40.5,41.8,43.1,44.2,45.3,46.3,47.2,47.9,48.5,48.8,49.1],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }, {
        name: 'Talla',
        type: 'spline',
        data: (function () {
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                        data.push({ y: 0, });
                }
                data.push({
                        y: parseInt(document.getElementById("tallaFetal").value),
                });
                for (i = edadGest + 1; i <= 41; i++) {
                        data.push({
                            y: 0,
                        });
                }
                return data;
        }()),
        dashStyle: "Dot",
        marker: { symbol: 'square' },
        lineWidth: 0,
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }]
});
    $('#popupGenerico').modal('show');
});

$( '#graficoIPN' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico IPN Referencia Neonatal SOCHIPE");
    $('#popupBody').html("<div id='viewGraficoIPN'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoIPN').highcharts({
        title: {
            text: 'IPN / EG',
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
            title: { text: '' },
            tickPositions: [1, 1.6, 2.2, 2.8, 3.4, 4]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories:
            ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 10',
            marker: { enabled: false },
            data: [1.79, 1.83, 1.87, 1.91, 1.95, 1.99, 2.04, 2.08, 2.12, 2.16, 2.2, 2.25, 2.29, 2.33, 2.37, 2.41, 2.45, 2.5, 2.54]
        }, {
            type: "line",
            name: 'Pct. 90',
            marker: { enabled: false },
            data: [2.54,2.57,2.59,2.62,2.65,2.68,2.71,2.74,2.77,2.8,2.83,2.86,2.89,2.92,2.95,2.98,3.01,3.04,3.07]
        }, {
            type: "line",
            name: 'IPN',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseFloat(document.getElementById("ipn").value),
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
            $('#popupGenerico').modal('show');
});

$( '#graficoTalla' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Talla Fetal Estimada Referencia Neonatal SOCHIPE");
    $('#popupBody').html("<div id='viewGraficoTalla'></div><p><small>Talla (Formula = lf * 0.55 + 9.6) </small></p>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoTalla').highcharts({
        title: {
            text: 'Talla Fetal estimada',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'mm' },
            tickPositions: [25, 35, 45, 55]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Talla PCT 90',
            marker: { enabled: false },
            data:  [34.1,35.7,37.2,38.7,40.1,41.6,43.1,44.3,45.6,46.8,47.9,49.1,49.9,50.8,51.5,52.1,52.6,52.9,53.1]
        }, {
            type: "line",
            name: 'Talla PCT 50',
            marker: { enabled: false },
            data: [31.6,33.1,34.5,36.1,37.5,39.1,40.5,41.9,43.3,44.6,45.8,46.9,47.9,48.7,49.6,50.3,50.8,51.1,51.3]
        }, {
            type: "line",
            name: 'Talla PCT 10',
            marker: { enabled: false },
            data: [29.8,31.1,32.3,33.6,35.1,36.5,37.7,39.1,40.5,41.8,43.1,44.2,45.3,46.3,47.2,47.9,48.5,48.8,49.1]
        }, {
            type: "line",
            name: 'talla',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseInt(document.getElementById("tallaFetal").value),
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
            $('#popupGenerico').modal('show');
});

$( '#graficopsmACM' ).on( 'click', function() {
    $('#popupTitle').html("Gráfico Pick sistólico máximo de ACM");
    $('#popupBody').html("<div id='viewGraficopsmACM'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    var medida = document.getElementById("psmACM").value;
    medida = medida.toString();
    medida = medida.replace(",", ".");
    medida = parseFloat(medida) * 100;
                                
$('#viewGraficopsmACM').highcharts({
        title: {
            text: 'Pick sistólico máximo de ACM',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'cm/s' },
            tickPositions: [20, 40, 60, 80, 100]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Valor de la Media',
            marker: { enabled: false },  
            data:  [23.2,24.3,25.5,26.7,27.9,29.3,30.7,32.1,33.6,35.2,36.9,38.7,40.5,42.4,44.4,46.5,48.7,51.1,53.5,56,58.7,61.5,64.4]
        }, {
            type: "line",
            name: 'Anemia leve',
            marker: { enabled: false },
            data: [29.9, 31.1, 32.8,34.5,36,37.8,39.5,41.5,43.3,45.6,47.6,50.4,52.2,55,57.3,60.1,62.9,66,69,72.8,75.7,79.8,83] 
        }, {
            type: "line",
            name: 'Anemia moderada',
            marker: { enabled: false },
            data: [34.8,36.5,38.2,39.7,41.9,44,46,48,50.4,53,55.4,58,60.9,63.5,66.6,70,73.1,76.5,80.2,84,88,92.5,96.6]
        }, {
            type: "line",
            name: 'Pick sistólico máximo de ACM',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 18; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: medida,
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
            $('#popupGenerico').modal('show');
});
