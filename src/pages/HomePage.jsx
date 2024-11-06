// Page Component: Shows Home Page

import { useState, useEffect } from 'react';
import { getPopularMovies } from '../modules/module-index';
import { Movie } from '../components/components-index';

export function HomePage() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await getPopularMovies();
                console.log(data);
                setPopularMovies(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getMovies();

        return () => {
            console.log('Cleanup function ran');
        };
    }, []);

    return (
        <>
            <h1 className="text-3xl mb-4">/HomePage/ - Popular movies</h1>
            <div className="movies-container grid grid-cols-4 gap-4">
                {popularMovies?.map((item) => (
                    <Movie key={item.id} data={item} />
                ))}
            </div>
        </>
    );
}
