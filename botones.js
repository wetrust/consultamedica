function activarBotones() {
  $( "#irPaciente" ).on( "click", function() {
    console.log( 'paciente' );
  });
  $( "#irConsulta" ).on( "click", function() {
    show_hide('home');
    show_hide('consulta');
  });
  $( "#irPacienteNav" ).on( "click", function() {
    console.log( 'paciente' );
  });
  $( "#irConsultaNav" ).on( "click", function() {
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
  $( "#imgEcoObsrimTrim" ).on( "click", function() {
    $('#modalGenerico').modal({
      show: true
    });
    $('#modalTitle').innerHTML("Imágen Ecografía Primer Trimestre");
    $('#popupBody').innerHTML("<img src='img/eco1.jpg' class='img-fluid' alt='Responsive image'>");
  });
  $( "#imgEcoObstSegTrim" ).on( "click", function() {
    $('#modalGenerico').modal({
      show: true
    });
    $('#modalTitle').innerHTML("Imágen Ecografía Segundo - Tercer Trimestre");
    $('#popupBody').innerHTML("<img src='img/eco2.jpg' class='img-fluid' alt='Responsive image'>");
  });
  $( "#imgEcoDoppler" ).on( "click", function() {
    $('#modalGenerico').modal({
      show: true
    });
    $('#modalTitle').innerHTML("Imágen Ecografía Doppler Materno - Fetal");
    $('#popupBody').innerHTML("<img src='img/eco3.jpg' class='img-fluid' alt='Responsive image'>");
  });
  
}
