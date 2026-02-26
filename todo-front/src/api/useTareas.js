import { useState, useEffect } from 'react';

const useGetTareas = () => {
    const [tareas, setTareas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTareas = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/tareas`);
                const data = await response.json();
                setTareas(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTareas();
    }, []);
    return { tareas, loading, error };
};

const useAddTarea = () => {
    const [tarea, setTarea] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleAddTarea = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/tareas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tarea }),
            });
            const data = await response.json();
            setTarea(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { tarea, loading, error, handleAddTarea };
};

const useUpdateTarea = () => {
    const [tarea, setTarea] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleUpdateTarea = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/tareas/${tarea.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tarea }),
            });
            const data = await response.json();
            setTarea(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { tarea, loading, error, handleUpdateTarea };
};

const useDeleteTarea = () => {
    const [tarea, setTarea] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleDeleteTarea = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/tareas/${tarea.id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { tarea, loading, error, handleDeleteTarea };
};

export default { useGetTareas, useAddTarea, useUpdateTarea, useDeleteTarea };