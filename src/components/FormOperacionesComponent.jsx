import { useForm } from "react-hook-form";


export const FormOperacionesComponent = ({ titulo, formName, inputMostrar }) => {


    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        // const resp = await pagarElectricidad(data);
        // console.log(resp)
    })

    const {
        tipoCuenta,
        monto,
        numeroCuenta,
        telefono,
        nombreUsuario,
        // tipoRecarga
    } = inputMostrar;



    return <>

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
                            className={"form-control " + (errors.numerocuenta && "errorInput")}
                            name="numerocuenta"
                            {...register("numerocuenta", { required: true, maxLength: 16, minLength: 16, min: 0 })}
                            aria-invalid={errors.numerocuenta ? "true" : "false"}
                        />
                        {errors.numerocuenta?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                        {errors.numerocuenta?.type === "min" && (
                            <p className="text-danger">El campo no puede ser negativo</p>
                        )}
                        {(errors.numerocuenta?.type === "minLength" || errors.numerocuenta?.type === "maxLength") && (
                            <p className="text-danger">El campo debe tener 16 dígitos</p>
                        )}
                    </div>
                }


                {nombreUsuario &&
                    <div className="mb-2">
                        <label className="form-label">Nombre de usuario</label>
                        <input
                            type="text"
                            className={"form-control " + (errors.username && "errorInput")}
                            {...register("username", { required: true })}
                            aria-invalid={errors.username ? "true" : "false"}
                        />
                        {errors.username?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                    </div>
                }


{/* 
                {tipoRecarga &&
                    <div className="mb-3 form-group" >
                        <label className='form-label'>Tipo de recarga</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("tiporecarga", { required: true })}
                        >
                            <option value="tipo1">tipo 1</option>
                            <option value="tipo2">tipo 2</option>
                        </select>
                    </div>
                } */}


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


                {tipoCuenta &&
                    <div className="mb-3 form-group" >
                        <label className='form-label'>Tipo de cuenta</label>
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
}



