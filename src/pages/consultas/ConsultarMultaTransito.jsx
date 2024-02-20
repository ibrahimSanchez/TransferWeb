import { Consultar } from "../../components/Consultar"



export const ConsultarMultaTransito = () => {
    
    const inputMostrar = {
        idMulta: true,
        licenciaCond: true
    }


    return (
        <Consultar 
        nombreForm='ConsultarMultaTransito' 
        tipoConsulta='Multa de Tránsito' 
        inputMostrar={inputMostrar}
        />
    )
}
