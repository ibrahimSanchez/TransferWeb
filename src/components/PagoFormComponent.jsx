import { useForm } from "react-hook-form";





export const PagoFormComponent = ({ titulo, formName, inputMostrar }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        // const resp = await pagarElectricidad(data);
        // console.log(resp)
    })



    const { idServicio, tipoCuenta, idMulta, ci, monto } = inputMostrar;

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
                        <label className="form-label">CI</label>
                        <input
                            type="number"
                            className="form-control"
                            {...register("ci", { required: true, maxLength: 11, minLength: 11 })}
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
