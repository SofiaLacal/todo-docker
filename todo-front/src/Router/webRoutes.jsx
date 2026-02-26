import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Compra from '../pages/compra/Compra';
import Tareas from '../pages/tareas/Tareas';
import Citas from '../pages/citas/Citas';

export default function WebRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/compra" element={<Compra />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/citas" element={<Citas />} />
        </Routes>
    );
}