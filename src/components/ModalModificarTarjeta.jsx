import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { updateTarjeta } from '../api/tarjetas.api';




export const ModalModificarTarjeta = ({ show, setShow, datosTarjeta }) => {

    const { nombre, tarjeta: no_cuenta, telefono } = datosTarjeta;

    const { register, handleSubmit } = useForm({
        defaultValues: {
            nombre,
            no_cuenta,
            telefono,
        }
    });


    const handleClose = () => setShow(false);

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        const resp = await updateTarjeta(data)
        console.log(resp)
        handleClose();
    })


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar tarjeta</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form method='POST' name='ModificarTarjeta' onSubmit={onSubmit}>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Nombre</label>
                            <input className='form-control'
                                type="text"
                                name='nombre'
                                {...register("nombre", { required: true })}
                            />
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Tarjeta</label>
                            <input className='form-control'
                                type="text"
                                name='tarjeta'
                                {...register("no_cuenta", { required: true, maxLength: 16, minLength: 16 })}
                            />
                        </div>


                        <div className="mb-3 form-group" >
                            <label className='form-label'>limite ATM</label>
                            <input className='form-control'
                                type="number"
                                name='limite_ATM'
                                {...register("limite_ATM", { required: true })}
                            />
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>limite POS</label>
                            <input className='form-control'
                                type="number"
                                name='limite_POS'
                                {...register("limite_POS", { required: true })}
                            />
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Telefono</label>
                            <input className='form-control'
                                type="text"
                                name='telefono'
                                {...register("telefono", { required: true, maxLength: 8, minLength: 8 })}
                            />
                        </div>

                        <button className='btn btn-success' >
                            Modificar
                        </button>

                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

