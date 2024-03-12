import { CardListComponent } from "../components/CardListComponents"
import { BuscarComponent } from "../components/BuscarComponent"
// import { tarjetas } from '../data/data';
import { useContext, useEffect, useState } from "react";
import { CuentaContext } from "../context/CuentaContext";
import { getCuentas } from "../api/cuentas.api";
import { AuthContext } from "../auth/authContext";

export const ListaTarjetas = () => {


    const [cuentas, setCuentas] = useState([])


    const { usuario } = useContext(AuthContext);

    const { tokenAccess } = usuario;



    const [buscar, setBuscar] = useState({
        campo: 'nombre',
        valor: ''
    });

    const { valor, campo } = buscar;

    const [tarjetasMostrar, setTarjetasMostrar] = useState([]);


    useEffect(() => {
        let res = tarjetasMostrar
        
        if (campo === 'nombre') res = cuentas.filter(({ nombre }) => nombre.includes(valor));

        else if (campo === 'no_cuenta') res = cuentas.filter(({ no_cuenta }) => no_cuenta.includes(valor));

        else if (campo === 'tipo_cuenta') res = cuentas.filter(({ tipo_cuenta }) => tipo_cuenta.includes(valor));

        setTarjetasMostrar(res);

    }, [buscar]);


    // console.log(cuentas)
    
    const cargarCuentas = async () => {
        try {
            const resp = await getCuentas(tokenAccess);
            setCuentas(resp.data)
            setTarjetasMostrar(resp.data)
        } catch (error) {
            console.error("Error al cargar el usuario:", error);
        }
    }

    useEffect(() => {
        cargarCuentas();
    }, []);


    return (

        <CuentaContext.Provider value={{
            cuentas,
            setCuentas,
            setTarjetasMostrar

        }} >

            <div className="mt-5">

                <BuscarComponent setBuscar={setBuscar} />
                <CardListComponent tarjetas={tarjetasMostrar} />

            </div>
        </CuentaContext.Provider>

    )
}
