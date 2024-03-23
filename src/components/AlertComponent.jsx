import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

function AlertComponent({ titulo = 'Error', detallesError = '', show, setShow }) {


  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow({
        modal: false,
        error: false
      })} dismissible>
        <Alert.Heading>{titulo}</Alert.Heading>
        <p>
          {detallesError}
        </p>
      </Alert>
    );
  }

}


AlertComponent.propTypes = {
  titulo: PropTypes.string,
  detallesError: PropTypes.string,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
}



export default AlertComponent;