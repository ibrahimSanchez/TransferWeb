import { Consultar } from "../../components/Consultar"




export const ConsultarMultaContravencion = () => {

    const inputMostrar = {
        idMulta: true,
        ci: true
    }


    return (
        <Consultar 
        nombreForm='ConsultarMultaContravencion' 
        tipoConsulta='Multa de Contravención' 
        inputMostrar={inputMostrar}
        />
    )
}
