import { the } from './wetrust.js'

export function dataGraphCA(){

    var data = { eg: [], p3: [], p97: [] }

    var p10 = [40,50,60,72,84,97,107,119,131,141,151,161,171,181,191,200,209,218,227,236,245,253,261,269,277,285,292,299,307]
    var p90 = [68,78,88,101,112,127,141,155,168,183,196,209,223,235,248,260,271,284,295,306,318,329,339,349,359,370,380,389,399]

    data.eg = calcularDosMenos(Number(the("semanas").value))

    for (let i = 0; i < data.eg.length; i++) {
        data.p3.push(p10[data.eg[i]-14])
        data.p97.push(p90[data.eg[i]-14])
    }

    return data

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

    tramo.sort((a, b) => {return a - b})
    return tramo;
}