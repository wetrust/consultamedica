var APPHOST = location.hostname + "/";
var APPDEBUG = true;
var APPDEBUG_URL = "lagos/";

$(document).ready(function() {
  //determinar si está en modo depuración
  if (APPDEBUG == true){
    APPHOST += APPDEBUG_URL;
  }
  //cargar el estilo
  $('head').append('<link rel="stylesheet" href="' + APPHOST + 'assets/css/consulta.css">');
});
