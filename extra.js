$(document).ready(function() {
    $("#pesoRN").on("keydown", function(e){
        var text = $(this).val();
        
        switch (e.which) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                if (text.toString().length > 3){
                    return false;
                }
                $("#pesoclon").html("Peso al nacer: " + this.value+ " grs.");
                break;
            case 13:
            case 8:
            case 37:
            case 39:
                break;
            default:
                return false;
        }
    });

    $("#tallaRN").on("keydown", function(e){
        var text = $(this).val();

        switch (e.which) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                if (text.toString().length > 2){
                    return false;
                }
                break;
            case 13:
            case 8:
            case 37:
            case 39:
                break;
            default:
                return false;
        }
    });

    $("#edadGestacional").change(function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));
        if ($(this).val() > max) {
            $(this).val(max);
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
        $("#graficoEstandar").trigger("click");
        $("#edadClon").html("Edad " + this[0].value + " semanas")
    });
    
    $("#pesoRN").change(function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));
        if ($(this).val() > max) {
            $(this).val(max);
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    
        if ($("#tallaRN").val() > 1) {
            var valor = $(this).val() / (Math.pow($("#tallaRN").val(), 3));
            valor = valor * 100000;
            $("#IPNRN").val(valor.toFixed(2));
        }
        $("#graficoEstandar").trigger("click");
        $("#pesoclon").html("Peso al nacer: " + this.value+ " grs.");
    });
    
    $("#tallaRN").change(function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));
        if ($(this).val() > max) {
            $(this).val(max);
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    
        if ($("#pesoRN").val() > 1) {
            var valor = $("#pesoRN").val() / (Math.pow($("#tallaRN").val(), 3));
            valor = valor * 100000;
            $("#IPNRN").val(valor.toFixed(2));
        }
        $("#graficoEstandar").trigger("click");
    });

    Highcharts.chart('grafico', {

        title: {
            text: 'M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274',
            align: "left",
            style: {
                "font-size": "12px"
            }
        },
        credits: {
            enabled: false
        },
        yAxis: {
            title: {
                text: 'Gramos'
            },
            tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                pointStart: 24
            }
        },
        colors: ['#ff3300', '#ff3300', '#000000'],
        series: [{
            name: 'Pct. 10',
            data: [640.6, 666, 728.2, 822.9, 945.7, 1092.2, 1258.2, 1439.2, 1630.8, 1828.7, 2028.6, 2226, 2416.7, 2596.2, 2760.2, 2904.2, 3024.1, 3115.3, 3173.5]
        }, {
            name: 'Pct. 90',
            data: [897.9, 963.3, 1070.6, 1214.6, 1390.1, 1592, 1815, 2053.8, 2303.4, 2558.5, 2813.9, 3064.4, 3304.7, 3529.8, 3734.4, 3913.2, 4061.2, 4173, 4243.5]
        }]
    });

$("#graficoEstandar").on('click', function() {
    RN = new RecienNacido($("#pesoRN").val(), $("#tallaRN").val(), $("#edadGestacional").val());
    if ($("#pesoRN").val() > 1) {

        if ($("#graficoEstandar").val() == 1) {
            $("#PesoPct").val("Pct. " + RN.pesoTemuco());
            $("#PesoEge").val(RN.pesoTemucoCondicion());
        } else {
            $("#PesoPct").val("Pct. " + RN.pesoChile());
            $("#PesoEge").val(RN.pesoChileCondicion());
        }
    }

    if ($("#tallaRN").val() > 1) {
        if ($("#graficoEstandar").val() == 3) {
            $("#IpnPct").val("Pct. " + RN.ipnTemuco());
            $("#IpnEge").val(RN.ipnTemucoCondicion());
        } else {
            $("#IpnPct").val("Pct. " + RN.ipnChile());
            $("#IpnEge").val(RN.ipnChileCondicion());
        }
    }

    if (this.value == 0) {
        Highcharts.chart('grafico', {
            title: {
                text: 'M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274',
                align: "left",
                style: {
                    "font-size": "12px"
                }
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: 'Gramos'
                },
                tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    pointStart: 24
                }
            },
            colors: ['#ff3300', '#ff3300', '#000000'],
            series: [{
                name: 'Pct. 10',
                data: [640.6, 666, 728.2, 822.9, 945.7, 1092.2, 1258.2, 1439.2, 1630.8, 1828.7, 2028.6, 2226, 2416.7, 2596.2, 2760.2, 2904.2, 3024.1, 3115.3, 3173.5]
            }, {
                name: 'Pct. 90',
                data: [897.9, 963.3, 1070.6, 1214.6, 1390.1, 1592, 1815, 2053.8, 2303.4, 2558.5, 2813.9, 3064.4, 3304.7, 3529.8, 3734.4, 3913.2, 4061.2, 4173, 4243.5]
            }, {
                type: "line",
                name: 'Peso',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var eg = $("#edadGestacional").val();
                    var peso = $("#pesoRN").val();

                    if (eg > 24) {
                        for (i = 24; i <= (eg - 1); i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: parseInt(peso),
                        });
                        for (i = eg + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
    } else if (this.value == 1) {
        Highcharts.chart('grafico', {
            title: {
                text: 'Lagos y col. Rev. Chilena Obtet. Ginecol. 2009; 74(4)',
                align: "left",
                style: {
                    "font-size": "12px"
                }
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: 'Gramos'
                },
                tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    pointStart: 24
                }
            },
            colors: ['#ff3300', '#ff3300', '#000000'],
            series: [{
                name: 'Pct. 10',
                data: [600, 662, 739, 830, 938, 1064, 1208, 1373, 1565, 1756, 1970, 2192, 2415, 2628, 2820, 2978, 3089, 3120, 3123]
            }, {
                name: 'Pct. 90',
                data: [800, 960, 1139, 1337, 1551, 1781, 2022, 2272, 2527, 2781, 3031, 3270, 3494, 3699, 3878, 4030, 4150, 4236, 4287]
            }, {
                type: "line",
                name: 'Peso',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var eg = $("#edadGestacional").val();
                    var peso = $("#pesoRN").val();
                    if (eg > 24) {
                        for (i = 24; i <= (eg - 1); i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: parseInt(peso),
                        });
                        for (i = eg + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
    } else if (this.value == 2) {
        Highcharts.setOptions({
            lang: {
                numericSymbols: ["k", "M", "G", "T", "P", "E"]
            }
        });
        Highcharts.chart('grafico', {
            title: {
                text: 'M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274',
                align: "left",
                style: {
                    "font-size": "14px"
                }
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: '((peso / talla)^3)*100'
                },
                tickPositions: [1, 1.6, 2.2, 2.8, 3.4, 4],
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            colors: ['#ff3300', '#ff3300', '#000000'],
            plotOptions: {
                series: {
                    pointStart: 24
                }
            },
            series: [{
                name: 'Pct. 10',
                data: [1.79, 1.83, 1.87, 1.91, 1.95, 1.99, 2.04, 2.08, 2.12, 2.16, 2.2, 2.25, 2.29, 2.33, 2.37, 2.41, 2.45, 2.5, 2.54]
            }, {
                name: 'Pct. 90',
                data: [2.54, 2.57, 2.59, 2.62, 2.65, 2.68, 2.71, 2.74, 2.77, 2.8, 2.83, 2.86, 2.89, 2.92, 2.95, 2.98, 3.01, 3.04, 3.07]
            }, {
                type: "line",
                name: 'IPN',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var eg = $("#edadGestacional").val();
                    var ipn = $("#IPNRN").val();

                    if (eg > 24) {
                        for (i = 24; i <= (eg - 1); i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: parseFloat(ipn),
                        });
                        for (i = eg + 1; i <= 43; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
    } else if (this.value == 3) {
        Highcharts.setOptions({
            lang: {
                numericSymbols: ["k", "M", "G", "T", "P", "E"]
            }
        });
        Highcharts.chart('grafico', {
            title: {
                text: 'Lagos y col. Rev. Chilena Obtet. Ginecol. 2009; 74(4)',
                align: "left",
                style: {
                    "font-size": "12px"
                }
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: '((peso / talla)^3)*100'
                },
                tickPositions: [1, 1.6, 2.2, 2.8, 3.4, 4],
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            colors: ['#ff3300', '#ff3300', '#000000'],
            plotOptions: {
                series: {
                    pointStart: 24
                }
            },
            series: [{
                name: 'Pct. 10',
                data: [1.95, 1.93, 1.92, 1.92, 1.94, 1.97, 2.01, 2.06, 2.11, 2.17, 2.23, 2.28, 2.33, 2.38, 2.41, 2.44, 2.44, 2.42, 2.39]
            }, {
                name: 'Pct. 90',
                data: [2.43, 2.44, 2.46, 2.49, 2.53, 2.57, 2.62, 2.68, 2.74, 2.79, 2.85, 2.9, 2.95, 2.99, 3.02, 3.04, 3.05, 3.04, 3.01]
            }, {
                type: "line",
                name: 'IPN',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var eg = $("#edadGestacional").val();
                    var ipn = $("#IPNRN").val();

                    if (eg > 24) {
                        for (i = 24; i <= (eg - 1); i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: parseFloat(ipn),
                        });
                        for (i = eg + 1; i <= 43; i++) {
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
});

$('#g3').click(function() {
    tipografico = 0;
    var apell = 0;
    if ($("#apellm").val() == 2) {
        apell = 1;
    } else {
        apell = $("#apellm").val();
    }
    varMama.edad = $("#em").val();
    varMama.apellido = apell;
    varMama.paridad = $("#pm").val();
    RN.sexo = $("#sn").val();
    var p90 = [0.2418159, -0.0038925, 0.0000168, -0.0130562, -0.0127872, -0.0034632, 0.0117179, 0.0021092, -0.9260631];
    var p10 = [-0.2639902, 0.0110356, -0.0001265, -0.0146183, -0.0134044, -0.0020684, 0.0092266, 0.0009001, 4.474501];
    for (i = 24; i < 43; i++) {
        x = i - 24;
        p90Pso[x] = Math.pow(10, ((i * p90[0]) + (Math.pow(i, 2) * p90[1]) + (Math.pow(i, 3) * p90[2]) + (p90[3] * $("#pm").val()) + (p90[4] * $("#sn").val()) + (p90[5] * apell) + (p90[6] * $("#imc").val()) + (p90[7] * $("#em").val()) + p90[8]));
        p10Pso[x] = Math.pow(10, ((i * p10[0]) + (Math.pow(i, 2) * p10[1]) + (Math.pow(i, 3) * p10[2]) + (p10[3] * $("#pm").val()) + (p10[4] * $("#sn").val()) + (p10[5] * apell) + (p10[6] * $("#imc").val()) + (p10[7] * $("#em").val()) + p10[8]));;
    }
    tablaPercentilesView(p10Pso,p90Pso);
    $("#PesoEgeSAj").html("Pct. Peso/edad " + RN.pesoTemuco());
    $("#PesoEgeSAjCat").html("Categoria " + RN.pesoTemucoCondicion());
    eg = RN.eg - 24;
    var tablas = new Tabla;
    var uno, dos, tres;
    uno = p90Pso[eg] - p10Pso[eg];
    dos = RN.peso - p10Pso[eg];
    tres = parseInt((80 / (uno)) * (dos)) + 10;

    $("#PesoEgeCAj").val(tres);

    if (RN.peso < p10Pso[eg]) {
        $("#PesoEgeCAjCat").val("Pequeño");
    } else if (RN.peso <= p90Pso[eg]) {
        $("#PesoEgeCAjCat").val("Adecuado");
    } else if (RN.peso > p90Pso[eg]) {
        $("#PesoEgeCAjCat").val("Grande");
    }

    $("#tituloAjusteG").addClass("d-none");
    $("#tituloAjusteAlto").html("Pct Peso sin ajuste");
    $("#tituloAjusteBajo").html("Pct. Peso con ajuste");
    Highcharts.chart('graficoAjustado', {
        title: {
            text: 'Peso/Edad gestacional ajustada por variables **',
            style: {
                "color": "#337ab7",
                "fontSize": "14px"
            }
        },
        chart: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            height: "300"
        },
        yAxis: {
            title: {
                text: ''
            },
            tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540, 4980],
            tickColor: "#337ab7",
            labels: {
                enabled: true,
                style: {
                    color: '#337ab7',
                }
            }
        },
        colors: ['#ff3300', '#ff3300', '#ff3300'],
        xAxis: {
            categories: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
            labels: {
                enabled: true,
                style: {
                    color: '#337ab7',
                }
            }
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 10',
            marker: {
                enabled: false
            },
            dashStyle: (function() {
                var estilo = 'solid';
                if (RN.ajustePequeno == true || RN.ajusteAlto == true) {
                    estilo = 'Dash';
                }
                return estilo;
            }()),
            color: (function() {
                var color = '#003d99';

                if (RN.ajusteAlto == true) {
                    color = '#ff3300';
                }
                return color;
            }()),
            data: (function() {
                var data = [];
                for (i = 24; i < 43; i++) {
                    x = i - 24;
                    data.push({
                        y: p10Pso[x],
                    });
                }
                return data;
            }())
        }, {
            type: "line",
            name: 'Pct. 90',
            marker: {
                enabled: false
            },
            dashStyle: (function() {
                var estilo = 'solid';

                if (RN.ajustePequeno == true || RN.ajusteAlto == true) {
                    estilo = 'Dash';
                }

                return estilo;
            }()),
            color: (function() {
                var color = '#003d99';

                if (RN.ajusteAlto == true) {
                    color = '#ff3300';
                }
                return color;
            }()),
            data: (function() {
                var data = [];
                for (i = 24; i < 43; i++) {
                    x = i - 24;
                    data.push({
                        y: p90Pso[x],
                    });
                }
                return data;
            }())
        }, {
            type: "line",
            name: 'Pct. peso ajustado',
            dashStyle: "Dot",
            marker: {
                symbol: 'square'
            },
            lineWidth: 0,
            data: (function() {
                var data = [];

                for (i = 24; i <= (RN.eg - 1); i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseInt(RN.peso),
                });
                for (i = RN.eg + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });
});

$('#tm').change(function() {
    varMama = new Mama($("#tm").val(), $("#pesom").val(), $("#em").val(), $('#apellm').val());
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
    $('#g3').trigger("click");
});

$('#pesom').change(function() {
    varMama = new Mama($("#tm").val(), $("#pesom").val(), $("#em").val(), $('#apellm').val());
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
    $('#g3').trigger("click");
});

$('#sn').change(function() {
    $('#g3').trigger("click");
});

$('#pm').change(function() {
    $('#g3').trigger("click");
});

$('#imc').change(function() {
    $('#g3').trigger("click");
});

$('#em').change(function() {
    $('#g3').trigger("click");
});

$('#apellm').change(function() {
    $('#g3').trigger("click");
});

$('#opt1').click(function() {
    $('#pm').val("1");
    $('#sn').val("1");
    $('#tm').val("149");
    $('#pesom').val("70");
    $('#em').val("6");
    $('#apellm').val("1");
    varMama = new Mama('149', '70', $("#em").val(), $('#apellm').val());
    varMama.talla = '149';
    varMama.peso = '70';
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
    RN.ajustePequeno = false;
    RN.ajusteAlto = false;
    $('#g3').trigger("click");
    $("#tituloAjusteG").addClass("d-none");
    $("#tituloAjusteAlto").html("Pct. peso sin ajuste");
    $("#tituloAjusteBajo").html("Pct. peso con ajuste");
});

$('#opt2').click(function() {
    $('#pm').val("0");
    $('#sn').val("0");
    $('#tm').val("170");
    $('#pesom').val("91");
    $('#em').val("6");
    $('#apellm').val("0");
    $('#tm').change();
    varMama = new Mama('170', '91', $("#em").val(), $('#apellm').val());
    varMama.talla = '170';
    varMama.peso = '91';
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
    RN.ajustePequeno = false;
    RN.ajusteAlto = true;
    $('#g3').trigger("click");
    $("#tituloAjusteG").addClass("d-none");
    $("#tituloAjusteAlto").html("Pct. peso sin ajuste");
    $("#tituloAjusteBajo").html("Pct. peso con ajuste");
});

$('#opt3').click(function() {
    $('#sn').val("1");
    $('#pm').val("1");
    $('#tm').val("149");
    $('#pesom').val("44");
    $('#em').val("1");
    $('#apellm').val("1");
    $('#tm').change();
    varMama = new Mama('149', '44', $("#em").val(), $('#apellm').val());
    varMama.talla = '149';
    varMama.peso = '44';
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
    RN.ajustePequeno = true;
    RN.ajusteAlto = false;
    $('#g3').trigger("click");
    $("#tituloAjusteG").addClass("d-none");
    $("#tituloAjusteAlto").html("Pct. peso sin ajuste");
    $("#tituloAjusteBajo").html("Pct. peso con ajuste");
});

    //cargar inputs de talla
    for (i = 135; i < 190; i++) {
        $("#tm").append('<option value="' + i +'">' + i + ' cms.</option>');
        $('#tm option[value="149"]').prop('selected', true);
    }

    //cargar inputs de peso materno
    for (i = 35; i < 140; i++) {
        $("#pesom").append('<option value="' + i +'">' + i + ' kg</option>');
        $('#pesom option[value="70"]').prop('selected', true);
    }
});


function verGraficoAjustePeso() {
    RN = new RecienNacido($("#pesoRN").val(), $("#tallaRN").val(), $("#edadGestacional").val());
    $('#opt1').trigger("click");
    $('#g3').trigger("click");
};

var RN = 0;
var Tablas = 0;
var varMama = 0;
var p90Pso = [];
var p10Pso = [];

function RecienNacido(peso = 0, talla = 0, eg = 40) {
    this.peso = peso;
    this.talla = talla;
    this.eg = eg;
    this.ipn = function ipn() {
        var valor = this.peso / (Math.pow(this.talla, 3));
        valor = valor * 100000;
        return valor.toFixed(1);
    };
    this.pesoChile = function pesoChile() {
        eg = this.eg - 24;
        var tablas = new Tabla;
        var uno = tablas.pct90PesoNacional[eg] - tablas.pct10PesoNacional[eg];
        var dos = this.peso - tablas.pct10PesoNacional[eg];
        return Math.trunc((80 / (uno)) * (dos)) + 10;
    };
    this.pesoTemuco = function pesoTemuco() {
        eg = this.eg - 24;
        var tablas = new Tabla;
        var uno = tablas.pct90PesoTemuco[eg] - tablas.pct10PesoTemuco[eg];
        var dos = this.peso - tablas.pct10PesoTemuco[eg];
        return Math.trunc(((80 / (uno)) * (dos)) + 10);
    };
    this.pesoAjustado = 0;
    this.pesoChileCondicion = function pesoChileC() {
        eg = this.eg - 24;
        var tablas = new Tabla;
        if (this.peso < tablas.pct10PesoNacional[eg]) {
            return "Pequeño";
        } else if (this.peso <= tablas.pct90PesoNacional[eg]) {
            return "Adecuado";
        } else if (this.peso > tablas.pct90PesoNacional[eg]) {
            return "Grande";
        }
    };
    this.pesoTemucoCondicion = function pesoTemucoC() {
        eg = this.eg - 24;
        var tablas = new Tabla;

        if (this.peso < tablas.pct10PesoTemuco[eg]) {
            return "Pequeño";
        } else if (this.peso <= tablas.pct90PesoTemuco[eg]) {
            return "Adecuado";
        } else if (this.peso > tablas.pct90PesoTemuco[eg]) {
            return "Grande";
        }
    };
    this.pesoAjutadoCondicion = '';
    this.ipnChile = function ipnChile() {
        var eg = this.eg - 24;
        var tablas = new Tabla;
        var uno = tablas.pct90IpnNacional[eg] - tablas.pct10IpnNacional[eg];
        var dos = this.ipn() - tablas.pct10IpnNacional[eg];
        return parseInt((80 / (uno)) * (dos)) + 10;
    };
    this.ipnTemuco = function ipnTemuco() {
        var eg = this.eg - 24;
        var tablas = new Tabla;
        var uno = tablas.pct90IpnTemuco[eg] - tablas.pct10IpnTemuco[eg];
        var dos = this.ipn() - tablas.pct10IpnTemuco[eg];
        return parseInt((80 / (uno)) * (dos)) + 10;
    };
    this.ipnChileCondicion = function ipnChileC() {
        var eg = this.eg - 24;
        var tablas = new Tabla;

        if (this.ipn() < tablas.pct10IpnNacional[eg]) {
            return "Enflaquecido";
        } else if (this.ipn() <= tablas.pct90IpnNacional[eg]) {
            return "Eutrófico";
        } else if (this.ipn() > tablas.pct90IpnNacional[eg]) {
            return "RN Obeso";
        }
    };
    this.ipnTemucoCondicion = function ipnTemucoC() {
        var eg = this.eg - 24;
        var tablas = new Tabla;

        if (this.ipn() < tablas.pct10IpnTemuco[eg]) {
            return "Enflaquecido";
        } else if (this.ipn() <= tablas.pct90IpnTemuco[eg]) {
            return "Eutrófico";
        } else if (this.ipn() > tablas.pct90IpnTemuco[eg]) {
            return "RN Obeso";
        }
    };
    this.sexo = '';
    this.ajustePequeno = false;
    this.ajusteAlto = false;
};

function Tabla(plataforma) {
    this.plataforma = plataforma;
    this.pct10IpnNacional = [1.79, 1.83, 1.87, 1.91, 1.95, 1.99, 2.04, 2.08, 2.12, 2.16, 2.2, 2.25, 2.29, 2.33, 2.37, 2.41, 2.45, 2.5, 2.54];
    this.pct90IpnNacional = [2.54, 2.57, 2.59, 2.62, 2.65, 2.68, 2.71, 2.74, 2.77, 2.8, 2.83, 2.86, 2.89, 2.92, 2.95, 2.98, 3.01, 3.04, 3.07];
    this.pct10PesoNacional = [640.6, 666, 728.2, 822.9, 945.7, 1092.2, 1258.2, 1439.2, 1630.8, 1828.7, 2028.6, 2226, 2416.7, 2596.2, 2760.2, 2904.2, 3024.1, 3115.3, 3173.5];
    this.pct90PesoNacional = [897.9, 963.3, 1070.6, 1214.6, 1390.1, 1592, 1815, 2053.8, 2303.4, 2558.5, 2813.9, 3064.4, 3304.7, 3529.8, 3734.4, 3913.2, 4061.2, 4173, 4243.5];
    this.pct10IpnTemuco = [1.95, 1.93, 1.92, 1.92, 1.94, 1.97, 2.01, 2.06, 2.11, 2.17, 2.23, 2.28, 2.33, 2.38, 2.41, 2.44, 2.44, 2.42, 2.39];
    this.pct90IpnTemuco = [2.43, 2.44, 2.46, 2.49, 2.53, 2.57, 2.62, 2.68, 2.74, 2.79, 2.85, 2.9, 2.95, 2.99, 3.02, 3.04, 3.05, 3.04, 3.01];
    this.pct10PesoTemuco = [600, 662, 739, 830, 938, 1064, 1208, 1373, 1565, 1756, 1970, 2192, 2415, 2628, 2820, 2978, 3089, 3120, 3123];
    this.pct90PesoTemuco = [800, 960, 1139, 1337, 1551, 1781, 2022, 2272, 2527, 2781, 3031, 3270, 3494, 3699, 3878, 4030, 4150, 4236, 4287];
    this.pct10PesoAjustado = [];
    this.pct90PesoAjustado = [];
};

function Mama(talla, peso, edad, apellido) {
    this.paridad = 0
    this.talla = talla;
    this.peso = peso;
    this.edad = edad;
    this.apellido = apellido;
    this.imc = function imc() {
        var valor = ((this.peso / (Math.pow(this.talla, 2))) * 10000);
        return valor.toFixed(1);
    };
    this.imcCondicion = function imcC() {
        if (this.imc() < 20) {
            return 1
        } else if (this.imc() < 25) {
            return 2
        } else if (this.imc() <= 30) {
            return 3
        } else if (this.imc() > 30) {
            return 4
        }
    };
};

function tablaPercentilesView(p10Pso,p90Pso){
    $("#table\\.percentiles\\.ajustado").empty();
    for (i = 24; i < 43; i++) {
        x = i - 24;
        let tabla = '<tr><td style="background-color: #bfe9fb;">'+i+'</td><td>'+Math.trunc(p10Pso[x])+'</td><td>'+Math.trunc(p90Pso[x])+'</td></tr>';
        $("#table\\.percentiles\\.ajustado").append(tabla);
    }
}