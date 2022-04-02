import { mainConfig } from "../config/mainConfig";
import { mainFactory } from "../factory/mainFactory.js";
import { the } from "../../../wetrust.js";

export class mainController{
    mainF = mainFactory

    constructor(){
        this.mainF = new mainFactory
    }

    run(){
        the(mainConfig.container).appendChild(this.mainF.interfaceTabla());
    }
}