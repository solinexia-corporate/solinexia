import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../shared/components/layout/PublicLayout';
import LandingPage from '../features/landing/pages/LandingPage';
import ServicesPage from '../features/services/pages/ServicesPage';
import PricingPage from '../features/pricing/pages/PricingPage';
import ContactPage from '../features/contact/pages/ContactPage';
import PortfolioPage from '../features/portfolio/pages/PortfolioPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
