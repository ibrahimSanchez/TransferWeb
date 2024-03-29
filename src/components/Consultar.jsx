import { useForm } from "react-hook-form";
import ModalComponent from "../components/Modal"
import { useContext, useState } from "react";
import { CuentaContext } from "../context/CuentaContext";
import { getLimitesCuenta, postDetallesOperaciones, postSaldoCuenta, postUltimasOperaciones } from "../api/operaciones.api";
import { AuthContext } from "../auth/authContext";
import ListOperacionesComponent from "./ListOperacionesComponent";
import ModalDetallesOperaciones from "./ModalDetallesOperaciones";
import PropTypes from 'prop-types';
import { Alert } from "react-bootstrap";



export const Consultar = ({ tipoConsulta, nombreForm, inputMostrar }) => {


    const {
        cuentas
    } = useContext(CuentaContext);


    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;


    const [show, setShow] = useState(false);
    const [showList, setShowList] = useState(false);

    const [{ data, contenido }, setDatosModal] = useState({
        data: [],
        contenido: ''
    });

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();


    const onSubmit = handleSubmit(async data => {
        // console.log(data)

        let resp;

        switch (nombreForm) {

            case 'ConsultarLimite':
                // console.log(data)
                resp = await getLimitesCuenta(tokenAccess, data);
                break;

            case 'ConsultarOperaciones':
                resp = await postUltimasOperaciones(tokenAccess, data)
                // console.log(resp)
                break;

            case 'ConsultarSaldo':
                resp = await postSaldoCuenta(tokenAccess, data);
                // console.log('ConsultarSaldo')
                break;

            case 'ListUltimasOperaciones':
                // console.log('ConsultarServicio', data)
                resp = await postDetallesOperaciones(tokenAccess, data)

                break;

            default:
                break;
        }


        if (resp) {

            if (nombreForm === 'ConsultarOperaciones' || nombreForm === 'ListUltimasOperaciones') {
                // console.log(resp)
                setDatosModal({
                    data: resp.data
                });

                nombreForm === 'ConsultarOperaciones' ?
                    setShow(true) : setShowList(true)
            }

            else {
                setDatosModal({
                    contenido: resp.data.message
                })

                setShow(true)
            }
        }

    });





    const {
        idMulta,
        ci,
        tipoCuenta,
        licenciaCond,
        tipoServicio,
        cuenta
    } = inputMostrar;


    return (
        <>

            {
                nombreForm === 'ConsultarOperaciones' ?
                    <ListOperacionesComponent show={show} setShow={setShow} data={data} />
                    : <ModalComponent show={show} setShow={setShow} mensaje={contenido} />
            }
            {
                nombreForm === 'ListUltimasOperaciones' &&
                <ModalDetallesOperaciones show={showList} setShow={setShowList} data={data} />
            }




            <div className="formContenedor">

                <h2 className="mb-5 col"> Consultar {tipoConsulta}</h2>

                <form
                    method="POST"
                    name={nombreForm}
                    className="d-flex flex-column"
                    onSubmit={onSubmit}
                >


                    {idMulta &&
                        <div className="mb-2">
                            <label className="form-label">Id de multa</label>
                            <input
                                type="text"
                                className={"form-control " + (errors.idMulta && "errorInput")}
                                {...register("idMulta", { required: true })}
                                aria-invalid={errors.idMulta ? "true" : "false"}
                            />
                            {errors.idMulta?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                        </div>
                    }

                    {ci &&
                        <div className="mb-2">
                            <label className="form-label">Carnet de identidad</label>
                            <input
                                type="number"
                                className={"form-control " + (errors.ci && "errorInput")}
                                {...register("ci", { required: true, min: 0, minLength: 11, maxLength: 11 })}
                                aria-invalid={errors.ci ? "true" : "false"}
                            />
                            {errors.ci?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                            {errors.ci?.type === "min" && (
                                <p className="text-danger">El campo no puede ser negativo</p>
                            )}
                            {(errors.ci?.type === "minLength" || errors.ci?.type === "maxLength") && (
                                <p className="text-danger">El campo debe tener 11 dígitos</p>
                            )}
                        </div>
                    }

                    {licenciaCond &&
                        <div className="mb-2">
                            <label className="form-label">Licencia de conducción</label>
                            <input
                                type="text"
                                className={"form-control " + (errors.licencia && "errorInput")}
                                {...register("licencia", { required: true })}
                                aria-invalid={errors.licencia ? "true" : "false"}
                            />
                            {errors.licencia?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                        </div>
                    }



                    {tipoServicio &&
                        <div className="mb-2">
                            <label className="form-label">Tipo de servicio</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("tipo_servicio", { required: true })}
                            >
                                <option value="Todas las operaciones">Todas las operaciones</option>
                                <option value="Transferencia">Transferencias</option>
                                <option value="Recarga Saldo Móvil">Recarga de saldo móvil</option>
                                <option value="Recarga Nauta">Recarga Nauta</option>
                            </select>
                        </div>
                    }



                    {
                        cuenta &&
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
                        <div className="mb-2">
                            <label className="form-label">Moneda</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("tipo_cuenta", { required: true })}
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
    )
}




Consultar.propTypes = {
    tipoConsulta: PropTypes.string.isRequired,
    nombreForm: PropTypes.string.isRequired,
    inputMostrar: PropTypes.object.isRequired
}
