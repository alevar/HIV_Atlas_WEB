import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

const Layout: React.FC = () => (
  <>
    <Header />
    <Outlet />  {/* This will render the matched child route component */}
    <Footer />
  </>
);

const routes = [
  { 
    path: '/', 
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact_us', element: <ContactUs /> },
    ]
  }
];

const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;