import { CardListComponent } from "../components/CardListComponents"
import { BuscarComponent } from "../components/BuscarComponent"
import { tarjetas } from '../data/data';
import { useEffect, useState } from "react";

export const ListaTarjetas = () => {

    const [buscar, setBuscar] = useState({
        campo: 'nombre',
        valor: ''
    });

    const { valor, campo } = buscar;

    const [tarjetasMostrar, setTarjetasMostrar] = useState(tarjetas);


    useEffect(() => {
        let res = tarjetasMostrar
        if(campo === 'nombre') res = tarjetas.filter(({ nombre }) => nombre.includes(valor));

        else if(campo === 'tarjeta') res = tarjetas.filter(({ tarjeta }) => tarjeta.includes(valor));

        else if(campo === 'telefono') res = tarjetas.filter(({ telefono }) => telefono.includes(valor));
    
        setTarjetasMostrar(res);

    },[buscar]);



    return (
        <div className="mt-5">

            <BuscarComponent setBuscar={setBuscar} />
            <CardListComponent tarjetas={tarjetasMostrar} />

        </div>
    )
}
