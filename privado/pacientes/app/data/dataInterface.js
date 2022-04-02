export class dataInterface{
    static interface;
    data = [];

    static getInterface(){
        if (!this.interface){
            this.interface = new dataInterface
        }

        return this.interface;
    }

    get dataActual(){
        return this.data;
    }

    set dataActual(_fecha = Date){
        if ((_fecha instanceof Date) == false){
            _fecha = new Date();
        }

        let _data = dataWorker.getLocalData();
        _fecha = inputDate(_fecha);

        this.data = _data.filter(losDatos => { return losDatos.agenda_fecha == _fecha});
    }
}