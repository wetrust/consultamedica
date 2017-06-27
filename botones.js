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
    $('#popupTitle').val("Imágen Ecografía Primer Trimestre");
    $('#popupBody').html("<img src='img/eco1.png' class='img-fluid' alt='Responsive image'>");
    $('#popupGenerico').modal('hide')
  });
  $( "#imgEcoObstSegTrim" ).on( "click", function() {
    $('#popupTitle').val("Imágen Ecografía Segundo - Tercer Trimestre");
    $('#popupBody').html("<img src='img/eco2.png' class='img-fluid' alt='Responsive image'>");
    $('#popupGenerico').modal('hide')
  });
  $( "#imgEcoDoppler" ).on( "click", function() {
    $('#popupTitle').val("Imágen Ecografía Doppler Materno - Fetal");
    $('#popupBody').html("<img src='img/eco3.png' class='img-fluid' alt='Responsive image'>");
    $('#popupGenerico').modal('hide')
  });
  
}
