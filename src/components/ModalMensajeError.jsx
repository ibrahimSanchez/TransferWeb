import Modal from 'react-bootstrap/Modal';



export const ModalMensajeError = ({ show = true, setShow,  texto = 'texto de error', titulo = 'Error' }) => {
    return (

        <>
            <Modal
                size="sm"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton className='text-danger'>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        {titulo}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='text-danger'>
                    {texto}
                </Modal.Body>
            </Modal>
        </>
    )
}
