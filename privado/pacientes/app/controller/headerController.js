import { the } from '../../../wetrust.js';
import { mainConfig } from '../config/mainConfig.js';
import { headerFactory } from '../factory/headerFactory.js';

export class headerController{
    headerF = headerFactory

    constructor(){
        this.headerF = new headerFactory;
    }

    run(){
        this.construirFiltros()
    }

    construirFiltros(){
        the(mainConfig.container).appendChild(this.headerF.interfaceFiltros());
    }
}