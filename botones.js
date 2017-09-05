function activarBotones() {
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
      localStorage.fnac = $("#fNacimiento").val();
      localStorage.edad = calcularEdad();
     $("#edad").val(localStorage.edad);
 });
  
 $( '#fum').on('change', function() {
      localStorage.fum = $("#fum").val();
      $("#fee-dos").val($("#fee").val());
      localStorage.eg = calcularEG();
     $("#edadGestacional").val(localStorage.eg);
     $("#egExamen").val(localStorage.eg);
     $("#egConsulta").val(localStorage.eg);
      $("#egPrimTrim").val(localStorage.eg);
      $("#egSegTrim").val(localStorage.eg);
      $('#egDoppler').val(localStorage.eg);
 });
 $( '#fee').on('change', function() {
      localStorage.fee = $("#fee").val();
      localStorage.eg = calcularEG();
     $("#egExamen").val(localStorage.eg);
     $("#egConsulta").val(localStorage.eg);
      $("#egPrimTrim").val(localStorage.eg);
      $("#egSegTrim").val(localStorage.eg);
      $('#egDoppler').val(localStorage.eg);
 });
 $( '#fee-dos').on('change', function() {
      localStorage.fee = $("#fee-dos").val();
      $("#fee").val($("#fee-dos").val());
      localStorage.eg = calcularEG();
     $("#egExamen").val(localStorage.eg);
     $("#egConsulta").val(localStorage.eg);
      $("#egPrimTrim").val(localStorage.eg);
      $("#egSegTrim").val(localStorage.eg);
      $('#egDoppler').val(localStorage.eg);
 });
}
