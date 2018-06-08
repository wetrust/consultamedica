$( document ).ready(function() {
    //cargar los select con los valores numéricos
    var pesoNeonatal
    var pesoMaterno

    //cargar input de semanas que empiezan con 25
    for (i = 25; i < 43; i++) {
        $("#edadGestacional").append('<option value="' + i +'">' + i + '</option>');
        $('#edadGestacional option[value="40"]').prop('selected', true);
    }
    //cargar input de semanas que empiezan con 4
    for (i = 4; i < 43; i++) {
        $("#semanasEcoGen").append('<option value="' + i +'">' + i + '</option>');
        $("#semanasTipoEco").append('<option value="' + i +'">' + i + '</option>');
        $("#semanasEcoPrim").append('<option value="' + i +'">' + i + '</option>');
        $("#semanasEcoObs").append('<option value="' + i +'">' + i + '</option>');
        $("#semanasEcoDopp").append('<option value="' + i +'">' + i + '</option>');

        $('#semanasEcoGen option[value="4"]').prop('selected', true);
        $('#semanasTipoEco option[value="4"]').prop('selected', true);
        $('#semanasEcoPrim option[value="4"]').prop('selected', true);
        $('#semanasEcoObs option[value="4"]').prop('selected', true);
        $('#semanasEcoDopp option[value="4"]').prop('selected', true);
    }
    //cargar inputs de dias
    for (i = 0; i < 7; i++) {
        $("#diasEcoGen").append('<option value="' + i +'">' + i + '</option>');
        $("#diasTipoEco").append('<option value="' + i +'">' + i + '</option>');
        $("#diasEcoPrim").append('<option value="' + i +'">' + i + '</option>');
        $("#diasEcoObs").append('<option value="' + i +'">' + i + '</option>');
        $("#diasEcoDopp").append('<option value="' + i +'">' + i + '</option>');
    }
    //cargar inputs de edad materna
    for (i = 10; i < 51; i++) {
        $("#edad_materna").append('<option value="' + i +'">' + i + ' años</option>');
    }
    //cargar inputs de Peso
    for (i = 35; i < 130; i++) {
        $("#peso").append('<option value="' + i +'">' + i + ' kg.</option>');
    }
    //cargar inputs de talla
    for (i = 135; i < 190; i++) {
        $("#talla").append('<option value="' + i +'">' + i + ' cms.</option>');
        $("#tm").append('<option value="' + i +'">' + i + ' cms.</option>');
        $("#tallaMaterna").append('<option value="' + i +'">' + i + ' cms.</option>');
        $('#talla option[value="149"]').prop('selected', true);
        $('#tm option[value="149"]').prop('selected', true);
        $('#tallaMaterna option[value="149"]').prop('selected', true);
    }
    //cargar inputs de peso materno
    for (i = 35; i < 140; i++) {
        $("#pesom").append('<option value="' + i +'">' + i + ' kg</option>');
        $("#pesoMaterno").append('<option value="' + i +'">' + i + ' kg</option>');
        $('#pesom option[value="70"]').prop('selected', true);
        $('#pesoMaterno option[value="70"]').prop('selected', true);
    }

    $("#pesoRN").on("keydown", function(e){
        var text = $(this).val();
        
        switch (e.which) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                if (text.toString().length > 3){
                    return false;
                }
                break;
            case 13:
            case 8:
            case 37:
            case 39:
                break;
            default:
                return false;
        }
    });

    $("#tallaRN").on("keydown", function(e){
        var text = $(this).val();

        switch (e.which) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                if (text.toString().length > 2){
                    return false;
                }
                break;
            case 13:
            case 8:
            case 37:
            case 39:
                break;
            default:
                return false;
        }
    });
});
