import { useForm } from "react-hook-form";
import { modificarUsuario } from "../api/usuario.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/authContext";
import { validarCI } from "../helpers/validarCI";



export const ModificarUsuario = () => {

    // const [updateUser, setUpdateUser] = useState({})

    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue
    } = useForm();

    const onSubmit = handleSubmit(async data => {
        console.log(data)

        if (validarCI(data.ci)) {
            const resp = await modificarUsuario(tokenAccess, false, data)
            console.log(resp)
        }
    })

    const cargarUsuario = async () => {
        try {
            const resp = await modificarUsuario(tokenAccess, true);
            const { user: username, telefono, direccion, ci, sexo, email, id } = resp.data;

            setValue('username', username);
            setValue('telefono', telefono);
            setValue('direccion', direccion);
            setValue('ci', ci);
            setValue('sexo', sexo);
            setValue('email', email);
            setValue('id', id);


        } catch (error) {
            console.error("Error al cargar el usuario:", error);
        }
    }

    useEffect(() => {
        cargarUsuario();
    }, []);


    return <>

        <div className="formContenedor w-50">

            <h2> Modificar Usuario </h2>

            <form
                method="POST"
                name="ModificarUsuario"
                className="d-flex flex-column"
                onSubmit={onSubmit}
            >


                <div className="mb-2">
                    <label className="form-label">Usuario</label>
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



                <div className="mb-2">
                    <label className="form-label">Correo</label>
                    <input
                        type="email"
                        className={"form-control " + (errors.email && "errorInput")}
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email?.type === "required" && (
                        <p className="text-danger">El campo es requerido</p>
                    )}
                </div>



                <div className="mb-2">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        className={"form-control " + (errors.direccion && "errorInput")}
                        {...register("direccion", { required: true })}
                        aria-invalid={errors.direccion ? "true" : "false"}
                    />
                    {errors.direccion?.type === "required" && (
                        <p className="text-danger">El campo es requerido</p>
                    )}
                </div>

                <div className="mb-2">
                    <label className="form-label">Carnet de identidad</label>
                    <input
                        type="number"
                        className={"form-control " + (errors.ci && "errorInput")}
                        name="ci"
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

                <div className="mb-2">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={"form-control " + (errors.password && "errorInput")}
                        {...register("password", { required: true, minLength: 8 })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password?.type === "required" && (
                        <p className="text-danger">El campo es requerido</p>
                    )}
                    {errors.password?.type === "minLength" && (
                        <p className="text-danger">El campo debe tener más de 8 dígitos</p>
                    )}
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




