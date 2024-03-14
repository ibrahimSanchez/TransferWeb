import CarruselComponent from '../components/Carrusel';
import SectionComponent from '../components/SectionComponent';

import img1 from '../assets/carrusel1.png'

import '../css/principal.css';
import { ListDescriptionComponent } from '../components/ListDescriptionComponent';



const Principal = () => {

    const p = 'Te provee servicios para la realización de operaciones financieras, eliminando restrinciones de acceso a los diferentes servicios.';


    return (
        <div className='paginaPrincipal'>
            <CarruselComponent />

{/* 
            <div className="container">

                <SectionComponent title='La Plataforma TransferWeb' text={p} image={img1} />
                <hr className='text-success' />


                <ListDescriptionComponent
                    title='Servicios'
                    descriptionTitle='Aki va una muela de descripciones y tal'
                    listItem={['hola', 'hola']}
                />

            </div> */}

        </div>
    )
}

export default Principal