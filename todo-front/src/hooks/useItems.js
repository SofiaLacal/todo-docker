import { useState, useEffect } from 'react';

const API_URL = `${import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''}/api`;

const useItems = (endpoint) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchItems = async () => {
        try {
            const response = await fetch(`${API_URL}/${endpoint}`);
            const data = await response.json();
            setItems(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, [endpoint]);

    const createItem = async (body) => {
        try {
            await fetch(`${API_URL}/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            fetchItems();
        } catch (err) {
            setError(err);
        }
    };

    const toggleCompletada = async (item) => {
        try {
            await fetch(`${API_URL}/${endpoint}/${item._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completada: !item.completada }),
            });
            fetchItems();
        } catch (err) {
            setError(err);
        }
    };

    const deleteItem = async (id) => {
        try {
            await fetch(`${API_URL}/${endpoint}/${id}`, { method: 'DELETE' });
            fetchItems();
        } catch (err) {
            setError(err);
        }
    };

    return { items, loading, error, createItem, toggleCompletada, deleteItem };
};

export default useItems;