import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getServicios } from "../../api/servicios.api";
import { AuthContext } from "../../auth/authContext";
import { postConsultarServicio } from "../../api/operaciones.api";
import ModalComponent from "../../components/Modal";
import { Alert } from "react-bootstrap";




export const ConsultarServicio = () => {


    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const [show, setShow] = useState(false);
    const [contenido, setContenido] = useState('');



    const [arrList, setArrList] = useState([]);
    const [datosForm, setDatosForm] = useState({
        tipo: 'Factura telefónica',
        arr: []
    });

    const { tipo, arr } = datosForm;


    const {
        register,
        // formState: { errors },
        handleSubmit,
        setValue
    } = useForm();




    const cargarData = async () => {

        let temp = [];

        try {
            const resp = await getServicios(tokenAccess);
            resp.data.map(item => {
                if (item.nombre === tipo) {
                    temp.push(item);
                }
            });

            setArrList(resp.data);

            setDatosForm({
                ...datosForm,
                arr: temp
            })

        } catch (error) {
            console.log(error)
        }
    }


    const onSubmit = handleSubmit(async data => {
        const resp = await postConsultarServicio(tokenAccess, data);
        // console.log(resp)
        setShow(true);
        setContenido(`Tipo de servicio: ${resp.data.Servicio} Monto: ${resp.data.Monto}`);
    })

    const handleInput = ({ target }) => {

        setDatosForm({
            tipo: target.value,
            arr: []
        })

        let temp = [];

        arrList.map(item => {
            if (item.nombre === target.value) {
                temp.push(item);
            }
        });

        setValue('identificador', temp[0]?.identificador)
        setDatosForm({
            ...datosForm,
            arr: temp
        })
    }




    useEffect(() => cargarData, []);


    return (
        <>
            <ModalComponent show={show} setShow={setShow} mensaje={contenido} />


            <div className="formContenedor row sesion">

                <h2 className="mb-5 col">Consultar Servicio</h2>

                <form
                    method="POST"
                    name='consultarServicio'
                    className="d-flex flex-column"
                    onSubmit={onSubmit}
                >

                    <div className="mb-3 form-group" >
                        <label className='form-label'>Tipo de servicio</label>
                        <select
                            onInput={handleInput}
                            className="form-select"
                            aria-label="Default select example"
                        // {...register("nombre", { required: true })}
                        >
                            <option value="Factura telefónica">Factura telefónica</option>
                            <option value="Factura eléctrica">Factura eléctrica</option>
                            <option value="Factura de agua">Factura de agua</option>
                            <option value="ONAT">ONAT</option>
                            <option value="Multa de tránsito">Multa de tránsito</option>
                            <option value="Multa de contravención">Multa de contravención</option>
                        </select>
                    </div>

                    {
                        arr.length > 0 ?
                        <div className="mb-3 form-group" >
                            <label className='form-label'>Identificador</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("identificador", { required: true })}
                            >
                                {
                                    arr.map(({ id, identificador }) =>
                                        <option key={id} value={identificador}>{identificador}</option>
                                    )
                                }
                            </select>
                        </div>
                        : <Alert variant='success'>
                        No hay servicios asociados
                    </Alert>
                    }


                    <button
                        type="submit"
                        className="btn btn-success mt-4"
                        disabled={arr.length === 0}
                    >
                        Aceptar
                    </button>



                </form>
            </div>
        </>
    )
}
