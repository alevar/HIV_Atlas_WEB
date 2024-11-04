import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

// Define a layout that includes the Footer
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
    element: <Layout />,  // Wrap routes with the layout
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact_us', element: <ContactUs /> },
    ]
  }
];

// Create the router with the basename
const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;