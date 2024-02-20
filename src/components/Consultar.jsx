import { useForm } from "react-hook-form";
import ModalComponent from "../components/Modal"
import { useState } from "react";
import { getLimiteCuenta, getSaldoCuenta, getServicio } from "../api/consultas.api";




export const Consultar = ({ tipoConsulta, nombreForm, inputMostrar }) => {


    const [show, setShow] = useState(false);

    const [{ titulo, contenido }, setDatosModal] = useState({
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





    const {
        idMulta,
        ci,
        tipoCuenta,
        licenciaCond,
        tipoServicio
    } = inputMostrar;


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


                    {idMulta &&
                        <div className="mb-2">
                            <label className="form-label">Id de multa</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("idMulta", { required: true })}
                            />
                        </div>
                    }

                    {ci &&
                        <div className="mb-2">
                            <label className="form-label">Carnet de identidad</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("ci", { required: true, minLength: 11, maxLength: 11 })}
                            />
                        </div>
                    }

                    {licenciaCond &&
                        <div className="mb-2">
                            <label className="form-label">Licencia de conducción</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("licencia", { required: true })}
                            />
                        </div>
                    }



                    {tipoServicio &&
                        <div className="mb-2">
                            <label className="form-label">Tipo de cuenta</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("tiposervicio", { required: true })}
                            >
                                <option value="s1">Servicio 1</option>
                                <option value="s2">Servicio 2</option>
                                <option value="s3">Servicio 3</option>
                                <option value="s4">Servicio 4</option>
                            </select>
                        </div>
                    }




                    {tipoCuenta &&
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
                    }

                    <button type="submit" className="btn btn-success mt-4"> Aceptar </button>


                </form>

            </div>

        </>
    )
}
