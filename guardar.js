$(document).ready(function() {
    if (storageAvailable('localStorage')) {
        var configuracion = JSON.parse(localStorage["configuracion"]);

        if (configuracion.email == 'rudecindolagos@gmail.com'){
            the("btn.guardar.precoz").parentElement.classList.add("d-none");

            $("#btn\\.guardar\\.precoz").on("click", function(){
                let configuracion = new FormData()
    
                let data = []

                data['lcn'] = $("#lcn").val()
                data['lcneg'] = the("lcnPct").value
                data['fecha'] = the("fee").value
                data['fur'] = the("fum").value

                configuracion.append("rut", the("id-paciente").value)
                configuracion.append("nombre", the("nombre-paciente").value)
                configuracion.append("eg", the("semanas").value)
                configuracion.append("data", JSON.stringify(data))
    
                fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
                .then(data => {
                    if (data.success == true ){
                        alert("guardó")
                    }
                    alert("guardado")
                }).catch(function(error) {
                    alert("error")
                });
            })
        }
    }
})