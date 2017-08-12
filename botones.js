function activarBotones() {
  $( '#irPaciente' ).on( 'click', function() {
    console.log( 'paciente' );
  });
  $( '#irConsulta' ).on( 'click', function() {
    show_hide('home');
    show_hide('consulta');
    localStorage.ecografista = $('#ecografista').val();
    
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
  $( '#volverConsultadesdeEco2' ).on( 'click', function() {
    show_hide('ecoObsSegTrim');
    show_hide('consulta');
  });
  $( '#volverTipodesdeEco2' ).on( 'click', function() {
    show_hide('tipoExamen');
    show_hide('ecoObsSegTrim');
  });
  
  $( '#volverConsultadesdeDoppler' ).on( 'click', function() {
    show_hide('ecoDoppler');
    show_hide('consulta');
  });
  $( '#volverTipodesdeDoppler' ).on( 'click', function() {
    show_hide('tipoExamen');
    show_hide('ecoDoppler');
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
  
  $( '#irPaciente' ).on( 'click', function() {
    show_hide('home');
    show_hide('paciente');
  });
  
 $( '#dbp' ).change( deDBP);
 $( '#cc' ).change( pctcc);
 $( '#ca' ).change( pctca);
 $( '#lf' ).change( pctlf);
 $( '#cerebelo' ).change( pctcb);
 $( '#saco' ).change( egsaco); 
 $( '#lcn' ).change( eglcn);
 $( '#lh').change( pctlh);
  $( '#bvm').change( pctbvm);
  $( '#ila').change( pctila);
  
 //doppler
 $( '#aud').change( pctut);
 $( '#aui').change( pctut);
 $( '#dv' ).change( pctdv);
 $( '#ipau' ).change( pctau);
 $( '#ipacm' ).change( pctacm);
 
 $( '#fNacimiento').on('change', function() {
   if (navegadorDowgrade == false) {
      localStorage.fnac = $("#fNacimiento").val();
      localStorage.edad = calcularEdad();
     $("#edad").val(localStorage.edad);
    }
 });
  
 $( '#fum').on('change', function() {
   if (navegadorDowgrade == false) {
      localStorage.fum = $("#fum").val();
      localStorage.eg = calcularEG();
     $("#edadGestacional").val(localStorage.eg);
     $("#egExamen").val(localStorage.eg);
     $("#egConsulta").val(localStorage.eg);
      $("#egPrimTrim").val(localStorage.eg);
      $("#egSegTrim").val(localStorage.eg);
      $('#egDoppler').val(localStorage.eg);
    }
 });
 $( '#fee').on('change', function() {
   if (navegadorDowgrade == false) {
      localStorage.fee = $("#fee").val();
      localStorage.eg = calcularEG();
     $("#egExamen").val(localStorage.eg);
     $("#egConsulta").val(localStorage.eg);
      $("#egPrimTrim").val(localStorage.eg);
      $("#egSegTrim").val(localStorage.eg);
      $('#egDoppler').val(localStorage.eg);
    }
 });
 $( '#fum2').on('change', function() {
   if (navegadorDowgrade == false) {
      localStorage.fum = $("#fum2").val();
      localStorage.eg = calcularEG();
     $("#edadGestacional").val(localStorage.eg);
     $("#egExamen").val(localStorage.eg);
     $("#egConsulta").val(localStorage.eg);
      $("#egPrimTrim").val(localStorage.eg);
      $("#egSegTrim").val(localStorage.eg);
      $('#egDoppler').val(localStorage.eg);
    }
 });
}
