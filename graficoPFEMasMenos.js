import { the } from './wetrust.js'

export function graficoPFEMasMenos(){

    var edadGestacional = the("semanas").value;
    if (edadGestacional < 14){ alert("Edad Gestacional inferior a 14 semanas"); return false;}
    if (edadGestacional > 41){ alert("Edad Gestacional superior a 40 semanas"); return false;}

    let tramo = calcularDosMenos(edadGestacional);

    let pTres = [70,88,110,136,167,205,248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714];
    let pDies = [77,97,121,150,185,227,275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985];
    let pCincuenta = [93,117,146,181,223,273,331,399,478,568,670,785,913,1055,1210,1379,1559,1751,1953,2161,2377,2595,2813,3028,3236,3435,3619];
    let pNoventa = [109,137,171,212,261,319,387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234];
    let pNoventaYSiete = [116,146,183,226,279,341,414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474];

    let valores = {"uno" : [], "dos" : [], "tres" : [], "cuatro" : [], "cinco" : []};

    for (let i = 0; i < tramo.length; i++) {

        valores.uno.push(pTres[tramo[i]-14]);
        valores.dos.push(pDies[tramo[i]-14]);
        valores.tres.push(pCincuenta[tramo[i]-14]);
        valores.cuatro.push(pNoventa[tramo[i]-14]);
        valores.cinco.push(pNoventaYSiete[tramo[i]-14]);

    }

    valores.cinco.sort((a, b) => a - b);
    valores.cuatro.sort((a, b) => a - b);
    valores.tres.sort((a, b) => a - b);
    valores.dos.sort((a, b) => a - b);
    valores.uno.sort((a, b) => a - b);

    return valores

}

function calcularDosMenos(eg){

    let tramo = [];

    if (eg == "14"){

        tramo = [14,15,16];

    }else if (eg == "40"){

        tramo = [38,39,40];

    }else{

        tramo = [eg];
        eg--
        if (eg >= "14"){
            tramo.push(eg)
        }

        eg--
        if (eg >= "14"){
            tramo.push(eg)
        }
        eg += 3

        if (eg <= "40"){
            tramo.push(eg)
        }
        eg++

        if (eg <= "41"){
            tramo.push(eg)
        }

    }

    return tramo;

}