$(document).ready(function() {
    if (storageAvailable('localStorage')) {
        var configuracion = JSON.parse(localStorage["configuracion"]);

        if (configuracion.email == 'rudecindolagos@gmail.com'){
            the("btn.guardar.precoz").parentElement.classList.remove("d-none");
            the("btn.guardar.precoz").parentElement.classList.add("d-flex");

            $("#btn\\.guardar\\.precoz").on("click", function(){
                let configuracion = new FormData()
                let data = {
                    'lcn' : $("#lcn").val(),
                    'lcneg' : the("lcnPct").value,
                    'fecha' : the("fee").value,
                    'fur' : the("fum").value,
                    'fcf' : the("fcf-prim").value
                }

                data['lcn'] = $("#lcn").val()
                data['lcneg'] = the("lcnPct").value
                data['fecha'] = the("fee").value
                data['fur'] = the("fum").value

                configuracion.append("rut", the("id-paciente").value)
                configuracion.append("nombre", the("nombre-paciente").value)
                configuracion.append("eg", the("semanas").value)
                configuracion.append("ciudad", the("ciudadpaciente").value)
                configuracion.append("lugar", the("lcontrolpaciente").value)
                configuracion.append("data", JSON.stringify(data))

                fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
                .then(data => {
                    if (data.success == true ){
                        alert("guardó")
                    }
                }).catch(function(error) {
                    alert("error")
                });
            })
        }
    }
})