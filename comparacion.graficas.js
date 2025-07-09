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
                            const resultado = valor * 2;
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
            const eliminarBtn = nuevaColumna.querySelectorAll('[id$="comparador.eliminar.'+columnaCounter+'"]')
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
        });