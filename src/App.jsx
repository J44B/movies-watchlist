// Main application component. Initializes layout and routing.

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout.jsx';
import { HomePage } from './pages/pages-index.js';

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
    // {
    //     path: '/watchlist',
    //     element: <MoviesWatchlist />,
    // },
]);

const App = () => <RouterProvider router={router} />;

export default App;
