import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import RootLayout from './pages/RootLayout';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [{ index: true, element: <HomePage /> }],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
