import { headerController } from "./controller/headerController.js";
import { mainController } from "./controller/mainController.js";
import { dataInterface } from "./data/dataInterface.js";

export class appBD{
    headerC = headerController;
    mainC = mainController;
    dataI = dataInterface;

    constructor(){
        this.dataI = dataInterface.getInterface();
        this.headerC = new headerController;
        this.mainC = new mainController;
    }

    run(){
        this.headerC.run();
        this.mainC.run();
    }
}