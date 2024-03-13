import { Consultar } from "../../components/Consultar"



export const ConsultarOperaciones = () => {

    const inputMostrar = {
        cuenta: true,
        tipoServicio: true
    }


    return (
        <Consultar
        nombreForm='ConsultarOperaciones' 
        tipoConsulta='Operaciones' 
        inputMostrar={inputMostrar}
        />
    )
}