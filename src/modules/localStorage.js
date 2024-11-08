// functions to handle local storage

// get favourites from local storage

function getFavourites() {
    return JSON.parse(localStorage.getItem('movies')) || [];
}

// add favourite to local storage

function addFavourite(item) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    try {
        if (movies.some((x) => x.id === item.id))
            throw new Error('This movie is already a favourite of yours.');
        movies.push(item);
        localStorage.setItem('movies', JSON.stringify(movies));
        return movies;
    } catch (error) {
        alert(error);
    }
}

// remove favourite from local storage

function removeFavourite(item) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    movies = movies.filter((x) => x.id !== item.id);
    localStorage.setItem('movies', JSON.stringify(movies));
}

export { getFavourites, addFavourite, removeFavourite };
