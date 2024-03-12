import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { ModalModificarTarjeta } from './ModalModificarTarjeta';
import { ModalAddTarjeta } from './ModalAddTarjeta';
import { deleteCuenta } from '../api/cuentas.api';
import { AuthContext } from '../auth/authContext';



export const CardListComponent = ({ tarjetas = [] }) => {


    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const [showModificar, setShowModificar] = useState(false);
    const [showAdd, setShowAdd] = useState(false)


    const [datosTarjeta, setDatosTarjeta] = useState({
        id: '',
        limite_ATM: '',
        limite_POS: '',
        no_cuenta: '', 
        nombre: '',

    });

    const handleModificar = ({ target }) => {

        const res = tarjetas.filter(item => item.id === parseInt(target.value))
        setDatosTarjeta(res[0]);
        // console.log(res[0])
        // console.log(datosTarjeta)
        setShowModificar(true);
    }


    // useEffect( () =>    console.log(datosTarjeta), [datosTarjeta] )





    const handleDelete = ({ target }) => {
        const resp = deleteCuenta(tokenAccess, target.value )
        console.log(resp, target.value )
        
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
                    tarjetas.map(({ nombre, no_cuenta, tipo_cuenta, saldo, id }) =>
                        <Card style={{ width: '18rem' }} key={no_cuenta} className='m-3 tarjeta'>
                            <Card.Body>
                                <Card.Title>{nombre}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{no_cuenta}</Card.Subtitle>
                                <Card.Text>
                                    Moneda: {tipo_cuenta}
                                </Card.Text>
                                <Card.Text>
                                    saldo: {saldo}
                                </Card.Text>
                                <button
                                    className='btn btn-success m-2'
                                    value={id}
                                    onClick={handleModificar}
                                >
                                    Modificar
                                </button>
                                <button
                                    className='btn btn-danger m-2'
                                    value={id}
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

