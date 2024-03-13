import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const ListOperacionesComponent = ({ show = false, setShow, data = [] }) => {

    const handleClose = () => setShow(false);


    // console.log(data)

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header >
                    <Modal.Title className='text-success'>Consulta realizada</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-block'>

                    {
                        (data.length > 0 ) ?
                        data.map(({ servicio, operacion, fecha, moneda, monto }) => (
                            <div key={fecha} className='d-flex justify-content-between mb-2'>
                                <div className='w-50 d-flex align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="rgb(0 197 150)"
                                        className="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z" />
                                    </svg>

                                    <div className='marginLeft' >
                                        <h6><b>{servicio}</b></h6>
                                        <p className='text-secondary'>{operacion}</p>
                                    </div>
                                </div>

                                <div className='w-50 text-end'>
                                    <div className='d-flex justify-content-end'>
                                        <h6 className=''><b>{operacion === 'Débito' ? '-'+monto : '+'+monto}</b></h6>
                                        <p className='text-secondary marginLeft'>{moneda}</p>
                                    </div>
                                    <p className='text-secondary'>{fecha.slice(0,10)}</p>
                                </div>
                            </div>
                        )
                        )
                        : <p>No hay operaciones que mostrar</p>
                    }





                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ListOperacionesComponent
