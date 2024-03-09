import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function SectionComponent({ title, text, image, id = '' }) {
  return (
    <div id={id}>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col md={8} className='d-flex flex-column align-items-start'>
            <h3 className='text-success'>{title}</h3>
            <p className='m-2 w-75 text-secondary'>{text}</p>
          </Col>
          <Col md={4}>
            <Image src={image} rounded width={350} className='imgBoxShadow animate__rotateInUpLeft imgAnimate' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionComponent; 