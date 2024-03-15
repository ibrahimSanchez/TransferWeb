import { Consultar } from "../../components/Consultar"



export const ListDetallesOperacionesComponent = () => {
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

