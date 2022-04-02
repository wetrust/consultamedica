import {the } from './wetrust.js'
import { construirTablaPacientes } from './pacientes.js'

$( document ).ready(function() {

    the("buscarPaciente").onkeyup = function(){
        let valor = this.value
        let resultado = [];

        if (valor != ""){

            resultado = globalPacientes.pacientes.filter(eldato => { return eldato.paciente_rut.includes(valor); })
            //filtrar por rut
            if (resultado.length > 0){
                construirTablaPacientes(resultado, globalPacientes.exam)
                return true
            }

            resultado = globalPacientes.pacientes.filter(
                eldato => { 
                    return (eldato.paciente_nombre.includes(valor) || eldato.paciente_apellido.includes(valor));
                }
            )

            //filtrar por nombre y apellido
            if (resultado.length > 0){
                construirTablaPacientes(resultado, globalPacientes.exam)
                return true
            }

        }else{
            construirTablaPacientes(globalPacientes.pacientes, globalPacientes.exam);
        }
    }
})
