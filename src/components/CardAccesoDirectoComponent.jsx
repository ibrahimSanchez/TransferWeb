import { Trash } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';




export const CardAccesoDirectoComponent = ({
    title = 'Title',
    subTitle = 'subTitle',
    text = 'text'
}) => {
    return (
        <Card style={{ width: '18rem' }} className='shadow border-0'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
                <Card.Text>
                    {text}
                </Card.Text>
                <button className='btn btn-outline-danger'>
                    <Trash />
                </button>
            </Card.Body>
        </Card>
    )
}
