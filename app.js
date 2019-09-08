var daysES=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var monthsES=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var dayHoy = new Date();
var day = ("0" + dayHoy.getDate()).slice(-2);
var month = ("0" + (dayHoy.getMonth() + 1)).slice(-2);


$( document ).ready(function() {
    $("p[name='fechaHora']").append(daysES[dayHoy.getDay()] + ", " + dayHoy.getDate() + " de "+ monthsES[dayHoy.getMonth()] + " " + dayHoy.getFullYear());
});