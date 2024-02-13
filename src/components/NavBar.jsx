import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
    console.log(usuario)

    return (
        <Navbar data-bs-theme="dark" className="bg-body-tertiary navBar">
            <div className="navBarContenedor d-flex">
                <Navbar.Brand >
                    <SideBar />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <p className="m-0 text-success nombreUsuario">{usuario.correo}</p>
                    </Navbar.Text>
                    <Navbar.Text>
                        <button className="btn " onClick={handleCerrarSesion} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                <path  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                <path  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                            </svg>
                        </button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
