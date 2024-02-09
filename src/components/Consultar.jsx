import { useForm } from "react-hook-form";
// import { createUsuario } from "../api/usuario.api";s





export const Consultar = ({ tipoConsulta, nombreForm }) => {


    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        // const resp = await createUsuario(data)
        // console.log(resp)
    })


    return (
        <>

            <div className="formContenedor">


                <h2 className="mb-5 col"> Consultar { tipoConsulta }</h2>

                <form
                    method="POST"
                    name={ nombreForm }
                    className="d-flex flex-column"
                    onSubmit={onSubmit}
                >

                    <div className="mb-2">
                        <label className="form-label">Tipo de cuenta</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("tipocuenta", { required: true })}
                        >
                            <option value="CUP">CUP</option>
                            <option value="MLC">MLC</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4"> Aceptar </button>


                </form>

            </div>

        </>
    )
}
