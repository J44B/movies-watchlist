// Page Component: Shows Home Page

/*
todos:
- proper loading state
- proper error state and handling
- nicer h1
*/

import { useState, useEffect } from 'react';
import { getPopularMovies } from '../modules/module-index';
import { Movie } from '../components/components-index';

export function HomePage() {
    const [popularMovies, setPopularMovies] = useState([]);

    // needs error state
    // needs loading state

    useEffect(() => {
        async function getMovies() {
            const data = await getPopularMovies();
            // console.log(data);
            setPopularMovies(data.results);
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
                {popularMovies?.map((movie) => (
                    <Movie key={movie.id} data={movie} />
                ))}
            </div>
        </>
    );
}
