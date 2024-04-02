import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';



export const AcordionSideBarComponent = ({ setShow }) => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Perfil</Accordion.Header>
                <Accordion.Body>

                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/modificarusuario"
                        onClick={() => setShow(false)}
                    >
                        Modificar Perfil
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
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/consultarservicios"
                        onClick={() => setShow(false)}
                    >
                        Consultar Servicios
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/consultaroperaciones"
                        onClick={() => setShow(false)}
                    >
                        Consultar Últimas Operaciones
                    </NavLink>


                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
                <Accordion.Header>Pagos</Accordion.Header>
                <Accordion.Body>

                <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/pagarelectricidad"
                        onClick={() => setShow(false)}
                    >
                        Pagar Electricidad
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/pagaragua"
                        onClick={() => setShow(false)}
                    >
                        Pagar Agua
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/pagaronat"
                        onClick={() => setShow(false)}
                    >
                        Pagar Impuestos a la ONAT
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/pagarmultacontravension"
                        onClick={() => setShow(false)}
                    >
                        Pagar Multa de Contravención
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/pagarmultatransito"
                        onClick={() => setShow(false)}
                    >
                        Pagar Multa de Tránsito
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/pagartelefono"
                        onClick={() => setShow(false)}
                    >
                        Pagar Teléfono
                    </NavLink>


                </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item eventKey="3">
                <Accordion.Header>Operaciones</Accordion.Header>
                <Accordion.Body>

                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/realizartransferencia"
                        onClick={() => setShow(false)}
                    >
                        Realizar Transferencia
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/recargarsaldo"
                        onClick={() => setShow(false)}
                    >
                        Recargar Saldo
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/recargarnauta"
                        onClick={() => setShow(false)}
                    >
                        Recargar Nauta
                    </NavLink>

                </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item eventKey="4">
                <Accordion.Header>Cuentas</Accordion.Header>
                <Accordion.Body>

                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/listatarjetas"
                        onClick={() => setShow(false)}
                    >
                        Gestionar cuentas
                    </NavLink>

                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="5">
                <Accordion.Header>Lista de operaciones</Accordion.Header>
                <Accordion.Body>

                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/detallesoperaciones"
                        onClick={() => setShow(false)}
                    >
                        Detalles de operaciones
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/resumenoperaciones"
                        onClick={() => setShow(false)}
                    >
                        Resumen de operaciones
                    </NavLink>

                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="6">
                <Accordion.Header>Servicios</Accordion.Header>
                <Accordion.Body>

                    <NavLink
                        className={({ isActive }) => 'linkNavegacion nav-item nav-link mb-2 ' + (isActive ? 'activo' : '')}
                        to="/listaservicios"
                        onClick={() => setShow(false)}
                    >
                        Gestionar servicios
                    </NavLink>

                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}





AcordionSideBarComponent.propTypes = {
    setShow: PropTypes.func.isRequired
}
