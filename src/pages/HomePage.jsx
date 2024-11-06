// Page Component: Shows Home Page

import { Card } from '../components/components-index';

export function HomePage() {
    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-3xl mb-4">
                    Popular movies shown on the homepage
                </h1>
            </div>
            <div className="movies-container grid grid-cols-4 gap-4">
                <Card />
            </div>
        </>
    );
}
