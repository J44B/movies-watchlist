// Atomic design: card component

/* 
Todos:

FUNCTIONS
- outsource 
    - handle button click


COMPONENTS
- modal > get proper genres
    - smaller cards with fitting images > use another url!
    - outsource
        - badges
        - modal button
        - favourite button
            - nicer placement (CSS position)
            - fill if movie is favourite
*/

import { convertReleaseDate, formatRating } from '../utils/utiliyFunctions';
import { ButtonFavourite } from '../components/components-index';

export function Movie({ data }) {
    return (
        <div className="card bg-[#514538] w-72 h-auto shadow-lg shadow-[#89b49f]">
            <div>
                <figure>
                    <img
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                        alt={`Movie poster - ${data.title}`}
                    />
                </figure>
                <ButtonFavourite data={data} />
            </div>
            <div className="card-body">
                <h2 className="card-title text-base">{data.title}</h2>
                <div className="card-action-container flex flex-row justify-between items-center">
                    <div className="badge-container flex flex-row gap-2 ">
                        <div className="badge badge-outline bg-[#89b49f] text-[#2f4858] font-bold">
                            {`${formatRating(data.vote_average)}`}
                        </div>
                        <div className="badge badge-outline">
                            {data.release_date.slice(0, 4)}
                        </div>
                    </div>
                    {/* --------------------------- Begin modal component with integrated button --------------------------- */}
                    <div>
                        <button
                            className="btn"
                            onClick={() =>
                                document
                                    .getElementById(`my_modal_${data.id}`)
                                    .showModal()
                            }
                        >
                            Details
                        </button>
                        <dialog id={`my_modal_${data.id}`} className="modal">
                            <div className="modal-box">
                                <figure>
                                    <img
                                        className="object-contain mb-4"
                                        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                                        alt={`Alternative movie poster - ${data.title}`}
                                    />
                                </figure>
                                <h3 className="font-bold text-lg">
                                    {data.title}
                                </h3>
                                <p className="py-4">{data.overview}</p>
                                <p className="py-4">
                                    {`Release date: ${convertReleaseDate(
                                        data.release_date
                                    )}`}
                                </p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    {/* --------------------------- End modal component with integrated button --------------------------- */}
                </div>
            </div>
        </div>
    );
}
