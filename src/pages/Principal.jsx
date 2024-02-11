import CardComponent from '../components/Card';
import CarruselComponent from '../components/Carrusel';
import '../css/principal.css';



const Principal = () => {

    const p = 'Te provee servicios para la realización de operaciones financieras, eliminando restrinciones de acceso a los diferentes servicios.';


    return (
        <div className='paginaPrincipal'>
            <CarruselComponent />


            <div className='m-5'>
                <CardComponent titulo='La Plataforma TransferWeb' texto={p} />
            </div>


        </div>
    )
}

export default Principal