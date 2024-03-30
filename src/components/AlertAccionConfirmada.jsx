import { Modal } from "react-bootstrap"





export const AlertAccionConfirmada = ({ texto, show }) => {
    return (

        <>
            <Modal
                size="sm"
                show={show}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Body className='bg-success text-center rounded text-white'>
                    {texto}
                </Modal.Body>
            </Modal>
        </>
    )
}
