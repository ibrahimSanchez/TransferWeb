import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { tarjetas } from '../data/data';
import { ModalModificarTarjeta } from './ModalModificarTarjeta';






export const CardListComponent = () => {


    const [show, setShow] = useState(false);

    const [datosTarjeta, setDatosTarjeta] = useState({
        nombre: '',
        tarjeta: '',
        moneda: '',
        telefono: ''
    });

    const handleModificar = ({ target }) => {

        const res = tarjetas.filter(item => item.tarjeta === target.value)
        setDatosTarjeta(res[0]);
        setShow(true);

    }


    return (
        <div className='d-flex flex-wrap justify-content-center mb-5 mt-2'>

            {show &&
                <ModalModificarTarjeta
                    show={show}
                    setShow={setShow}
                    datosTarjeta={datosTarjeta}
                    setDatosTarjeta={setDatosTarjeta}
                />}

            {
                tarjetas.map(({ nombre, tarjeta, moneda, telefono }) =>
                    <Card style={{ width: '18rem' }} key={nombre + tarjeta} className='m-3 tarjeta'>
                        <Card.Body>
                            <Card.Title>{nombre}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{tarjeta}</Card.Subtitle>
                            <Card.Text>
                                Moneda: {moneda}
                            </Card.Text>
                            <Card.Text>
                                Teléfono: {telefono}
                            </Card.Text>
                            <button
                                className='btn btn-success m-2'
                                value={tarjeta}
                                onClick={handleModificar}
                            >
                                Modificar
                            </button>
                            <button className='btn btn-danger m-2'>Eliminar</button>
                        </Card.Body>
                    </Card>

                )
            }
        </div>





    );
}



