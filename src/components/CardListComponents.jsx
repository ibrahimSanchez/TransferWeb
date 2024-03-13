import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { ModalModificarTarjeta } from './ModalModificarTarjeta';
import { ModalAddTarjeta } from './ModalAddTarjeta';
import { deleteCuenta } from '../api/cuentas.api';
import { AuthContext } from '../auth/authContext';
import { CuentaContext } from '../context/CuentaContext';



export const CardListComponent = () => {


    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const [showModificar, setShowModificar] = useState(false);
    const [showAdd, setShowAdd] = useState(false)



    const {
        cuentas,
        cargarCuentas,
        tarjetasMostrar
    } = useContext(CuentaContext);



    const [datosTarjeta, setDatosTarjeta] = useState({
        id: '',
        limite_ATM: '',
        limite_POS: '',
        no_cuenta: '',
        nombre: '',

    });

    const handleModificar = ({ target }) => {
        const res = cuentas.filter(item => item.id === parseInt(target.value));
        setDatosTarjeta(res[0]);
        setShowModificar(true);
    }

    const handleDelete = ({ target }) => {

        const tarjeta = cuentas.filter(item => item.id === parseInt(target.value))[0];
        console.log(tarjeta.id);
        const resp = deleteCuenta(tokenAccess, tarjeta.id);
        cargarCuentas()
    }


    const handleAdd = () => setShowAdd(true);


    return (
        <div className='d-flex column flex-wrap justify-content-center mb-5 mt-2'>

            {showModificar &&
                <ModalModificarTarjeta
                    show={showModificar}
                    setShow={setShowModificar}
                    datosTarjeta={datosTarjeta}
                />}

            {showAdd &&
                <ModalAddTarjeta
                    show={showAdd}
                    setShow={setShowAdd}
                />
            }


            <div className='d-flex flex-wrap justify-content-center mb-5 mt-2'>
                {
                    tarjetasMostrar.map(({ nombre, no_cuenta, tipo_cuenta, saldo, id }) =>
                        <Card style={{ width: '18rem' }} key={no_cuenta} className='m-3 tarjeta'>
                            <Card.Body>
                                <Card.Title>{nombre}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{no_cuenta}</Card.Subtitle>
                                <Card.Text>
                                    Moneda: {tipo_cuenta}
                                </Card.Text>
                                {/* <Card.Text>
                                    saldo: {saldo}
                                </Card.Text> */}
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

