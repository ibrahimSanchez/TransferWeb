import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export const ConfirmarOperacionComponent = ({ setShow, acciones }) => {

    const { show, accion } = acciones;


    const handleAceptar = () => {
        setShow({
            accion: '',
            show: false,
            confirmacion: true
        })
    }

    const handleCancelar = () => {
        setShow({
            accion: '',
            show: false,
            confirmacion: false
        })
    }


    return (
        <>
            <Modal show={show} onHide={() => setShow({
                ...acciones,
                accion: '',
                show: false,
            })}>

                <Modal.Body>¿ Está seguro que desea {accion} ?</Modal.Body >
                <Modal.Footer>
                    <Button variant="success" onClick={handleAceptar}>
                        Aceptar
                    </Button>
                    <Button variant="danger" onClick={handleCancelar}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}
