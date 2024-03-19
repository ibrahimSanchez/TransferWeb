import { useContext } from "react";
import { AuthContext } from "../auth/authContext";

import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { postAddServicio, putServicio } from "../api/servicios.api";





export const ServiciosFormComponent = ({ trabajarForm, setTrabajarForm, cargarData, values }) => {

    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const { accion, show } = trabajarForm;

    console.log(values)


    const {
        register,
        formState: { errors },
        reset,
        handleSubmit
    } = useForm({
        defaultValues: values
    });




    const handleClose = () => setTrabajarForm({
        ...trabajarForm,
        show: false,
        values: {}
    });


    const onSubmit = handleSubmit(async data => {

        let resp;

        if (accion === 'Modificar') {
            
            resp = await putServicio(tokenAccess, data);
            console.log(resp)
        }
        else
            resp = await postAddServicio(tokenAccess, data);

        // console.log(resp, data)
        cargarData();
        reset();

        handleClose();
    })


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{accion} servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form method='POST' name='ModificarTarjeta' onSubmit={onSubmit}>


                        <div className="mb-3 form-group" >
                            <label className='form-label'>Tipo de servicio</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("nombre", { required: true })}
                            >
                                <option value="Factura telefónica">Factura telefónica</option>
                                <option value="Factura eléctrica">Factura eléctrica</option>
                                <option value="Factura de agua">Factura de agua</option>
                                <option value="ONAT">ONAT</option>
                                <option value="Multa de tránsito">Multa de tránsito</option>
                                <option value="Multa de contravención">Multa de contravención</option>
                            </select>
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Identificador</label>
                            <input
                                className={"form-control " + (errors.identificador && "errorInput")}
                                type="text"
                                name='nombre'
                                {...register("identificador", { required: true })}
                                aria-invalid={errors.identificador ? "true" : "false"}
                            />
                            {errors.identificador?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Monto</label>
                            <input
                                className={"form-control " + (errors.monto && "errorInput")}
                                type="number"
                                name='saldo'
                                {...register("monto", { required: true, min: 0 })}
                                aria-invalid={errors.monto ? "true" : "false"}
                            />
                            {errors.monto?.type === "required" && (
                                <p className="text-danger">El campo es requerido</p>
                            )}
                            {errors.monto?.type === "min" && (
                                <p className="text-danger">El campo no puede ser negativo</p>
                            )}
                        </div>


                        <button className='btn btn-success' >
                            Aceptar
                        </button>

                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}













