import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/authContext";

import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { postAddServicio, putServicio } from "../api/servicios.api";



export const ServiciosFormComponent = ({ trabajarForm, setTrabajarForm, cargarData, values = {}, setMensaje, setShowResp }) => {

    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const [formValue, setFormValue] = useState('');

    const { accion, show } = trabajarForm;

    const { identificador, monto, nombre, id, campo = '' } = values;

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
        setValue,
        getValues
    } = useForm();


    useEffect(() => {
        if (accion === 'Modificar') {
            setFormValue(nombre)
            setValue('nombre', nombre);
            setValue('identificador', identificador);
            setValue('monto', monto);
            setValue('id', id);
            setValue('campo', campo);

            console.log(campo)
        }
        else {
            setFormValue('')
            setValue('nombre', 'Factura telefónica');
            setValue('identificador', '');
            setValue('monto', '');
            setValue('id', '');
            setValue('campo', '');
        }
    }, [accion, values]);


    const handleClose = () => setTrabajarForm({
        ...trabajarForm,
        show: false,
        values: {}
    });


    const onSubmit = handleSubmit(async data => {

        let resp;

        if (accion === 'Modificar')
            resp = await putServicio(tokenAccess, data);
        else
            resp = await postAddServicio(tokenAccess, data);
    

        setShowResp(true);
        setMensaje(resp.data);
        // console.log(resp)
        reset();
        cargarData();

        handleClose();
    })




    const handleSelect = () => {
        setFormValue(getValues('nombre'))
        // console.log('hola')
    }


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
                                onClick={handleSelect}
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

                        {
                            formValue === 'Multa de tránsito' &&
                            <div className="mb-3 form-group" >
                                <label className='form-label'>Licencia de conducción</label>
                                <input
                                    className={"form-control " + (errors.campo && "errorInput")}
                                    type="text"
                                    name='licencia'
                                    {...register("campo", { required: true })}
                                    aria-invalid={errors.campo ? "true" : "false"}
                                />
                                {errors.campo?.type === "required" && (
                                    <p className="text-danger">El campo es requerido</p>
                                )}
                            </div>
                        }

                        {
                            formValue === 'ONAT' &&
                            <div className="mb-3 form-group" >
                                <label className='form-label'>nit</label>
                                <input
                                    className={"form-control " + (errors.campo && "errorInput")}
                                    type="text"
                                    name='onat'
                                    {...register("campo", { required: true })}
                                    aria-invalid={errors.campo ? "true" : "false"}
                                />
                                {errors.campo?.type === "required" && (
                                    <p className="text-danger">El campo es requerido</p>
                                )}
                            </div>
                        }

                        {
                            formValue === 'Multa de contravención' &&
                            <div className="mb-2">
                                <label className="form-label">Carnet de identidad</label>
                                <input
                                    type="number"
                                    className={"form-control " + (errors.campo && "errorInput")}
                                    {...register("campo", { required: true, maxLength: 11, minLength: 11, min: 0 })}
                                    aria-invalid={errors.campo ? "true" : "false"}
                                />
                                {errors.campo?.type === "required" && (
                                    <p className="text-danger">El campo es requerido</p>
                                )}
                                {errors.campo?.type === "min" && (
                                    <p className="text-danger">El campo no puede ser negativo</p>
                                )}
                                {(errors.campo?.type === "minLength" || errors.campo?.type === "maxLength") && (
                                    <p className="text-danger">El campo debe tener 11 dígitos</p>
                                )}
                            </div>
                        }




                        <button className='btn btn-success' >
                            Aceptar
                        </button>

                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}













