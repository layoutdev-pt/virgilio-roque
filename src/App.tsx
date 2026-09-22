import { Navigate, Outlet } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';
import Home from '@/pages/Home';
import History from '@/pages/about/History';
import Recruitment from '@/pages/about/Recruitment';
import Portfolio from '@/pages/Portfolio';
import CaseDetails from '@/pages/portfolio/CaseDetails';
import { Navbar } from '@/UI/layout/Navbar';
import { Footer } from '@/UI/layout/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from '@/UI/common/ScrollToTop';
import { CookieBanner } from '@/UI/common/CookieBanner';
import Contactos from '@/pages/Contactos';
import PrivacyPolicy from '@/pages/legal/PrivacyPolicy';
import Terms from '@/pages/legal/Terms';
import CookiesPolicy from '@/pages/legal/Cookies';

const Layout = () => (
  <HelmetProvider>
    <Helmet>
      <title>Virgílio Roque | Empresa de Construção de Obras Publicas e Privadas</title>
      <meta name="description" content="Especialistas como empresa de construção de obras públicas e privadas, executando projetos de excelência ao nível de novos edifícios residenciais e não residenciais." />
    </Helmet>
    <ScrollToTop />
    <div className="w-full max-w-[2560px] mx-auto min-h-screen pt-20 bg-background relative shadow-2xl">
      <Navbar />
      <CookieBanner />
      <Outlet />
      <Footer />
    </div>
  </HelmetProvider>
);

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <Navigate to="/sobre/historia" replace /> },
      { path: 'sobre/historia', element: <History /> },
      { path: 'sobre/recrutamento', element: <Recruitment /> },
      { path: 'portfolio', element: <Portfolio /> },
      { 
        path: 'portfolio/:id', 
        element: <CaseDetails />,
        getStaticPaths: () => {
          return [
            'cidade-nova', 
            'estacao-tortosendo', 
            'faculdade-medicina', 
            'erpi-do-peso', 
            'quinta-do-pinheiro'
          ].map(id => `/portfolio/${id}`);
        }
      },
      { path: 'contactos', element: <Contactos /> },
      { path: 'politica-privacidade', element: <PrivacyPolicy /> },
      { path: 'termos-e-condicoes', element: <Terms /> },
      { path: 'politica-cookies', element: <CookiesPolicy /> },
    ]
  }
];

export default routes;
