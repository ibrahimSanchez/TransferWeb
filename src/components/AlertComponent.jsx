import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

function AlertComponent({ titulo = 'Error', texto = 'texto de error', show, setShow }) {


  if (show) {
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

}


AlertComponent.propTypes = {
  titulo: PropTypes.string,
  texto: PropTypes.string,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
}



export default AlertComponent;