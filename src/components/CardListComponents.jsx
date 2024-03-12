import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { ModalModificarTarjeta } from './ModalModificarTarjeta';
import { ModalAddTarjeta } from './ModalAddTarjeta';
import { deleteCuenta } from '../api/cuentas.api';
import { AuthContext } from '../auth/authContext';
import { CuentaContext } from '../context/CuentaContext';



export const CardListComponent = ({ tarjetas = [] }) => {


    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const [showModificar, setShowModificar] = useState(false);
    const [showAdd, setShowAdd] = useState(false)



    const {
        cuentas,
        setCuentas,
        setTarjetasMostrar
    } = useContext(CuentaContext);






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
        setShowModificar(true);
    }


    // useEffect( () =>    console.log(datosTarjeta), [datosTarjeta] )





    const handleDelete = ({ target }) => {

        const tarjeta = tarjetas.filter(item => item.id === parseInt(target.value))
        console.log(tarjeta[0].id);

        const resp = deleteCuenta(tokenAccess, target.value)
        const newTarjetas = cuentas.map(cuenta => (cuenta.id != tarjeta[0].id) && cuenta);
        setCuentas(newTarjetas)
        setTarjetasMostrar(newTarjetas)

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

