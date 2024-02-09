/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function UsuarioCard({ usuario }) {
    return (
        <div>
            <h2>{usuario.correo}</h2>
            <p>{usuario.ci}</p>
            <hr />
        </div>
    )
}

