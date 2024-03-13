import { Consultar } from "../../components/Consultar"



const ConsultarLimite = () => {


    const inputMostrar = {
        cuenta: true
    }


    return (<>
        <Consultar 
        nombreForm='ConsultarLimite' 
        tipoConsulta='Límite' 
        inputMostrar={inputMostrar}
        />
    </>
    )
}

export default ConsultarLimite;