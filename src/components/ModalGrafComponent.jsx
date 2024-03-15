import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GraficoPastelComponent } from './GraficoPastelComponent';




export const ModalGrafComponent = ({ show = false, setShow, titulo = 'Consulta realizada', data = [] }) => {

    const handleClose = () => setShow(false);

    // console.log(mensaje)

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header >
                    <Modal.Title className='text-success'>{titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <GraficoPastelComponent data={data} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

