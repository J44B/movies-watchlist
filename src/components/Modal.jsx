// Modal component taken from https://daisyui.com/components/modal/#dialog-modal-with-custom-width

import { useState } from 'react';
import { Button } from './Button';

export function Modal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <dialog id="modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <Button
                                name={''}
                                onClick={() => setShowModal(false)}
                            />
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
