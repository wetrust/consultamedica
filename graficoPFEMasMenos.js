import { the } from './wetrust.js'

export function graficoPFEMasMenos(){

    var edadGestacional = parseInt(the("semanas").value);
    var dias = the("dias").value;

    let tramo = calcularDosMenos(edadGestacional);

    let pUno = [70,89,113,141,174,214,260,314,375,445,523,611,707,813,929,1053,1185,1326,1473,1626,1785,1948,2113,2280,2446,2612,2775];
    let pDos = [73,93,117,146,181,223,271,327,392,465,548,641,743,855,977,1108,1247,1394,1548,1708,1872,2038,2205,2372,2536,2696,2849];
    let pTres = [78,99,124,155,192,235,286,345,412,489,576,673,780,898,1026,1165,1313,1470,1635,1807,1985,2167,2352,2537,2723,2905,3084];
    let pCuatro = [83,106,133,166,206,252,307,370,443,525,618,723,838,964,1102,1251,1410,1579,1757,1942,2134,2330,2531,2733,2935,3135,3333];
    let pCinco = [90,114,144,179,222,272,330,398,476,565,665,778,902,1039,1189,1350,1523,1707,1901,2103,2312,2527,2745,2966,3186,3403,3617];
    let pSeis = [98,124,155,193,239,292,355,428,512,608,715,834,971,1118,1279,1453,1640,1838,2047,2266,2492,2723,2959,3195,3432,3664,3892];
    let pSiete = [104,132,166,207,255,313,380,458,548,650,765,894,1038,1196,1368,1554,1753,1964,2187,2419,2659,2904,3153,3403,3652,3897,4135];
    let pOcho = [109,138,174,217,268,328,399,481,575,682,803,938,1087,1251,1429,1622,1828,2046,2276,2516,2764,3018,3277,3538,3799,4058,4312];
    let pNueve = [113,144,181,225,278,340,413,497,595,705,830,970,1125,1295,1481,1682,1897,2126,2367,2619,2880,3148,3422,3697,3973,4247,4515];

    let valores = {"uno" : [], "dos" : [], "tres" : [], "cuatro" : [], "cinco" : [], "seis" : [], "siete" : [], "ocho" : [], "nueve" : []};

    for (let i = 0; i < tramo.length; i++) {

        let caja = [tramo[i],0]

        caja[1] = pUno[tramo[i]-14]
        valores.uno.push(structuredClone(caja));

        caja[1] = pDos[tramo[i]-14]
        valores.dos.push(structuredClone(caja));

        caja[1] = pTres[tramo[i]-14]
        valores.tres.push(structuredClone(caja));

        caja[1] = pCuatro[tramo[i]-14]
        valores.cuatro.push(structuredClone(caja));

        caja[1] = pCinco[tramo[i]-14]
        valores.cinco.push(structuredClone(caja));

        caja[1] = pSeis[tramo[i]-14]
        valores.seis.push(structuredClone(caja));

        caja[1] = pSiete[tramo[i]-14]
        valores.siete.push(structuredClone(caja));

        caja[1] = pOcho[tramo[i]-14]
        valores.ocho.push(structuredClone(caja));

        caja[1] = pNueve[tramo[i]-14]
        valores.nueve.push(structuredClone(caja));

    }

    if (dias > 0) {

        let total = tramo.length

        let indice = tramo.indexOf(edadGestacional)
        let _dias = [0.1,0.2,0.3,0.4,0.5,0.6]

        if (edadGestacional == 14){

            tramo = [14,14.1,14.2,14.3,14.4,14.5,14.6,15,16];
    
        }else if (edadGestacional == 40){
    
            tramo = [38,39,40,40.1,40.2,40.3,40.4,40.5,40.6];
    
        }else{

            _dias[0] += parseInt(edadGestacional)
            _dias[1] += parseInt(edadGestacional)
            _dias[2] += parseInt(edadGestacional)
            _dias[3] += parseInt(edadGestacional)
            _dias[4] += parseInt(edadGestacional)
            _dias[5] += parseInt(edadGestacional)

            if ((indice+1) == total){

                tramo = tramo.concat(_dias)

            }else if (indice == 0){
                tramo = _dias.concat(tramo)
            }else{
                let unPart = tramo.splice(indice +1);
                let doPart = tramo;

                tramo = doPart.concat(_dias)
                tramo = tramo.concat(unPart)

                tramo.sort((a, b) => a - b);
            }


        }

    }

    let resultado = {valores: valores, semanas: tramo}

    return resultado

}

function calcularDosMenos(eg){

    let tramo = [];

    if (eg == 14){

        tramo = [14,15,16];

    }else if (eg == 40){

        tramo = [38,39,40];

    }else{

        tramo = [eg];
        eg--
        if (eg >= 14){
            tramo.push(eg)
        }

        eg--
        if (eg >= 14){
            tramo.push(eg)
        }
        eg += 3

        if (eg <= 40){
            tramo.push(eg)
        }
        eg++

        if (eg <= 41){
            tramo.push(eg)
        }

    }

    tramo.sort((a, b) => a - b);

    return tramo;

}

export function percentilOMS(PFE, EG ){

    let pUno = Math.exp(-.230518383014592 + EG * (.400511116318458 + EG * (-.00617993235833267 + EG * (316595762972649e-19 + EG * 0))))
    let pDos = Math.exp(-.162057103557898 + EG * (.393965369913166 + EG * (-.00579733056422172 + EG * (255319128239087e-19 + EG * 0))))
    let pTres = Math.exp(-.0455887642525626 + EG * (.389314052082164 + EG * (-.00574527674062641 + EG * (265557891064333e-19 + EG * 0))))
    let pCuatro = Math.exp(-.012258767992062 + EG * (.393836404898322 + EG * (-.00592304885519551 + EG * (28863017896588e-18 + EG * 0))))
    let pCinco = Math.exp(.157310086966445 + EG * (.383067935520509 + EG * (-.00554046846639963 + EG * (246570062800598e-19 + EG * 0))))
    let pSeis = Math.exp(.293297386426919 + EG * (.376096229210412 + EG * (-.00529255036113726 + EG * (218372277641981e-19 + EG * 0))))
    let pSiete = Math.exp(.353142227490073 + EG * (.376486874470206 + EG * (-.00528742945785833 + EG * (214760212556463e-19 + EG * 0))))
    let pOcho = Math.exp(.285025055968914 + EG * (.390621472299378 + EG * (-.00582929182402995 + EG * (279088693116937e-19 + EG * 0))))
    let pNueve = Math.exp(.408170594889372 + EG * (.381068214664342 + EG * (-.00550913922743603 + EG * (246713147783532e-19 + EG * 0))))

    let rango = [0.0025, 0.005, 0.01, 0.025, 0.05, 0.075, 0.09, 0.095, 0.0975]

    //determinar si es mayor a p97.5 o es menor a p2.5

    if(PFE < pUno){
        return "< 2.5"
    }else if(PFE > pNueve){
        return "> 97.5"
    }

    //determinar PFE en que rango está 

    if (isNaN(PFE) == true || PFE < 0 ){
        return 0;
    }

    if (PFE <= pNueve && PFE >= pOcho){
        return rango[7] + (PFE - pOcho) / (pNueve - pOcho) * (rango[8] - rango[7])
    }else if (PFE <= pOcho && PFE >= pSiete){
        return rango[6] + (PFE - pSiete) / (pOcho - pSiete) * (rango[7] - rango[6])
    }else if (PFE <= pSiete && PFE >= pSeis){
        return rango[5] + (PFE - pSeis) / (pSiete - pSeis) * (rango[6] - rango[5])
    }else if (PFE <= pSeis && PFE >= pCinco){
        return rango[4] + (PFE - pCinco) / (pSeis - pCinco) * (rango[5] - rango[4])
    }else if (PFE <= pCinco && PFE >= pCuatro){
        return rango[3] + (PFE - pCuatro) / (pCinco - pCuatro) * (rango[4] - rango[3])
    }else if (PFE <= pCuatro && PFE >= pTres){
        return rango[2] + (PFE - pTres) / (pCuatro - pTres) * (rango[3] - rango[2])
    }else if (PFE <= pTres && PFE >= pDos){
        return rango[1] + (PFE - pDos) / (pTres - pDos) * (rango[2] - rango[1])
    }else if (PFE <= pDos && PFE >= pUno){  
        return rango[0] + (PFE - pUno) / (pDos - pUno) * (rango[1] - rango[0])
    }
}