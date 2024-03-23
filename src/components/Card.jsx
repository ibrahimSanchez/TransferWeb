import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function CardComponent({ titulo = '', subTitulo = '', texto = '' }) {
    return (
        <Card className='cardDescripciones' style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Title className='text-success mb-4'> <h2> {titulo} </h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ subTitulo }</Card.Subtitle>
                <Card.Text>
                    {texto}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


CardComponent.propTypes = {
    titulo: PropTypes.string,
    subTitulo: PropTypes.string,
    texto: PropTypes.string
  }
  

export default CardComponent;

