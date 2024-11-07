// Main application component. Initializes layout and routing.

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout.jsx';
import { HomePage, MoviesWatchList } from './pages/pages-index.js';

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
                path: 'watchlist',
                element: <MoviesWatchList />,
            },
        ],
    },
]);

// const App = () => <RouterProvider router={router} />;

function App() {
    return <RouterProvider router={router} />;
}

export default App;
