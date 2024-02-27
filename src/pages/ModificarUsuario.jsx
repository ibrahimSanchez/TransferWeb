import { useForm } from "react-hook-form";
import { getCargarUsuario } from "../api/usuario.api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/authContext";



export const ModificarUsuario = () => {

    const [updateUser, setUpdateUser ] = useState({})

    const { usuario } = useContext(AuthContext);
    const user = usuario.usuario;

    const { register, handleSubmit } = useForm({
        defaultValues: updateUser
    });

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        // const resp = await modificarUsuario(data)
        // console.log(resp)
    })

    console.log(user)

    const cargarUsuario = async () => {
        // try {
            const resp = await getCargarUsuario(user);
            const {user: username, telefono, direccion, ci, sexo} = resp.data[0];
            setUpdateUser({username, telefono, direccion, ci, sexo});
        // } catch (error) {
        //     // Manejo de errores, por ejemplo, mostrar un mensaje al usuario o registrar el error
        //     console.error("Error al cargar el usuario:", error);
        // }
    }
    
    useEffect(() => {
        cargarUsuario();
    }, []);



    return <>

        <div className="formContenedor w-50">

            <h2> Modificar Usuario </h2>

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
                        required
                        {...register("username", { required: true, minLength: 8 })}
                    />
                </div>


                <div className="mb-2">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="number"
                        className="form-control"
                        required
                        {...register("telefono", { required: true, maxLength: 8, minLength: 8 })}
                    />
                </div>


                <div className="mb-2">
                    <label className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        required
                        {...register("email", { required: true })}
                    />
                </div>


                <div className="mb-2">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        {...register("direccion", { required: true })}
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Carnet de identidad</label>
                    <input
                        type="number"
                        className="form-control"
                        required
                        {...register("ci", { required: true, maxLength: 11, minLength: 11 })}
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        required
                        {...register("password", { required: true, minLength: 8 })}
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




