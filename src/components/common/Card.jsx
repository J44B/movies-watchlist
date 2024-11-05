// Atomic design: card component

export function Card() {
    return (
        <div className="card bg-[#514538] w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Movie Title</h2>
                <p>
                    Here goes the movie description. It should be trimmed after
                    n words.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
}
