// Main application component. Initializes layout and routing.

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage, MoviesWatchlist } from './pages/HomePage';

const router = createBrowserRouter([
    {
        path: '',
        element: (
            <>
                <MainLayout />
            </>
        ),
    },
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/watchlist',
        element: <MoviesWatchlist />,
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
