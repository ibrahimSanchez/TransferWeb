import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';




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
  
  useEffect( () => {
    setBuscar(valoresBusqueda);
  },[valoresBusqueda] )

  const handleSelect = ({ target }) => {
    setValoresBusqueda({
      ...valoresBusqueda,
      campo: target.value
    });
  }


  return (
    <div className='d-flex justify-content-center'>
      <Stack direction="horizontal" className='p-4'>

        <Form.Select
          aria-label="Default select example"
          className='m-2'
          onChange={handleSelect}
        >
          <option value="nombre" >Nombre</option>
          <option value="telefono" >Teléfono</option>
          <option value="tarjeta" >Tarjeta</option>
        </Form.Select>

        <Form.Control
          className="me-auto"
          placeholder="Buscar...."
          value={valoresBusqueda.valor}
          onChange={handleChange}
          required
        />

      </Stack>
    </div>
  );
}

