import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import menu from '../assets/iconos/menu.svg';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AcordionComponent } from "./Acordion";



export function SideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Button variant="" onClick={handleShow}>
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
                    <AcordionComponent />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


