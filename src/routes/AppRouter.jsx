import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaInicio } from '../pages/PaginaInicio';
import { RouterInterno } from './RouterInterno';
import { RutasPrivadas } from './RutasPrivadas';
import { RutasPublicas } from './RutasPublicas';





const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            
                <Route path="/inicio" element={
                    <RutasPublicas>
                        <PaginaInicio />
                    </RutasPublicas>
                } />
                
                <Route path="/*" element={
                    <RutasPrivadas >
                        <RouterInterno />
                    </RutasPrivadas>
                } />
            
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter