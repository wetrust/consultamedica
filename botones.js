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
  $( '#dof').change( calcdof);
  
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
  
  $( "#fechaMaterna").on('change', function() {
      localStorage.fnac = $("#fechaMaterna").val();
      localStorage.edad = calcularEdadMaterna();
     $("input[name='edad_materna']").val(localStorage.edad);
 });
  
 $("input[name='fum']").on('change', function() {
   localStorage.fum = $(this).val();
   localStorage.fee = $("input[name='fee']").val();
   localStorage.eg = calcularEG();
   $("input[name='fum']").val(localStorage.fum);
   
   $("input[name='eg']").val(localStorage.eg);
   
   $('#fum-dos').datepicker('setValue', localStorage.fum);
	 $('#fum-tres').datepicker('setValue', localStorage.fum);
	 $('#fum-cuatro').datepicker('setValue', localStorage.fum);
	 $('#fum-cinco').datepicker('setValue', localStorage.fum);
	 $('#fum-seis').datepicker('setValue', localStorage.fum);
 });
  
  $("input[name='fee']").on('change', function() {
   localStorage.fum = $("input[name='fum']").val();
   localStorage.fee = $(this).val();
   localStorage.eg = calcularEG();
   $("input[name='fee']").val(localStorage.fee);
   $("input[name='eg']").val(localStorage.eg);
	  $('#fee-dos').datepicker('setValue', localStorage.fum);
	 $('#fee-tres').datepicker('setValue', localStorage.fum);
	 $('#fee-cuatro').datepicker('setValue', localStorage.fum);
	 $('#fee-cinco').datepicker('setValue', localStorage.fum);
	 $('#fee-seis').datepicker('setValue', localStorage.fum);
 });
}
