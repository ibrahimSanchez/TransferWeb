import flecha from '../assets/iconos/flechaDer.svg';




export const OpcionMenu = ({ estado, handleClick, titulo, nombre }) => {
    return (

        <div className="d-flex align-items-center mb-3">
            <button className="btn-flecha">
                <img src={flecha}
                    className={estado ? 'rotar' : ''}
                    name={nombre}
                    onClick={handleClick} />
            </button>
            <p className="sideBarCategoria">{titulo}</p>
        </div>
    )
}
