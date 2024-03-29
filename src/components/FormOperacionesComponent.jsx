import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../auth/authContext";
import { CuentaContext } from "../context/CuentaContext";
import {
    postRealiazarTransferencia,
    postRecargarNauta,
    postRecargarSaldoMovil
} from "../api/operaciones.api";
import ModalComponent from "./Modal";
import { ModalMensajeError } from "./ModalMensajeError";
import PropTypes from 'prop-types';
import { Alert } from "react-bootstrap";




export const FormOperacionesComponent = ({ titulo, formName, inputMostrar }) => {


    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [showError, setShowError] = useState(false);


    const {
        cuentas
    } = useContext(CuentaContext);

    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit
    } = useForm();


    const onSubmit = handleSubmit(async data => {
        // console.log(data);
        let resp

        switch (formName) {
            case 'realizarTransferencia':
                try {
                    resp = await postRealiazarTransferencia(tokenAccess, data);
                    // console.log(resp)
                    resp.data.message && (
                        setMensaje(resp.data.message),
                        setShow(true),
                        reset()
                    );
                } catch (error) {
                    // console.log(error.response)
                    error.response.status === 404 ?
                        setMensaje('La cuenta de destino no existe')
                        : setMensaje(error.response.data.error);
                    setShowError(true);
                }
                break;

            case 'recargarSaldo':
                try {
                    resp = await postRecargarSaldoMovil(tokenAccess, data);
                    // console.log(resp)
                    resp.data.message && (
                        setMensaje(resp.data.message),
                        setShow(true),
                        reset()
                    );
                } catch (error) {
                    // console.log(error.response)
                    setMensaje(error.response.data.error);
                    setShowError(true);
                }
                break;

            case 'recargarNauta':
                try {
                    resp = await postRecargarNauta(tokenAccess, data);
                    // console.log(resp)
                    resp.data.message && (
                        setMensaje(resp.data.message),
                        setShow(true),
                        reset()
                    );
                } catch (error) {
                    // console.log(error.response)
                    setMensaje(error.response.data.error);
                    setShowError(true);
                }
                break;

            default:
                break;
        }
    })


    const {
        tipoCuenta,
        monto,
        numeroCuenta,
        telefono,
        nombreUsuario,
        cuenta
        // tipoRecarga
    } = inputMostrar;



    return <>

        {
            show &&
            <ModalComponent show={show} setShow={setShow} mensaje={mensaje} />
        }

        {
            showError &&
            <ModalMensajeError show={showError} setShow={setShowError} texto={mensaje} />
        }

        <div className="formContenedor row sesion">

            <h2 className="mb-5 col"> {titulo} </h2>

            <form
                method="POST"
                name={formName}
                className="d-flex flex-column"
                onSubmit={onSubmit}
            >


                {
                    numeroCuenta &&
                    <div className="mb-2">
                        <label className="form-label">Número de cuenta</label>
                        <input
                            type="number"
                            className={"form-control " + (errors.no_cuenta && "errorInput")}
                            name="numerocuenta"
                            {...register("no_cuenta", { required: true, maxLength: 16, minLength: 16, min: 0 })}
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
                }


                {nombreUsuario &&
                    <div className="mb-2">
                        <label className="form-label">Nombre de usuario</label>
                        <input
                            type="text"
                            className={"form-control " + (errors.nombre_usuario && "errorInput")}
                            {...register("nombre_usuario", { required: true })}
                            aria-invalid={errors.nombre_usuario ? "true" : "false"}
                        />
                        {errors.nombre_usuario?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                    </div>
                }

                {
                    telefono &&
                    <div className="mb-2">
                        <label className="form-label">Teléfono</label>
                        <input
                            type="number"
                            className={"form-control " + (errors.telefono && "errorInput")}
                            name="telefono"
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
                    </div>
                }


                {monto &&
                    <div className="mb-2">
                        <label className="form-label">Monto</label>
                        <input
                            type="number"
                            className={"form-control " + (errors.monto && "errorInput")}
                            {...register("monto", { required: true, min: 0 })}
                            aria-invalid={errors.monto ? "true" : "false"}
                        />
                        {errors.monto?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                        {errors.monto?.type === "min" && (
                            <p className="text-danger">El campo no puede ser negativo</p>
                        )}
                    </div>
                }

                {cuenta &&
                    (
                        cuentas.length > 0 &&
                        <div className="mb-2">
                            <label className="form-label">Cuenta</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("id", { required: true })}
                            >
                                {
                                    cuentas.map(({ nombre, id }) => (
                                        <option
                                            key={nombre}
                                            value={id}>
                                            {nombre}
                                        </option>))
                                }

                            </select>
                        </div>
                    )
                }

                {cuentas.length === 0 &&
                    <Alert variant='success'>
                        No hay cuentas asociadas
                    </Alert>
                }


                {tipoCuenta &&
                    <div className="mb-3 form-group" >
                        <label className='form-label'>Moneda</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("moneda", { required: true })}
                        >
                            <option value='CUP'>CUP</option>
                            <option value='MLC'>MLC</option>
                        </select>
                    </div>
                }

                <button
                    type="submit"
                    className="btn btn-success mt-4"
                    disabled={cuentas.length === 0}
                >
                    Aceptar
                </button>

            </form>

        </div>

    </>
}




FormOperacionesComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
    formName: PropTypes.string.isRequired,
    inputMostrar: PropTypes.object.isRequired
}



