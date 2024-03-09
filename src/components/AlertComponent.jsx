import Alert from 'react-bootstrap/Alert';

function AlertComponent({titulo='Error', detallesError='', show, setShow}) {
  

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

export default AlertComponent;