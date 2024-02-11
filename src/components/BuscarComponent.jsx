import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';




export const BuscarComponent = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Stack direction="horizontal">
        <Form.Control className="me-auto" placeholder="Buscar...." />
        <Button variant="success" className='m-3'>Buscar</Button>
      </Stack>
    </div>
  );
}

