import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({ show = false, setShow, titulo, contenido }) {

    const handleClose = () => setShow(false);


    return (
        <>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header >
                    <Modal.Title className='text-success'>{titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{contenido} </Modal.Body>
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