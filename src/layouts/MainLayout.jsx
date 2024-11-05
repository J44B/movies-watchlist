import { Outlet } from 'react-router-dom';
import { Header } from '../components/common/components-index';

export function MainLayout() {
    return (
        <>
            <div className="max-w-full">
                <Header />
                <main className="container max-w-7xl mx-auto">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
