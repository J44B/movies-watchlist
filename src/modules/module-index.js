// -------------------------------------------- Begin import section  --------------------------------------------

import { getPopularMovies } from './fetchPopularMovies';
import { getFavourites, addFavourite, removeFavourite } from './localStorage';
import { handleFavourite } from './handleOnClick';

// -------------------------------------------- End import section  ----------------------------------------------

// -------------------------------------------- Begin export section  --------------------------------------------

export {
    getPopularMovies,
    getFavourites,
    addFavourite,
    removeFavourite,
    handleFavourite,
};

// -------------------------------------------- End export section  --------------------------------------------
