import { Col, Container, Image, Row } from 'react-bootstrap';
import CarruselComponent from '../components/Carrusel';
import '../css/principal.css';

import img from '../../public/assets/icono.png'


const Principal = () => {

    const p = 'Te provee servicios para la realización de operaciones financieras, eliminando restrinciones de acceso a los diferentes servicios.';


    return (
        <div className='paginaPrincipal'>
            
            
            <CarruselComponent />


            <div>
                <Container className='m-5'>
                    <Row>
                        <Col md={8} className='d-flex flex-column  align-items-center'>
                            <h2>TransferWeb</h2>
                            <p className='m-2 w-75 text-secondary'>{p}</p>
                        </Col>
                        <Col md={4}>
                            <Image
                                src={img}
                                rounded
                                width={200}
                                className='p-4 imgBoxShadow animate__rotateInUpLeft imgAnimate'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>


            <div className="p-5 mt-5 mb-5 d-flex align-items-center justify-content-around view" >
                <div>
                    <Image
                        src={img}
                        rounded
                        width={200}
                        className='p-4 animate__rotateInUpLeft imgAnimate'
                    />
                </div>
                <div>
                    <h4 className="text-secondary mb-5">
                        ¡Ya está TransferWeb!
                    </h4>
                    <p className="w-75 text-secondary">
                        Ahora podrá disfrutar de la efectividad de nuestros servicios en sus operaciones financieras.
                        <br />
                        Colocando la app al alcance de todos.
                    </p>
                </div>
            </div>






        </div>
    )
}

export default Principal