// Button component to add and remove favourites

/* 
Todos

- extract onClick handle
*/

import { addFavourite } from '../modules/module-index';
import { Heart } from './components-index';

function ButtonFavourite(data) {
    return (
        <>
            <button
                className="btn btn-xs mt-2 ml-2"
                onClick={() => addFavourite(data)}
            >
                <Heart />
            </button>
        </>
    );
}

export { ButtonFavourite };
