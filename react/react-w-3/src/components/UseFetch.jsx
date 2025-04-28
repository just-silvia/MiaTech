import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        if (error) setError(false);

        if (!loading) setLoading(true);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            if (response.ok) {
                setData(await response.json());

                throw new Error("Error during data fetching, try again later")
            }

        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(loading) {
        return(
            <p>loading...</p>
        )
    }

    if(error) {
        return(
            <p>{error}</p>
        )
    }

    return { data, loading, error };
}

export default useFetch;