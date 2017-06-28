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
    $('#popupTitle').html("Imágen Ecografía Primer Trimestre");
    $('#popupBody').html("<img src='img/eco1.png' class='img-fluid' alt='Responsive image'>");
    $('#popupGenerico').modal('show')
  });
  $( "#imgEcoObstSegTrim" ).on( "click", function() {
    $('#popupTitle').html("Imágen Ecografía Segundo - Tercer Trimestre");
    $('#popupBody').html("<img src='img/eco2.png' class='img-fluid' alt='Responsive image'>");
    $('#popupGenerico').modal('show')
  });
  $( "#imgEcoDoppler" ).on( "click", function() {
    $('#popupTitle').html("Imágen Ecografía Doppler Materno - Fetal");
    $('#popupBody').html("<img src='img/eco3.png' class='img-fluid' alt='Responsive image'>");
    $('#popupGenerico').modal('show')
  });
 $( "#dbp" ).on( "change", dbpPct);
}
