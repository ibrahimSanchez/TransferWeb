import { Routes, Route, Navigate } from 'react-router-dom';
import { ModificarUsuario } from '../pages/ModificarUsuario';
import Principal from '../pages/Principal';
import { ConsultarSaldo } from '../pages/consultas/ConsultarSaldo';
import ConsultarLimite from '../pages/consultas/ConsultarLimite';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { ListaTarjetas } from '../pages/ListaTarjetas';
import { PagarElectricidad } from '../pages/Pagos/PagarElectricidad';
import PagarONAT from '../pages/Pagos/PagarONAT'; '../pages/Pagos/PagarONAT';
import { PagarMultaContravension } from '../pages/Pagos/PagarMultaContravension';
import { PagarMultaTransito } from '../pages/Pagos/PagarMultaTransito';
import { PagarAgua } from '../pages/Pagos/PagarAgua';
import PagarTelefono from '../pages/Pagos/PagarTelefono';
import { ConsultarOperaciones } from '../pages/consultas/ConsultarOperaciones';
import { ConsultarServicio } from '../pages/consultas/ConsultarServicio';
import { RealizarTransferencia } from '../pages/operaciones/RealizarTransferencia';
import { ReacargarSaldoMovil } from '../pages/operaciones/ReacargarSaldoMovil';
import { RecargarNauta } from '../pages/operaciones/RecargarNauta';
import { CuentaContext } from '../context/CuentaContext';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/authContext';
import { getCuentas } from '../api/cuentas.api';
import { ListDetallesOperacionesComponent } from '../pages/resumenOperaciones/ListDetallesOperacionesComponent';
import { ListResumenComponent } from '../pages/resumenOperaciones/ListResumenComponent';
import { ListaServicios } from '../pages/servicios/ListaServicios';




export const RouterInterno = () => {

    const [cuentas, setCuentas] = useState([])

    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const [tarjetasMostrar, setTarjetasMostrar] = useState([]);

    const cargarCuentas = async () => {
        try {
            const resp = await getCuentas(tokenAccess);
            setCuentas(resp.data)
            setTarjetasMostrar(resp.data)
            // console.log(resp)
        } catch (error) {
            console.error("Error al cargar el usuario:", error);
        }
    }

    useEffect(() => {
        cargarCuentas();
    }, []);




    return (
        <>
            <NavBar />
            <CuentaContext.Provider value={{
                cuentas,
                setCuentas,
                setTarjetasMostrar,
                cargarCuentas,
                tarjetasMostrar

            }} >
                <Routes>

                    <Route path="principal" element={<Principal />} />
                    {/* <Route path="usuario" element={<UsuarioPage />} /> */}
                    <Route path="modificarusuario" element={<ModificarUsuario />} />
                    <Route path="listatarjetas" element={<ListaTarjetas />} />

                    <Route path="pagarelectricidad" element={<PagarElectricidad />} />
                    <Route path="pagaronat" element={<PagarONAT />} />
                    <Route path="pagarmultacontravension" element={<PagarMultaContravension />} />
                    <Route path="pagarmultatransito" element={<PagarMultaTransito />} />
                    <Route path="pagartelefono" element={<PagarTelefono />} />
                    <Route path="pagaragua" element={<PagarAgua />} />

                    <Route path="consultarsaldo" element={<ConsultarSaldo />} />
                    <Route path="consultarlimite" element={<ConsultarLimite />} />
                    <Route path="consultaroperaciones" element={<ConsultarOperaciones />} />
                    <Route path="consultarservicios" element={<ConsultarServicio />} />

                    <Route path="realizartransferencia" element={<RealizarTransferencia />} />
                    <Route path="recargarsaldo" element={<ReacargarSaldoMovil />} />
                    <Route path="recargarnauta" element={<RecargarNauta />} />

                    <Route path="detallesoperaciones" element={<ListDetallesOperacionesComponent />} />
                    <Route path="resumenoperaciones" element={<ListResumenComponent />} />

                    <Route path="listaservicios" element={<ListaServicios />} />

                    <Route path="/" element={<Navigate to="principal" />} />

                </Routes>

            </CuentaContext.Provider>

            <Footer />
        </>
    )
}
