import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';


export const ConfirmarOperacionComponent = ({ setShow, acciones, metodo = () => { }, borrar = false }) => {

    const { show, id, tokenAccess } = acciones;


    const handleAceptar = () => {
        borrar ?
            metodo(tokenAccess)
            : metodo(tokenAccess, id);

        setShow({
            ...acciones,
            show: false
        });
    }

    const handleCancelar = () => {
        // console.log(acciones)
        setShow({
            ...acciones,
            show: false
        });
    }


    return (
        <>
            <Modal show={show} onHide={() => setShow({
                ...acciones,
                show: false
            })}>

                <Modal.Body>¿Está seguro que desea realizar esta acción?</Modal.Body >
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



ConfirmarOperacionComponent.propTypes = {
    setShow: PropTypes.func.isRequired,
    acciones: PropTypes.object.isRequired,
    borrar: PropTypes.bool,
    metodo: PropTypes.func
  }
  
  