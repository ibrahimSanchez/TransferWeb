import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";
import { cerrarSesion } from "../api/usuario.api";
import { SideBar } from './SideBar';

// import fotoUsuario from '../assets/usuario.png';
import '../css/SideBar.css';





export const NavBar = () => {


    const navegar = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const { usuario } = useContext(AuthContext);

    const handleCerrarSesion = async () => {

        // const resp = await cerrarSesion();
        // console.log(resp);        

        dispatch({ type: types.logout })

        navegar('/inicio', {
            replace: true
        });
    }


    return (
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary navBar">
            <div className="navBarContenedor d-flex">
                <Navbar.Brand href="#home">
                    <SideBar />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <p className="m-0 text-info nombreUsuario">{usuario.correo}</p>
                    </Navbar.Text>
                    <Navbar.Text>
                        <button className="btn btn-info" onClick={handleCerrarSesion} > Salir </button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
