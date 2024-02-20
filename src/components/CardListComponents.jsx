import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { ModalModificarTarjeta } from './ModalModificarTarjeta';
import { ModalAddTarjeta } from './ModalAddTarjeta';



export const CardListComponent = ({ tarjetas = [] }) => {



    const [showModificar, setShowModificar] = useState(false);
    const [showAdd, setShowAdd] = useState(false)


    const [datosTarjeta, setDatosTarjeta] = useState({
        nombre: '',
        tarjeta: '',
        moneda: '',
        telefono: ''
    });

    const handleModificar = ({ target }) => {

        const res = tarjetas.filter(item => item.tarjeta === target.value)
        setDatosTarjeta(res[0]);
        setShowModificar(true);

    }


    const handleDelete = ({ target }) => {
        console.log({ tarjeta: target.value })
    }
    const handleAdd = () => setShowAdd(true);


    return (
        <div className='d-flex column flex-wrap justify-content-center mb-5 mt-2'>

            {showModificar &&
                <ModalModificarTarjeta
                    show={showModificar}
                    setShow={setShowModificar}
                    datosTarjeta={datosTarjeta}
                    setDatosTarjeta={setDatosTarjeta}
                />}

            {showAdd &&
                <ModalAddTarjeta
                    show={showAdd}
                    setShow={setShowAdd}
                />
            }

            <div className='d-flex flex-wrap justify-content-center mb-5 mt-2'>

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
                                <button
                                    className='btn btn-danger m-2'
                                    value={tarjeta}
                                    onClick={handleDelete}
                                >
                                    Eliminar
                                </button>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>

            <div className='d-flex justify-content-center'>   
                <button
                    className='btn btn-success'
                    onClick={handleAdd}
                >
                    Añadir tarjeta
                </button>
            </div>


        </div>

    );
}



