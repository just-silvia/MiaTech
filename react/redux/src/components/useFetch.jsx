import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Error during data fetching, try again later");
            }
            const json = await response.json();
            setData(json);
            setLoading(false);

        } catch (error) {
            setError(error.message);
            setLoading(false);
            setData(null);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;