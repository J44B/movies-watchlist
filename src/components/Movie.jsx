// Atomic design: card component

/* 
todos:
- outsourcing of button and badges
- button functionality
- make buttons and badges fit properly
- smaller cards with fitting images
*/

export function Movie({ data }) {
    return (
        <div className="card bg-[#514538] w-72 h-auto shadow-lg shadow-[#89b49f]">
            <figure>
                <img
                    src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                    alt={`Movie poster - ${data.title}`}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>

                <div className="card-action-container">
                    <div className="button-container flex flex-row justify-end align-baseline">
                        <button className="btn btn-active btn-neutral justify-end align-baseline">
                            Details
                        </button>
                    </div>
                    <div className="badge-container flex flex-row justify-start align-baseline">
                        <div className="badge badge-outline bg-[#89b49f] text-[#2f4858] font-bold">
                            {data.vote_average}
                        </div>
                        <div className="badge badge-outline">
                            {data.release_date.slice(0, 4)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
