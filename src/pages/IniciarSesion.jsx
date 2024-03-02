import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";
import { iniciarSesion } from "../api/usuario.api";

import logo from '../assets/logo.png';
import { SpinnerComponent } from "../components/SpinnerComponent";




const IniciarSesion = ({ setTieneCuenta }) => {

    const navegar = useNavigate();


    const { dispatch } = useContext(AuthContext);

    const [show, setShow] = useState({
        modal: false,
        error: false
    });

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();


    const onSubmit = handleSubmit(async data => {
        setShow({
            ...show,
            modal: true
        });

        const resp = await iniciarSesion(data);
        // console.log(resp)


        if (resp.data[0] === true) {
            setShow({
                ...show,
                modal: false
            });

            const accion = {
                type: types.login,
                payload: { usuario: data.username }
            }

            dispatch(accion);

            navegar('/', {
                replace: true
            });

        }

        else {
            setShow({
                ...show,
                error: true
            });
            // alert('hola')
        }
    })

    return (<>

        <SpinnerComponent show={show} setShow={setShow} />


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
                        className={"form-control " + (errors.username && "errorInput")}
                        {...register("username", { required: true })}
                        aria-invalid={errors.username ? "true" : "false"}
                    />
                    {errors.username?.type === "required" && (
                        <p className="text-danger">El campo es requerido</p>
                    )}
                </div>


                <div className="mb-2">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={"form-control " + (errors.password && "errorInput")}
                        {...register("password", { required: true })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password?.type === "required" && (
                        <p className="text-danger">El campo es requerido</p>
                    )}
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