// Atomic design: card component

/* 
Todos:

GENERAL
- outsourcing of badges
- outsourcing of modal button
- outsourcing and better placement of favourite button
- smaller cards with fitting images > use another url!

MODAL
- get proper genres

FAV BUTTON
- Fill when movie is favourite
*/

import { convertReleaseDate, formatRating } from '../utils/utiliyFunctions';
import { addFavorite } from '../modules/module-index';

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
                {/* --------------------------- Begin favourite button --------------------------- */}
                <button
                    className="btn btn-xs mt-2 ml-2"
                    onClick={() => addFavorite(data)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </button>
                {/* --------------------------- End favourite button --------------------------- */}
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
