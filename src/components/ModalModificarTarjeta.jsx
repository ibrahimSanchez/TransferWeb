import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';





export const ModalModificarTarjeta = ({ show, setShow, datosTarjeta, setDatosTarjeta }) => {


    const handleClose = () => setShow(false);

    const { nombre, tarjeta, telefono } = datosTarjeta;

    console.log(nombre)

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar tarjeta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder="name@example.com"
                                value={nombre}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tarjeta</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder="name@example.com"
                                value={tarjeta}
                                autoFocus
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder="name@example.com"
                                value={telefono}
                                autoFocus
                            />
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                    <Button variant="success" onClick={handleClose}>
                        Modificar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

