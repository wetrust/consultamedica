class app {
    constructor() {
      var daysES=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      var monthsES=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      var daysEN=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var monthsEN=["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"];
	    var espanol = {days: daysES, months :monthsES};
	    var english = {days: daysEN, months: monthsEN};
	    var dt = {ES:espanol, EN: english};
	    var errorString = {browser: 'Su navegador está desactualizado, esta aplicación no funcionará correctamente'};
        this.strings = {datetime: dt, error: errorString};
    }

    checkBrowser() {
	    if (!window.openDatabase || !window.localStorage || !("onhashchange" in window)){
		    return false;
	    }
	    return true;
    }
}
