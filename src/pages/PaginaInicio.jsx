import { useState } from "react"
import IniciarSesion from "./IniciarSesion"
import { RegistrarUsuario } from "./RegistrarUsuario";


export const PaginaInicio = () => {

    const [tieneCuenta, setTieneCuenta] = useState(true);

    return (<div className="paginaInicio d-flex column aling-item-center">

        
        {tieneCuenta ? <IniciarSesion setTieneCuenta={setTieneCuenta} /> : <RegistrarUsuario setTieneCuenta={setTieneCuenta} />}

    </div>)
}

