import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Citas.css';

const API_URL = `${import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''}/api`;

const Citas = () => {
    const [citas, setCitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [doctor, setDoctor] = useState('');
    const [especialidad, setEspecialidad] = useState('General');
    const [fecha, setFecha] = useState('');
    const [lugar, setLugar] = useState('');
    const [notas, setNotas] = useState('');

    const fetchCitas = async () => {
        try {
            const response = await fetch(`${API_URL}/citas-medicas`);
            const data = await response.json();
            setCitas(data);

        } catch (err) {
            setError(err);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCitas();
    }, []);

    const handleAddCita = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${API_URL}/citas-medicas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    titulo,
                    doctor,
                    especialidad,
                    fecha,
                    lugar,
                    notas,
                }),
            });
            setTitulo('');
            setDoctor('');
            setEspecialidad('General');
            setFecha('');
            setLugar('');
            setNotas('');
            fetchCitas();

        } catch (err) {
            setError(err);
        }
    };

    const handleToggleCompletada = async (cita) => {
        try {
            await fetch(`${API_URL}/citas-medicas/${cita._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completada: !cita.completada }),
            });
            fetchCitas();

        } catch (err) {
            setError(err);
        }
    };

    const handleDeleteCita = async (id) => {
        try {
            await fetch(`${API_URL}/citas-medicas/${id}`, { method: 'DELETE' });
            fetchCitas();
            
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="citas-container">
            <h1>Citas médicas</h1>
            <Link to="/">Volver</Link>

            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error.message}</p>}

            <ul>
                {citas.map((cita) => (
                    <li key={cita._id} className={cita.completada ? 'completada' : ''}>
                        <input
                            type="checkbox"
                            checked={cita.completada}
                            onChange={() => handleToggleCompletada(cita)}
                        />
                        <div>
                            <strong>{cita.titulo}</strong>
                            <p>Dr/a. {cita.doctor} - {cita.especialidad}</p>
                            <span>{new Date(cita.fecha).toLocaleString()}</span>
                            {cita.lugar && <span> | {cita.lugar}</span>}
                            {cita.notas && <p>{cita.notas}</p>}
                        </div>
                        <button onClick={() => handleDeleteCita(cita._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleAddCita}>
                <input
                    type="text"
                    placeholder="Título / Motivo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Doctor"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Especialidad"
                    value={especialidad}
                    onChange={(e) => setEspecialidad(e.target.value)}
                />
                <input
                    type="datetime-local"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Lugar / Consultorio"
                    value={lugar}
                    onChange={(e) => setLugar(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Notas"
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                />
                <button type="submit">Agregar cita</button>
            </form>
        </div>
    );
};

export default Citas;
