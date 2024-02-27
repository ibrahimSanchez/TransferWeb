import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { addTarjeta } from '../api/tarjetas.api';




export const ModalAddTarjeta = ({ show, setShow }) => {


    const { register, handleSubmit } = useForm();


    const handleClose = () => setShow(false);

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        const resp = await addTarjeta(data)
        console.log(resp)
        handleClose();
    })


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir tarjeta</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form method='POST' name='ModificarTarjeta' onSubmit={onSubmit}>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Nombre</label>
                            <input className='form-control'
                                type="text"
                                name='nombre'
                                required
                                {...register("nombre", { required: true })}
                            />
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Tarjeta</label>
                            <input className='form-control'
                                type="text"
                                name='no_cuenta'
                                required
                                {...register("tarjeta", { required: true, maxLength: 16, minLength: 16 })}
                            />
                        </div>


                        <div className="mb-3 form-group" >
                            <label className='form-label'>limite ATM</label>
                            <input className='form-control'
                                type="number"
                                name='limite_ATM'
                                required
                                {...register("limite_ATM", { required: true })}
                            />
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>limite POS</label>
                            <input className='form-control'
                                type="number"
                                name='limite_POS'
                                required
                                {...register("limite_POS", { required: true })}
                            />
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Telefono</label>
                            <input className='form-control'
                                type="number"
                                name='telefono'
                                required
                                {...register("telefono", { required: true, maxLength: 8, minLength: 8 })}
                            />
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Tipo de cuenta</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("tipo_cuenta", { required: true })}
                            >
                                <option value="CUP">CUP</option>
                                <option value="MLC">MLC</option>
                            </select>
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

