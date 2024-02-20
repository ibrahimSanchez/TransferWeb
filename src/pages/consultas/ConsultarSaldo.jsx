import { Consultar } from "../../components/Consultar"




export const ConsultarSaldo = () => {


    const inputMostrar = {
        tipoCuenta: true
    }


    return (
        <Consultar 
        nombreForm='ConsultarSaldo' 
        tipoConsulta='Saldo' 
        inputMostrar={inputMostrar}
        />
    )
}
