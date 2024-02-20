import { Consultar } from "../../components/Consultar"



export const ConsultarOperaciones = () => {

    const inputMostrar = {
        tipoCuenta: true,
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