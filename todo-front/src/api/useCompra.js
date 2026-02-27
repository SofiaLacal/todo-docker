import { useState, useEffect } from 'react';

const useGetListaCompras = () => {
    const [compras, setCompras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompras = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/compras`);
                const data = await response.json();
                setCompras(data);

            } catch (error) {
                setError(error);

            } finally {
                setLoading(false);
            }
        };

        fetchCompras();
    }, []);

    return { compras, loading, error };
};

const useAddCompra = () => {
    const [compra, setCompra] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAddCompra = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/compras`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ compra }),
            });

            const data = await response.json();
            setCompra(data);

        } catch (error) {
            setError(error);

        } finally {
            setLoading(false);
        }
    };
    return { compra, loading, error, handleAddCompra };
};

const useUpdateCompra = () => {
    const [compra, setCompra] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleUpdateCompra = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/compras/${compra.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ compra }),
            });

            const data = await response.json();
            setCompra(data);

        } catch (error) {
            setError(error);

        } finally {
            setLoading(false);
        }
    };
    return { compra, loading, error, handleUpdateCompra };
};

const useDeleteCompra = () => {
    const [compra, setCompra] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleDeleteCompra = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/compras/${compra.id}`, {
                method: 'DELETE',
            });

        } catch (error) {
            setError(error);
            
        } finally {
            setLoading(false);
        }
    };
    return { compra, loading, error, handleDeleteCompra };
};

export default { useGetListaCompras, useAddCompra, useUpdateCompra, useDeleteCompra };