import { useForm } from "react-hook-form";
import { municipios, provincias } from "../data/data";
import { useState } from "react";
import { validarCI } from "../helpers/validarCI";





export const PagoFormComponent = ({ titulo, formName, inputMostrar }) => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue
    } = useForm();


    
    const onSubmit = handleSubmit(async data => {
        
        if (validarCI(data.ci)) {
            console.log(data)
            // const resp = await pagarElectricidad(data);
        }

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


    const [provSelec, setProvSelec] = useState('Pinar del Río');

    const handleInput = (e) => {
        setProvSelec(e.target.value)
        setValue("provincia", e.target.value)
    }


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
                            className={"form-control " + (errors.idMulta && "errorInput")}
                            {...register("idServicio", { required: true })}
                            aria-invalid={errors.idMulta ? "true" : "false"}
                        />
                        {errors.idMulta?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                    </div>
                }


                {nit &&
                    <div className="mb-2">
                        <label className="form-label">NIT</label>
                        <input
                            type="text"
                            className={"form-control " + (errors.nit && "errorInput")}
                            {...register("nit", { required: true })}
                            aria-invalid={errors.nit ? "true" : "false"}
                        />
                        {errors.nit?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                    </div>
                }

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
                            {...register("ci", { required: true, maxLength: 11, minLength: 11, min: 0 })}
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




                {articulo &&
                    <div className="mb-2">
                        <label className="form-label">Artículo</label>
                        <input
                            type="text"
                            className={"form-control " + (errors.articulo && "errorInput")}
                            {...register("articulo", { required: true })}
                            aria-invalid={errors.articulo ? "true" : "false"}
                        />
                        {errors.articulo?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                    </div>
                }

                {inciso &&
                    <div className="mb-2">
                        <label className="form-label">Inciso</label>
                        <input
                            type="text"
                            className={"form-control " + (errors.inciso && "errorInput")}
                            {...register("inciso", { required: true })}
                            aria-invalid={errors.inciso ? "true" : "false"}
                        />
                        {errors.inciso?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                    </div>
                }



                {provincia &&
                    <div className="mb-3 form-group" >
                        <label className='form-label'>Provincia</label>
                        <select
                            onInput={handleInput}
                            className="form-select"
                            aria-label="Default select example"
                            required
                            value={provSelec}
                        >
                            {provincias.map(prov => <option key={prov} value={prov}>{prov}</option>)}
                        </select>
                    </div>
                }

                {municipio &&
                    <div className="mb-3 form-group" >
                        <label className='form-label'>Municipio</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("municipio", { required: true })}
                        >
                            {municipios[provSelec].map(muni => <option key={muni} value={muni}>{muni}</option>)}
                        </select>
                    </div>
                }



                {tributo &&
                    <div className="mb-2">
                        <label className="form-label">Tributo</label>
                        <input
                            type="text"
                            className={"form-control " + (errors.tributo && "errorInput")}
                            {...register("tributo", { required: true })}
                            aria-invalid={errors.tributo ? "true" : "false"}
                        />
                        {errors.tributo?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                    </div>
                }

                {periodo &&
                    <div className="mb-2">
                        <label className="form-label">Período</label>
                        <input
                            type="text"
                            className={"form-control " + (errors.periodo && "errorInput")}
                            {...register("periodo", { required: true })}
                            aria-invalid={errors.periodo ? "true" : "false"}
                        />
                        {errors.periodo?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
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

                {fecha &&
                    <div className="mb-2">
                        <label className="form-label">Fecha</label>
                        <input
                            type="date"
                            className={"form-control " + (errors.fecha && "errorInput")}
                            {...register("fecha", { required: true })}
                            aria-invalid={errors.fecha ? "true" : "false"}
                        />
                        {errors.fecha?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
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
