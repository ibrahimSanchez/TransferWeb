import { useForm } from "react-hook-form";
import { createUsuario } from "../api/usuario.api";
import { useNavigate } from "react-router-dom";
import { SpinnerComponent } from "../components/SpinnerComponent";
import { useEffect, useState } from "react";


export const RegistrarUsuario = ({ setTieneCuenta }) => {

    const navegar = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();



    const [show, setShow] = useState({
        modal: false,
        error: false
    });


    const onSubmit = handleSubmit(async data => {

        setShow({
            ...show,
            modal: true
        });

        const resp = await createUsuario(data)
        console.log(resp)

        if (resp.status == 201) {
            setShow({
                ...show,
                modal: false
            });

            navegar('/*', {
                replace: true
            });
        }
    })

    return <>

        <SpinnerComponent show={show} setShow={setShow} />

        <div className="formContenedor row sesion">

            <h2 className="mb-5 col"> Registrar Usuario </h2>

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



            <button
                className="btnCuenta mt-3"
                onClick={() => setTieneCuenta(true)}
            >
                ¿Ya tienes cuenta?
            </button>

        </div>





    </>
}




