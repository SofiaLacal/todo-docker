import { useState, useEffect } from 'react';

const useGetCitasMedicas = () => {
    const [citasMedicas, setCitasMedicas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCitasMedicas = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/citas-medicas`);
                const data = await response.json();
                setCitasMedicas(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCitasMedicas();
    }, []);
    return { citasMedicas, loading, error };
};

const useAddCitaMedica = () => {
    const [citaMedica, setCitaMedica] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleAddCitaMedica = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/citas-medicas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ citaMedica }),
            });
            const data = await response.json();
            setCitaMedica(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { citaMedica, loading, error, handleAddCitaMedica };
};

const useUpdateCitaMedica = () => {
    const [citaMedica, setCitaMedica] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleUpdateCitaMedica = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/citas-medicas/${citaMedica.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ citaMedica }),
            });
            const data = await response.json();
            setCitaMedica(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { citaMedica, loading, error, handleUpdateCitaMedica };
};

const useDeleteCitaMedica = () => {
    const [citaMedica, setCitaMedica] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleDeleteCitaMedica = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/citas-medicas/${citaMedica.id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return { citaMedica, loading, error, handleDeleteCitaMedica };
};

export default { useGetCitasMedicas, useAddCitaMedica, useUpdateCitaMedica, useDeleteCitaMedica };