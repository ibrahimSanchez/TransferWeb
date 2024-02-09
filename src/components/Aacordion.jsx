import {  NavLink } from "react-router-dom";

import Accordion from 'react-bootstrap/Accordion';



export const Acordion = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Sesión</Accordion.Header>
                <Accordion.Body>

                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/modificarusuario"
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
                            >
                                Consultar Saldo
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                                to="/consultarlimite"
                            >
                                Consultar Límite
                            </NavLink>


                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
