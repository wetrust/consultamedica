function isValidDate(day,month,year)
{
    var dteDate;
    month=month-1;
    dteDate=new Date(year,month,day);
    return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
}
function validate_fecha(fecha)
{
    var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
 
    if(fecha.search(patron)==0)
    {
        var values=fecha.split("-");
        if(isValidDate(values[2],values[1],values[0]))
        {
            return true;
        }
    }
    return false;
}

function intEG(val)
{
    var tmp=0;
    if (parseInt(val) > val) 
    {
     tmp = parseInt(val) -1;
    }
    else if (parseInt(val) < val) 
    {
     tmp = parseInt(val);
    }
    else
    {
     tmp = parseInt(val);
    }
    return tmp;
}
 
function calcularEdad()
{
    var fecha=document.getElementById("yearN").value+"-"+document.getElementById("monthN").value+"-"+document.getElementById("dateN").value;
    if(validate_fecha(fecha)==true)
    {
        // Si la fecha es correcta, calculamos la edad
        var values=fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];
 
        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth();
        var ahora_dia = fecha_hoy.getDate();
 
        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if ( ahora_mes < (mes - 1))
        {
            edad--;
        }
        if (((mes - 1) == ahora_mes) && (ahora_dia < dia))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }
 
        document.getElementById("edadM").innerHTML=edad+" años";
        document.getElementById("edadM2").innerHTML=edad+" años";
        document.getElementById("edadM3").innerHTML=edad+" años";
        document.getElementById("edadM4").innerHTML = edad + " años";
        document.getElementById("edadM6").innerHTML = edad + " años";
        document.getElementById("edadM7").innerHTML = edad + " años";
        document.getElementById("edadM8").innerHTML = edad + " años";
        document.getElementById("edadM9").innerHTML = edad + " años";
    }
}