// Atomic design: card component

/* 
todos:
- outsourcing of badges
- button functionality
- smaller cards with fitting images
*/
import { forwardRef } from 'react';
import { Button, Modal } from './components-index';

export function Movie({ data }) {
    const modalRef = forwardRef();
    return (
        <div className="card bg-[#514538] w-72 h-auto shadow-lg shadow-[#89b49f]">
            <figure>
                <img
                    src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                    alt={`Movie poster - ${data.title}`}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-base">{data.title}</h2>

                <div className="card-action-container flex flex-row justify-between items-center">
                    <div className="badge-container flex flex-row gap-2 ">
                        <div className="badge badge-outline bg-[#89b49f] text-[#2f4858] font-bold">
                            {data.vote_average}
                        </div>
                        <div className="badge badge-outline">
                            {data.release_date.slice(0, 4)}
                        </div>
                    </div>
                    <Button
                        name={'Details'}
                        onClick={() => modalRef.current.showModal()}
                    />
                    <Modal ref={modalRef} />
                </div>
            </div>
        </div>
    );
}
