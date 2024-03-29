import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../public/assets/logo.png';
import menu from '../../public/assets/iconos/menu.svg';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AcordionSideBarComponent } from "./AcordionSideBar";



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
                        <Link className="navbar-brand" to="/" onClick={() => setShow(false)}>
                            <img className='logo' src={logo} alt='logo' />
                            {/* <label>Transfermóvil</label> */}
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <AcordionSideBarComponent setShow={setShow} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


