import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useOpenMenu from "../hooks/useOpenMenu";
import { OpcionMenu } from "./OpcionMenu";
import logo from '../assets/logo.png';
import menu from '../assets/iconos/menu.svg';




import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function SideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [estados, handleClick] = useOpenMenu({});
    const { sesion, consulta } = estados;





    return (
        <>
            <Button variant="info" onClick={handleShow}>
                <img className='' src={menu} alt='' />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Link className="navbar-brand" to="/" >
                            <img className='logo' src={logo} alt='logo' />
                            {/* <label>Transfermóvil</label> */}
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>


                    <div className='row d-flex column'>

                        <OpcionMenu
                            estado={sesion}
                            handleClick={handleClick}
                            titulo='Sesión'
                            nombre='sesion'
                        />
                        <div className={`sesionLinks ${!sesion && 'd-none'}`} >
                            <NavLink
                                className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                                to="/modificarusuario"
                            >
                                Modificar Usuario
                            </NavLink>
                        </div>


                        <OpcionMenu
                            estado={consulta}
                            handleClick={handleClick}
                            titulo='Consultas'
                            nombre='consulta'
                        />
                        <div className={`sesionLinks ${!consulta && 'd-none'}`} >
                            <NavLink
                                className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                                to="/consultarsaldo"
                            >
                                Consultar Saldo
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                                to="/consultarlimite"
                            >
                                Consultar Límite
                            </NavLink>
                        </div>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


