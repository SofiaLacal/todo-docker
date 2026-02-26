import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_URL = `${import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''}/api`;

const Tareas = () => {
    const [tareas, setTareas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [prioridad, setPrioridad] = useState('media');
    const [fechaLimite, setFechaLimite] = useState('');

    const fetchTareas = async () => {
        try {
            const response = await fetch(`${API_URL}/tareas`);
            const data = await response.json();
            setTareas(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTareas();
    }, []);

    const handleAddTarea = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${API_URL}/tareas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    titulo,
                    descripcion,
                    prioridad,
                    fechaLimite: fechaLimite || undefined,
                }),
            });
            setTitulo('');
            setDescripcion('');
            setPrioridad('media');
            setFechaLimite('');
            fetchTareas();
        } catch (err) {
            setError(err);
        }
    };

    const handleToggleCompletada = async (tarea) => {
        try {
            await fetch(`${API_URL}/tareas/${tarea._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completada: !tarea.completada }),
            });
            fetchTareas();
        } catch (err) {
            setError(err);
        }
    };

    const handleDeleteTarea = async (id) => {
        try {
            await fetch(`${API_URL}/tareas/${id}`, { method: 'DELETE' });
            fetchTareas();
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="tareas-container">
            <h1>Tareas</h1>
            <Link to="/">Volver</Link>

            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error.message}</p>}

            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea._id} className={tarea.completada ? 'completada' : ''}>
                        <input
                            type="checkbox"
                            checked={tarea.completada}
                            onChange={() => handleToggleCompletada(tarea)}
                        />
                        <div>
                            <strong>{tarea.titulo}</strong>
                            {tarea.descripcion && <p>{tarea.descripcion}</p>}
                            <span>Prioridad: {tarea.prioridad}</span>
                            {tarea.fechaLimite && (
                                <span> | Límite: {new Date(tarea.fechaLimite).toLocaleDateString()}</span>
                            )}
                        </div>
                        <button onClick={() => handleDeleteTarea(tarea._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleAddTarea}>
                <input
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
                <input
                    type="date"
                    placeholder="Fecha límite"
                    value={fechaLimite}
                    onChange={(e) => setFechaLimite(e.target.value)}
                />
                <button type="submit">Agregar tarea</button>
            </form>
        </div>
    );
};

export default Tareas;
