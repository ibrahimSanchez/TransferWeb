import { CardListComponent } from "../components/CardListComponents";
import { BuscarComponent } from "../components/BuscarComponent";
import { useContext, useEffect, useState } from "react";
import { CuentaContext } from "../context/CuentaContext";





export const ListaTarjetas = () => {

    const { 
        cuentas,
        setTarjetasMostrar,
        tarjetasMostrar
    } = useContext(CuentaContext);

    const [buscar, setBuscar] = useState({
        campo: 'nombre',
        valor: ''
    });

    const { valor, campo } = buscar;


    useEffect(() => {
        let res = tarjetasMostrar

        if (campo === 'nombre') res = cuentas.filter(({ nombre }) => nombre.includes(valor));

        else if (campo === 'no_cuenta') res = cuentas.filter(({ no_cuenta }) => no_cuenta.includes(valor));

        else if (campo === 'tipo_cuenta') res = cuentas.filter(({ tipo_cuenta }) => tipo_cuenta.includes(valor));

        setTarjetasMostrar(res);

    }, [buscar]);


    return (
        <div className="mt-5">
            <BuscarComponent setBuscar={setBuscar} />
            <CardListComponent />
        </div>
    )
}
