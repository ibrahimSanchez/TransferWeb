import { Container } from "react-bootstrap"
import { OperacionComponent } from "../components/OperacionComponent"
import { Consultar } from "../components/Consultar"






export const ListResumenComponent = () => {
    const inputMostrar = {
        cuenta: true
    }


    return (
        <Consultar
        nombreForm='ListUltimasOperaciones' 
        tipoConsulta='Últimas Operaciones' 
        inputMostrar={inputMostrar}
        />
    )
}

