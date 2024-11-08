// Page Component: Shows watch list

// useState and map

/* 
Todos

- Functionality
    - remove favorite
    - 
*/

import { useState } from 'react';
import { getFavourites } from '../modules/module-index';
import { Movie } from '../components/components-index';

export function MoviesWatchList() {
    const [favourites, setFavourites] = useState(getFavourites);
    console.log(favourites);

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-3xl mb-4">
                    The watchlist with my favourite movies
                </h1>
            </div>
            <div className="movies-container grid grid-cols-4 gap-4">
                {favourites?.map((movie) => (
                    <Movie key={movie.id} data={movie} />
                ))}
            </div>
        </>
    );
}
