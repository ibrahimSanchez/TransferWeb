import { NavLink } from "react-router-dom";

import Accordion from 'react-bootstrap/Accordion';



export const AcordionSideBarComponent = ({setShow}) => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Sesión</Accordion.Header>
                <Accordion.Body>

                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/modificarusuario"
                        onClick={() => setShow(false)}
                    >
                        Modificar Usuario
                    </NavLink>

                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
                <Accordion.Header>Consultas</Accordion.Header>
                <Accordion.Body>


                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/consultarsaldo"
                        onClick={() => setShow(false)}
                    >
                        Consultar Saldo
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/consultarlimite"
                        onClick={() => setShow(false)}
                    >
                        Consultar Límite
                    </NavLink>


                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Tarjetas</Accordion.Header>
                <Accordion.Body>

                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-3' + (isActive ? 'activo' : '')}
                        to="/listatarjetas"
                        onClick={() => setShow(false)}
                    >
                        Lista de tarjetas
                    </NavLink>
                    
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
