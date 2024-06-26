import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { ModalModificarTarjeta } from './ModalModificarTarjeta';
import { ModalAddTarjeta } from './ModalAddTarjeta';
import { deleteCuenta } from '../api/cuentas.api';
import { AuthContext } from '../auth/authContext';
import { CuentaContext } from '../context/CuentaContext';
import { ConfirmarOperacionComponent } from './ConfirmarOperacionComponent';
import ModalComponent from './Modal';
import { AlertAccionConfirmada } from './AlertAccionConfirmada';



export const CardListComponent = () => {


    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const [showModificar, setShowModificar] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const [showResp, setShowResp] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const [showConfirm, setShowConfirm] = useState({
        show: false,
        id: 0,
        tokenAccess
    });



    const {
        cuentas,
        cargarCuentas,
        tarjetasMostrar
    } = useContext(CuentaContext);


    // console.log(cuentas)


    const [datosTarjeta, setDatosTarjeta] = useState({
        id: '',
        limite_ATM: '',
        limite_POS: '',
        no_cuenta: '',
        nombre: '',

    });

    const handleModificar = ({ target }) => {
        const res = cuentas.map(item => {
            if (item.id === parseInt(target.value))
                setDatosTarjeta(item);
            // console.log(item)
        });
        setShowModificar(true);
        // console.log(target)
    }

    const handleDelete = ({ target }) => {

        const tarjeta = cuentas.filter(item => item.id === parseInt(target.value))[0];
        setShowConfirm({
            ...showConfirm,
            id: tarjeta.id,
            show: true,
        });

    }



    const deleteTarjetaMetodo = (token, id) => {
        const resp = deleteCuenta(token, id);
        // console.log(resp);
        cargarCuentas()
    }

    const handleAdd = () => setShowAdd(true);




    const [mensajeAccion, setMensajeAccion] = useState(false);

    const accionConfirmada = (token, id) => {
        setMensajeAccion(true);

        setTimeout(() => {
            setMensajeAccion(false);
            deleteTarjetaMetodo(token, id);
        }, 3000)

    }



    return (
        <div className='d-flex column flex-wrap justify-content-center mb-5 mt-2'>

            <AlertAccionConfirmada
                show={mensajeAccion}
                texto='Cuenta eliminada correctamente'
            />

            {showModificar &&
                <ModalModificarTarjeta
                    show={showModificar}
                    setShow={setShowModificar}
                    datosTarjeta={datosTarjeta}
                    setMensaje={setMensaje}
                    setShowResp={setShowResp}
                />
            }

            {
                showAdd &&
                <ModalAddTarjeta
                    show={showAdd}
                    setShow={setShowAdd}
                    setMensaje={setMensaje}
                    setShowResp={setShowResp}
                />
            }

            {
                showConfirm &&
                <ConfirmarOperacionComponent
                    setShow={setShowConfirm}
                    acciones={showConfirm}
                    metodo={accionConfirmada}
                />
            }


            {
                showResp &&
                <ModalComponent
                    titulo='Modificar cuenta'
                    show={showResp}
                    setShow={setShowResp}
                    mensaje={mensaje}
                />
            }


            <div className='d-flex flex-wrap justify-content-center mb-5 mt-2'>
                {
                    tarjetasMostrar.length === 0 ?
                        <p>No hay cuentas para mostrar</p>
                        : tarjetasMostrar.map(({ nombre, no_cuenta, tipo_cuenta, id }) =>
                            <Card style={{ width: '15rem' }} key={no_cuenta} className='m-3 tarjeta'>
                                <Card.Body>
                                    <Card.Title>{nombre}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{no_cuenta}</Card.Subtitle>
                                    <Card.Text>
                                        Moneda: {tipo_cuenta}
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
                    Añadir
                </button>
            </div>

        </div>
    );
}

