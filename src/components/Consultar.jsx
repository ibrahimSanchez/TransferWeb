import { useForm } from "react-hook-form";
import ModalComponent from "../components/Modal"
import { useState } from "react";
import { getLimiteCuenta, getSaldoCuenta, getServicio } from "../api/consultas.api";




export const Consultar = ({ tipoConsulta, nombreForm }) => {


    const [show, setShow] = useState(false);

    const [{titulo, contenido}, setDatosModal] = useState({
        titulo: '',
        contenido: ''
    });




    const { register, handleSubmit } = useForm();


    const onSubmit = handleSubmit(async data => {
        console.log(data)


        // const resp = await getLimiteCuenta(data);
        // const resp = await getSaldoCuenta(data);
        // const resp = await getServicio(data);

        // console.log(resp)

        // Declarar variables para mostrar datos del modal al recibir resp del backend
        setDatosModal({
            titulo: 'Cambiar x el de verdad',
            contenido: 'dadja da djansd asdnksajdkas asdsd asjdashdasd asd ahdasd saha'
        });


        setShow(true);
    });


    return (
        <>
            <ModalComponent show={show} setShow={setShow} titulo={titulo} contenido={contenido} />

            <div className="formContenedor">


                <h2 className="mb-5 col"> Consultar {tipoConsulta}</h2>

                <form
                    method="POST"
                    name={nombreForm}
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

                    <button type="submit" className="btn btn-success mt-4"> Aceptar </button>


                </form>

            </div>

        </>
    )
}
