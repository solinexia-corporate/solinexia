import { createBrowserRouter } from "react-router-dom";
import ContactPage from "../features/contact/pages/ContactPage";
import LandingPage from "../features/landing/pages/LandingPage";
import PortfolioPage from "../features/portfolio/pages/PortfolioPage";
import PricingPage from "../features/pricing/pages/PricingPage";
import ServicesPage from "../features/services/pages/ServicesPage";
import NotFoundPage from "../pages/NotFoundPage";
import PublicLayout from "../shared/components/layout/PublicLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "realisations", element: <PortfolioPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
