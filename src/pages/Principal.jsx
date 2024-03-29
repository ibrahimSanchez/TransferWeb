import { Col, Container, Image, Row } from 'react-bootstrap';
import CarruselComponent from '../components/Carrusel';
import Form from 'react-bootstrap/Form';
import '../css/principal.css';

import img from '../../public/assets/icono.png'
import etecsaImg from '../../public/assets/etecsa.jpg';


const Principal = () => {

    const p = 'Te provee servicios para la realización de operaciones financieras, eliminando restrinciones de acceso a los diferentes servicios.';


    return (
        <div className='paginaPrincipal'>

            <CarruselComponent />

            <div>
                <Container className='m-5'>
                    <Row>
                        <Col md={8} className='d-flex flex-column  align-items-center'>
                            <h2>Transfermóvil</h2>
                            <p className='m-2 w-75 text-secondary'>
                                Aplicación que  ETECSA pone a tu disposición para facilitar tus pagos de servicios,
                                compras en línea, consultas y trámites bancarios y  la gestión de los servicios de telecomunicaciones.
                            </p>
                        </Col>
                        <Col md={4}>
                            <Image
                                src={etecsaImg}
                                rounded
                                width={300}
                                className='imgBoxShadow animate__rotateInUpLeft imgAnimate'
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
                    <h4 className="mb-5 text-white">
                        ¡Ya está TransferWeb!
                    </h4>
                    <p className="w-75 text-white">
                        Ahora podrá disfrutar de la efectividad de nuestros servicios en sus operaciones financieras.
                        <br />
                        Colocando la app en un entono al alcance de todos.
                    </p>
                </div>
            </div>
{/* 


            <Container>

                <h2 className='text-center mt-4'>Contáctanos</h2>

                <Form className='m-5'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Container>
 */}


        </div>
    )
}

export default Principal