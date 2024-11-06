// modules fetch

// fetch popular movies to populate HomePage

import { apiKey, baseUrl, popularMoviesUrl } from '../index';

export async function getPopularMovies() {
    const moviesUrl = baseUrl + popularMoviesUrl + apiKey;
    try {
        const response = await fetch(moviesUrl);
        if (!response.ok) {
            throw new Error('Request of popular movies failed');
        }

        const popularMovies = await response.json();
        console.log(popularMovies);
        return popularMovies;
    } catch (error) {
        console.error(error.message);
    }
}
