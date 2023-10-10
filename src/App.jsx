import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import RootLayout from './pages/RootLayout';
import CataloguePage from './pages/Catalogue';
import PaymentPage from './pages/Payment';
import AboutPage from './pages/About';
import ContactsPage from './pages/Contacts';
import FaqPage from './pages/Faq';
import SearchPage from './pages/Search';
import CorporatePage from './pages/Corporate';
import BouquetPage from './pages/Bouquet';

import './App.css';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: 'catalogue',
                    element: <CataloguePage />,
                },
                {
                    path: 'catalogue/:bouquetId',
                    id: 'bouquet-details',
                    element: <BouquetPage />,
                },
                { path: 'payment', element: <PaymentPage /> },
                { path: 'about', element: <AboutPage /> },
                { path: 'contacts', element: <ContactsPage /> },
                { path: 'faq', element: <FaqPage /> },
                { path: 'search', element: <SearchPage /> },
                { path: 'corporate', element: <CorporatePage /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
