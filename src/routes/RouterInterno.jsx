import { Routes, Route, Navigate } from 'react-router-dom';
import { UsuarioPage } from '../pages/UsuarioPage';
import { SideBar } from '../components/SideBar';
import { ModificarUsuario } from '../pages/ModificarUsuario';
import Principal from '../pages/Principal';
import { ConsultarSaldo } from '../pages/ConsultarSaldo';
import ConsultarLimite from '../pages/ConsultarLimite';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';






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
                <Route path="/" element={<Navigate to="principal" />} />
            </Routes>
            <Footer />
        </>
    )
}
