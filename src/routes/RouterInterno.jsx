import { Routes, Route, Navigate } from 'react-router-dom';
import { UsuarioPage } from '../pages/UsuarioPage';
import { ModificarUsuario } from '../pages/ModificarUsuario';
import Principal from '../pages/Principal';
import { ConsultarSaldo } from '../pages/ConsultarSaldo';
import ConsultarLimite from '../pages/ConsultarLimite';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { ListaTarjetas } from '../pages/ListaTarjetas';
import { PagarElectricidad } from '../pages/Pagos/PagarElectricidad';
import PagarImpuestos from '../pages/Pagos/PagarImpuestos';
import { PagarMultaContravension } from '../pages/Pagos/PagarMultaContravension';
import { PagarMultaTransito } from '../pages/Pagos/PagarMultaTransito';
import PagarTelefono from '../pages/Pagos/PagarTelefono';






export const RouterInterno = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="principal" element={<Principal />} />
                <Route path="usuario" element={<UsuarioPage />} />
                <Route path="modificarusuario" element={<ModificarUsuario />} />
                <Route path="consultarsaldo" element={<ConsultarSaldo />} />
                <Route path="consultarlimite" element={<ConsultarLimite />} />
                <Route path="listatarjetas" element={<ListaTarjetas />} />

                <Route path="pagarelectricidad" element={<PagarElectricidad />} />
                <Route path="pagarimpuestos" element={<PagarImpuestos />} />
                <Route path="pagarmultacontravension" element={<PagarMultaContravension />} />
                <Route path="pagarmultatransito" element={<PagarMultaTransito />} />
                <Route path="pagartelefono" element={<PagarTelefono />} />

                <Route path="/" element={<Navigate to="principal" />} />
            </Routes>
            <Footer />
        </>
    )
}
