// Page Component: Shows Home Page

import { useState, useEffect } from 'react';
import { getPopularMovies } from '../modules/module-index';
import { Movie } from '../components/components-index';

export function HomePage() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState(null); // needs error state
    const [loading, setLoading] = useState(false); // needs loading state

    useEffect(() => {
        async function getMovies() {
            setError('');
            setLoading(true);
            try {
                const data = await getPopularMovies();
                // if (!data.ok) {
                //     throw new Error(error);
                // }
                console.log(data);
                setPopularMovies(data.results);
            } catch (error) {
                setError('Request of popular movies failed');
            }

            if (loading)
                return (
                    <div
                        id="category-container"
                        className="flex gap-4 mt-2 flex-wrap justify-center"
                    >
                        Loading...
                    </div>
                );

            {
                setLoading(false);
            }
        }

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
