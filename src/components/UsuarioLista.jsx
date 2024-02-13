import { useEffect, useState } from "react";
import { getAllUsers } from "../api/usuario.api";
import { UsuarioCard } from "./UsuarioCard";

export function UsuarioLista() {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const resp = await getAllUsers();
            setUsuario(resp.data)
        }
        loadUsuarios();
    }, [])

     
    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">

            <h1>Usuario Lista</h1>
            {usuario.map(usuario => (
                // eslint-disable-next-line react/jsx-key
                <UsuarioCard key={usuario.ci} usuario={usuario} />
            ))}
            </div>
        </div>
    ) 
}