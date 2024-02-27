import Spinner from 'react-bootstrap/Spinner';

import '../css/modals.css';
import AlertComponent from './AlertComponent';


export const SpinnerComponent = ({ show, setShow }) => {

    const { modal, error } = show;

    
    return (
        <div className={`modal ${(modal || error) && 'd-flex'}`}>
            {
                !error &&
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }

            {
                error &&
                <AlertComponent show={error} setShow={setShow} detallesError='Credenciales incorrectos' />
            }


        </div>
    )
}
