import { useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../hooks/useItems';
import ItemCard from '../components/ItemCard';
import '../styles/shared.css';

const Tasks = () => {
    const { items: tareas, loading, error, createItem, toggleCompletada, deleteItem } = useItems('tareas');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [prioridad, setPrioridad] = useState('media');
    const [fechaLimite, setFechaLimite] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createItem({ titulo, descripcion, prioridad, fechaLimite: fechaLimite || undefined });
        setTitulo(''); setDescripcion(''); setPrioridad('media'); setFechaLimite('');
    };

    return (
        <div className="page-container">
            <h1>Tareas</h1>
            <Link to="/">← Volver</Link>

            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error.message}</p>}

            <ul>
                {tareas.map((tarea) => (
                    <ItemCard key={tarea._id} item={tarea} onToggle={toggleCompletada} onDelete={deleteItem}>
                        {tarea.descripcion && <p>{tarea.descripcion}</p>}
                        <span>Prioridad: {tarea.prioridad}</span>
                        {tarea.fechaLimite && <span>Límite: {new Date(tarea.fechaLimite).toLocaleDateString()}</span>}
                    </ItemCard>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
                <input type="date" value={fechaLimite} onChange={(e) => setFechaLimite(e.target.value)} />
                <button type="submit">Agregar tarea</button>
            </form>
        </div>
    );
};

export default Tasks;