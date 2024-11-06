// Atomic design: Button component

export function Button({ name }) {
    return (
        <div className="button-container">
            <button className="btn btn-active btn-neutral">{name}</button>
        </div>
    );
}
