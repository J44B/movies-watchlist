// Atomic design: card component

export function Card() {
    return (
        <div className="card bg-[#514538] w-96 shadow-xl">
            <figure>
                <img src="" alt="movie picture from api" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Movie title from api</h2>
                <p>
                    Here goes the movie description, coming from the api. It
                    should be trimmed after n words.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-active btn-neutral">
                        prop to be set
                    </button>
                </div>
            </div>
        </div>
    );
}
