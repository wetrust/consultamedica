//funciones
//from https://stackoverflow.com/questions/17907445/how-to-detect-ie11
function isIE() { return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))); }

$( '#adicionalCrecimientoView' ).on( 'click', function() {
	if ($('#adicionalCrecimiento').css( "display" ) == 'none'){
		$('#adicionalCrecimiento').show();
	}
	else{
		$('#adicionalCrecimiento').hide();
	}
	
});
//enters
$( "#lcn" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $('#lcn').trigger("change");
     var eg = parseFloat($("input[name='eg']").val());
     $('#furReferida').val($("input[name='fum']").val());
     $('#egReferida').val(eg);
     $('#fppReferida').val($("input[name='fpp']").val());
     var LCN = parseInt($('#lcn').val());
     
     if (isNaN(LCN) | LCN < 0 | isNaN(eg) | eg < 1) {
         $('#diferenciaEcoPrimTrim').html('La diferencia observada entre edad gestacional por FUM referida y la edad por ecografia es de 0 días.');
         $('#preguntaAjusteEcoPrimTrim').hide();
     }
     else{
	var EGLCN = parseFloat($('#lcnPct').val());
	var eg1 = new Number((Math.floor(EGLCN) * 7) + Math.round((EGLCN - Math.floor(EGLCN)) * 7));
	var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
	var diferencia = Math.abs(Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
	$('#diferenciaEcoPrimTrim').html('La diferencia observada entre edad gestacional por FUM referida y la edad por exámen ecografico es de ' + diferencia + ' días.');
        $('#preguntaAjusteEcoPrimTrim').show();
        $("#graficoLcn").focus()
     }
  }
});

$( "#saco" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $('#saco').trigger("change");
     var eg = parseFloat($("input[name='eg']").val());
     var EGsaco = parseFloat($('#sacoPct').val());
     var eg1 = new Number((Math.floor(EGsaco) * 7) + Math.round((EGsaco - Math.floor(EGsaco)) * 7));
     var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
     var diferencia = Math.abs(Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
     $('#diferenciaEcoPrimTrim').html('La diferencia observada entre edad gestacional por FUM referida y la edad por exámen ecografico es de ' + diferencia + ' días.<br><small>La determinación de edad gestacional ecográfica y ajuste a edad gestacional real, ha de realizarse solo una vez lograda la medición embrionaria (LCN).</small>');
     $('#preguntaAjusteEcoPrimTrim').hide();
     $("#graficoSaco").focus();
  }
});

$( "#dbp" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#dof").focus()
  }
});

$( "#dof" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#cc").focus()
  }
});

$( "#cc" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#ca").focus()
  }
});

$( "#ca" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#lf").focus()
  }
});

$( "#lf" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#pfe").focus()
  }
});

$( "#lh" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#cerebelo").focus()
  }
});

$( "#cerebelo" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#bvm").focus()
  }
});

$( "#bvm" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#pfe").focus()
  }
});

$( "#ila" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#graficoILA").focus()
  }
});

$( "#aud" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#aui").focus()
  }
});

$( "#aui" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#ipau").focus()
  }
});

$( "#aui" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#ipau").focus()
  }
});

$( "#ipau" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#ipacm").focus()
  }
});

$( "#ipacm" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#dv").focus()
  }
});

$( "#dv" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#graficoDv").focus()
  }
});

$( "#psmACM" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $("#graficopsmACM").focus()
  }
});

function show_hide(id){
  if (document.getElementById){
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
  }
};

//modales para informe

$( '#modalPreInfEcoObsSegTrim1' ).on( 'click', function() {
	$('#popupTitle').html("Datos para informe");
	//remueve los botones de imprimir en caso de que estén
	$( '#impEcoObsSegTrim2').remove();
	$( '#impEcoObsSegTrim1').remove();
	$( '#impDoppler3').remove();
	$( '#impDoppler2').remove();
	$( '#impDoppler1').remove();
        $('#popupBody').html("<div class='form-group'><label>Presentaci&oacute;n</label><select id='presentacion' class='form-control'><option value='cefalica'>Cef&aacute;lica</option><option value='podalica'>Pod&aacute;lica</option><option value='transversa'>transversa</option><option value='indiferente'>indiferente</option></select></div><div class='form-group'><label>Dorso Fetal</label><select id='dorso' class='form-control'><option value='anterior'>Anterior</option><option value='lateral izquiedo'>Lat. Izquierdo</option><option value='posterior'>Posterior</option><option value='lateral derecho'>Lat. Derecho</option></select></div><div class='form-group'><label>Actividada Cardiaca</label></div><div class='form-group'><div class='form-check form-check-inline'><label class='form-check-label'><input class='form-check-input' type='radio' checked='checked' name='accard' value='1'> Si</label></div><div class='form-check form-check-inline'><label class='form-check-label'><input class='form-check-input' type='radio' name='accard' value='0'> No</label></div></div><div class='form-group'><label>Mov. Fetales</label></div><div class='form-group'><div class='form-check form-check-inline'><label class='form-check-label'><input class='form-check-input' type='radio' checked='checked' name='movfet' value='1'> Si</label></div><div class='form-check form-check-inline'><label class='form-check-label'><input class='form-check-input' type='radio' name='movfet' value='0'> No</label></div></div><div class='form-group'><label>FCF</label><select id='fcf' class='form-control'><option value='90'>90</option><option value='91'>91</option><option value='92'>92</option><option value='93'>93</option><option value='94'>94</option><option value='95'>95</option><option value='96'>96</option><option value='97'>97</option><option value='98'>98</option><option value='99'>99</option><option value='100'>100</option><option value='101'>101</option><option value='102'>102</option><option value='103'>103</option><option value='104'>104</option><option value='105'>105</option><option value='106'>106</option><option value='107'>107</option><option value='108'>108</option><option value='109'>109</option><option value='110'>110</option><option value='111'>111</option><option value='112'>112</option><option value='113'>113</option><option value='114'>114</option><option value='115'>115</option><option value='116'>116</option><option value='117'>117</option><option value='118'>118</option><option value='119'>119</option><option value='120'>120</option><option value='121'>121</option><option value='122'>122</option><option value='123'>123</option><option value='124'>124</option><option value='125'>125</option><option value='126'>126</option><option value='127'>127</option><option value='128'>128</option><option value='129'>129</option><option value='130'>130</option><option value='131'>131</option><option value='132'>132</option><option value='133'>133</option><option value='134'>134</option><option value='135'>135</option><option value='136'>136</option><option value='137'>137</option><option value='138'>138</option><option value='139'>139</option><option selected='selected' value='140'>140</option><option value='141'>141</option><option value='142'>142</option><option value='143'>143</option><option value='144'>144</option><option value='145'>145</option><option value='146'>146</option><option value='147'>147</option><option value='148'>148</option><option value='149'>149</option><option value='150'>150</option><option value='151'>151</option><option value='152'>152</option><option value='153'>153</option><option value='154'>154</option><option value='155'>155</option><option value='156'>156</option><option value='157'>157</option><option value='158'>158</option><option value='159'>159</option><option value='160'>160</option><option value='161'>161</option><option value='162'>162</option><option value='163'>163</option><option value='164'>164</option><option value='165'>165</option><option value='166'>166</option><option value='167'>167</option><option value='168'>168</option><option value='169'>169</option><option value='170'>170</option></select></div><div class='form-group'><label>Anatom&iacute;a fetal</label><select id='ev-morfo' class='form-control'><option value='no evaluada dirigidamente'>No evaluada dirigidamente</option><option selected='selected' value='aspecto general normal'>Aspecto general normal</option><option value='alteraciones de cr&aacute;neo'>Alteraciones de cr&aacute;neo</option><option value='alteraciones de columna'>Alteraciones de columna</option><option value='alteraciones de t&oacute;rax'>Alteraciones de t&oacute;rax</option><option value='alteraciones de coraz&oacute;n'>Alteraciones de coraz&oacute;n</option><option value='alteraciones de abdomen'>Alteraciones de abdomen</option><option value='alteraciones de ri&ntilde;ones'>Alteraciones de ri&ntilde;ones</option><option value='alteraciones de vejiga'>Alteraciones de vejiga</option><option value='alteracion extemidades'>Alteracion extemidades</option><option value='alteraciones m&uacute;ltiples'>Alteraciones m&uacute;ltiples</option></select></div><div class='form-group'><p><strong>Comentarios anatom&iacute;a</strong></p><textarea id='comentarios-anatomia-informe-eg-texto' class='form-control' rows='3'></textarea></div><div class='form-group'><label>Placenta Ubicaci&oacute;n</label><select id='ubicacion' class='form-control'><option value='normal'>Normal</option><option value='prev. lateral'>previa lateral</option><option value='prev. marginal'>previa marginal</option><option value='prev. parcial'>previa parcial</option><option value='prev. total'>previa total</option></select></div><div class='form-group'><label>Placenta incersi&oacute;n</label><select id='incersion' class='form-control'><option value='anterior'>anterior</option><option value='posterior'>posterior</option><option value='fundica'>f&uacute;ndica</option><option value='lat. derecha'>lateral derecha</option><option value='lat. izquierda'>lateral izquierda</option><option value='segmentaria'>segmentaria</option></select></div><div class='form-group'><label>Placenta Grado (Grannum)</label><select id='grado-placenta' class='form-control'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option></select></div><div class='form-group'><label>Cord&oacute;n umbilical</label><select id='cordon' class='form-control'><option value='inserci&oacute;n central'>Inserci&oacute;n central</option><option value='inserci&oacute;n marginal'>Inserci&oacute;n marginal</option><option value='inserci&oacute;n velamentosa'>Inserci&oacute;n velamentosa</option><option value='inserci&oacute;n no evaluable'>Inserci&oacute;n no evaluable</option></select></div><div class='form-group'><label>N&uacute;mero de vasos</label><select id='vasos' class='form-control'><option value='2'>2</option><option selected='selected' value='3'>3</option></select></div>");
	//añadir boton de imprimir
	$('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler1'>Imprimir</button>");
	$( '#impDoppler1').on("click", function(){
	      crearInformeEcoSegTrim1();
	});
	$('#popupGenerico').modal('show');
});

$( '#modalPreInfEcoObsSegTrim2' ).on( 'click', function() {
	$('#popupTitle').html("Datos para informe");
	//remueve los botones de imprimir en caso de que estén
	$( '#impEcoObsSegTrim2').remove();
	$( '#impEcoObsSegTrim1').remove();
	$( '#impDoppler3').remove();
	$( '#impDoppler2').remove();
	$( '#impDoppler1').remove();
        $('#popupBody').html("<div class='form-group'><label>Presentaci&oacute;n</label><select id='presentacion' class='form-control'><option value='cefalica'>Cef&aacute;lica</option><option value='podalica'>Pod&aacute;lica</option><option value='transversa'>transversa</option><option value='indiferente'>indiferente</option></select></div><div class='form-group'><label>Dorso Fetal</label><select id='dorso' class='form-control'><option value='anterior'>Anterior</option><option value='lateral izquiedo'>Lat. Izquierdo</option><option value='posterior'>Posterior</option><option value='lateral derecho'>Lat. Derecho</option></select></div><div class='form-group'><label>Actividada Cardiaca</label></div><div class='form-group'><div class='form-check form-check-inline'><label class='form-check-label'><input class='form-check-input' type='radio' checked='checked' name='accard' value='1'> Si</label></div><div class='form-check form-check-inline'><label class='form-check-label'><input class='form-check-input' type='radio' name='accard' value='0'> No</label></div></div><div class='form-group'><label>Mov. Fetales</label></div><div class='form-group'><div class='form-check form-check-inline'><label class='form-check-label'><input class='form-check-input' type='radio' checked='checked' name='movfet' value='1'> Si</label></div><div class='form-check form-check-inline'><label class='form-check-label'><input class='form-check-input' type='radio' name='movfet' value='0'> No</label></div></div><div class='form-group'><label>FCF</label><select id='fcf' class='form-control'><option value='90'>90</option><option value='91'>91</option><option value='92'>92</option><option value='93'>93</option><option value='94'>94</option><option value='95'>95</option><option value='96'>96</option><option value='97'>97</option><option value='98'>98</option><option value='99'>99</option><option value='100'>100</option><option value='101'>101</option><option value='102'>102</option><option value='103'>103</option><option value='104'>104</option><option value='105'>105</option><option value='106'>106</option><option value='107'>107</option><option value='108'>108</option><option value='109'>109</option><option value='110'>110</option><option value='111'>111</option><option value='112'>112</option><option value='113'>113</option><option value='114'>114</option><option value='115'>115</option><option value='116'>116</option><option value='117'>117</option><option value='118'>118</option><option value='119'>119</option><option value='120'>120</option><option value='121'>121</option><option value='122'>122</option><option value='123'>123</option><option value='124'>124</option><option value='125'>125</option><option value='126'>126</option><option value='127'>127</option><option value='128'>128</option><option value='129'>129</option><option value='130'>130</option><option value='131'>131</option><option value='132'>132</option><option value='133'>133</option><option value='134'>134</option><option value='135'>135</option><option value='136'>136</option><option value='137'>137</option><option value='138'>138</option><option value='139'>139</option><option selected='selected' value='140'>140</option><option value='141'>141</option><option value='142'>142</option><option value='143'>143</option><option value='144'>144</option><option value='145'>145</option><option value='146'>146</option><option value='147'>147</option><option value='148'>148</option><option value='149'>149</option><option value='150'>150</option><option value='151'>151</option><option value='152'>152</option><option value='153'>153</option><option value='154'>154</option><option value='155'>155</option><option value='156'>156</option><option value='157'>157</option><option value='158'>158</option><option value='159'>159</option><option value='160'>160</option><option value='161'>161</option><option value='162'>162</option><option value='163'>163</option><option value='164'>164</option><option value='165'>165</option><option value='166'>166</option><option value='167'>167</option><option value='168'>168</option><option value='169'>169</option><option value='170'>170</option></select></div><div class='form-group'><label>Anatom&iacute;a fetal</label><select id='ev-morfo' class='form-control'><option value='no evaluada dirigidamente'>No evaluada dirigidamente</option><option selected='selected' value='aspecto general normal'>Aspecto general normal</option><option value='alteraciones de cr&aacute;neo'>Alteraciones de cr&aacute;neo</option><option value='alteraciones de columna'>Alteraciones de columna</option><option value='alteraciones de t&oacute;rax'>Alteraciones de t&oacute;rax</option><option value='alteraciones de coraz&oacute;n'>Alteraciones de coraz&oacute;n</option><option value='alteraciones de abdomen'>Alteraciones de abdomen</option><option value='alteraciones de ri&ntilde;ones'>Alteraciones de ri&ntilde;ones</option><option value='alteraciones de vejiga'>Alteraciones de vejiga</option><option value='alteracion extemidades'>Alteracion extemidades</option><option value='alteraciones m&uacute;ltiples'>Alteraciones m&uacute;ltiples</option></select></div><div class='form-group'><p><strong>Comentarios anatom&iacute;a</strong></p><textarea id='comentarios-anatomia-informe-eg-texto' class='form-control' rows='3'></textarea></div><div class='form-group'><label>Placenta Ubicaci&oacute;n</label><select id='ubicacion' class='form-control'><option value='normal'>Normal</option><option value='prev. lateral'>previa lateral</option><option value='prev. marginal'>previa marginal</option><option value='prev. parcial'>previa parcial</option><option value='prev. total'>previa total</option></select></div><div class='form-group'><label>Placenta incersi&oacute;n</label><select id='incersion' class='form-control'><option value='anterior'>anterior</option><option value='posterior'>posterior</option><option value='fundica'>f&uacute;ndica</option><option value='lat. derecha'>lateral derecha</option><option value='lat. izquierda'>lateral izquierda</option><option value='segmentaria'>segmentaria</option></select></div><div class='form-group'><label>Placenta Grado (Grannum)</label><select id='grado-placenta' class='form-control'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option></select></div><div class='form-group'><label>Cord&oacute;n umbilical</label><select id='cordon' class='form-control'><option value='inserci&oacute;n central'>Inserci&oacute;n central</option><option value='inserci&oacute;n marginal'>Inserci&oacute;n marginal</option><option value='inserci&oacute;n velamentosa'>Inserci&oacute;n velamentosa</option><option value='inserci&oacute;n no evaluable'>Inserci&oacute;n no evaluable</option></select></div><div class='form-group'><label>N&uacute;mero de vasos</label><select id='vasos' class='form-control'><option value='2'>2</option><option selected='selected' value='3'>3</option></select></div>");
	//añadir boton de imprimir
	$('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler1'>Imprimir</button>");
	$( '#impDoppler1').on("click", function(){
	      crearInformeEcoSegTrim2();
	});
	$('#popupGenerico').modal('show');
});

$( '#modalPreInfEcoDoppler' ).on( 'click', function() {
	$('#popupTitle').html("Datos para informe");
	//remueve los botones de imprimir en caso de que estén
	$( '#impEcoObsSegTrim2').remove();
	$( '#impEcoObsSegTrim1').remove();
	$( '#impDoppler3').remove();
	$( '#impDoppler2').remove();
	$( '#impDoppler1').remove();
        $('#popupBody').html("<div class='form-group'><label>Evaluación de líquido amniótico</label><select id='liq-amnio-doppler' class='form-control'><option value='normal'>Normal</option><option value='disminuido'>Disminuido</option><option value='aumentado'>Aumentado</option></select></div><div class='form-group'><div class='row'><div class='col-6'><label>BVM *</label><div class='input-group'><input id='bvm-doppler' type='number' min='001' max='999' class='form-control'><span class='input-group-addon'>mm.</span></div></div><div class='col-6'><label>Percentil</label><p id='pctbvm-doppler' class='bg-primary text-success text-center' style='padding-top:5px;'>0</p></div></div></div><div class='form-group'><label>Motivo del exámen</label><select id='motivo-doppler' class='form-control'><option value='RCIU Emb. Previo'>RCIU Emb. Previo</option><option value='RCIU No PEG &gt; p10'>RCIU No PEG > p10</option><option value='RCIU Moderado &lt; p10'>RCIU Moderado < p10</option><option value='RCIU Severo &lt; p3'>RCIU Severo < p3</option><option value='Seguimiento Evolución'>Seguimiento Evolución</option><option value='Síndrome Hipertensivo'>Síndrome Hipertensivo</option><option value='Preeclampsia'>Preeclampsia</option><option value='Desnutrición Materna'>Desnutrición Materna</option><option value='Amenaza Pto. Prematuro'>Amenaza Pto. Prematuro</option><option value='Tabaquismo'>Tabaquismo</option><option value='Otra Patología ARO'>Otra Patología ARO</option><option value='Sin Patología ARO'>Sin Patología ARO</option><option value='Estudio Doppler' selected>Estudio Doppler</option><option value='Estudio Doppler materno'>Estudio Doppler materno</option></select></div><div class='form-group'><label>Antecedentes Obstétricos</label><select id='antecedentes-doppler' class='form-control'><option value='RCIU Emb. Previo'>RCIU Emb. Previo</option><option value='RCIU No PEG &gt; p10'>RCIU No PEG > p10</option><option value='RCIU Moderado &lt; p10'>RCIU Moderado < p10</option><option value='RCIU Severo &lt; p3'>RCIU Severo < p3</option><option value='Síndrome Hipertensivo'>Síndrome Hipertensivo</option><option value='Desnutrición Materna'>Desnutrición Materna</option><option value='Amenaza Pto. Prematuro'>Amenaza Pto. Prematuro</option><option value='Tabaquismo'>Tabaquismo</option><option value='Otra Patología ARO'>Otra Patología ARO</option><option value='Sin Patología ARO'>Sin Patología ARO</option></select></div><div class='form-group'><label>Antecedentes Obstétricos</label><select id='presentacion-doppler' class='form-control'><option value='cefalica' selected>Cefalica</option><option value='podalica'>Podálica</option><option value='transversa'>Transversa</option><option value='indiferente'>Indiferente</option></select></div><div class='form-group'><label>Motilidad Fetal</label><select id='motilidad-doppler' class='form-control'><option value='hiperactivo' selected>Hiperactivo</option><option value='activo'>Activo</option><option value='hipoactivo'>Hipoactivo</option><option value='inmovil'>Inmovil</option></select></div><div class='form-group'><label>Placenta Ubicación</label><select id='ubicacion-doppler' class='form-control'><option value='anterior' selected>Anterior</option><option value='posterior'>Posterior</option><option value='fúndica'>Fúndica</option><option value='lat. derecha'>Lat. derecha</option><option value='lat. izquierda'>Lat. izquierda</option><option value='otro'>Otro</option></select></div>");
	//añadir boton de imprimir
	$('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler1'>Imprimir</button>");
	$( '#impDoppler1').on("click", function(){
	     crearInformeDoppler();
	});
	$('#popupGenerico').modal('show');
});

function crearInformeEcoSegTrim1(){
        var actCard;
        var movCorp;
        var ilatxt;

        elem=document.getElementsByName('accard');
        for(i=0;i<elem.length;i++)
            if (elem[i].checked) {
                actCard = elem[i].value;
            }

        elem=document.getElementsByName('movfet');
        for(i=0;i<elem.length;i++)
            if (elem[i].checked) {
                movCorp = elem[i].value;
            }

        if (actCard = 0){
            actCard = "sin actividad cardiaca";
        }
        else
        {
            actCard = "con actividad cardiaca";
        }
        if (movCorp = 0){
            movCorp = "sin movimientos corporales";
        }
        else
        {
            movCorp = "con movimientos corporales";
        }

        ilatxt = document.getElementById("ila").value;

        if (ilatxt > 0){
            ilatxt = " e ILA de " + ilatxt +" mm."
        }
        else{
            ilatxt = "."
        }
        
        var linea1 = "Feto en presentación " + document.getElementById("presentacion").value + ", dorso " + document.getElementById("dorso").value + ", " + actCard + " y " + movCorp + ".";
        var linea2 = "Frecuencia cardiaca fetal de " + document.getElementById("fcf").value + " x minuto.";
        var linea3 = "<strong>Anatomía fetal *</strong>  " + document.getElementById("ev-morfo").value + ", " + document.getElementById("comentarios-anatomia-informe-eg-texto").value;
        var linea4 = "<strong>Placenta</strong> inserción " + document.getElementById("incersion").value + " y de ubicación " + document.getElementById("ubicacion").value + ", grado " + document.getElementById("grado-placenta").value;
        var linea5 = "<strong>Cordón</strong> umbilical " + document.getElementById("cordon").value + ", identificandose "+ document.getElementById("vasos").value +" vasos.";
        var linea6 = "<strong>Líquido</strong> amniótico con bolsillo vertical mayor de " + document.getElementById("bvm").value + " mm" + ilatxt;
	
	var fur = $( "input[name='fum']").val();
	var fexamen = $( "input[name='fee']").val();
	var eg = $( "input[name='eg']").val();
	var fpp = $( "input[name='fpp']").val();
	var dbp = $( '#dbp').val();
	var dof = $( '#dof').val();
	var cc = $( '#cc').val();
	var ca = $( '#ca').val();
	var lf = $( '#lf').val();
	var pfe = $( '#pfe').val();
	var ic = $( '#dof-dbp').val();
	var tf = $( '#tallaFetal').val();
	
	var paciente = $( '#nombre-paciente').val();
	var idpaciente = $( '#id-paciente').val();
	var motivo = $( '#motivo-examen').val();
	var ecografista = $( '#ecografista').val();
	
	var InformeString = "<h3>Evaluación ecográfica del crecimiento fetal</h3><p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE</span><strong> Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE<strong> Motivo: </strong>:MOTIVO</p><p><strong>FUM: </strong>:FUR<br><strong>Ege: </strong>:EG semanas<br><strong>FPP: </strong>:FPP</p></div><div class='container'><p><strong>DESCRIPCIÓN</strong></p><p>:LINEA1<br>:LINEA2<br>:LINEA3<br>:LINEA4<br>:LINEA5<br>:LINEA6</p><p></p><p></p></div><div class='container'><table class='table'><thead><tr><th>BIOMETRÍAS**</th><th>Valor</th><th>Percentil de Crecimiento</th></tr></thead><tbody><tr><td>DBP:</td><td>:DBP</td></tr><tr><td>DOF:</td><td>:DOF</td></tr><tr><td>CC:</td><td>:CC</td><td></td></tr><tr><td>CA:</td><td>:CA</td><td></td></tr><tr><td>LF:</td><td>:LF</td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td>Peso Fetal Estimado (PFE)***</td><td>:PFE</td><td class='text-center'></td></tr><tr><td>Indice Cefálico</td><td>:IC</td><td class='text-center'></td></tr><tr><td>Talla Fetal estimada</td><td>:TF</td><td class='text-center'></td></tr><tr><td></td><td></td><td></td></tr></tbody></table></div><div class='container'><p><strong>COMENTARIOS Y OBSERVACIONES</strong></p><p id='comentarios-informe-eg' style='max-width: 700px;text-align: justify;'></p></div><div class='container'><p class='text-right top40' style='margin-right:100px;'>Ecografista: <strong>:ECOGRAFISTA</strong></p><p class='pie-pagina'>* Para evaluación morfológica, ceñirse a recomendaciones dadas en guías Perinatales MINSAL - Chile 2015<br>http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf<br>** Referencias para: Cráneo, Abdómen y Fémur. Hadlock y col. 1984<br>*** Referencia para crecimiento fetal Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad pct. 10 a 90)<br>**** Referencia liq. amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br>Software diseñado por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br>Este software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.</p></div>";
	
	
	InformeString = InformeString.replace(":PACIENTE", paciente);
	InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
	InformeString = InformeString.replace(":MOTIVO", motivo);
	InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
	
	InformeString = InformeString.replace(":FUR", fur);
	InformeString = InformeString.replace(":FEXAMEN", fexamen);
	InformeString = InformeString.replace(":EG", eg);
	InformeString = InformeString.replace(":FPP", fpp);
	InformeString = InformeString.replace(":DBP", dbp);
	InformeString = InformeString.replace(":DOF", dof);
	InformeString = InformeString.replace(":CC", cc);
	InformeString = InformeString.replace(":CA", ca);
	InformeString = InformeString.replace(":LF", lf);
	InformeString = InformeString.replace(":PFE", pfe);
	InformeString = InformeString.replace(":IC", ic);
	InformeString = InformeString.replace(":TF", tf);
	
	InformeString = InformeString.replace(":LINEA1", linea1);
	InformeString = InformeString.replace(":LINEA2", linea2);
	InformeString = InformeString.replace(":LINEA3", linea3);
	InformeString = InformeString.replace(":LINEA4", linea4);
	InformeString = InformeString.replace(":LINEA5", linea5);
	InformeString = InformeString.replace(":LINEA6", linea6);
	
	imprInforme(InformeString);
}

function crearInformeEcoSegTrim2(){

	var actCard;
        var movCorp;
        var ilatxt;

        elem=document.getElementsByName('accard');
        for(i=0;i<elem.length;i++)
            if (elem[i].checked) {
                actCard = elem[i].value;
            }

        elem=document.getElementsByName('movfet');
        for(i=0;i<elem.length;i++)
            if (elem[i].checked) {
                movCorp = elem[i].value;
            }

        if (actCard = 0){
            actCard = "sin actividad cardiaca";
        }
        else
        {
            actCard = "con actividad cardiaca";
        }
        if (movCorp = 0){
            movCorp = "sin movimientos corporales";
        }
        else
        {
            movCorp = "con movimientos corporales";
        }

        ilatxt = document.getElementById("ila").value;

        if (ilatxt > 0){
            ilatxt = " e ILA de " + ilatxt +" mm."
        }
        else{
            ilatxt = "."
        }

	var p50 = $('#egP50').val();
	var lh =  $( '#lh').val();
	var fur = $( "input[name='fum']").val();
	var fexamen = $( "input[name='fee']").val();
	var eg = $( "input[name='eg']").val();
	var fpp = $( "input[name='fpp']").val();
	var dbp = $( '#dbp').val();
	var cc = $( '#cc').val();
	var ca = $( '#ca').val();
	var lf = $( '#lf').val();
	var cb = $('#cerebelo').val();
	
	var paciente = $( '#nombre-paciente').val();
	var idpaciente = $( '#id-paciente').val();
	var motivo = $( '#motivo-examen').val();
	var ecografista = $( '#ecografista').val();

	var linea1 = "Feto en presentación " + document.getElementById("presentacion").value + ", dorso " + document.getElementById("dorso").value + ", " + actCard + " y " + movCorp + ".";
        var linea2 = "Frecuencia cardiaca fetal de " + document.getElementById("fcf").value + " x minuto.";
        var linea3 = "<strong>Anatomía fetal *</strong>  " + document.getElementById("ev-morfo").value + ", " + document.getElementById("comentarios-anatomia-informe-eg-texto").value;
        var linea4 = "<strong>Placenta</strong> inserción " + document.getElementById("incersion").value + " y de ubicación " + document.getElementById("ubicacion").value + ", grado " + document.getElementById("grado-placenta").value;
        var linea5 = "<strong>Cordón</strong> umbilical " + document.getElementById("cordon").value + ", identificandose "+ document.getElementById("vasos").value +" vasos.";
        var linea6 = "<strong>Líquido</strong> amniótico con bolsillo vertical mayor de " + document.getElementById("bvm").value + " mm" + ilatxt;
	
	var InformeString = "<h3>Determinación Ecográfica (Tardía) de la Edad Gestacional</h3><p><strong>Paciente Sra. (Srta.):</strong> :PACIENTE       <strong>Fecha de Exámen:</strong> :FEXAMEN</p><p><strong>ID Paciente: </strong>:IDPACIENTE              <strong>Motivo: </strong>:MOTIVO</p><p><strong>FUM: </strong> :FUR<br><strong>EG (UPM): </strong> :EG semanas</p></div><div class='container'><p><strong>DESCRIPCIÓN</strong></p><p>:LINEA1<br>:LINEA2<br>:LINEA3<br>:LINEA4<br>:LINEA5<br>:LINEA6</p><p></p><p></p></div><div class='container-fluid'><table class='table'><thead><tr><th>BIOMETRÍAS**</th><th>Valor (mm)</th><th class='text-center'>Edad Gestacional (semanas)</th></tr></thead><tbody><tr><td>DBP:</td><td>:DBP</td><td></td></tr><tr><td>CC:</td><td>:CC</td><td></td></tr><tr><td>CA:</td><td>:CA</td><td></td></tr><tr><td>LF:</td><td>:LF</td><td></td></tr><tr><td>LH:</td><td>:LH</td><td></td></tr><tr><td>Cerebelo (Diámetro transverso)***:</td><td>:CB</td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td>Biometría P50 (No incluido en la ecuación el perímetro abdominal)</td><td>:P50</td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table></div><div class='container-fluid'><p><strong>COMENTARIOS Y OBSERVACIONES</strong></p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container-fluid'><p class='text-right top40' style='margin-right:100px;'>Ecografista: <strong>:ECOGRAFISTA</strong></p><p class='pie-pagina'>* Para evaluación morfológica, ceñirse a recomendaciones dadas en guías Perinatales MINSAL - Chile 2015<br>http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf<br>** Referencias: CC y LF Hadlock y col. 1984; LH Jeanty y col.<br>*** Diámetro cerebeloso transverso Hill LM. y col. Obstet Gynecol. 1990; 75(6) : 981-5<br>**** Referencia liq. amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br>Software diseñado por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br>Este software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.</p></div>";

	var comentario = "Edad ecográfica (Bp50): " + p50 + "Semanas<br>Fum operacional: " + fur + "<br>Fecha probable de parto: " + fpp;
	
	InformeString = InformeString.replace(":PACIENTE", paciente);
	InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
	InformeString = InformeString.replace(":MOTIVO", motivo);
	InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);

	InformeString = InformeString.replace(":FUR", fur);
	InformeString = InformeString.replace(":FEXAMEN", fexamen);
	InformeString = InformeString.replace(":EG", eg);
	InformeString = InformeString.replace(":FPP", fpp);
	InformeString = InformeString.replace(":DBP", dbp);
	InformeString = InformeString.replace(":CC", cc);
	InformeString = InformeString.replace(":CA", ca);
	InformeString = InformeString.replace(":LF", lf);
	InformeString = InformeString.replace(":LH", lh);
	InformeString = InformeString.replace(":P50", p50);
	InformeString = InformeString.replace(":CB", cb);
	InformeString = InformeString.replace(":COMENTARIO", comentario);
	
	InformeString = InformeString.replace(":LINEA1", linea1);
	InformeString = InformeString.replace(":LINEA2", linea2);
	InformeString = InformeString.replace(":LINEA3", linea3);
	InformeString = InformeString.replace(":LINEA4", linea4);
	InformeString = InformeString.replace(":LINEA5", linea5);
	InformeString = InformeString.replace(":LINEA6", linea6);
	
	imprInforme(InformeString);
	
}

function crearInformeDoppler(){

	var InformeString = "<h3>Evaluación de flujometria doppler materno fetal</h3><p><strong>Paciente Sra. (Srta.):</strong> :PACIENTE</span>      <strong>Fecha de Exámen:</strong> :FEXAMEN</p><p><strong>ID Paciente: </strong>:IDPACIENTE              <strong>Motivo: </strong>:MOTIVO</p><p><strong>FUM: </strong> :FUM<br><strong>Ege: </strong> :EG semanas<br><strong>FPP: </strong> :FPP</p></div><div class='container'><p><strong>Antecedentes y descripción general del feto y anexos ovulares</strong></p><p>Motivo del exámen: :MOTIVODOPPLER<br>Antecedentes Obstétricos: :ANTECEDENTES<br>Feto en Presentación: :PRESENTACION<br>Motilidad Fetal: :MOTILIDAD<br>Ubicación Placentaria: :UBICACION<br>Líquido Amniótico***: :LIQUIDO<br>Medida única de BVM***: :BVM</p></div><div class='container'><table class='table'><thead><tr><th>Flujometrías</th><th>Medidas</th><th>IP Referencia para E.G.</th><th>Percentiles de IP</th></tr></thead><tbody><tr><td>Arteria Uterina Derecha*</td><td>:UD</td><td>:UDRGO</td><td>:UDTXT</td></tr><tr><td>Arteria Uterina Izquierda*</td><td>:UI</td><td>:UIRGO</td><td>:UITXT</td></tr><tr><td>Prom. Arterias Uterinas*</td><td>:UPROM</td><td>:UPROMRGO</td><td>:UPROMTXT</td></tr><tr><td>Arteria Umbilical**</td><td>:AU</td><td>:AURGO</td><td>:AUTXT</td></tr><tr><td>Arteria Cerebral Media**</td><td>:ACM</td><td>:ACMRGO</td><td>:ACMTXT</td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td>Relación CCP**</td><td>:CCP</td><td>:CCPRGO</td><td>:CCPTXT</td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table></div><div class='container'><p><strong>Comentarios y observaciones</strong></p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container'><p class='text-right top40' style='margin-right:100px;'>Ecografista: :ECOGRAFISTA</p><p class='pie-pagina'>* Referencia para Doppler promedio de arterias uterinas: Gómes O. UOG 2008; 32:128<br>** Referencia para Doppler de arteria umbilical, C Media y CCP Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127<br>*** Referencia para Liq. Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br>Software diseñado por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br>Este software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.</p></div>";

	var paciente = $( '#nombre-paciente').val();
	var idpaciente = $( '#id-paciente').val();
	var motivo = $( '#motivo-examen').val();
	var ecografista = $( '#ecografista').val();

	var fur = $( "input[name='fum']").val();
	var fexamen = $( "input[name='fee']").val();
	var eg = $( "input[name='eg']").val();
	var fpp = $( "input[name='fpp']").val();
	
	var bvm = $('#bvm-doppler').val();
	var comentario = "";
	
	var motivoDoppler = $( '#motivo-doppler').val();
	var antecedentes = $( '#antecedentes-doppler').val();
	var motilidad = $( '#motilidad-doppler').val();
	var ubicacion = $( '#ubicacion-doppler').val();
	var liquido = $( '#liq-amnio-doppler').val();
	var ud = $( '#aud').val();
	var udTxt = $( '#audPctTxt').val();
	var udRgo = $( '#audRngo').val();
	var ui = $( '#aui').val();
	var uiTxt = $( '#auiPctTxt').val();
	var uiRgo = $( '#auiRngo').val();
	var uprom = $( '#auprom').val();
	var upromTxt = $( '#auPctTxt').val();
	var upromRgo = $( '#auRngo').val();
	var au = $( '#ipau').val();
	var auTxt = $( '#ipauPctTxt').val();
	var auRgo = $( '#ipauRngo').val();
	var acm = $( '#ipacm').val();
	var acmTxt = $( '#ipacmPctTxt').val();
	var acmRgo = $( '#ipacmRngo').val();
	var ccp = $( '#ccp').val();
	var ccpTxt = $( '#ccpPctTxt').val();
	var ccpRgo = $( '#ccpRngo').val();
	
	
	InformeString = InformeString.replace(":PACIENTE", paciente);
	InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
	InformeString = InformeString.replace(":MOTIVO", motivo);
	InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
	
	InformeString = InformeString.replace(":FUM", fur);
	InformeString = InformeString.replace(":FEXAMEN", fexamen);
	InformeString = InformeString.replace(":EG", eg);
	InformeString = InformeString.replace(":FPP", fpp);
	
	InformeString = InformeString.replace(":MOTIVODOPPLER", motivoDoppler);
	InformeString = InformeString.replace(":ANTECEDENTES", antecedentes);
	InformeString = InformeString.replace(":MOTILIDAD", motilidad);
	InformeString = InformeString.replace(":UBICACION", ubicacion);
	InformeString = InformeString.replace(":LIQUIDO", liquido);
	InformeString = InformeString.replace(":BVM", bvm);
	InformeString = InformeString.replace(":UD", ud);
	InformeString = InformeString.replace(":UDRGO", udRgo);
	InformeString = InformeString.replace(":UDTXT", udTxt);
	InformeString = InformeString.replace(":UI", ui);
	InformeString = InformeString.replace(":UIRGO", uiRgo);
	InformeString = InformeString.replace(":UITXT", uiTxt);
	InformeString = InformeString.replace(":UPROM", uprom);
	InformeString = InformeString.replace(":UPROMRGO", upromRgo);
	InformeString = InformeString.replace(":UPROMTXT", upromTxt);
	InformeString = InformeString.replace(":AU", au);
	InformeString = InformeString.replace(":AURGO", auRgo);
	InformeString = InformeString.replace(":AUTXT", auTxt);
	InformeString = InformeString.replace(":ACM", acm);
	InformeString = InformeString.replace(":ACMRGO", acmRgo);
	InformeString = InformeString.replace(":ACMTXT", acmTxt);
	InformeString = InformeString.replace(":CCP", ccp);
	InformeString = InformeString.replace(":CCPRGO", ccpRgo);
	InformeString = InformeString.replace(":CCPTXT", ccpTxt);
	InformeString = InformeString.replace(":COMENTARIO", comentario);
	
	imprInforme(InformeString);
	
}

////////////////////////////////////////////
// Ajuste primer trimestre
//
////////////////////////////////////////////

$("input[name='ajustarEcoPrimTrim']").on("change", function(){
	event.preventDefault();
	if ($(this).is(":checked")){
		if ($(this).val() == 1){
			var LCN = parseInt($('#lcn').val());
			var saco = parseInt($('#saco').val());
			var eg = parseFloat($("input[name='eg']").val());
			var oneday = 1000 * 60 * 60 * 24;
			
			if (isNaN(LCN) | LCN < 0 | isNaN(eg) | eg < 1) {
				if (isNaN(saco) | saco < 0 | isNaN(eg) | eg < 1) {
					$('#popupTitle').html("Información");
					$('#popupBody').html("<p>El paciente debe tener una Edad Gestacional y un valor en LCN o Saco Gestacional</p>");
					$('#popupGenerico').modal('show');
				}
				else{
					var EGsaco = parseFloat($('#sacoPct').val());
					var eg1 = new Number((Math.floor(EGsaco) * 7) + Math.round((EGsaco - Math.floor(EGsaco)) * 7));
					var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
					var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
					diferencia = diferencia * oneday;
					var FUM = localStorage.fum;
					FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
					FUM = new Date (FUM);
					var B = new Date();
  					B.setTime(FUM.getTime() + diferencia);
					$("#fum-tres").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
					$("#fum-tres").trigger("change");
					$('#furAjustada').val($("input[name='fum']").val());
					$('#egAjustada').val($("input[name='eg']").val());
					$('#fppAjustada').val($("input[name='fpp']").val());
				}
			}
			else{
				var EGLCN = parseFloat($('#lcnPct').val());
				var eg1 = new Number((Math.floor(EGLCN) * 7) + Math.round((EGLCN - Math.floor(EGLCN)) * 7));
				var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
				var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
				diferencia = diferencia * oneday;
				var FUM = localStorage.fum;
				FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
				FUM = new Date (FUM);
				var B = new Date();
  				B.setTime(FUM.getTime() + diferencia);
				$("#fum-tres").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
				$("#fum-tres").trigger("change");
				$('#furAjustada').val($("input[name='fum']").val());
				$('#egAjustada').val($("input[name='eg']").val());
				$('#fppAjustada').val($("input[name='fpp']").val());
				
			}
			$('#resultadoAjusteEcoPrimTrim').show();
		}
		else{
			$('#resultadoAjusteEcoPrimTrim').hide();
		}
	}
});

$( "#ecoPrimTrimSubir" ).on("click", function( event ) {
  $('#graficoLcn').focus();
});

////////////////////////////////////////////
function calcularEG(){
 var FExamen, FUM, EdadGestacional;
 var undia = 1000 * 60 * 60 * 24;
 var unasemana = undia * 7;
  
    FUM = localStorage.fum;
    FExamen = localStorage.fee;
  
    FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
    FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy

  FUM = new Date (FUM);
  FExamen = new Date (FExamen);
  
  EdadGestacional = ((FExamen.getTime() - FUM.getTime()) / unasemana).toFixed(1);
  var B = new Date();
  B.setTime(FUM.getTime() + 40 * unasemana);    
  $("#fppPaciente").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
  $("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
  
  if (FExamen.getTime() < FUM.getTime()) {
    EdadGestacional = "0";
  }
  else if (((FExamen.getTime() - FUM.getTime()) / unasemana) > 42) {
    EdadGestacional = "42";
  }
  else {
    EdadGestacional = Math.floor(EdadGestacional)+"."+Math.round((EdadGestacional - Math.floor(EdadGestacional))*7);
  }
 
  return EdadGestacional;
}

function calcularEdad(){
	var fcumpleanos, Edad;
	var d = new Date();
	var undia = 1000 * 60 * 60 * 24;
 	var unasemana = undia * 7;
	var unano = undia * 365;
	
	fcumpleanos = new Date($("#fNacimiento").val());

	Edad = ((d.getTime() - fcumpleanos.getTime()) / unano).toFixed(0);

	return Edad;
}

function deDBP() {
	var DBPMenos2DE = [];
	var DBPMas2DE = [];

	DBPMenos2DE[0] = 14;	DBPMenos2DE[1] = 17;
	DBPMenos2DE[2] = 19;	DBPMenos2DE[3] = 25;
	DBPMenos2DE[4] = 29;	DBPMenos2DE[5] = 33;
	DBPMenos2DE[6] = 34;	DBPMenos2DE[7] = 38;
	DBPMenos2DE[8] = 41;	DBPMenos2DE[9] = 43;
	DBPMenos2DE[10] = 46;	DBPMenos2DE[11] = 49;
	DBPMenos2DE[12] = 52;	DBPMenos2DE[13] = 54;
	DBPMenos2DE[14] = 57;	DBPMenos2DE[15] = 61;
	DBPMenos2DE[16] = 63;	DBPMenos2DE[17] = 65;
	DBPMenos2DE[18] = 69;	DBPMenos2DE[19] = 69;
	DBPMenos2DE[20] = 74;	DBPMenos2DE[21] = 74;
	DBPMenos2DE[22] = 77;	DBPMenos2DE[23] = 78;
	DBPMenos2DE[24] = 78;	DBPMenos2DE[25] = 81;
	DBPMenos2DE[26] = 85;	DBPMenos2DE[27] = 88;

	DBPMas2DE[0] = 25;	DBPMas2DE[1] = 29;
	DBPMas2DE[2] = 33;	DBPMas2DE[3] = 35;
	DBPMas2DE[4] = 41;	DBPMas2DE[5] = 42;
	DBPMas2DE[6] = 46;	DBPMas2DE[7] = 50;
	DBPMas2DE[8] = 52;	DBPMas2DE[9] = 56;
	DBPMas2DE[10] = 59;	DBPMas2DE[11] = 63;
	DBPMas2DE[12] = 66;	DBPMas2DE[13] = 70;
	DBPMas2DE[14] = 71;	DBPMas2DE[15] = 75;
	DBPMas2DE[16] = 77;	DBPMas2DE[17] = 81;
	DBPMas2DE[18] = 83;	DBPMas2DE[19] = 87;
	DBPMas2DE[20] = 88;	DBPMas2DE[21] = 91;
	DBPMas2DE[22] = 94;	DBPMas2DE[23] = 95;
	DBPMas2DE[24] = 97;	DBPMas2DE[25] = 99;
	DBPMas2DE[26] = 97;	DBPMas2DE[27] = 106;

	var eg=0;
	eg=parseFloat(localStorage.eg);
	var dbp = $("#dbp").val();
	var dof = $("#dof").val();
	dbp = dbp.toString();
    	dbp = dbp.replace(",", ".");
	dbp = parseFloat(dbp);

	if (eg < 12) {
		$("#dbpDE").val('0');
	}
	else if (eg > 40)
	{
		$("#dbpDE").val('0');
	}
	else {
		eg = eg - 12;
		eg = parseInt(eg);

		var uno = DBPMas2DE[eg] - DBPMenos2DE[eg];
		var dos = dbp - DBPMenos2DE[eg];
		var resultado = (parseInt(95 / (uno) * (dos) + 3));
		ajustarProgreso(resultado, "dbpDE");
		p50();
	}
	
	if (dbp > 0){
		if (dof > 0){
			var valor = ((dbp/dof)*100);
			$('#dof-dbp').val(valor.toFixed(0) + "%");
			$('#ic').val(valor.toFixed(0) + "%");
		}
		else{
			$('#dof-dbp').val("0");
			$('#ic').val("0");
		}
	}
	else{
		$('#dof-dbp').val("0");
		$('#ic').val("0");
	}
}

function calcdof(){

	var dbp = $("#dbp").val();
	var dof = $("#dof").val();
	
	if (dbp > 0){
		if (dof > 0){
			var valor = ((dbp/dof)*100);
			$('#dof-dbp').val(valor.toFixed(0) + "%");
			$('#ic').val(valor.toFixed(0) + "%");
		}
		else{
			$('#dof-dbp').val("0");
			$('#ic').val("0");
		}
	}
	else{
		$('#dof-dbp').val("0");
		$('#ic').val("0");
	}
}

function pctcc() {

 var pct3 = [], pct97 = [];

 pct3[0] = 64;pct3[1] = 74;pct3[2] = 88;pct3[3] = 100;pct3[4] = 113;pct3[5] = 126;
 pct3[6] = 137;pct3[7] = 149;pct3[8] = 161;pct3[9] = 172;pct3[10] = 183;
 pct3[11] = 194;pct3[12] = 204;pct3[13] = 214;pct3[14] = 224;pct3[15] = 233;
 pct3[16] = 242;pct3[17] = 250;pct3[18] = 258;pct3[19] = 267;pct3[20] = 274;
 pct3[21] = 280;pct3[22] = 287;pct3[23] = 293;pct3[24] = 299;pct3[25] = 303;
 pct3[26] = 308;pct3[27] = 311;pct3[28] = 315;

 pct97[0] = 81;pct97[1] = 94;pct97[2] = 106;pct97[3] = 120;pct97[4] = 135;
 pct97[5] = 150;pct97[6] = 165;pct97[7] = 179;pct97[8] = 193;pct97[9] = 206;
 pct97[10] = 219;pct97[11] = 232;pct97[12] = 243;pct97[13] = 256;pct97[14] = 268;
 pct97[15] = 279;pct97[16] = 290;pct97[17] = 300;pct97[18] = 310;pct97[19] = 319;
 pct97[20] = 328;pct97[21] = 336;pct97[22] = 343;pct97[23] = 351;pct97[24] = 358;
 pct97[25] = 363;pct97[26] = 368;pct97[27] = 373;pct97[28] = 377;

 var eg=0, cc=0;

 eg=parseFloat(localStorage.eg);
 cc=parseInt(document.getElementById("cc").value);

 if (eg < 12) {
         $("#ccPct").val("0");
 }
 else if (eg > 40){ 
         $("#ccPct").val("0");
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=cc - pct3[eg];
  ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "ccPct");
	 psohdlk();
	 p50();
 }
};

function pctca() {

 var pct3 = [], pct97 = [];

 pct3[0] = 42;pct3[1] = 52;pct3[2] = 64;pct3[3] = 75;pct3[4] = 86;
 pct3[5] = 97;pct3[6] = 109;pct3[7] = 119;pct3[8] = 131;pct3[9] = 141;
 pct3[10] = 151;pct3[11] = 161;pct3[12] = 171;pct3[13] = 181;
 pct3[14] = 191;pct3[15] = 200;pct3[16] = 209;pct3[17] = 218;pct3[18] = 227;
 pct3[19] = 236;pct3[20] = 245;pct3[21] = 253;pct3[22] = 261;pct3[23] = 269;
 pct3[24] = 277;pct3[25] = 285;pct3[26] = 292;pct3[27] = 299;pct3[28] = 307;

 pct97[0] = 71;pct97[1] = 79;pct97[2] = 92;pct97[3] = 102;pct97[4] = 113;
 pct97[5] = 127;pct97[6] = 141;pct97[7] = 155;pct97[8] = 170;
 pct97[9] = 183;pct97[10] = 192;pct97[11] = 209;pct97[12] = 223;
 pct97[13] = 235;pct97[14] = 248;pct97[15] = 260;pct97[16] = 271;pct97[17] = 284;
 pct97[18] = 295;pct97[19] = 306;pct97[20] = 318;pct97[21] = 329;pct97[22] = 339;
 pct97[23] = 349;pct97[24] = 359;pct97[25] = 370;pct97[26] = 380;pct97[27] = 389;
 pct97[28] = 399;

 var eg=0, ca=0;

 eg=parseFloat(localStorage.eg);
 ca=parseInt(document.getElementById("ca").value);

 if (eg < 12) {
         $("#caPct").val("0");
 }
 else if (eg > 40){ 
         $("#caPct").val("0");
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=ca - pct3[eg];
	 ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "caPct");
	 psohdlk();
	 p50();
 }
};

function pctlf() {

 var pct3 = [], pct97 = [];

 pct3[0] = 7;pct3[1] = 9;pct3[2] = 12;pct3[3] = 15;pct3[4] = 17;pct3[5] = 21;
 pct3[6] = 23;pct3[7] = 26;pct3[8] = 28;pct3[9] = 30;pct3[10] = 33;pct3[11] = 35;
 pct3[12] = 38;pct3[13] = 40;pct3[14] = 42;pct3[15] = 44;pct3[16] = 46;
 pct3[17] = 48;pct3[18] = 50;pct3[19] = 52;pct3[20] = 53;pct3[21] = 55;
 pct3[22] = 57;pct3[23] = 59;pct3[24] = 60;pct3[25] = 62;pct3[26] = 64;
 pct3[27] = 65;pct3[28] = 66;

 pct97[0] = 12;pct97[1] = 14;pct97[2] = 17;pct97[3] = 20;pct97[4] = 23;pct97[5] = 27;
 pct97[6] = 31;pct97[7] = 34;pct97[8] = 38;pct97[9] = 40;pct97[10] = 43;pct97[11] = 47;
 pct97[12] = 50;pct97[13] = 52;pct97[14] = 56;pct97[15] = 58;pct97[16] = 62;
 pct97[17] = 64;pct97[18] = 66;pct97[19] = 68;pct97[20] = 71;pct97[21] = 73;
 pct97[22] = 75;pct97[23] = 78;pct97[24] = 80;pct97[25] = 82;pct97[26] = 84;
 pct97[27] = 86;pct97[28] = 88;

 var eg=0, lf=0;

 eg=parseFloat(localStorage.eg);
 lf=parseInt(document.getElementById("lf").value);

 if (eg < 12) {
         $("#lfPct").val("0");
 }
 else if (eg > 40){ 
         $("#lfPct").val("0");
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=lf - pct3[eg];
	 ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "lfPct");
	 p50();
	 $('#tallaFetal').val(parseInt(lf * 0.55 + 9.6));
	 //$('#tallaFetal').val(parseInt(6.18+5.9*lf/10));

	 eg = eg + 12;
	 
	 if (eg >= 24){
	 
	  var Pct90Talla = [];
	  var Pct10Talla = [];
	  Pct90Talla[24] = 34.1;
	  Pct90Talla[25] = 35.7;
	  Pct90Talla[26] = 37.2;
	  Pct90Talla[27] = 38.7;
	  Pct90Talla[28] = 40.1;
	  Pct90Talla[29] = 41.6;
	  Pct90Talla[30] = 43.1;
	  Pct90Talla[31] = 44.3;
	  Pct90Talla[32] = 45.6;
	  Pct90Talla[33] = 46.8;
	  Pct90Talla[34] = 47.9;
	  Pct90Talla[35] = 49.1;
	  Pct90Talla[36] = 49.9;
	  Pct90Talla[37] = 50.8;
	  Pct90Talla[38] = 51.5;
	  Pct90Talla[39] = 52.1;
	  Pct90Talla[40] = 52.6;
	  Pct90Talla[41] = 52.9;
	  Pct90Talla[42] = 53.1;		 
		 
	  Pct10Talla[24] = 29.8;
	  Pct10Talla[25] = 31.1;
	  Pct10Talla[26] = 32.3;
	  Pct10Talla[27] = 33.6;
	  Pct10Talla[28] = 35.1;
	  Pct10Talla[29] = 36.5;
	  Pct10Talla[30] = 37.7;
	  Pct10Talla[31] = 39.1;
	  Pct10Talla[32] = 40.5;
	  Pct10Talla[33] = 41.8;
	  Pct10Talla[34] = 43.1;
	  Pct10Talla[35] = 44.2;
	  Pct10Talla[36] = 45.3;
	  Pct10Talla[37] = 46.3;
	  Pct10Talla[38] = 47.2;
	  Pct10Talla[39] = 47.9;
	  Pct10Talla[40] = 48.5;
	  Pct10Talla[41] = 48.8;
	  Pct10Talla[42] = 49.1;

          eg = parseInt(eg);
          var tallaFet = $('#tallaFetal').val(); 
          uno=Pct90Talla[eg] -  Pct10Talla[eg];
          dos=tallaFet -  Pct10Talla[eg];
		 
          ajustarProgreso(parseInt(80 / (uno) * (dos) + 10), "tallaPct");
		 ipn()
	 } 
 }
};

function pctcb() {

//cerebelo segun Hill
var pct2ds = [];
var pctmedia = [];
var pct2dsmas = [];

 pct2ds[0] = 12;pct2ds[1] = 14;pct2ds[2] = 15;pct2ds[3] = 16;pct2ds[4] = 17;pct2ds[5] = 18;
 pct2ds[6] = 19;pct2ds[7] = 20;pct2ds[8] = 21;pct2ds[9] = 22;pct2ds[10] = 24;
 pct2ds[11] = 26;pct2ds[12] = 27;pct2ds[13] = 29;pct2ds[14] = 30;pct2ds[15] = 31;
 pct2ds[16] = 33;pct2ds[17] = 36;pct2ds[18] = 37;pct2ds[19] = 38;pct2ds[20] = 40;
 pct2ds[21] = 40;pct2ds[22] = 40;pct2ds[23] = 41;pct2ds[24] = 42;pct2ds[25] = 44;

 pctmedia[0] = 15;pctmedia[1] = 16;pctmedia[2] = 17;pctmedia[3] = 18;pctmedia[4] = 20;
 pctmedia[5] = 20;pctmedia[6] = 22;pctmedia[7] = 23;pctmedia[8] = 24;pctmedia[9] = 26;
 pctmedia[10] = 28;pctmedia[11] = 30;pctmedia[12] = 31;pctmedia[13] = 33;pctmedia[14] = 34;
 pctmedia[15] = 37;pctmedia[16] = 39;pctmedia[17] = 41;pctmedia[18] = 43;pctmedia[19] = 46;
 pctmedia[20] = 47;pctmedia[21] = 49;pctmedia[22] = 51;pctmedia[23] = 51;pctmedia[24] = 52;
 pctmedia[25] = 52

 pct2dsmas[0] = 18;pct2dsmas[1] = 18;pct2dsmas[2] = 19;pct2dsmas[3] = 20;pct2dsmas[4] = 22;
 pct2dsmas[5] = 23;pct2dsmas[6] = 25;pct2dsmas[7] = 26;pct2dsmas[8] = 27;pct2dsmas[9] = 30;
 pct2dsmas[10] = 32;pct2dsmas[11] = 34;pct2dsmas[12] = 34;pct2dsmas[13] = 37;pct2dsmas[14] = 38;
 pct2dsmas[15] = 41;pct2dsmas[16] = 43;pct2dsmas[17] = 46;pct2dsmas[18] = 48;pct2dsmas[19] = 53;
 pct2dsmas[20] = 56;pct2dsmas[21] = 58;pct2dsmas[22] = 60;pct2dsmas[23] = 62;pct2dsmas[24] = 62;
 pct2dsmas[25] = 62;


 var eg=0;
 var cb=0;
 eg=parseFloat(localStorage.eg);
 cb=parseInt(document.getElementById("cerebelo").value);

 if (eg < 15) {$("#cbPct").val("0");}
 else if (eg > 40){$("#cbPct").val("0");}
 else {

  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct2dsmas[eg] - pct2ds[eg];
  var dos=cb - pct2ds[eg];
  $("#cerebeloPct").val(parseInt(95 / (uno) * (dos)));
	 ajustarProgreso(parseInt(95 / (uno) * (dos)), "cerebeloPct");
	 p50();
 }
};

function pctlh() {

 var pct05 = [];
 var pct95 = [];

        pct05[12] = 4.8;   pct95[12] = 12.3;        pct05[13] = 7.6;   pct95[13] = 15.1;
        pct05[14] = 10.3;  pct95[14] = 17.9;        pct05[15] = 13.1;  pct95[15] = 20.7;
        pct05[16] = 15.8;  pct95[16] = 23.5;        pct05[17] = 18.5;  pct95[17] = 26.3;
        pct05[18] = 21.2;  pct95[18] = 29.1;        pct05[19] = 23.8;  pct95[19] = 31.6;
        pct05[20] = 26.3;  pct95[20] = 34.2;        pct05[21] = 28.8;  pct95[21] = 36.7;
        pct05[22] = 31.2;  pct95[22] = 39.2;        pct05[23] = 33.5;  pct95[23] = 41.6;
        pct05[24] = 35.7;  pct95[24] = 43.9;        pct05[25] = 37.9;  pct95[25] = 46.1;
        pct05[26] = 39.9;  pct95[26] = 48.1;        pct05[27] = 41.9;  pct95[27] = 50.1;
        pct05[28] = 43.7;  pct95[28] = 52.1;        pct05[29] = 45.5;  pct95[29] = 53.9;
        pct05[30] = 47.2;  pct95[30] = 55.6;        pct05[31] = 48.9;  pct95[31] = 57.3;
        pct05[32] = 50.4;  pct95[32] = 58.9;        pct05[33] = 52.1;  pct95[33] = 60.5;
        pct05[34] = 53.4;  pct95[34] = 62.1;        pct05[35] = 54.8;  pct95[35] = 63.5;
        pct05[36] = 56.2;  pct95[36] = 64.9;        pct05[37] = 57.6;  pct95[37] = 66.4;
        pct05[38] = 59.8;  pct95[38] = 67.8;        pct05[39] = 60.4;  pct95[39] = 69.3;
        pct05[40] = 61.9;  pct95[40] = 70.8;
	
	var eg=0;
 	var cb=0;
 	eg=parseFloat(localStorage.eg);
 	lh=parseInt($("#lh").val());

        if (eg < 12) {
        	$("#lhPct").val('0');
        }
        else if (eg > 40) {
        	$("#lhPct").val('0');
        }
        else {
        	eg = parseInt(eg);
		var uno = pct95[eg] - pct05[eg];
		var dos = lh - pct05[eg];
		var resultado = (parseInt(95 / (uno) * (dos) + 5));
		 ajustarProgreso(resultado, "lhPct");
		p50();
	}
}

function egsaco() {

var y = [];

    y[5] =4.2;    y[6] =4.3;    y[7] =4.4;    y[8] =4.5;
    y[9] =4.6;    y[10] =5;    y[11] =5.1;    y[12] =5.2;
    y[13] =5.3;    y[14] =5.4;    y[15] =5.5;    y[16] =5.6;
    y[17] =6;    y[18] =6.1;    y[19] =6.2;    y[20] =6.3;
    y[21] =6.4;    y[22] =6.5;    y[23] =6.6;    y[24] =7;
    y[25] =7.1;    y[26] =7.2;    y[27] =7.3;    y[28] =7.4;
    y[29] =7.5;    y[30] =7.6;    y[31] =8;    y[32] =8.1;
    y[33] =8.2;    y[34] =8.3;    y[35] =8.4;    y[36] =8.5;
    y[37] =8.6;    y[38] =9;    y[39] =9.1;    y[40] =9.2;
    y[41] =9.3;    y[42] =9.4;    y[43] =9.5;    y[44] =9.6;
    y[45] =9.6;    y[46] =10;    y[47] =10.1;    y[48] =10.2;
    y[49] =10.3;    y[50] =10.4;    y[51] =10.5;    y[52] =11;
    y[53] =11.1;    y[54] =11.2;    y[55] =11.3;    y[56] =11.4;
    y[57] =11.5;    y[58] =11.6;    y[59] =12;    y[60] =12.1;
    y[61] =12.2;
	
    var saco = document.getElementById("saco").value;
    saco = saco.replace(",", ".");
    var prs = parseInt(saco);

    if (prs < 5) {
        $("#sacoPct").val("0");
    }
    else if (prs > 61) {
        $("#sacoPct").val("0");
    }
    else {
        var egsaco = y[prs];
	$("#sacoPct").val(egsaco);
    }
};

function eglcn() {

    var LCN = [[],[]];

    LCN[0][0] = 0.09; LCN[0][1] = 0.2; LCN[0][2] = 0.37;
    LCN[0][3] = 0.57; LCN[0][4] = 0.7; LCN[0][5] = 0.8;
    LCN[0][6] = 0.9; LCN[0][7] = 1; LCN[0][8] = 1.1;
    LCN[0][9] = 1.12; LCN[0][10] = 1.13; LCN[0][11] = 1.18;
    LCN[0][12] = 1.27; LCN[0][13] = 1.38; LCN[0][14] = 1.47;
    LCN[0][15] = 1.58; LCN[0][16] = 1.65; LCN[0][17] = 1.72;
    LCN[0][18] = 1.87; LCN[0][19] = 1.96; LCN[0][20] = 2.05;
    LCN[0][21] = 2.18; LCN[0][22] = 2.25; LCN[0][23] = 2.35;
    LCN[0][24] = 2.54; LCN[0][25] = 2.62; LCN[0][26] = 2.7;
    LCN[0][27] = 2.9; LCN[0][28] = 3.08; LCN[0][29] = 3.16;
    LCN[0][30] = 3.4; LCN[0][31] = 3.51; LCN[0][32] = 3.57;
    LCN[0][33] = 3.76; LCN[0][34] = 3.85; LCN[0][35] = 4.05;
    LCN[0][36] = 4.18; LCN[0][37] = 4.46; LCN[0][38] = 4.55;
    LCN[0][39] = 4.66; LCN[0][40] = 4.88; LCN[0][41] = 5.07;
    LCN[0][42] = 5.29; LCN[0][43] = 5.46; LCN[0][44] = 5.66;
    LCN[0][45] = 5.87; LCN[0][46] = 6.01; LCN[0][47] = 6.27;
    LCN[0][48] = 6.37; LCN[0][49] = 6.65; LCN[0][50] = 6.77;
    LCN[0][51] = 7.08; LCN[0][52] = 7.19; LCN[0][53] = 7.39;
    LCN[0][54] = 7.57; LCN[0][55] = 7.68; LCN[0][56] = 7.98;
    LCN[0][57] = 8.09; LCN[0][58] = 8.35; LCN[0][59] = 8.48;
    LCN[0][60] = 8.56; LCN[0][61] = 8.76; LCN[0][62] = 8.88;
    LCN[0][63] = 9.09;

    LCN[1][0] = 0; LCN[1][1] = 5.5; LCN[1][2] = 6;
    LCN[1][3] = 6.2; LCN[1][4] = 6.4; LCN[1][5] = 6.5;
    LCN[1][6] = 6.6; LCN[1][7] = 7.1; LCN[1][8] = 7.1;
    LCN[1][9] = 7.1; LCN[1][10] = 7.2; LCN[1][11] = 7.3;
    LCN[1][12] = 7.4; LCN[1][13] = 7.5; LCN[1][14] = 7.6;
    LCN[1][15] = 8; LCN[1][16] = 8.1; LCN[1][17] = 8.2;
    LCN[1][18] = 8.3; LCN[1][19] = 8.4; LCN[1][20] = 8.5;
    LCN[1][21] = 8.6; LCN[1][22] = 9; LCN[1][23] = 9.1;
    LCN[1][24] = 9.2; LCN[1][25] = 9.3; LCN[1][26] = 9.4;
    LCN[1][27] = 9.5; LCN[1][28] = 10; LCN[1][29] = 10.1;
    LCN[1][30] = 10.2; LCN[1][31] = 10.3; LCN[1][32] = 10.4;
    LCN[1][33] = 10.5; LCN[1][34] = 10.6; LCN[1][35] = 11;
    LCN[1][36] = 11.1; LCN[1][37] = 11.2; LCN[1][38] = 11.3;
    LCN[1][39] = 11.4; LCN[1][40] = 11.5; LCN[1][41] = 11.6;
    LCN[1][42] = 12; LCN[1][43] = 12.1; LCN[1][44] = 12.2;
    LCN[1][45] = 12.3; LCN[1][46] = 12.4; LCN[1][47] = 12.5;
    LCN[1][48] = 12.6; LCN[1][49] = 13; LCN[1][50] = 13.1;
    LCN[1][51] = 13.2; LCN[1][52] = 13.3; LCN[1][53] = 13.4;
    LCN[1][54] = 13.5; LCN[1][55] = 13.6; LCN[1][56] = 14;
    LCN[1][57] = 14.1; LCN[1][58] = 14.2; LCN[1][59] = 14.3;
    LCN[1][60] = 14.4; LCN[1][61] = 14.5; LCN[1][62] = 14.6;
    LCN[1][63] = 15;
	
    var lcn = document.getElementById("lcn").value;
    lcn = lcn.toString();
    lcn = lcn.replace(",", ".");
    lcn = parseFloat(lcn);

    if (isNaN(lcn) != true){
	    if (lcn > 90) {
		$("#lcnPct").val("0");
	    }
	    else if (lcn < 1){
	    	$("#lcnPct").val("0");
	    }
	    else {

		    var ValLCN1 = lcn / 10;

		    for (i = 1; i <= 63; i ++ ) {
			if (LCN[0][i] >= ValLCN1) {
			    var eglcn = LCN[1][i];
			    i = 63;
			}
		    }
		    $("#lcnPct").val(eglcn);
	    }
    }
    else{
    	$("#lcnPct").val("0");
    }
};

function pctdv() {

 var pct5 = [];
 var pct95 = [];

 pct5[0] = 0.32; pct5[1] = 0.32; pct5[2] = 0.32; pct5[3] = 0.32;
 pct5[4] = 0.32; pct5[5] = 0.32; pct5[6] = 0.31; pct5[7] = 0.31;
 pct5[8] = 0.31; pct5[9] = 0.3; pct5[10] = 0.29; pct5[11] = 0.28;
 pct5[12] = 0.28; pct5[13] = 0.27; pct5[14] = 0.26; pct5[15] = 0.25;
 pct5[16] = 0.24; pct5[17] = 0.23; pct5[18] = 0.22; pct5[19] = 0.21;
 pct5[20] = 0.2;
    
 pct95[0] = 0.83; pct95[1] = 0.83; pct95[2] = 0.83; pct95[3] = 0.83;
 pct95[4] = 0.83; pct95[5] = 0.83; pct95[6] = 0.82; pct95[7] = 0.82;
 pct95[8] = 0.81; pct95[9] = 0.81; pct95[10] = 0.8; pct95[11] = 0.79;
 pct95[12] = 0.78; pct95[13] = 0.77; pct95[14] = 0.76; pct95[15] = 0.75;
 pct95[16] = 0.74; pct95[17] = 0.73; pct95[18] = 0.72; pct95[19] = 0.71;
 pct95[20] = 0.7;


 var eg=0;
 
 eg=parseFloat(localStorage.eg);
 var dv = document.getElementById("dv").value;
dv = dv.toString();
 dv = dv.replace(",", ".");
 dv = parseFloat(dv);
	
 if (eg < 20) {  
   $("#dvPct").val("0");
 }
 else if (eg > 40)
 {
   $("#dvPct").val("0");
 }
 else {
      eg = eg - 20;
      eg = parseInt(eg);
      var uno=pct95[eg] - pct5[eg];
      var dos=dv - pct5[eg];
      ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "dvPct");
      $("#dvPctTxt").val(parseInt(90 / (uno) * (dos) + 5));
      $("#dvRngo").val( pct5[eg] + " - " + pct95[eg]);
 }

}

function pctau() {
	var pct5 = [];
	var pct95 = [];
	var xpct5 = [];
	var xpct95 = [];

	pct5[0] = 0.97;	pct5[1] = 0.95;
	pct5[2] = 0.94;	pct5[3] = 0.92;
	pct5[4] = 0.9;	pct5[5] = 0.89;
	pct5[6] = 0.87;	pct5[7] = 0.85;
	pct5[8] = 0.82;	pct5[9] = 0.8;
	pct5[10] = 0.78;	pct5[11] = 0.75;
	pct5[12] = 0.73;	pct5[13] = 0.7;
	pct5[14] = 0.67;	pct5[15] = 0.65;
	pct5[16] = 0.62;	pct5[17] = 0.58;
	pct5[18] = 0.55;	pct5[19] = 0.52;
	pct5[20] = 0.49;

	pct95[0] = 1.6;	pct95[1] = 1.56;
	pct95[2] = 1.53;	pct95[3] = 1.5;
	pct95[4] = 1.46;	pct95[5] = 1.43;
	pct95[6] = 1.4;	pct95[7] = 1.37;
	pct95[8] = 1.35;	pct95[9] = 1.32;
	pct95[10] = 1.29;	pct95[11] = 1.27;
	pct95[12] = 1.25;	pct95[13] = 1.22;
	pct95[14] = 1.2;	pct95[15] = 1.18;
	pct95[16] = 1.16;	pct95[17] = 1.14;
	pct95[18] = 1.13;	pct95[19] = 1.11;
	pct95[20] = 1.09;

	xpct5[20] = 0.78;	xpct5[21] = 0.87;
	xpct5[22] = 0.95;	xpct5[23] = 1.02;
	xpct5[24] = 1.09;	xpct5[25] = 1.15;
	xpct5[26] = 1.2;	xpct5[27] = 1.24;
	xpct5[28] = 1.28;	xpct5[29] = 1.31;
	xpct5[30] = 1.33;	xpct5[31] = 1.35;
	xpct5[32] = 1.36;	xpct5[33] = 1.36;
	xpct5[34] = 1.36;	xpct5[35] = 1.34;
	xpct5[36] = 1.32;	xpct5[37] = 1.3;
	xpct5[38] = 1.26;	xpct5[39] = 1.22;
	xpct5[40] = 1.18;

	xpct95[20] = 1.68;	xpct95[21] = 1.88;	xpct95[22] = 2.06;	xpct95[23] = 2.22;
	xpct95[24] = 2.36;	xpct95[25] = 2.49;	xpct95[26] = 2.6;	xpct95[27] = 2.7;
	xpct95[28] = 2.78;	xpct95[29] = 2.84;	xpct95[30] = 2.89;	xpct95[31] = 2.92;
	xpct95[32] = 2.93;	xpct95[33] = 2.93;	xpct95[34] = 2.91;	xpct95[35] = 2.87;
	xpct95[36] = 2.82;	xpct95[37] = 2.75;	xpct95[38] = 2.67;	xpct95[39] = 2.57;
	
	var eg=0;
	eg=parseFloat(localStorage.eg);
 	var aumb = $('#ipau').val();
	aumb = aumb.toString();
 	aumb = aumb.replace(",", ".");
 	aumb = parseFloat(aumb);
 
	if (eg < 20) {
		$('#ipauPct').val('0');
	}
	else if (eg > 40)
	{
		$('#ipauPct').val('0');
	}
	else {
		eg = eg - 20;
		eg = parseInt(eg);
		var uno=pct95[eg] - pct5[eg];
		var dos=aumb - pct5[eg];
		ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ipauPct");
		
		$("#ipauPctTxt").val(parseInt(90 / (uno) * (dos) + 5));
                $("#ipauRngo").val(pct5[eg] + " - " + pct95[eg]);
		
		if ($('#ipacm').val()){
			var ccp = ($('#ipacm').val() / $('#ipau').val());

			$('#ccp').val(ccp.toFixed(2));

			eg = eg + 20;
			uno = xpct95[eg] - xpct5[eg];
			dos = ccp - xpct5[eg];

			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ccpPct");
			$("#ccpPctTxt").val(parseInt(90 / (uno) * (dos) + 5));
                        $("#ccpRngo").val(xpct5[eg] + " - " + xpct95[eg]);
			
		}
	}
}

function pctacm() {

	var pct5 = [];
	var pct95 = [];
	var xpct5 = [];
	var xpct95 = [];

	pct5[0] = 1.24;pct5[1] = 1.29;	pct5[2] = 1.34;pct5[3] = 1.37;
	pct5[4] = 1.4;pct5[5] = 1.43;	pct5[6] = 1.44;pct5[7] = 1.45;
	pct5[8] = 1.45;pct5[9] = 1.44;	pct5[10] = 1.43;pct5[11] = 1.41;
	pct5[12] = 1.38;pct5[13] = 1.34;	pct5[14] = 1.3;pct5[15] = 1.25;
	pct5[16] = 1.19;pct5[17] = 1.13;	pct5[18] = 1.05;pct5[19] = 0.98;
	pct5[20] = 0.89;

	pct95[0] = 1.98;	pct95[1] = 2.12;	pct95[2] = 2.25;	pct95[3] = 2.36;
	pct95[4] = 2.45;	pct95[5] = 2.53;	pct95[6] = 2.59;	pct95[7] = 2.63;
	pct95[8] = 2.66;	pct95[9] = 2.67;	pct95[10] = 2.67;	pct95[11] = 2.65;
	pct95[12] = 2.62;	pct95[13] = 2.56;	pct95[14] = 2.5;	pct95[15] = 2.41;
	pct95[16] = 2.31;	pct95[17] = 2.2;	pct95[18] = 2.07;	pct95[19] = 1.92;
	pct95[20] = 1.76;

	xpct5[20] = 0.78;	xpct5[21] = 0.87;	xpct5[22] = 0.95;	xpct5[23] = 1.02;
	xpct5[24] = 1.09;	xpct5[25] = 1.15;	xpct5[26] = 1.2;	xpct5[27] = 1.24;
	xpct5[28] = 1.28;	xpct5[29] = 1.31;	xpct5[30] = 1.33;	xpct5[31] = 1.35;
	xpct5[32] = 1.36;	xpct5[33] = 1.36;	xpct5[34] = 1.36;	xpct5[35] = 1.34;
	xpct5[36] = 1.32;	xpct5[37] = 1.3;	xpct5[38] = 1.26;	xpct5[39] = 1.22;
	xpct5[40] = 1.18;

	xpct95[20] = 1.68;	xpct95[21] = 1.88;	xpct95[22] = 2.06;	xpct95[23] = 2.22;
	xpct95[24] = 2.36;	xpct95[25] = 2.49;	xpct95[26] = 2.6;	xpct95[27] = 2.7;
	xpct95[28] = 2.78;	xpct95[29] = 2.84;	xpct95[30] = 2.89;	xpct95[31] = 2.92;
	xpct95[32] = 2.93;	xpct95[33] = 2.93;	xpct95[34] = 2.91;	xpct95[35] = 2.87;
	xpct95[36] = 2.82;	xpct95[37] = 2.75;	xpct95[38] = 2.67;	xpct95[39] = 2.57;

	var eg=0;

	eg=parseFloat(localStorage.eg);
	var acm = $('#ipacm').val();
	acm = acm.toString();
 	acm = acm.replace(",", ".");
 	acm = parseFloat(acm);

	if (eg < 20) {  
		$('#ipacmPct').val('0');
		$('#ccp').val('0');
		$('#ccpPct').val('0');
	}
	else if (eg > 40)
	{
		$('#ipacmPct').val('0');
		$('#ccp').val('0');
		$('#ccpPct').val('0');
	}
	else {
		eg = eg - 20;
		eg = parseInt(eg);
		var uno = pct95[eg] - pct5[eg];
		var dos = acm - pct5[eg];
 
		ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ipacmPct");
		$("#ipacmPctTxt").val(parseInt(90 / (uno) * (dos) + 5));
                $("#ipacmRngo").val(pct5[eg] + " - " + pct95[eg]);

		if ($('#ipau').val()){
			var ccp = (acm / $('#ipau').val());

			$('#ccp').val(ccp.toFixed(2));

			eg = eg + 20;
			uno = xpct95[eg] - xpct5[eg];
			dos = ccp - xpct5[eg];

			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ccpPct");
			$("#ccpPctTxt").val(parseInt(90 / (uno) * (dos) + 5));
                        $("#ccpRngo").val(xpct5[eg] + " - " + xpct95[eg]);
		}
	}
}

function psohdlk() {

    var CC = 0;
    var CA = 0;

 CC=parseFloat($("#cc").val());
 CA=parseInt($("#ca").val());
 if ($("#cc").val() && $("#cc").val()) {
    var psoP =  Math.pow(10, (1.182 + 0.00273 * CC + 0.007057 * CA - 0.0000063 *  Math.pow(CA, 2) - 0.000002184 * CC * CA));
    $("#pfe").val(psoP.toFixed(0));
    pctpfe();
	valccca()
	 ipn()
  }
}

function pctpfe() {

 var pct10 = [];
 var pct90 = [];

 pct10[0] = 97;pct10[1] = 121;pct10[2] = 150;pct10[3] = 185;pct10[4] = 227;pct10[5] = 275;
 pct10[6] = 331;pct10[7] = 398;pct10[8] = 471;pct10[9] = 556;pct10[10] = 652;pct10[11] = 758;
 pct10[12] = 876;pct10[13] = 1004;pct10[14] = 1145;pct10[15] = 1294;pct10[16] = 1453;
 pct10[17] = 1621;pct10[18] = 1794;pct10[19] = 1973;pct10[20] = 2154;pct10[21] = 2335;
 pct10[22] = 2513; pct10[23] = 2686; pct10[24] = 2851; pct10[25] = 2985;

 pct90[0] = 137;pct90[1] = 171;pct90[2] = 212;pct90[3] = 261;pct90[4] = 319;
 pct90[5] = 387;pct90[6] = 467;pct90[7] = 559;pct90[8] = 665;pct90[9] = 784;
 pct90[10] = 918;pct90[11] = 1068;pct90[12] = 1234;pct90[13] = 1416;pct90[14] = 1613;
 pct90[15] = 1824;pct90[16] = 2049;pct90[17] = 2285;pct90[18] = 2530;
 pct90[19] = 2781;pct90[20] = 3036;pct90[21] = 3291;pct90[22] = 3543;pct90[23] = 3786;
 pct90[24] = 4019;pct90[25] = 4234;

 var eg=0;
 var pfe=0;
 eg=parseFloat(localStorage.eg);
 pfe=parseInt($("#pfe").val());

 if (eg < 15) {  
   $("#pfePct").val('0');
 }
 else if (eg > 40)
 {
   $("#pfePct").val('0');
 }
 else {
  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct90[eg] - pct10[eg];
  var dos=pfe - pct10[eg];
  var pctFinal = (80 / (uno) * (dos)) + 10
  ajustarProgreso(pctFinal, "pfePct");
 }
}

function pctbvm() {

 var pct5 = [];
 var pct95 = [];

    pct5[0] = 23;    pct5[1] = 25;    pct5[2] = 27;    pct5[3] = 28;
    pct5[4] = 29;    pct5[5] = 29;    pct5[6] = 30;    pct5[7] = 30;
    pct5[8] = 30;    pct5[9] = 30;    pct5[10] = 30;    pct5[11] = 30;
    pct5[12] = 30;    pct5[13] = 29;    pct5[14] = 29;    pct5[15] = 29;
    pct5[16] = 29;    pct5[17] = 29;    pct5[18] = 28;    pct5[19] = 28;
    pct5[20] = 27;    pct5[21] = 26;    pct5[22] = 24;    pct5[23] = 23;
    pct5[24] = 21;

     pct95[0] = 59;     pct95[1] = 62;     pct95[2] = 64;     pct95[3] = 66;
     pct95[4] = 67;     pct95[5] = 68;     pct95[6] = 68;     pct95[7] = 68;
     pct95[8] = 68;     pct95[9] = 68;     pct95[10] = 68;     pct95[11] = 69;
     pct95[12] = 69;     pct95[13] = 69;     pct95[14] = 69;     pct95[15] = 70;
     pct95[16] = 71;     pct95[17] = 72;     pct95[18] = 72;     pct95[19] = 72;
     pct95[20] = 71;     pct95[21] = 70;     pct95[22] = 68;     pct95[23] = 66;
     pct95[24] = 62;

 var eg=0;
 var bvm=0;
 
 eg=parseFloat(localStorage.eg);
 bvm=parseInt($("#bvm").val());
 
 if (eg < 16) {  
  //
 }
 else if (eg > 40)
 {
   //
 }
 else {
  eg = eg - 16;
  eg = parseInt(eg);
  var uno=pct95[eg] - pct5[eg];
  var dos=bvm - pct5[eg];
ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "bvmPct");

 }
}

function pctila() {

 var pct5 = [];
 var pct95 = [];


 pct5[0] = 79;pct5[1] = 83;pct5[2] = 87;pct5[3] = 90;pct5[4] = 93;pct5[5] = 95;
 pct5[6] = 97;pct5[7] = 98;pct5[8] = 98;pct5[9] = 97;pct5[10] = 97;pct5[11] = 95;
 pct5[12] = 94;pct5[13] = 92;pct5[14] = 90;pct5[15] = 88;pct5[16] = 86;pct5[17] = 83;
 pct5[18] = 81;pct5[19] = 79;pct5[20] = 77;pct5[21] = 75;pct5[23] = 73;
 pct5[24] = 72;pct5[25] = 71;

 pct95[0] = 185;pct95[1] = 194;pct95[2] = 200;pct95[3] = 204;pct95[4] = 208;
 pct95[5] = 212;pct95[6] = 214;pct95[7] = 217;pct95[8] = 218;pct95[9] = 221;
 pct95[10] = 223;pct95[11] = 226;pct95[12] = 228;pct95[13] = 231;
 pct95[14] = 234;pct95[15] = 238;pct95[16] = 242;pct95[17] = 245;
 pct95[18] = 248;pct95[19] = 249;pct95[20] = 249;pct95[21] = 244;
 pct95[22] = 239;pct95[23] = 226;pct95[24] = 214;

 var eg=0;
 var ila=0;
 
 eg=parseFloat(localStorage.eg);
 ila=parseInt($("#ila").val());
 
 if (eg < 16) {  
  //
 }
 else if (eg > 40)
 {
   //
 }
 else {
  eg = eg - 16;
  eg = parseInt(eg);
  var uno=pct95[eg] - pct5[eg];
  var dos=ila - pct5[eg];
  ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "ilaPct");
 }
} 

function valccca() {

 var cc=parseInt($("#cc").val());
 var ca=parseInt($("#ca").val());
 if (cc > 0) {
  if (ca >0 ) {
   var ccca = cc / ca;
   $("#ccca").val(ccca.toFixed(2));
   var pct3 = [];
   var pct97 = [];

 pct3[0] = 1.1;pct3[1] = 1.09;pct3[2] = 1.08;pct3[3] = 1.07;pct3[4] = 1.06;
 pct3[5] = 1.06;pct3[6] = 1.05;pct3[7] = 1.04;pct3[8] = 1.03;pct3[9] = 1.02;
 pct3[10] = 1.01;pct3[11] = 1;pct3[12] = 1;pct3[13] = 0.99;pct3[14] = 0.98;
 pct3[15] = 0.97;pct3[16] = 0.96;pct3[17] = 0.95;pct3[18] = 0.95;pct3[19] = 0.94;
 pct3[20] = 0.93;pct3[21] = 0.92;pct3[22] = 0.91;pct3[23] = 0.9;pct3[24] = 0.89;
 pct3[25] = 0.89;

 pct97[0] = 1.29;pct97[1] = 1.28;pct97[2] = 1.27;pct97[3] = 1.26;pct97[4] = 1.25;
 pct97[5] = 1.24;pct97[6] = 1.24;pct97[7] = 1.23;pct97[8] = 1.22;pct97[9] = 1.21;
 pct97[10] = 1.2;pct97[11] = 1.19;pct97[12] = 1.18;pct97[13] = 1.18;pct97[14] = 1.17;
 pct97[15] = 1.17;pct97[16] = 1.16;pct97[17] = 1.15;pct97[18] = 1.14;pct97[19] = 1.13;
 pct97[20] = 1.12;pct97[21] = 1.11;pct97[22] = 1.1;pct97[23] = 1.09;pct97[24] = 1.08;
 pct97[25] = 1.08;

 var eg=0;
 eg=parseFloat(localStorage.eg);

 if (eg < 15) {
   $("#cccaPct").val('0');
 }
 else if (eg > 40)
 {
   $("#cccaPct").val('0');
 }
 else {
  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=ccca - pct3[eg];

  ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "cccaPct");
 }
  } else {
    $("#ccca").val('0');
    $("#cccaPct").val('0');
  }
 } else {
    $("#ccca").val('0');
    $("#cccaPct").val('0');
 }
}

function ajustarProgreso(valor, objeto){
	$("#"+objeto + " > .pivote-uno").html("");
	$("#"+objeto + " > .pivote-dos").html("");
	$("#"+objeto + " > .pivote-cero").html("|");
	$("#"+objeto + " > .pivote-centro").html("|");
	$("#"+objeto + " > .pivote-cien").html("|");
	$("#"+objeto + " > .pivote-tres").html("");
	$("#"+objeto + " > .pivote-cuatro").html("");
	
	if (valor <= 6){
		$("#"+objeto + " > .pivote-cero").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 10){
		$("#"+objeto + " > .pivote-uno").css( "width", "10%");
		$("#"+objeto + " > .pivote-uno").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-dos").css("width", "25%");
	}
	else if (valor <= 20){
		$("#"+objeto + " > .pivote-uno").css( "width", "17.5%");
		$("#"+objeto + " > .pivote-uno").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-dos").css("width", "17.5%");
	}
	else if (valor <= 30){
		$("#"+objeto + " > .pivote-uno").css( "width", "20%");
		$("#"+objeto + " > .pivote-dos").css("width", "15%");
		$("#"+objeto + " > .pivote-dos").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 40){
		$("#"+objeto + " > .pivote-uno").css( "width", "25%");
		$("#"+objeto + " > .pivote-dos").css("width", "10%");
		$("#"+objeto + " > .pivote-dos").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 50){
		$("#"+objeto + " > .pivote-centro").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 60){
		$("#"+objeto + " > .pivote-tres").css( "width", "10%");
		$("#"+objeto + " > .pivote-tres").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-cuatro").css("width", "25%");
	}
	else if (valor <= 70){
		$("#"+objeto + " > .pivote-tres").css( "width", "17.5%");
		$("#"+objeto + " > .pivote-tres").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-cuatro").css("width", "17.5%");
	}
	else if (valor <= 80){
		$("#"+objeto + " > .pivote-tres").css( "width", "20%");
		$("#"+objeto + " > .pivote-cuatro").css("width", "15%");
		$("#"+objeto + " > .pivote-cuatro").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 90){
		$("#"+objeto + " > .pivote-tres").css( "width", "25%");
		$("#"+objeto + " > .pivote-cuatro").css("width", "10%");
		$("#"+objeto + " > .pivote-cuatro").html("<strong style='color:red;'>X</strong>");
	}
	else{
		$("#"+objeto + " > .pivote-cien").html("<strong style='color:red;'>X</strong>");
	}
}

function pctut() {

	var pct5 = [];
	var pct95 = [];

	pct5[0] = 1.23; pct5[1] = 1.18;	pct5[2] = 1.11; pct5[3] = 1.05;
	pct5[4] = 0.99; pct5[5] = 0.94;	pct5[6] = 0.89; pct5[7] = 0.85;
	pct5[8] = 0.81; pct5[9] = 0.78;	pct5[10] = 0.74; pct5[11] = 0.71;
	pct5[12] = 0.69; pct5[13] = 0.66;	pct5[14] = 0.64; pct5[15] = 0.62;
	pct5[16] = 0.6; pct5[17] = 0.58;	pct5[18] = 0.56; pct5[19] = 0.55;
	pct5[20] = 0.54; pct5[21] = 0.52;	pct5[22] = 0.51; pct5[23] = 0.51;
	pct5[24] = 0.51; pct5[25] = 0.49;	pct5[26] = 0.48; pct5[27] = 0.48;
	pct5[28] = 0.47; pct5[29] = 0.47;	pct5[30] = 0.47;

	pct95[0] = 2.84; pct95[1] = 2.71;	pct95[2] = 2.53; pct95[3] = 2.38;
	pct95[4] = 2.24; pct95[5] = 2.11;	pct95[6] = 1.99; pct95[7] = 1.88;
	pct95[8] = 1.79; pct95[9] = 1.71;	pct95[10] = 1.61; pct95[11] = 1.54;
	pct95[12] = 1.47; pct95[13] = 1.41;	pct95[14] = 1.35; pct95[15] = 1.3;
	pct95[16] = 1.25; pct95[17] = 1.21;	pct95[18] = 1.17; pct95[19] = 1.13;
	pct95[20] = 1.11; pct95[21] = 1.06;	pct95[22] = 1.04; pct95[23] = 1.01;
	pct95[24] = 0.99; pct95[25] = 0.97;	pct95[26] = 0.95; pct95[27] = 0.94;
	pct95[28] = 0.92; pct95[29] = 0.91;	pct95[30] = 0.91;
//
	var eg=0;
 
	eg=parseFloat(localStorage.eg);
	var utd = $("#aud").val();
	utd = utd.toString(); 
 	utd = utd.replace(",", ".");
 	utd = parseFloat(utd);
	var uti =$("#aui").val();
	uti = uti.toString();
 	uti = uti.replace(",", ".");
 	uti = parseFloat(uti);
	
	var utprom = ((uti + utd) / 2)
	$("#auprom").val(utprom.toFixed(2));

	if (eg < 10) {  
		$("#audPct").val('0');
		$("#auiPct").val('0');
		$("#auPct").val('0');
	 }
	 else if (eg > 40)
	 {
	   $("#audPct").val('0');
	   $("#auiPct").val('0');
	   $("#auPct").val('0');
	 }
	 else {
		eg = eg - 10;
		var uno=0;
		var dos=0;
		if (utd > 0){
			eg = parseInt(eg);
			uno=pct95[eg] - pct5[eg];
			dos=utd - pct5[eg];
			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "audPct");
			$("#audPctTxt").val(parseInt(90 / (uno) * (dos) + 5));
                        $("#audRngo").val(pct5[eg] + " - " + pct95[eg]);
		}
		if (uti > 0){
			eg = parseInt(eg);
			uno=pct95[eg] - pct5[eg];
			dos=uti - pct5[eg];
			$('#auiPct').val(parseInt(90 / (uno) * (dos) + 5));
			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "auiPct");
			$("#auiPctTxt").val(parseInt(90 / (uno) * (dos) + 5));
                        $("#auiRngo").val(pct5[eg] + " - " + pct95[eg]);
		}
		if ($("#aud").val() && $("#aui").val()){
			uno = pct95[eg] - pct5[eg];
			dos = utprom - pct5[eg];
			$('#auPct').val(parseInt(90 / (uno) * (dos) + 5));
			ajustarProgreso(parseInt(90 / (uno) * (dos) + 5), "auPct");
			$("#auPctTxt").val(parseInt(90 / (uno) * (dos) + 5));
                        $("#auRngo").val(pct5[eg] + " - " + pct95[eg]);
		}
	 }
}

function imprSelec(muestra)
{
	var ficha=$("#popupBody").html();
	var document = '<!DOCTYPE html><html lang="es-CL"><head><meta charset="utf-8"><title>Impresión de Gráficos</title><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel="stylesheet" href="consulta.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">:ESTILO</head><body><div class="container">:DATOS</div>:FUNCION</body></html>';
	var ventimp=window.open(" ","popimpr");
	var estilo = '<style>@media print {.col{width:48%;float:left;}.pie-pagina{font-size:9px;}#lineclear{clear:both;}h4{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	document = document.replace(":DATOS", ficha);
	document = document.replace(":ESTILO", estilo);
	document = document.replace(":FUNCION", funcion);
	document = document.replace("invisible", "");
	
	ventimp.document.write(document);
	ventimp.document.close();
	ventimp.show();
}

function imprInforme(muestra)
{
	var ficha= muestra;
	var document = '<!DOCTYPE html><html lang="es-CL"><head><meta charset="utf-8"><title>Impresión de Gráficos</title><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel="stylesheet" href="consulta.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">:ESTILO</head><body><div class="container" style="margin-top:50px;">:DATOS</div>:FUNCION</body></html>';
	var ventimp=window.open(" ","popimpr");
	var estilo = '<style>@media print {*{margin:0; padding:0; border:0;} p, th, td {font-size:11px;line-height:17px;margin-bottom:7px;} th, td{ margin:0 !important;padding:0 !important;} .pie-pagina{font-size:7px;}#lineclear{clear:both;} h3{font-size: 130%; text-align:center;} h3::first-letter {font-size: 130%;}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	document = document.replace(":DATOS", ficha);
	document = document.replace(":ESTILO", estilo);
	document = document.replace(":FUNCION", funcion);
	document = document.replace("invisible", "");
	
	ventimp.document.write(document);
	ventimp.document.close();
	ventimp.show();
}

function p50() {

    //calcular dbp
    const N7 = new Number(9.468544279);
    const N8 = new Number(1.015432196);
    var dbp= $('#dbp').val();
    var N = new Number(N7 * Math.pow(N8, dbp));
    dbp = Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

    var c1 = new Number(9.413641651);
    var c2 = new Number(1.004137705);
    var cc = $('#cc').val();
    N = new Number(c1 * Math.pow(c2, cc));
    cc =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

    c1 = new Number(11.20178254);
    c2 = new Number(1.01704237);
    var lf = $('#lf').val();
    N = new Number(c1 * Math.pow(c2, lf));
    lf =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

    var cb = $('#cerebelo').val();
    cb = cb / 10;
    var egHill = 6.37+(5.4*cb)+(0.78*Math.pow(cb,2))-(0.13*Math.pow(cb,3));
    //añadir mayor presicion, ya se suma 1 dia
    cb = Math.round( egHill * 10 ) / 10;

    var  humeroPromedioDE = [];

    humeroPromedioDE[10]=12.4;humeroPromedioDE[11]=12.6;humeroPromedioDE[12]=13.1;humeroPromedioDE[13]=13.4;
    humeroPromedioDE[14]=13.6;humeroPromedioDE[15]=14.1;humeroPromedioDE[16]=14.4;humeroPromedioDE[17]=14.6;
    humeroPromedioDE[18]=15.1;humeroPromedioDE[19]=15.4;humeroPromedioDE[20]=15.6;humeroPromedioDE[21]=16.2;
    humeroPromedioDE[22]=16.5;humeroPromedioDE[23]=17.1;humeroPromedioDE[24]=17.3;humeroPromedioDE[25]=17.6;
    humeroPromedioDE[26]=18.1;humeroPromedioDE[27]=18.4;humeroPromedioDE[28]=19;humeroPromedioDE[29]=19.3;
    humeroPromedioDE[30]=19.6;humeroPromedioDE[31]=20.2;humeroPromedioDE[32]=20.5;humeroPromedioDE[33]=21.1;
    humeroPromedioDE[34]=21.4;humeroPromedioDE[35]=22;humeroPromedioDE[36]=22.4;humeroPromedioDE[37]=22.6;
    humeroPromedioDE[38]=23.3;humeroPromedioDE[39]=23.6;humeroPromedioDE[40]=24.2;humeroPromedioDE[41]=24.6;
    humeroPromedioDE[42]=25.2;humeroPromedioDE[43]=25.5;humeroPromedioDE[44]=26.1;humeroPromedioDE[45]=26.5;
    humeroPromedioDE[46]=27.1;humeroPromedioDE[47]=27.5;humeroPromedioDE[48]=28.1;humeroPromedioDE[49]=28.6;
    humeroPromedioDE[50]=29.2;humeroPromedioDE[51]=29.6;humeroPromedioDE[52]=30.2;humeroPromedioDE[53]=30.6;
    humeroPromedioDE[54]=31.3;humeroPromedioDE[55]=32;humeroPromedioDE[56]=32.4;humeroPromedioDE[57]=33.1;
    humeroPromedioDE[58]=33.4;humeroPromedioDE[59]=34.1;humeroPromedioDE[60]=34.6;humeroPromedioDE[61]=35.2;
    humeroPromedioDE[62]=35.6;humeroPromedioDE[63]=36.4;humeroPromedioDE[64]=37.1;humeroPromedioDE[65]=37.5;
    humeroPromedioDE[66]=38.2;humeroPromedioDE[67]=38.6;humeroPromedioDE[68]=39.4;humeroPromedioDE[69]=40.1;
     
    var lh = parseInt($('#lh').val());
    lh =  humeroPromedioDE[lh];

     var dbpdias = (Math.floor(dbp) * 7) + ((dbp - Math.floor(dbp)) * 10);
     var ccdias = (Math.floor(cc) * 7) + ((cc - Math.floor(cc)) * 10);
     var lfdias = (Math.floor(lf) * 7) + ((lf - Math.floor(lf)) * 10);

     if (cb > 0) {
        var cbdias = (Math.floor(cb) * 7) + ((cb - Math.floor(cb)) * 10);
        egbio = (ccdias + lfdias + cbdias) /3;
     }
     else {
        egbio = (dbpdias + ccdias + lfdias) /3;
     }

     if (lh > 0) {
        var lhdias = (Math.floor(lh) * 7) + ((lh - Math.floor(lh)) * 10);
        egbio = (lhdias + egbio) /2;
     }

     egbio = Math.floor(egbio / 7)+"."+ Math.floor(egbio - (Math.floor(egbio/7) *7));

     $('#egP50').val(egbio);
    }

function ipn() {
    var talla = $('#tallaFetal').val();
    var peso = $('#pfe').val();

    if (talla > 0) {
        if (peso > 0) {
            var IPN = peso / (Math.pow((talla * 10), 3));
            IPN = IPN * 100000;
           $('#ipn').val(IPN.toFixed(2));
	
	   var Pct10IPN = [];
	   var Pct90IPN = [];
		
	   Pct10IPN[24] = 1.79;	   Pct10IPN[25] = 1.83;
	   Pct10IPN[26] = 1.87;	   Pct10IPN[27] = 1.91;
	   Pct10IPN[28] = 1.95;	   Pct10IPN[29] = 1.99;
	   Pct10IPN[30] = 2.04;	   Pct10IPN[31] = 2.08;
	   Pct10IPN[32] = 2.12;	   Pct10IPN[33] = 2.16;
	   Pct10IPN[34] = 2.2;	   Pct10IPN[35] = 2.25;
	   Pct10IPN[36] = 2.29;	   Pct10IPN[37] = 2.33;
	   Pct10IPN[38] = 2.37;	   Pct10IPN[39] = 2.41;
	   Pct10IPN[40] = 2.45;	   Pct10IPN[41] = 2.5;
	   Pct10IPN[42] = 2.54;
		
	   Pct90IPN[24] = 2.54;	   Pct90IPN[25] = 2.57;
	   Pct90IPN[26] = 2.59;	   Pct90IPN[27] = 2.62;
	   Pct90IPN[28] = 2.65;	   Pct90IPN[29] = 2.68;
	   Pct90IPN[30] = 2.71;	   Pct90IPN[31] = 2.74;
	   Pct90IPN[32] = 2.77;	   Pct90IPN[33] = 2.8;
	   Pct90IPN[34] = 2.83;	   Pct90IPN[35] = 2.86;
	   Pct90IPN[36] = 2.89;	   Pct90IPN[37] = 2.92;
	   Pct90IPN[38] = 2.95;	   Pct90IPN[39] = 2.98;
	   Pct90IPN[40] = 3.01;	   Pct90IPN[41] = 3.04;
	   Pct90IPN[42] = 3.07;
	
	   var eg = parseFloat(localStorage.eg);
           eg = parseInt(eg);
           var uno=Pct90IPN[eg] - Pct10IPN[eg];
           var dos=IPN - Pct10IPN[eg];

           ajustarProgreso(parseInt(80 / (uno) * (dos) + 10), "IPNPct");

        }
    }
}
