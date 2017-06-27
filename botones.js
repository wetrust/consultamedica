function activarBotones() {
  $( "#irPaciente" ).on( "click", function() {
    console.log( 'paciente' );
  });
  $( "#irConsulta" ).on( "click", function() {
    show_hide('home');
    show_hide('consulta');
  });
  $( "#irExamen" ).on( "click", function() {
    show_hide('consulta');
    show_hide('tipoExamen');
  });
  $( "#irEcoObsPrimTrim" ).on( "click", function() {
    show_hide('tipoExamen');
    show_hide('ecoObsPrimTrim');
  });
  $( "#irEcoObsSegTrim" ).on( "click", function() {
    show_hide('tipoExamen');
    show_hide('ecoObsSegTrim');
  });
  $( "#irEcoDopple" ).on( "click", function() {
    show_hide('tipoExamen');
    show_hide('ecoDopple');
  });
}