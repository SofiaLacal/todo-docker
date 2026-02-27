import './ItemCard.css'

const ItemCard = ({ item, onToggle, onDelete, children }) => {
    return (
        <li className={`item-card ${item.completada ? 'completada' : ''}`}>
            <input
                className='input-button'
                type="checkbox"
                checked={item.completada}
                onChange={() => onToggle(item)}
            />
            <div className="item-content">
                <strong>{item.titulo}</strong>
                {children}
            </div>
            <button onClick={() => onDelete(item._id)}>Eliminar</button>
        </li>
    );
};

export default ItemCard;