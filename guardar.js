$(document).ready(function() {
    if (storageAvailable('localStorage')) {
        var configuracion = JSON.parse(localStorage["configuracion"]);

        if (configuracion.email == 'rudecindolagos@gmail.com'){
            the("btn.guardar.precoz").parentElement.classList.remove("d-none");
            the("btn.guardar.precoz").parentElement.classList.add("d-flex");

            $("#btn\\.guardar\\.precoz").on("click", function(){
                let configuracion = new FormData()
                let data = {
                    'Fecha' : the("fee").value,
                    'FUR' : the("fum").value,
                    'LCN' : $("#lcn").val(),
                    'EG Ajustada' : the("lcnPct").value,
                    'FCF' : the("fcf-prim").value,
                    'Observaciones' : the("comentarios-eco-uno").value,
                }

                configuracion.append("rut", the("id-paciente").value)
                configuracion.append("nombre", the("nombre-paciente").value)
                configuracion.append("eg", the("semanas").value)
                configuracion.append("ciudad", the("ciudadpaciente").value)
                configuracion.append("lugar", the("lcontrolpaciente").value)
                configuracion.append("tipo", "Ecografía obstétrica precoz < 11 semanas")
                configuracion.append("data", JSON.stringify(data))

                fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
                .then(data => {
                    if (data.success == true ){ alert("guardó") }
                }).catch(function(error) {
                    alert("error")
                });
            })

            the("btn.guardar.segtrim").parentElement.classList.remove("d-none");
            the("btn.guardar.segtrim").parentElement.classList.add("d-flex");

            $("#btn\\.guardar\\.segtrim").on("click", function(){
                let configuracion = new FormData()
                let data = {
                    'fecha' : the("fee").value,
                    'fur' : the("fum").value,
                    'dbp' : the("dbp").value,
                    'dbpde' : the("dbpDE").value,
                    'dof' : the("dof").value,
                    'dofpct' : the("dofPct").value,
                    'cc' : the("cc").value,
                    'ccpct' : the("ccPct").value,
                    'ca' : the("ca").value,
                    'capct' : the("caPct").value,
                    'lf' : the("lf").value,
                    'lfpct' : the("lfPct").value,
                    'lh' : the("lh").value,
                    'lhpct' : the("lhPct").value,
                    'cerebelo' : the("cerebelo").value,
                    'cerebelopct' : the("cerebeloPctRpt").value,
                    'peso' : the("pfe").value,
                    'pesopct' : the("pfePctRpt").value,
                    'ccca' : the("ccca").value,
                    'cccapct' : the("cccaPctVal").value,
                    'placenta' : the("ubicacion").value,
                    'liquido' : the("liq-cualitativo-eco").value,
                    'obs' : the("comentarios-eco-dos-inf-dos").value,
                }

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
                }).catch(function(error) { alert("error") });
            })
        
            the("btn.guardar.doppler").parentElement.classList.remove("d-none");
            the("btn.guardar.doppler").parentElement.classList.add("d-flex");

            $("#btn\\.guardar\\.doppler").on("click", function(){
                let configuracion = new FormData()
                let data = {
                    'fecha' : the("fee").value,
                    'fur' : the("fum").value,
                    'fcf' : the("fcf-prim").value,
                    'ut derecha' : the("aud").value,
                    'ut derecha pct' : the("audPct").value,
                    'ut izquierda' : the("aui").value,
                    'ut izquierda pct' : the("auiPct").value,
                    'ut promedio' : the("auprom").value,
                    'ut promedio pct' : the("auPct").value,
                    'ut umbilical' : the("ipau").value,
                    'ut umbilical pct' : the("ipauPct").value,
                    'utcmedia' : the("ipacm").value,
                    'utcmedia pct' : the("ipacmPct").value,
                    'couciente' : the("ccp").value,
                    'couciente pct' : the("ccpPct").value,
                    'Ductus Venoso' : the("dv").value,
                    'Ductus Venoso pct' : the("dvPct").value,
                    'obs' : the("comentarios-doppler").value,
                }

                configuracion.append("rut", the("id-paciente").value)
                configuracion.append("nombre", the("nombre-paciente").value)
                configuracion.append("eg", the("semanas").value)
                configuracion.append("ciudad", the("ciudadpaciente").value)
                configuracion.append("lugar", the("lcontrolpaciente").value)
                configuracion.append("data", JSON.stringify(data))

                fetch('https://api.crecimientofetal.cl/api/saveData', {method: 'POST',body: configuracion, mode: 'cors'}).then(response => response.json())
                .then(data => {
                    if (data.success == true ){
                        let modal = makeModal()
                        document.getElementsByTagName("body")[0].insertAdjacentHTML( 'beforeend', modal.modal);
                        the(modal.titulo).innerHTML = "Cargar datos desde el servidor";
                        the(modal.titulo).classList.add("mx-auto");
                    
                        let _contenido = '<p>Guardado</p>'
                    
                        the(modal.contenido).innerHTML = _contenido;
                        the(modal.id).children[0].classList.remove("modal-lg");
                    
                        $('#'+modal.id).modal("show").on('hidden.bs.modal', function (e) { $(this).remove(); });
                    }
                }).catch(function(error) {
                    alert("error")
                });
            })
        }
    }
})