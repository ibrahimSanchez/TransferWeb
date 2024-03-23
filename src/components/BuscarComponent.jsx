import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import PropTypes from 'prop-types';



export const BuscarComponent = ({ setBuscar }) => {

  const [valoresBusqueda, setValoresBusqueda] = useState({
    campo: 'nombre',
    valor: ''
  });

  const handleChange = ({ target }) => {
    setValoresBusqueda({
      ...valoresBusqueda,
      valor: target.value
    });
  }

  const handleSelectMoneda = ({ target }) => {
    setValoresBusqueda({
      ...valoresBusqueda,
      valor: target.value
    });
  }

  useEffect(() => {
    setBuscar(valoresBusqueda);
  }, [valoresBusqueda])

  const handleSelect = ({ target }) => {
    setValoresBusqueda({
      campo: target.value,
      valor: ''
    });
  }


  return (
    <div className='d-flex justify-content-center'>
      <Stack direction="horizontal" className='p-4'>

        <Form.Select
          aria-label="Default select example"
          className='m-2 selectBuscar'
          onChange={handleSelect}
        >
          <option value="nombre" >Nombre</option>
          <option value="no_cuenta" >Cuenta</option>
          <option value="tipo_cuenta" >Moneda</option>
        </Form.Select>


        {
          valoresBusqueda.campo === 'tipo_cuenta' ?
            <Form.Select
              aria-label="Default select example"
              className='m-2 selectBuscar'
              onChange={handleSelectMoneda}
            >
              <option value="CUP" >CUP</option>
              <option value="MLC" >MLC</option>
            </Form.Select>
            : <Form.Control
              className="me-auto selectBuscar"
              placeholder="Buscar...."
              value={valoresBusqueda.valor}
              onChange={handleChange}
              required
            />

        }

      </Stack>
    </div>
  );
}


BuscarComponent.propTypes = {
  setBuscar: PropTypes.func.isRequired
}
