import { useForm } from "react-hook-form";
import { createUsuario } from "../api/usuario.api";



export const ModificarUsuario = () => {


    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        const resp = await createUsuario(data)
        console.log(resp)
    })

    return <>

        <div className="formContenedor">


            <h2 className="mb-5 col"> Modificar Usuario </h2>



            <form
                method="POST"
                name="RegistrarUsuario"
                className="d-flex flex-column"
                onSubmit={onSubmit}
            >


                <div className="mb-2">
                    <label className="form-label">Usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("usuario", { required: true, minLength: 8 })}
                    />
                </div>


                <div className="mb-2">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="number"
                        className="form-control"
                        {...register("telefono", { required: true, maxLength: 8, minLength: 8 })}
                    />
                </div>


                <div className="mb-2">
                    <label className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("correo", { required: true })}
                    />
                </div>


                <div className="mb-2">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("direccion", { required: true })}
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Carnet de identidad</label>
                    <input
                        type="number"
                        className="form-control"
                        {...register("ci", { required: true, maxLength: 11, minLength: 11 })}
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("contrasena", { required: true, minLength: 8 })}
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Sexo</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        {...register("sexo", { required: true })}
                    >
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-success mt-4"> Aceptar </button>


            </form>


        </div>





    </>
}




