import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { OperacionComponent } from './OperacionComponent';







const ModalDetallesOperaciones = ({ show = false, setShow, data = [] }) => {

    const handleClose = () => setShow(false);


    // console.log(data)

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header >
                    <Modal.Title className='text-success'>Consulta realizada</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-block'>

                    {
                        (data.length > 0) ?
                            data.map((item, id) => (

                                <OperacionComponent key={id} data={item} />
                            )
                            )
                            : <p>No hay operaciones que mostrar</p>
                    }





                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDetallesOperaciones
