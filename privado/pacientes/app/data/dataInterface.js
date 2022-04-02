export class dataInterface{
    static interface;

    static getInterface(){
        if (!this.interface){
            this.interface = new dataInterface
        }

        return this.interface;
    }
}