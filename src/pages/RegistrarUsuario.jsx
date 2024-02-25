import { useForm } from "react-hook-form";
import { createUsuario } from "../api/usuario.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export const RegistrarUsuario = ({ setTieneCuenta }) => {

    const navegar = useNavigate();
    const { register, handleSubmit } = useForm();


    const onSubmit = handleSubmit(async data => {
        const resp = await createUsuario(data)
        console.log(resp)

        if (resp.status == 201) {
            navegar('/inicio', {
                replace: true
            });
        }
    })

    return <>

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
                        className="form-control"
                        {...register("username", { required: true })}
                    />
                </div>


                <div className="mb-2">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="number"
                        className="form-control"
                        name="telefono"
                        {...register("telefono", { required: true, maxLength: 8, minLength: 8 })}
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("email", { required: true })}
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
                        name="ci"
                        {...register("ci", { required: true, maxLength: 11, minLength: 11 })}
                    />
                </div>

                <div className="mb-2">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
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



            <button
                className="btnCuenta mt-3"
                onClick={() => setTieneCuenta(true)}
            >
                ¿Ya tienes cuenta?
            </button>

        </div>





    </>
}




