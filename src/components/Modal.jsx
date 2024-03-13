import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({ show = false, setShow, titulo='Consulta realizada', mensaje }) {

    const handleClose = () => setShow(false);

    // console.log(mensaje)

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header >
                    <Modal.Title className='text-success'>{titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{mensaje} </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;