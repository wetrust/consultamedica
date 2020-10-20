$(document).ready(function(){

    let req = new FormData()
    req.append("user_id", 2)

    fetch('https://api.crecimientofetal.cl/api/archivos').then(response => response.json())
    .then(data => {
        if (data.success){
            let ul = '<ul>'
            $.each(data.data, function(i, item) {
                ul += '<li>'+ item.archivo_text+'<a href="https://api.crecimientofetal.cl/archivos/'+item.archivo_file+'">Ver</a></li>'
            });

            ul += '</ul>'

            document.getElementById("ppt.relacionados").innerHTML = ul;
        }
    }).catch(function(error) {
        alert("error al cargar ppt")
    });
});