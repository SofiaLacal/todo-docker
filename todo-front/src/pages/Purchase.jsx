import { useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../hooks/useItems';
import ItemCard from '../components/ItemCard';
import './shared.css';

const API_URL = `${import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''}/api`;

const Compra = () => {
  const { items: compras, loading, error, createItem, toggleCompletada, deleteItem } = useItems('compras');
  const [titulo, setTitulo] = useState('');
  const [cantidad, setCantidad] = useState('1');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem({ titulo, cantidad: Number(cantidad) || 1, categoria });
    setTitulo(''); setCantidad('1'); setCategoria('');
  };

  return (
    <div className="page-container">
      <h1>Lista de la compra</h1>
      <Link to="/">Volver</Link>

      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className='tables-container'>
        <ul>
          {compras.map((compra) => (
            <ItemCard key={compra._id} item={compra} onToggle={toggleCompletada} onDelete={deleteItem}>
              {compra.descripcion && <p>{compra.descripcion}</p>}
              <span>{compra.cantidad} | {compra.categoria}</span>
            </ItemCard>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          <input type="number" min="1" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
          <input type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
          <button type="submit">Agregar a compra</button>
        </form>
      </div>
    </div>
  );
};

export default Compra;