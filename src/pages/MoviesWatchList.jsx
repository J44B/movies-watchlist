// Page Component: Shows watch list

// useState und map

// import { useState } from 'react';
// import { getFavorites } from '../modules/module-index';
// import { Movie } from '../components/components-index';

export function MoviesWatchList() {
    // const [favourites, setFavourites] = useState([]);

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-3xl mb-4">
                    The watchlist with my favourite movies
                </h1>
            </div>
            <div className="movies-container grid grid-cols-4 gap-4"></div>
            {/* Insert movie cards here, get data from local storage */}
            {/* <Movie key={favourites.id} data={favourites} /> */}
        </>
    );
}
