import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export const ConfirmarOperacionComponent = ({ setShow, acciones, metodo = () => { } }) => {

    const { show, id, tokenAccess } = acciones;


    const handleAceptar = () => {
        metodo(tokenAccess, id);
        setShow({
            ...acciones,
            show: false
        })
    }

    const handleCancelar = () => {
        // console.log(acciones)
        setShow({
            ...acciones,
            show: false
        })
    }


    return (
        <>
            <Modal show={show} onHide={() => setShow({
                ...acciones,
                show: false
            })}>

                <Modal.Body>¿ Está seguro que desea {show} ?</Modal.Body >
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
