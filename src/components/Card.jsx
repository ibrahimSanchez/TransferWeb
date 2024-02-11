import Card from 'react-bootstrap/Card';

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

export default CardComponent;

