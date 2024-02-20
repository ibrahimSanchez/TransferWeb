import { useForm } from "react-hook-form";





export const PagoFormComponent = ({ titulo, formName, inputMostrar }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        // const resp = await pagarElectricidad(data);
        // console.log(resp)
    })



    const {
        idServicio,
        tipoCuenta,
        idMulta,
        ci,
        monto,
        articulo,
        inciso,
        municipio,
        provincia,
        fecha,
        tributo,
        periodo,
        nit
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
                {idServicio &&
                    <div className="mb-2">
                        <label className="form-label">Identificador de servidio</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("idServicio", { required: true })}
                        />
                    </div>
                }


                {nit &&
                    <div className="mb-2">
                        <label className="form-label">NIT</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("nit", { required: true })}
                        />
                    </div>
                }

                {idMulta &&
                    <div className="mb-2">
                        <label className="form-label">Id de multa</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("idMulta", { required: true })}
                        />
                    </div>
                }

                {ci &&
                    <div className="mb-2">
                        <label className="form-label">Carnet de identidad</label>
                        <input
                            type="number"
                            className="form-control"
                            {...register("ci", { required: true, maxLength: 11, minLength: 11 })}
                        />
                    </div>
                }




                {articulo &&
                    <div className="mb-2">
                        <label className="form-label">Artículo</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("articulo", { required: true })}
                        />
                    </div>
                }

                {inciso &&
                    <div className="mb-2">
                        <label className="form-label">Inciso</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("inciso", { required: true })}
                        />
                    </div>
                }

                {provincia &&
                    <div className="mb-2">
                        <label className="form-label">Provincia</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("provincia", { required: true })}
                        />
                    </div>
                }

                {municipio &&
                    <div className="mb-2">
                        <label className="form-label">Municipio</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("municipio", { required: true })}
                        />
                    </div>
                }


                {tributo &&
                    <div className="mb-2">
                        <label className="form-label">Tributo</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("tributo", { required: true })}
                        />
                    </div>
                }

                {periodo &&
                    <div className="mb-2">
                        <label className="form-label">Período</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("periodo", { required: true })}
                        />
                    </div>
                }


                {monto &&
                    <div className="mb-2">
                        <label className="form-label">Monto</label>
                        <input
                            type="number"
                            className="form-control"
                            {...register("monto", { required: true })}
                        />
                    </div>
                }

                {fecha &&
                    <div className="mb-2">
                        <label className="form-label">Fecha</label>
                        <input
                            type="date"
                            className="form-control"
                            {...register("fecha", { required: true })}
                        />
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





// <div className="mb-2">
// <label className="form-label">Teléfono</label>
// <input
//     type="number"
//     className="form-control"
//     {...register("telefono", { required: true, maxLength: 8, minLength: 8 })}
// />
// </div>



// <div className="mb-2">
// <label className="form-label">Dirección</label>
// <input
//     type="text"
//     className="form-control"
//     {...register("direccion", { required: true })}
// />
// </div>

// <div className="mb-2">
// <label className="form-label">Carnet de identidad</label>
// <input
//     type="number"
//     className="form-control"
//     {...register("ci", { required: true, maxLength: 11, minLength: 11 })}
// />
// </div>

// <div className="mb-2">
// <label className="form-label">Contraseña</label>
// <input
//     type="password"
//     className="form-control"
//     {...register("contrasena", { required: true, minLength: 8 })}
// />
// </div>

// <div className="mb-2">
// <label className="form-label">Sexo</label>
// <select
//     className="form-select"
//     aria-label="Default select example"
//     {...register("sexo", { required: true })}
// >
//     <option value="M">M</option>
//     <option value="F">F</option>
// </select>
// </div>
