import CarruselComponent from '../components/Carrusel';
import SectionComponent from '../components/SectionComponent';

import img1 from '../assets/carrusel1.png'

import '../css/principal.css';
import { ListDescriptionComponent } from '../components/ListDescriptionComponent';
import { CardAccesoDirectoComponent } from '../components/CardAccesoDirectoComponent';



const Principal = () => {

    const p = 'Te provee servicios para la realización de operaciones financieras, eliminando restrinciones de acceso a los diferentes servicios.';


    return (
        <div className='paginaPrincipal'>
            <CarruselComponent />

{/* 
            <div className="m-5">

                <CardAccesoDirectoComponent />

            </div> */}

        </div>
    )
}

export default Principal