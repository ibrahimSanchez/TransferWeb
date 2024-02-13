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
                                {...register("nombre", { required: true })}
                            />
                        </div>

                        <div className="mb-3 form-group" >
                            <label className='form-label'>Tarjeta</label>
                            <input className='form-control'
                                type="text"
                                name='tarjeta'
                                {...register("tarjeta", { required: true })}
                            />
                        </div>


                        <div className="mb-3 form-group" >
                            <label className='form-label'>Telefono</label>
                            <input className='form-control'
                                type="text"
                                name='telefono'
                                {...register("telefono", { required: true })}
                            />
                        </div>

                        <button className='btn btn-success' >
                            Modificar
                        </button>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

