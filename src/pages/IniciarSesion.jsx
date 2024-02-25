import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";
import { iniciarSesion } from "../api/usuario.api";

import logo from '../assets/logo.png';




const IniciarSesion = ({ setTieneCuenta }) => {

    const navegar = useNavigate();

    const { dispatch } = useContext(AuthContext);



    const { register, handleSubmit } = useForm();


    const onSubmit = handleSubmit(async data => {

        const resp = await iniciarSesion(data);
        // console.log(resp)

        if (resp.data[0] === true) {

            const accion = {
                type: types.login,
                payload: { usuario: data.username }
            }

            dispatch(accion);

            navegar('/', {
                replace: true
            });

        }
    })

    return (<>

        <img className="logoInicio" src={logo} alt="Logo" />

        <div className="formContenedor row sesion">

            <h2 className="mb-5 col"> Iniciar Sesión </h2>

            <form
                method="POST"
                name="RegistrarUsuario"
                className=" d-flex flex-column"
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
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", { required: true, minLength: 8 })}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success mt-4"
                >
                    Aceptar
                </button>

            </form>

            <button
                className="btnCuenta mt-3"
                onClick={() => setTieneCuenta(false)}
            >
                ¿No tienes cuenta?
            </button>

        </div>
    </>

    )
}

export default IniciarSesion