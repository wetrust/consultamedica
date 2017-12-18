var APPHOST = "https://" + location.hostname;
var APPDEBUG = true;
var APPDEBUG_URL = "/lagos/";
var APPSETINGS = "app/settings.html";

$(document).ready(function() {
  //determinar si está en modo depuración
  if (APPDEBUG == true){
    APPHOST += APPDEBUG_URL;
  }
  //cargar el estilo
  $('head').append('<link rel="stylesheet" href="' + APPHOST + 'assets/css/consulta.css">');
  if (location.pathname == APPDEBUG_URL + APPSETINGS){
    $('head').append('<script src="' + APPHOST + 'assets/js/configuracion.js" async></script>');
  }
});
