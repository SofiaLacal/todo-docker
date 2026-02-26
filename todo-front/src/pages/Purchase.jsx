import { useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../hooks/useItems';
import ItemCard from '../components/ItemCard';
import '../styles/shared.css';

const Compra = () => {
    const { items: compras, loading, error, createItem, toggleCompletada, deleteItem } = useItems('compras');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('1');
    const [categoria, setCategoria] = useState('general');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createItem({ titulo, descripcion, precio: Number(precio), cantidad: Number(cantidad) || 1, categoria });
        setTitulo(''); setDescripcion(''); setPrecio(''); setCantidad('1'); setCategoria('general');
    };

    return (
        <div className="page-container">
            <h1>Compras</h1>
            <Link to="/">← Volver</Link>

            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error.message}</p>}

            <ul>
                {compras.map((compra) => (
                    <ItemCard key={compra._id} item={compra} onToggle={toggleCompletada} onDelete={deleteItem}>
                        {compra.descripcion && <p>{compra.descripcion}</p>}
                        <span>{compra.precio}€ x {compra.cantidad} | {compra.categoria}</span>
                    </ItemCard>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <input type="number" step="0.01" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                <input type="number" min="1" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                <input type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                <button type="submit">Agregar compra</button>
            </form>
        </div>
    );
};

export default Compra;