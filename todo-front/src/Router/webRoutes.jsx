import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Purchase from '../pages/Purchase'
import Tasks from '../pages/Tasks'
import Appointments from '../pages/Appointments'

export default function WebRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/compra" element={<Purchase />} />
            <Route path="/tareas" element={<Tasks />} />
            <Route path="/citas" element={<Appointments />} />
        </Routes>
    );
}