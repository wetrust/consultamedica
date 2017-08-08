function activarBotones() {
  $( '#irPaciente' ).on( 'click', function() {
    console.log( 'paciente' );
  });
  $( '#irConsulta' ).on( 'click', function() {
    show_hide('home');
    show_hide('consulta');
  });
  $( '#volverConsultadesdeTipo' ).on( 'click', function() {
    show_hide('tipoExamen');
    show_hide('consulta');
  });
  $( '#volverConsultadesdeEco1' ).on( 'click', function() {
    show_hide('ecoObsPrimTrim');
    show_hide('consulta');
  });
  $( '#volverTipodesdeEco1' ).on( 'click', function() {
    show_hide('tipoExamen');
    show_hide('ecoObsPrimTrim');
  });
  $( '#irPacienteNav' ).on( 'click', function() {
    console.log( 'paciente' );
  });
  $( '#irConsultaNav' ).on( 'click', function() {
    show_hide('home');
    show_hide('consulta');
  });
  $( '#irExamen' ).on( 'click', function() {
    show_hide('consulta');
    show_hide('tipoExamen');
  });
  $( '#irEcoObsPrimTrim' ).on( 'click', function() {
    show_hide('tipoExamen');
    show_hide('ecoObsPrimTrim');
  });
  $( '#irEcoObsSegTrim' ).on( 'click', function() {
    show_hide('tipoExamen');
    show_hide('ecoObsSegTrim');
  });
  $( '#irEcoDoppler' ).on( 'click', function() {
    show_hide('tipoExamen');
    show_hide('ecoDoppler');
  });
  $( '#imgEcoObsrimTrim' ).on( 'click', function() {
    $('#popupTitle').html("Imágen Ecografía Primer Trimestre");
    $('#popupBody').html("<img src='img/eco1.png' class='img-fluid' alt='Responsive image'>");
    $('#popupGenerico').modal('show')
  });
  $( '#imgEcoObstSegTrim' ).on( 'click', function() {
    $('#popupTitle').html("Imágen Ecografía Segundo - Tercer Trimestre");
    $('#popupBody').html("<img src='img/eco2.png' class='img-fluid' alt='Responsive image'>");
    $('#popupGenerico').modal('show')
  });
  $( '#imgEcoDoppler' ).on( 'click', function() {
    $('#popupTitle').html("Imágen Ecografía Doppler Materno - Fetal");
    $('#popupBody').html("<img src='img/eco3.png' class='img-fluid' alt='Responsive image'>");
    $('#popupGenerico').modal('show')
  });
 $( '#cc' ).change( pctcc);
 $( '#ca' ).change( pctca);
 $( '#lf' ).change( pctlf);
 $( '#cerebelo' ).change( pctcb);
 $( '#saco' ).change( egsaco); 
 $( '#lcn' ).change( eglcn);
 $( '#dv' ).change( pctdv);
  
 $( '#fum').on('change', function() {
   if (navegadorDowgrade == false) {
      localStorage.fum = $("#fum").val();
      localStorage.eg = calcularEG();
      $("#egPrimTrim").val(localStorage.eg);
      $("#egSegTrim").val(localStorage.eg);
    }
 });
 $( '#fee').on('change', function() {
   if (navegadorDowgrade == false) {
      localStorage.fee = $("#fee").val();
      localStorage.eg = calcularEG();
      $("#egPrimTrim").val(localStorage.eg);
      $("#egSegTrim").val(localStorage.eg);
    }
 });
}
