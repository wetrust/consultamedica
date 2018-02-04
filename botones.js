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
   
   if (this.id != "fum-dos"){
	   $('#fum-dos').datepicker('setValue', localStorage.fum);
   }
   if (this.id != "fum-tres"){
	   $('#fum-tres').datepicker('setValue', localStorage.fum);
   }
   if (this.id != "fum-cuatro"){
	   $('#fum-cuatro').datepicker('setValue', localStorage.fum);
   }
   if (this.id != "fum-cinco"){
	   $('#fum-cinco').datepicker('setValue', localStorage.fum);
   }
   if (this.id != "fum-seis"){
	   $('#fum-seis').datepicker('setValue', localStorage.fum);
   }
	 
	 var semanas = Math.abs(localStorage.eg)
	 var dias = localStorage.eg - Math.abs(localStorage.eg)

	 $('#semanasEcoGen').val(semanas);
	$('#diasEcoGen').val(dias);
	 $('#semanasEcoObs').val(semanas);
	$('#diasEcoObs').val(dias);
	$('#semanasEcoDopp').val(semanas);
	$('#diasEcoDopp').val(dias);
	$( '#semanasTipoEco' ).val(semanas);
	$( '#diasTipoEco' ).val(dias);
	$('#semanasEcoPrim').val(semanas);
        $( '#diasEcoPrim' ).val(dias);
 });
  
  $("input[name='fee']").on('change', function() {
   localStorage.fum = $("input[name='fum']").val();
   localStorage.fee = $(this).val();
   localStorage.eg = calcularEG();
   $("input[name='fee']").val(localStorage.fee);
   $("input[name='eg']").val(localStorage.eg);
	  
   if (this.id != "fee-dos"){
	   $('#fee-dos').datepicker('setValue', localStorage.fee);
   }
   if (this.id != "fee-tres"){
	   $('#fee-tres').datepicker('setValue', localStorage.fee);
   }
   if (this.id != "fee-cuatro"){
	   $('#fee-cuatro').datepicker('setValue', localStorage.fee);
   }
   if (this.id != "fee-cinco"){
	   $('#fee-cinco').datepicker('setValue', localStorage.fee);
   }
   if (this.id != "fee-seis"){
	   $('#fee-seis').datepicker('setValue', localStorage.fee);
   }
 });
}
