import { useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../hooks/useItems';
import ItemCard from '../components/ItemCard';
import '../styles/shared.css';

const Appointments = () => {
    const { items: citas, loading, error, createItem, toggleCompletada, deleteItem } = useItems('citas-medicas');
    const [titulo, setTitulo] = useState('');
    const [doctor, setDoctor] = useState('');
    const [especialidad, setEspecialidad] = useState('General');
    const [fecha, setFecha] = useState('');
    const [lugar, setLugar] = useState('');
    const [notas, setNotas] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createItem({ titulo, doctor, especialidad, fecha, lugar, notas });
        setTitulo(''); setDoctor(''); setEspecialidad('General'); setFecha(''); setLugar(''); setNotas('');
    };

    return (
        <div className="page-container">
            <h1>Citas médicas</h1>
            <Link to="/">← Volver</Link>

            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error.message}</p>}

            <ul>
                {citas.map((cita) => (
                    <ItemCard key={cita._id} item={cita} onToggle={toggleCompletada} onDelete={deleteItem}>
                        <p>Dr/a. {cita.doctor} - {cita.especialidad}</p>
                        <span>{new Date(cita.fecha).toLocaleString()}</span>
                        {cita.lugar && <span>{cita.lugar}</span>}
                        {cita.notas && <p>{cita.notas}</p>}
                    </ItemCard>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Título / Motivo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                <input type="text" placeholder="Doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)} required />
                <input type="text" placeholder="Especialidad" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} />
                <input type="datetime-local" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                <input type="text" placeholder="Lugar / Consultorio" value={lugar} onChange={(e) => setLugar(e.target.value)} />
                <input type="text" placeholder="Notas" value={notas} onChange={(e) => setNotas(e.target.value)} />
                <button type="submit">Agregar cita</button>
            </form>
        </div>
    );
};

export default Appointments;