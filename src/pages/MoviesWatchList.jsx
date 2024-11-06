// Page Component: Shows watch list

import { Movie } from '../components/components-index';

export function MoviesWatchList() {
    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-3xl mb-4">
                    My movies shown on my watch list
                </h1>
            </div>
            <div className="movies-container grid grid-cols-4 gap-4">
                <Movie />
            </div>
        </>
    );
}
