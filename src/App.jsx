// Main application component. Initializes layout and routing.

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout.jsx';
import {
    HomePage,
    MoviesWatchList,
    MovieDetails,
} from './pages/pages-index.js';

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'movieswatchlist',
                element: <MoviesWatchList />,
            },
            {
                path: 'moviedetails',
                element: <MovieDetails />,
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
