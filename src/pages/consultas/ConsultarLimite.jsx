import { Consultar } from "../../components/Consultar"



const ConsultarLimite = () => {


    const inputMostrar = {
        tipoCuenta: true
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