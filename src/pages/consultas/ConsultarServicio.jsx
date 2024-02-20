import { Consultar } from "../../components/Consultar"



export const ConsultarServicio = () => {

    const inputMostrar = {
        tipoServicio: true
    }


    return (
        <Consultar
        nombreForm='ConsultarServicio' 
        tipoConsulta='Servicio' 
        inputMostrar={inputMostrar}
        />
    )
}
