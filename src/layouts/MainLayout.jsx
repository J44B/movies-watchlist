import { Outlet } from 'react-router-dom';
import Header from '../components/common/components-index';

export default function MainLayout() {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <Header />
                <main className="container mx-auto">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
