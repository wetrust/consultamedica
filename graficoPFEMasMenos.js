import { the, these } from './wetrust.js'

var MAX_SAFE_INTEGER = 9007199254740991; // Math.pow(2, 53) - 1;

function isSafeInteger(value) {
   return Number.isInteger(value) && Math.abs(value) <= MAX_SAFE_INTEGER;
};

export function graficoPFEMasMenos(){
    let tramo = calcularDosMenos(Number(the("semanas").value));
    let valores = {"uno" : [], "dos" : [], "tres" : [], "cuatro" : [], "cinco" : [], "seis" : [], "siete" : [], "ocho" : [], "nueve" : []};

    for (let i = 0; i < tramo.length; i++) {

        let EG = tramo[i];
        if (isSafeInteger(EG) == false){ EG = Number(EG) + (0 + (Number(EG + "").split(".")[1]) || 0) / 7; }

        let pUno = Math.exp(-.230518383014592 + EG * (.400511116318458 + EG * (-.00617993235833267 + EG * (316595762972649e-19 + EG * 0))))
        let pDos = Math.exp(-.162057103557898 + EG * (.393965369913166 + EG * (-.00579733056422172 + EG * (255319128239087e-19 + EG * 0))))
        let pTres = Math.exp(-.0455887642525626 + EG * (.389314052082164 + EG * (-.00574527674062641 + EG * (265557891064333e-19 + EG * 0))))
        let pCuatro = Math.exp(-.012258767992062 + EG * (.393836404898322 + EG * (-.00592304885519551 + EG * (28863017896588e-18 + EG * 0))))
        let pCinco = Math.exp(.157310086966445 + EG * (.383067935520509 + EG * (-.00554046846639963 + EG * (246570062800598e-19 + EG * 0))))
        let pSeis = Math.exp(.293297386426919 + EG * (.376096229210412 + EG * (-.00529255036113726 + EG * (218372277641981e-19 + EG * 0))))
        let pSiete = Math.exp(.353142227490073 + EG * (.376486874470206 + EG * (-.00528742945785833 + EG * (214760212556463e-19 + EG * 0))))
        let pOcho = Math.exp(.285025055968914 + EG * (.390621472299378 + EG * (-.00582929182402995 + EG * (279088693116937e-19 + EG * 0))))
        let pNueve = Math.exp(.408170594889372 + EG * (.381068214664342 + EG * (-.00550913922743603 + EG * (246713147783532e-19 + EG * 0))))

        let sexo = these("sexsexsex")
        sexo.forEach(alter => { return (alter.checked == true) ? sexo = alter.value : false })

        if (sexo){

            if (sexo == "men"){
    
                pUno = Math.exp(-.52610096513854 + EG * (.44906549056954 + EG * (-.0089009550762548 + EG * (9868293523919e-17 + EG * -6.1862373692705e-7))))
                pDos = Math.exp(-.264562353403465 + EG * (.412210701662848 + EG * (-.00659353966698675 + EG * (387085414793403e-19 + EG * -5.92167006518022e-8))))
                pTres = Math.exp(-.0631025226657407 + EG * (.390993877846881 + EG * (-.00560764189001381 + EG * (190944627895524e-19 + EG * 8.84241803692905e-8))))
                pCuatro = Math.exp(-.136872920737678 + EG * (.411385471212291 + EG * (-.00662710457053528 + EG * (401078967104191e-19 + EG * -6.09266544869339e-8))))
                pCinco = Math.exp(.222999048464601 + EG * (.372888830200871 + EG * (-.00482835487505679 + EG * (538927935557086e-20 + EG * 1.72630247811947e-7))))
                pSeis = Math.exp(.274568726691847 + EG * (.381231662554576 + EG * (-.00557248890309729 + EG * (2934934995138e-17 + EG * -8.27628809790136e-8))))
                pSiete = Math.exp(.240213697127957 + EG * (.391178494734445 + EG * (-.00579538706713982 + EG * (275733050639858e-19 + EG * -1.90970772277149e-8))))
                pOcho = Math.exp(.238080920038937 + EG * (.394765675971259 + EG * (-.00581267491399174 + EG * (231531669574572e-19 + EG * 6.85345268671191e-8))))
                pNueve = Math.exp(.79018076483077 + EG * (.32585025131141 + EG * (-.0025559098706069 + EG * (-42038969571238e-18 + EG * 5.4228420412733e-7))))
    
            } else if (sexo == "wom"){
    
                pUno = Math.exp(-.915523725804273 + EG * (.529374415518249 + EG * (-.0147446585943781 + EG * (.000269201219853759 + EG * -23537061714461e-19))))
                pDos = Math.exp(-.0356552265566936 + EG * (.376064209229977 + EG * (-.00496950115937874 + EG * (100880399508847e-19 + EG * 8.87897379966417e-8))))
                pTres = Math.exp(.155170122624531 + EG * (.356594762998776 + EG * (-.00401282727802378 + EG * (-114891004630409e-19 + EG * 2.91905926442287e-7))))
                pCuatro = Math.exp(-.00617926685323766 + EG * (.391489315579454 + EG * (-.00583983363713264 + EG * (274701265932854e-19 + EG * 1.25218741602196e-8))))
                pCinco = Math.exp(.247277418113423 + EG * (.370440200280727 + EG * (-.00507278668575342 + EG * (179658724333519e-19 + EG * 3.17102018612384e-8))))
                pSeis = Math.exp(.376784712355285 + EG * (.361976162764535 + EG * (-.00463535949504953 + EG * (851326693543256e-20 + EG * 1.04436638183705e-7))))
                pSiete = Math.exp(286538459425835 + EG * (.387048945293849 + EG * (-.00606592437416756 + EG * (419335923075893e-19 + EG * -1.64397771502855e-7))))
                pOcho = Math.exp(.381320788764689 + EG * (.376613696575359 + EG * (-.00528117982372732 + EG * (181818929490566e-19 + EG * 7.60085577423407e-8))))
                pNueve = Math.exp(.32551154984358 + EG * (.40214557617585 + EG * (-.0074145176202411 + EG * (88196644838898e-18 + EG * -7.1015932637436e-7))))

            }
        }

        let caja = [tramo[i],0]

        caja[1] = pUno
        valores.uno.push(structuredClone(caja));

        caja[1] = pDos
        valores.dos.push(structuredClone(caja));

        caja[1] = pTres
        valores.tres.push(structuredClone(caja));

        caja[1] = pCuatro
        valores.cuatro.push(structuredClone(caja));

        caja[1] = pCinco
        valores.cinco.push(structuredClone(caja));

        caja[1] = pSeis
        valores.seis.push(structuredClone(caja));

        caja[1] = pSiete
        valores.siete.push(structuredClone(caja));

        caja[1] = pOcho
        valores.ocho.push(structuredClone(caja));

        caja[1] = pNueve
        valores.nueve.push(structuredClone(caja));
    }

    let dias = Number(the("dias").value)

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
    let dias = Number(the("dias").value)

    if (eg == 14){

        if (dias > 0){
            tramo = [14,14.1,14.2,14.3,14.4,14.5,14.6,15,16];
        }else{
            tramo = [14,15,16];
        }


    }else if (eg == 40){

        if (dias > 0){
            tramo = [38,39,40,40.1,40.2,40.3,40.4,40.5,40.6];
        }else{
            tramo = [38,39,40];
        }

    }else{

        tramo = [eg];
        if (dias > 0){
            tramo.push(eg + 0.1)
            tramo.push(eg + 0.2)
            tramo.push(eg + 0.3)
            tramo.push(eg + 0.4)
            tramo.push(eg + 0.5)
            tramo.push(eg + 0.6)
        }

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

export function percentilOMS(PFE, EG, sexo = null){

    let pUno = Math.exp(-.230518383014592 + EG * (.400511116318458 + EG * (-.00617993235833267 + EG * (316595762972649e-19 + EG * 0))))
    let pDos = Math.exp(-.162057103557898 + EG * (.393965369913166 + EG * (-.00579733056422172 + EG * (255319128239087e-19 + EG * 0))))
    let pTres = Math.exp(-.0455887642525626 + EG * (.389314052082164 + EG * (-.00574527674062641 + EG * (265557891064333e-19 + EG * 0))))
    let pCuatro = Math.exp(-.012258767992062 + EG * (.393836404898322 + EG * (-.00592304885519551 + EG * (28863017896588e-18 + EG * 0))))
    let pCinco = Math.exp(.157310086966445 + EG * (.383067935520509 + EG * (-.00554046846639963 + EG * (246570062800598e-19 + EG * 0))))
    let pSeis = Math.exp(.293297386426919 + EG * (.376096229210412 + EG * (-.00529255036113726 + EG * (218372277641981e-19 + EG * 0))))
    let pSiete = Math.exp(.353142227490073 + EG * (.376486874470206 + EG * (-.00528742945785833 + EG * (214760212556463e-19 + EG * 0))))
    let pOcho = Math.exp(.285025055968914 + EG * (.390621472299378 + EG * (-.00582929182402995 + EG * (279088693116937e-19 + EG * 0))))
    let pNueve = Math.exp(.408170594889372 + EG * (.381068214664342 + EG * (-.00550913922743603 + EG * (246713147783532e-19 + EG * 0))))

    if (sexo){
        if (sexo == "men"){

            pUno = Math.exp(-.52610096513854 + EG * (.44906549056954 + EG * (-.0089009550762548 + EG * (9868293523919e-17 + EG * -6.1862373692705e-7))))
            pDos = Math.exp(-.264562353403465 + EG * (.412210701662848 + EG * (-.00659353966698675 + EG * (387085414793403e-19 + EG * -5.92167006518022e-8))))
            pTres = Math.exp(-.0631025226657407 + EG * (.390993877846881 + EG * (-.00560764189001381 + EG * (190944627895524e-19 + EG * 8.84241803692905e-8))))
            pCuatro = Math.exp(-.136872920737678 + EG * (.411385471212291 + EG * (-.00662710457053528 + EG * (401078967104191e-19 + EG * -6.09266544869339e-8))))
            pCinco = Math.exp(.222999048464601 + EG * (.372888830200871 + EG * (-.00482835487505679 + EG * (538927935557086e-20 + EG * 1.72630247811947e-7))))
            pSeis = Math.exp(.274568726691847 + EG * (.381231662554576 + EG * (-.00557248890309729 + EG * (2934934995138e-17 + EG * -8.27628809790136e-8))))
            pSiete = Math.exp(.240213697127957 + EG * (.391178494734445 + EG * (-.00579538706713982 + EG * (275733050639858e-19 + EG * -1.90970772277149e-8))))
            pOcho = Math.exp(.238080920038937 + EG * (.394765675971259 + EG * (-.00581267491399174 + EG * (231531669574572e-19 + EG * 6.85345268671191e-8))))
            pNueve = Math.exp(.79018076483077 + EG * (.32585025131141 + EG * (-.0025559098706069 + EG * (-42038969571238e-18 + EG * 5.4228420412733e-7))))

        } else if (sexo == "wom"){

            pUno = Math.exp(-.915523725804273 + EG * (.529374415518249 + EG * (-.0147446585943781 + EG * (.000269201219853759 + EG * -23537061714461e-19))))
            pDos = Math.exp(-.0356552265566936 + EG * (.376064209229977 + EG * (-.00496950115937874 + EG * (100880399508847e-19 + EG * 8.87897379966417e-8))))
            pTres = Math.exp(.155170122624531 + EG * (.356594762998776 + EG * (-.00401282727802378 + EG * (-114891004630409e-19 + EG * 2.91905926442287e-7))))
            pCuatro = Math.exp(-.00617926685323766 + EG * (.391489315579454 + EG * (-.00583983363713264 + EG * (274701265932854e-19 + EG * 1.25218741602196e-8))))
            pCinco = Math.exp(.247277418113423 + EG * (.370440200280727 + EG * (-.00507278668575342 + EG * (179658724333519e-19 + EG * 3.17102018612384e-8))))
            pSeis = Math.exp(.376784712355285 + EG * (.361976162764535 + EG * (-.00463535949504953 + EG * (851326693543256e-20 + EG * 1.04436638183705e-7))))
            pSiete = Math.exp(286538459425835 + EG * (.387048945293849 + EG * (-.00606592437416756 + EG * (419335923075893e-19 + EG * -1.64397771502855e-7))))
            pOcho = Math.exp(.381320788764689 + EG * (.376613696575359 + EG * (-.00528117982372732 + EG * (181818929490566e-19 + EG * 7.60085577423407e-8))))
            pNueve = Math.exp(.32551154984358 + EG * (.40214557617585 + EG * (-.0074145176202411 + EG * (88196644838898e-18 + EG * -7.1015932637436e-7))))

        }
    }
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