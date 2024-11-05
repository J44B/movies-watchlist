// Main application component. Initializes layout and routing.

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/common/Header';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/watchlist',
        element: <MoviesWatchlist />,
    },
]);
return (
    <>
        <Header />
    </>
);

const App = () => <RouterProvider router={router} />;

export default App;
