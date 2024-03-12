import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { putModifCuenta } from '../api/cuentas.api';
import { useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import { CuentaContext } from '../context/CuentaContext';




export const ModalModificarTarjeta = ({ show, setShow, datosTarjeta }) => {

    const {
        id,
        limite_ATM,
        limite_POS,
        no_cuenta,
        nombre,
    } = datosTarjeta;


    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;


    const {
        cuentas,
        setCuentas,
        setTarjetasMostrar
    } = useContext(CuentaContext);





    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        defaultValues: {
            nombre,
            no_cuenta,
            limite_ATM,
            limite_POS,
            id

        }
    });


    const handleClose = () => setShow(false);

    const onSubmit = handleSubmit(async data => {
        // console.log(data)
        const resp = await putModifCuenta(tokenAccess, data)
        const newTarjetas = cuentas.map(cuenta => (cuenta.id === data.id) ? data : cuenta);
        setCuentas(newTarjetas)
        setTarjetasMostrar(newTarjetas)
        handleClose();
    })


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar tarjeta</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form method='POST' name='ModificarTarjeta' onSubmit={onSubmit}>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Nombre</label>
                            <input
                                className={"form-control " + (errors.nombre && "errorInput")}
                                type="text"
                                name='nombre'
                                {...register("nombre", { required: true })}
                                aria-invalid={errors.nombre ? "true" : "false"}
                            />
                            {errors.nombre?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Tarjeta</label>
                            <input
                                className={"form-control " + (errors.no_cuenta && "errorInput")}
                                type="number"
                                name='no_cuenta'
                                {...register("no_cuenta", { required: true, min: 0, maxLength: 16, minLength: 16 })}
                                aria-invalid={errors.no_cuenta ? "true" : "false"}
                            />
                            {errors.no_cuenta?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                            {errors.no_cuenta?.type === "min" && (
                                <p className="text-danger">El campo no puede ser negativo</p>
                            )}
                            {(errors.no_cuenta?.type === "minLength" || errors.no_cuenta?.type === "maxLength") && (
                                <p className="text-danger">El campo debe tener 16 dígitos</p>
                            )}
                        </div>


                        <div className="mb-3 form-group" >
                            <label className='form-label'>limite ATM</label>
                            <input
                                className={"form-control " + (errors.limite_ATM && "errorInput")}
                                type="number"
                                name='limite_ATM'
                                {...register("limite_ATM", { required: true, min: 0 })}
                                aria-invalid={errors.limite_ATM ? "true" : "false"}
                            />
                            {errors.limite_ATM?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                            {errors.limite_ATM?.type === "min" && (
                                <p className="text-danger">El campo no puede ser negativo</p>
                            )}
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>limite POS</label>
                            <input
                                className={"form-control " + (errors.limite_POS && "errorInput")}
                                type="number"
                                name='limite_POS'
                                {...register("limite_POS", { required: true, min: 0 })}
                                aria-invalid={errors.limite_POS ? "true" : "false"}
                            />
                            {errors.limite_POS?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                            {errors.limite_POS?.type === "min" && (
                                <p className="text-danger">El campo no puede ser negativo</p>
                            )}
                        </div>

                        {/* <div className="mb-3 form-group" >
                            <label className='form-label'>Telefono</label>
                            <input
                                className={"form-control " + (errors.username && "errorInput")}
                                type="number"
                                name='telefono'
                                {...register("telefono", { required: true, maxLength: 8, minLength: 8, min: 0 })}
                                aria-invalid={errors.telefono ? "true" : "false"}
                            />
                            {errors.telefono?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                            {errors.telefono?.type === "min" && (
                                <p className="text-danger">El campo no puede ser negativo</p>
                            )}
                            {(errors.telefono?.type === "minLength" || errors.telefono?.type === "maxLength") && (
                                <p className="text-danger">El campo debe tener 8 dígitos</p>
                            )}
                        </div> */}

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Tipo de cuenta</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("tipo_cuenta", { required: true })}
                            >
                                <option value="CUP">CUP</option>
                                <option value="MLC">MLC</option>
                            </select>
                        </div>


                        <button className='btn btn-success' >
                            Aceptar
                        </button>

                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

