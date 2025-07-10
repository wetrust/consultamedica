import { the } from './wetrust.js'


the("comparacion.graficas").onclick = function(){
    if (this.checked == true){
        the("comparacion.graficas.div").classList.remove("d-none");
        the("comparacion.graficas.div").classList.add("d-flex");
    }else{
        the("comparacion.graficas.div").classList.add("d-none");
        the("comparacion.graficas.div").classList.remove("d-flex");
    }
}

let columnaCounter = 1;

        // Función para agregar event listeners a los inputs de una columna
        function agregarEventListeners(columnaId) {
            const inputs = ['dbp', 'cc', 'ca', 'lf', 'pfe'];
            
            inputs.forEach(input => {
                const inputElement = document.getElementById(`comparador.${input}.${columnaId}`);
                const pctElement = document.getElementById(`comparador.${input}.pct.${columnaId}`);
                
                if (inputElement && pctElement) {
                    inputElement.addEventListener('input', function() {
                        const valor = parseFloat(this.value);
                        if (!isNaN(valor)) {
                            const funcion = this.dataset.funcion
                            const semanas = document.getElementById(`comparador.semanas.${columnaId}`).value
                            var resultado
                            if(funcion == 'dbp'){
                                resultado = comparacionDBP(parseFloat(semanas), valor)
                            }else if(funcion == 'cc'){
                                resultado = comparacionDBP(parseFloat(semanas), valor)
                            }else if(funcion == 'ca'){
                                resultado = comparacionDBP(parseFloat(semanas), valor)
                            }else if(funcion == 'lf'){
                                resultado = comparacionDBP(parseFloat(semanas), valor)
                            }else if(funcion == 'pfe'){
                                resultado = comparacionDBP(parseFloat(semanas), valor)
                            }
                            pctElement.textContent = resultado.toFixed(2);
                        } else {
                            pctElement.textContent = 'mm';
                        }
                    });
                }
            });

            // Event listener para el botón eliminar
            const eliminarBtn = document.getElementById(`comparador.eliminar.${columnaId}`);
            if (eliminarBtn) {
                eliminarBtn.addEventListener('click', function() {
                    const columna = document.getElementById(`comparador.columna.${columnaId}`);
                    if (columna) {
                        columna.remove();
                    }
                });
            }
        }

        // Función para clonar una columna
        function clonarColumna() {
            columnaCounter++;
            const columnaOriginal = document.getElementById('comparador.columna.1');
            const nuevaColumna = columnaOriginal.cloneNode(true);
            
            // Cambiar el ID de la nueva columna
            nuevaColumna.id = `comparador.columna.${columnaCounter}`;
            
            // Cambiar todos los IDs internos
            const elementos = nuevaColumna.querySelectorAll('[id]');
            elementos.forEach(elemento => {
                const oldId = elemento.id;
                const newId = oldId.replace('.1', `.${columnaCounter}`);
                elemento.id = newId;
            });
            
            // Limpiar los valores de los inputs
            const inputs = nuevaColumna.querySelectorAll('input');
            inputs.forEach(input => {
                input.value = '';
            });
            
            // Resetear los textos de los percentiles
            const pctElements = nuevaColumna.querySelectorAll('[id$=".pct.' + columnaCounter + '"]');
            pctElements.forEach(pct => {
                pct.textContent = 'mm';
            });

            // Resetear los selects
            const selects = nuevaColumna.querySelectorAll('select');
            selects.forEach(select => {
                select.selectedIndex = 0;
            });

            //visualizar el eliminar
            const eliminarBtn = nuevaColumna.querySelectorAll('[id$="comparador.eliminar.'+columnaCounter+'"]')[0]
            eliminarBtn.classList.add("btn", "btn-danger")
            eliminarBtn.classList.remove("d-none")

            // Insertar la nueva columna antes de comparador.final
            const final = document.getElementById('comparador.final');
            final.parentNode.insertBefore(nuevaColumna, final);

            // Agregar event listeners a la nueva columna
            agregarEventListeners(columnaCounter);
        }

        // Función para obtener todos los valores organizados
        function obtenerValores() {
            const columnas = document.querySelectorAll('[id^="comparador.columna."]');
            const datos = {
                'Edad Gestacional': [],
                'DBP': [],
                'C. Cráneo': [],
                'C. Abdomen': [],
                'L. Fémur': [],
                'PFE': []
            };

            columnas.forEach(columna => {
                const id = columna.id.split('.')[2];
                
                // Obtener edad gestacional
                const semanas = document.getElementById(`comparador.semanas.${id}`).value;
                const dias = document.getElementById(`comparador.dias.${id}`).value;
                datos['Edad Gestacional'].push(`${semanas}s ${dias}d`);
                
                // Obtener valores y sus cálculos
                const campos = ['dbp', 'cc', 'ca', 'lf', 'pfe'];
                const nombres = ['DBP', 'C. Cráneo', 'C. Abdomen', 'L. Fémur', 'PFE'];
                
                campos.forEach((campo, index) => {
                    const valor = document.getElementById(`comparador.${campo}.${id}`).value;
                    const calculo = document.getElementById(`comparador.${campo}.pct.${id}`).textContent;
                    
                    if (valor) {
                        datos[nombres[index]].push(`${valor}mm (calc: ${calculo})`);
                    } else {
                        datos[nombres[index]].push('No ingresado');
                    }
                });
            });

            // Mostrar los datos en el modal
            mostrarValoresEnModal(datos);
        }

        // Función para mostrar valores en el modal
        function mostrarValoresEnModal(datos) {
            const content = document.getElementById('valoresContent');
            let html = '<div class="table-responsive"><table class="table table-striped"><thead><tr><th>Categoría</th>';
            
            // Agregar headers para cada columna
            for (let i = 0; i < datos['Edad Gestacional'].length; i++) {
                html += `<th>Columna ${i + 1}</th>`;
            }
            html += '</tr></thead><tbody>';
            
            // Agregar filas para cada categoría
            Object.keys(datos).forEach(categoria => {
                html += `<tr><td><strong>${categoria}</strong></td>`;
                datos[categoria].forEach(valor => {
                    html += `<td>${valor}</td>`;
                });
                html += '</tr>';
            });
            
            html += '</tbody></table></div>';
            content.innerHTML = html;
            
            // Mostrar el modal
            $('#valoresModal').modal('show');
        }

        // Event listeners iniciales
        document.addEventListener('DOMContentLoaded', function() {
            // Agregar event listeners a la primera columna
            agregarEventListeners(1);
            
            // Event listener para el botón agregar
            document.getElementById('comparador.agregar').addEventListener('click', clonarColumna);
            
            // Event listener para el botón obtener valores
            document.getElementById('obtener.valores').addEventListener('click', obtenerValores);
            clonarColumna()
            clonarColumna()
        });

function comparacionDBP(eg,dbp) {
    'use strict';
    let a = [], b = [];

    a[0]=14;a[1]=17;a[2]=19;a[3]=25;a[4]=29;a[5]=33;a[6]=34;a[7]=38;a[8]=41;a[9]=43;a[10]=46;a[11]=49;a[12]=52;a[13]=54;a[14]=57;a[15]=61;a[16]=63;a[17]=65;a[18]=69;a[19]=69;a[20]=74;a[21]=74;a[22]=77;a[23]=78;a[24]=78;a[25]=81;a[26]=85;a[27]=88;
    b[0]=25;b[1]=29;b[2]=33;b[3]=35;b[4]=41;b[5]=42;b[6]=46;b[7]=50;b[8]=52;b[9]=56;b[10]=59;b[11]=63;b[12]=66;b[13]=70;b[14]=71;b[15]=75;b[16]=77;b[17]=81;b[18]=83;b[19]=87;b[20]=88;b[21]=91;b[22]=94;b[23]=95;b[24]=97;b[25]=99;b[26]=97;b[27]=106;
    
    dbp = dbp.toString();
    dbp = dbp.replace(",", ".");
    dbp = parseFloat(dbp);

    if (eg < 12 || eg > 40){
        return 0;
    }
    else {
        eg = eg - 12;
        eg = parseInt(eg);

        var uno = b[eg] - a[eg];
        var dos = dbp - a[eg];
        var resultado = (parseInt(95 / (uno) * (dos) + 3));

        //truncador de Pct, sobre 100 o bajo 1
        if (resultado > 99){
            return '&gt; 99';
        }
        else if (resultado < 1){
            return '&lt; 1';
        }
        else {
            return resultado;
        }
        //p50();
    }
}