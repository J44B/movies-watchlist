// Atomic design: card component

export function Movie() {
    return (
        <div className="card bg-[#514538] w-72 h-auto shadow-xl">
            <figure>
                <img src="" alt="movie picture from api" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Movie title from api</h2>
                <p>
                    Here goes the movie description, coming from the api. It
                    should be trimmed after n words.
                </p>
                <div className="card-action-container">
                    <div className="button-container flex flex-row justify-end">
                        <button className="btn btn-active btn-neutral">
                            prop to be set
                        </button>
                    </div>
                    <div className="badge-container flex flex-row justify-start align-baseline">
                        <div className="badge badge-outline">avg. rating</div>
                        <div className="badge badge-outline">year</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
