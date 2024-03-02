import { useForm } from "react-hook-form";
import ModalComponent from "../components/Modal"
import { useState } from "react";
// import { getLimiteCuenta, getSaldoCuenta, getServicio } from "../api/consultas.api";





export const Consultar = ({ tipoConsulta, nombreForm, inputMostrar }) => {


    const [show, setShow] = useState(false);

    const [{ titulo, contenido }, setDatosModal] = useState({
        titulo: '',
        contenido: ''
    });

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();


    const onSubmit = handleSubmit(async data => {
        console.log(data)

        // const resp = await getLimiteCuenta(data);
        // const resp = await getSaldoCuenta(data);
        // const resp = await getServicio(data);

        // console.log(resp)



        // Declarar variables para mostrar datos del modal al recibir resp del backend
        setDatosModal({
            titulo: 'Cambiar x el de verdad',
            contenido: 'dadja da djansd asdnksajdkas asdsd asjdashdasd asd ahdasd saha'
        });

        setShow(true);
    });





    const {
        idMulta,
        ci,
        tipoCuenta,
        licenciaCond,
        tipoServicio
    } = inputMostrar;


    return (
        <>
            <ModalComponent show={show} setShow={setShow} titulo={titulo} contenido={contenido} />



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
                                {...register("tiposervicio", { required: true })}
                            >
                                <option value="todas">Todas las operaciones</option>
                                <option value="transferencia">Transferencias</option>
                                <option value="recarga">Recarga móvil</option>
                            </select>
                        </div>
                    }




                    {tipoCuenta &&
                        <div className="mb-2">
                            <label className="form-label">Tipo de cuenta</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("tipocuenta", { required: true })}
                            >
                                <option value="CUP">CUP</option>
                                <option value="MLC">MLC</option>
                            </select>
                        </div>
                    }

                    <button type="submit" className="btn btn-success mt-4"> Aceptar </button>


                </form>

            </div>

        </>
    )
}
