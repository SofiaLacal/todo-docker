import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Compra.css';

const API_URL = `${import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''}/api`;

const Compra = () => {
    const [compras, setCompras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [cantidad, setCantidad] = useState('1');
    const [categoria, setCategoria] = useState('general');

    const fetchCompras = async () => {
        try {
            const response = await fetch(`${API_URL}/compras`);
            const data = await response.json();
            setCompras(data);

        } catch (err) {
            setError(err);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCompras();
    }, []);

    const handleAddCompra = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${API_URL}/compras`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    titulo,
                    descripcion,
                    cantidad: Number(cantidad) || 1,
                    categoria,
                }),
            });
            setTitulo('');
            setDescripcion('');
            setCantidad('1');
            setCategoria('general');
            fetchCompras();

        } catch (err) {
            setError(err);
        }
    };

    const handleToggleCompletada = async (compra) => {
        try {
            await fetch(`${API_URL}/compras/${compra._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completada: !compra.completada }),
            });
            fetchCompras();

        } catch (err) {
            setError(err);
        }
    };

    const handleDeleteCompra = async (id) => {
        try {
            await fetch(`${API_URL}/compras/${id}`, { method: 'DELETE' });
            fetchCompras();

        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="compra-container">
            <h1>Compras</h1>
            <Link to="/">Volver</Link>

            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error.message}</p>}

            <ul>
                {compras.map((compra) => (
                    <li key={compra._id} className={compra.completada ? 'completada' : ''}>
                        <input
                            type="checkbox"
                            checked={compra.completada}
                            onChange={() => handleToggleCompletada(compra)}
                        />
                        <div>
                            <strong>{compra.titulo}</strong>
                            {compra.descripcion && <p>{compra.descripcion}</p>}
                            <span>
                                {compra.cantidad} | {compra.categoria}
                            </span>
                        </div>
                        <button onClick={() => handleDeleteCompra(compra._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleAddCompra}>
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
                <input
                    type="number"
                    min="1"
                    placeholder="Cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Categoría"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                />
                <button type="submit">Agregar compra</button>
            </form>
        </div>
    );
};

export default Compra;
